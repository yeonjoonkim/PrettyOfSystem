import { IRoleAccessLevel, IRoleConfiguration } from "../system/role/role.interface";
import { IShopWorkHours } from "../system/shop/shop.interface";
import * as Constant from "../../shared/services/global/global-constant";
export interface IUser{
  firstName: string;
  lastName: string;
  isSystemAdmin: boolean;
  associatedShops: IUserAssociatedShop[];
  currentShop: IUserAssociatedShop;
  setting: IUserSetting;
  authOption: IUserAuthOption;
  phoneNumber: string;
  email: string;
}

export interface IUserAuthOption{
  email: boolean;
  phoneNumber: boolean;
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
}

export interface IUserInformation{
  phoneNumber: string;
  email: string;
  activeFrom: Date;
  activeTo: Date | null;
  active: boolean;
}