import { Payment } from '../../constant/constant';

export type PaymentDocumentType = {
  id: string;
  shopTimezone: string;
  shopId: string;
  consultId: string;
  transactionIds: string[];
  status: Payment.StatusType;
  totalPrice: number;
  adjustedPrice: number;
  discountedRate: number;
  remainingBalance: number;
  createAt: string;
  modifiedAt: string;
};
