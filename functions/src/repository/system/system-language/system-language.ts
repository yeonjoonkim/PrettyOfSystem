import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Error from '../../error/error';

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

export const getReportLanguage = async function (): Promise<I.LanguageSelectionType | null> {
  const snapshot = await firestore()
    .collection(Db.Context.System.Language.Selection)
    .where('isDefault', '==', true)
    .limit(1)
    .get();

  try {
    if (!snapshot.empty) {
      return snapshot.docs[0].data() as I.LanguageSelectionType;
    } else {
      return null;
    }
  } catch (error) {
    await Error.createErrorReport(snapshot, error, 'create', 'getReportLanguage');
    return null;
  }
};

export const getAllNameValueTypeList = async function () {
  const selections = await getAll();
  const result: I.NameValuePairType[] = selections.map(s => {
    return { name: s.name, value: s.code };
  });
  return result;
};
