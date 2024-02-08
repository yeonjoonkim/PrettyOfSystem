import { onDocumentCreated, onDocumentDeleted, onDocumentUpdated } from 'firebase-functions/v2/firestore';
import * as Repository from '../../repository/index';
import * as Db from '../../db';
import * as I from '../../interface';
import { logger } from 'firebase-functions/v2';
import * as Service from '../../service/index';
import { firestore } from 'firebase-admin';
import * as admin from 'firebase-admin';

export const onShopCreate = onDocumentCreated(Db.Context.ShopConfiguration + '/{shopId}', async event => {
  const shopSnapshot = event.data;
  const shopData = !shopSnapshot ? null : shopSnapshot.data();
  const shop = shopData !== null ? (shopData as I.ShopConfigurationType) : null;
  if (shop !== null) {
    await Repository.Session.WaitingList.createCriteria(shop);
    await Repository.Shop.Scheduler.createDocumentByShopConfiguration(shop);
    await insertIntoSystemAdminAssociatedShops(shop);
  }
});

export const onShopUpdate = onDocumentUpdated(Db.Context.ShopConfiguration + '/{shopId}', async event => {
  const shopSnapshot = event.data;
  const afterData = !shopSnapshot?.after ? null : shopSnapshot.after.data();
  const beforeData = !shopSnapshot?.before ? null : shopSnapshot.before.data();

  const before = beforeData !== null ? (beforeData as I.ShopConfigurationType) : null;
  const after = afterData !== null ? (afterData as I.ShopConfigurationType) : null;

  if (after !== null && before !== null) {
    const change = await Service.Trigger.Shop.OnChange.getChangeDectection(before, after);
    const event = Service.Trigger.Shop.OnChange.getChangeAction(change);

    await handleSessionChange(change, before, after);

    if (event.isActiveStatusChange) {
      logger.info('TODO - Active Status Changed', after);
    }

    if (event.isSendMsgClientShopInfoChange) {
      logger.info('TODO - Info Status Changed', after);
    }

    if (event.isResetRoster) {
      logger.info('Resetting Roster');
      await resetSchedulerTime(after);
      await Service.User.AssociatedShop.DefaultRosterByOperatingHours.manage(after);
    }

    if (event.isDeactivateInsurance) {
      await deactivateInsuranceServices(after.id);
    }

    if (event.isTranslatedRequestDelete) {
      const requests: string[] = before.translatedRequestIds.filter(s => !after.translatedRequestIds.includes(s));

      await handleDeleteTranslatedPackage(requests, after).then(async () => {
        await handleDeleteTranslatedRequest(requests);
      });
    }
  }
});

export const onShopDelete = onDocumentDeleted(Db.Context.ShopConfiguration + '/{shopId}', async event => {
  const shopSnapshot = event.data;
  const shopData = !shopSnapshot ? null : shopSnapshot.data();
  const shop = shopData !== null ? (shopData as I.ShopConfigurationType) : null;
  if (shop !== null) {
    await deleteCollection(Db.ShopService(shop.id));
    await deleteCollection(Db.ShopExtra(shop.id));
    await deleteCollection(Db.ShopPackage(shop.id));
    await deleteCollection(Db.ShopCoupon(shop.id));
    await deleteCollection(Db.ShopConsult(shop.id));
    await deleteCollection(Db.ShopPayment(shop.id));
    await Repository.TranslateRequest.deleteDocumentsByShopId(shop.id);
    await Repository.Session.WaitingList.deleteCriteria(shop);
    await deleteFromUserAssociatedShops(shop);
    await deleteStorage(Db.Storage.Shop.Logo(shop.id));
    await deleteStorage(Db.Storage.Shop.Image1(shop.id));
    await deleteStorage(Db.Storage.Shop.Image2(shop.id));
    await deleteStorage(Db.Storage.Shop.Image3(shop.id));
    await deleteFromVisitShop(shop);
    await Repository.Shop.Scheduler.deleteDocument(shop.id);
  }
});

const insertIntoSystemAdminAssociatedShops = async function (shop: I.ShopConfigurationType) {
  const systemAdminRole = await Repository.System.Role.getSystemAdmin();
  const systemAdmins = await Repository.User.getSystemAdmins();

  try {
    if (systemAdminRole !== null && systemAdmins.length > 0) {
      systemAdmins.map(async admin => {
        let associated: I.UserAssociatedShopType = {
          userId: admin.id,
          shopId: shop.id,
          defaultRoster: shop.operatingHours,
          activeFrom: Service.Date.shopTimeStamp(null),
          activeTo: null,
          active: true,
          displayInSystem: false,
          role: systemAdminRole,
        };
        admin.associatedShops.push(associated);
        admin.associatedShopIds.push(associated.shopId);
        admin.currentShopId = admin.currentShopId.length > 0 ? admin.currentShopId : associated.shopId;
        await Repository.User.updateSelectedUser(admin);
      });
    }
  } catch (error) {
    await Repository.Error.createErrorReport(shop, error, 'update', 'insertIntoSystemAdminAssociatedShops');
  }
};

async function deleteCollection(collectionPath: string) {
  const docs = await firestore().collection(collectionPath).listDocuments();
  for (let doc of docs) {
    await doc.delete();
  }
}

