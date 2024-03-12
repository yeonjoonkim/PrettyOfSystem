import { TransactionAction } from '../../constant-value';

export type WithdrawType = {
  type: typeof TransactionAction.Type.Withdraw;
  description: typeof TransactionAction.Description.Withdraw;
};

export type RefundType = {
  type: typeof TransactionAction.Type.Refund;
  description: typeof TransactionAction.Description.Refund;
};

export type DepositType = {
  type: typeof TransactionAction.Type.Deposit;
  description: typeof TransactionAction.Description.Deposit;
};

export type Type = WithdrawType | RefundType | DepositType;
