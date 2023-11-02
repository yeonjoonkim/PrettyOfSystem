import * as I from '../../../interface';
//import * as Constant from '../../../constant';

export const updateDocumentFormServiceOption = function (
  c: I.ShopCouponDocumentType,
  update: I.ShopServiceOptionType
) {
  c.option = update;
  c = updatePrice(c);
  return c;
};

export const updatePrice = function (c: I.ShopCouponDocumentType) {
  c.originalPrice = parseFloat((c.option.price * c.numOfCoupon).toFixed(2));
  c.discountAmount = parseFloat((c.originalPrice * c.discount.value).toFixed(2));
  c.discountPrice = parseFloat((c.originalPrice - c.discountAmount).toFixed(2));
  return c;
};
