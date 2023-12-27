import { MedicalInsuranceType } from '..';

export interface IShopSetting {
  calendar: ShopCalendarType;
  financial: ShopFinancialRateType;
  picture: ShopPictureType;
  qrCode: ShopQRCodeType;
  insurance: ShopInsuranceProvider | null;
  waitingList: ShopWaitingListType;
}

export type ShopQRCodeType = {
  waitingListSessionExiryMin: number;
};

export type ShopWaitingListType = {
  intervalMin: number;
};

export type ShopFinancialRateType = {
  taxRate: number;
  cardSurchargeRate: number;
  openingBalance: number;
  openingHour: number;
  closingHour: number;
  cashDiscount: CashDiscountType | null;
};

export type CashDiscountType = {
  rate: number;
  enableCoupon: boolean;
  enablePackage: boolean;
  enableExtra: boolean;
  enableService: boolean;
};

export type ShopInsuranceProvider = {
  healthFund: MedicalInsuranceType;
  provider: string;
  providerNo: string;
};

export type ShopCalendarType = {
  intervalMin: number;
  nextAvailableBookingMin: number;
  maximumAvailableFutureBookingDays: number;
};

export type ShopPictureType = {
  logo: string;
  shopImage1: string;
  shopImage2: string;
  shopImage3: string;
};
