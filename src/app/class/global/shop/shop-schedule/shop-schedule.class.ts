import {
  ShopScheduleDocumentType,
  ShopEmployeeBreakTimeType,
  ShopEmployeeScheduledConsultType,
} from '../../../../interface/index';

export class ShopScheduleDocument {
  public updated: boolean = false;
  private document!: ShopScheduleDocumentType;
  private deletedConsults: ShopEmployeeScheduledConsultType[] = [];

  get id() {
    return this.document.id;
  }

  get shopTimezone() {
    return this.document.shopTimezone;
  }

  get employeId() {
    return this.document.employeeId;
  }

  get firstName() {
    return this.document.firstName;
  }

  get lastName() {
    return this.document.lastName;
  }

  get initials() {
    const firstName = this.document.firstName.split(' ')[0].toLowerCase();
    const lastNameInitial = this.document.lastName.charAt(0).toLowerCase();
    return `${firstName} ${lastNameInitial}`;
  }

  get gender() {
    return this.document.gender;
  }

  get startOfDay() {
    return this.document.startOfDay;
  }

  get startDateTime() {
    return this.document.startDateTime;
  }

  set startDateTime(dateTime: string) {
    this.document.startDateTime = dateTime;
    this.updateTime();
  }

  get endDateTime() {
    return this.document.endDateTime;
  }

  set endDateTime(dateTime: string) {
    this.document.endDateTime = dateTime;
    this.updateTime();
  }

  get dayIndex() {
    return this.document.dayIndex;
  }

  get isWorking() {
    return this.document.isWorking;
  }

  set isWorking(isWorking: boolean) {
    this.document.isWorking = isWorking;
  }

  get breakTimes() {
    return this.document.breakTimes;
  }

  set breakTimes(breakTimes: ShopEmployeeBreakTimeType[]) {
    this.document.breakTimes = breakTimes;
    this.updateTime();
  }

  get scheduledConsults() {
    return this.document.scheduledConsults;
  }

  get workHours() {
    return this.document.workHours;
  }

  get breakHours() {
    return this.document.breakHours;
  }

  get displayInSystem() {
    return this.document.displayInSystem;
  }

  get active() {
    return this.document.active;
  }

  get data() {
    return this.document;
  }

  get deletedConsult() {
    return this.deletedConsults;
  }

  constructor(private doc: ShopScheduleDocumentType) {
    this.document = this.doc;
  }

  private findOverlappingTime<T extends ShopEmployeeBreakTimeType | ShopEmployeeScheduledConsultType>(
    timePeriods: T[]
  ): T[] {
    const overlaps: T[] = [];
    for (let i = 0; i < timePeriods.length; i++) {
      for (let j = i + 1; j < timePeriods.length; j++) {
        if (
          timesOverlap(
            timePeriods[i].startDateTime,
            timePeriods[i].endDateTime,
            timePeriods[j].startDateTime,
            timePeriods[j].endDateTime
          )
        ) {
          // Check if the item is not already in overlaps to avoid duplicates
          if (!overlaps.some(item => item === timePeriods[i])) {
            overlaps.push(timePeriods[i]);
          }
          if (!overlaps.some(item => item === timePeriods[j])) {
            overlaps.push(timePeriods[j]);
          }
        }
      }
    }
    return overlaps;
  }

  public updateTime() {
    this.document.breakHours = getBreakTimeHours(this.document.breakTimes);
    this.document.workHours = getWorkHours(
      this.document.startDateTime,
      this.document.endDateTime,
      this.document.breakTimes
    );
  }

  private isInWorkingHours(startTime: string, endTime: string): boolean {
    if (startTime.includes('00:00:00') && endTime.includes('00:00:00')) {
      return true;
    }
    return startTime >= this.document.startDateTime && endTime <= this.document.endDateTime;
  }

  public removeConsultOverlaps() {
    const overlaps = this.findconsultOverlaps();

    if (overlaps.length > 0) {
      this.addIntoDeletedConsults(overlaps);

      for (const overlap of overlaps) {
        const index = this.document.scheduledConsults.indexOf(overlap);
        if (index !== -1) {
          this.document.scheduledConsults.splice(index, 1);
        }
      }
      this.updateTime();
      this.updated = true;
    }
  }

  public removeBreakTimeOverlaps() {
    const overlaps = this.findBreakOverlaps();
    if (overlaps.length > 0) {
      for (const overlap of overlaps) {
        const index = this.document.breakTimes.indexOf(overlap);
        if (index !== -1) {
          this.document.breakTimes.splice(index, 1);
        }
      }
      this.updateTime();
      this.updated = true;
    }
  }

