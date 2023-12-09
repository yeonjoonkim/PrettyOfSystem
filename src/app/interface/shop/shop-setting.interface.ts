import { MedicalInsuranceType } from '..';

export interface IShopSetting {
  calendar: ShopCalendarType;
  financial: ShopFinancialRateType;
  picture: ShopPictureType;
  qrCode: ShopQRCodeType;
  insurance: ShopInsuranceProvider | null;
}

export type ShopQRCodeType = {
  waitingListSessionExiryMin: number;
};

export type ShopFinancialRateType = {
  taxRate: number;
  cardSurchargeRate: number;
  cashDiscountRate: number;
  openingBalance: number;
  openingHour: number;
  closingHour: number;
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
