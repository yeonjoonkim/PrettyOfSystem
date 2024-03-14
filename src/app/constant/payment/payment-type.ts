import { Payment } from '../constant-value';

//Payment
export type UnPaidType = {
  type: typeof Payment.Type.Unpaid;
  description: typeof Payment.Description.Unpaid;
};
export type PartPaidType = {
  type: typeof Payment.Type.PartPaid;
  description: typeof Payment.Description.PartPaid;
};
export type FullPaidType = {
  type: typeof Payment.Type.FullPaid;
  description: typeof Payment.Description.FullPaid;
};
export type RefundedType = {
  type: typeof Payment.Type.Refunded;
  description: typeof Payment.Description.Refunded;
};
export type StatusType = UnPaidType | PartPaidType | FullPaidType | RefundedType;
