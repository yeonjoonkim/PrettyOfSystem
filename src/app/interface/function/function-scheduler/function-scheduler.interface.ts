import { ShopConfigurationType } from '../../shop/shop.interface';

export type SchedulerShopConfigurationType = {
  config: ShopConfigurationType;
  shopDateTime: string;
  dayIndex: Day;
  isOpenToday: boolean;
  isMon: boolean;
  isTue: boolean;
  isWed: boolean;
  isThu: boolean;
  isFri: boolean;
  isSat: boolean;
  isSun: boolean;
  isMidNight: boolean;
  today: ShopTime;
  previousDay: ShopTime;
  nextDay: ShopTime;
  currentMonth: ShopTime;
};

export type ShopTime = {
  start: string;
  end: string;
};

export type EveryMinuteAction = {
  rosterRollover: boolean; //Every Sunday Midnight
  dailyReport: boolean; //Every Midnight
};
