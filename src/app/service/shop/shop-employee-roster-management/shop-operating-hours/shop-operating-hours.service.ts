import { Injectable, Signal, computed, inject } from '@angular/core';
import { ShopService } from '../../shop.service';
import { toSignal } from '@angular/core/rxjs-interop';
import * as Constant from 'src/app/constant/constant';
import { DateService } from 'src/app/service/global/date/date.service';
import { ShopWorkHoursType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class ShopOperatingHoursService {
  private _shop = inject(ShopService);
  private _dateSvc = inject(DateService);
  private operatingHours = toSignal(this._shop.operatingWorkHours$, {
    initialValue: null,
  }) as Signal<ShopWorkHoursType>;
  private timezone = toSignal(this._shop.timezone$) as Signal<string>;

  public loaded = computed(() => {
    const hours = this.operatingHours();
    return hours !== null && hours !== undefined;
  });

  public data = this.operatingHours;

  startOfToday = computed(() => {
    return this._dateSvc.startDay(this._dateSvc.shopNow(this.timezone()));
  });

  constructor() {}

  public isWorking(day: Constant.DayType) {
    return this.operatingHours()[day].isOpen;
  }

  public openTimeItem(day: Constant.DayType) {
    return this.operatingHours()[day].operatingHours.openTime;
  }

  public openTime(day: Constant.DayType) {
    const openTimeItem = this.openTimeItem(day);
    return this._dateSvc.getTimeByTimeItem(openTimeItem);
  }

  public closeTimeItem(day: Constant.DayType) {
    const hours = this.operatingHours();
    return hours[day].operatingHours.closeTime;
  }

  public closeTime(day: Constant.DayType) {
    const closeTimeItem = this.closeTimeItem(day);
    const is24Hours = this.is24Hours(day);
    console.log(is24Hours);
    return is24Hours ? '23:59:59' : this._dateSvc.getTimeByTimeItem(closeTimeItem);
  }

  public is24Hours(day: Constant.DayType) {
    const open = this.openTimeItem(day);
    const close = this.closeTimeItem(day);
    return this._dateSvc.is24HoursByTimeItem(open, close);
  }
}
