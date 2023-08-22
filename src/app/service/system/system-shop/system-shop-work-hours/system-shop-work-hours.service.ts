import { Injectable } from '@angular/core';
import { IShopOperatingHours } from 'src/app/interface/shop/shop.interface';
import * as Constant from './../../../../service/global/global-constant';

@Injectable({
  providedIn: 'root',
})
export class SystemShopWorkHoursService {
  constructor() {}

  public setDefaultWorkHours() {
    return {
      closeDay: [],
      mon: {
        isOpen: true,
        operatingHours: this.getDefaultOperatingHours(),
        index: Constant.Date.DayIndex.Mon,
        day: Constant.Date.Day.Mon,
        workHours: 24,
      },
      tue: {
        isOpen: true,
        operatingHours: this.getDefaultOperatingHours(),
        index: Constant.Date.DayIndex.Tue,
        day: Constant.Date.Day.Tue,
        workHours: 24,
      },
      wed: {
        isOpen: true,
        operatingHours: this.getDefaultOperatingHours(),
        index: Constant.Date.DayIndex.Wed,
        day: Constant.Date.Day.Wed,
        workHours: 24,
      },
      thu: {
        isOpen: true,
        operatingHours: this.getDefaultOperatingHours(),
        index: Constant.Date.DayIndex.Thu,
        day: Constant.Date.Day.Thu,
        workHours: 24,
      },
      fri: {
        isOpen: true,
        operatingHours: this.getDefaultOperatingHours(),
        index: Constant.Date.DayIndex.Fri,
        day: Constant.Date.Day.Fri,
        workHours: 24,
      },
      sat: {
        isOpen: true,
        operatingHours: this.getDefaultOperatingHours(),
        index: Constant.Date.DayIndex.Sat,
        day: Constant.Date.Day.Sat,
        workHours: 24,
      },
      sun: {
        isOpen: true,
        operatingHours: this.getDefaultOperatingHours(),
        index: Constant.Date.DayIndex.Sun,
        day: Constant.Date.Day.Sun,
        workHours: 24,
      },
    };
  }

  private getDefaultOperatingHours(): IShopOperatingHours {
    return {
      openTime: {
        hr: 0,
        min: 0,
        dayNightType: 'AM',
        strValue: '00:00:00',
      },
      closeTime: {
        hr: 0,
        min: 0,
        dayNightType: 'AM',
        strValue: '00:00:00',
      },
    };
  }
}
