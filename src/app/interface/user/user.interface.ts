import { IRoleAccessLevel, IRoleConfiguration } from '../system/role/role.interface';
import { IShopWorkHours } from '../system/shop/shop.interface';
import * as Constant from 'src/app/service/global/global-constant';
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  isSystemAdmin: boolean;
  associatedShops: IUserAssociatedShop[];
  currentShop: IUserAssociatedShop;
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
}
