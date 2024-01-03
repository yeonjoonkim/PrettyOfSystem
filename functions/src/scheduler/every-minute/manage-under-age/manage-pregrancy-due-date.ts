import * as Repository from '../../../repository/index';
import { logger } from 'firebase-functions/v2';
import * as DateSvc from '../../../service/date/service-date';

export const manage = async function (timeStamp: string) {
  try {
    const serverTime = getServerDateTime(timeStamp);
    const officeTime = DateSvc.formatLocalDateTime(DateSvc.toShopDateTime(serverTime, 'Australia/Brisbane'));
    logger.info(`Under Age: Time - ${officeTime}`);
    const underAgeUsers = await Repository.User.getUnderAgeUsers();
    for (const user of underAgeUsers) {
      const duration = DateSvc.duration(user.dob, officeTime);
      logger.info(`${user.firstName} ${user.lastName} age: ${duration?.years}`);
      const isOver18 = duration.years !== undefined ? duration.years >= 18 : false;
      if (isOver18) {
        user.setting.parentSignature = null;
        await Repository.User.updateSelectedUser(user);
      }
    }
  } catch (error) {
    logger.error(error);
    await Repository.Error.createErrorReport(error, 'Could not run', 'update', 'Manage Under Age Users');
  }
};

const getServerDateTime = function (timeStamp: string) {
  const dateTime = new Date(timeStamp);
  return dateTime;
};
