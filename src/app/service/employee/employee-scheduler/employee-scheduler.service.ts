import { Injectable } from '@angular/core';
import {
  ShopOperatingBreakType,
  ShopOperatingDailyType,
  ShopOperatingHoursType,
  TimeItemType,
} from 'src/app/interface';
import { DateService } from '../../global/date/date.service';
import * as Constant from 'src/app/constant/constant';
import { EmployeeSchedulerBreakService } from './employee-scheduler-break/employee-scheduler-break.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeSchedulerService {
  constructor(
    private _date: DateService,
    public breakTime: EmployeeSchedulerBreakService
  ) {}

  public changeWorkStatus(roster: ShopOperatingDailyType, shopDefaultTime: ShopOperatingHoursType) {
    roster.isOpen = !roster.isOpen;
    if (!roster.isOpen) {
      roster.operatingHours.openTime = shopDefaultTime.openTime;
      roster.operatingHours.closeTime = shopDefaultTime.closeTime;
      roster.breakTimes = [];
    }
    roster.workHours = this.updateWorkHours(roster);
    return roster;
  }

  public shiftValidator(roster: ShopOperatingDailyType) {
    const openTime = this._date.transform.formatByTimeItem(new Date(), roster.operatingHours.openTime);
    const closeTime = this._date.transform.formatByTimeItem(new Date(), roster.operatingHours.closeTime);
    const is24Hours = this.is24Hours(roster.operatingHours.openTime, roster.operatingHours.closeTime);
    const workHours = is24Hours ? 24.0 : this._date.differenceInTime(openTime, closeTime, 2);
    const breakTime = this.breakTime.sum(roster);
    const hasOverlap = roster.breakTimes.map(bt => this.breakTime.isOverlap(roster, bt)).some(overlap => overlap);
    const hasExceedTime = roster.breakTimes.map(bt => this.breakTime.isExceedTime(bt)).some(overlap => overlap);
    return is24Hours
      ? true
      : openTime < closeTime && workHours > 0 && workHours - breakTime > 0 && !hasExceedTime && !hasOverlap;
  }

  public deleteBreak(roster: ShopOperatingDailyType, breakTime: ShopOperatingBreakType) {
    const deleted = this.breakTime.delete(roster, breakTime);
    deleted.workHours = this.updateWorkHours(roster);
    return deleted;
  }

  public async updateBreak(
    roster: ShopOperatingDailyType,
    update: ShopOperatingBreakType,
    date: string,
    employeeId: string
  ) {
    const updated = this.breakTime.update(roster, update);
    if (updated) {
      updated.workHours = this.updateWorkHours(updated);
      const criteria = this.breakTime.getValidationCriteria(update, date, employeeId);
      const confirmation = criteria ? true : false;

      if (confirmation) {
        return updated;
      } else {
        //False Reason Toast
        return null;
      }
    } else {
      //False Reason Toast
      return null;
    }
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

  private workHours(roster: ShopOperatingDailyType) {
    const open = this._date.transform.formatByTimeItem(new Date(), roster.operatingHours.openTime);
    const close = this._date.transform.formatByTimeItem(new Date(), roster.operatingHours.closeTime);
    const is24Hours = this.is24Hours(roster.operatingHours.openTime, roster.operatingHours.closeTime);
    const workHours = is24Hours ? 24.0 : this._date.differenceInTime(open, close, 2);
    return workHours;
  }

  public updateWorkHours(roster: ShopOperatingDailyType) {
    const workHours = this.workHours(roster);
    const breakHours = this.breakTime.sum(roster);
    return parseFloat((workHours - breakHours).toFixed(2));
  }
}
