import { onDocumentCreated, onDocumentDeleted, onDocumentUpdated } from 'firebase-functions/v2/firestore';
import * as Repository from '../../repository/index';
import * as Db from '../../db';
import * as Constant from '../../constant';
import * as Service from '../../service/index';
import * as I from '../../interface';
import * as admin from 'firebase-admin';
import { logger } from 'firebase-functions/v2';
export const onUserCreate = onDocumentCreated(Db.Context.User + '/{userId}', async event => {
  const userSnapshot = event.data;
  const userData = !userSnapshot ? null : userSnapshot.data();
  const user = userData !== null ? (userData as I.IUser) : null;

  if (user !== null) {
    await handleAuthenticationLogin(user, 'create');
    if (!user.isSystemAdmin) {
      await handleClaimUpdate(user);
    }
    await Service.User.AssociatedShop.Roster.generateDefaultSchedulesByCreate(user);
    await handleSystemAdminAccount(user);
  }
});

export const onUserUpdate = onDocumentUpdated(Db.Context.User + '/{userId}', async event => {
  const userSnapshot = event.data;
  const currentUserData = !userSnapshot?.after ? null : userSnapshot.after.data();
  const prevUserData = !userSnapshot?.before ? null : userSnapshot.before.data();

  let after = currentUserData !== null ? (currentUserData as I.IUser) : null;
  const before = prevUserData !== null ? (prevUserData as I.IUser) : null;

  if (after !== null && before !== null) {
    try {
      const change = Service.Trigger.User.OnChange.getChangeDectection(before, after);
      const event = Service.Trigger.User.OnChange.getChangeAction(change, after);
      logger.info(event);

      if (change.isLoginOptionChanged) {
        await handleAuthenticationLogin(before, 'delete');
        await handleAuthenticationLogin(after, 'create');
      }

      if (event.isAuthUpdate) {
        await handleAuthenticationLogin(after, 'update');
      }

      if (event.isUpdateClaim) {
        logger.info(
          `Before Current ShopId: ${before.currentShopId} | After Current ShopId: ${after.currentShopId}`
        );
        await handleClaimUpdate(after);
      }

      if (event.isCurrentShopRoleUpdate || event.isCurrentShopIdUpdate) {
        await handleCurrentShopRoleUpdate(after);
      }

      if (event.isSendMsgRosterChange) {
        logger.info('Roster Changed');
      }

      if (change.beforeActiveShopCount > change.afterActiveShopCount) {
        await handleDeleteSpecializedEmployeeInService(before, after);
        await handleDeleteSpecializedEmployeeInPackage(before, after);
      }

      if (event.isDeactiveAccount) {
        after = await handleDeactiveLogin(after);
      }
      if (event.isActivateAccount) {
        after = await handleActiveLogin(after);
      }

      await Service.User.AssociatedShop.Roster.manage(before, after);
    } catch (error) {
      logger.error(error);
      await Repository.Error.createErrorReport(after, error, 'update', 'onUserUpdate');
    }
  }
});

export const onUserDelete = onDocumentDeleted(Db.Context.User + '/{userId}', async event => {
  const userSnapshot = event.data;
  const userData = !userSnapshot ? null : userSnapshot.data();
  const user = userData !== null ? (userData as I.IUser) : null;

  if (user !== null) {
    await handleAuthenticationLogin(user, 'delete');
    await deleteUserFromScheduledConsults(user);
  }
});

export const deleteUserFromScheduledConsults = async function (user: I.IUser) {
  for (const associated of user.associatedShops) {
    const shopConfig = await Repository.Shop.Configuration.getSelectedConfig(associated.shopId);
    if (shopConfig !== null) {
      logger.info(`${shopConfig.name} | Employee Name: ${user.firstName} | deleted`);
      const currentShopTime = Service.Date.formatLocalDateTime(Service.Date.shopNow(shopConfig.timezone));
      const startOfDay = Service.Date.startDay(currentShopTime);
      const consults = await Repository.Shop.Consult.getEmployeesFutureScheduledStatuses(
        shopConfig.id,
        [associated.userId],
        startOfDay
      );
      await Repository.Shop.Consult.updateToAnyoneAwaitingStatus(consults);
      await Repository.Shop.Schedule.deleteDocumentByEmployeeId(shopConfig.id, associated.userId);
    }
  }
};

