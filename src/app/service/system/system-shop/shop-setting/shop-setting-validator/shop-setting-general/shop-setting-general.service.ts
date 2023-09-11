import { Injectable } from '@angular/core';
import {
  ShopGeneralSettingType,
  IShopSetting,
} from 'src/app/interface/shop/shop-setting.interface';

@Injectable({
  providedIn: 'root',
})
export class ShopSettingGeneral {
  constructor() {}

  public getEffectiveGeneral(
    setting: IShopSetting,
    general: ShopGeneralSettingType
  ): ShopGeneralSettingType {
    setting.general = this.isUndefined(setting) ? general : setting.general;
    setting.general.taxRate = this.hasTaxRate(setting) ? setting.general.taxRate : general.taxRate;

    return setting.general;
  }

  private isUndefined(setting: IShopSetting) {
    return setting.general === undefined;
  }
  private hasTaxRate(setting: IShopSetting) {
    return typeof setting.general.taxRate === 'number';
  }
  public hasMissingValue(setting: IShopSetting) {
    return this.isUndefined(setting) || !this.hasTaxRate(setting);
  }
}
