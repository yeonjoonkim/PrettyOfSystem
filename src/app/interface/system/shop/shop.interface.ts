import { IPlanConfiguration } from "../plan/plan.interface";

export interface IShopCategory{
  isHairSalon: boolean;
  isMassageTheraphy: boolean;
  isPersonalTrainning: boolean;
  isSkinCare: boolean;
  name: string;
}

export interface IShopCountry{
  currency: "AUD" | "JPY" | "KRW" | "CNY";
  length: string;
  name: string;
  prefixedPhoneCode: "+82" | "+62" | "+81";
}

export interface IShopPlan{
  configurationId: string;
  isOverDue: boolean;
  lastPaymentDate: Date;
}

export interface IShopConfiguration{
  name: string;
  phoneNumber: number;
  emailAddress: string;
  address1: string;
  address2: string;
  suburb: string;
  state: string;
  postCode: number;
  category: IShopCategory;
  country: IShopCountry;
  plan: IShopPlan;
  currentActiveUserCount: number;
  currentActiveProductCount: number;
  currentActiveServiceCount: number;
  active: boolean;
}
