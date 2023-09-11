import { Injectable } from '@angular/core';
import {
  ShopGeneralSettingType,
  IShopSetting,
  ShopTimePickerType,
} from 'src/app/interface/shop/shop-setting.interface';
import * as Constant from 'src/app/constant/constant';
import { ShopSettingValidatorService } from './shop-setting-validator/shop-setting-validator.service';
import { ShopSettingValiationResultType } from 'src/app/interface/shop/shop-setting.interface';

@Injectable({
  providedIn: 'root',
})
export class ShopSettingService {
  private timePicker: ShopTimePickerType = {
    intervalMin: Constant.ShopSetting.TimePicker.IntervalMin,
  };
  private general: ShopGeneralSettingType = { taxRate: Constant.ShopSetting.General.TaxRate };
  private validator: ShopSettingValidatorService;
  constructor() {
    this.validator = new ShopSettingValidatorService();
  }

  public getDefaultShopSetting(): IShopSetting {
    return {
      timePicker: this.timePicker,
      general: this.general,
    };
  }

  public getValidatedResult(setting: IShopSetting): ShopSettingValiationResultType {
    let defaultSetting = this.getDefaultShopSetting();
    return this.validator.getValidatedResult(setting, defaultSetting);
  }
}
