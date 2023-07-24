import { Injectable } from '@angular/core';
import { IDatePeriod, IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import { IShopConfiguration } from 'src/app/interface/system/shop/shop.interface';
import { GlobalService } from 'src/app/shared/services/global/global.service';
import * as Constant from './../../../../shared/services/global/global-constant';
import { SystemShopService } from '../system-shop.service';
export interface IShopConfigurationValidator {
  name: boolean;
  email: boolean;
  phonNumber: boolean;
  taxNumber: boolean;
  address: boolean;
  category: boolean;
  country: boolean;
  plan: boolean;
  timeZone: boolean;
}
export interface IShopConfigurationDisplayOption {
  info: boolean;
  address: boolean;
  subscription: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ShopConfigurationService {
  constructor(public global: GlobalService, private systemShop: SystemShopService) {}

  public formInputValidator(validator: IShopConfigurationValidator) {
    return (
      validator.name &&
      validator.email &&
      validator.phonNumber &&
      validator.taxNumber &&
      validator.address &&
      validator.category &&
      validator.country &&
      validator.plan &&
      validator.timeZone
    );
  }

  public defaultShopDisplayOption(): IShopConfigurationDisplayOption {
    return {
      info: true,
      address: false,
      subscription: false,
    };
  }

  public defaultValidator(): IShopConfigurationValidator {
    return {
      name: false,
      email: false,
      phonNumber: false,
      taxNumber: false,
      address: false,
      category: false,
      country: false,
      plan: false,
      timeZone: false
    };
  }

  public displayInfo(): IShopConfigurationDisplayOption {
    return {
      info: true,
      address: false,
      subscription: false,
    };
  }

  public displayAddress(): IShopConfigurationDisplayOption {
    return {
      info: false,
      address: true,
      subscription: false,
    };
  }

  public displaySubscription(): IShopConfigurationDisplayOption{
    return {
      info: false,
      address: false,
      subscription: false,
    };
  }
  public async getSelectedTotalPrice(selectedId: string, period: IDatePeriod){
    let selectedPlan = (await this.systemShop.getSystemShopPlanConfigList()).find(p => p.id === selectedId);
    let price: number = 0;
    if(selectedPlan !== undefined){
      price = period.type === Constant.Date.Period.Weekly ? selectedPlan.weeklyPrice.total
           : period.type === Constant.Date.Period.Monthly ? selectedPlan.monthlyPrice.total
           : period.type === Constant.Date.Period.Annually ? selectedPlan.annuallyPrice.total
           : 0
    }
    
    return price;
  }
}
