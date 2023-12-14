import * as I from '../../../../interface';
import * as T from '../../../type-checker/type-checker';

export const override = function (doc: I.ShopExtraDocumentType): I.ShopExtraDocumentType {
  return {
    id: T.string(doc?.id),
    shopId: T.string(doc?.shopId),
    titleProp: T.string(doc?.titleProp),
    title: T.string(doc?.title),
    lastModifiedDate: T.string(doc?.lastModifiedDate),
    lastModifiedEmployee: T.string(doc?.lastModifiedEmployee),
    price: T.number(doc?.price),
  };
};
