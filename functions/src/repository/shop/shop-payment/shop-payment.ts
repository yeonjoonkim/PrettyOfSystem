import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Service from '../../../service/index';
import * as Error from '../../error/error';
import { logger } from 'firebase-functions/v2';

export const getAll = async function (shopId: string): Promise<I.PaymentDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.ShopPayment(shopId)).get();
  const allPayments = allSnapshot.docs.map(doc => {
    return override(doc.data() as I.PaymentDocumentType);
  });

  return allPayments;
};

export const create = async function (payment: I.PaymentDocumentType): Promise<I.PaymentDocumentType | null> {
  const documentation = firestore().collection(Db.ShopPayment(payment.shopId)).doc(payment.id);
  const data = await documentation.get();

  if (!data.exists) {
    try {
      await documentation.set(payment);
      logger.info(`Payment Documentation has been created: ${payment.id}`);
      return payment;
    } catch (error) {
      logger.error(error);
      await Error.createErrorReport(payment, error, 'create', 'create Payment');
      return null;
    }
  } else {
    return override(data.data() as I.PaymentDocumentType);
  }
};

export const updating = async function (payment: I.PaymentDocumentType): Promise<boolean> {
  const documentation = firestore().collection(Db.ShopPayment(payment.shopId)).doc(payment.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      await documentation.update(payment);
      return true;
    } catch (error) {
      await Error.createErrorReport(payment, error, 'update', 'Update Payment');
      return false;
    }
  } else {
    return false;
  }
};

export const deleting = async function (payment: I.PaymentDocumentType): Promise<boolean> {
  const documentation = firestore().collection(Db.ShopPayment(payment.shopId)).doc(payment.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      await documentation.delete();
      return true;
    } catch (error) {
      await Error.createErrorReport(payment, error, 'update', 'Delete Payment');
      return false;
    }
  } else {
    return false;
  }
};

export const get = async function (shopId: string, paymentId: string): Promise<I.PaymentDocumentType | null> {
  const documentation = firestore().collection(Db.ShopPayment(shopId)).doc(paymentId);
  const data = await documentation.get();
  if (data.exists) {
    return override(data.data() as I.PaymentDocumentType);
  } else {
    return null;
  }
};

export const createPaymentByConsult = async function (consult: I.ConsultDocumentType) {
  const newPayment: I.PaymentDocumentType = {
    id: consult.paymentId,
    shopTimezone: consult.shopTimezone,
    shopId: consult.shopId,
    consultId: consult.id,
    transactionIds: [],
    status: consult.paymentStatus,
    totalPrice: consult.totalPrice,
    adjustedPrice: consult.totalPrice,
    discountedRate: 0,
    remainingBalance: consult.totalPrice,
    createAt: Service.Date.shopTimeStamp(consult.shopTimezone),
    modifiedAt: Service.Date.shopTimeStamp(consult.shopTimezone),
  };
  return await create(newPayment);
};

const override = function (payment: I.PaymentDocumentType) {
  return Service.Override.Shop.Document.Payment.override(payment);
};
