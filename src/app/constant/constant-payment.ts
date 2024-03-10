import { Payment } from './constant-value';

//Payment
export type UnPaidPayment = {
  type: typeof Payment.Type.Unpaid;
  description: typeof Payment.Description.Unpaid;
};
export type PartPaidPayment = {
  type: typeof Payment.Type.PartPaid;
  description: typeof Payment.Description.PartPaid;
};
export type FullPaidPayment = {
  type: typeof Payment.Type.FullPaid;
  description: typeof Payment.Description.FullPaid;
};
export type RefundedPayment = {
  type: typeof Payment.Type.Refunded;
  description: typeof Payment.Description.Refunded;
};
export type PaymentStatusType = UnPaidPayment | PartPaidPayment | FullPaidPayment | RefundedPayment;

//Payment - Status
export const Payment_UnPaid: UnPaidPayment = {
  type: Payment.Type.Unpaid,
  description: Payment.Description.Unpaid,
};

export const Payment_PartPaid: PartPaidPayment = {
  type: Payment.Type.PartPaid,
  description: Payment.Description.PartPaid,
};

export const Payment_Refuned: RefundedPayment = {
  type: Payment.Type.Refunded,
  description: Payment.Description.Refunded,
};

export const Payment_FullPaid: FullPaidPayment = {
  type: Payment.Type.FullPaid,
  description: Payment.Description.FullPaid,
};

export const Payment_InCompletedTypes = [Payment.Type.Unpaid, Payment.Type.PartPaid];
export const Payment_CompletedTypes = [Payment.Type.FullPaid, Payment.Type.Refunded];
