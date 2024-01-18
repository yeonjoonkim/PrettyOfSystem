import { PaymentStatusType, TransactionType } from '../../constant/constant';

export type PaymentDocumentType = {
  id: string;
  shopTimezone: string;
  shopId: string;
  consultId: string;
  transactionIds: string[];
  status: PaymentStatusType;
  totalPrice: number;
  adjustedPrice: number;
  discountedRate: number;
  remainingBalance: number;
  createAt: string;
  modifiedAt: string;
};

export type PaymentTransactionType = {
  id: string;
  paymentId: string;
  couponId: string | null;
  type: TransactionType;
  surChargedRate: number;
  chargedAmount: number;
  unRealisedProfitLoss: number;
};
