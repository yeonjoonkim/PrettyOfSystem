import { RoleConfigurationType } from '../system/role/role.interface';
import { IShopWorkHours } from '../shop/shop.interface';
import * as Constant from '../../constant/constant';
export interface IUser {
  id: string;
  isSystemAdmin: boolean;
  associatedShops: UserAssociatedShopType[];
  currentShop: UserAssociatedShopType | null;
  setting: UserSettingType;
  loginIds: string[];
  phoneNumber: string;
  email: string;
}

export interface IUserLoginOption {
  id: string;
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
  shopName: string;
  firstName: string;
  lastName: string;
  gender: Constant.GenderType;
  role: RoleConfigurationType;
  workHours: IShopWorkHours;
  loginOption: IUserLoginOption;
  activeFrom: Date;
  activeTo: Date | null;
  active: boolean;
  phoneNumber: string;
  email: string;
  displayInSystem: boolean;
}
