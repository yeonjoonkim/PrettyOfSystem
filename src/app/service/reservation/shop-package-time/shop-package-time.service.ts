import { Injectable } from '@angular/core';
import { DateService } from '../../global/date/date.service';
import * as Constant from 'src/app/constant/constant';
import { ShopPackageLimitedTime } from 'src/app/interface';
@Injectable({
  providedIn: 'root',
})
export class ShopPackageTimeService {
  constructor(private _date: DateService) {}

  isAvailableNow(timezone: Constant.TimeZoneType, time: ShopPackageLimitedTime | null) {
    if (time) {
      const isAvailableTime = this.isAvailableTime(timezone, time);
      const isAvailableDay = this.isAvailableDay(timezone, time);
      return isAvailableDay && isAvailableTime;
    }
    return true;
  }

  private isAvailableTime(timezone: Constant.TimeZoneType, time: ShopPackageLimitedTime) {
    const shopDateTime = this._date.transform.toShopDateTime(new Date(), timezone);
    const now = this._date.transform.formatLocalDateTime(shopDateTime);
    const start = this._date.transform.formatByTimeItem(now, time.start);
    const end = this._date.transform.formatByTimeItem(now, time.end);
    return now < end || (start.includes('00:00:00') && end.includes('00:00:00'));
  }

  private isAvailableDay(timezone: Constant.TimeZoneType, time: ShopPackageLimitedTime) {
    const shopTime = this._date.transform.toShopDateTime(new Date(), timezone);
    const availableDays = time.offeredDateIndex;
    const today = shopTime.getDay() as Constant.DayIndexType;
    return availableDays.length > 0 ? availableDays.includes(today) : true;
  }
}
