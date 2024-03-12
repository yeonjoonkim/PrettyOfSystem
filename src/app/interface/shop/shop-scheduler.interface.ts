import { Consult, GenderType, Payment, TimeZoneType } from '..';

export type ShopSchedulerDocumentType = {
  id: string;
  shopId: string;
  shopTimezone: string;
  activatedDate: string; //Activated Date
  currentDate: string; //CurrentDate;
  endDate: string; //StartOfDay + 90 with currentDate;
  isOpenToday: boolean;
  dayIndex: Day;
};

export type ShopScheduleDocumentType = {
  id: string;
  shopId: string;
  shopTimezone: TimeZoneType; //Australia/Brisbane
  employeeId: string;
  firstName: string;
  lastName: string;
  gender: GenderType;
  startOfDay: string; //yyyy-MM-dd'T'HH:mm:ss
  startDateTime: string; //yyyy-MM-dd'T'HH:mm:ss
  endDateTime: string; //yyyy-MM-dd'T'HH:mm:ss
  dayIndex: Day; //0-6
  isWorking: boolean;
  breakTimes: ShopEmployeeBreakTimeType[];
  consults: ShopEmployeeConsultType[];
  consultIds: string[];
  workHours: number; //Int
  breakHours: number; //Int
  displayInSystem: boolean;
  active: boolean;
};

export type ShopReservationScheduleResourceType = {
  name: string;
  data: ShopReservationScheduleResourceDataType[];
  field: 'id';
  valueField: 'id';
  textField: 'firstName';
};

export type ShopReservationScheduleResourceDataType = {
  id: string;
  firstName: string;
  info: ShopScheduleDocumentType;
};

export type ShopEmployeeBreakTimeType = {
  startDateTime: string; //yyyy-MM-dd'T'HH:mm:ss
  endDateTime: string; //yyyy-MM-dd'T'HH:mm:ss
};

export type ShopEmployeeBreakUpdateFinderType = {
  before: ShopEmployeeBreakTimeType;
  after: ShopEmployeeBreakTimeType;
};

export type ShopEmployeeConsultType = {
  consultId: string;
  clientId: string;
  clientName: string;
  status: Consult.StatusType;
  paymentStatus: Payment.StatusType;
  startOfDay: string; //yyyy-MM-dd'T'HH:mm:ss
  startDateTime: string; //yyyy-MM-dd'T'HH:mm:ss
  endDateTime: string; //yyyy-MM-dd'T'HH:mm:ss
};

export type ShopScheduleUpdateRequestDocumentType = {
  id: string;
  shopId: string;
  after: ShopScheduleDocumentType;
};
