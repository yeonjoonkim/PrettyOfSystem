import { RoleAccessLevelType, RoleConfigurationType } from '../system/role/role.interface';
import { ShopWorkHoursType } from '../shop/shop.interface';
import * as Constant from '../../constant/constant';
import { NameValuePairType } from '../global/global.interface';

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
}

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

export interface UserSettingType {
  preferLanguage: string;
}

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
  activeFrom: Date;
  activeTo: Date | null;
  active: boolean;
  displayInSystem: boolean;
  roster: ShopWorkHoursType;
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
