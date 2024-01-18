import * as I from '../../../interface';
import * as Checkout from '../check-out-get/check-out-get';

export const get = function (before: I.ConsultDocumentType, after: I.ConsultDocumentType) {
  const deleted = Checkout.findDeleted(before.checkouts, after.checkouts);
  const added = Checkout.findAdded(before.checkouts, after.checkouts);
  const edited = Checkout.findDeleted(before.checkouts, after.checkouts);
  const hasModified = [...deleted, ...added, ...edited].length > 0;
  const result: I.CheckoutChangeValidatorType = {
    hasModifiedCheckout: hasModified,
    hasUpdatedPrice: before.totalPrice !== after.totalPrice,
    hasUpdateMin: before.totalMin !== after.totalMin,
  };
  return result;
};