  public removeOutOfRangeBreakTime() {
    const inRange = this.document.breakTimes.filter(breakTime =>
      this.isInWorkingHours(breakTime.startDateTime, breakTime.endDateTime)
    );
    if (inRange.length !== this.breakTimes.length) {
      this.document.breakTimes = this.document.breakTimes.filter(breakTime =>
        this.isInWorkingHours(breakTime.startDateTime, breakTime.endDateTime)
      );
      this.updateTime();
      this.updated = true;
    }
  }

  public removeOutOfRangeConsult() {
    const inRange = this.document.scheduledConsults.filter(consult =>
      this.isInWorkingHours(consult.startDateTime, consult.endDateTime)
    );
    if (inRange.length !== this.scheduledConsults.length) {
      this.addIntoDeletedConsults(this.findOutOfRangeConsult());
      this.document.scheduledConsults = this.document.scheduledConsults.filter(consult =>
        this.isInWorkingHours(consult.startDateTime, consult.endDateTime)
      );
      this.updateTime();
      this.updated = true;
    }
  }

  public findOutOfRangeConsult() {
    return this.document.scheduledConsults.filter(
      consult => !this.isInWorkingHours(consult.startDateTime, consult.endDateTime)
    );
  }

  public findOutOfRangeBreakTime() {
    this.document.breakTimes = this.document.breakTimes.filter(
      breakTime => !this.isInWorkingHours(breakTime.startDateTime, breakTime.endDateTime)
    );
  }

  public findconsultOverlaps() {
    return this.findOverlappingTime(this.document.scheduledConsults);
  }

  public findBreakOverlaps() {
    return this.findOverlappingTime(this.document.breakTimes);
  }

  public areBreakTimesWithinWorkingHours(): boolean {
    return this.document.breakTimes.every(breakTime =>
      this.isInWorkingHours(breakTime.startDateTime, breakTime.endDateTime)
    );
  }

  private addIntoDeletedConsults(request: ShopEmployeeScheduledConsultType[]) {
    const exisitingIds: string[] = this.deletedConsults.map(d => d.consultId);
    for (const doc of request) {
      if (!exisitingIds.some(id => id === doc.consultId)) {
        this.deletedConsults.push(doc);
      }
    }
  }

  public addConsult(newConsult: ShopEmployeeScheduledConsultType): boolean {
    if (!this.allowAddConsult(newConsult)) {
      return false;
    }
    this.document.scheduledConsults.push(newConsult);
    this.updated = true;
    this.updateTime();
    return true;
  }

  public updateConsult(
    before: ShopEmployeeScheduledConsultType,
    after: ShopEmployeeScheduledConsultType
  ): boolean {
    if (this.allowUpdateConsult(before, after)) {
      const deleted = this.deleteConsult(before.consultId);
      const added = deleted ? this.addConsult(after) : false;
      return deleted && added;
    } else {
      return false;
    }
  }

  public deleteConsult(consultId: string) {
    const consult = this.document.scheduledConsults.find(s => s.consultId === consultId);
    if (consult !== undefined) {
      this.document.scheduledConsults = this.document.scheduledConsults.filter(s => s.consultId !== consultId);
      this.updated = true;
      return true;
    }
    return false;
  }

  public allowAddConsult(newConsult: ShopEmployeeScheduledConsultType) {
    const consultOverlap = this.document.scheduledConsults.some(existingConsult =>
      timesOverlap(
        newConsult.startDateTime,
        newConsult.endDateTime,
        existingConsult.startDateTime,
        existingConsult.endDateTime
      )
    );

    const breakOverlap = this.breakTimes.some(existingBreakTime =>
      timesOverlap(
        newConsult.startDateTime,
        newConsult.endDateTime,
        existingBreakTime.startDateTime,
        existingBreakTime.endDateTime
      )
    );

    const isInWorkingHours = this.isInWorkingHours(newConsult.startDateTime, newConsult.endDateTime);

    return !consultOverlap && !breakOverlap && isInWorkingHours;
  }

  public allowUpdateConsult(before: ShopEmployeeScheduledConsultType, after: ShopEmployeeScheduledConsultType) {
    const otherConsults = this.document.scheduledConsults.filter(
      c => !(c.startDateTime === before.startDateTime && c.endDateTime === before.endDateTime)
    );

    const consultOverlap = otherConsults.some(existingConsult =>
      timesOverlap(
        after.startDateTime,
        after.endDateTime,
        existingConsult.startDateTime,
        existingConsult.endDateTime
      )
    );

    const breakOverlap = this.breakTimes.some(existingBreakTime =>
      timesOverlap(
        after.startDateTime,
        after.endDateTime,
        existingBreakTime.startDateTime,
        existingBreakTime.endDateTime
      )
    );

    const isInWorkingHours = this.isInWorkingHours(after.startDateTime, after.endDateTime);

    return !consultOverlap && !breakOverlap && isInWorkingHours;
  }