const handleDeleteSpecializedEmployeeInPackage = async function (before: I.IUser, after: I.IUser) {
  const beforeShops = before.associatedShops.filter(s => s.active);
  const afterShopsSet = new Set(after.associatedShops.filter(s => s.active).map(s => s.shopId));
  const removedShops = beforeShops.filter(shop => !afterShopsSet.has(shop.shopId));

  const promises = []; // To collect all promises

  for (let shop of removedShops) {
    const promise = Repository.Shop.Package.getSelectShop(shop.shopId).then(packages => {
      const adjustPackages = packages.filter(s => s.specializedEmployees.some(s => s.value === after.id));

      return Promise.all(
        adjustPackages.map(pack => {
          pack.specializedEmployees = pack.specializedEmployees.filter(s => s.value !== after.id);
          return Repository.Shop.Package.updatePackage(pack);
        })
      );
    });

    promises.push(promise);
  }
};

const handleDeleteSpecializedEmployeeInService = async function (before: I.IUser, after: I.IUser) {
  const beforeShops = before.associatedShops.filter(s => s.active);
  const afterShopsSet = new Set(after.associatedShops.filter(s => s.active).map(s => s.shopId));

  const removedShops = beforeShops.filter(shop => !afterShopsSet.has(shop.shopId));

  const promises = []; // To collect all promises

  for (let shop of removedShops) {
    const promise = Repository.Shop.Service.getSelectShop(shop.shopId).then(services => {
      const adjustServices = services.filter(s => s.specializedEmployees.some(s => s.value === after.id));

      return Promise.all(
        adjustServices.map(service => {
          service.specializedEmployees = service.specializedEmployees.filter(s => s.value !== after.id);
          return Repository.Shop.Service.updateService(service);
        })
      );
    });

    promises.push(promise);
  }

  await Promise.all(promises);
};

const handleCurrentShopRoleUpdate = async function (user: I.IUser) {
  const currentShop = user.associatedShops.find(s => s.shopId === user.currentShopId);

  if (currentShop !== undefined) {
    if (!currentShop.active) {
      user.currentShopId =
        user.associatedShops.filter(s => s.active).length > 0 ? user.associatedShops[0].shopId : '';
      await Repository.User.updateSelectedUser(user);
    }

    const claim = await getCurrentUserClaim(user);

    await Repository.Auth.Claim.update(user.id, claim);
  }
};

const handleAuthenticationLogin = async function (user: I.IUser, action: Constant.APIActionType) {
  const authenticationExisted = await Repository.Auth.Verify.isExistedUserById(user.id);
  try {
    if (user.loginOption.phoneNumber) {
      return await handlePhoneLoginOption(user, action, authenticationExisted);
    }
    if (user.loginOption.email) {
      return await handleEmailLoginOption(user, action, authenticationExisted);
    }
  } catch (error) {
    await Repository.Error.createErrorReport(user, error, action, 'handleAuthenticationLogin');
  }

  return false;
};

const handlePhoneLoginOption = async function (
  user: I.IUser,
  action: Constant.APIActionType,
  authenticationExisted: boolean
) {
  if (action === Constant.API.Action.Create && !authenticationExisted) {
    return await Repository.Auth.Phone.createPhoneLogin(user.id, user.phoneNumber);
  }
  if (action === Constant.API.Action.Update && authenticationExisted) {
    return await Repository.Auth.Phone.updatePhoneLogin(user.id, user.phoneNumber);
  }
  if (action === Constant.API.Action.Delete && authenticationExisted) {
    return await Repository.Auth.Phone.deletePhoneLogin(user.id);
  }
  return false;
};

