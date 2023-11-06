export interface IShopSetting {
  calendar: ShopCalendarType;
  financial: ShopFinancialRateType;
  picture: ShopPictureType;
}

export type ShopFinancialRateType = {
  taxRate: number;
  cardSurchargeRate: number;
  cashDiscountRate: number;
  openingBalance: number;
  openingHour: number;
  closingHour: number;
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
