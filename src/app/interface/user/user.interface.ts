import { IRoleAccessLevel, IRoleConfiguration } from "../system/role/role.interface";
import { IShopWorkHours } from "../system/shop/shop.interface";
import * as Constant from "../../shared/services/global/global-constant";
export interface IUser{
  id: string;
  firstName: string;
  lastName: string;
  isSystemAdmin: boolean;
  associatedShops: IUserAssociatedShop[];
  currentShop: IUserAssociatedShop;
  setting: IUserSetting;
  phoneNumber: string;
  email: string;
  loginIds: string[];
}

export interface IUserLoginOption{
  email: boolean;
  phoneNumber: boolean;
  loginId: string;
}

export interface IUserSetting{
  preferLanguage: string;
}

export interface IUserAssociatedShop{
  shopId: string;
  shopName: string;
  gender: Constant.GenderType;
  role: IRoleConfiguration;
  userInfo: IUserInformation;
  workHours: IShopWorkHours;
  loginOption: IUserLoginOption;
}

export interface IUserInformation{
  phoneNumber: string;
  email: string;
  activeFrom: Date;
  activeTo: Date | null;
  active: boolean;
}