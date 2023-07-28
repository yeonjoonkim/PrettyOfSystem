import { Injectable } from '@angular/core';
import { IShopGeneralSetting, IShopSetting, IShopTimePicker } from 'src/app/interface/system/shop/shop-setting.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopSettingTimePicker {

  constructor() { }

  public getEffectiveTimePicker(setting: IShopSetting, timePicker: IShopTimePicker): IShopTimePicker{
    setting.timePicker = this.isUndefined(setting) ? timePicker : setting.timePicker;
    setting.timePicker.intervalMin = this.hasIntervalMin(setting) ? timePicker.intervalMin : timePicker.intervalMin;

    return setting.timePicker;
  }

  private isUndefined(setting: IShopSetting){
    return setting.timePicker === undefined;
  }
  private hasIntervalMin(setting: IShopSetting){
    return typeof setting.timePicker.intervalMin === 'number';
  }
  public hasMissingValue(setting: IShopSetting){
    return this.isUndefined(setting) || !this.hasIntervalMin(setting);
  }
}
