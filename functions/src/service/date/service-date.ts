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
  differenceInDays,
  differenceInHours,
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

export const duration = function (start: string, end: string) {
  const interval: Interval = {
    start: toLocalDateTime(start),
    end: toLocalDateTime(end),
  };

  return intervalToDuration(interval);
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

export const getTotalMin = function (start: string, end: string) {
  const startTime = moment(start, dateFormatter);
  const endTime = moment(end, dateFormatter);

  const diff = endTime.diff(startTime, 'minutes');
  return diff;
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

export const differenceInDay = function (start: FunctionDateType, end: FunctionDateType) {
  const startDate = toLocalDateTime(start);
  const endDate = toLocalDateTime(end);
  return differenceInDays(endDate, startDate);
};

export const differenceInHour = function (start: FunctionDateType, end: FunctionDateType) {
  const startDate = toLocalDateTime(start);
  const endDate = toLocalDateTime(end);
  return differenceInHours(endDate, startDate);
};

export const getDateTimeRange = function (start: string, end: string) {
  let array = [];
  const endDate = addDay(startDay(end), 1);
  let currentDate = startDay(start);

  while (currentDate < endDate) {
    array.push(currentDate);
    currentDate = addDay(currentDate, 1);
  }

  return array;
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
  const dateFormat = toLocalDateTime(date);
  const localDate = formatLocalDateTime(dateFormat);
  return localDate.endsWith('T00:00:00');
};

export const isWorkingDate = function (operatingHours: I.ShopWorkHoursType, date: FunctionDateType) {
  if (isMonday(date)) {
    return operatingHours.mon.isOpen;
  }
  if (isTuesday(date)) {
    return operatingHours.tue.isOpen;
  }
  if (isWednesday(date)) {
    return operatingHours.wed.isOpen;
  }
  if (isThursday(date)) {
    return operatingHours.thu.isOpen;
  }
  if (isFriday(date)) {
    return operatingHours.fri.isOpen;
  }
  if (isSaturday(date)) {
    return operatingHours.sat.isOpen;
  }
  if (isSunday(date)) {
    return operatingHours.sun.isOpen;
  }
  return false;
};

export const getDayIndex = function (date: FunctionDateType) {
  const d = toLocalDateTime(date);
  return d.getDay() as Day;
};

export const getDayType = function (date: FunctionDateType): Constant.DayType {
  const index = getDayIndex(date);
  switch (index) {
    case Constant.Date.DayIndex.Sun:
      return Constant.Date.Day.Sun;
    case Constant.Date.DayIndex.Mon:
      return Constant.Date.Day.Mon;
    case Constant.Date.DayIndex.Tue:
      return Constant.Date.Day.Tue;
    case Constant.Date.DayIndex.Wed:
      return Constant.Date.Day.Wed;
    case Constant.Date.DayIndex.Thu:
      return Constant.Date.Day.Thu;
    case Constant.Date.DayIndex.Fri:
      return Constant.Date.Day.Fri;
    case Constant.Date.DayIndex.Sat:
      return Constant.Date.Day.Sat;
  }
};

export const getStartDateTimeByStartOfDay = function (roster: I.ShopWorkHoursType, startOfDay: string) {
  const day = getDayType(startOfDay);
  const startTime = roster[day].operatingHours.openTime;
  const startDateTime = formatByTimeItem(startOfDay, startTime);
  return startDateTime;
};

export const getEndDateTimeByStartOfDay = function (roster: I.ShopWorkHoursType, startOfDay: string) {
  const day = getDayType(startOfDay);
  const startTime = roster[day].operatingHours.closeTime;
  const startDateTime = formatByTimeItem(startOfDay, startTime);
  return startDateTime;
};

export const getIsWorkingByStartOfDay = function (roster: I.ShopWorkHoursType, startOfDay: string) {
  const day = getDayType(startOfDay);
  return roster[day].isOpen;
};

export const getFormattedBreakTimes = function (roster: I.ShopWorkHoursType, startOfDay: string) {
  const day = getDayType(startOfDay);
  const breakTimes: I.ShopEmployeeBreakTimeType[] = roster[day].breakTimes.map(bt => {
    return {
      startDateTime: formatByTimeItem(startOfDay, bt.start),
      endDateTime: formatByTimeItem(startOfDay, bt.end),
    };
  });
  return breakTimes;
};

export const getBreakTimeHours = function (breakTimes: I.ShopEmployeeBreakTimeType[]) {
  const breakHours = breakTimes.map(bt => differenceInHour(bt.startDateTime, bt.endDateTime));
  const totalBreakHours = breakHours.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return parseFloat(totalBreakHours.toFixed(2));
};

export const getWorkHours = function (start: string, end: string, breakTimes: I.ShopEmployeeBreakTimeType[]) {
  const workHours = isMidNight(start) && isMidNight(end) ? 24 : differenceInHour(start, end);
  const breakHours = getBreakTimeHours(breakTimes);
  const netWorkHours = workHours - breakHours;

  return parseFloat(netWorkHours.toFixed(2));
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
