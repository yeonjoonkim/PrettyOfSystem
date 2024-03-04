import { Injectable, inject } from '@angular/core';
import {
  SchedulerEmployeeStatusType,
  SchedulerOperatingHoursType,
  ShopEmployeeBreakTimeType,
  ShopEmployeeScheduledConsultType,
  ShopScheduleDocumentType,
} from 'src/app/interface';
import {
  DateTimeValidatorService,
  StartEndType,
} from 'src/app/service/global/date-time-validator/date-time-validator.service';
import { DateType } from 'src/app/service/global/date/date-transform/date-transform.service';
import { DateService } from 'src/app/service/global/date/date.service';
import * as Constant from 'src/app/constant/constant';
import { DateStatusType } from 'src/app/interface/reservation/reservation-scheduler.interface';
import { getTime } from 'date-fns';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

@Injectable({
  providedIn: 'root',
})
export class ShopReservationEmployeeInfoService {
  private _timeValidator = inject(DateTimeValidatorService);
  private _dateSvc = inject(DateService);

  constructor() {}

  public getStatus(
    dateStatus: DateStatusType,
    info: ShopScheduleDocumentType,
    today: SchedulerOperatingHoursType,
    timestamp: string
  ): SchedulerEmployeeStatusType {
    if (!dateStatus.isToday) {
      return info.isWorking ? Constant.Scheduler.WorkingStatus.Working : Constant.Scheduler.WorkingStatus.DayOff;
    }

    if (!info.isWorking) {
      return Constant.Scheduler.WorkingStatus.DayOff;
    }

    if (
      this.isOutofOffice(info.startDateTime, info.endDateTime, timestamp) ||
      this.isOutSideOfWorkingHours(today.startDateTime, today.endDateTime, timestamp)
    ) {
      return Constant.Scheduler.WorkingStatus.OutOfOffice;
    }

    if (this.isInConsulting(info.scheduledConsults, timestamp)) {
      return Constant.Scheduler.WorkingStatus.Consulting;
    }

    if (this.isInBreakTime(info.breakTimes, timestamp)) {
      return Constant.Scheduler.WorkingStatus.InBreak;
    }

    return info.isWorking
      ? Constant.Scheduler.WorkingStatus.Available
      : Constant.Scheduler.WorkingStatus.Available;
  }

  getEvents(employees: ShopScheduleDocumentType[], operatingHours: SchedulerOperatingHoursType): SchedulerEvent[] {
    const emps = employees.filter(s => s.isWorking);
    const breakTimes = this.getBreakTimeEvents(employees);
    const startOutOfOffice = this.getStartOutOfOffice(emps, operatingHours);
    const endOutOfOffice = this.getEndOutofOffice(emps, operatingHours);
    return [...breakTimes, ...startOutOfOffice, ...endOutOfOffice];
  }

  private getBreakTimeEvents(employees: ShopScheduleDocumentType[]) {
    return employees
      .filter(q => q.breakTimes && q.breakTimes.length > 0)
      .map(q =>
        q.breakTimes.map(bt => ({
          id: q.employeeId,
          start: this._dateSvc.transform.toLocalDateTime(bt.startDateTime),
          startTimezone: q.shopTimezone,
          end: this._dateSvc.transform.toLocalDateTime(bt.endDateTime),
          endTimezone: q.shopTimezone,
          title: 'Break Time',
          description: Constant.Scheduler.WorkingStatus.InBreak,
          dataItem: q,
          isAllDay: false,
        }))
      )
      .reduce((acc, val) => acc.concat(val), []);
  }

  private getStartOutOfOffice(employees: ShopScheduleDocumentType[], operatingHours: SchedulerOperatingHoursType) {
    return employees
      .filter(q => getTime(new Date(q.startDateTime)) !== getTime(new Date(operatingHours.startDateTime)))
      .map(q => {
        const event: SchedulerEvent = {
          id: q.employeeId,
          start: this._dateSvc.transform.toLocalDateTime(operatingHours.startDateTime),
          startTimezone: q.shopTimezone,
          end: this._dateSvc.transform.toLocalDateTime(q.startDateTime),
          endTimezone: q.shopTimezone,
          title: 'Out Of Office',
          description: Constant.Scheduler.WorkingStatus.OutOfOffice,
          dataItem: q,
          isAllDay: false,
        };
        return event;
      });
  }

  private getEndOutofOffice(employees: ShopScheduleDocumentType[], operatingHours: SchedulerOperatingHoursType) {
    return employees
      .filter(q => getTime(new Date(q.endDateTime)) !== getTime(new Date(operatingHours.endDateTime)))
      .map(q => {
        const event: SchedulerEvent = {
          id: q.employeeId,
          start: this._dateSvc.transform.toLocalDateTime(q.endDateTime),
          startTimezone: q.shopTimezone,
          end: this._dateSvc.transform.toLocalDateTime(operatingHours.endDateTime),
          endTimezone: q.shopTimezone,
          title: 'Out Of Office',
          description: Constant.Scheduler.WorkingStatus.OutOfOffice,
          dataItem: q,
          isAllDay: false,
        };
        return event;
      });
  }

  private isInConsulting(consults: ShopEmployeeScheduledConsultType[], date: DateType) {
    if (!consults) {
      return false;
    }
    const timestamp = this._dateSvc.transform.formatLocalDateTime(this._dateSvc.transform.toLocalDateTime(date));
    return consults.some(consults =>
      this._timeValidator.isTimeWithinRange(timestamp, consults.startDateTime, consults.endDateTime)
    );
  }

  private isInBreakTime(breakTimes: ShopEmployeeBreakTimeType[], date: DateType) {
    if (!breakTimes) {
      return false;
    }
    const timestamp = this._dateSvc.transform.formatLocalDateTime(this._dateSvc.transform.toLocalDateTime(date));
    return breakTimes.some(breakTime =>
      this._timeValidator.isTimeWithinRange(timestamp, breakTime.startDateTime, breakTime.endDateTime)
    );
  }

  private isOutSideOfWorkingHours(shopStartTime: string, shopEndTime: string, timestamp: string) {
    const currentTime = getTime(this._dateSvc.transform.toLocalDateTime(timestamp));
    const shop = {
      start: getTime(this._dateSvc.transform.toLocalDateTime(shopStartTime)),
      end: getTime(this._dateSvc.transform.toLocalDateTime(shopEndTime)),
    };
    return shop.start >= currentTime || shop.end <= currentTime;
  }

  private isOutofOffice(startDateTIme: string, endDateTIme: string, timestamp: string) {
    const currentTime = getTime(this._dateSvc.transform.toLocalDateTime(timestamp));
    const emp = {
      start: getTime(this._dateSvc.transform.toLocalDateTime(startDateTIme)),
      end: getTime(this._dateSvc.transform.toLocalDateTime(endDateTIme)),
    };
    return emp.start <= currentTime ? emp.end <= currentTime : true;
  }

  public getEventTimesFromDocument(document: ShopScheduleDocumentType) {
    const breakTimes = document.breakTimes.map(bt => {
      return {
        start: this._dateSvc.getTime(bt.startDateTime),
        end: this._dateSvc.getTime(bt.endDateTime),
      } as StartEndType;
    });
    const consults = document.scheduledConsults.map(consult => {
      return {
        start: this._dateSvc.getTime(consult.startDateTime),
        end: this._dateSvc.getTime(consult.endDateTime),
      } as StartEndType;
    });

    return [...breakTimes, ...consults];
  }
}

export function isWorking(status: Constant.SchedulerEmployeeStatusType) {
  return status !== Constant.Scheduler.WorkingStatus.DayOff;
}
