import { Injectable } from '@angular/core';
import { ShopConfigurationType, ShopEmployeeScheduleTimeType } from 'src/app/interface';
import { DateService } from 'src/app/service/global/date/date.service';

@Injectable({
  providedIn: 'root',
})
export class ShopScheduleTimeService {
  constructor(private _date: DateService) {}

  getScheduleTime(config: ShopConfigurationType): ShopEmployeeScheduleTimeType {
    const now = this._date.shopTimeStamp(config.timezone);
    const thisWeeks = this._date.shopAllDaysThisWeek(config.timezone);
    const nextWeeks = this._date.shopAllDaysNextWeek(config.timezone);
    return {
      shopNow: now,
      thisWeeks: thisWeeks,
      nextWeeks: nextWeeks,
      timezone: config.timezone,
      operatingHours: config.operatingHours,
      thisWeek: {
        start: this._date.shopStartOfThisWeek(config.timezone),
        end: this._date.shopEndOfThisWeek(config.timezone),
      },
      nextWeek: {
        start: this._date.shopStartOfNextWeek(config.timezone),
        end: this._date.shopEndOfNextWeek(config.timezone),
      },
    };
  }
}