async function deleteStorage(storagePath: string) {
  const bucket = admin.storage().bucket();

  // Get a list of files under the specified storagePath
  const [files] = await bucket.getFiles({ prefix: storagePath });
  logger.info(files);
  // Create an array of promises to delete each file
  const deletePromises = files.map(file =>
    file.delete().catch(err => {
      logger.error(`Failed to delete file ${file.name}:`, err);
      return null;
    })
  );

  // Execute all of the file deletion promises
  await Promise.all(deletePromises);
}

const sleep = async (duration: number) => {
  return new Promise(resolve => setTimeout(resolve, duration));
};

const handleDeleteTranslatedRequest = async function (deletedIds: string[]) {
  for (let deleteReqeust of deletedIds) {
    await Repository.TranslateRequest.deleteDocumentById(deleteReqeust);
    await sleep(1000);
  }
};

const handleDeleteTranslatedPackage = async function (deletedIds: string[], after: I.ShopConfigurationType) {
  for (let deletedId of deletedIds) {
    const request = await Repository.TranslateRequest.getSelected(deletedId);
    if (request !== null) {
      for (let key in after.package) {
        if (key.includes(request.packageKey)) {
          delete after.package[key];
        }
      }
    }
  }

  await Repository.Shop.Configuration.updateConfig(after);
};

const deleteFromUserAssociatedShops = async function (shop: I.ShopConfigurationType) {
  const users = await Repository.User.getAssociatedShopUsers(shop.id);
  const systemAdmin = await Repository.User.getSystemAdmins();

  try {
    if (users.length > 0) {
      for (const user of users) {
        user.associatedShops = user.associatedShops.filter(s => s.shopId !== shop.id);
        user.associatedShopIds = user.associatedShopIds.filter(s => s !== shop.id);
        user.currentShopId =
          user.currentShopId === shop.id && user.associatedShops.length > 0 ? user.associatedShops[0].shopId : '';

        await Repository.User.updateSelectedUser(user);
      }
    }
    if (systemAdmin.length > 0) {
      for (const admin of systemAdmin) {
        admin.associatedShops = admin.associatedShops.filter(s => s.shopId !== shop.id);
        admin.associatedShopIds = admin.associatedShopIds.filter(s => s !== shop.id);
        admin.currentShopId =
          admin.currentShopId === shop.id && admin.associatedShops.length > 0
            ? admin.associatedShops[0].shopId
            : '';

        await Repository.User.updateSelectedUser(admin);
      }
    }
  } catch (error) {
    await Repository.Error.createErrorReport(shop, error, 'update', 'insertIntoSystemAdminAssociatedShops');
  }
};

const deleteFromVisitShop = async function (shop: I.ShopConfigurationType) {
  const users = await Repository.User.getVisitedShopUsers(shop.id);

  try {
    if (users.length > 0) {
      for (const user of users) {
        user.visitedShops = user.visitedShops.filter(s => s.shopId !== shop.id);
        user.visitedShopIds = user.visitedShopIds.filter(s => s !== shop.id);
        await Repository.User.updateSelectedUser(user);
      }
    }
  } catch (error) {
    await Repository.Error.createErrorReport(shop, error, 'update', 'insertIntoSystemAdminAssociatedShops');
  }
};

const handleSessionChange = async function (
  change: I.OnChangeShopType,
  before: I.ShopConfigurationType,
  after: I.ShopConfigurationType
) {
  if (change.session.isWaitingListRefresh) {
    await refeshWaitingList(before, after);
  }
  if (change.session.isWaitingListUpdate) {
    await Repository.Session.WaitingList.updateCriteria(after);
  }
};

const refeshWaitingList = async function (before: I.ShopConfigurationType, after: I.ShopConfigurationType) {
  const deleted = await Repository.Session.WaitingList.deleteCriteria(before);
  if (deleted) {
    await Repository.Session.WaitingList.createCriteria(after);
  }
};

const deactivateInsuranceServices = async function (shopId: string) {
  const service = await Repository.Shop.Service.getSelectShop(shopId);
  const pack = await Repository.Shop.Package.getSelectShop(shopId);
  const insurancedService = service.filter(s => s.isInsuranceCover);
  const insurancedPackage = pack.filter(s => s.isInsuranceCover);

  if (insurancedService.length > 0) {
    for (let service of insurancedService) {
      service.isInsuranceCover = false;
      await Repository.Shop.Service.updateService(service);
    }
  }

  if (insurancedPackage.length > 0) {
    for (let p of insurancedPackage) {
      p.isInsuranceCover = false;
      await Repository.Shop.Package.updatePackage(p);
    }
  }
};

const resetSchedulerTime = async function (config: I.ShopConfigurationType) {
  let scheduler = await Repository.Shop.Scheduler.getDocumentByShopId(config.id);
  if (scheduler !== null) {
    const isWorking = Service.Date.isWorkingDate(
      config.operatingHours,
      Service.Date.startDay(Service.Date.shopNow(config.timezone))
    );

    if (scheduler.isOpenToday !== isWorking) {
      scheduler.isOpenToday = isWorking;
      await Repository.Shop.Scheduler.updateDocument(scheduler);
    }
  }
};
