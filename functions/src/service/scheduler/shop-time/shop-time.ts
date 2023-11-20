import { logger } from 'firebase-functions/v2';
import * as I from '../../../interface';
import * as DateSvc from '../../date/service-date';
export const getConfigs = function (configs: I.ShopConfigurationType[], timeStamp: string) {
  const serverTime = getServerDateTime(timeStamp);
  runInfo(serverTime);
  return configs.map(c => {
    return convertSchedulerShopConfig(c, serverTime);
  });
};

const convertSchedulerShopConfig = function (config: I.ShopConfigurationType, serverTime: Date) {
  const shopDateTime = DateSvc.toShopDateTime(serverTime, config.timezone);
  //Day
  const today = DateSvc.formatLocalDateTime(shopDateTime);
  const previousDay = DateSvc.addDay(today, -1);
  const nextDay = DateSvc.addDay(today, 1);

  logger.info(`Name: ${config.name} | Timezone: ${config.timezone} | DateTime: ${today}`);
  const result: I.SchedulerShopConfigurationType = {
    config: config,
    shopDateTime: today,
    isMon: DateSvc.isMonday(today),
    isTue: DateSvc.isTuesday(today),
    isWed: DateSvc.isWednesday(today),
    isThu: DateSvc.isThursday(today),
    isFri: DateSvc.isFriday(today),
    isSat: DateSvc.isSaturday(today),
    isSun: DateSvc.isSunday(today),
    isMidNight: DateSvc.isMidNight(today),
    today: {
      start: DateSvc.startDay(today),
      end: DateSvc.endDay(today),
    },
    previousDay: {
      start: DateSvc.startDay(previousDay),
      end: DateSvc.endDay(previousDay),
    },
    nextDay: {
      start: DateSvc.startDay(nextDay),
      end: DateSvc.endDay(nextDay),
    },
    currentMonth: {
      start: DateSvc.startDay(DateSvc.startMonth(today)),
      end: DateSvc.endDay(DateSvc.endMonth(today)),
    },
  };

  return result;
};

export const getServerDateTime = function (timeStamp: string) {
  const dateTime = new Date(timeStamp);
  return dateTime;
};

export const getOfficeStamp = function (timeStamp: string) {
  const dateTime = new Date(timeStamp);
  const office = DateSvc.toShopDateTime(dateTime, 'Australia/Brisbane');
  return DateSvc.formatLocalDateTime(office);
};

const runInfo = function (date: Date) {
  const officeDateTime = DateSvc.toShopDateTime(date, 'Australia/Brisbane');
  const formatted = DateSvc.formatLocalDateTime(officeDateTime);
  logger.info(`Start at ${formatted}`);
};
