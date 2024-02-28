import * as Constant from '../../constant/constant';
import { AddressType, TimeItemType } from '../global/global.interface';
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

export type ShopCategoryIndicatorType = {
  isHairSalon: boolean;
  isMassageTheraphy: boolean;
  isPersonalTrainning: boolean;
  isSkinCare: boolean;
  isMobileShop: boolean;
  isNailArt: boolean;
};

export type ShopCapacityType = {
  id: string;
  name: string;
  isPremium: boolean;
  isTest: boolean;
  limitedPackage: number;
  limitedService: number;
  limitedCoupon: number;
  limitedExtra: number;
  limitedProduct: number;
  limitedUser: number;
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
  breakTimes: ShopOperatingBreakType[];
};

export type ShopOperatingBreakType = {
  id: string;
  start: TimeItemType;
  end: TimeItemType;
  durationHour: number;
};

export type ShopBreakTimeValidatorCriteriaType = {
  employeeId: string;
  startDateTime: string;
  endDateTime: string;
};

export type ShopOperatingHoursType = {
  openTime: TimeItemType;
  closeTime: TimeItemType;
};

export interface ShopConfigurationType {
  id: string;
  name: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  taxNumber: string;
  active: boolean;
  address: AddressType;
  operatingHours: ShopWorkHoursType;
  category: ShopCategoryType;
  country: ShopCountryType;
  package: ShopConfigurationLanguagePackageType;
  translatedRequestIds: string[];
  activeFrom: string;
  activeTo: string | null;
  setting: IShopSetting;
  timezone: string;
  capacityId: string;
  waitingListSessionId: string;
  schedulerId: string;
  smsId: string;
}

export type WaitingListCriteriaType = {
  id: string;
  shopId: string;
  expiredTime: number;
};

export type WaitingListSessionType = {
  id: string;
  shopId: string;
  expiredDate: string;
  ipAddress: string | null;
};

export type ShopConfigurationLanguagePackageType = {
  [key: string]: string;
};

export interface ShopConfigurationTypeFilterOption {
  name: string;
  email: string;
  phoneNumber: string;
  planConfigurationId: string;
}

export type ShopUpdateContactProp = {
  phone: string;
  name: string;
  companyName: string;
  email: string;
  address: AddressType;
  taxNumber: string;
};

export type ShopSMSCreditBalanceType = {
  id: string;
  shopId: string;
  balance: number;
  autoChargeAmount: number;
  autoChargeStartAmount: number;
};

export type SchedulerOperatingHoursType = {
  startDateTime: string;
  endDateTime: string;
  isOpen: boolean;
  is24Hours: boolean;
};

export type ShopCreditCardType = {
  encryptedFirstName: string;
  encryptedLastName: string;
  encryptedFirstSegment: string;
  encryptedSecondSegment: string;
  encryptedLastSegment: string;
  encryptedCSV: string;
  encryptedType: string;
};

export type ShopSMSCreditTransactionType = {
  id: string;
  to: string;
  phoneNumber: string;
  type: string;
  amount: number;
  surcharged: number;
  totalAmount: number;
  remainingBalance: string;
};

export type SMSRequestTransactionDocumentType = {
  id: string;
  shopId: string;
  shopTimezone: string;
  status: 'Scheduled' | 'Failed' | 'Sent' | 'Cancel';
  type: 'Confirmation' | 'Reminder' | 'ReScheduled' | 'Cancel' | 'Brithday';
  attempt: number; // 0 - 2;
};
