import { Injectable, inject } from '@angular/core';
import { DateService } from '../date/date.service';
export type StartEndType = {
  start: string; // range 00:00:00 - 23:59:59
  end: string; // range 00:00:00 - 23:59:59
};
const IsoDateChecker = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
const TimeChecker = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;

@Injectable({
  providedIn: 'root',
})
export class DateTimeValidatorService {
  private _dateSvc = inject(DateService);
  constructor() {}

  public isTimeOverlap(a: StartEndType, b: StartEndType) {
    const aTime = this.getStartEndTime(a);
    const bTime = this.getStartEndTime(b);
    return aTime !== null && bTime !== null ? timeOverlap(aTime, bTime) : true;
  }

  public withinStartEndRange(target: string, startTime: string, endTime: string) {
    const checker = this.getStartEndTime({ start: startTime, end: endTime });
    const is24Hours = checker !== null ? checker.start === '00:00:00' && checker.end === '00:00:00' : false;
    if (is24Hours) {
      return true;
    }
    const targetTime = this.getTime(target);
    const startMin = checker !== null ? convertTimeToMinutes(checker.start) : null;
    const endMin = checker !== null ? convertTimeToMinutes(checker.end) : null;
    const targetMin = targetTime !== null ? convertTimeToMinutes(targetTime) : null;

    if (checker !== null && targetTime !== null && targetMin !== null && endMin !== null && startMin !== null) {
      return targetMin >= startMin && targetMin <= endMin;
    }
    return false;
  }

  public isTimeWithinRange(target: string, startTime: string, endTime: string) {
    const checker = this.getStartEndTime({ start: startTime, end: endTime });
    const targetTime = this.getTime(target);
    const is24Hours = checker !== null ? checker.start === '00:00:00' && checker.end === '00:00:00' : false;

    if (!checker || !targetTime) {
      return false;
    }

    if (is24Hours) {
      return true;
    }

    return !is24Hours ? targetTime >= checker.start && targetTime <= checker.end : true;
  }

  private getStartEndTime(time: StartEndType) {
    const start = this.getTime(time.start);
    const end = this.getTime(time.end);
    return start !== null && end !== null
      ? {
          start: start,
          end: end,
        }
      : null;
  }

  private getTime(time: string) {
    return IsoDateChecker.test(time) ? this._dateSvc.getTime(time) : TimeChecker.test(time) ? time : null;
  }
}
const timeOverlap = (a: StartEndType, b: StartEndType): boolean => {
  const aStart = convertTimeToMinutes(a.start);
  const aEnd = convertTimeToMinutes(a.end);
  const bStart = convertTimeToMinutes(b.start);
  const bEnd = convertTimeToMinutes(b.end);

  const aStartWithinB = aStart >= bStart && aStart < bEnd;
  const aEndWithinB = aEnd > bStart && aEnd <= bEnd;
  const bStartWithinA = bStart >= aStart && bStart < aEnd;
  const bEndWithinA = bEnd > aStart && bEnd <= aEnd;

  return aStartWithinB || aEndWithinB || bStartWithinA || bEndWithinA;
};

const convertTimeToMinutes = (time: string): number => {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return hours * 60 + minutes + seconds / 60;
};
