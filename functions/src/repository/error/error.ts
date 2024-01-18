import { firestore } from 'firebase-admin';
import * as Db from '../../db';
import * as Constant from '../../constant';

export const createErrorReport = async function (
  data: any,
  error: any,
  actionType: Constant.APIActionType,
  where: string
) {
  const errorData = { info: JSON.stringify(data), error: error, actionType: actionType, location: where };
  const docRef = firestore().collection(Db.Context.Report.FunctionError).doc();
  await docRef.set(errorData);
};
