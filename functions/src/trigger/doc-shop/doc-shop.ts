import {
  onDocumentCreated,
  onDocumentDeleted,
  onDocumentUpdated,
} from 'firebase-functions/v2/firestore';
import * as Repository from '../../repository/index';
import * as Db from '../../db';
import * as I from '../../interface';
import { logger } from 'firebase-functions/v2';
import * as Service from '../../service/index';

export const onShopCreate = onDocumentCreated(
  Db.Context.ShopConfiguration + '/{shopId}',
  async event => {
    const shopSnapshot = event.data;
    const shopData = !shopSnapshot ? null : shopSnapshot.data();
    const shop = shopData !== null ? (shopData as I.ShopConfigurationType) : null;
    if (shop !== null) {
      await insertIntoSystemAdminAssociatedShops(shop);
    }
  }
);

export const onShopUpdate = onDocumentUpdated(
  Db.Context.ShopConfiguration + '/{shopId}',
  async event => {
    const shopSnapshot = event.data;
    const afterData = !shopSnapshot?.after ? null : shopSnapshot.after.data();
    const beforeData = !shopSnapshot?.before ? null : shopSnapshot.before.data();

    const before = beforeData !== null ? (beforeData as I.ShopConfigurationType) : null;
    const after = afterData !== null ? (afterData as I.ShopConfigurationType) : null;

    if (after !== null && before !== null) {
      const change = await Service.Trigger.Shop.OnChange.getChangeDectection(before, after);
      const event = Service.Trigger.Shop.OnChange.getChangeAction(change);

      if (event.isActiveStatusChange) {
        logger.info('TODO - Active Status Changed', after);
      }

      if (event.isSendMsgClientShopInfoChange) {
        logger.info('TODO - Info Status Changed', after);
      }
      if (event.isResetRoster) {
        await resetShopUserRoster(after);
      }
    }
  }
);

export const onShopDelete = onDocumentDeleted(
  Db.Context.ShopConfiguration + '/{shopId}',
  async event => {
    const shopSnapshot = event.data;
    const shopData = !shopSnapshot ? null : shopSnapshot.data();
    const shop = shopData !== null ? (shopData as I.ShopConfigurationType) : null;
    if (shop !== null) {
      await deleteFromUserAssociatedShops(shop);
    }
  }
);

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
          activeFrom: new Date(),
          activeTo: null,
          active: true,
          displayInSystem: false,
          role: systemAdminRole,
        };
        admin.associatedShops.push(associated);
        admin.currentShopId =
          admin.currentShopId.length > 0 ? admin.currentShopId : associated.shopId;
        await Repository.User.updateSelectedUser(admin);
      });
    }
  } catch (error) {
    await Repository.Error.createErrorReport(
      shop,
      error,
      'update',
      'insertIntoSystemAdminAssociatedShops'
    );
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
        user.associatedShops.push(associated);
        await Repository.User.updateSelectedUser(user);
      }
    });
  }
};

const deleteFromUserAssociatedShops = async function (shop: I.ShopConfigurationType) {
  const users = await Repository.User.getAssociatedShopUsers(shop.id);

  try {
    if (users.length > 0) {
      for (const user of users) {
        user.associatedShops = user.associatedShops.filter(s => s.shopId !== shop.id);
        user.currentShopId =
          user.currentShopId === shop.id && user.associatedShops.length > 0
            ? user.associatedShops[0].shopId
            : '';

        await Repository.User.updateSelectedUser(user);
      }
    }
  } catch (error) {
    await Repository.Error.createErrorReport(
      shop,
      error,
      'update',
      'insertIntoSystemAdminAssociatedShops'
    );
  }
};
