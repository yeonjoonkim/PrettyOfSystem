import { IShopSetting } from './shop/shop-setting.interface';

export interface IPairValueId {
  id: string;
  value: string | number;
}
export interface IShopSettingValiationResult {
  isModified: boolean;
  setting: IShopSetting;
}
