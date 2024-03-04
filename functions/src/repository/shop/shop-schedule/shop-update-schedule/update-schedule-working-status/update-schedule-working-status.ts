import { firestore } from 'firebase-admin';
import { UpdateScheduleWorkingStatus } from '../../../../../db';
import * as Error from '../../../../error/error';

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
