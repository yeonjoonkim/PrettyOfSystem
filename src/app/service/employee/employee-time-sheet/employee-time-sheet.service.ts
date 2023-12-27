import { Injectable } from '@angular/core';
import { DateService } from '../../global/date/date.service';
import {
  ShopEmployeeManagementUserType,
  ShopEmployeeTimeSheet,
  ShopEmployeeTimeSheetAvailableType,
  ShopOperatingDailyType,
  ShopPackageLimitedTime,
  ShopWorkHoursType,
  TimeItemType,
} from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { Cart } from 'src/app/interface/booking/cart/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeTimeSheetService {
  constructor(private _date: DateService) {}

  public defaultAnyone(specialist: ShopEmployeeTimeSheet): ShopEmployeeTimeSheet {
    return {
      shopId: specialist.shopId,
      employeeId: '',
      fullName: 'label.title.anyone',
      gender: Constant.Default.Gender.Other,
      avaliable: [],
    };
  }

  public anyoneTimeSheet(
    shopId: string,
    timezone: Constant.TimeZoneType,
    intervalMin: number,
    operatingHours: ShopWorkHoursType
  ) {
    const currentDateTime = this._date.startDay(this._date.shopNow(timezone));
    const thisWeek = this._date
      .shopAllDaysThisWeek(timezone)
      .filter(day => day >= currentDateTime)
      .map(date => {
        return this.getTimesheet(operatingHours, date, intervalMin);
      });

    return {
      shopId: shopId,
      employeeId: '',
      fullName: `label.title.anyone`,
      gender: Constant.Default.Gender.Other,
      avaliable: [...thisWeek],
    };
  }
  public simulateTimeSheet(timeSheet: ShopEmployeeTimeSheetAvailableType, cart: Cart) {
    const lastAvailableTime = timeSheet.end !== null ? this._date.addMin(timeSheet.end, -cart.totalMin) : null;
    const limitedTimes = cart.checkout
      .filter(c => c.limitedTime !== null && c.limitedTime)
      .map(c => c.limitedTime as ShopPackageLimitedTime)
      .map(c => {
        return {
          start: this._date.transform.formatByTimeItem(timeSheet.date, c.start),
          end: this._date.transform.formatByTimeItem(timeSheet.date, c.end),
        };
      });
    timeSheet.times =
      lastAvailableTime !== null ? timeSheet.times.filter(time => time < lastAvailableTime) : timeSheet.times;

    if (limitedTimes.length > 0) {
      for (let limitedTime of limitedTimes) {
        timeSheet.times = timeSheet.times.filter(time => {
          return time >= limitedTime.start && time <= limitedTime.end;
        });
      }
    }
    return timeSheet;
  }

  public set(
    emp: ShopEmployeeManagementUserType,
    timezone: Constant.TimeZoneType,
    intervalMin: number
  ): ShopEmployeeTimeSheet {
    const currentDateTime = this._date.startDay(this._date.shopNow(timezone));
    const thisWeek = this._date
      .shopAllDaysThisWeek(timezone)
      .filter(day => day >= currentDateTime)
      .map(date => {
        return this.getTimesheet(emp.roster, date, intervalMin);
      });
    const nextWeek = this._date.shopAllDaysNextWeek(timezone).map(date => {
      return this.getTimesheet(emp.nextWeekRoster, date, intervalMin);
    });
    const twoWeek = this._date.shopAllDaysNextTwoWeek(timezone).map(date => {
      return this.getTimesheet(emp.nextTwoWeekRoster, date, intervalMin);
    });
    const threeWeek = this._date.shopAllDaysNextThreeWeek(timezone).map(date => {
      return this.getTimesheet(emp.nextThreeWeekRoster, date, intervalMin);
    });
    const fourWeek = this._date.shopAllDaysNextFourWeek(timezone).map(date => {
      return this.getTimesheet(emp.nextFourWeekRoster, date, intervalMin);
    });

    return {
      shopId: emp.shopId,
      employeeId: emp.userId,
      fullName: `${emp.firstName} ${emp.lastName}`,
      gender: emp.gender,
      avaliable: [...thisWeek, ...nextWeek, ...twoWeek, ...threeWeek, ...fourWeek],
    };
  }

  public availableTodayTimeSheet(
    available: ShopEmployeeTimeSheetAvailableType | undefined,
    timezone: Constant.TimeZoneType,
    today: string
  ) {
    if (available !== undefined) {
      const currentDateTime = this._date.transform.formatLocalDateTime(this._date.shopNow(timezone));
      available.times = available.times.filter(time => currentDateTime < time);
      return available;
    } else {
      return { date: today, times: [] as string[], isWorking: false, start: null, end: null };
    }
  }

  public getTimesheet(
    roster: ShopWorkHoursType,
    date: string,
    intervalMin: number
  ): ShopEmployeeTimeSheetAvailableType {
    const availableTime = this.availableTimeSheet(date, roster, intervalMin);
    const startTime = this.getStartTime(date, roster);
    const endTime = this.getEndTime(date, roster);
    const is24Hours = startTime !== null && endTime !== null ? this.is24Hours(startTime, endTime) : false;
    return {
      date: date,
      times: availableTime,
      isWorking: availableTime.length > 0,
      start: startTime !== null ? this._date.transform.formatByTimeItem(date, startTime) : null,
      end:
        endTime !== null && is24Hours
          ? this._date.addDay(this._date.transform.formatByTimeItem(date, endTime), 1)
          : endTime !== null && !is24Hours
          ? this._date.transform.formatByTimeItem(date, endTime)
          : null,
    };
  }

  private availableTimeSheet(date: string, roster: ShopWorkHoursType, intervalMin: number) {
    const day = this._date.getDay(date);
    switch (day) {
      case Constant.Date.DayIndex.Sun:
        return this.availableTime(date, roster.sun, intervalMin);
      case Constant.Date.DayIndex.Mon:
        return this.availableTime(date, roster.mon, intervalMin);
      case Constant.Date.DayIndex.Tue:
        return this.availableTime(date, roster.tue, intervalMin);
      case Constant.Date.DayIndex.Wed:
        return this.availableTime(date, roster.wed, intervalMin);
      case Constant.Date.DayIndex.Thu:
        return this.availableTime(date, roster.thu, intervalMin);
      case Constant.Date.DayIndex.Fri:
        return this.availableTime(date, roster.fri, intervalMin);
      case Constant.Date.DayIndex.Sat:
        return this.availableTime(date, roster.sat, intervalMin);
    }
  }

  private getStartTime(date: string, roster: ShopWorkHoursType) {
    const day = this._date.getDay(date);
    switch (day) {
      case Constant.Date.DayIndex.Sun:
        return roster.sun.isOpen ? roster.sun.operatingHours.openTime : null;
      case Constant.Date.DayIndex.Mon:
        return roster.mon.isOpen ? roster.mon.operatingHours.openTime : null;
      case Constant.Date.DayIndex.Tue:
        return roster.tue.isOpen ? roster.tue.operatingHours.openTime : null;
      case Constant.Date.DayIndex.Wed:
        return roster.wed.isOpen ? roster.wed.operatingHours.openTime : null;
      case Constant.Date.DayIndex.Thu:
        return roster.thu.isOpen ? roster.thu.operatingHours.openTime : null;
      case Constant.Date.DayIndex.Fri:
        return roster.fri.isOpen ? roster.fri.operatingHours.openTime : null;
      case Constant.Date.DayIndex.Sat:
        return roster.sat.isOpen ? roster.sat.operatingHours.openTime : null;
    }
  }

  private getEndTime(date: string, roster: ShopWorkHoursType) {
    const day = this._date.getDay(date);
    switch (day) {
      case Constant.Date.DayIndex.Sun:
        return roster.sun.isOpen ? roster.sun.operatingHours.closeTime : null;
      case Constant.Date.DayIndex.Mon:
        return roster.mon.isOpen ? roster.mon.operatingHours.closeTime : null;
      case Constant.Date.DayIndex.Tue:
        return roster.tue.isOpen ? roster.tue.operatingHours.closeTime : null;
      case Constant.Date.DayIndex.Wed:
        return roster.wed.isOpen ? roster.wed.operatingHours.closeTime : null;
      case Constant.Date.DayIndex.Thu:
        return roster.thu.isOpen ? roster.thu.operatingHours.closeTime : null;
      case Constant.Date.DayIndex.Fri:
        return roster.fri.isOpen ? roster.fri.operatingHours.closeTime : null;
      case Constant.Date.DayIndex.Sat:
        return roster.sat.isOpen ? roster.sat.operatingHours.closeTime : null;
    }
  }

  private availableTime(date: string, roster: ShopOperatingDailyType, intervalMin: number) {
    const times: string[] = [];
    if (!roster.isOpen) return times;
    const period = this.getStartEnd(date, roster.operatingHours.openTime, roster.operatingHours.closeTime);

    let currentTime = period.start;

    while (currentTime < period.end) {
      times.push(currentTime);
      currentTime = this._date.addMin(currentTime, intervalMin);
    }

    const breakTimes: { start: string; end: string }[] = roster.breakTimes.map(bt => {
      return this.getStartEnd(date, bt.start, bt.end);
    });

    return times.filter(t => {
      return !breakTimes.some(bt => {
        return t >= bt.start && t < bt.end;
      });
    });
  }

  private getStartEnd(date: string, open: TimeItemType, close: TimeItemType) {
    const is24Hours = this.is24Hours(open, close);
    const start = this._date.transform.formatByTimeItem(date, open);
    const end = is24Hours ? this._date.endDay(date) : this._date.transform.formatByTimeItem(date, close);
    return { start: start, end: end };
  }

  private is24Hours(open: TimeItemType, close: TimeItemType) {
    return (
      open.hr === 0 &&
      open.min === 0 &&
      open.dayNightType === Constant.Date.DayNightType.DAY &&
      close.hr === 0 &&
      close.min === 0 &&
      close.dayNightType === Constant.Date.DayNightType.DAY
    );
  }
}
