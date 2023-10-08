import {
  onDocumentCreated,
  onDocumentDeleted,
  onDocumentUpdated,
} from 'firebase-functions/v2/firestore';
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
    await handleSystemAdminAccount(user);
  }
});

export const onUserUpdate = onDocumentUpdated(Db.Context.User + '/{userId}', async event => {
  const userSnapshot = event.data;
  const currentUserData = !userSnapshot?.after ? null : userSnapshot.after.data();
  const prevUserData = !userSnapshot?.before ? null : userSnapshot.before.data();

  let current = currentUserData !== null ? (currentUserData as I.IUser) : null;
  const prev = prevUserData !== null ? (prevUserData as I.IUser) : null;

  if (current !== null && prev !== null) {
    try {
      const change = Service.Trigger.User.OnChange.getChangeDectection(prev, current);
      const event = Service.Trigger.User.OnChange.getChangeAction(change, current);

      if (change.isLoginOptionChanged) {
        await handleAuthenticationLogin(prev, 'delete');
        await handleAuthenticationLogin(current, 'create');
      }
      if (event.isAuthUpdate) {
        await handleAuthenticationLogin(current, 'update');
      }
      if (event.isDeactiveAccount) {
        current = await handleDeactiveLogin(current);
      }
      if (event.isActivateAccount) {
        current = await handleActiveLogin(current);
      }

      if (event.isCurrentShopRoleUpdate || event.isCurrentShopIdUpdate) {
        await handleCurrentShopRoleUpdate(current);
      }
      if (event.isUpdateClaim) {
        await handleClaimUpdate(current);
      }
      if (event.isSendMsgRosterChange) {
        logger.info('Roster Changed');
      }

      if (change.beforeActiveShopCount > change.afterActiveShopCount) {
        await handleDeleteSpecializedEmployee(prev, current);
      }
    } catch (error) {
      await Repository.Error.createErrorReport(current, error, 'update', 'onUserUpdate');
    }
  }
});

export const onUserDelete = onDocumentDeleted(Db.Context.User + '/{userId}', async event => {
  const userSnapshot = event.data;
  const userData = !userSnapshot ? null : userSnapshot.data();
  const user = userData !== null ? (userData as I.IUser) : null;

  if (user !== null) {
    await handleAuthenticationLogin(user, 'delete');
  }
});

const handleDeleteSpecializedEmployee = async function (before: I.IUser, after: I.IUser) {
  const beforeShops = before.associatedShops.filter(s => s.active);
  const afterShopsSet = new Set(after.associatedShops.filter(s => s.active).map(s => s.shopId));

  const removedShops = beforeShops.filter(shop => !afterShopsSet.has(shop.shopId));

  const promises = []; // To collect all promises

  for (let shop of removedShops) {
    const promise = Repository.Shop.Service.getSelectShop(shop.shopId).then(services => {
      const adjustServices = services.filter(s =>
        s.specializedEmployees.some(s => s.value === after.id)
      );

      return Promise.all(
        adjustServices.map(service => {
          service.specializedEmployees = service.specializedEmployees.filter(
            s => s.value !== after.id
          );
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

    const claim = getCurrentUserClaim(user);

    await Repository.Auth.Claim.update(user.id, claim);
  }
};

const handleDeactiveLogin = async function (user: I.IUser) {
  try {
    const claim = getCurrentUserClaim(user);
    claim.disableAccount = true;
    admin.auth().updateUser(user.id, { disabled: claim.disableAccount });
    await Repository.Auth.Claim.update(user.id, claim);
    user.disabledAccount = claim.disableAccount;
    return user;
  } catch (error) {
    await Repository.Error.createErrorReport(user, error, 'update', 'handleDeactiveLogin');
    return user;
  }
};

const handleActiveLogin = async function (user: I.IUser) {
  try {
    const claim = getCurrentUserClaim(user);
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
    return await Repository.Auth.eMail.createEmailLogin(
      user.id,
      user.email,
      user.encryptedPassword
    );
  }
  if (action === Constant.API.Action.Update && authenticationExisted) {
    return await Repository.Auth.eMail.updateEmailLogin(
      user.id,
      user.email,
      user.encryptedPassword
    );
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
    const claim = getCurrentUserClaim(user);
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
      roster: config.operatingHours,
      activeFrom: new Date(),
      activeTo: null,
      active: true,
      displayInSystem: false,
    };
    return associatedShop;
  });
};

const handleClaimUpdate = async function (user: I.IUser) {
  const claim = getCurrentUserClaim(user);
  admin.auth().updateUser(user.id, { disabled: user.disabledAccount });
  await Repository.Auth.Claim.update(user.id, claim);
};

const getCurrentUserClaim = function (user: I.IUser) {
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
    disableAccount: user.disabledAccount,
  };
  claim.role = currentShop !== undefined ? currentShop?.role.accessLevel : claim.role;
  claim.language = user.setting.preferLanguage;
  claim.currentShopId = user.currentShopId;
  return claim;
};
