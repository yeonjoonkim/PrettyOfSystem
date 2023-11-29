import * as Repository from '../../../../repository/index';
import { logger } from 'firebase-functions/v2';
import * as DateSvc from '../../../../service/date/service-date';

export const manage = async function (timeStamp: string) {
  try {
    const serverTime = getServerDateTime(timeStamp);
    const officeTime = DateSvc.formatLocalDateTime(DateSvc.toShopDateTime(serverTime, 'Australia/Brisbane'));
    logger.info(`Waiting List Manage Session: Time - ${officeTime}`);
    const expiredUrls = await Repository.Session.WaitingList.getTimeoutSessions(officeTime);
    for (const url of expiredUrls) {
      await Repository.Session.WaitingList.deleteSession(url);
    }
    logger.info(`Waiting List Manage Session: ${expiredUrls.length} has been deleted`);
  } catch (error) {
    logger.error(error);
    await Repository.Error.createErrorReport(error, 'Could not run', 'delete', 'Waiting List Manage Session');
  }
};

const getServerDateTime = function (timeStamp: string) {
  const dateTime = new Date(timeStamp);
  return dateTime;
};
