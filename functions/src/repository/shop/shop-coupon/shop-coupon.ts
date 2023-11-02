import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Service from '../../../service/index';
import * as Repository from '../../index';

export const getAll = async function (): Promise<I.ShopCouponDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.Context.Shop.Coupon).get();
  const allCoupons = allSnapshot.docs.map(doc => {
    let config = doc.data() as I.ShopCouponDocumentType;
    config = transformTimeStampToDate(config);
    return {
      ...config,
    };
  });

  return allCoupons;
};

export const getSelectShop = async function (shopId: string): Promise<I.ShopCouponDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.ShopCoupon(shopId)).get();
  const selectedCoupons = allSnapshot.docs.map(doc => {
    let config = doc.data() as I.ShopCouponDocumentType;
    config = transformTimeStampToDate(config);
    return {
      ...config,
    };
  });

  return selectedCoupons;
};

export const updateCoupon = async function (config: I.ShopCouponDocumentType): Promise<boolean> {
  const documentation = firestore().collection(Db.ShopCoupon(config.shopId)).doc(config.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      await documentation.update({ ...config });
      return true;
    } catch (error) {
      await Repository.Error.createErrorReport(config, error, 'update', 'updateCoupon');
      return false;
    }
  } else {
    return false;
  }
};

export const deleteCoupon = async function (config: I.ShopCouponDocumentType): Promise<boolean> {
  const documentation = firestore().collection(Db.ShopCoupon(config.shopId)).doc(config.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      await documentation.delete();
      return true;
    } catch (error) {
      await Repository.Error.createErrorReport(config, error, 'delete', 'deleteCoupon');
      return false;
    }
  } else {
    return false;
  }
};

const transformTimeStampToDate = function (config: I.ShopCouponDocumentType) {
  config.lastModifiedDate = Service.Date.toDate(config.lastModifiedDate);
  return config;
};
