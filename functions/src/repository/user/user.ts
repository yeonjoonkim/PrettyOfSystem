import { firestore } from 'firebase-admin';
import * as Db from '../../db';
import * as I from '../../interface';
import { logger } from 'firebase-functions/v2';

export const getAll = async function (): Promise<I.IUser[]> {
  const allUserSnapshot = await firestore().collection(Db.Context.User).get();
  const allUser = allUserSnapshot.docs.map(doc => {
    const data = doc.data() as I.IUser;
    return {
      ...data,
    };
  });

  return allUser;
};

export const getSelectedUser = async function (id: string) {
  try {
    const userSnapshot = await firestore().collection(Db.Context.User).doc(id).get();
    if (!userSnapshot.exists) {
      return null;
    }
    return userSnapshot.data() as I.IUser;
  } catch (err) {
    logger.error(err);
    return null;
  }
};

export const getSystemAdmins = async function () {
  const all = await getAll();
  return all.filter(user => user.isSystemAdmin);
};

export const updateSelectedUser = async function (user: I.IUser) {
  const documentation = firestore().collection(Db.Context.User).doc(user.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      await documentation.update({ ...user, lastModifiedDate: new Date() });
      return true;
    } catch (err) {
      logger.error(err);
      return false;
    }
  } else {
    return false;
  }
};

export const deleteSelectedUser = async function (id: string) {
  const documentation = firestore().collection(Db.Context.User).doc(id);

  try {
    await documentation.delete();
    return true;
  } catch (error) {
    logger.error(error);
    return false;
  }
};

export const getAssociatedShopUsers = async function (shopId: string) {
  const allUsers = await getAll();
  return allUsers.filter(user => user.associatedShops.filter(shop => shop.shopId === shopId).length > 0);
};

export const getAssociatedShopUserByIds = async function (shopIds: string[]) {
  const criteria = new Set(shopIds);
  const allUsers = await getAll();
  return allUsers.filter(user => user.associatedShopIds.some(ua => criteria.has(ua)));
};