  public addBreak(breakTime: ShopEmployeeBreakTimeType): boolean {
    if (!this.allowAddBreakTime(breakTime)) {
      return false;
    }

    this.document.breakTimes.push(breakTime);
    this.updated = true;
    this.updateTime();
    return true;
  }

  public deleteBreak(breakTime: ShopEmployeeBreakTimeType): boolean {
    const bt = this.breakTimes.find(
      bt => bt.startDateTime === breakTime.startDateTime && bt.endDateTime === breakTime.endDateTime
    );
    if (bt !== undefined) {
      this.document.breakTimes = this.breakTimes.filter(
        s => !(s.startDateTime === breakTime.startDateTime && s.endDateTime === breakTime.endDateTime)
      );
      this.updated = true;
      this.updateTime();
      return true;
    }
    return false;
  }

  public updateBreaktTime(before: ShopEmployeeBreakTimeType, after: ShopEmployeeBreakTimeType) {
    if (this.allowUpdateBreakTime(before, after)) {
      const deleted = this.deleteBreak(before);
      const added = deleted ? this.addBreak(after) : false;
      return deleted && added;
    } else {
      return false;
    }
  }

  public allowAddBreakTime(newBreak: ShopEmployeeBreakTimeType) {
    const breakOverlap = this.breakTimes.some(existingBreakTime =>
      timesOverlap(
        newBreak.startDateTime,
        newBreak.endDateTime,
        existingBreakTime.startDateTime,
        existingBreakTime.endDateTime
      )
    );

    const consultOverlap = this.document.scheduledConsults.some(existingConsult =>
      timesOverlap(
        newBreak.startDateTime,
        newBreak.endDateTime,
        existingConsult.startDateTime,
        existingConsult.endDateTime
      )
    );

    const isInWorkingHours = this.isInWorkingHours(newBreak.startDateTime, newBreak.endDateTime);
    const breakTime = getBreakTimeHours([newBreak]);

    return !breakOverlap && !consultOverlap && isInWorkingHours && breakTime > 0;
  }

  public allowUpdateBreakTime(before: ShopEmployeeBreakTimeType, after: ShopEmployeeBreakTimeType) {
    const otherBreakTimes = this.breakTimes.filter(
      s => !(s.startDateTime === before.startDateTime && s.endDateTime === before.endDateTime)
    );

    const breakOverlap = otherBreakTimes.some(existingBreakTime =>
      timesOverlap(
        after.startDateTime,
        after.endDateTime,
        existingBreakTime.startDateTime,
        existingBreakTime.endDateTime
      )
    );

    const consultOverlap = this.document.scheduledConsults.some(existingConsult =>
      timesOverlap(
        after.startDateTime,
        after.endDateTime,
        existingConsult.startDateTime,
        existingConsult.endDateTime
      )
    );
    const isInWorkingHours = this.isInWorkingHours(after.startDateTime, after.endDateTime);
    const breakTime = getBreakTimeHours([after]);
    const isNotEqualToPrevious =
      before.startDateTime !== after.startDateTime || before.endDateTime !== after.endDateTime;

    return !breakOverlap && !consultOverlap && isInWorkingHours && breakTime > 0 && isNotEqualToPrevious;
  }
}

const timesOverlap = function (
  aStartDate: string,
  aEndDate: string,
  bStartDate: string,
  bEndDate: string
): boolean {
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

const getBreakTimeHours = (breakTimes: ShopEmployeeBreakTimeType[]): number => {
  const totalMinutes = breakTimes.reduce((acc, curr) => {
    const start = parseTimestamp(curr.startDateTime);
    const end = parseTimestamp(curr.endDateTime);
    const startTotalMinutes = start.hours * 60 + start.minutes;
    const endTotalMinutes = end.hours * 60 + end.minutes;
    return acc + (endTotalMinutes - startTotalMinutes);
  }, 0);
  return parseFloat((totalMinutes / 60).toFixed(2));
};

const getWorkHours = (start: string, end: string, breakTimes: ShopEmployeeBreakTimeType[]): number => {
  const startTimestamp = parseTimestamp(start);
  const endTimestamp = parseTimestamp(end);

  const startTotalMinutes = startTimestamp.hours * 60 + startTimestamp.minutes;
  const endTotalMinutes = endTimestamp.hours * 60 + endTimestamp.minutes;

  const workMinutes = endTotalMinutes - startTotalMinutes;
  const breakMinutes = getBreakTimeHours(breakTimes) * 60;

  const netWorkMinutes = workMinutes - breakMinutes;
  const netWorkHours = netWorkMinutes / 60;

  return parseFloat(netWorkHours.toFixed(2));
};

const parseTimestamp = (timestamp: string): { hours: number; minutes: number } => {
  const match = timestamp.match(/T(\d{2}):(\d{2}):\d{2}/);
  if (match) {
    const hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    return { hours, minutes };
  }
  return { hours: 0, minutes: 0 };
};
