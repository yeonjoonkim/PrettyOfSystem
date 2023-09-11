export interface IShopSetting {
  timePicker: ShopTimePickerType;
  general: ShopGeneralSettingType;
}

export type ShopSettingValiationResultType = {
  isModified: boolean;
  setting: IShopSetting;
};

export type ShopTimePickerType = {
  intervalMin: number;
};

export type ShopGeneralSettingType = {
  taxRate: number;
};
