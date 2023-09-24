import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Constant from '../../../constant';

export const getAll = async function (): Promise<I.ShopCountryType[]> {
  const allCountryRefs = await firestore().collection(Db.Context.System.Shop.Country).get();
  const allCountries = allCountryRefs.docs.map(doc => {
    const data = doc.data() as I.ShopCountryType;
    return {
      ...data,
    };
  });

  return allCountries;
};

export const getAustralia = async function (): Promise<I.ShopCountryType | null> {
  const all = await getAll();
  const australia = all.find(
    country => country.code === Constant.Default.CountryCodeType.Australia
  );
  return australia !== undefined ? australia : null;
};

export const getChina = async function (): Promise<I.ShopCountryType | null> {
  const all = await getAll();
  const china = all.find(country => country.code === Constant.Default.CountryCodeType.China);
  return china !== undefined ? china : null;
};

export const getKorea = async function (): Promise<I.ShopCountryType | null> {
  const all = await getAll();
  const korea = all.find(country => country.code === Constant.Default.CountryCodeType.Korean);
  return korea !== undefined ? korea : null;
};

export const getJapan = async function (): Promise<I.ShopCountryType | null> {
  const all = await getAll();
  const japan = all.find(country => country.code === Constant.Default.CountryCodeType.Japan);
  return japan !== undefined ? japan : null;
};
