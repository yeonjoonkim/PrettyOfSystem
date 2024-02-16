import * as I from '../../../../../interface';
import * as T from '../../../../type-checker/type-checker';
import * as Constant from '../../../../../constant';

export const override = function (doc: I.ShopScheduleDocumentType): I.ShopScheduleDocumentType {
  const result: I.ShopScheduleDocumentType = {
    id: T.string(doc?.id),
    shopTimezone: T.timezone(doc?.shopTimezone),
    shopId: T.string(doc?.shopId),
    employeeId: T.string(doc?.employeeId),
    firstName: T.string(doc?.firstName),
    lastName: T.string(doc?.lastName),
    gender: T.gender(doc?.gender),
    startOfDay: T.ISODate(doc?.startOfDay),
    startDateTime: T.ISODate(doc?.startDateTime),
    endDateTime: T.ISODate(doc?.endDateTime),
    dayIndex: T.dayIndex(doc?.dayIndex),
    isWorking: T.boolean(doc?.isWorking),
    breakTimes: shopEmployeeBreakTimeTypes(doc?.breakTimes),
    scheduledConsults: shopEmployeeScheduledConsultTypes(doc?.scheduledConsults),
    workHours: T.decimal(doc?.workHours, 2),
    breakHours: T.decimal(doc?.breakHours, 2),
    displayInSystem: T.boolean(doc?.displayInSystem),
    active: T.boolean(doc?.active),
  };
  return result;
};

const shopEmployeeBreakTimeTypes = function (bt: I.ShopEmployeeBreakTimeType[] | undefined | null) {
  return bt !== undefined && bt !== null
    ? bt.map(b => {
        const result: I.ShopEmployeeBreakTimeType = {
          startDateTime: T.ISODate(b?.startDateTime),
          endDateTime: T.ISODate(b?.endDateTime),
        };
        return result;
      })
    : [];
};

const shopEmployeeScheduledConsultTypes = function (
  consults: I.ShopEmployeeScheduledConsultType[] | undefined | null
) {
  return consults !== undefined && consults !== null
    ? consults.map(consult => {
        const result: I.ShopEmployeeScheduledConsultType = {
          consultId: T.string(consult?.consultId),
          clientId: T.string(consult?.clientId),
          clientName: T.string(consult?.clientName),
          status: status(consult?.status),
          startOfDay: T.ISODate(consult?.startOfDay),
          startDateTime: T.ISODate(consult?.startDateTime),
          endDateTime: T.ISODate(consult?.endDateTime),
        };
        return result;
      })
    : [];
};

const status = function (status: I.ConsultStatusType | undefined | null): I.ConsultStatusType {
  return status !== undefined && status !== null
    ? status
    : {
        type: Constant.Consult.StatusType.Cancel,
        description: Constant.Consult.StatusDescription.Cancel,
      };
};
