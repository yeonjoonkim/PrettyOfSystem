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
  private _timePicker: ShopTimePickerType = {
    intervalMin: Constant.ShopSetting.TimePicker.IntervalMin,
  };
  private _general: ShopGeneralSettingType = { taxRate: Constant.ShopSetting.General.TaxRate };
  private _validator: ShopSettingValidatorService;
  constructor() {
    this._validator = new ShopSettingValidatorService();
  }

  public getDefaultShopSetting(): IShopSetting {
    return {
      timePicker: this._timePicker,
      general: this._general,
    };
  }

  public getValidatedResult(setting: IShopSetting): ShopSettingValiationResultType {
    let defaultSetting = this.getDefaultShopSetting();
    return this._validator.getValidatedResult(setting, defaultSetting);
  }
}
