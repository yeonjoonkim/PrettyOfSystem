import { RoleAccessLevelType, RoleConfigurationType } from '../system/role/role.interface';
import {
  ShopConfigurationLanguagePackageType,
  ShopOperatingDailyType,
  ShopWorkHoursType,
} from '../shop/shop.interface';
import * as Constant from '../../constant/constant';
import { AddressType, NameValuePairType } from '../global/global.interface';
import { MassageBodySelectorAreaType } from '../massage/massage.interface';
import {
  MassageDiffcultChangePositionDescriptionType,
  MassageDiffcultChangePositionType,
} from '../../constant/constant';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  gender: Constant.GenderType;
  isSystemAdmin: boolean;
  associatedShops: UserAssociatedShopType[];
  associatedShopIds: string[];
  currentShopId: string;
  setting: UserSettingType;
  loginOption: IUserLoginOption;
  phoneNumber: string;
  email: string;
  encryptedPassword: string;
  disabledAccount: boolean;
  visitedShopIds: string[];
  visitedShops: UserVisitShopConsentType[];
  address: AddressType | null;
  dob: string;
  signature: string | null;
}

export type ChangeNumberUserCriteriaType = {
  firstName: string;
  lastName: string;
  gender: Constant.GenderType;
  email: string;
  previousPhoneNumber: string;
  dob: string;
};

export type ChangePhoneNumberRequestDocumentType = {
  id: string;
  userId: string;
  expiredDate: string;
  newPhoneNumber: string;
  emailAddress: string;
  status: Constant.ChangeNumberRequestStatusType;
  url: string;
  attempt: number; //limited 3
};

export type ShopEmployeeScheduleChangeResult = {
  applyAllWeek: boolean;
  roster: ShopOperatingDailyType;
};

export type UserVisitShopConsentType = {
  shopId: string;
  shopName: string;
  isVIP: boolean;
  hasMarketingEmailConsent: boolean;
  hasMarketingSMSConsent: boolean;
  hasTermandConditionConsent: boolean;
  hasReuseForm: boolean;
  agreedDate: string;
};

export type UserClaimType = {
  role: RoleAccessLevelType;
  currentShopId: string;
  language: string;
  disableAccount: boolean;
};

export interface IUserLoginOption {
  email: boolean;
  phoneNumber: boolean;
}

export type UserSettingType = {
  preferLanguage: string;
  pregnancyDueDate: string | null;
  privateInsurance: UserSettingPrivateInsuranceType | null;
  massage: UserSettingMassageType;
  medical: UserSettingMedicalHistroyType;
  emergencyContact: UserSettingEmergencyContactType | null;
};

export type UserSettingEmergencyContactType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export type UserSettingMedicalHistroyType = {
  otherStatus: ShopConfigurationLanguagePackageType | null;
  symptomsAndDiseases: UserMedicalHistoryType[];
};

export type UserSettingMassageType = {
  pressure: MassagePressureType;
  areas: MassageBodySelectorAreaType[];
  difficultChangePosition: MassageDifficultChangePosition;
};

export type MassageDifficultChangePosition = {
  type: MassageDiffcultChangePositionType;
  description: MassageDiffcultChangePositionDescriptionType;
};

export type MassagePressureType = {
  rating: Constant.MassagePressureRatingType;
  description: Constant.MassagePressureDescriptionType;
};

export type UserMedicalHistoryType = {
  type: Constant.MedicalHistoryType;
  system: Constant.MedicalHistorySystemType;
  name: string;
  description: string;
  cautionLevel: number; // 0 - 10 digestive
};

export type UserSettingPrivateInsuranceType = {
  company: string;
  memberNum: string;
  reference: string;
};

export interface IUserLogin {
  phoneNumber: string;
  emailAddress: string;
  password: string;
  otp: string;
}

export interface ILoginStatus {
  name: Constant.LoginStatusType;
  isError: boolean;
  errorName: string;
}

export interface UserAssociatedShopType {
  shopId: string;
  userId: string;
  role: RoleConfigurationType;
  activeFrom: string;
  activeTo: string | null;
  active: boolean;
  displayInSystem: boolean;
  roster: ShopWorkHoursType;
  nextWeekRoster: ShopWorkHoursType;
  nextTwoWeekRoster: ShopWorkHoursType;
  nextThreeWeekRoster: ShopWorkHoursType;
  nextFourWeekRoster: ShopWorkHoursType;
}

export type UserManagementCriteria = {
  createShopUserCriteria: CreateShopUserCriteria[];
  shopFilter: NameValuePairType[];
  userGridData: IUser[];
  role: RoleConfigurationType[];
  roleFilter: NameValuePairType[];
};

export type CreateShopUserCriteria = {
  id: string;
  name: string;
  operatingHours: ShopWorkHoursType;
};

export type ShopUserManagementCriteria = {
  createCriteria: CreateShopUserCriteria[];
  filter: NameValuePairType[];
};

export type SystemUserInputValitorType = {
  firstName: boolean;
  lastName: boolean;
  phoneNumber: boolean;
  email: boolean;
};
