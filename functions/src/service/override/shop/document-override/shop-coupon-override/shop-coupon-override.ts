import * as I from '../../../../../interface';
import * as T from '../../../../type-checker/type-checker';
import * as Constant from '../../../../../constant';

export const override = function (doc: I.ShopCouponDocumentType): I.ShopCouponDocumentType {
  return {
    id: T.string(doc?.id),
    shopId: T.string(doc?.shopId),
    serviceId: T.string(doc?.serviceId),
    titleProp: T.string(doc?.titleProp),
    title: T.string(doc?.title),
    description: T.string(doc?.description),
    lastModifiedDate: T.string(doc?.lastModifiedDate),
    lastModifiedEmployee: T.string(doc?.lastModifiedEmployee),
    numOfCoupon: T.number(doc?.numOfCoupon),
    discountPrice: T.number(doc?.discountPrice),
    discountAmount: T.number(doc?.discountAmount),
    expiryMonth: T.number(doc?.expiryMonth),
    originalPrice: T.number(doc?.originalPrice),
    option: shopServiceOptionType(doc?.option),
    discount: shopCouponDiscount(doc?.discount),
  };
};

const shopCouponDiscount = function (discountType: I.ShopCouponDiscountType | null | undefined) {
  return discountType !== undefined && discountType !== null
    ? discountType
    : {
        type: Constant.PackageDiscountType.Percent,
        value: 0,
      };
};

const shopServiceOptionType = function (option: I.ShopServiceOptionType | null | undefined) {
  return option !== undefined && option !== null ? option : { min: 0, price: 0 };
};
