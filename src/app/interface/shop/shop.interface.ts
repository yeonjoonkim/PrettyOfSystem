import * as Constant from '../../constant/constant';
import { AddressType, DatePeriodType, TimeItemType } from '../global/global.interface';
import { IShopSetting } from './shop-setting.interface';

export type ShopCategoryType = {
  id: string;
  isHairSalon: boolean;
  isMassageTheraphy: boolean;
  isPersonalTrainning: boolean;
  isSkinCare: boolean;
  isMobileShop: boolean;
  isNailArt: boolean;
  name: string;
};

export type ShopCountryType = {
  id: string;
  currency: Constant.CurrencyType;
  length: string;
  name: string;
  prefixedPhoneCode: Constant.PhoneCodeType;
  dateFormat: Constant.DateFormatType;
  code: Constant.CountryCodeType;
};

export type ShopPlanType = {
  configurationId: string;
  isOverDue: boolean;
  lastPaymentDate: Date;
  paymentDate: Date;
  period: DatePeriodType;
};

export type ShopPlanOptionType = {
  isWeekly: boolean;
  isMonthly: boolean;
  isAnnually: boolean;
};

export type ShopWorkHoursType = {
  mon: ShopOperatingDailyType;
  tue: ShopOperatingDailyType;
  wed: ShopOperatingDailyType;
  thu: ShopOperatingDailyType;
  fri: ShopOperatingDailyType;
  sat: ShopOperatingDailyType;
  sun: ShopOperatingDailyType;
  closeDay: Constant.DayIndexType[];
};

export type ShopOperatingDailyType = {
  index: Constant.DayIndexType;
  day: Constant.DayType;
  isOpen: boolean;
  workHours: number;
  operatingHours: ShopOperatingHoursType;
};

export type ShopOperatingHoursType = {
  openTime: TimeItemType;
  closeTime: TimeItemType;
};

export interface ShopConfigurationType {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  taxNumber: string;
  active: boolean;
  address: AddressType;
  operatingHours: ShopWorkHoursType;
  category: ShopCategoryType;
  country: ShopCountryType;
  plan: ShopPlanType;
  package: ShopConfigurationLanguagePackageType;
  activeFrom: Date;
  activeTo: Date | null;
  setting: IShopSetting;
  timezone: string;
}

export type ShopConfigurationLanguagePackageType = {
  [key: string]: string;
};

export interface ShopConfigurationTypeFilterOption {
  name: string;
  email: string;
  phoneNumber: string;
  planConfigurationId: string;
}
