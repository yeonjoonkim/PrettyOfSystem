import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import { logger } from 'firebase-functions/v2';
import * as Error from '../../error/error';

export const getAll = async function (): Promise<I.SignatureTransferDocumentType[]> {
  const snapshots = await firestore().collection(Db.Context.SigantureTransfer).get();
  const allDocs = snapshots.docs.map(doc => {
    return doc.data() as I.SignatureTransferDocumentType;
  });

  return allDocs;
};

export const deleteDocument = async function (id: string): Promise<boolean> {
  try {
    const snapshot = await firestore().collection(Db.Context.SigantureTransfer).doc(id).get();
    const cmd = snapshot.exists ? await snapshot.ref.delete() : null;
    return cmd !== null;
  } catch (error) {
    logger.error(error);
    await Error.createErrorReport(id, error, 'delete', 'deleteDocumentSigantureTransfer');
    return false;
  }
};
