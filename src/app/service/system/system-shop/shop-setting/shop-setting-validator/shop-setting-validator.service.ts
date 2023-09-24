import { Injectable } from '@angular/core';
import { IShopSetting } from 'src/app/interface/shop/shop-setting.interface';
import { ShopSettingGeneral } from './shop-setting-general/shop-setting-general.service';
import { ShopSettingValiationResultType } from 'src/app/interface/shop/shop-setting.interface';
import { ShopSettingTimePicker } from './shop-setting-time-picker/shop-setting-time-picker.service';

@Injectable({
  providedIn: 'root',
})
export class ShopSettingValidatorService {
  private _general: ShopSettingGeneral;
  private _timePicker: ShopSettingTimePicker;
  constructor() {
    this._general = new ShopSettingGeneral();
    this._timePicker = new ShopSettingTimePicker();
  }

  public getValidatedResult(
    setting: IShopSetting,
    defaultSetting: IShopSetting
  ): ShopSettingValiationResultType {
    let hasMissingValue: boolean = this.hasMissingValue(setting);
    setting.general = this._general.getEffectiveGeneral(setting, defaultSetting.general);
    setting.timePicker = this._timePicker.getEffectiveTimePicker(
      setting,
      defaultSetting.timePicker
    );

    return { setting: setting, isModified: hasMissingValue };
  }

  private hasMissingValue(s: IShopSetting) {
    return this._general.hasMissingValue(s) || this._timePicker.hasMissingValue(s);
  }
}
