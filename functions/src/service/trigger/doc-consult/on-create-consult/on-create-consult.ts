import * as Repository from '../../../../repository/index';
import * as Constant from '../../../../constant';
import * as Consult from '../../../../service/trigger/doc-consult/consult-validator/consult-validator';
import * as I from '../../../../interface';
import * as Db from '../../../../db';
import { logger } from 'firebase-functions/v2';
import { firestore } from 'firebase-admin';
export const Start = async function (consult: I.ConsultDocumentType) {
  const shopConfig = await Repository.Shop.Configuration.getSelectedConfig(consult.shopId);
  if (shopConfig !== null) {
    consult = await updateStatusBySchedule(consult);
    consult = await handleCheckoutValidator(consult);

    await Repository.Shop.Consult.updateDocument(consult);
    logger.info(`Consult has moved to ${consult.status.type}`);
    await handlePayment(consult);
  }
};

const updateStatusBySchedule = async function (consult: I.ConsultDocumentType) {
  const scheduleOverLap = await Consult.EmployeeScheduled.hasOverlapSchedule(consult);
  const anyEmployee = Consult.EmployeeScheduled.isAnyone(consult.associatedEmployee.name);
  const updateToScheduled = !scheduleOverLap && !anyEmployee;

  logger.info(`Employee: ${anyEmployee ? 'Anyone' : `${consult.associatedEmployee.name}`}`);
  logger.info(`${scheduleOverLap ? 'Failed - There is overlapped' : 'Success - There is no overlap'}`);

  consult.status = updateToScheduled ? Constant.Consult_ScheduledStatus : Constant.Consult_PendingStatus;
  return consult;
};

const handleCheckoutValidator = async function (consult: I.ConsultDocumentType) {
  const validator = Consult.Checkout.Validator.get(consult.checkouts, consult.totalPrice, consult.totalMin);
  const failed = !validator.isTotalMinCorrect || !validator.isTotalPriceCorrect;
  if (failed) {
    consult.totalMin =
      consult.totalMin !== validator.correctedTotalMin ? validator.correctedTotalMin : consult.totalMin;
    consult.totalPrice =
      consult.totalPrice !== validator.correctedTotalPrice ? validator.correctedTotalPrice : consult.totalPrice;
  }

  logger.info(`Checkout: ${failed ? 'Failed' : 'Success'}`);
  consult.status = failed ? Constant.Consult_PendingStatus : consult.status;
  return consult;
};

const handlePayment = async function (consult: I.ConsultDocumentType) {
  const payment = await Repository.Shop.Payment.createPaymentByConsult(consult);
  if (payment !== null) {
    const purchaseCouponTransactions = createPurchasedCouponTransactions(consult, payment.id);
    const transactions = [...purchaseCouponTransactions];
    if (transactions.length > 0) {
      // const sendTransactions = transactions.map(async tx => {
      //   await sleep(500);

      //   return true;
      // });
      // const sent = (await Promise.all(sendTransactions)).every(sent => sent === true);
      // logger.info(`All Sent: ${sent}`);
      // Todo
      logger.info(`Transaction Length: ${transactions.length}`);
    }

    logger.info(`purchaseCouponTransactions: ${purchaseCouponTransactions.length}`);
  }
};

const createPurchasedCouponTransactions = function (consult: I.ConsultDocumentType, paymentId: string) {
  const purchasedCoupons = Consult.Checkout.Get.findPurchasedCoupon(consult.checkouts);
  return purchasedCoupons.map(c => {
    const result: I.PaymentTransactionType = {
      id: firestore().collection(Db.ShopTransaction(consult.shopId)).doc().id,
      paymentId: paymentId,
      couponId: c.itemId,
      type: Constant.Transaction.Method.Coupon,
      surChargedRate: 0,
      chargedAmount: 0,
      unRealisedProfitLoss: 0,
    };
    return result;
  });
};
