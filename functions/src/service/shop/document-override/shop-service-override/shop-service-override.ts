import * as I from '../../../../interface';
import * as T from '../../../type-checker/type-checker';
export const override = function (doc: I.ShopServiceDocumentType): I.ShopServiceDocumentType {
  return {
    id: T.string(doc?.id),
    shopId: T.string(doc?.shopId),
    titleProp: T.string(doc?.titleProp),
    descriptionProp: T.string(doc?.descriptionProp),
    title: T.string(doc?.title),
    description: T.string(doc?.description),
    lastModifiedDate: T.string(doc?.lastModifiedDate),
    lastModifiedEmployee: T.string(doc?.lastModifiedEmployee),
    isInsuranceCover: T.boolean(doc?.isInsuranceCover),
    isOil: T.boolean(doc?.isOil),
    recommandForPregnant: T.boolean(doc?.recommandForPregnant),
    extraIds: T.stringArray(doc?.extraIds),
    relatedService: T.nameValuePair(doc?.relatedService),
    specializedEmployees: T.nameValuePairArray(doc?.specializedEmployees),
    options: serviceOptionArray(doc?.options),
  };
};

const serviceOptionArray = function (ops: I.ShopServiceOptionType[] | null | undefined) {
  return ops !== undefined && ops !== null ? ops : [];
};
