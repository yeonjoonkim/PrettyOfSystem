import * as I from '../../../interface';
import * as Constant from '../../../constant';

export const override = function (s: I.IShopSetting) {
  s.financial = financeSetting(s?.financial);
  s.calender = timePickerSetting(s?.calender);
  s.picture = picture(s?.picture);
  return s;
};

//Finance
const financeSetting = function (financial: I.ShopFinancialRateType | undefined) {
  return {
    taxRate: taxRate(financial?.taxRate),
    cardSurchargeRate: cardSurchargeRate(financial?.cardSurchargeRate),
    cashDiscountRate: cashDiscounteRate(financial?.cashDiscountRate),
  };
};

const taxRate = function (taxRate: number | undefined | null): number {
  return typeof taxRate === 'number' ? taxRate : Constant.ShopSetting.Financial.TaxRate;
};

const cardSurchargeRate = function (rate: number | undefined | null) {
  return typeof rate === 'number' ? rate : Constant.ShopSetting.Financial.CardSurchargeRate;
};

const cashDiscounteRate = function (rate: number | undefined | null) {
  return typeof rate === 'number' ? rate : Constant.ShopSetting.Financial.CashDiscountRate;
};

//Calender
const timePickerSetting = function (timePicker: I.ShopCalenderType | undefined) {
  return {
    intervalMin: intervalMin(timePicker?.intervalMin),
    nextAvailableBookingMin: nextAvailableBookingMin(timePicker?.nextAvailableBookingMin),
    maximumAvailableFutureBookingDays: maximumAvailableFutureBookingDays(
      timePicker?.maximumAvailableFutureBookingDays
    ),
  };
};

const intervalMin = function (min: number | undefined | null) {
  return typeof min === 'number' ? min : Constant.ShopSetting.Calender.IntervalMin;
};

const nextAvailableBookingMin = function (min: number | undefined | null) {
  return typeof min === 'number' ? min : Constant.ShopSetting.Calender.NextAvailableBookingMin;
};

const maximumAvailableFutureBookingDays = function (min: number | undefined | null) {
  return typeof min === 'number'
    ? min
    : Constant.ShopSetting.Calender.MaximumAvailableFutureBookingDays;
};

// Picture
const picture = function (picture: I.ShopPictureType | undefined) {
  return {
    logo: placeholder(picture?.logo),
    shopImage1: placeholder(picture?.shopImage1),
    shopImage2: placeholder(picture?.shopImage2),
    shopImage3: placeholder(picture?.shopImage3),
  };
};

const placeholder = function (url: string | undefined | null) {
  return typeof url === 'string' ? url : Constant.ShopSetting.Picture.Placeholder;
};
