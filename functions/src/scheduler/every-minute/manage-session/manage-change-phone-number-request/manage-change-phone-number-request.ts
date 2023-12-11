import * as Repository from '../../../../repository/index';
import { logger } from 'firebase-functions/v2';
import * as DateSvc from '../../../../service/date/service-date';
import * as Constant from '../../../../constant';
import * as Service from '../../../../service/index';

export const manage = async function (timeStamp: string) {
  try {
    const serverTime = getServerDateTime(timeStamp);
    const officeTime = DateSvc.formatLocalDateTime(DateSvc.toShopDateTime(serverTime, 'Australia/Brisbane'));
    logger.info(`Change phone number Request Time: Time - ${officeTime}`);
    const timeoutDocs = await Repository.Session.ChangePhoneNumber.getTimeout(officeTime);

    for (const doc of timeoutDocs) {
      await Repository.Session.ChangePhoneNumber.deleteDocumentById(doc.id);
    }
    logger.info(`Change phone number: ${timeoutDocs.length} has been deleted`);

    await manageRequest();
  } catch (error) {
    logger.error(error);
    await Repository.Error.createErrorReport(error, 'Could not run', 'delete', 'Change phone number Request Time');
  }
};

const getServerDateTime = function (timeStamp: string) {
  const dateTime = new Date(timeStamp);
  return dateTime;
};

const manageRequest = async function () {
  const d = await Repository.Session.ChangePhoneNumber.getAll();

  const sendEmail =
    d !== undefined && d.length > 0
      ? d.filter(
          r =>
            r.status === Constant.ChangeNumberRequestStatus.Create ||
            (r.status === Constant.ChangeNumberRequestStatus.EmailFail && r.attempt < 3)
        )
      : [];
  const sumbit =
    d !== undefined && d.length > 0 ? d.filter(r => r.status === Constant.ChangeNumberRequestStatus.Submit) : [];

  if (sumbit.length > 0) {
    await Service.Scheduler.ChangePhoneNumber.start(sumbit);
  }
  if (sendEmail.length > 0) {
    await Service.Scheduler.ChangePhoneNumber.sendEmail(sendEmail);
  }
};
