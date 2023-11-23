import { firestore } from 'firebase-admin';
import * as Db from '../../db';
import * as I from '../../interface';
import * as Error from '../error/error';
import { logger } from 'firebase-functions/v2';

export const createUrlCriteria = async function async(config: I.ShopConfigurationType) {
  const criteria = urlCriteria(config);
  try {
    await firestore().collection(Db.Context.ShopOneTimeCheckInUrlCriteria).doc(criteria.id).set(criteria);
    logger.info(`${config.name} url has been saved`);
  } catch (error) {
    logger.error(error);
    await Error.createErrorReport({ criteria, name: config.name }, error, 'create', 'createUrlCriteria');
  }
};

export const upadteUrlCriteria = async function (config: I.ShopConfigurationType) {
  const criteria = urlCriteria(config);
  try {
    await firestore().collection(Db.Context.ShopOneTimeCheckInUrlCriteria).doc(criteria.id).update(criteria);
    logger.info(`${config.name} url has been updated`);
  } catch (error) {
    logger.error(error);
    await Error.createErrorReport({ criteria, name: config.name }, error, 'create', 'createUrlCriteria');
  }
};

export const deleteUrlCriteria = async function (config: I.ShopConfigurationType) {
  const criteria = urlCriteria(config);
  try {
    await firestore().collection(Db.Context.ShopOneTimeCheckInUrlCriteria).doc(criteria.id).delete();
    logger.info(`${config.name} url has been deleted`);
    return true;
  } catch (error) {
    logger.error(error);
    await Error.createErrorReport({ criteria, name: config.name }, error, 'delete', 'deleteUrlCriteria');
    return false;
  }
};

export const timeoutUrls = async function (currentTime: string) {
  const snapshot = await firestore()
    .collection(Db.Context.ShopOneTimeCheckInUrl)
    .where('expiredDate', '<=', currentTime)
    .get();
  return snapshot.docs.map(doc => {
    return doc.data() as I.ShopOneTimeCheckInUrl;
  });
};

export const deleteUrl = async function (doc: I.ShopOneTimeCheckInUrl) {
  try {
    await firestore().collection(Db.Context.ShopOneTimeCheckInUrl).doc(doc.id).delete();
    logger.info(`IpAddress: ${doc.ipAddress} | ShopId: ${doc.shopId} | Time: ${doc.expiredDate} has been deleted`);
  } catch (error) {
    logger.error(error);
    await Error.createErrorReport({ doc }, error, 'delete', 'deleteUrl');
  }
};

const urlCriteria = function async(config: I.ShopConfigurationType) {
  const result: I.ShopOneTimeCheckInUrlCriteria = {
    id: config.oneTimeCheckInUrlId,
    shopId: config.id,
    expiredTime: config.setting.qrCode.oneTimeCheckInUrlExpiryMin,
  };
  return result;
};
