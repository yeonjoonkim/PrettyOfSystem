import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import { logger } from 'firebase-functions/v2';

export const getAll = async function (): Promise<I.ShopCapacityType[]> {
  const allCapacitiesSnapshot = await firestore().collection(Db.Context.System.Shop.Capacity).get();
  const allCapacities = allCapacitiesSnapshot.docs.map(doc => {
    const data = doc.data() as I.ShopCapacityType;
    return {
      ...data,
    };
  });

  return allCapacities;
};

export const getSelectedCapacity = async function (id: string): Promise<I.ShopCapacityType | null> {
  try {
    const snapshot = await firestore().collection(Db.Context.System.Shop.Capacity).doc(id).get();
    if (!snapshot.exists) {
      return null;
    }
    const config = snapshot.data() as I.ShopCapacityType;

    return config;
  } catch (error) {
    logger.error(' Cannot retreive', error);
    return null;
  }
};
