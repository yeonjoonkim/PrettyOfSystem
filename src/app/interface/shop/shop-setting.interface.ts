import { MedicalInsuranceType, ShopPackageDiscountType } from '..';

export interface IShopSetting {
  calendar: ShopCalendarType;
  financial: ShopFinancialRateType;
  picture: ShopPictureType;
  qrCode: ShopQRCodeType;
  insurance: ShopInsuranceProvider | null;
  waitingList: ShopWaitingListType;
  smsRule: ShopSendSMSRuleType;
}

export type ShopSendSMSRuleType = {
  Confirmation_SMS_Before_Min: number | null;
  Reminder_SMS_Before_Start_Day: number | null;
  Shceduled_Revisit_Reminder_After_Day: number | null;
  Send_Cancellation: boolean;
  Send_Rescheduled: boolean;
  Send_BrithDay_Event: ShopSendBrithDayEventType | null;
};

export type ShopSendBrithDayEventType = {
  discountValue: number;
  discountType: 'Dollar' | 'Percent';
};

export type ShopQRCodeType = {
  waitingListSessionExiryMin: number;
};

export type ShopWaitingListType = {
  intervalMin: number;
  depositRate: null | number;
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
