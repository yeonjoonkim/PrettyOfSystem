import { firestore } from 'firebase-admin';
import { UpdateScheduleWorkingStatus } from '../../../../../db';
import * as Error from '../../../../error/error';
import * as I from '../../../../../interface';

export const deleteDocument = async function (shopId: string, documentId: string) {
  const snapshot = firestore().collection(UpdateScheduleWorkingStatus(shopId)).doc(documentId);
  const data = await snapshot.get();
  await snapshot.delete();

  if (data.exists) {
    try {
      return true;
    } catch (error) {
      await Error.createErrorReport({ id: documentId }, error, 'delete', 'deleteDocumentInRequest');
      return false;
    }
  } else {
    return false;
  }
};

export const getAll = async function (shopId: string) {
  try {
    const allSnapshot = await firestore().collection(UpdateScheduleWorkingStatus(shopId)).get();
    const docs = allSnapshot.docs.map(doc => {
      return doc.data() as I.ShopScheduleUpdateWorkingStatusDocumentType;
    });
    return docs;
  } catch (error) {
    await Error.createErrorReport('', error, 'Sync', 'getAllUpdateScheduleWorkingStatus');
    return [];
  }
};
