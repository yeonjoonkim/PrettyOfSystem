import * as Repository from '../../../../repository/index';
import { logger } from 'firebase-functions/v2';
import * as DateSvc from '../../../../service/date/service-date';

export const manage = async function (timeStamp: string) {
  try {
    logger.info(`--- Signature Transfer Manager`);
    const serverTime = getServerDateTime(timeStamp);
    const officeTime = DateSvc.formatLocalDateTime(DateSvc.toShopDateTime(serverTime, 'Australia/Brisbane'));
    const sessions = await Repository.Session.SigantureTransfer.getAll();
    const timeoutSessions = sessions.filter(s => s.expiredOfficeDateTime <= officeTime);
    const deletedSessions = [];

    if (timeoutSessions.length > 0) {
      for (const session of timeoutSessions) {
        const deleted = await Repository.Session.SigantureTransfer.deleteDocument(session.id);
        if (deleted) {
          deletedSessions.push(session);
        }
      }
    }
  } catch (error) {
    logger.error(error);
    await Repository.Error.createErrorReport(
      error,
      'Could not run',
      'update',
      'Manage Signature Transfer manager'
    );
  }
};

const getServerDateTime = function (timeStamp: string) {
  const dateTime = new Date(timeStamp);
  return dateTime;
};
