import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Error from '../../error/error';
import { logger } from 'firebase-functions/v2';

export const createCriteria = async function async(config: I.ShopConfigurationType) {
  const criteria = getCriteria(config);
  try {
    await firestore().collection(Db.Context.WaitingList.Criteria).doc(criteria.id).set(criteria);
    logger.info(`${config.name} url has been saved`);
  } catch (error) {
    logger.error(error);
    await Error.createErrorReport(
      { criteria, name: config.name },
      error,
      'create',
      'Waiting List - createUrlCriteria'
    );
  }
};

export const upadteCriteria = async function (config: I.ShopConfigurationType) {
  const criteria = getCriteria(config);
  try {
    await firestore().collection(Db.Context.WaitingList.Criteria).doc(criteria.id).update(criteria);
    logger.info(`${config.name} waiting list criteria has been updated`);
  } catch (error) {
    logger.error(error);
    await Error.createErrorReport({ criteria, name: config.name }, error, 'create', 'createUrlCriteria');
  }
};

export const deleteCriteria = async function (config: I.ShopConfigurationType) {
  const criteria = getCriteria(config);
  try {
    await firestore().collection(Db.Context.WaitingList.Criteria).doc(criteria.id).delete();
    logger.info(`${config.name} waiting list has been deleted`);
    return true;
  } catch (error) {
    logger.error(error);
    await Error.createErrorReport({ criteria, name: config.name }, error, 'delete', 'deleteUrlCriteria');
    return false;
  }
};

export const getTimeoutSessions = async function (currentTime: string) {
  const snapshot = await firestore()
    .collection(Db.Context.WaitingList.Session)
    .where('expiredDate', '<=', currentTime)
    .get();
  return snapshot.docs.map(doc => {
    return doc.data() as I.WaitingListSessionType;
  });
};

export const deleteSession = async function (doc: I.WaitingListSessionType) {
  try {
    await firestore().collection(Db.Context.WaitingList.Session).doc(doc.id).delete();
    logger.info(`IpAddress: ${doc.ipAddress} | ShopId: ${doc.shopId} | Time: ${doc.expiredDate} has been deleted`);
  } catch (error) {
    logger.error(error);
    await Error.createErrorReport({ doc }, error, 'delete', 'deleteUrl');
  }
};

const getCriteria = function async(config: I.ShopConfigurationType) {
  const result: I.WaitingListCriteriaType = {
    id: config.waitingListSessionId,
    shopId: config.id,
    expiredTime: config.setting.qrCode.waitingListSessionExiryMin,
  };
  return result;
};
