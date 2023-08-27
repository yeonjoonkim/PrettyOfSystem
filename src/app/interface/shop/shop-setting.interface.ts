export interface IShopSetting {
  timePicker: IShopTimePicker;
  general: IShopGeneralSetting;
}

export interface IShopSettingValiationResult {
  isModified: boolean;
  setting: IShopSetting;
}

export interface IShopTimePicker {
  intervalMin: number;
}

export interface IShopGeneralSetting {
  taxRate: number;
}
