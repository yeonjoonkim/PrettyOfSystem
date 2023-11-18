import { Injectable } from '@angular/core';
import {
  NameValuePairType,
  ShopOperatingHoursType,
  ShopPackageLimitedTime,
  ShopWorkHoursType,
  TimeItemType,
} from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
type ShopPackageLimitedTimeValidator = {
  open: Constant.DayIndexType[];
  close: Constant.DayIndexType[];
};
type ShopPackageLimitedTimeOperatingHours = {
  dayIndex: Constant.DayIndexType;
  operatingHours: ShopOperatingHoursType;
  isOpen: boolean;
};
@Injectable({
  providedIn: 'root',
})
export class ShopPackageLimitedTimeService {
  public days: NameValuePairType[] = [
    { name: 'date.title.mon', value: Constant.Date.DayIndex.Mon.toString() },
    { name: 'date.title.tue', value: Constant.Date.DayIndex.Tue.toString() },
    { name: 'date.title.wed', value: Constant.Date.DayIndex.Wed.toString() },
    { name: 'date.title.thu', value: Constant.Date.DayIndex.Thu.toString() },
    { name: 'date.title.fri', value: Constant.Date.DayIndex.Fri.toString() },
    { name: 'date.title.sat', value: Constant.Date.DayIndex.Sat.toString() },
    { name: 'date.title.sun', value: Constant.Date.DayIndex.Sun.toString() },
  ];
  constructor() {}

  public get(op: ShopWorkHoursType): ShopPackageLimitedTime | null {
    const workHours = this.getWorkHours(op);
    const day = getDays(op);
    if (workHours !== null) {
      const result: ShopPackageLimitedTime = {
        offeredDateIndex: day.open,
        start: workHours.openTime,
        end: workHours.closeTime,
      };
      return result;
    } else {
      return null;
    }
  }

  public validator(start: TimeItemType, end: TimeItemType) {
    const startTime = setDate(start);
    const endTime = setDate(end);
    const is24Hours: boolean =
      start.hr === 0 &&
      start.min === 0 &&
      start.dayNightType === Constant.Date.DayNightType.DAY &&
      end.hr === 0 &&
      end.min === 0 &&
      end.dayNightType === Constant.Date.DayNightType.DAY;
    return is24Hours ? true : startTime < endTime;
  }

  private getWorkHours(op: ShopWorkHoursType): ShopOperatingHoursType | null {
    const operatingHours = getOperatingHours(op);
    const open = operatingHours.filter(op => op.isOpen);
    return open.length > 0 ? open[0].operatingHours : null;
  }
}

function setDate(time: TimeItemType) {
  let now = new Date();
  now.setHours(time.hr);
  now.setMinutes(time.min);
  now.setSeconds(0);
  return now;
}

function getOperatingHours(op: ShopWorkHoursType): ShopPackageLimitedTimeOperatingHours[] {
  return [mon(op), tue(op), wed(op), thu(op), fri(op), sat(op), sun(op)];
}

function mon(operatingHours: ShopWorkHoursType) {
  const mon: ShopPackageLimitedTimeOperatingHours = {
    dayIndex: operatingHours.mon.index,
    operatingHours: operatingHours.mon.operatingHours,
    isOpen: operatingHours.mon.isOpen,
  };
  return mon;
}

function tue(operatingHours: ShopWorkHoursType) {
  const tue: ShopPackageLimitedTimeOperatingHours = {
    dayIndex: operatingHours.tue.index,
    operatingHours: operatingHours.tue.operatingHours,
    isOpen: operatingHours.tue.isOpen,
  };
  return tue;
}

function wed(operatingHours: ShopWorkHoursType) {
  const wed: ShopPackageLimitedTimeOperatingHours = {
    dayIndex: operatingHours.wed.index,
    operatingHours: operatingHours.wed.operatingHours,
    isOpen: operatingHours.wed.isOpen,
  };
  return wed;
}

function thu(operatingHours: ShopWorkHoursType) {
  const thu: ShopPackageLimitedTimeOperatingHours = {
    dayIndex: operatingHours.thu.index,
    operatingHours: operatingHours.thu.operatingHours,
    isOpen: operatingHours.thu.isOpen,
  };
  return thu;
}

function fri(operatingHours: ShopWorkHoursType) {
  const fri: ShopPackageLimitedTimeOperatingHours = {
    dayIndex: operatingHours.fri.index,
    operatingHours: operatingHours.fri.operatingHours,
    isOpen: operatingHours.fri.isOpen,
  };
  return fri;
}

function sat(operatingHours: ShopWorkHoursType) {
  const sat: ShopPackageLimitedTimeOperatingHours = {
    dayIndex: operatingHours.sat.index,
    operatingHours: operatingHours.sat.operatingHours,
    isOpen: operatingHours.sat.isOpen,
  };
  return sat;
}

function sun(operatingHours: ShopWorkHoursType) {
  const sun: ShopPackageLimitedTimeOperatingHours = {
    dayIndex: operatingHours.sun.index,
    operatingHours: operatingHours.sun.operatingHours,
    isOpen: operatingHours.sun.isOpen,
  };
  return sun;
}

function getDays(operatingHours: ShopWorkHoursType) {
  const allday = getAllDays();
  const day: ShopPackageLimitedTimeValidator = {
    close: operatingHours.closeDay,
    open: operatingHours.closeDay.length > 0 ? allday.filter(day => !operatingHours.closeDay.includes(day)) : [],
  };

  return day;
}

function getAllDays(): Constant.DayIndexType[] {
  return [0, 1, 2, 3, 4, 5, 6];
}
