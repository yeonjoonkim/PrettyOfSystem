import { IPlanConfiguration } from "../plan/plan.interface";

export interface IShopCategory{
  id?: string;
  isHairSalon: boolean;
  isMassageTheraphy: boolean;
  isPersonalTrainning: boolean;
  isSkinCare: boolean;
  name: string;
}

export interface IShopCountry{
  id?: string;
  currency: "AUD" | "JPY" | "KRW" | "CNY";
  length: string;
  name: string;
  prefixedPhoneCode: "+82" | "+62" | "+81" | "+86";
}

export interface IShopPlan{
  configurationId: string;
  isOverDue: boolean;
  lastPaymentDate: Date;
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
  isOpen: boolean;
  operatingHours: IShopOperatingHours;
  lunchTime?: IShopOperatingDaily
}

export interface IShopOperatingHours{
  openTime: string;
  closeTime: string;
}

export interface IShopAddress{
  line1: string;
  line2: string;
  suburb: string;
  state: string;
  postCode: number;
}

export interface IShopConfiguration{
  name: string;
  phoneNumber: number;
  email: string;
  taxNumber: string;
  logoImg: string;
  currentActiveUserCount: number;
  currentActiveProductCount: number;
  currentActiveServiceCount: number;
  active: boolean;
  address: IShopAddress;
  operatingHours: IShopWorkHours;
  category: IShopCategory;
  country: IShopCountry;
  plan: IShopPlan;
}
