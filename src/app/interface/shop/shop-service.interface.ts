import { ChatGptTranslateDocumentType } from '../function/function-translation/function-translation.interface';
import { NameValuePairType } from '../global/global.interface';

export type ShopServiceTranslateDocumentsType = {
  title: ChatGptTranslateDocumentType;
  description: ChatGptTranslateDocumentType;
};

export type ShopServiceModalDocumentProp = {
  service: ShopServiceDocumentType;
  relatedServiceTypes: NameValuePairType[];
  specializedEmployees: NameValuePairType[];
  titleStatus: string;
  descriptionStatus: string;
};

export type ShopServiceModalPackageProp = {
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
  recommandForPregnant: boolean;
  relatedService: NameValuePairType;
  specializedEmployees: NameValuePairType[];
  options: ShopServiceOptionType[];
  title: string;
  description: string;
  lastModifiedDate: Date;
  lastModifiedEmployee: string;
};
