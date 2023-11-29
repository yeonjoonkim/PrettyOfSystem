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
    const twoWeeks = this._date.shopAllDaysNextTwoWeek(config.timezone);
    const threeWeeks = this._date.shopAllDaysNextThreeWeek(config.timezone);
    const fourWeeks = this._date.shopAllDaysNextFourWeek(config.timezone);

    return {
      shopNow: now,
      thisWeeks: thisWeeks,
      nextWeeks: nextWeeks,
      twoWeeks: twoWeeks,
      threeWeeks: threeWeeks,
      fourWeeks: fourWeeks,
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
      twoWeek: {
        start: this._date.shopStartOfTwoWeek(config.timezone),
        end: this._date.shopEndOfTwoWeek(config.timezone),
      },
      threeWeek: {
        start: this._date.shopStartOfThreeWeek(config.timezone),
        end: this._date.shopEndOfThreeWeek(config.timezone),
      },
      fourWeek: {
        start: this._date.shopStartOfFourWeek(config.timezone),
        end: this._date.shopEndOfFourWeek(config.timezone),
      },
    };
  }
}
