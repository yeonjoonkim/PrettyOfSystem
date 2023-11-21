import { Injectable } from '@angular/core';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { PostCodeItemType, ShopConfigurationType, ShopWorkHoursType } from 'src/app/interface';
import { DateService } from '../global/date/date.service';
import * as Constant from 'src/app/constant/constant';
import { ShopPictureRepositoryService } from 'src/app/firebase/shop-repository/shop-picture-repository/shop-picture-repository.service';
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(
    private _shopRepo: SystemShopConfigurationRepositoryService,
    private _pictureRepo: ShopPictureRepositoryService,
    private _date: DateService
  ) {}

  public get(postcode: PostCodeItemType) {
    return this._shopRepo.postcodeAssociatedShopConfigurationValueChangeListener(postcode);
  }

  public getPicture(url: string) {
    return this._pictureRepo.getFile(url);
  }

  public isOpenNow(config: ShopConfigurationType) {
    const now = this._date.shopTimeStamp(config.timezone);
    const local = this._date.transform.toLocalDateTime(now);
    return this.isOpenTime(local, config.operatingHours);
  }

  public getTodayTimeItem(config: ShopConfigurationType) {
    const now = this._date.shopTimeStamp(config.timezone);
    const local = this._date.transform.toLocalDateTime(now);
    return this.getOperatingHours(local, config.operatingHours);
  }

  public getTomorrowTimeItem(config: ShopConfigurationType) {
    const now = this._date.shopTimeStamp(config.timezone);
    const tomorrow = this._date.addDay(now, 1);
    const local = this._date.transform.toLocalDateTime(tomorrow);
    return this.getOperatingHours(local, config.operatingHours);
  }

  private isOpenTime(date: Date, operatingHours: ShopWorkHoursType) {
    const day = date.getDay() as Constant.DayIndexType;
    const now = this._date.transform.formatLocalDateTime(date);
    let start: string;
    let end: string;

    switch (day) {
      case Constant.Date.DayIndex.Sun:
        start = this._date.transform.formatByTimeItem(now, operatingHours.sun.operatingHours.openTime);
        end = this._date.transform.formatByTimeItem(now, operatingHours.sun.operatingHours.closeTime);
        break;
      case Constant.Date.DayIndex.Mon:
        start = this._date.transform.formatByTimeItem(now, operatingHours.mon.operatingHours.openTime);
        end = this._date.transform.formatByTimeItem(now, operatingHours.mon.operatingHours.closeTime);
        break;
      case Constant.Date.DayIndex.Tue:
        start = this._date.transform.formatByTimeItem(now, operatingHours.tue.operatingHours.openTime);
        end = this._date.transform.formatByTimeItem(now, operatingHours.tue.operatingHours.closeTime);
        break;
      case Constant.Date.DayIndex.Wed:
        start = this._date.transform.formatByTimeItem(now, operatingHours.wed.operatingHours.openTime);
        end = this._date.transform.formatByTimeItem(now, operatingHours.wed.operatingHours.closeTime);
        break;
      case Constant.Date.DayIndex.Thu:
        start = this._date.transform.formatByTimeItem(now, operatingHours.thu.operatingHours.openTime);
        end = this._date.transform.formatByTimeItem(now, operatingHours.thu.operatingHours.closeTime);
        break;
      case Constant.Date.DayIndex.Fri:
        start = this._date.transform.formatByTimeItem(now, operatingHours.fri.operatingHours.openTime);
        end = this._date.transform.formatByTimeItem(now, operatingHours.fri.operatingHours.closeTime);
        break;
      case Constant.Date.DayIndex.Sat:
        start = this._date.transform.formatByTimeItem(now, operatingHours.sat.operatingHours.openTime);
        end = this._date.transform.formatByTimeItem(now, operatingHours.sat.operatingHours.closeTime);
        break;
      default:
        return true;
    }
    return (
      (start <= now && now < end) ||
      (start.includes('00:00:00') && end.includes('00:00:00') && !operatingHours.closeDay.includes(day))
    );
  }

  private getOperatingHours(date: Date, operatingHours: ShopWorkHoursType) {
    const day = date.getDay() as Constant.DayIndexType;
    switch (day) {
      case Constant.Date.DayIndex.Sun:
        return operatingHours.sun.operatingHours;
      case Constant.Date.DayIndex.Mon:
        return operatingHours.mon.operatingHours;
      case Constant.Date.DayIndex.Tue:
        return operatingHours.mon.operatingHours;
      case Constant.Date.DayIndex.Wed:
        return operatingHours.mon.operatingHours;
      case Constant.Date.DayIndex.Thu:
        return operatingHours.mon.operatingHours;
      case Constant.Date.DayIndex.Fri:
        return operatingHours.mon.operatingHours;
      case Constant.Date.DayIndex.Sat:
        return operatingHours.mon.operatingHours;
    }
  }
}
