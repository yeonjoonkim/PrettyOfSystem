import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Repository from '../../../repository/index';
import * as Service from '../../../service/index';

export const getAll = async function (): Promise<I.ShopServiceDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.Context.Shop.Service).get();
  const allServices = allSnapshot.docs.map(doc => {
    let config = Service.Shop.Document.Service.override(doc.data() as I.ShopServiceDocumentType);
    return {
      ...config,
    };
  });

  return allServices;
};

export const getSelectShop = async function (shopId: string): Promise<I.ShopServiceDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.ShopService(shopId)).get();
  const allServices = allSnapshot.docs.map(doc => {
    let config = Service.Shop.Document.Service.override(doc.data() as I.ShopServiceDocumentType);
    return {
      ...config,
    };
  });

  return allServices;
};

export const updateService = async function (config: I.ShopServiceDocumentType): Promise<boolean> {
  const documentation = firestore().collection(Db.ShopService(config.shopId)).doc(config.id);
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
