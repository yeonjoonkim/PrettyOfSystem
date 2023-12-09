import * as I from '../../../interface';
import * as Constant from '../../../constant';

export const override = function (s: I.IShopSetting) {
  s.financial = financeSetting(s?.financial);
  s.calendar = calendarSetting(s?.calendar);
  s.picture = picture(s?.picture);
  s.qrCode = QRcode(s?.qrCode);
  s.insurance = insurance(s?.insurance);
  return s;
};

//Finance
const financeSetting = function (financial: I.ShopFinancialRateType | undefined) {
  return {
    taxRate: taxRate(financial?.taxRate),
    cardSurchargeRate: cardSurchargeRate(financial?.cardSurchargeRate),
    cashDiscountRate: cashDiscounteRate(financial?.cashDiscountRate),
    openingBalance: openingBalance(financial?.openingBalance),
    openingHour: openingHour(financial?.openingHour),
    closingHour: closingHour(financial?.closingHour),
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

const openingBalance = function (balance: number | undefined | null) {
  return typeof balance === 'number' ? balance : Constant.ShopSetting.Financial.OpeningBalance;
};

const openingHour = function (hour: number | undefined | null) {
  return typeof hour === 'number' ? hour : Constant.ShopSetting.Financial.OpeningHour;
};

const closingHour = function (hour: number | undefined | null) {
  return typeof hour === 'number' ? hour : Constant.ShopSetting.Financial.ClosingHour;
};

//Calendar
const calendarSetting = function (timePicker: I.ShopCalendarType | undefined) {
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
  return typeof min === 'number' ? min : Constant.ShopSetting.Calender.MaximumAvailableFutureBookingDays;
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

// QRcode
const QRcode = function (qrCode: I.ShopQRCodeType | undefined) {
  return {
    waitingListSessionExiryMin: waitingListSessionExiryMin(qrCode?.waitingListSessionExiryMin),
  };
};

const waitingListSessionExiryMin = function (min: number | undefined | null) {
  return typeof min === 'number' ? min : Constant.ShopSetting.QRCode.WaitingListSessionExiryMin;
};

// Insurance Company
const insurance = function (insurance: I.ShopInsuranceProvider | undefined | null) {
  return insurance !== null && insurance !== undefined ? insurance : null;
};
