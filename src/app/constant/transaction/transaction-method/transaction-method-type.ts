import { TransactionMethod } from '../../constant-value';

export type CouponType = {
  type: typeof TransactionMethod.Type.Coupon;
  description: typeof TransactionMethod.Description.Coupon;
};

export type CashType = {
  type: typeof TransactionMethod.Type.Cash;
  description: typeof TransactionMethod.Description.Cash;
};

export type CreditCardType = {
  type: typeof TransactionMethod.Type.CreditCard;
  description: typeof TransactionMethod.Description.CreditCard;
};

export type HicapType = {
  type: typeof TransactionMethod.Type.Hicap;
  description: typeof TransactionMethod.Description.Hicap;
};

export type ApplePayType = {
  type: typeof TransactionMethod.Type.ApplePay;
  description: typeof TransactionMethod.Description.ApplePay;
};

export type GooglePayType = {
  type: typeof TransactionMethod.Type.GooglePay;
  description: typeof TransactionMethod.Description.GooglePay;
};

export type OnlineCardType = {
  type: typeof TransactionMethod.Type.OnlineCard;
  description: typeof TransactionMethod.Description.OnlineCard;
};

export type BankTransferType = {
  type: typeof TransactionMethod.Type.BankTransfer;
  description: typeof TransactionMethod.Description.BankTransfer;
};

export type Type =
  | CouponType
  | CashType
  | CreditCardType
  | HicapType
  | ApplePayType
  | GooglePayType
  | OnlineCardType
  | BankTransferType;
