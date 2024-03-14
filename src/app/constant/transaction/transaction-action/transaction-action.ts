import * as TransactionAction from './transaction-action-type';
import * as Constant from '../../constant-value';

export const Withdraw: TransactionAction.WithdrawType = {
  type: Constant.TransactionAction.Type.Withdraw,
  description: Constant.TransactionAction.Description.Withdraw,
};

export const Refund: TransactionAction.RefundType = {
  type: Constant.TransactionAction.Type.Refund,
  description: Constant.TransactionAction.Description.Refund,
};

export const Deposit: TransactionAction.DepositType = {
  type: Constant.TransactionAction.Type.Deposit,
  description: Constant.TransactionAction.Description.Deposit,
};

export const CashBalanceActions = [Withdraw, Deposit];
export const PaymentActions = [Deposit, Refund];

export const isWithdraw = (t: TransactionAction.Type) => {
  return Withdraw.type === t.type && Withdraw.description === t.description;
};

export const isDeposit = (t: TransactionAction.Type) => {
  return Deposit.type === t.type && Deposit.description === t.description;
};

export const isRefund = (t: TransactionAction.Type) => {
  return Refund.type === t.type && Refund.description === t.description;
};

export const isAddingTransaction = (t: TransactionAction.Type) => {
  return isDeposit(t);
};

export const isRemovingTransaction = (t: TransactionAction.Type) => {
  return isWithdraw(t) || isRefund(t);
};
