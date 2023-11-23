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
    await Repository.OneTimeCheckIn.createUrlCriteria(shop);
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

    if (change.isOTCheckInUpdate) {
      await Repository.OneTimeCheckIn.upadteUrlCriteria(after);
    }

    if (change.isOTCheckInURLRefresh) {
      await refeshOTCheckIn(before, after);
    }

    if (event.isActiveStatusChange) {
      logger.info('TODO - Active Status Changed', after);
    }

    if (event.isSendMsgClientShopInfoChange) {
      logger.info('TODO - Info Status Changed', after);
    }
    if (event.isResetRoster) {
      await resetShopUserRoster(after);
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
    await deleteFromUserAssociatedShops(shop);
    await deleteCollection(Db.ShopService(shop.id));
    await deleteCollection(Db.ShopExtra(shop.id));
    await deleteCollection(Db.ShopPackage(shop.id));
    await deleteCollection(Db.ShopCoupon(shop.id));
    await deleteStorage(Db.Storage.Shop.Logo(shop.id));
    await deleteStorage(Db.Storage.Shop.Image1(shop.id));
    await deleteStorage(Db.Storage.Shop.Image2(shop.id));
    await deleteStorage(Db.Storage.Shop.Image3(shop.id));
    await Repository.TranslateRequest.deleteDocumentsByShopId(shop.id);
    await Repository.OneTimeCheckIn.deleteUrlCriteria(shop);
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
          roster: shop.operatingHours,
          activeFrom: Service.Date.shopTimeStamp(null),
          activeTo: null,
          active: true,
          displayInSystem: false,
          role: systemAdminRole,
          nextWeekRoster: shop.operatingHours,
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
const resetShopUserRoster = async function (shop: I.ShopConfigurationType) {
  const associatedUsers = await Repository.User.getAssociatedShopUsers(shop.id);
  if (associatedUsers.length > 0) {
    associatedUsers.map(async user => {
      let associated = user.associatedShops.find(s => s.shopId === shop.id);
      if (associated !== undefined && associated !== null) {
        user.associatedShops = user.associatedShops.filter(s => s.shopId !== shop.id);
        associated.roster = shop.operatingHours;
        associated.nextWeekRoster = shop.operatingHours;
        user.associatedShops.push(associated);
        await Repository.User.updateSelectedUser(user);
      }
    });
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
  } catch (error) {
    await Repository.Error.createErrorReport(shop, error, 'update', 'insertIntoSystemAdminAssociatedShops');
  }
};

const refeshOTCheckIn = async function (before: I.ShopConfigurationType, after: I.ShopConfigurationType) {
  const deleted = await Repository.OneTimeCheckIn.deleteUrlCriteria(before);
  if (deleted) {
    await Repository.OneTimeCheckIn.createUrlCriteria(after);
  }
};
