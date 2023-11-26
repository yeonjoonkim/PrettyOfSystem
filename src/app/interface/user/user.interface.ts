import { RoleAccessLevelType, RoleConfigurationType } from '../system/role/role.interface';
import { ShopWorkHoursType } from '../shop/shop.interface';
import * as Constant from '../../constant/constant';
import { AddressType, NameValuePairType } from '../global/global.interface';

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
  visitedShops: UserConsentType[];
  address: AddressType | null;
  dob: string;
  signature: string | null;
}

export type UserConsentType = {
  shopId: string;
  shopName: string;
  hasMarketingEmailConsent: boolean;
  hasMarketingSMSConsent: boolean;
  hasPrivacyPolicyConsent: boolean;
  hasTermandConditionConsent: boolean;
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
  privateInsurance: UserSettingPrivateInsuranceType | null;
  massage: UserSettingMassageType;
};

export type UserSettingMassageType = {
  currentMedicalTreatment: string | null;
  symptomsAndDiseases: UserSettingMassageSymptomAndDiseaseType[];
  otherCondition: string | null;
  pressureLevel: number;
  focusAreas: UserSettingMassageFocusAreaType[];
  avoidAreas: string[];
};

export type UserSettingMassageFocusAreaType = {
  name: string;
  painType: string;
  painLevel: number;
};

export type UserSettingMassageSymptomAndDiseaseType = {
  type: 'Symtom' | 'Disease';
  system:
    | 'Integumentary'
    | 'Skeletal'
    | 'Muscular'
    | 'Nervous'
    | 'Endocrine'
    | 'Cardiovascular'
    | 'Lymphatic'
    | 'Respiratory'
    | 'Digestive'
    | 'Urinary'
    | 'Reproductive';
  name: string;
  cautionLevel: number; // 0 - 10
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
