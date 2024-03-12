import { parseISO } from 'date-fns';
import { format, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { Injectable } from '@angular/core';
import { TimeItemType } from 'src/app/interface/global/global.interface';

import * as Constant from 'src/app/constant/constant';
import * as deafultTimezone from 'moment-timezone';

const dateFormatter = `yyyy-MM-dd'T'HH:mm:ss`;
export const localTimezone = deafultTimezone.tz.guess();

export type DateType = string | Date;
@Injectable({
  providedIn: 'root',
})
export class DateTransformService {
  constructor() {}

  toLocalDateTime(date: DateType): Date {
    return typeof date === 'string' ? this.parseLocalDateTime(date) : date instanceof Date ? date : new Date();
  }

  toShopDateTime(date: DateType, timezone: Constant.TimeZoneType): Date {
    const localDate = this.toLocalDateTime(date);
    const utc = zonedTimeToUtc(localDate, localTimezone);
    return utcToZonedTime(utc, timezone);
  }

  getTimeByDateType(date: DateType) {
    const local = this.toLocalDateTime(date);
    const formatted = this.formatLocalDateTime(local);
    return formatted.split('T')[1];
  }

  getTimeByTimeItem(time: TimeItemType) {
    const formatted = this.formatByTimeItem(new Date(), time);
    return formatted.split('T')[1];
  }

  formatByTimeItem(date: DateType, time: TimeItemType) {
    const local = this.toLocalDateTime(date);
    local.setHours(time.hr);
    local.setMinutes(time.min);
    local.setSeconds(0);
    local.setMilliseconds(0);
    return this.formatLocalDateTime(local);
  }

  formatLocalDateTime(date: Date): string {
    return format(date, dateFormatter);
  }

  private parseLocalDateTime(stringDate: string): Date {
    return parseISO(stringDate);
  }
}
