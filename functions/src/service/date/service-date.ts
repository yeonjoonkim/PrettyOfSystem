import { Timestamp } from 'firebase-admin/firestore';

const isTimestamp = function (value: any): value is Timestamp {
  return value instanceof Timestamp;
};

const isDate = function (value: any): value is Date {
  return value instanceof Date;
};

export const toDate = function (value: Date | Timestamp): Date {
  return isTimestamp(value) ? value.toDate() : value;
};

export const toTimestamp = function (value: Date | Timestamp): Timestamp {
  return isDate(value) ? Timestamp.fromDate(value) : value;
};
