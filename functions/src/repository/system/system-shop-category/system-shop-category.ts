import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';

export const getAll = async function (): Promise<I.ShopCategoryType[]> {
  const allCategoriesRef = await firestore().collection(Db.Context.System.Shop.Category).get();
  const allCategories = allCategoriesRef.docs.map(doc => {
    const data = doc.data() as I.ShopCategoryType;
    return {
      ...data,
    };
  });

  return allCategories;
};

export const getMassageCategory = async function (): Promise<I.ShopCategoryType | null> {
  const allCategories = await getAll();
  const massageCategory = allCategories.find(cat => cat.isMassageTheraphy);
  return massageCategory !== undefined ? massageCategory : null;
};

export const getMobileRepairCategory = async function (): Promise<I.ShopCategoryType | null> {
  const allCategories = await getAll();
  const mobileRepairCategory = allCategories.find(cat => cat.isMobileShop);
  return mobileRepairCategory !== undefined ? mobileRepairCategory : null;
};

export const getHairSalonCategory = async function (): Promise<I.ShopCategoryType | null> {
  const allCategories = await getAll();
  const hairSalonCategory = allCategories.find(cat => cat.isHairSalon);
  return hairSalonCategory !== undefined ? hairSalonCategory : null;
};

export const getSkinCareCategory = async function (): Promise<I.ShopCategoryType | null> {
  const allCategories = await getAll();
  const skinCareCategory = allCategories.find(cat => cat.isSkinCare);
  return skinCareCategory !== undefined ? skinCareCategory : null;
};

export const getPersonalTrainingCategory = async function (): Promise<I.ShopCategoryType | null> {
  const allCategories = await getAll();
  const trainingCategory = allCategories.find(cat => cat.isPersonalTrainning);
  return trainingCategory !== undefined ? trainingCategory : null;
};
