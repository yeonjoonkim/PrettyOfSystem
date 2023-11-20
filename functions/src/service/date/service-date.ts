import { Timestamp } from 'firebase-admin/firestore';
import { format, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import {
  parseISO,
  addMinutes,
  addHours,
  addMonths,
  addDays,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  startOfDay,
  Duration,
  Interval,
  intervalToDuration,
  endOfDay,
  startOfMonth,
  endOfMonth,
} from 'date-fns';
import * as Constant from '../../constant';
import * as I from '../../interface';
import * as moment from 'moment-timezone';

type FunctionDateType = Timestamp | Date | string;
const dateFormatter = `yyyy-MM-dd'T'HH:mm:ss`;
const localTimezone = moment.tz.guess();

const parseLocalDateTime = function (stringDate: string) {
  return parseISO(stringDate);
};

const isTimestamp = function (value: any): value is Timestamp {
  return value instanceof Timestamp;
};

export const toLocalDateTime = function (value: FunctionDateType): Date {
  return isTimestamp(value) ? value.toDate() : typeof value === 'string' ? parseLocalDateTime(value) : value;
};

export const toShopDateTime = function (date: FunctionDateType, timezone: Constant.TimeZoneType) {
  const localDate = toLocalDateTime(date);
  const utc = zonedTimeToUtc(localDate, localTimezone);
  return utcToZonedTime(utc, timezone);
};

export const shopNow = function (timezone: string | null | undefined) {
  return timezone ? utcToZonedTime(Date.now(), timezone) : new Date();
};

export const shopTimeStamp = function (timezone: string | null | undefined) {
  const date = shopNow(timezone);
  return formatLocalDateTime(date);
};

export const formatLocalDateTime = function (date: Date) {
  return format(date, dateFormatter);
};

export const formatByTimeItem = function (strDate: FunctionDateType, time: I.TimeItemType) {
  const date = toLocalDateTime(strDate);
  date.setHours(time.hr);
  date.setMinutes(time.min);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return formatLocalDateTime(date);
};

export const addMin = function (date: FunctionDateType, min: number) {
  const localDate = toLocalDateTime(date);
  const added = addMinutes(localDate, min);
  const stringDateTime = formatLocalDateTime(added);
  return stringDateTime;
};

export const addHour = function (date: FunctionDateType, hour: number) {
  const localDate = toLocalDateTime(date);
  const added = addHours(localDate, hour);
  const stringDateTime = formatLocalDateTime(added);
  return stringDateTime;
};

export const addDay = function (date: FunctionDateType, day: number) {
  const localDate = toLocalDateTime(date);
  const added = addDays(localDate, day);
  const stringDateTime = formatLocalDateTime(added);
  return stringDateTime;
};

export const addMonth = function (date: FunctionDateType, month: number) {
  const localDate = toLocalDateTime(date);
  const added = addMonths(localDate, month);
  const stringDateTime = formatLocalDateTime(added);
  return stringDateTime;
};

export const getStartEndDateTime = function (
  date: FunctionDateType,
  startTime: I.TimeItemType,
  min: number
): I.StartEndStringDateType {
  const startDateTime = formatByTimeItem(date, startTime);
  const endDateTime = addMin(startDateTime, min);
  return {
    start: startDateTime,
    end: endDateTime,
  };
};

export const interval = function (start: FunctionDateType, end: FunctionDateType): Duration {
  const interval: Interval = {
    start: toLocalDateTime(start),
    end: toLocalDateTime(end),
  };
  const result = intervalToDuration(interval);
  return result;
};

export const differenceInTime = function (start: FunctionDateType, end: FunctionDateType, decimal: number) {
  const startDate = toLocalDateTime(start);
  const endDate = toLocalDateTime(end);
  const diff = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60;
  const factor = Math.pow(10, decimal);
  return Math.round(diff * factor) / factor;
};

export const startDay = function (date: FunctionDateType) {
  const localDateTime = toLocalDateTime(date);
  const startofDay = startOfDay(localDateTime);
  return formatLocalDateTime(startofDay);
};

export const endDay = function (date: FunctionDateType) {
  const localDateTime = toLocalDateTime(date);
  const end = endOfDay(localDateTime);
  return formatLocalDateTime(end);
};

export const startMonth = function (date: FunctionDateType) {
  const localDateTime = toLocalDateTime(date);
  const startofMonth = startOfMonth(localDateTime);
  return formatLocalDateTime(startofMonth);
};

export const endMonth = function (date: FunctionDateType) {
  const localDateTime = toLocalDateTime(date);
  const endofMonth = endOfMonth(localDateTime);
  return formatLocalDateTime(endofMonth);
};

export const minimumDate = function (
  timezone: Constant.TimeZoneType,
  restrictedFromToday: boolean,
  previousDay: number
) {
  const now = shopNow(timezone);
  const startDate = startDay(now);
  const date = restrictedFromToday ? startDate : addDay(startDate, -previousDay);
  return date;
};

export const maximumDate = function (timezone: Constant.TimeZoneType, displayNextDay: number) {
  const defaultMaximumDate = formatLocalDateTime(new Date(2050, 11, 31));
  const now = shopNow(timezone);
  const startDate = startDay(now);
  return displayNextDay ? addDay(startDate, +displayNextDay) : defaultMaximumDate;
};

export const allDaysThisWeek = function (timezone: Constant.TimeZoneType) {
  const startday = startOfDay(shopNow(timezone));
  const start = startOfWeek(startday, { weekStartsOn: Constant.Date.DayIndex.Sun });
  const end = endOfWeek(startday, { weekStartsOn: Constant.Date.DayIndex.Sun });
  const interval = eachDayOfInterval({ start, end });
  return interval.map(date => {
    return formatLocalDateTime(date);
  });
};

export const allDaysNextWeek = function (timezone: Constant.TimeZoneType) {
  const nexweek = parseLocalDateTime(addDay(shopNow(timezone), 7));
  const startday = startOfDay(nexweek);
  const start = startOfWeek(startday, { weekStartsOn: Constant.Date.DayIndex.Sun });
  const end = endOfWeek(startday, { weekStartsOn: Constant.Date.DayIndex.Sun });
  const interval = eachDayOfInterval({ start, end });
  return interval.map(date => {
    return formatLocalDateTime(date);
  });
};

export const isSunday = function (date: FunctionDateType) {
  const localDate = toLocalDateTime(date);
  const isMonday = localDate.getDay() === Constant.Date.DayIndex.Sun;
  return isMonday;
};

export const isMonday = function (date: FunctionDateType) {
  const localDate = toLocalDateTime(date);
  return localDate.getDay() === Constant.Date.DayIndex.Mon;
};

export const isTuesday = function (date: FunctionDateType) {
  const localDate = toLocalDateTime(date);
  return localDate.getDay() === Constant.Date.DayIndex.Tue;
};

export const isWednesday = function (date: FunctionDateType) {
  const localDate = toLocalDateTime(date);
  return localDate.getDay() === Constant.Date.DayIndex.Wed;
};

export const isThursday = function (date: FunctionDateType) {
  const localDate = toLocalDateTime(date);
  return localDate.getDay() === Constant.Date.DayIndex.Thu;
};

export const isFriday = function (date: FunctionDateType) {
  const localDate = toLocalDateTime(date);
  return localDate.getDay() === Constant.Date.DayIndex.Fri;
};

export const isSaturday = function (date: FunctionDateType) {
  const localDate = toLocalDateTime(date);
  return localDate.getDay() === Constant.Date.DayIndex.Sat;
};

export const isMidNight = function (date: FunctionDateType) {
  const localDate = toLocalDateTime(date);
  return localDate.getHours() === 0 && localDate.getMinutes() === 0;
};

export const isStartTime = function (type: Constant.DateTimeStatusType) {
  return type === Constant.Date.TimeStatus.End;
};

export const isCurrentTime = function (type: Constant.DateTimeStatusType) {
  return type === Constant.Date.TimeStatus.Current;
};

export const isEndTime = function (type: Constant.DateTimeStatusType) {
  return type === Constant.Date.TimeStatus.End;
};
