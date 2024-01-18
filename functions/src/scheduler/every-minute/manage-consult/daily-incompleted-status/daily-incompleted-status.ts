import * as Repository from '../../../../repository/index';
import { logger } from 'firebase-functions/v2';
import * as DateSvc from '../../../../service/date/service-date';

export const manage = async function (timeStamp: string) {
  try {
    const serverTime = getServerDateTime(timeStamp);
    const officeTime = DateSvc.formatLocalDateTime(DateSvc.toShopDateTime(serverTime, 'Australia/Brisbane'));
    const allShopConfig = await Repository.Shop.Configuration.getAll();
    const midNightShops = allShopConfig.filter(config => {
      const shopTime = DateSvc.formatLocalDateTime(DateSvc.toShopDateTime(officeTime, config.timezone));
      return DateSvc.isMidNight(shopTime);
    });

    for (const config of midNightShops) {
      const shopTime = DateSvc.formatLocalDateTime(DateSvc.toShopDateTime(officeTime, config.timezone));
      const previousDay = DateSvc.addDay(shopTime, -1);
      const cutOffPoint = DateSvc.startDay(previousDay);
      const inCompletedConsults = await Repository.Shop.Consult.getInCompletedStatus(shopTime, cutOffPoint);

      if (inCompletedConsults.length > 0) {
        const updatedToCancel = await Repository.Shop.Consult.updateToCancelStatus(inCompletedConsults);
        logger.info(`${inCompletedConsults.length} has detected - ${updatedToCancel ? 'updated' : 'failed'}`);
      }
    }
  } catch (error) {
    logger.error(error);
    await Repository.Error.createErrorReport(error, 'Could not run', 'update', 'Manage Daily InCompleted Status');
  }
};

const getServerDateTime = function (timeStamp: string) {
  const dateTime = new Date(timeStamp);
  return dateTime;
};
