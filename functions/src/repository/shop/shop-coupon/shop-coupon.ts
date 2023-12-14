import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Repository from '../../index';
import * as Service from '../../../service/index';

export const getAll = async function (): Promise<I.ShopCouponDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.Context.Shop.Coupon).get();
  const allCoupons = allSnapshot.docs.map(doc => {
    const config = Service.Shop.Document.Coupon.override(doc.data() as I.ShopCouponDocumentType);
    return {
      ...config,
    };
  });

  return allCoupons;
};

export const getSelectShop = async function (shopId: string): Promise<I.ShopCouponDocumentType[]> {
  const allSnapshot = await firestore().collection(Db.ShopCoupon(shopId)).get();
  const selectedCoupons = allSnapshot.docs.map(doc => {
    const config = Service.Shop.Document.Coupon.override(doc.data() as I.ShopCouponDocumentType);
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
