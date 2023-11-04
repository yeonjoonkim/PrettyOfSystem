export interface IShopSetting {
  calender: ShopCalenderType;
  financial: ShopFinancialRateType;
  picture: ShopPictureType;
}

export type ShopFinancialRateType = {
  taxRate: number;
  cardSurchargeRate: number;
  cashDiscountRate: number;
};

export type ShopCalenderType = {
  intervalMin: number;
  nextAvailableBookingMin: number;
  maximumAvailableFutureBookingDays: number;
};

export type ShopPictureType = {
  logoUrl: string;
  shopImage1: string;
  shopImage2: string;
  shopImage3: string;
};
