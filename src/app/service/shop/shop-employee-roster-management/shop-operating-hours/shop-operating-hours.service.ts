import { Injectable, Signal, computed, inject } from '@angular/core';
import { ShopService } from '../../shop.service';
import { toSignal } from '@angular/core/rxjs-interop';
import * as Constant from 'src/app/constant/constant';
import { DateService } from 'src/app/service/global/date/date.service';
import { SchedulerOperatingHoursType, ShopWorkHoursType } from 'src/app/interface';
import { DateType } from 'src/app/service/global/date/date-transform/date-transform.service';

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

  public startOfToday = computed(() => {
    return this._dateSvc.startDay(this._dateSvc.shopNow(this.timezone()));
  });

  public todayStartDateTime = computed(() => {
    const today = this.startOfToday();
    const day = this._dateSvc.getDay(today);
    return this.getStartDateTime(today, day);
  });

  public todayEndDateTime = computed(() => {
    const today = this.startOfToday();
    const day = this._dateSvc.getDay(today);
    return this.getEndDateTime(today, day);
  });

  public isTodayOpen = computed(() => {
    const today = this.startOfToday();
    const day = this._dateSvc.getDay(today);
    return this.isWorking(day);
  });

  public isToday24Hours = computed(() => {
    const today = this.startOfToday();
    const day = this._dateSvc.getDay(today);
    return this.is24Hours(day);
  });

  public todayOperatingHours = computed(() => {
    const startDateTime = this.todayStartDateTime();
    const endDateTime = this.todayEndDateTime();
    const isOpen = this.isTodayOpen();
    const is24Hours = this.isToday24Hours();
    return {
      startDateTime: startDateTime,
      endDateTime: endDateTime,
      isOpen: isOpen,
      is24Hours: is24Hours,
    } as SchedulerOperatingHoursType;
  });

  constructor() {}

  public getOperatingHours(dateTime: string) {
    const day = this._dateSvc.getDay(dateTime);
    const startDateTime = this.getStartDateTime(dateTime, day);
    const endDateTime = this.getEndDateTime(dateTime, day);
    const isOpen = this.isWorking(day);
    const is24Hours = this.is24Hours(day);
    return {
      startDateTime: startDateTime,
      endDateTime: endDateTime,
      isOpen: isOpen,
      is24Hours: is24Hours,
    } as SchedulerOperatingHoursType;
  }

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
    return is24Hours ? '23:59:59' : this._dateSvc.getTimeByTimeItem(closeTimeItem);
  }

  public is24Hours(day: Constant.DayType) {
    const open = this.openTimeItem(day);
    const close = this.closeTimeItem(day);
    return this._dateSvc.is24HoursByTimeItem(open, close);
  }

  public getStartDateTime(startofDay: string, day: Constant.DayType) {
    const open = this.openTimeItem(day);
    return this._dateSvc.transform.formatByTimeItem(startofDay, open);
  }

  public getEndDateTime(startofDay: string, day: Constant.DayType) {
    const is24Hours = this.is24Hours(day);
    return !is24Hours
      ? this._dateSvc.transform.formatByTimeItem(startofDay, this.closeTimeItem(day))
      : `${startofDay.split('T')[0]}23:59:59`;
  }
}
