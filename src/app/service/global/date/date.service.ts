import { Injectable } from '@angular/core';
import { DateTransformService, DateType, localTimezone } from './date-transform/date-transform.service';
import * as Constant from '../../../constant/constant';
import {
  IDateIndexPairDay,
  DatePeriodType,
  TimeItemType,
  NameValuePairType,
} from 'src/app/interface/global/global.interface';
import { utcToZonedTime } from 'date-fns-tz';
import {
  addDays,
  addHours,
  addMinutes,
  addMonths,
  addSeconds,
  addWeeks,
  addYears,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInWeeks,
  eachDayOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  getHours,
  getMinutes,
  intervalToDuration,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  public localTimezone = localTimezone;
  public day: IDateIndexPairDay[] = [
    { index: Constant.Date.DayIndex.Sun, day: Constant.Date.Day.Sun },
    { index: Constant.Date.DayIndex.Mon, day: Constant.Date.Day.Mon },
    { index: Constant.Date.DayIndex.Tue, day: Constant.Date.Day.Tue },
    { index: Constant.Date.DayIndex.Wed, day: Constant.Date.Day.Wed },
    { index: Constant.Date.DayIndex.Thu, day: Constant.Date.Day.Thu },
    { index: Constant.Date.DayIndex.Fri, day: Constant.Date.Day.Fri },
    { index: Constant.Date.DayIndex.Sat, day: Constant.Date.Day.Sat },
  ];
  public period: DatePeriodType[] = [
    { name: 'date.title.weekly', type: Constant.Date.Period.Weekly, week: 1, day: 7 },
    { name: 'date.title.monthly', type: Constant.Date.Period.Monthly, week: 4, day: 28 },
    { name: 'date.title.quarterly', type: Constant.Date.Period.Quarterly, week: 12, day: 84 },
    { name: 'date.title.halfyear', type: Constant.Date.Period.HalfYear, week: 26, day: 182 },
    { name: 'date.title.annually', type: Constant.Date.Period.Annually, week: 52, day: 365 },
    { name: 'date.title.custom', type: Constant.Date.Period.Custom, week: 0, day: 0 },
  ];
  public timeSelection: NameValuePairType[] = [
    { name: 'label.title.5min', value: '5' },
    { name: 'label.title.10min', value: '10' },
    { name: 'label.title.15min', value: '15' },
    { name: 'label.title.30min', value: '30' },
  ];

  constructor(public transform: DateTransformService) {}

  timeItem(date: Date): TimeItemType {
    return {
      hr: date.getHours(),
      min: date.getMinutes(),
      dayNightType: getDateDayNightType(date.getHours()),
      strValue: timeString(date),
    };
  }

  shopNow(timezone: Constant.TimeZoneType | undefined | null) {
    return timezone ? utcToZonedTime(Date.now(), timezone) : new Date();
  }

  shopTimeStamp(timezone: Constant.TimeZoneType | undefined | null) {
    const now = this.shopNow(timezone);
    return this.transform.formatLocalDateTime(now);
  }

  addSec(date: DateType, sec: number) {
    const localDate = this.transform.toLocalDateTime(date);
    const added = addSeconds(localDate, sec);
    const format = this.transform.formatLocalDateTime(added);
    return format;
  }

  addMin(date: DateType, min: number) {
    const localDate = this.transform.toLocalDateTime(date);
    const added = addMinutes(localDate, min);
    const format = this.transform.formatLocalDateTime(added);
    return format;
  }

  addHour(date: DateType, hour: number) {
    const localDate = this.transform.toLocalDateTime(date);
    const added = addHours(localDate, hour);
    const format = this.transform.formatLocalDateTime(added);
    return format;
  }

  addDay(date: DateType, day: number) {
    const localDate = this.transform.toLocalDateTime(date);
    const added = addDays(localDate, day);
    const format = this.transform.formatLocalDateTime(added);
    return format;
  }

  addWeek(date: DateType, week: number) {
    const localDate = this.transform.toLocalDateTime(date);
    const added = addWeeks(localDate, week);
    const format = this.transform.formatLocalDateTime(added);
    return format;
  }

  addMonth(date: DateType, month: number) {
    const localDate = this.transform.toLocalDateTime(date);
    const added = addMonths(localDate, month);
    const format = this.transform.formatLocalDateTime(added);
    return format;
  }

  getDate(date: DateType) {
    const dateTime = this.transform.toLocalDateTime(date);
    return dateTime.getDate();
  }

  getDayIndex(date: DateType) {
    const dateTime = this.transform.toLocalDateTime(date);
    return dateTime.getDay() as Constant.DayIndexType;
  }

  getDay(date: DateType) {
    const dateTime = this.transform.toLocalDateTime(date);
    return dateTime.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase() as Constant.DayType;
  }

  addYear(date: DateType, year: number) {
    const localDate = this.transform.toLocalDateTime(date);
    const added = addYears(localDate, year);
    const format = this.transform.formatLocalDateTime(added);
    return format;
  }

  duration(start: DateType, end: DateType) {
    const interval: Interval = {
      start: this.transform.toLocalDateTime(start),
      end: this.transform.toLocalDateTime(end),
    };
    const result = intervalToDuration(interval);
    return result;
  }

  differenceInTime(start: DateType, end: DateType, decimal: number) {
    const startDate = this.transform.toLocalDateTime(start);
    const endDate = this.transform.toLocalDateTime(end);
    const diff = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60;
    const factor = Math.pow(10, decimal);
    return Math.round(diff * factor) / factor;
  }

  differenceInMintues(start: DateType, end: DateType, decimal: number) {
    const startDate = this.transform.toLocalDateTime(start);
    const endDate = this.transform.toLocalDateTime(end);
    const diff = differenceInMinutes(startDate, endDate);
    return diff;
  }

  differenceInHours(start: DateType, end: DateType, decimal: number) {
    const startDate = this.transform.toLocalDateTime(start);
    const endDate = this.transform.toLocalDateTime(end);
    const diff = differenceInHours(startDate, endDate);
    return diff;
  }

  differenceInDays(start: DateType, end: DateType) {
    const startDate = this.transform.toLocalDateTime(start);
    const endDate = this.transform.toLocalDateTime(end);
    const diff = differenceInDays(startDate, endDate);
    return diff;
  }

  differenceInWeeks(start: DateType, end: DateType) {
    const startDate = this.transform.toLocalDateTime(start);
    const endDate = this.transform.toLocalDateTime(end);
    const diff = differenceInWeeks(startDate, endDate);
    return diff;
  }

  startDay(date: DateType) {
    const local = this.transform.toLocalDateTime(date);
    const start = startOfDay(local);
    return this.transform.formatLocalDateTime(start);
  }

  isOver18(dob: string) {
    const today = this.startDay(this.shopNow(null));
    const duration = this.duration(dob, today);
    return duration.years !== undefined ? duration.years >= 18 : false;
  }

  endDay(date: DateType) {
    const local = this.transform.toLocalDateTime(date);
    const end = endOfDay(local);
    return this.transform.formatLocalDateTime(end);
  }

  startMonth(date: DateType) {
    const local = this.transform.toLocalDateTime(date);
    const start = startOfMonth(local);
    return this.transform.formatLocalDateTime(start);
  }

  endMonth(date: DateType) {
    const local = this.transform.toLocalDateTime(date);
    const end = endOfMonth(local);
    return this.transform.formatLocalDateTime(end);
  }

  minimumDate(timezone: Constant.TimeZoneType, restrictedFromToday: boolean, previousDay: number) {
    const now = this.shopNow(timezone);
    const startDate = this.startDay(now);
    return restrictedFromToday
      ? startDate
      : previousDay
        ? this.addDay(startDate, -previousDay)
        : new Date(1900, 0, 1);
  }

  maximumDate(timezone: Constant.TimeZoneType, displayNextDay: number) {
    const now = this.shopNow(timezone);
    const startDate = this.startDay(now);
    return displayNextDay ? this.addDay(startDate, +displayNextDay) : new Date(2050, 11, 31);
  }

  shopAllDaysThisWeek(timezone: Constant.TimeZoneType) {
    const date = this.transform.toLocalDateTime(this.startDay(this.shopNow(timezone)));
    const start = startOfWeek(date, { weekStartsOn: Constant.Date.DayIndex.Sun });
    const end = endOfWeek(date, { weekStartsOn: Constant.Date.DayIndex.Sun });
    const interval = eachDayOfInterval({ start, end });
    return interval.map(date => {
      return this.transform.formatLocalDateTime(date);
    });
  }

  getWeek(date: DateType) {
    const selectedDate = this.transform.toLocalDateTime(this.startDay(date));
    const start = startOfWeek(selectedDate, { weekStartsOn: Constant.Date.DayIndex.Sun });
    const end = endOfWeek(selectedDate, { weekStartsOn: Constant.Date.DayIndex.Sun });
    const interval = eachDayOfInterval({ start, end });
    return interval.map(date => {
      return this.transform.formatLocalDateTime(date);
    });
  }

  shopAllDaysNextWeek(timezone: Constant.TimeZoneType) {
    const date = this.transform.toLocalDateTime(this.startDay(this.addDay(this.shopNow(timezone), 7)));
    const start = startOfWeek(date, { weekStartsOn: Constant.Date.DayIndex.Sun });
    const end = endOfWeek(date, { weekStartsOn: Constant.Date.DayIndex.Sun });
    const interval = eachDayOfInterval({ start, end });
    return interval.map(date => {
      return this.transform.formatLocalDateTime(date);
    });
  }

  shopAllDaysNextTwoWeek(timezone: Constant.TimeZoneType) {
    const date = this.transform.toLocalDateTime(this.startDay(this.addDay(this.shopNow(timezone), 14)));
    const start = startOfWeek(date, { weekStartsOn: Constant.Date.DayIndex.Sun });
    const end = endOfWeek(date, { weekStartsOn: Constant.Date.DayIndex.Sun });
    const interval = eachDayOfInterval({ start, end });
    return interval.map(date => {
      return this.transform.formatLocalDateTime(date);
    });
  }

  shopAllDaysNextThreeWeek(timezone: Constant.TimeZoneType) {
    const date = this.transform.toLocalDateTime(this.startDay(this.addDay(this.shopNow(timezone), 21)));
    const start = startOfWeek(date, { weekStartsOn: Constant.Date.DayIndex.Sun });
    const end = endOfWeek(date, { weekStartsOn: Constant.Date.DayIndex.Sun });
    const interval = eachDayOfInterval({ start, end });
    return interval.map(date => {
      return this.transform.formatLocalDateTime(date);
    });
  }

  shopAllDaysNextFourWeek(timezone: Constant.TimeZoneType) {
    const date = this.transform.toLocalDateTime(this.startDay(this.addDay(this.shopNow(timezone), 28)));
    const start = startOfWeek(date, { weekStartsOn: Constant.Date.DayIndex.Sun });
    const end = endOfWeek(date, { weekStartsOn: Constant.Date.DayIndex.Sun });
    const interval = eachDayOfInterval({ start, end });
    return interval.map(date => {
      return this.transform.formatLocalDateTime(date);
    });
  }

  shopStartOfThisWeek(timezone: string) {
    const thisWeek = this.shopAllDaysThisWeek(timezone);
    return thisWeek[0];
  }

  shopEndOfThisWeek(timezone: string) {
    const thisWeek = this.shopAllDaysThisWeek(timezone);
    return thisWeek[thisWeek.length - 1];
  }

  shopStartOfNextWeek(timezone: string) {
    const nextWeek = this.shopAllDaysNextWeek(timezone);
    return nextWeek[0];
  }

  shopEndOfNextWeek(timezone: string) {
    const nextWeek = this.shopAllDaysNextWeek(timezone);
    return nextWeek[nextWeek.length - 1];
  }

  shopStartOfTwoWeek(timezone: string) {
    const twoWeek = this.shopAllDaysNextTwoWeek(timezone);
    return twoWeek[0];
  }

  shopEndOfTwoWeek(timezone: string) {
    const twoWeek = this.shopAllDaysNextTwoWeek(timezone);
    return twoWeek[twoWeek.length - 1];
  }

  shopStartOfThreeWeek(timezone: string) {
    const threeWeek = this.shopAllDaysNextThreeWeek(timezone);
    return threeWeek[0];
  }

  shopEndOfThreeWeek(timezone: string) {
    const threeWeek = this.shopAllDaysNextThreeWeek(timezone);
    return threeWeek[threeWeek.length - 1];
  }

  shopStartOfFourWeek(timezone: string) {
    const fourWeek = this.shopAllDaysNextFourWeek(timezone);
    return fourWeek[0];
  }

  shopEndOfFourWeek(timezone: string) {
    const fourWeek = this.shopAllDaysNextFourWeek(timezone);
    return fourWeek[fourWeek.length - 1];
  }

  getTimeoutByMin(timezone: string | null, min: number) {
    const date = this.shopNow(timezone);
    return this.addMin(date, min);
  }

  isTimeout(timezone: string | null, date: string) {
    const current = this.transform.formatLocalDateTime(this.shopNow(timezone));
    return current > date;
  }
  is24HoursByTimeItem(start: TimeItemType, end: TimeItemType) {
    return (
      start.hr === 0 &&
      start.min === 0 &&
      start.dayNightType === Constant.Date.DayNightType.DAY &&
      end.hr === 0 &&
      end.min === 0 &&
      end.dayNightType === Constant.Date.DayNightType.DAY
    );
  }

  getTime(date: string) {
    return date.split('T')[1];
  }

  getHour(date: string) {
    return getHours(new Date(date));
  }
  getMin(date: string) {
    return getMinutes(new Date(date));
  }

  getTimeByTimeItem(item: TimeItemType) {
    const formatted = this.transform.formatByTimeItem(new Date(), item);
    return this.getTime(formatted);
  }
}

//Function
const getDateDayNightType = function (hour: number) {
  return hour > 11 ? Constant.Date.DayNightType.NIGHT : Constant.Date.DayNightType.DAY;
};

const timeString = function (date: Date) {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};
