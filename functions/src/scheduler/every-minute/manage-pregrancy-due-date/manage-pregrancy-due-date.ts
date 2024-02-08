import * as Repository from '../../../repository/index';
import { logger } from 'firebase-functions/v2';
import * as DateSvc from '../../../service/date/service-date';

export const manage = async function (timeStamp: string) {
  try {
    const serverTime = getServerDateTime(timeStamp);
    const officeTime = DateSvc.formatLocalDateTime(DateSvc.toShopDateTime(serverTime, 'Australia/Brisbane'));
    logger.info(`Pregancy Due: Time - ${officeTime}`);
    const PregrancyUsers = await Repository.User.getPregrancyUsers();
    for (const user of PregrancyUsers) {
      const GaveBrith =
        user.setting.pregnancyDueDate !== null ? user.setting.pregnancyDueDate < officeTime : false;
      if (GaveBrith) {
        user.setting.pregnancyDueDate = null;
        await Repository.User.updateSelectedUser(user);
        logger.info(`Pregancy Due: ${user.firstName} has been delivered new babies`);
      }
    }
  } catch (error) {
    logger.error(error);
    await Repository.Error.createErrorReport(error, 'Could not run', 'update', 'Manage Pregrancy Users');
  }
};

const getServerDateTime = function (timeStamp: string) {
  const dateTime = new Date(timeStamp);
  return dateTime;
};
