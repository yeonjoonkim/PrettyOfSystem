import * as I from '../../../../interface';
import * as T from '../../../type-checker/type-checker';
import * as Constant from '../../../../constant';

export const override = function (doc: I.ShopPackageDocumentType): I.ShopPackageDocumentType {
  return {
    id: T.string(doc?.id),
    shopId: T.string(doc?.shopId),
    title: T.string(doc?.title),
    titleProp: T.string(doc?.titleProp),
    lastModifiedDate: T.string(doc?.lastModifiedDate),
    lastModifiedEmployee: T.string(doc?.lastModifiedEmployee),
    isInsuranceCover: T.boolean(doc?.isInsuranceCover),
    isOil: T.boolean(doc?.isOil),
    recommandForPregnant: T.boolean(doc?.recommandForPregnant),
    specializedEmployees: T.nameValuePairArray(doc?.specializedEmployees),
    services: shopPackageServiceArray(doc?.services),
    extras: shopPackageExtraArray(doc?.extras),
    originalPrice: T.number(doc?.originalPrice),
    discountPrice: T.number(doc?.discountPrice),
    discountedAmount: T.number(doc?.discountedAmount),
    totalMin: T.number(doc?.totalMin),
    discount: shopPackageDiscount(doc?.discount),
    limitedTime: limitedTime(doc?.limitedTime),
  };
};

const shopPackageServiceArray = function (array: I.ShopPackageServiceType[] | null | undefined) {
  return array !== undefined && array !== null ? array : [];
};

const shopPackageExtraArray = function (array: I.ShopPackageExtraType[] | null | undefined) {
  return array !== undefined && array !== null ? array : [];
};

const shopPackageDiscount = function (discountType: I.ShopPackageDiscountType | null | undefined) {
  return discountType !== undefined && discountType !== null
    ? discountType
    : {
        type: Constant.PackageDiscountType.Percent,
        value: 0,
      };
};

const limitedTime = function (limitedTime: I.ShopPackageLimitedTime | null | undefined) {
  return limitedTime !== undefined && limitedTime !== null ? limitedTime : null;
};
