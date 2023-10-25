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
  isInsuranceCover: boolean;
  isOil: boolean;
  recommandForPregnant: boolean;
  relatedService: NameValuePairType;
  specializedEmployees: NameValuePairType[];
  options: ShopServiceOptionType[];
  extraIds: string[];
  title: string;
  description: string;
  lastModifiedDate: Date;
  lastModifiedEmployee: string;
};

export type ShopExtraDocumentType = {
  id: string;
  shopId: string;
  titleProp: string;
  title: string;
  lastModifiedDate: Date;
  lastModifiedEmployee: string;
  price: number;
};

export type ShopPackageDocumentType = {
  id: string;
  shopId: string;
  title: string;
  titleProp: string;
  specializedEmployees: NameValuePairType[];
  services: ShopPackageServiceType[];
  extras: ShopPackageExtraType[];
  originalPrice: number;
  discountPrice: number;
  discountedAmount: number;
  totalMin: number;
  discount: ShopPackageDiscountType;
  lastModifiedDate: Date;
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
};

export type ShopPackageExtraType = {
  id: string;
  title: string;
  price: number;
};