const handleEmailLoginOption = async function (
  user: I.IUser,
  action: Constant.APIActionType,
  authenticationExisted: boolean
) {
  if (action === Constant.API.Action.Create && !authenticationExisted) {
    return await Repository.Auth.eMail.createEmailLogin(user.id, user.email, user.encryptedPassword);
  }
  if (action === Constant.API.Action.Update && authenticationExisted) {
    return await Repository.Auth.eMail.updateEmailLogin(user.id, user.email, user.encryptedPassword);
  }
  if (action === Constant.API.Action.Delete && authenticationExisted) {
    return await Repository.Auth.eMail.deleteEmailLogin(user.id);
  }
  return false;
};

const handleSystemAdminAccount = async function (user: I.IUser) {
  const systemAdminRole = await Repository.System.Role.getSystemAdmin();
  const allShops = await Repository.Shop.Configuration.getAll();

  if (user.isSystemAdmin && systemAdminRole !== null && allShops.length > 0) {
    user.associatedShops = transformToAssociatedShop(user, allShops, systemAdminRole);
    user.associatedShopIds = allShops.map(s => s.id);
    user.currentShopId = user.associatedShops.length > 0 ? user.associatedShops[0].shopId : '';
    const claim = await getCurrentUserClaim(user);
    await Repository.User.updateSelectedUser(user);
    await Repository.Auth.Claim.update(user.id, claim);
  }
};

const transformToAssociatedShop = function (
  admin: I.IUser,
  shopConfigs: I.ShopConfigurationType[],
  adminRole: I.RoleConfigurationType
) {
  return shopConfigs.map(config => {
    const associatedShop: I.UserAssociatedShopType = {
      userId: admin.id,
      shopId: config.id,
      role: adminRole,
      defaultRoster: config.operatingHours,
      activeFrom: Service.Date.shopTimeStamp(null),
      activeTo: null,
      active: true,
      displayInSystem: false,
    };
    return associatedShop;
  });
};

const handleClaimUpdate = async function (user: I.IUser) {
  const shop = await Repository.Shop.Configuration.getSelectedConfig(user.currentShopId);
  logger.info(`handleClaimUpdate - Current Shop:  ${shop !== null ? shop.name : 'No Name'} - Selected`);
  const claim = await getCurrentUserClaim(user);
  admin.auth().updateUser(user.id, { disabled: user.disabledAccount });
  await Repository.Auth.Claim.update(user.id, claim);
};

const getCurrentUserClaim = async function (user: I.IUser) {
  const currentShop = user.associatedShops.find(shop => user.currentShopId === shop.shopId);
  const claim: I.UserClaimType = {
    role: {
      isSystemAdmin: user.isSystemAdmin,
      isAdmin: false,
      isManager: false,
      isEmployee: false,
      isReception: false,
    },
    currentShopId: '',
    language: user.setting.preferLanguage,
    disableAccount: false,
  };

  claim.role = currentShop !== undefined ? currentShop.role.accessLevel : claim.role;
  claim.language = user.setting.preferLanguage;
  claim.currentShopId = currentShop !== undefined && currentShop !== null ? currentShop.shopId : '';
  return claim;
};

const handleDeactiveLogin = async function (user: I.IUser) {
  try {
    const claim = await getCurrentUserClaim(user);
    claim.role.isSystemAdmin = user.isSystemAdmin;
    claim.role.isAdmin = false;
    claim.role.isManager = false;
    claim.role.isReception = false;
    claim.role.isEmployee = false;
    await Repository.Auth.Claim.update(user.id, claim);
    return user;
  } catch (error) {
    await Repository.Error.createErrorReport(user, error, 'update', 'handleDeactiveLogin');
    return user;
  }
};

const handleActiveLogin = async function (user: I.IUser) {
  try {
    const claim = await getCurrentUserClaim(user);
    claim.disableAccount = false;
    admin.auth().updateUser(user.id, { disabled: claim.disableAccount });
    await Repository.Auth.Claim.update(user.id, claim);
    user.disabledAccount = claim.disableAccount;
    return user;
  } catch (error) {
    await Repository.Error.createErrorReport(user, error, 'update', 'handleDeactiveLogin');
    return user;
  }
};
