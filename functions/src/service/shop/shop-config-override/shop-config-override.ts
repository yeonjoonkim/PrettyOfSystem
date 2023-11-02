import * as I from '../../../interface';
import * as Constant from '../../../constant';

export const override = function (s: I.IShopSetting) {
  s.general = generalSetting(s.general);
  s.timePicker = timePickerSetting(s.timePicker);

  return s;
};

//General Setting
const generalSetting = function (general: I.ShopGeneralSettingType) {
  general.taxRate = taxRate(general.taxRate);
  general.surchargeRate = surchargeRate(general.surchargeRate);
  return general;
};

const taxRate = function (taxRate: number | undefined | null): number {
  return typeof taxRate === 'number' ? taxRate : Constant.ShopSetting.General.TaxRate;
};

const surchargeRate = function (rate: number | undefined | null) {
  return typeof rate === 'number' ? rate : Constant.ShopSetting.General.SurchargeRate;
};

//Time Picker Setting
const timePickerSetting = function (timePicker: I.ShopTimePickerType) {
  timePicker.intervalMin = intervalMin(timePicker.intervalMin);
  return timePicker;
};

const intervalMin = function (min: number | undefined | null) {
  return typeof min === 'number' ? min : Constant.ShopSetting.TimePicker.IntervalMin;
};
