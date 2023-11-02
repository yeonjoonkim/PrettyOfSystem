export interface IShopSetting {
  timePicker: ShopTimePickerType;
  general: ShopGeneralSettingType;
}

export type ShopTimePickerType = {
  intervalMin: number;
};

export type ShopGeneralSettingType = {
  taxRate: number;
  surchargeRate: number;
};
