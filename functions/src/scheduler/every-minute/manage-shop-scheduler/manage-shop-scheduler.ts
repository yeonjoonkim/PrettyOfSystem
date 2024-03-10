import * as I from '../../../interface';
import * as DateSvc from '../../../service/date/service-date';
import * as Repository from '../../../repository/index';
import { logger } from 'firebase-functions/v2';

export const manage = async function (configs: I.SchedulerShopConfigurationType[]) {
  try {
    await start(configs);
  } catch (error) {
    logger.error(error);
    await Repository.Error.createErrorReport('', error, 'Sync', 'manage shop scheduler');
  }
};

const start = async function (configs: I.SchedulerShopConfigurationType[]) {
  logger.info(`---Manage Shop Scheduler`);
  const selection = configs.filter(c => c.isMidNight);
  logger.info(`${selection.length} has been selected`);

  for (const shop of selection) {
    const scheduler = await Repository.Shop.Scheduler.getDocumentByShopId(shop.config.id);
    logger.info(`${shop.config.name} - `, scheduler);

    const associatedEmployees = await Repository.User.getAssociatedShopUsers(shop.config.id);
    if (scheduler !== undefined && scheduler !== null) {
      const updated = getUpdateSchedulers(scheduler, shop);
      logger.info(`update`, updated);

      const promises = associatedEmployees.map(async emp => {
        const assoicatedShop = emp.associatedShops.find(associated => associated.shopId === updated.shopId);
        logger.info(`${emp.firstName} ${emp.lastName}'s Associated Shop`, assoicatedShop);

        if (assoicatedShop !== undefined) {
          const newDoc = Repository.Shop.Schedule.newDocument(
            assoicatedShop,
            updated.endDate,
            emp.firstName,
            emp.lastName,
            emp.gender,
            shop.config
          );

          logger.info(`${emp.firstName} ${emp.lastName}'s newDoc`, newDoc);
          return await Repository.Shop.Schedule.createDocument(newDoc);
        } else {
          return false;
        }
      });
      await Promise.all(promises);
      await Repository.Shop.Scheduler.updateDocument(updated);
    }
  }
};

const getUpdateSchedulers = function (s: I.ShopSchedulerDocumentType, shop: I.SchedulerShopConfigurationType) {
  s.currentDate = shop.today.start;
  s.endDate = DateSvc.addDay(s.endDate, 1);
  s.isOpenToday = DateSvc.isWorkingDate(shop.config.operatingHours, shop.today.start);
  s.dayIndex = shop.dayIndex;
  return s;
};
