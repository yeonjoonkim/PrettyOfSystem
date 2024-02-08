import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Service from '../../../service/index';
import * as Error from '../../error/error';

export const getAll = async function (): Promise<I.ShopSchedulerDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.Context.ShopScheduler).get();
  const docs = allSnapshot.docs.map(doc => {
    return doc.data() as I.ShopSchedulerDocumentType;
  });

  return docs;
};

export const createDocumentByShopConfiguration = async function (config: I.ShopConfigurationType) {
  try {
    const document: I.ShopSchedulerDocumentType = {
      id: config.schedulerId,
      shopId: config.id,
      shopTimezone: config.timezone,
      activatedDate: Service.Date.startDay(Service.Date.shopNow(config.timezone)),
      currentDate: Service.Date.startDay(Service.Date.shopNow(config.timezone)),
      endDate: Service.Date.addMonth(Service.Date.startDay(Service.Date.shopNow(config.timezone)), 3),
      isOpenToday: Service.Date.isWorkingDate(
        config.operatingHours,
        Service.Date.startDay(Service.Date.shopNow(config.timezone))
      ),
      dayIndex: Service.Date.getDayIndex(Service.Date.startDay(Service.Date.shopNow(config.timezone))),
    };
    const doc = firestore().collection(Db.Context.ShopScheduler).doc(config.schedulerId);
    await doc.set(document);
    return true;
  } catch (error) {
    await Error.createErrorReport(document, error, 'create', 'createByShopConfiguration');
    return false;
  }
};

export const updateByStartOfDay = async function (shop: I.ShopConfigurationType, date: string) {
  const startOfDay = Service.Date.startDay(date);
  const document = await getDocumentByShopId(shop.id);
  if (document !== null) {
    document.currentDate = startOfDay;
    document.endDate = Service.Date.addDay(document.endDate, 1);
    document.dayIndex = Service.Date.getDayIndex(startOfDay);
    document.isOpenToday = Service.Date.isWorkingDate(shop.operatingHours, startOfDay);
    return await updateDocument(document);
  } else {
    return false;
  }
};

export const updateDocument = async function (doc: I.ShopSchedulerDocumentType) {
  try {
    await firestore().collection(Db.Context.ShopScheduler).doc(doc.id).update(doc);
    return true;
  } catch (error) {
    await Error.createErrorReport(document, error, 'create', 'createByShopConfiguration');
    return false;
  }
};

export const getDocumentByShopId = async function (shopId: string) {
  const snapshot = await firestore()
    .collection(Db.Context.ShopScheduler)
    .where('shopId', '==', shopId)
    .limit(1)
    .get();

  const docs = snapshot.docs.map(doc => {
    return doc.data() as I.ShopSchedulerDocumentType;
  });

  return docs.length > 0 ? docs[0] : null;
};

export const deleteDocument = async function (shopId: string) {
  const snapshot = await firestore().collection(Db.Context.ShopScheduler).where('shopId', '==', shopId).get();

  const docs = snapshot.docs.map(doc => {
    return doc.data() as I.ShopSchedulerDocumentType;
  });

  for (const doc of docs) {
    await firestore().collection(Db.Context.ShopScheduler).doc(doc.id).delete();
  }
};
