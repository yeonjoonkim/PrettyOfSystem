import * as Constant from '../../../shared/services/global/global-constant';
import { IAddress, ITimeItem } from '../../global/global.interface';
import { IShopSetting } from './shop-setting.interface';

export type IShopCategory = {
  id: string;
  isHairSalon: boolean;
  isMassageTheraphy: boolean;
  isPersonalTrainning: boolean;
  isSkinCare: boolean;
  name: string;
}

export type IShopCountry = {
  id: string;
  currency: Constant.CurrencyType;
  length: string;
  name: string;
  prefixedPhoneCode: Constant.PhoneCodeType;
  dateFormat: Constant.DateFormatType;
  code: Constant.CountryCodeType;
}

export interface IShopPlan{
  configurationId: string;
  isOverDue: boolean;
  lastPaymentDate: Date;
  paymentDate: Date;
  option: IShopPlanOption;
}

export interface IShopPlanOption{
  isWeekly: boolean;
  isMonthly: boolean;
  isAnnually: boolean;
}

export interface IShopWorkHours{
  mon: IShopOperatingDaily;
  tue: IShopOperatingDaily;
  wed: IShopOperatingDaily;
  thu: IShopOperatingDaily;
  fri: IShopOperatingDaily;
  sat: IShopOperatingDaily;
  sun: IShopOperatingDaily;
}

export interface IShopOperatingDaily{
  index: Constant.DayIndexType;
  isOpen: boolean;
  operatingHours: IShopOperatingHours;
}

export interface IShopOperatingHours{
  openTime: ITimeItem;
  closeTime: ITimeItem;
}
export interface IShopConfiguration{
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  taxNumber: string;
  logoImg: any;
  active: boolean;
  address: IAddress;
  operatingHours: IShopWorkHours;
  category: IShopCategory;
  country: IShopCountry;
  plan: IShopPlan;
  setting: IShopSetting;
  timezone: string;
}

export interface IShopConfigurationFilterOption{
  name: string;
  email: string;
  phoneNumber: string;
  planConfigurationId: string;
}
