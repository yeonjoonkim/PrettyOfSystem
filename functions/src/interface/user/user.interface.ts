import { IRoleConfiguration } from '../system/role/role.interface';
import { IShopWorkHours } from '../shop/shop.interface';
import * as Constant from '../../constant/constant';
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  isSystemAdmin: boolean;
  associatedShops: IUserAssociatedShop[];
  currentShop: IUserAssociatedShop | null;
  setting: IUserSetting;
  loginIds: string[];
  phoneNumber: string;
  email: string;
}

export interface IUserLoginOption {
  id: string;
  email: boolean;
  phoneNumber: boolean;
}

export interface IUserSetting {
  preferLanguage: string;
}

export interface IUserLogin {
  phoneNumber: string | null;
  emailAddress: string | null;
  password: string | null;
  confirmedPassword: string | null;
}

export interface IUserAssociatedShop {
  shopId: string;
  shopName: string;
  gender: Constant.GenderType;
  role: IRoleConfiguration;
  workHours: IShopWorkHours;
  loginOption: IUserLoginOption;
  activeFrom: Date;
  activeTo: Date | null;
  active: boolean;
  phoneNumber: string;
  email: string;
  displayInSystem: boolean;
}
