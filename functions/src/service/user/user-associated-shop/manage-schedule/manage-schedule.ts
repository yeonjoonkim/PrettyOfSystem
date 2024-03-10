import * as I from '../../../../interface';
import * as DateSvc from '../../../date/service-date';
import * as C from '../../../../class';
import * as Repository from '../../../../repository/index';
import { logger } from 'firebase-functions/v2';

export const updateDocumentByRoster = async function (
  after: I.ShopWorkHoursType,
  doc: I.ShopScheduleDocumentType,
  shop: I.ShopConfigurationType
) {
  const dayType = DateSvc.getDayType(doc.startOfDay);
  const isShop24Hours = DateSvc.is24HoursByShopWorkHoursType(shop.operatingHours, doc.startOfDay);
  const isEmployee24Hours = DateSvc.is24HoursByShopWorkHoursType(after, doc.startOfDay);
  const startDateTime = DateSvc.getStartDateTimeByStartOfDay(after, doc.startOfDay);
  const endDateTime =
    isShop24Hours && isEmployee24Hours
      ? DateSvc.endDay(doc.startOfDay)
      : DateSvc.getEndDateTimeByStartOfDay(after, doc.startOfDay);
  const isWorking = DateSvc.getIsWorkingByStartOfDay(after, doc.startOfDay);

  //Updating
  let document = new C.ShopScheduleDocument(doc);
  document.startDateTime = startDateTime;
  document.endDateTime = endDateTime;
  document.isWorking = isWorking;
  document = overrideBreakTime(after[dayType].breakTimes, document);

  return await updateDocument(document);
};

export const updateDocument = async function (doc: C.ShopScheduleDocument) {
  const shopNow = DateSvc.shopNow(doc.shopTimezone);
  const currentDate = DateSvc.startDay(shopNow);
  const isDeactivated = !doc.active || !doc.displayInSystem;
  const isFutureDocument = currentDate <= doc.startOfDay;
  const wipeOutConsults = isDeactivated && doc.scheduledConsults.length > 0 && isFutureDocument;
  const isFuturecDocumentUpdated = doc.updated && isFutureDocument;

  if (!isDeactivated) {
    doc.removeBreakTimeOverlaps();
    doc.removeConsultOverlaps();
    doc.removeOutOfRangeBreakTime();
    doc.removeOutOfRangeConsult();
  }

  if (wipeOutConsults || (isFutureDocument && !doc.isWorking)) {
    for (const scheduled of doc.scheduledConsults) {
      doc.deleteConsult(scheduled.consultId);
    }
  }

  if (isFuturecDocumentUpdated) {
    if (doc.deletedConsult.length > 0) {
      await updateConsultToPendtingStatus(doc.data, doc.deletedConsult, isFutureDocument);
    }
  }

  getInfo(doc);
  return await Repository.Shop.Schedule.updateDocument(doc.data);
};

const updateConsultToPendtingStatus = async function (
  doc: I.ShopScheduleDocumentType,
  consults: I.ShopEmployeeScheduledConsultType[],
  isFuture: boolean
) {
  const consultIds = consults.map(consult => consult.consultId);
  const consultDocuments = await Repository.Shop.Consult.getDocumentsById(doc.shopId, consultIds);
  if (isFuture) {
    await Repository.Shop.Consult.updateToPendingStatus(consultDocuments);
  }
};

const overrideBreakTime = function (
  afterBreakTimes: I.ShopOperatingBreakType[],
  document: C.ShopScheduleDocument
) {
  document.breakTimes = [];
  //Override
  afterBreakTimes.length > 0
    ? afterBreakTimes
        .map(cmd => {
          const bt = {
            startDateTime: DateSvc.formatByTimeItem(document.startOfDay, cmd.start),
            endDateTime: DateSvc.formatByTimeItem(document.startOfDay, cmd.end),
          };
          return document.addBreak(bt);
        })
        .every(r => r)
    : false;

  return document;
};

const getInfo = function (doc: C.ShopScheduleDocument) {
  logger.info(`${doc.startOfDay}`);
  logger.info(`doc`, doc.data);
};

const findAddedBreakTimes = function (before: I.ShopOperatingBreakType[], after: I.ShopOperatingBreakType[]) {
  return after.filter(a => !before.some(b => b.id === a.id));
};

const findDeletedBreakTimes = function (before: I.ShopOperatingBreakType[], after: I.ShopOperatingBreakType[]) {
  return before.filter(b => !after.some(a => a.id === b.id));
};

const findUpdatedBreakTimes = function (before: I.ShopOperatingBreakType[], after: I.ShopOperatingBreakType[]) {
  const tempDate = new Date();
  const updated: I.ShopEmployeeBreakUpdateFinderType[] = [];
  const preExisingBefore = after
    .filter(a => before.some(b => b.id === a.id))
    .map(bt => {
      return {
        id: bt.id,
        startDateTime: DateSvc.formatByTimeItem(tempDate, bt.start),
        endDateTime: DateSvc.formatByTimeItem(tempDate, bt.end),
      };
    });
  const preExistingAfter = before
    .filter(a => after.some(b => b.id === a.id))
    .map(bt => {
      return {
        id: bt.id,
        startDateTime: DateSvc.formatByTimeItem(tempDate, bt.start),
        endDateTime: DateSvc.formatByTimeItem(tempDate, bt.end),
      };
    });

  for (const after of preExistingAfter) {
    const before = preExisingBefore.find(b => after.id === b.id);
    const hasUpdated =
      before !== undefined && before !== null
        ? after.startDateTime !== before.startDateTime || after.endDateTime !== before.endDateTime
        : false;

    if (before !== null && before !== undefined && hasUpdated) {
      updated.push({
        before: { startDateTime: before.startDateTime, endDateTime: before.endDateTime },
        after: {
          startDateTime: after.startDateTime,
          endDateTime: after.endDateTime,
        },
      });
    }
  }

  return updated;
};

export const compareBreakTimes = function (before: I.ShopOperatingBreakType[], after: I.ShopOperatingBreakType[]) {
  const added = findAddedBreakTimes(before, after);
  const deleted = findDeletedBreakTimes(before, after);
  const updated = findUpdatedBreakTimes(before, after);

  return { added, deleted, updated };
};
