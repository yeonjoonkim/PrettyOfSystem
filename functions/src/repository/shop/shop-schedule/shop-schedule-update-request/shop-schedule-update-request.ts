import { firestore } from 'firebase-admin';
import * as Db from '../../../../db';
import * as I from '../../../../interface';
import * as Error from '../../../error/error';
import * as Constant from '../../../../constant';
import { logger } from 'firebase-functions/v2';

export const getAll = async function (): Promise<I.ShopScheduleUpdateRequestDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.Context.ScheduleUpdateRequest).get();
  const docs = allSnapshot.docs.map(doc => {
    return doc.data() as I.ShopScheduleUpdateRequestDocumentType;
  });

  return docs;
};

export const getTransferedDocuments = async function (): Promise<I.ShopScheduleUpdateRequestDocumentType[]> {
  const snapshot = await firestore()
    .collection(Db.Context.ScheduleUpdateRequest)
    .where('status', '!=', Constant.API.Status.Pending)
    .get();

  return snapshot.docs.map(doc => {
    return doc.data() as I.ShopScheduleUpdateRequestDocumentType;
  });
};

export const hasBlockingRequest = async function (
  shopId: string,
  documentId: string,
  shopTimestamp: number
): Promise<boolean> {
  const data = await firestore()
    .collection(Db.Context.ScheduleUpdateRequest)
    .where('shopId', '==', shopId)
    .where('documentId', '==', documentId)
    .get();

  const documents = data.docs
    .map(doc => doc.data() as I.ShopScheduleUpdateRequestDocumentType)
    .filter(doc => doc.status === Constant.API.Status.Pending && doc.shopTimestamp < shopTimestamp);

  logger.info(documents);
  return documents.length > 0 ? true : false;
};

export const deleteDocument = async function (documentId: string): Promise<boolean> {
  const doc = firestore().collection(Db.Context.ScheduleUpdateRequest).doc(documentId);
  const data = await doc.get();

  if (data.exists) {
    try {
      await doc.delete();
      return true;
    } catch (error) {
      await Error.createErrorReport(documentId, error, 'delete', 'deleteDocument');
      return false;
    }
  } else {
    return false;
  }
};

export const requestSuccess = async function (doc: I.ShopScheduleUpdateRequestDocumentType) {
  try {
    doc.status = Constant.API.Status.Success;
    await firestore().collection(Db.Context.ScheduleUpdateRequest).doc(doc.id).update(doc);
    return true;
  } catch (error) {
    await Error.createErrorReport(document, error, 'update', 'updateSuccess');
    return false;
  }
};

export const requestFail = async function (doc: I.ShopScheduleUpdateRequestDocumentType) {
  try {
    doc.status = Constant.API.Status.Error;
    await firestore().collection(Db.Context.ScheduleUpdateRequest).doc(doc.id).update(doc);
    return true;
  } catch (error) {
    await Error.createErrorReport(document, error, 'update', 'requestFail');
    return false;
  }
};

export const requestBlocked = async function (doc: I.ShopScheduleUpdateRequestDocumentType) {
  try {
    doc.status = Constant.API.Status.Blocked;
    await firestore().collection(Db.Context.ScheduleUpdateRequest).doc(doc.id).update(doc);
    return true;
  } catch (error) {
    await Error.createErrorReport(document, error, 'update', 'requestBlocked');
    return false;
  }
};
