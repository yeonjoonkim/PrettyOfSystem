import * as TransactionMethod from './transaction-method-type';
import * as Constant from '../../constant-value';

export const Coupon: TransactionMethod.CouponType = {
  type: Constant.TransactionMethod.Type.Coupon,
  description: Constant.TransactionMethod.Description.Coupon,
} as const;

export const Cash: TransactionMethod.CashType = {
  type: Constant.TransactionMethod.Type.Cash,
  description: Constant.TransactionMethod.Description.Cash,
} as const;

export const CreditCard: TransactionMethod.CreditCardType = {
  type: Constant.TransactionMethod.Type.CreditCard,
  description: Constant.TransactionMethod.Description.CreditCard,
} as const;

export const Hicap: TransactionMethod.HicapType = {
  type: Constant.TransactionMethod.Type.Hicap,
  description: Constant.TransactionMethod.Description.Hicap,
} as const;

export const ApplePay: TransactionMethod.ApplePayType = {
  type: Constant.TransactionMethod.Type.ApplePay,
  description: Constant.TransactionMethod.Description.ApplePay,
};

export const GooglePay: TransactionMethod.GooglePayType = {
  type: Constant.TransactionMethod.Type.GooglePay,
  description: Constant.TransactionMethod.Description.GooglePay,
};

export const OnlineCard: TransactionMethod.OnlineCardType = {
  type: Constant.TransactionMethod.Type.OnlineCard,
  description: Constant.TransactionMethod.Description.OnlineCard,
};

export const BankTransfer: TransactionMethod.BankTransferType = {
  type: Constant.TransactionMethod.Type.BankTransfer,
  description: Constant.TransactionMethod.Description.BankTransfer,
};

//ONLINE
export const OnlineMethods = [OnlineCard, ApplePay, GooglePay];
export const OnlineMethodTypes = OnlineMethods.map(t => t.type);
export const OnlineMethodDescription = OnlineMethods.map(t => t.description);

//OFFLINE
export const OfflineMethods = [CreditCard, Cash, Coupon, Hicap, BankTransfer];
export const OfflineMethodTypes = OfflineMethods.map(t => t.type);
export const OfflineMethodDescriptions = OfflineMethods.map(t => t.description);

export const isCoupon = (t: TransactionMethod.Type) => {
  return Coupon.type === t.type && Coupon.description === t.description;
};

export const isCash = (t: TransactionMethod.Type) => {
  return Cash.type === t.type && Cash.description === t.description;
};

export const isCreditCard = (t: TransactionMethod.Type) => {
  return CreditCard.type === t.type && CreditCard.description === t.description;
};

export const isHicap = (t: TransactionMethod.Type) => {
  return Hicap.type === t.type && Hicap.description === t.description;
};

export const isGooglePay = (t: TransactionMethod.Type) => {
  return GooglePay.type === t.type && GooglePay.description === t.description;
};

export const isOnlineCard = (t: TransactionMethod.Type) => {
  return OnlineCard.type === t.type && OnlineCard.description === t.description;
};

export const isOnline = (t: TransactionMethod.Type | null | undefined) => {
  return t !== null && t !== undefined
    ? OnlineMethods.some(method => method.type === t.type && method.description === t.description)
    : false;
};

export const isOffline = (t: TransactionMethod.Type | null | undefined) => {
  return t !== null && t !== undefined
    ? OfflineMethods.some(method => method.type === t.type && method.description === t.description)
    : false;
};
