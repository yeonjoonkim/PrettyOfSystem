import { Injectable } from '@angular/core';
//DATE MATH
//https://www.telerik.com/kendo-angular-ui/components/date-math/get-started/
import { createDate, ZonedDate } from '@progress/kendo-date-math';
import '@progress/kendo-date-math/tz/all';
import * as Constant from 'src/app/constant/constant';
import { ITimeItem } from 'src/app/interface/global/global.interface';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root',
})
export class DateTransformService {
  constructor() {}

  public addMin(date: Date, min: number): Date {
    return moment(date).add(min, 'minutes').toDate();
  }

  public diff(aDate: Date, bDate: Date): moment.Duration {
    const a = moment(aDate);
    const b = moment(bDate);
    return moment.duration(a.diff(b));
  }

  public toShopDateTime(inputDate: Date, timezone: Constant.TimeZoneType): ZonedDate {
    let tzDate = ZonedDate.fromLocalDate(inputDate, timezone);
    let result: ZonedDate = tzDate.toTimezone(timezone);
    return result;
  }

  public addDay(inputDate: Date, addDay: number): ZonedDate {
    let date: ZonedDate = ZonedDate.fromLocalDate(inputDate);
    date = date.addDays(addDay);
    return date;
  }

  /**This function is to set the current shop local time to selected Timezone datetime.
   * Only Applies to Kendo DateTime Picker
   * Example Constant.TimeZone.EuropeBerlin (Timzone)
   * ShopDateTime: Fri Jul 7 2023 14:31:16 GMT+0200 (CEST)
   * Local: Fri Jul 07 2023 14:31:16 GMT+1000 (Australian Eastern Standard Time)
   * Local Time (GMT+1000) => Shop Local Time (GMT+0200) => Local Time (GMT+1000)
   */
  public convertToLocalShopDateTime(date: Date, timezone: Constant.TimeZoneType): Date {
    let shopDateTime = this.toShopDateTime(date, timezone);
    return this.setLocalDateTime(shopDateTime);
  }

  /**This function is to set the current shop local time as output
   * Only Applies to Kendo DateTime Picker
   * Example Constant.TimeZone.EuropeBerlin (Timzone)
   * Local: Fri Jul 07 2023 14:31:16 GMT+1000 (Australian Eastern Standard Time)
   * ShopDateTime: Fri Jul 7 2023 14:31:16 GMT+0200 (CEST)
   * Local Time (GMT+1000) => Shop Local Time (GMT+0200)
   */
  public convertShopTimeZoneDateTime(inputDate: Date, timezone: Constant.TimeZoneType): ZonedDate {
    let shopDateTime: ZonedDate = this.toShopDateTime(inputDate, timezone);
    let offset = shopDateTime.getTimezoneOffset() - inputDate.getTimezoneOffset();
    shopDateTime = shopDateTime.addTime(shopDateTime.getMinutes() + offset * 60 * 1000);
    return shopDateTime;
  }

  public convertShopTimeZoneDateTimeItem(
    inputDate: Date,
    timezone: Constant.TimeZoneType,
    time: ITimeItem
  ) {
    inputDate.setHours(time.hr, time.min, 0, 0);
    let shopTime = this.convertShopTimeZoneDateTime(inputDate, timezone);
    return shopTime;
  }
  /**This will set the local date time for user */
  public setLocalDateTime(date: Date): Date {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    return new Date(year, month, day, hr, min, sec);
  }

  public setStartDate(date: Date): Date {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return new Date(year, month, day, 0, 0, 0);
  }

  public setEndDate(date: Date): Date {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return new Date(year, month, day, 23, 59, 59);
  }

  public getMinumSelectionDate(
    inputDate: Date,
    timezone: Constant.TimeZoneType,
    restrictedFromToday: boolean,
    displayPreviousDay: number
  ): Date {
    let date: Date = this.toShopDateTime(inputDate, timezone);
    let startDate: Date = this.setStartDate(date);
    return restrictedFromToday
      ? startDate
      : displayPreviousDay
      ? this.addDay(this.setStartDate(inputDate), -displayPreviousDay)
      : new Date(1900, 0, 1);
  }

  public getMaxiumSelectionDate(
    inputDate: Date,
    timezone: Constant.TimeZoneType,
    displayNextday: number
  ): Date {
    let date: Date = this.toShopDateTime(inputDate, timezone);
    let startDate: Date = this.setStartDate(date);
    return displayNextday
      ? this.addDay(this.setStartDate(startDate), +displayNextday)
      : new Date(2050, 0, 1);
  }

  public isStartTime(timeType: Constant.DateTimeStatusType) {
    return timeType === Constant.Date.TimeStatus.Start;
  }

  public isEndTime(timeType: Constant.DateTimeStatusType) {
    return timeType === Constant.Date.TimeStatus.End;
  }

  public isCurrentTime(timeType: Constant.DateTimeStatusType) {
    return timeType === Constant.Date.TimeStatus.Current;
  }
}
