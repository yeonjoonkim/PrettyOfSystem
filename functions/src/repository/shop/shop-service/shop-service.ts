import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Service from './../../../service/index';
import * as Repository from '../../../repository/index';

export const getAll = async function (): Promise<I.ShopServiceDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.Context.Shop.Service).get();
  const allServices = allSnapshot.docs.map(doc => {
    let config = doc.data() as I.ShopServiceDocumentType;
    config = transformTimeStampToDate(config);
    return {
      ...config,
    };
  });

  return allServices;
};

export const getSelectShop = async function (shopId: string): Promise<I.ShopServiceDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.ShopService(shopId)).get();
  const allServices = allSnapshot.docs.map(doc => {
    let config = doc.data() as I.ShopServiceDocumentType;
    config = transformTimeStampToDate(config);
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

const transformTimeStampToDate = function (config: I.ShopServiceDocumentType) {
  config.lastModifiedDate = Service.Date.toDate(config.lastModifiedDate);
  return config;
};