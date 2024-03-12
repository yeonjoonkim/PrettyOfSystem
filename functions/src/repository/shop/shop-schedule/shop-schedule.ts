import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Error from '../../error/error';
import * as Constant from '../../../constant';
import * as Scheduler from '../shop-scheduler/shop-scheduler';
import * as DateSvc from '../../../service/date/service-date';
import * as Override from '../../../service/override/index';
export const createDefaultSchedules = async function (
  associatedShop: I.UserAssociatedShopType,
  firstName: string,
  lastName: string,
  gender: I.GenderType,
  shop: I.ShopConfigurationType
) {
  const scheduler = await Scheduler.getDocumentByShopId(associatedShop.shopId);
  if (scheduler !== null) {
    const dateRange = DateSvc.getDateTimeRange(scheduler.activatedDate, scheduler.endDate);
    let schedules: I.ShopScheduleDocumentType[] = dateRange.map(date => {
      const document = newDocument(associatedShop, date, firstName, lastName, gender, shop);
      return document;
    });

    const promises = schedules.map(async doc => {
      return await createDocument(doc);
    });

    const result = await Promise.all(promises);
    return result.every(doc => doc === true);
  } else {
    await Error.createErrorReport(associatedShop, 'cannot create due to no scheduler', 'Sync', 'createTimeSheet');
    return false;
  }
};

export const newDocument = function (
  associatedShop: I.UserAssociatedShopType,
  startOfDay: string,
  firstName: string,
  lastName: string,
  gender: Constant.GenderType,
  shop: I.ShopConfigurationType
) {
  const dayIndex = DateSvc.getDayIndex(startOfDay);
  const isShop24Hours = DateSvc.is24HoursByShopWorkHoursType(shop.operatingHours, startOfDay);
  const isEmployee24Hours = DateSvc.is24HoursByShopWorkHoursType(associatedShop.defaultRoster, startOfDay);
  const startDateTime = DateSvc.getStartDateTimeByStartOfDay(associatedShop.defaultRoster, startOfDay);
  const endDateTime =
    isShop24Hours && isEmployee24Hours
      ? DateSvc.endDay(startOfDay)
      : DateSvc.getEndDateTimeByStartOfDay(associatedShop.defaultRoster, startOfDay);
  const isWorking = DateSvc.getIsWorkingByStartOfDay(associatedShop.defaultRoster, startOfDay);
  const breakTimes = DateSvc.getFormattedBreakTimes(associatedShop.defaultRoster, startOfDay);
  const workHours = DateSvc.getWorkHours(startDateTime, endDateTime, breakTimes);
  const breakHours = DateSvc.getBreakTimeHours(breakTimes);
  const schedule: I.ShopScheduleDocumentType = {
    id: '',
    shopId: associatedShop.shopId,
    shopTimezone: shop.timezone,
    employeeId: associatedShop.userId,
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    startOfDay: startOfDay,
    startDateTime: startDateTime,
    endDateTime: endDateTime,
    dayIndex: dayIndex,
    isWorking: isWorking,
    displayInSystem: associatedShop.displayInSystem,
    breakTimes: breakTimes,
    consults: [],
    consultIds: [],
    workHours: workHours,
    breakHours: breakHours,
    active: associatedShop.active,
  };
  return schedule;
};

export const updateDocumentByUser = function (
  displayInSystem: boolean,
  firstName: string,
  lastName: string,
  gender: Constant.GenderType,
  doc: I.ShopScheduleDocumentType
) {
  doc.firstName = firstName;
  doc.lastName = lastName;
  doc.gender = gender;
  doc.displayInSystem = displayInSystem;
  return doc;
};

export const updateDocumentByUserAndRoster = function (
  roster: I.ShopWorkHoursType,
  firstName: string,
  lastName: string,
  gender: Constant.GenderType,
  displayInSystem: boolean,
  active: boolean,
  doc: I.ShopScheduleDocumentType,
  shop: I.ShopConfigurationType
) {
  const dayIndex = DateSvc.getDayIndex(doc.startOfDay);
  const isShop24Hours = DateSvc.is24HoursByShopWorkHoursType(shop.operatingHours, doc.startOfDay);
  const isEmployee24Hours = DateSvc.is24HoursByShopWorkHoursType(roster, doc.startOfDay);
  const startDateTime = DateSvc.getStartDateTimeByStartOfDay(roster, doc.startOfDay);
  const endDateTime =
    isShop24Hours && isEmployee24Hours
      ? DateSvc.endDay(doc.startOfDay)
      : DateSvc.getEndDateTimeByStartOfDay(roster, doc.startOfDay);
  const isWorking = DateSvc.getIsWorkingByStartOfDay(roster, doc.startOfDay);
  const breakTimes = DateSvc.getFormattedBreakTimes(roster, doc.startOfDay);
  const breakHours = DateSvc.getBreakTimeHours(breakTimes);
  const workHours = DateSvc.getWorkHours(startDateTime, endDateTime, breakTimes);
  doc.dayIndex = dayIndex;
  doc.startDateTime = startDateTime;
  doc.endDateTime = endDateTime;
  doc.isWorking = isWorking;
  doc.breakTimes = breakTimes;
  doc.workHours = workHours;
  doc.breakHours = breakHours;
  doc.firstName = firstName;
  doc.lastName = lastName;
  doc.gender = gender;
  doc.displayInSystem = displayInSystem;
  doc.active = active;
  return doc;
};

