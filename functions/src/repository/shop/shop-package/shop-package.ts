import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Service from '../../../service/index';
import * as Repository from '../../index';

export const getAll = async function (): Promise<I.ShopPackageDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.Context.Shop.Package).get();
  const allPackages = allSnapshot.docs.map(doc => {
    let config = doc.data() as I.ShopPackageDocumentType;
    config = transformTimeStampToDate(config);
    return {
      ...config,
    };
  });

  return allPackages;
};

export const getSelectShop = async function (shopId: string): Promise<I.ShopPackageDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.ShopPackage(shopId)).get();
  const allPackages = allSnapshot.docs.map(doc => {
    let config = doc.data() as I.ShopPackageDocumentType;
    config = transformTimeStampToDate(config);
    return {
      ...config,
    };
  });

  return allPackages;
};

export const deletePackage = async function (config: I.ShopPackageDocumentType): Promise<boolean> {
  const documentation = firestore().collection(Db.ShopPackage(config.shopId)).doc(config.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      await documentation.delete();
      return true;
    } catch (error) {
      await Repository.Error.createErrorReport(config, error, 'delete', 'deletePackage');
      return false;
    }
  } else {
    return false;
  }
};

export const updatePackage = async function (config: I.ShopPackageDocumentType): Promise<boolean> {
  const documentation = firestore().collection(Db.ShopPackage(config.shopId)).doc(config.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      await documentation.update({ ...config });
      return true;
    } catch (error) {
      await Repository.Error.createErrorReport(config, error, 'update', 'updatePackage');
      return false;
    }
  } else {
    return false;
  }
};

const transformTimeStampToDate = function (config: I.ShopPackageDocumentType) {
  config.lastModifiedDate = Service.Date.toDate(config.lastModifiedDate);
  return config;
};