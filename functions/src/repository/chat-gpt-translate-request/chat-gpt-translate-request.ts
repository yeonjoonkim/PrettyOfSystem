import { firestore } from 'firebase-admin';
import * as Db from '../../db';
import * as I from '../../interface';
import { logger } from 'firebase-functions/v2';

export const getAll = async function (): Promise<I.ChatGptTranslateDocumentType[]> {
  const snapshot = await firestore().collection(Db.Context.ChatGptTranslateRequest).get();
  const requests = snapshot.docs.map(doc => {
    const data = doc.data() as I.ChatGptTranslateDocumentType;
    return {
      ...data,
    };
  });
  logger.info('Retreiving All Translate Requests');
  return requests;
};

export const getPendings = async function (): Promise<I.ChatGptTranslateDocumentType[]> {
  const snapshot = await firestore()
    .collection(Db.Context.ChatGptTranslateRequest)
    .where('status', '==', 'pending')
    .get();

  const pendings = snapshot.docs.map(doc => {
    const data = doc.data() as I.ChatGptTranslateDocumentType;
    return {
      ...data,
    };
  });
  logger.info('Retreiving Pending Translate Requests');
  return pendings;
};

export const getCompletes = async function (): Promise<I.ChatGptTranslateDocumentType[]> {
  const snapshot = await firestore()
    .collection(Db.Context.ChatGptTranslateRequest)
    .where('status', '==', 'completed')
    .get();

  const completes = snapshot.docs.map(doc => {
    const data = doc.data() as I.ChatGptTranslateDocumentType;
    return {
      ...data,
    };
  });
  logger.info('Retreiving Completed Translate Requests');
  return completes;
};

export const updateDocument = async function (request: I.ChatGptTranslateDocumentType) {
  const documentation = firestore().collection(Db.Context.ChatGptTranslateRequest).doc(request.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      await documentation.update(request);
      return true;
    } catch (error) {
      logger.error('Update Translate Request Failed', error);
      return false;
    }
  } else {
    return false;
  }
};

export const createDocument = async function (request: I.ChatGptTranslateDocumentType) {
  const documentationCollection = firestore().collection(Db.Context.ChatGptTranslateRequest);
  const newDoc = documentationCollection.doc();

  try {
    request.id = newDoc.id;
    await newDoc.set(request);
    return true;
  } catch (error) {
    logger.error('Create Translate Request Failed', error);
    return false;
  }
};
