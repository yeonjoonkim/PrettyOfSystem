import { ChatGptTranslateDocumentType } from '../function/function-translation/function-translation.interface';
import { NameValuePairType, TimeItemType } from '../global/global.interface';
import * as Constant from '../../constant/constant';
import { ShopWorkHoursType } from './shop.interface';

export type ShopServiceTranslateDocumentsType = {
  title: ChatGptTranslateDocumentType;
  description: ChatGptTranslateDocumentType;
};

export type ShopLimitedProgpressBarType = {
  title: string;
  indeterminate: boolean;
  max: number;
  current: number;
};

export type ShopServiceModalDocumentProp = {
  service: ShopServiceDocumentType;
  relatedServiceTypes: NameValuePairType[];
  specializedEmployees: NameValuePairType[];
  extra: ShopExtraDocumentType[];
  titleStatus: string;
  extraFilter: NameValuePairType[];
  descriptionStatus: string;
};

export type ShopLanguagePackageModalProp = {
  relatedKeys: NameValuePairType[];
  languages: NameValuePairType[];
  title: string;
  isTitle: boolean;
  prop: string;
};

export type ShopServiceModalPackageTranslatedRequest = {
  prop: string;
  isTitle: boolean;
  key: string;
  translatedTo: string;
};

export type ShopServiceOptionType = {
  min: number;
  price: number;
};

export type ShopServiceDocumentType = {
  id: string;
  shopId: string;
  titleProp: string;
  descriptionProp: string;
  title: string;
  description: string;
  lastModifiedDate: string;
  lastModifiedEmployee: string;
  isInsuranceCover: boolean;
  isOil: boolean;
  recommandForPregnant: boolean;
  extraIds: string[];
  relatedService: NameValuePairType;
  specializedEmployees: NameValuePairType[];
  options: ShopServiceOptionType[];
};

export type ShopExtraDocumentType = {
  id: string;
  shopId: string;
  titleProp: string;
  title: string;
  lastModifiedDate: string;
  lastModifiedEmployee: string;
  price: number;
};

export type ShopPackageDocumentType = {
  id: string;
  shopId: string;
  title: string;
  titleProp: string;
  isInsuranceCover: boolean;
  specializedEmployees: NameValuePairType[];
  services: ShopPackageServiceType[];
  extras: ShopPackageExtraType[];
  originalPrice: number;
  discountPrice: number;
  discountedAmount: number;
  totalMin: number;
  isOil: boolean;
  discount: ShopPackageDiscountType;
  lastModifiedDate: string;
  lastModifiedEmployee: string;
  recommandForPregnant: boolean;
  limitedTime: ShopPackageLimitedTime | null;
};

export type ShopPackageLimitedTime = {
  offeredDateIndex: Constant.DayIndexType[];
  start: TimeItemType;
  end: TimeItemType;
};

export type ShopPackageModalDocumentProp = {
  package: ShopPackageDocumentType;
  filter: ShopPackageFilterDocumentProp;
  services: ShopServiceDocumentType[];
  extras: ShopExtraDocumentType[];
  operatingHours: ShopWorkHoursType;
  translateRequests: ChatGptTranslateDocumentType[];
};

export type ShopPackageFilterDocumentProp = {
  specializedEmployees: NameValuePairType[];
  extras: NameValuePairType[];
  services: NameValuePairType[];
};

export type ShopPackageDiscountType = {
  type: Constant.PackageDiscountType;
  value: number;
};

export type ShopPackageServiceType = {
  id: string;
  description: string;
  title: string;
  option: ShopServiceOptionType;
  relatedService: NameValuePairType;
};

export type ShopPackageExtraType = {
  id: string;
  title: string;
  price: number;
};

export type ShopCouponModalProp = {
  services: ShopServiceDocumentType[];
  serviceFilters: NameValuePairType[];
  coupon: ShopCouponDocumentType;
};

export type ShopCouponDocumentType = {
  id: string;
  shopId: string;
  title: string;
  titleProp: string;
  description: string;
  numOfCoupon: number;
  discount: ShopCouponDiscountType;
  discountPrice: number;
  discountAmount: number;
  expiryMonth: number;
  originalPrice: number;
  lastModifiedDate: string;
  lastModifiedEmployee: string;
  serviceId: string;
  option: ShopServiceOptionType;
  relatedService: NameValuePairType;
};

export type ShopCouponDiscountType = {
  type: Constant.CouponDiscountType;
  value: number;
};
