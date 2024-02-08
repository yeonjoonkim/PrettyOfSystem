import { ConsultStatusType, GenderType, TimeZoneType } from '..';

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
  scheduledConsults: ShopEmployeeScheduledConsultType[];
  workHours: number; //Int
  breakHours: number; //Int
  displayInSystem: boolean;
  active: boolean;
};

export type ShopEmployeeBreakTimeType = {
  startDateTime: string; //yyyy-MM-dd'T'HH:mm:ss
  endDateTime: string; //yyyy-MM-dd'T'HH:mm:ss
};

export type ShopEmployeeScheduledConsultType = {
  consultId: string;
  clientId: string;
  clientName: string;
  status: ConsultStatusType;
  startOfDay: string; //yyyy-MM-dd'T'HH:mm:ss
  startDateTime: string; //yyyy-MM-dd'T'HH:mm:ss
  endDateTime: string; //yyyy-MM-dd'T'HH:mm:ss
};
