import * as I from '../../../../interface';

export const override = function (doc: I.ShopServiceDocumentType): I.ShopServiceDocumentType {
  return {
    id: string(doc?.id),
    shopId: string(doc?.shopId),
    titleProp: string(doc?.titleProp),
    descriptionProp: string(doc?.descriptionProp),
    title: string(doc?.title),
    description: string(doc?.description),
    lastModifiedDate: string(doc?.lastModifiedDate),
    lastModifiedEmployee: string(doc?.lastModifiedEmployee),
    isInsuranceCover: boolean(doc?.isInsuranceCover),
    isOil: boolean(doc?.isOil),
    recommandForPregnant: boolean(doc?.recommandForPregnant),
    extraIds: stringArray(doc?.extraIds),
    relatedService: nameValuePair(doc?.relatedService),
    specializedEmployees: nameValuePairArray(doc?.specializedEmployees),
    options: serviceOptionArray(doc?.options),
  };
};

const string = function (str: string | null | undefined) {
  return typeof str === 'string' ? str : '';
};

const stringArray = function (arr: string[] | null | undefined) {
  return arr !== undefined && arr !== null ? arr : [];
};

const nameValuePair = function (pair: I.NameValuePairType | null | undefined) {
  return pair !== undefined && pair !== null ? pair : { name: '', value: '' };
};

const nameValuePairArray = function (pairs: I.NameValuePairType[] | null | undefined) {
  return pairs !== undefined && pairs !== null ? pairs : [];
};

const boolean = function (bool: boolean | null | undefined) {
  return typeof bool === 'boolean' ? bool : false;
};

const serviceOptionArray = function (ops: I.ShopServiceOptionType[] | null | undefined) {
  return ops !== undefined && ops !== null ? ops : [];
};
