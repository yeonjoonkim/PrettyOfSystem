import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Repository from '../../index';

export const getAll = async function (): Promise<I.ShopExtraDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.Context.Shop.Extra).get();
  const allExtras = allSnapshot.docs.map(doc => {
    let config = doc.data() as I.ShopExtraDocumentType;
    return {
      ...config,
    };
  });

  return allExtras;
};

export const getSelectShop = async function (shopId: string): Promise<I.ShopExtraDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.ShopExtra(shopId)).get();
  const allExtras = allSnapshot.docs.map(doc => {
    let config = doc.data() as I.ShopExtraDocumentType;
    return {
      ...config,
    };
  });

  return allExtras;
};

export const updateExtra = async function (config: I.ShopExtraDocumentType): Promise<boolean> {
  const documentation = firestore().collection(Db.ShopExtra(config.shopId)).doc(config.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      await documentation.update({ ...config });
      return true;
    } catch (error) {
      await Repository.Error.createErrorReport(config, error, 'update', 'updateService');
      return false;
    }
  } else {
    return false;
  }
};
