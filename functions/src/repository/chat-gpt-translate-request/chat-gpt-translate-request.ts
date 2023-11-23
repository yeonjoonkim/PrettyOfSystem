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

export const getSelected = async function (id: string): Promise<I.ChatGptTranslateDocumentType | null> {
  const docRef = firestore().collection(Db.Context.ChatGptTranslateRequest).doc(id);
  const docSnapshot = await docRef.get();

  if (!docSnapshot.exists) {
    logger.error(`Document with ID ${id} not found`);
    return null;
  } else {
    const data = docSnapshot.data() as I.ChatGptTranslateDocumentType;
    logger.info(`Retrieving Translate Request with ID: ${id}`);
    return data;
  }
};

export const getDocument = async function (
  serviceId: string,
  shopId: string,
  format: I.TextFormatType
): Promise<I.ChatGptTranslateDocumentType | null> {
  const querySnapshot = await firestore()
    .collection(Db.Context.ChatGptTranslateRequest)
    .where('format', '==', format)
    .where('serviceId', '==', serviceId)
    .where('shopId', '==', shopId)
    .limit(1)
    .get();

  if (querySnapshot.empty) {
    logger.error('There is no document found in ChatGptTranslateRequest');
    return null;
  } else {
    const docSnapshot = querySnapshot.docs[0];
    const data = docSnapshot.data() as I.ChatGptTranslateDocumentType;
    logger.error('Document found in ChatGptTranslateRequest');
    return data;
  }
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
    .where('status', '==', 'Completed')
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
    return request.id;
  } catch (error) {
    logger.error('Create Translate Request Failed', error);
    return false;
  }
};

export const create = async function (request: I.ChatGptTranslateDocumentType) {
  const documentationCollection = firestore().collection(Db.Context.ChatGptTranslateRequest).doc(request.id);

  try {
    await documentationCollection.set(request);
    return true;
  } catch (error) {
    logger.error('Create Translate Request Failed', error);
    return false;
  }
};

export const deleteDocument = async function (request: I.ChatGptTranslateDocumentType): Promise<boolean> {
  const documentation = firestore().collection(Db.Context.ChatGptTranslateRequest).doc(request.id);
  const data = await documentation.get();

  if (data.exists) {
    try {
      await documentation.delete();
      logger.info(`Deleted Translate Request with ID: ${request.id}`);
      return true;
    } catch (error) {
      logger.error('Delete Translate Request Failed', error);
      return false;
    }
  } else {
    logger.warn(`Document with ID ${request.id} not found`);
    return false;
  }
};

export const deleteDocumentsByShopId = async function (shopId: string): Promise<boolean> {
  const documentations = await firestore()
    .collection(Db.Context.ChatGptTranslateRequest)
    .where('shopId', '==', shopId)
    .get();

  if (!documentations.empty) {
    try {
      for (const doc of documentations.docs) {
        await doc.ref.delete();
      }
      logger.info(`Deleted documents for Shop ID: ${shopId}`);
      return true;
    } catch (error) {
      logger.error('Delete operation failed', error);
      return false;
    }
  } else {
    logger.info(`No documents found for Shop ID ${shopId}`);
    return true;
  }
};

export const deleteDocumentById = async function (id: string): Promise<boolean> {
  const documentation = firestore().collection(Db.Context.ChatGptTranslateRequest).doc(id);
  const data = await documentation.get();

  if (data.exists) {
    try {
      await documentation.delete();
      logger.info(`Deleted Translate Request with ID: ${id}`);
      return true;
    } catch (error) {
      logger.error('Delete Translate Request Failed', id);
      return false;
    }
  } else {
    logger.warn(`Document with ID ${id} not found`);
    return false;
  }
};
