import { ZonedDate } from '@progress/kendo-date-math';
import * as Constant from 'src/app/service/global/global-constant';
import { IAddress, IDatePeriod, ITimeItem } from '../../global/global.interface';
import { IShopSetting } from './shop-setting.interface';

export type IShopCategory = {
  id: string;
  isHairSalon: boolean;
  isMassageTheraphy: boolean;
  isPersonalTrainning: boolean;
  isSkinCare: boolean;
  name: string;
};

export type IShopCountry = {
  id: string;
  currency: Constant.CurrencyType;
  length: string;
  name: string;
  prefixedPhoneCode: Constant.PhoneCodeType;
  dateFormat: Constant.DateFormatType;
  code: Constant.CountryCodeType;
};

export interface IShopPlan {
  configurationId: string;
  isOverDue: boolean;
  lastPaymentDate: Date;
  paymentDate: Date;
  period: IDatePeriod;
}

export interface IShopPlanOption {
  isWeekly: boolean;
  isMonthly: boolean;
  isAnnually: boolean;
}

export interface IShopWorkHours {
  mon: IShopOperatingDaily;
  tue: IShopOperatingDaily;
  wed: IShopOperatingDaily;
  thu: IShopOperatingDaily;
  fri: IShopOperatingDaily;
  sat: IShopOperatingDaily;
  sun: IShopOperatingDaily;
  closeDay: Constant.DayIndexType[];
}

export interface IShopOperatingDaily {
  index: Constant.DayIndexType;
  day: Constant.DayType;
  isOpen: boolean;
  workHours: number;
  operatingHours: IShopOperatingHours;
}

export interface IShopOperatingHours {
  openTime: ITimeItem;
  closeTime: ITimeItem;
}
export interface IShopConfiguration {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  taxNumber: string;
  active: boolean;
  address: IAddress;
  operatingHours: IShopWorkHours;
  category: IShopCategory;
  country: IShopCountry;
  plan: IShopPlan;
  activeFrom: Date;
  activeTo: Date | null;
  setting: IShopSetting;
  timezone: string;
}

export interface IShopConfigurationFilterOption {
  name: string;
  email: string;
  phoneNumber: string;
  planConfigurationId: string;
}
