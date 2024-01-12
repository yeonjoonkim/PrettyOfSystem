import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Service from '../../../service/index';
import * as Constant from '../../../constant';
import { logger } from 'firebase-functions/v2';

export const ScheduledStatuses = [
  Constant.Consult.StatusType.Pending,
  Constant.Consult.StatusType.Awaiting,
  Constant.Consult.StatusType.Scheduled,
  Constant.Consult.StatusType.Start,
  Constant.Consult.StatusType.Completed,
];
export const FutureScheduledStatuses = [
  Constant.Consult.StatusType.Pending,
  Constant.Consult.StatusType.Awaiting,
  Constant.Consult.StatusType.Scheduled,
];
export const CompletedStatuses = [Constant.Consult.StatusType.Completed];
export const CancelStatuses = [Constant.Consult.StatusType.Cancel];

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
    .orderBy('scheduled.startDateTime', 'asc')
    .where('status.type', 'in', FutureScheduledStatuses)
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
  const updatePromises = consults.map(consult => {
    consult.associatedEmployee = {
      id: '',
      name: 'label.title.anyone',
    };
    consult.status = AwaitingStatus;
    return updateDocument(consult);
  });

  const results = await Promise.all(updatePromises);
  return results.every(result => result === true);
};

export const PendingStatus = {
  type: Constant.Consult.StatusType.Pending,
  description: Constant.Consult.StatusDescription.Pending,
};

export const AwaitingStatus = {
  type: Constant.Consult.StatusType.Awaiting,
  description: Constant.Consult.StatusDescription.Awaiting,
};

export const ScheduledStatus = {
  type: Constant.Consult.StatusType.Scheduled,
  description: Constant.Consult.StatusDescription.Scheduled,
};

export const StartStatus = {
  type: Constant.Consult.StatusType.Start,
  description: Constant.Consult.StatusDescription.Start,
};

export const CancelStatus = {
  type: Constant.Consult.StatusType.Cancel,
  description: Constant.Consult.StatusDescription.Cancel,
};
