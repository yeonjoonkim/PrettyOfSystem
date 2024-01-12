import { logger } from 'firebase-functions/v2';
import * as I from '../../../interface';
import * as Repository from '../../../repository/index';
import * as Date from '../../../service/date/service-date';
export const manage = async function (before: I.IUser, after: I.IUser) {
  const beforeAssociatedShops = before.associatedShops;
  const afterAssociatedShops = after.associatedShops;

  const changedDisplayBooking = afterAssociatedShops.filter(shop => {
    const beforeShop = beforeAssociatedShops.find(s => s.shopId === shop.shopId);
    return beforeShop ? beforeShop.displayInSystem !== shop.displayInSystem : false;
  });

  const changedShopIds = new Set(changedDisplayBooking.map(shop => shop.shopId));

  const deletedShops = beforeAssociatedShops
    .filter(shop => !afterAssociatedShops.some(s => s.shopId === shop.shopId))
    .filter(shop => !changedShopIds.has(shop.shopId));

  const combinedShops = [...changedDisplayBooking, ...deletedShops];

  for (const associated of combinedShops) {
    const shopConfig = await Repository.Shop.Configuration.getSelectedConfig(associated.shopId);
    if (shopConfig !== null) {
      logger.info(`${shopConfig.name} | Employee Name: ${after.firstName} | disabled display in booking`);
      const currentShopTime = Date.formatLocalDateTime(Date.shopNow(shopConfig.timezone));
      const startOfDay = Date.startDay(currentShopTime);
      const consults = await Repository.Shop.Consult.getEmployeesFutureScheduledStatuses(
        shopConfig.id,
        [associated.userId],
        startOfDay
      );
      await Repository.Shop.Consult.updateToAnyoneAwaitingStatus(consults);
    }
  }
};

export const deleteUser = async function (user: I.IUser) {
  for (const associated of user.associatedShops) {
    const shopConfig = await Repository.Shop.Configuration.getSelectedConfig(associated.shopId);
    if (shopConfig !== null) {
      logger.info(`${shopConfig.name} | Employee Name: ${user.firstName} | deleted`);
      const currentShopTime = Date.formatLocalDateTime(Date.shopNow(shopConfig.timezone));
      const startOfDay = Date.startDay(currentShopTime);
      const consults = await Repository.Shop.Consult.getEmployeesFutureScheduledStatuses(
        shopConfig.id,
        [associated.userId],
        startOfDay
      );
      await Repository.Shop.Consult.updateToAnyoneAwaitingStatus(consults);
    }
  }
};
