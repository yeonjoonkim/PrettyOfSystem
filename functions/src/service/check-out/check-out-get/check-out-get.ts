import * as Constant from '../../../constant';
import * as I from '../../../interface';

export const findDeleted = function (before: I.CheckOutItem[], after: I.CheckOutItem[]) {
  return before.filter(itemBefore => !after.some(itemAfter => itemAfter.itemId === itemBefore.itemId));
};

export const findAdded = function (before: I.CheckOutItem[], after: I.CheckOutItem[]) {
  return after.filter(itemAfter => !before.some(itemBefore => itemBefore.itemId === itemAfter.itemId));
};

export const findEdited = function (before: I.CheckOutItem[], after: I.CheckOutItem[]) {
  return after.filter(itemAfter => {
    const itemBefore = before.find(itemBefore => itemBefore.itemId === itemAfter.itemId);
    return itemBefore !== undefined ? editvalidator(itemBefore, itemAfter) : false;
  });
};

export const findPurchasedCoupon = function (checkouts: I.CheckOutItem[]) {
  return checkouts.filter(checkout => checkout.type === Constant.CartItem.PurchasedCoupon);
};

export const findNewCoupon = function (checkouts: I.CheckOutItem[]) {
  return checkouts.filter(checkout => checkout.type === Constant.CartItem.Coupon);
};

const editvalidator = function (before: I.CheckOutItem, after: I.CheckOutItem) {
  return before.price !== after.price || before.qty !== after.qty || before.min !== after.min;
};

export const TotalPrice = function (checkouts: I.CheckOutItem[]) {
  return parseFloat(checkouts.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2));
};

export const TotalMin = function (checkouts: I.CheckOutItem[]) {
  return checkouts.reduce((acc, item) => acc + item.min * item.qty, 0);
};
