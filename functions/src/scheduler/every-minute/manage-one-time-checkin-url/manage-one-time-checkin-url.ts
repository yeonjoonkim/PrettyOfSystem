import * as Repository from '../../../repository/index';
import { logger } from 'firebase-functions/v2';
import * as DateSvc from '../../../service/date/service-date';

export const manageOneTimeCheckInUrl = async function (timeStamp: string) {
  try {
    const serverTime = getServerDateTime(timeStamp);
    const officeTime = DateSvc.formatLocalDateTime(DateSvc.toShopDateTime(serverTime, 'Australia/Brisbane'));
    logger.info(`manageOneTimeCheckInUrl: Time - ${officeTime}`);
    const expiredUrls = await Repository.OneTimeCheckIn.timeoutUrls(officeTime);
    for (const url of expiredUrls) {
      await Repository.OneTimeCheckIn.deleteUrl(url);
    }
    logger.info(`manageOneTimeCheckInUrl: ${expiredUrls.length} has been deleted`);
  } catch (error) {
    logger.error(error);
    await Repository.Error.createErrorReport(error, 'Could not run', 'delete', 'manageOneTimeCheckInUrl');
  }
};

const getServerDateTime = function (timeStamp: string) {
  const dateTime = new Date(timeStamp);
  return dateTime;
};
