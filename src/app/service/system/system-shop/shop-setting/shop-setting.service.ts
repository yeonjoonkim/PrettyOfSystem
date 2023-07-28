import { Injectable } from '@angular/core';
import { IShopGeneralSetting, IShopSetting, IShopTimePicker } from 'src/app/interface/system/shop/shop-setting.interface';
import * as Constant from '../../../../shared/services/global/global-constant';
import { ShopSettingValidatorService } from './shop-setting-validator/shop-setting-validator.service';
import { IShopSettingValiationResult } from 'src/app/interface/system/system.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopSettingService {
  private timePicker: IShopTimePicker = {intervalMin: Constant.ShopSetting.TimePicker.IntervalMin};
  private general: IShopGeneralSetting = {taxRate: Constant.ShopSetting.General.TaxRate};

  constructor(private validator: ShopSettingValidatorService) { }

  public getDefaultShopSetting(): IShopSetting{
    return {
        timePicker: this.timePicker,
        general: this.general
      }
  }

  public getValidatedResult(setting: IShopSetting): IShopSettingValiationResult{
    let defaultSetting = this.getDefaultShopSetting();
    return this.validator.getValidatedResult(setting, defaultSetting);
  }
}
