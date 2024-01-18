import * as I from '../../../interface';
import * as Checkout from '../check-out-get/check-out-get';
import * as Constant from '../../../constant';
export const get = function (checkouts: I.CheckOutItem[], totalPrice: number, totalMin: number) {
  const result: I.CheckoutValidatorType = {
    isTotalPriceCorrect: isTotalPriceCorrect(checkouts, totalPrice),
    isTotalMinCorrect: isTotalMinCorrect(checkouts, totalMin),
    correctedTotalMin: Checkout.TotalMin(checkouts),
    correctedTotalPrice: Checkout.TotalPrice(checkouts),
  };
  return result;
};

export const isOnlyPurchasedCoupon = function (checkouts: I.CheckOutItem[]) {
  return checkouts.length === checkouts.filter(s => s.type === Constant.CartItem.PurchasedCoupon).length;
};

export const isTotalPriceCorrect = function (checkouts: I.CheckOutItem[], totalPrice: number) {
  return Checkout.TotalPrice(checkouts) === totalPrice;
};

export const isTotalMinCorrect = function (checkouts: I.CheckOutItem[], totalMin: number) {
  return Checkout.TotalMin(checkouts) === totalMin;
};
