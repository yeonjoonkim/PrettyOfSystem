import * as I from '../../interface';

export const string = function (str: string | null | undefined) {
  return typeof str === 'string' ? str : '';
};

export const ISODate = function (date: string | null | undefined) {
  const pattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
  const match = date !== undefined && date !== null ? pattern.test(date) : false;
  return match && typeof date === 'string' ? date : '1990-01-01T00:00:00';
};

export const nullableISODate = function (date: string | null | undefined) {
  return date !== undefined && date !== null && typeof date === 'string' ? ISODate(date) : null;
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

export const decimal = function (num: number | null | undefined, round: number) {
  const n = number(num);
  return parseFloat(n.toFixed(round));
};

export const int = function (num: number | null | undefined) {
  const n = number(num);
  return parseFloat(n.toFixed(0));
};

export const nullabelNumber = function (num: number | null | undefined) {
  return typeof num === 'number' && !Number.isNaN(num) ? num : null;
};

export const nullableDecimal = function (num: number | null | undefined, round: number) {
  const n = nullabelNumber(num);
  return n !== null && typeof n === 'number' ? parseFloat(n.toFixed(round)) : null;
};

export const nullableInt = function (num: number | null | undefined) {
  const n = nullabelNumber(num);
  return n !== null && typeof n === 'number' ? parseFloat(n.toFixed(0)) : null;
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
