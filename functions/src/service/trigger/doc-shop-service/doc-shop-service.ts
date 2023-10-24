import * as I from '../../../interface';
import * as Constant from '../../../constant';
import * as Db from '../../../db';
import { firestore } from 'firebase-admin';
import { logger } from 'firebase-functions/v2';

export const onChangeOption = function (
  b: I.ShopServiceDocumentType,
  a: I.ShopServiceDocumentType
): I.OnChangeShopServiceOptionType {
  const before = b.options;
  const after = a.options;
  logger.info('Option Change Detection - Start');
  const createKey = (item: I.ShopServiceOptionType) => `${item.min}`;
  const mapItemsByKey = (arr: I.ShopServiceOptionType[]) => {
    const map = new Map<string, I.ShopServiceOptionType>();
    for (const item of arr) {
      map.set(createKey(item), item);
    }
    return map;
  };

  const beforeMap = mapItemsByKey(before);
  const afterMap = mapItemsByKey(after);
  logger.info('Option Change Detection - beforeMap', beforeMap);
  logger.info('Option Change Detection - afterMap', afterMap);

  const deleteItems: I.ShopServiceOptionType[] = [];
  const addItems: I.ShopServiceOptionType[] = [];
  const updateItems: { previous: I.ShopServiceOptionType; current: I.ShopServiceOptionType }[] = [];

  logger.info('// Find items to delete or update');
  for (const [key, itemBefore] of beforeMap.entries()) {
    const itemAfter = afterMap.get(key);
    logger.info('itemAfter', itemAfter);

    if (itemAfter) {
      if (itemBefore.price !== itemAfter.price) {
        logger.info('Update Item', itemBefore);
        updateItems.push({
          previous: itemBefore,
          current: itemAfter,
        });
      }
    } else {
      logger.info('Delete Item', itemBefore);
      deleteItems.push(itemBefore);
    }
  }

  logger.info('// Find items to add');
  for (const [key, itemAfter] of afterMap.entries()) {
    if (!beforeMap.has(key)) {
      logger.info('Add Item', itemAfter);
      addItems.push(itemAfter);
    }
  }

  logger.info('Option Change Detection - End');
  return {
    add: addItems,
    delete: deleteItems,
    update: updateItems,
  };
};

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
