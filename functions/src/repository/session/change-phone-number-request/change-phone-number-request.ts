import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import { logger } from 'firebase-functions/v2';
import * as Error from '../../error/error';

export const getAll = async function (): Promise<I.ChangePhoneNumberRequestDocumentType[]> {
  const snapshot = await firestore().collection(Db.Context.ChangePhoneNumberRequest).get();
  const requests = snapshot.docs.map(doc => {
    const data = doc.data() as I.ChangePhoneNumberRequestDocumentType;
    return {
      ...data,
    };
  });
  logger.info('Retreiving All Change Phone Number Requests');
  return requests;
};

export const deleteDocument = async function (request: I.ChangePhoneNumberRequestDocumentType): Promise<boolean> {
  const documentation = firestore().collection(Db.Context.ChangePhoneNumberRequest).doc(request.id);
  const data = await documentation.get();

  if (data.exists) {
    try {
      await documentation.delete();
      logger.info(`Deleted Change Phone Number Request with ID: ${request.id}`);
      return true;
    } catch (error) {
      logger.error('Delete Change Phone Number Request Failed', error);
      return false;
    }
  } else {
    logger.warn(`Document with ID ${request.id} not found`);
    return false;
  }
};

export const getTimeout = async function (currentTime: string) {
  const snapshot = await firestore()
    .collection(Db.Context.ChangePhoneNumberRequest)
    .where('expiredDate', '<=', currentTime)
    .get();
  return snapshot.docs.map(doc => {
    return doc.data() as I.ChangePhoneNumberRequestDocumentType;
  });
};

export const deleteDocumentById = async function (id: string): Promise<boolean> {
  const documentation = firestore().collection(Db.Context.ChangePhoneNumberRequest).doc(id);
  const data = await documentation.get();

  if (data.exists) {
    try {
      await documentation.delete();
      logger.info(`Deleted Change Phone Number Request with ID: ${id}`);
      return true;
    } catch (error) {
      logger.error('Delete Change Phone Number Request Failed', id);
      return false;
    }
  } else {
    logger.warn(`Document with ID ${id} not found`);
    return false;
  }
};

export const upadteDocument = async function (doc: I.ChangePhoneNumberRequestDocumentType) {
  try {
    await firestore().collection(Db.Context.ChangePhoneNumberRequest).doc(doc.id).update(doc);
    logger.info(`${doc.id} has been updated`);
  } catch (error) {
    logger.error(error);
    await Error.createErrorReport(doc, error, 'update', 'upadteDocument');
  }
};
