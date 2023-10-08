import * as I from '../../../interface';
import * as Constant from '../../../constant';
import * as Db from '../../../db';
import { firestore } from 'firebase-admin';

export const getTranslateRequestDocument = function (
  lang: I.NameValuePairType[],
  shopId: string,
  serviceId: string,
  prop: string,
  format: Constant.TextFormatType
) {
  const documentationCollection = firestore().collection(Db.Context.ChatGptTranslateRequest);
  const newDoc = documentationCollection.doc();
  const result: I.ChatGptTranslateDocumentType = {
    id: newDoc.id,
    shopId: shopId,
    serviceId: serviceId,
    packageKey: serviceId,
    format: format,
    languages: lang,
    result: [],
    prop: prop,
    status: Constant.API.TranslateStatus.Create,
    createdDate: new Date(),
    error: [],
    attempt: 0,
    translateResult: [],
    parentId: '',
    isSystemAdmin: false,
  };
  return result;
};
