import * as I from '../../../interface';
import * as Constant from '../../../constant';

export const updateExtra = function (extra: I.ShopExtraDocumentType, p: I.ShopPackageDocumentType) {
  let ex = p.extras.find(s => s.id === extra.id);
  const index = p.extras.findIndex(s => s.id === extra.id);

  if (ex !== undefined) {
    ex.price = extra.price;
    p.extras[index] = ex;
  }

  return p;
};

export const deleteExtra = function (extra: I.ShopExtraDocumentType, p: I.ShopPackageDocumentType) {
  p.extras = p.extras.filter(e => e.id !== extra.id);
  return p;
};

export const updatePrice = function (p: I.ShopPackageDocumentType) {
  p.totalMin = sumMinutes(p);
  p.originalPrice = sumTotalPrice(p);
  return applyDiscount(p);
};

const applyDiscount = function (p: I.ShopPackageDocumentType) {
  const isPercentDiscount = p.discount.type === Constant.PackageDiscountType.Percent;

  if (isPercentDiscount) {
    return percentDiscount(p);
  } else {
    return dollarDiscount(p);
  }
};

const percentDiscount = function (p: I.ShopPackageDocumentType) {
  const discountedAmount = parseFloat((p.originalPrice * p.discount.value).toFixed(2));
  const discountPrice = parseFloat((p.originalPrice - p.discountedAmount).toFixed(2));

  p.discountedAmount = discountedAmount;
  p.discountPrice = discountPrice > 0 ? discountPrice : 0;

  return p;
};

const dollarDiscount = function (p: I.ShopPackageDocumentType) {
  const discountedAmount = parseFloat(p.discount.value.toFixed(2));
  const discountPrice = parseFloat((p.originalPrice - discountedAmount).toFixed(2));

  p.discountedAmount = discountedAmount;
  p.discountPrice = discountPrice > 0 ? discountPrice : 0;

  return p;
};
const sumMinutes = function (p: I.ShopPackageDocumentType) {
  return Math.round(p.services.map(s => s.option.min).reduce((acc, curr) => acc + curr, 0));
};

const sumTotalPrice = function (p: I.ShopPackageDocumentType) {
  const sumServices = sumServiceOptionPrice(p);
  const sumExtras = sumExtraPrice(p);
  const result = sumExtras + sumServices;
  return parseFloat(result.toFixed(2));
};

const sumServiceOptionPrice = function (p: I.ShopPackageDocumentType) {
  if (!p.services || !Array.isArray(p.services)) {
    return 0; // or throw an error or handle it in a different way
  }

  const sum = p.services
    .filter(s => s && s.option && typeof s.option.price === 'number')
    .map(s => s.option.price)
    .reduce((acc, curr) => acc + curr, 0);

  return parseFloat(sum.toFixed(2));
};

const sumExtraPrice = function (p: I.ShopPackageDocumentType) {
  if (!p.extras || !Array.isArray(p.extras)) {
    return 0; // or throw an error or handle it in a different way
  }

  const sum = p.extras
    .filter(s => s && typeof s.price === 'number')
    .map(s => s.price)
    .reduce((acc, curr) => acc + curr, 0);

  return parseFloat(sum.toFixed(2));
};
