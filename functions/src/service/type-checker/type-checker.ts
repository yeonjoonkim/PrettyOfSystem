import * as I from '../../interface';

export const string = function (str: string | null | undefined) {
  return typeof str === 'string' ? str : '';
};

export const stringArray = function (arr: string[] | null | undefined) {
  return arr !== undefined && arr !== null ? arr : [];
};

export const number = function (num: number | null | undefined) {
  return typeof num === 'number' && !Number.isNaN(num) ? num : 0;
};

export const boolean = function (bool: boolean | null | undefined) {
  return typeof bool === 'boolean' ? bool : false;
};

export const nameValuePair = function (pair: I.NameValuePairType | null | undefined) {
  return pair !== undefined && pair !== null ? pair : { name: '', value: '' };
};

export const nameValuePairArray = function (pairs: I.NameValuePairType[] | null | undefined) {
  return pairs !== undefined && pairs !== null ? pairs : [];
};
