import { Injectable } from '@angular/core';
import { IShopSetting } from 'src/app/interface/shop/shop-setting.interface';
import { ShopSettingGeneral } from './shop-setting-general/shop-setting-general.service';
import { ShopSettingValiationResultType } from 'src/app/interface/shop/shop-setting.interface';
import { ShopSettingTimePicker } from './shop-setting-time-picker/shop-setting-time-picker.service';

@Injectable({
  providedIn: 'root',
})
export class ShopSettingValidatorService {
  private general: ShopSettingGeneral;
  private timePicker: ShopSettingTimePicker;
  constructor() {
    this.general = new ShopSettingGeneral();
    this.timePicker = new ShopSettingTimePicker();
  }

  public getValidatedResult(
    setting: IShopSetting,
    defaultSetting: IShopSetting
  ): ShopSettingValiationResultType {
    let hasMissingValue: boolean = this.hasMissingValue(setting);
    setting.general = this.general.getEffectiveGeneral(setting, defaultSetting.general);
    setting.timePicker = this.timePicker.getEffectiveTimePicker(setting, defaultSetting.timePicker);

    return { setting: setting, isModified: hasMissingValue };
  }

  private hasMissingValue(s: IShopSetting) {
    return this.general.hasMissingValue(s) || this.timePicker.hasMissingValue(s);
  }
}
