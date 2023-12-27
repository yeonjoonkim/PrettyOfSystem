import { Injectable } from '@angular/core';
import {
  ShopBreakTimeValidatorCriteriaType,
  ShopOperatingBreakType,
  ShopOperatingDailyType,
} from 'src/app/interface';
import { DateService } from 'src/app/service/global/date/date.service';
import { GlobalService } from 'src/app/service/global/global.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeSchedulerBreakService {
  constructor(
    private _date: DateService,
    private _global: GlobalService
  ) {}

  public delete(roster: ShopOperatingDailyType, breakTime: ShopOperatingBreakType) {
    const breakTimes = this.formattedBreakTimes(roster);
    const cmd = this.formatted(breakTime);

    roster.breakTimes = breakTimes
      .filter(bt => !(bt.start === cmd.start && bt.end === cmd.end && bt.duration === cmd.duration))
      .map(bt => {
        return {
          id: bt.id,
          start: this._date.timeItem(new Date(bt.start)),
          end: this._date.timeItem(new Date(bt.end)),
          durationHour: bt.duration,
        };
      });
    return this.sort(roster);
  }

  public update(roster: ShopOperatingDailyType, updated: ShopOperatingBreakType) {
    const isOverlap = this.isOverlap(roster, updated);
    if (!isOverlap) {
      const deleteCmd: ShopOperatingBreakType | undefined | null = roster.breakTimes.find(
        bt => bt.id === updated.id
      );

      if (deleteCmd) {
        roster = this.delete(roster, deleteCmd);
      }

      updated.durationHour = this.duration(updated);
      roster.breakTimes.push(updated);
      return this.sort(roster);
    } else {
      return null;
    }
  }

  public getDefault(defaultRoster: ShopOperatingDailyType): ShopOperatingBreakType {
    return {
      id: this._global.newId(),
      start: defaultRoster.operatingHours.openTime,
      end: defaultRoster.operatingHours.closeTime,
      durationHour: defaultRoster.workHours,
    };
  }

  public isOverlap(roster: ShopOperatingDailyType, update: ShopOperatingBreakType) {
    const breakTimes = this.formattedBreakTimes(roster).filter(bt => bt.id !== update.id);
    const time = this.formatted(update);
    return breakTimes.some(bt => bt.start < time.end && bt.end > time.start);
  }

  public isExceedTime(update: ShopOperatingBreakType) {
    const formatted = this.formatted(update);
    return formatted.start >= formatted.end;
  }

  public formattedBreakTimes(roster: ShopOperatingDailyType) {
    return roster.breakTimes.map(bt => {
      return this.formatted(bt);
    });
  }

  public sum(roster: ShopOperatingDailyType): number {
    const breakHours = roster.breakTimes.map(r => this.duration(r));
    const sum = breakHours.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
  }

  public duration(bt: ShopOperatingBreakType) {
    const f = this.formatted(bt);
    return this._date.differenceInTime(f.start, f.end, 2);
  }

  public sort(roster: ShopOperatingDailyType) {
    roster.breakTimes = roster.breakTimes.sort((a, b) => {
      if (a.start.hr === b.start.hr) {
        return a.start.min - b.start.min;
      }
      return a.start.hr - b.start.hr;
    });
    return roster;
  }

  public formatted(bt: ShopOperatingBreakType) {
    return {
      id: bt.id,
      start: this._date.transform.formatByTimeItem(new Date(), bt.start),
      end: this._date.transform.formatByTimeItem(new Date(), bt.end),
      duration: bt.durationHour,
    };
  }

  public getValidationCriteria(update: ShopOperatingBreakType, date: string, employeeId: string) {
    const criteria: ShopBreakTimeValidatorCriteriaType = {
      employeeId: employeeId,
      startDateTime: this._date.transform.formatByTimeItem(date, update.start),
      endDateTime: this._date.transform.formatByTimeItem(date, update.end),
    };
    return criteria;
  }
}
