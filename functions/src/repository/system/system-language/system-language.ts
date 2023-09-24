import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';

export const getAll = async function (): Promise<I.LanguageSelectionType[]> {
  const allRef = await firestore().collection(Db.Context.System.Shop.Category).get();
  const allLanguageSelection = allRef.docs.map(doc => {
    const data = doc.data() as I.LanguageSelectionType;
    return {
      ...data,
    };
  });

  return allLanguageSelection;
};
