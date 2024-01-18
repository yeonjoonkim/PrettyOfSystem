import * as I from '../../interface';

export const string = function (str: string | null | undefined) {
  return typeof str === 'string' ? str : '';
};

export const nullableString = function (str: string | null | undefined) {
  return typeof str === 'string' ? str : null;
};

export const stringArray = function (arr: string[] | null | undefined) {
  return arr !== undefined && arr !== null ? arr : [];
};

export const timezone = function (timezone: string | null | undefined) {
  return typeof timezone === 'string' ? timezone : 'Australia/Brisbane';
};

export const number = function (num: number | null | undefined) {
  return typeof num === 'number' && !Number.isNaN(num) ? num : 0;
};

export const nullabelNumber = function (num: number | null | undefined) {
  return typeof num === 'number' && !Number.isNaN(num) ? num : null;
};

export const boolean = function (bool: boolean | null | undefined) {
  return typeof bool === 'boolean' ? bool : false;
};

export const booleanDefaultTrue = function (bool: boolean | null | undefined) {
  return typeof bool === 'boolean' ? bool : true;
};

export const nameValuePair = function (pair: I.NameValuePairType | null | undefined) {
  return pair !== undefined && pair !== null ? pair : { name: '', value: '' };
};

export const nameValuePairArray = function (pairs: I.NameValuePairType[] | null | undefined) {
  return pairs !== undefined && pairs !== null ? pairs : [];
};
