import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';

export const getAll = async function (): Promise<I.LanguageSelectionType[]> {
  const allRef = await firestore().collection(Db.Context.System.Language.Selection).get();
  const allLanguageSelection = allRef.docs.map(doc => {
    const data = doc.data() as I.LanguageSelectionType;
    return {
      ...data,
    };
  });

  return allLanguageSelection;
};

export const getAllNameValueTypeList = async function () {
  const selections = await getAll();
  const result: I.NameValuePairType[] = selections.map(s => {
    return { name: s.name, value: s.code };
  });
  return result;
};
