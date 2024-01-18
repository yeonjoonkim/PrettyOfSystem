import * as I from '../../../../../interface';
import * as T from '../../../../type-checker/type-checker';
import * as Constant from '../../../../../constant';

export const override = function (doc: I.PaymentDocumentType): I.PaymentDocumentType {
  const result: I.PaymentDocumentType = {
    id: T.string(doc?.id),
    shopTimezone: T.timezone(doc?.shopTimezone),
    shopId: T.string(doc?.shopId),
    consultId: T.string(doc?.consultId),
    transactionIds: T.stringArray(doc?.transactionIds),
    status: status(doc?.status),
    totalPrice: T.number(doc?.totalPrice),
    adjustedPrice: T.number(doc?.adjustedPrice),
    discountedRate: T.number(doc?.discountedRate),
    remainingBalance: T.number(doc?.remainingBalance),
    createAt: T.string(doc?.createAt),
    modifiedAt: T.string(doc?.modifiedAt),
  };
  return result;
};

const status = function (st: I.PaymentStatusType | undefined | null) {
  return st !== undefined && st !== null ? st : Constant.Payment_UnPaid;
};
