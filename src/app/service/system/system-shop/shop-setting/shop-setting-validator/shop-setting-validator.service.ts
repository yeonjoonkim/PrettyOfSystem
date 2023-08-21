import { Injectable } from '@angular/core';
import { IShopGeneralSetting, IShopSetting } from 'src/app/interface/system/shop/shop-setting.interface';
import { ShopSettingGeneral } from './shop-setting-general/shop-setting-general.service';
import { IShopSettingValiationResult } from 'src/app/interface/system/system.interface';
import { ShopSettingTimePicker } from './shop-setting-time-picker/shop-setting-time-picker.service';

@Injectable({
  providedIn: 'root'
})
export class ShopSettingValidatorService {
  constructor(private general: ShopSettingGeneral, private timePicker: ShopSettingTimePicker) { }

  public getValidatedResult(setting: IShopSetting, defaultSetting: IShopSetting): IShopSettingValiationResult{
    let hasMissingValue: boolean = this.hasMissingValue(setting);
    setting.general = this.general.getEffectiveGeneral(setting, defaultSetting.general);
    setting.timePicker = this.timePicker.getEffectiveTimePicker(setting, defaultSetting.timePicker);

    return {setting: setting, isModified: hasMissingValue};
  }


  private hasMissingValue(s: IShopSetting){
    return this.general.hasMissingValue(s) || this.timePicker.hasMissingValue(s);
  }






}