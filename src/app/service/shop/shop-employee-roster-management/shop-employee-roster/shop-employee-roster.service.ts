import { Injectable, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { ShopOperatingHoursService } from '../shop-operating-hours/shop-operating-hours.service';
import * as Constant from 'src/app/constant/constant';
import { ShopConsultRepositoryService } from 'src/app/firebase/shop-repository/shop-consult-repository/shop-consult-repository.service';
import {
  ConsultDocumentType,
  ConsultScheduleTimeType,
  ShopEmployeeManagementUserType,
  ShopOperatingBreakType,
  TimeItemType,
} from 'src/app/interface';
import { DateService } from 'src/app/service/global/date/date.service';
import { take } from 'rxjs';
import { ShopEmployeeManagementService } from '../../shop-employee-management/shop-employee-management.service';

type StartEndType = {
  start: string; // range 00:00:00 - 23:59:59
  end: string; // range 00:00:00 - 23:59:59
};

@Injectable({
  providedIn: 'root',
})
export class ShopEmployeeRosterService {
  private _consultRepo = inject(ShopConsultRepositoryService);
  private _empManagement = inject(ShopEmployeeManagementService);
  private _dateSvc = inject(DateService);
  public operatingHours = inject(ShopOperatingHoursService);

  //Employee
  protected employee: WritableSignal<ShopEmployeeManagementUserType> = signal(
    null as unknown as ShopEmployeeManagementUserType
  );
  public day: WritableSignal<Constant.DayType> = signal(null as unknown as Constant.DayType);
  protected consults: WritableSignal<ConsultDocumentType[]> = signal(null as unknown as ConsultDocumentType[]);

  loaded = computed(() => {
    return (
      this.employee() !== undefined &&
      this.employee() !== null &&
      this.day() !== undefined &&
      this.day() !== null &&
      this.consults() !== undefined &&
      this.consults() !== null
    );
  });

  firstName = computed(() => {
    return this.loaded() ? this.employee().firstName : '';
  });

  lastName = computed(() => {
    return this.loaded() ? this.employee().lastName : '';
  });

  isShop24Hours = computed(() => {
    return this.loaded() ? this.operatingHours.is24Hours(this.day()) : false;
  });

  startTimeItem = computed(() => {
    return this.employee().defaultRoster[this.day()].operatingHours.openTime;
  });

  endTimeItem = computed(() => {
    return this.employee().defaultRoster[this.day()].operatingHours.closeTime;
  });

  breakTimes = computed(() => {
    return this.loaded()
      ? this.employee()?.defaultRoster[this.day()].breakTimes.sort((a, b) => {
          return a.start.strValue.localeCompare(b.start.strValue);
        })
      : [];
  });

  consultsInDay = computed(() => {
    return this.consults().filter(consult => {
      const scheduled = consult.scheduled;
      const day = scheduled !== null ? this._dateSvc.getDay(scheduled.startDateTime) : null;
      return this.day() === day;
    });
  });

  consultsValidators = computed(() => {
    const operationalStartTime = this.startTime();
    const operationalEndTime = this.endTime();
    const breakTimes = this.breakStartEndTimes();
    const is24Hours = this.is24Hours();
    return this.consultsInDay()
      .map(consult => {
        const startTime =
          consult.scheduled !== null ? this._dateSvc.getTime(consult.scheduled.startDateTime) : null;
        const endTime = consult.scheduled !== null ? this._dateSvc.getTime(consult.scheduled.endDateTime) : null;
        if (startTime !== null && endTime !== null) {
          const consultStartTimeFloat = parseTimestampToFloat(startTime);
          const consultEndTimeFloat = parseTimestampToFloat(endTime);
          // Conflict With Break Time
          const conflictWithBreakTime = breakTimes.some(breakTime =>
            timeOverlap({ start: startTime, end: endTime }, { start: breakTime.start, end: breakTime.end })
          );
          // Conflict With StartTime
          const conflictWithStartTime = !is24Hours
            ? consultStartTimeFloat < parseTimestampToFloat(operationalStartTime)
            : false;

          // Conflict With EndTime
          const conflictWithEndTime = !is24Hours
            ? consultEndTimeFloat > parseTimestampToFloat(operationalEndTime)
            : false;

          return {
            consult,
            conflictWithBreakTime,
            conflictWithStartTime,
            conflictWithEndTime,
          };
        }
        return null;
      })
      .filter(v => v !== null)
      .map(
        s =>
          s as {
            consult: ConsultDocumentType;
            conflictWithBreakTime: boolean;
            conflictWithStartTime: boolean;
            conflictWithEndTime: boolean;
          }
      );
  });

  consultsInDayStartEndTimes = computed(() => {
    return this.consultsInDay()
      .filter(s => s.scheduled !== null)
      .map(s => s.scheduled as ConsultScheduleTimeType)
      .map(s => {
        return {
          start: this._dateSvc.getTime(s.startDateTime),
          end: this._dateSvc.getTime(s.endDateTime),
        };
      });
  });

  startTime = computed(() => {
    const itemItem = this.employee().defaultRoster[this.day()].operatingHours.openTime;
    return this._dateSvc.getTimeByTimeItem(itemItem);
  });

  endTime = computed(() => {
    const itemItem = this.employee().defaultRoster[this.day()].operatingHours.closeTime;
    return this._dateSvc.getTimeByTimeItem(itemItem);
  });

  workHours = computed(() => {
    return this.employee().defaultRoster[this.day()].workHours;
  });

  breakHours = computed(() => {
    return getBreakTimeHours(this.breakStartEndTimes());
  });

  is24Hours = computed(() => {
    const midNight = '00:00:00';
    const start = this.startTime();
    const end = this.endTime();
    return start === midNight && end === midNight;
  });

  isWorking = computed(() => {
    return this.employee().defaultRoster[this.day()].isOpen;
  });

  breakStartEndTimes = computed(() => {
    return this.employee().defaultRoster[this.day()].breakTimes.map(bt => {
      return {
        id: bt.id,
        start: this._dateSvc.getTimeByTimeItem(bt.start),
        end: this._dateSvc.getTimeByTimeItem(bt.end),
      };
    });
  });

  //Start End Time Validator
  invalidWorkHours = computed(() => {
    const workHours = this.workHours();
    return workHours <= 0;
  });
  isOutRangeOfOperatingOpenTime = computed(() => {
    const isShop24Hours = this.operatingHours.is24Hours(this.day());
    const operatingOpenTime = this.operatingHours.openTime(this.day());
    const operatingCloseTime = this.operatingHours.closeTime(this.day());
    const openTime = this.startTime();
    const isMidNight = openTime === '00:00:00';

    return !isShop24Hours && !isMidNight
      ? !isTimeWithinRange(openTime, operatingOpenTime, operatingCloseTime)
      : false;
  });

  isOutRangeOfOperatingCloseTime = computed(() => {
    const isShop24Hours = this.operatingHours.is24Hours(this.day());
    const operatingOpenTime = this.operatingHours.openTime(this.day());
    const operatingCloseTime = this.operatingHours.closeTime(this.day());
    const endTime = this.endTime();
    const isMidNight = endTime === '00:00:00';

    return !isShop24Hours && !isMidNight
      ? !isTimeWithinRange(endTime, operatingOpenTime, operatingCloseTime)
      : false;
  });

  //Break Time Validator
  isBreakOverlap = computed(() => {
    const breaks = this.breakStartEndTimes();
    return breaks.some((a, indexA) =>
      breaks.some(
        (b, indexB) =>
          indexA !== indexB && timeOverlap({ start: a.start, end: a.end }, { start: b.start, end: b.end })
      )
    );
  });

  hasOutRangeBreakTimes = computed(() => {
    if (this.is24Hours()) {
      return false;
    }
    const startTime = this.startTime();
    const endTime = this.endTime();

    return this.breakStartEndTimes().some(bt => bt.start < startTime || bt.end > endTime);
  });

  //Consult Validator
  hasOutOfRangeConsults = computed(() => {
    if (this.consultsInDayStartEndTimes().length === 0) {
      return false;
    }

    const startTime = this.startTime();
    const endTime = this.endTime();
    const hasOutOfRangeConsults = this.consultsInDayStartEndTimes().some(
      c => !isTimeWithinRange(c.start, startTime, endTime) || !isTimeWithinRange(c.end, startTime, endTime)
    );

    return hasOutOfRangeConsults;
  });

  hasConsultOverlapWithBreakTimes = computed(() => {
    if (this.consultsInDayStartEndTimes().length === 0) {
      return false;
    }
    const breakTimes = this.breakStartEndTimes();
    return this.consultsInDayStartEndTimes().some(consult => {
      const consultStartEnd = { start: consult.start, end: consult.end };
      return breakTimes.some(bt => timeOverlap(consultStartEnd, { start: bt.start, end: bt.end }));
    });
  });

  allowUpdate = computed(() => {
    const startTimeValidator =
      !this.isOutRangeOfOperatingOpenTime() && !this.isOutRangeOfOperatingCloseTime() && !this.invalidWorkHours();
    const breakTimeValidator = !this.isBreakOverlap() && !this.hasOutRangeBreakTimes();
    const consultTimeValidator = !this.hasConsultOverlapWithBreakTimes() && !this.hasOutOfRangeConsults();
    return startTimeValidator && breakTimeValidator && consultTimeValidator;
  });

  constructor() {}

  public allowEditWorkingStatus(day: Constant.DayType) {
    return this.operatingHours.isWorking(day);
  }

  public start(emp: ShopEmployeeManagementUserType, day: Constant.DayType) {
    this.day.set(day);
    this.employee.set(emp);
    this._consultRepo
      .getScheduledConsultEmployeeFromDay(this.operatingHours.startOfToday(), emp.shopId, emp.userId)
      .pipe(take(1))
      .subscribe(consults => {
        this.consults.set(consults);
      });
  }

  public completed() {
    const day: Constant.DayType = null as unknown as Constant.DayType;
    const employee: ShopEmployeeManagementUserType = null as unknown as ShopEmployeeManagementUserType;
    const consults: ConsultDocumentType[] = null as unknown as ConsultDocumentType[];
    this.day.set(day);
    this.employee.set(employee);
    this.consults.set(consults);
  }

  public durationHours(start: TimeItemType, end: TimeItemType) {
    const time = {
      start: this._dateSvc.getTimeByTimeItem(start),
      end: this._dateSvc.getTimeByTimeItem(end),
    };

    const startTime = parseTimestampToFloat(time.start);
    const endTime = parseTimestampToFloat(time.end);
    return time.start === '00:00:00' && time.end === '00:00:00'
      ? 24
      : parseFloat((endTime - startTime).toFixed(2));
  }

  public updateWorkingStatus() {
    if (this.allowEditWorkingStatus(this.day())) {
      let emp = this.employee();
      emp.defaultRoster[this.day()].isOpen = !emp.defaultRoster[this.day()].isOpen;
      if (!emp.defaultRoster[this.day()].isOpen) {
        emp.defaultRoster[this.day()].breakTimes = [];
        emp.defaultRoster[this.day()].operatingHours.openTime = this.operatingHours.openTimeItem(this.day());
        emp.defaultRoster[this.day()].operatingHours.closeTime = this.operatingHours.closeTimeItem(this.day());
      }
      this.employee.set(emp);
      this.updateWorkHours();
      return true;
    }
    return false;
  }

  public updateStartTimeItem(startTimeItem: TimeItemType) {
    let emp = this.employee();
    emp.defaultRoster[this.day()].operatingHours.openTime = startTimeItem;
    this.employee.set(emp);
    this.updateWorkHours();
  }

  public updateEndTimeItem(endTimeItem: TimeItemType) {
    let emp = this.employee();
    emp.defaultRoster[this.day()].operatingHours.closeTime = endTimeItem;
    this.employee.set(emp);
    this.updateWorkHours();
  }

  public addBreakTime(newBreakTime: ShopOperatingBreakType) {
    if (this.allowAddBreakTime(newBreakTime)) {
      let emp = this.employee();
      emp.defaultRoster[this.day()].breakTimes.push(newBreakTime);
      this.employee.set(emp);
      this.updateWorkHours();
      return true;
    }
    return false;
  }

  public isInvalidBreakTime(newBreakTime: ShopOperatingBreakType) {
    const newBreak = {
      start: this._dateSvc.getTimeByTimeItem(newBreakTime.start),
      end: this._dateSvc.getTimeByTimeItem(newBreakTime.end),
    };
    const startTime = this.startTime();
    const endTime = this.endTime();
    const isInit = newBreak.start === startTime && newBreak.end === endTime;
    return !isVaildTime(newBreak) || isInit;
  }

  public allowAddBreakTime(newBreakTime: ShopOperatingBreakType) {
    const hasConflictWithBreakTimes = this.hasNewBreakTimeConflictWithBreaktimes(newBreakTime);
    const hasNewBreakTimeConflicWithConsult = this.hasNewBreakTimeConflictWithConsults(newBreakTime);
    const hahasNewBreakTimeConflictWithStartEndTime = this.hasNewBreakTimeConflictWithStartEndTime(newBreakTime);
    const isInvalidBreakTime = this.isInvalidBreakTime(newBreakTime);
    return (
      !hasConflictWithBreakTimes &&
      !hasNewBreakTimeConflicWithConsult &&
      !hahasNewBreakTimeConflictWithStartEndTime &&
      !isInvalidBreakTime
    );
  }

  public hasNewBreakTimeConflictWithBreaktimes(newBreakTime: ShopOperatingBreakType) {
    const startEnd = {
      id: newBreakTime.id,
      start: this._dateSvc.getTimeByTimeItem(newBreakTime.start),
      end: this._dateSvc.getTimeByTimeItem(newBreakTime.end),
    };
    const existing = this.breakStartEndTimes();
    const breakTimes = [...existing, ...[startEnd]];

    return breakTimes.some((a, indexA) =>
      breakTimes.some(
        (b, indexB) =>
          indexA !== indexB && timeOverlap({ start: a.start, end: a.end }, { start: b.start, end: b.end })
      )
    );
  }

  public hasNewBreakTimeConflictWithStartEndTime(newBreakTime: ShopOperatingBreakType) {
    const startEnd = {
      start: this._dateSvc.getTimeByTimeItem(newBreakTime.start),
      end: this._dateSvc.getTimeByTimeItem(newBreakTime.end),
    };
    const is24Hours = this.is24Hours();
    const startTime = this.startTime();
    const endTime = this.endTime();
    const startInTimeRange = startTime <= startEnd.start && startTime <= startEnd.start;
    const endInTimeRange = endTime >= startEnd.end && endTime >= startEnd.end;

    return !is24Hours ? !startInTimeRange && !endInTimeRange : false;
  }

  public hasNewBreakTimeConflictWithConsults(newBreakTime: ShopOperatingBreakType) {
    const startEnd = {
      start: this._dateSvc.getTimeByTimeItem(newBreakTime.start),
      end: this._dateSvc.getTimeByTimeItem(newBreakTime.start),
    };

    const hasConflictWithConsults = this.consultsInDayStartEndTimes().some(consult => {
      return timeOverlap(consult, startEnd);
    });

    return hasConflictWithConsults;
  }

  public allowUpdateBreakTime(before: ShopOperatingBreakType, after: ShopOperatingBreakType) {
    const isInvalid = this.isInvalidBreakTime(after);
    const hasUpdateBreakTimeConflictWithConsults = this.hasUpdateBreakTimeConflictWithConsults(after);
    const hasUpdateBreakTimeConflictWithBreakTimes = this.hasUpdateBreakTimeConflictWithBreakTimes(before, after);
    const hasUpdateBreakTimeConflictWithStartEndTime = this.hasUpdateBreakTimeConflictWithStartEndTime(after);
    const hasUpdatedBreakTime = this.hasUpdatedBreakTime(before, after);
    return (
      !isInvalid &&
      !hasUpdateBreakTimeConflictWithConsults &&
      !hasUpdateBreakTimeConflictWithBreakTimes &&
      !hasUpdateBreakTimeConflictWithStartEndTime &&
      hasUpdatedBreakTime
    );
  }

  public hasUpdatedBreakTime(before: ShopOperatingBreakType, after: ShopOperatingBreakType) {
    const beforeTime = {
      start: this._dateSvc.getTimeByTimeItem(before.start),
      end: this._dateSvc.getTimeByTimeItem(before.end),
    };
    const afterTime = {
      start: this._dateSvc.getTimeByTimeItem(after.start),
      end: this._dateSvc.getTimeByTimeItem(after.end),
    };

    return beforeTime.start !== afterTime.start || beforeTime.end !== afterTime.end;
  }

  public hasUpdateBreakTimeConflictWithBreakTimes(before: ShopOperatingBreakType, after: ShopOperatingBreakType) {
    const startEnd = {
      id: after.id,
      start: this._dateSvc.getTimeByTimeItem(after.start),
      end: this._dateSvc.getTimeByTimeItem(after.end),
    };

    const breakTimes = this.breakStartEndTimes()
      .filter(bt => bt.id !== before.id)
      .concat([startEnd]);

    return breakTimes.some((a, indexA) =>
      breakTimes.some(
        (b, indexB) =>
          indexA !== indexB && timeOverlap({ start: a.start, end: a.end }, { start: b.start, end: b.end })
      )
    );
  }

  public hasUpdateBreakTimeConflictWithConsults(after: ShopOperatingBreakType) {
    const startEnd = {
      start: this._dateSvc.getTimeByTimeItem(after.start),
      end: this._dateSvc.getTimeByTimeItem(after.end),
    };
    const query = this.consultsInDayStartEndTimes().concat(startEnd);
    return query.some((a, indexA) =>
      query.some(
        (b, indexB) =>
          indexA !== indexB && timeOverlap({ start: a.start, end: a.end }, { start: b.start, end: b.end })
      )
    );
  }

  public hasUpdateBreakTimeConflictWithStartEndTime(after: ShopOperatingBreakType) {
    const startEnd = {
      start: this._dateSvc.getTimeByTimeItem(after.start),
      end: this._dateSvc.getTimeByTimeItem(after.end),
    };
    const is24Hours = this.is24Hours();
    const startTime = this.startTime();
    const endTime = this.endTime();
    const startInTimeRange = startTime <= startEnd.start && startTime <= startEnd.start;
    const endInTimeRange = endTime >= startEnd.end && endTime >= startEnd.end;

    return !is24Hours ? !startInTimeRange && !endInTimeRange : false;
  }

  public updateBreakTime(before: ShopOperatingBreakType, after: ShopOperatingBreakType) {
    if (this.allowUpdateBreakTime(before, after)) {
      let emp = this.employee();
      emp.defaultRoster[this.day()].breakTimes = emp.defaultRoster[this.day()].breakTimes.filter(
        bt => bt.id !== before.id
      );
      emp.defaultRoster[this.day()].breakTimes.push(after);
      this.employee.set(emp);
      this.updateWorkHours();
      return true;
    }
    return false;
  }

  public deleteBreakTime(request: ShopOperatingBreakType) {
    let emp = this.employee();
    emp.defaultRoster[this.day()].breakTimes = emp.defaultRoster[this.day()].breakTimes.filter(
      bt => bt.id !== request.id
    );
    this.employee.set(emp);
    this.updateWorkHours();
  }

  private updateWorkHours() {
    let emp = this.employee();
    emp.defaultRoster[this.day()].workHours = getWorkHours(
      this.startTime(),
      this.endTime(),
      this.breakStartEndTimes()
    );
    this.employee.set(emp);
  }

  public async onUpdate() {
    if (this.allowUpdate()) {
      return await this._empManagement.updateUser(this.employee());
    } else {
      return false;
    }
  }
}

const timeOverlap = function (a: StartEndType, b: StartEndType): boolean {
  // Convert string times to date objects for comparison
  const aStartDate = new Date(`1970-01-01T${a.start}Z`);
  const aEndDate = new Date(`1970-01-01T${a.end}Z`);
  const bStartDate = new Date(`1970-01-01T${b.start}Z`);
  const bEndDate = new Date(`1970-01-01T${b.end}Z`);

  // Check if a starts within b
  const aStartWithinB = aStartDate >= bStartDate && aStartDate < bEndDate;
  // Check if a ends within b (non-inclusive end)
  const aEndWithinB = aEndDate > bStartDate && aEndDate < bEndDate;

  // Check if b starts within a
  const bStartWithinA = bStartDate >= aStartDate && bStartDate < aEndDate;
  // Check if b ends within a (non-inclusive end)
  const bEndWithinA = bEndDate > aStartDate && bEndDate < aEndDate;

  return aStartWithinB || aEndWithinB || bStartWithinA || bEndWithinA;
};

const isTimeWithinRange = (timeToCheck: string, startTime: string, endTime: string): boolean => {
  return timeToCheck >= startTime && timeToCheck <= endTime;
};

const getWorkHours = function (start: string, end: string, breakTimes: StartEndType[]) {
  const isMidnightStart = isMidnight(start);
  const isMidnightEnd = isMidnight(end);

  const startHours = parseTimestampToFloat(start);
  const endHours = parseTimestampToFloat(end);

  const workHours = isMidnightStart && isMidnightEnd ? 24 : endHours - startHours;
  const breakHours = getBreakTimeHours(breakTimes);
  const netWorkHours = workHours - breakHours;

  return parseFloat(netWorkHours.toFixed(2));
};

const getBreakTimeHours = function (breakTimes: StartEndType[]) {
  const totalBreakHours = breakTimes.reduce((total, breakTime) => {
    const start = parseTimestampToFloat(breakTime.start);
    const end = parseTimestampToFloat(breakTime.end);
    const breakDurationHours = end - start;
    return total + breakDurationHours;
  }, 0);
  return parseFloat(totalBreakHours.toFixed(2));
};

const isMidnight = function (timestamp: string): boolean {
  return timestamp === '00:00:00';
};

const parseTimestampToFloat = function (timestamp: string): number {
  const match = timestamp.match(/^(\d{2}):(\d{2}):\d{2}$/);
  if (match) {
    const hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const timeAsFloat = parseFloat((hours + minutes / 60).toFixed(2));
    return timeAsFloat;
  }
  return 0;
};

export const isVaildTime = function (time: StartEndType) {
  const start = parseTimestampToFloat(time.start);
  const end = parseTimestampToFloat(time.end);
  const calculated = end - start;
  return calculated > 0;
};
