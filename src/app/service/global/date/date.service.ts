import { Injectable } from '@angular/core';
import { DateTransformService } from './date-transform/date-transform.service';
import * as Constant from '../../../constant/constant';
import {
  IDateIndexPairDay,
  IDatePeriod,
  ITimeItem,
} from 'src/app/interface/global/global.interface';
import { TimePickerIncrementalSteps } from '@progress/kendo-angular-dateinputs';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  public day: IDateIndexPairDay[] = [
    { index: Constant.Date.DayIndex.Sun, day: Constant.Date.Day.Sun },
    { index: Constant.Date.DayIndex.Mon, day: Constant.Date.Day.Mon },
    { index: Constant.Date.DayIndex.Tue, day: Constant.Date.Day.Tue },
    { index: Constant.Date.DayIndex.Wed, day: Constant.Date.Day.Wed },
    { index: Constant.Date.DayIndex.Thu, day: Constant.Date.Day.Thu },
    { index: Constant.Date.DayIndex.Fri, day: Constant.Date.Day.Fri },
    { index: Constant.Date.DayIndex.Sat, day: Constant.Date.Day.Sat },
  ];
  public period: IDatePeriod[] = [
    { name: 'date.title.weekly', type: Constant.Date.Period.Weekly, week: 1, day: 7 },
    { name: 'date.title.monthly', type: Constant.Date.Period.Monthly, week: 4, day: 28 },
    { name: 'date.title.quarterly', type: Constant.Date.Period.Quarterly, week: 12, day: 84 },
    { name: 'date.title.halfyear', type: Constant.Date.Period.HalfYear, week: 26, day: 182 },
    { name: 'date.title.annually', type: Constant.Date.Period.Annually, week: 52, day: 365 },
    { name: 'date.title.custom', type: Constant.Date.Period.Custom, week: 0, day: 0 },
  ];

  constructor(public transform: DateTransformService) {}

  public differenceTime(start: Date, end: Date, decimal: number): number {
    let diff: number = (end.getTime() - start.getTime()) / 1000 / 60 / 60;
    let factor = Math.pow(10, decimal);
    return Math.round(diff * factor) / factor;
  }

  public getTimePickerIncrementalSteps(mins: number): TimePickerIncrementalSteps {
    let mintues = mins % 60;
    return { minute: mintues };
  }

  public getTimeItem(date: Date): ITimeItem {
    let currentDayNightType: Constant.DateDayNightType =
      date.getHours() > 11 ? Constant.Date.DayNightType.NIGHT : Constant.Date.DayNightType.DAY;
    let timeString = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    return {
      hr: date.getHours(),
      min: date.getMinutes(),
      dayNightType: currentDayNightType,
      strValue: timeString,
    };
  }

  public getDateIndexPairDay(date: Date): IDateIndexPairDay {
    let dayIndex = date.getDay();
    return this.day[dayIndex];
  }

  public isSunday(date: Date): boolean {
    let dateIndexPairDay = this.getDateIndexPairDay(date);
    return (
      dateIndexPairDay.index === Constant.Date.DayIndex.Sun &&
      dateIndexPairDay.day === Constant.Date.Day.Sun
    );
  }

  public isMonday(date: Date): boolean {
    let dateIndexPairDay = this.getDateIndexPairDay(date);
    return (
      dateIndexPairDay.index === Constant.Date.DayIndex.Mon &&
      dateIndexPairDay.day === Constant.Date.Day.Mon
    );
  }

  public isTuesday(date: Date): boolean {
    let dateIndexPairDay = this.getDateIndexPairDay(date);
    return (
      dateIndexPairDay.index === Constant.Date.DayIndex.Tue &&
      dateIndexPairDay.day === Constant.Date.Day.Tue
    );
  }

  public isWednesday(date: Date): boolean {
    let dateIndexPairDay = this.getDateIndexPairDay(date);
    return (
      dateIndexPairDay.index === Constant.Date.DayIndex.Wed &&
      dateIndexPairDay.day === Constant.Date.Day.Wed
    );
  }

  public isThursday(date: Date): boolean {
    let dateIndexPairDay = this.getDateIndexPairDay(date);
    return (
      dateIndexPairDay.index === Constant.Date.DayIndex.Thu &&
      dateIndexPairDay.day === Constant.Date.Day.Thu
    );
  }

  public isFriday(date: Date): boolean {
    let dateIndexPairDay = this.getDateIndexPairDay(date);
    return (
      dateIndexPairDay.index === Constant.Date.DayIndex.Fri &&
      dateIndexPairDay.day === Constant.Date.Day.Fri
    );
  }

  public isSaturday(date: Date): boolean {
    let dateIndexPairDay = this.getDateIndexPairDay(date);
    return (
      dateIndexPairDay.index === Constant.Date.DayIndex.Sat &&
      dateIndexPairDay.day === Constant.Date.Day.Sat
    );
  }
}
