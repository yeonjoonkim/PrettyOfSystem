export interface IShopSetting{
  timePicker: IShopTimePicker;
  //general: IShopGeneralSetting;
}

export interface IShopTimePicker{
  intervalMin: number;
}

export interface IShopGeneralSetting{
  taxRate: number;
}
