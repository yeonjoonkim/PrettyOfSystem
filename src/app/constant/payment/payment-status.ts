import * as Payment from './payment-type';
import * as Constant from '../constant-value';

export const UnPaid: Payment.UnPaidType = {
  type: Constant.Payment.Type.Unpaid,
  description: Constant.Payment.Description.Unpaid,
};

export const PartPaid: Payment.PartPaidType = {
  type: Constant.Payment.Type.PartPaid,
  description: Constant.Payment.Description.PartPaid,
};

export const FullPaid: Payment.FullPaidType = {
  type: Constant.Payment.Type.FullPaid,
  description: Constant.Payment.Description.FullPaid,
};

export const Refunded: Payment.RefundedType = {
  type: Constant.Payment.Type.Refunded,
  description: Constant.Payment.Description.Refunded,
};

export const isUnPaid = (t: Payment.StatusType) => {
  return UnPaid.type === t.type && UnPaid.description === t.description;
};

export const isPartPaid = (t: Payment.StatusType) => {
  return PartPaid.type === t.type && PartPaid.description === t.description;
};

export const isFullPaid = (t: Payment.StatusType) => {
  return FullPaid.type === t.type && FullPaid.description === t.description;
};

export const isRefunded = (t: Payment.StatusType) => {
  return Refunded.type === t.type && Refunded.description === t.description;
};
