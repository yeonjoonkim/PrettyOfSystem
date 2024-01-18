import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Service from '../../../service/index';
import * as Constant from '../../../constant';
import { logger } from 'firebase-functions/v2';

export const getEmployeesFutureScheduledStatuses = async function (
  shopid: string,
  employeeIds: string[],
  startOfDay: string
): Promise<I.ConsultDocumentType[]> {
  const snapshot = await firestore()
    .collection(Db.ShopConsult(shopid))
    .where('associatedEmployee.id', 'in', employeeIds)
    .where('scheduled', '!=', null)
    .where('scheduled.startOfDay', '>=', startOfDay)
    .where('status.type', 'in', Constant.Consult_FutureScheduledStatusTypes)
    .get();
  const docs = snapshot.docs.map(doc => {
    return Service.Override.Consult.Document.override(doc.data() as I.ConsultDocumentType);
  });

  return docs;
};

export const getEmployeeConsults = async function (shopid: string, employeeId: string) {
  const snapshot = await firestore()
    .collection(Db.ShopConsult(shopid))
    .where('associatedEmployee.id', '==', employeeId)
    .get();
  const docs = snapshot.docs.map(doc => {
    return Service.Override.Consult.Document.override(doc.data() as I.ConsultDocumentType);
  });

  return docs;
};

export const getEmployeeScheduledOfDay = async function (
  shopid: string,
  employeeId: string,
  startOfDay: string
): Promise<I.ConsultDocumentType[]> {
  const snapshot = await firestore()
    .collection(Db.ShopConsult(shopid))
    .where('associatedEmployee.id', '==', employeeId)
    .where('scheduled', '!=', null)
    .where('scheduled.startOfDay', '==', startOfDay)
    .where('status.type', 'in', Constant.Consult_ScheduledStatusTypes)
    .get();
  const docs = snapshot.docs.map(doc => {
    return Service.Override.Consult.Document.override(doc.data() as I.ConsultDocumentType);
  });

  return docs;
};

export const getInCompletedStatus = async function (
  shopid: string,
  createDateTime: string
): Promise<I.ConsultDocumentType[]> {
  const snapshot = await firestore()
    .collection(Db.ShopConsult(shopid))
    .where('createdDateTime', '<=', createDateTime)
    .where('status.type', 'in', Constant.Consult_InCompletedStatusTypes)
    .get();
  const docs = snapshot.docs.map(doc => {
    return Service.Override.Consult.Document.override(doc.data() as I.ConsultDocumentType);
  });
  return docs;
};

export const updateDocument = async function (doc: I.ConsultDocumentType) {
  const documentation = firestore().collection(Db.ShopConsult(doc.shopId)).doc(doc.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      await documentation.update(doc);
      return true;
    } catch (error) {
      logger.error('Update Shop Consult', error);
      return false;
    }
  } else {
    return false;
  }
};

export const updateToAnyoneAwaitingStatus = async function (consults: I.ConsultDocumentType[]) {
  const updatePromises = consults.map(async consult => {
    consult.associatedEmployee = {
      id: '',
      name: Constant.Default.Anyone,
    };
    consult.status = Constant.Consult_PendingStatus;
    return await updateDocument(consult);
  });

  const results = await Promise.all(updatePromises);
  return results.every(result => result === true);
};

export const updateToCancelStatus = async function (consults: I.ConsultDocumentType[]) {
  const updatePromises = consults.map(async consult => {
    consult.status = Constant.Consult_CancelStatus;
    return await updateDocument(consult);
  });

  const results = await Promise.all(updatePromises);
  return results.every(result => result === true);
};

export const updateToPendingStatus = async function (consults: I.ConsultDocumentType[]) {
  const updatePromises = consults.map(async consult => {
    consult.status = Constant.Consult_PendingStatus;
    return await updateDocument(consult);
  });

  const results = await Promise.all(updatePromises);
  return results.every(result => result === true);
};