export const getAll = async function (shopId: string): Promise<I.ShopScheduleDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.ShopSchedule(shopId)).get();
  const docs = allSnapshot.docs.map(doc => {
    return doc.data() as I.ShopScheduleDocumentType;
  });

  return docs;
};

export const getByEmployeeId = async function (shopId: string, employeeId: string) {
  try {
    const allSnapshot = await firestore()
      .collection(Db.ShopSchedule(shopId))
      .where('employeeId', '==', employeeId)
      .get();
    const docs = allSnapshot.docs.map(doc => {
      const document = doc.data() as I.ShopScheduleDocumentType;
      return Override.Shop.Document.Schedule.override(document);
    });

    return docs;
  } catch (error) {
    await Error.createErrorReport('', error, 'Sync', 'getScheduleByEmployeeId');
    return [];
  }
};

export const getByEmployeeIdFromStartDay = async function (shopId: string, employeeId: string, startDay: string) {
  try {
    const allSnapshot = await firestore()
      .collection(Db.ShopSchedule(shopId))
      .where('employeeId', Constant.Query.Equal, employeeId)
      .where('startOfDay', Constant.Query.GreaterThanOrEqual, startDay)
      .get();
    const docs = allSnapshot.docs.map(doc => {
      const document = doc.data() as I.ShopScheduleDocumentType;
      return Override.Shop.Document.Schedule.override(document);
    });
    return docs;
  } catch (error) {
    await Error.createErrorReport('', error, 'Sync', 'getScheduleByEmployeeIdFromStartDay');
    return [];
  }
};

export const getSelectedDay = async function (shopId: string, employeeId: string, startDay: string) {
  try {
    const allSnapshot = await firestore()
      .collection(Db.ShopSchedule(shopId))
      .where('employeeId', Constant.Query.Equal, employeeId)
      .where('startOfDay', Constant.Query.Equal, startDay)
      .limit(1)
      .get();
    const docs = allSnapshot.docs.map(doc => {
      const document = doc.data() as I.ShopScheduleDocumentType;
      return Override.Shop.Document.Schedule.override(document);
    });
    return docs.length > 0 ? docs[0] : null;
  } catch (error) {
    await Error.createErrorReport('', error, 'Sync', 'getSelectedScheduleByEmployeeId');
    return null;
  }
};

export const getById = async function (shopId: string, documentId: string) {
  try {
    const allSnapshot = await firestore()
      .collection(Db.ShopSchedule(shopId))
      .where('id', Constant.Query.Equal, documentId)
      .limit(1)
      .get();
    const docs = allSnapshot.docs.map(doc => {
      const document = doc.data() as I.ShopScheduleDocumentType;
      return Override.Shop.Document.Schedule.override(document);
    });
    return docs.length > 0 ? docs[0] : null;
  } catch (error) {
    await Error.createErrorReport('', error, 'Sync', 'getById');
    return null;
  }
};

export const getByDayIndexFromStartDay = async function (
  shopId: string,
  dayIndex: Day,
  employeeId: string,
  startDay: string
) {
  try {
    const allSnapshot = await firestore()
      .collection(Db.ShopSchedule(shopId))
      .where('employeeId', Constant.Query.Equal, employeeId)
      .where('startOfDay', Constant.Query.GreaterThanOrEqual, startDay)
      .where('dayIndex', Constant.Query.Equal, dayIndex)
      .get();
    const docs = allSnapshot.docs.map(doc => {
      const document = doc.data() as I.ShopScheduleDocumentType;
      return Override.Shop.Document.Schedule.override(document);
    });
    return docs;
  } catch (error) {
    await Error.createErrorReport('', error, 'Sync', 'getSelectedSchedulesByEmployeeIdAndDayIndexFromStartDay');
    return [];
  }
};

export const createDocument = async function (doc: I.ShopScheduleDocumentType) {
  try {
    const existing = await getSelectedDay(doc.shopId, doc.employeeId, doc.employeeId);
    if (existing !== null) {
      const documentRef = firestore().collection(Db.ShopSchedule(doc.shopId)).doc();
      doc.id = documentRef.id;
      await documentRef.set(doc);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    await Error.createErrorReport(document, error, 'update', 'createDocument');
    return false;
  }
};

export const updateDocument = async function (doc: I.ShopScheduleDocumentType) {
  try {
    await firestore().collection(Db.ShopSchedule(doc.shopId)).doc(doc.id).update(doc);
    return true;
  } catch (error) {
    await Error.createErrorReport(document, error, 'update', 'updateDocument');
    return false;
  }
};

export const updateDisplayInSystem = async function (shopId: string, docId: string, displayInSystem: boolean) {
  try {
    await firestore().collection(Db.ShopSchedule(shopId)).doc(docId).update({ displayInSystem });
    return true;
  } catch (error) {
    await Error.createErrorReport(document, error, 'update', 'updateDisplayInSystem');
    return false;
  }
};
export const deleteDocumentByEmployeeId = async function (shopId: string, employeeId: string) {
  const snapshot = await firestore()
    .collection(Db.ShopSchedule(shopId))
    .where('employeeId', Constant.Query.Equal, employeeId)
    .get();

  const docs = snapshot.docs.map(doc => {
    return doc.data() as I.ShopScheduleDocumentType;
  });

  for (const doc of docs) {
    await firestore().collection(Db.ShopSchedule(doc.shopId)).doc(doc.id).delete();
  }
};
