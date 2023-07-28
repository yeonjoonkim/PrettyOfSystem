import { Injectable } from '@angular/core';
import { IDatePeriod } from 'src/app/interface/global/global.interface';
import { IShopCategory, IShopConfiguration, IShopCountry, IShopOperatingHours, IShopPlan } from 'src/app/interface/system/shop/shop.interface';
import { GlobalService } from 'src/app/shared/services/global/global.service';
import * as Constant from './../../../../shared/services/global/global-constant';
import { SystemShopService } from '../system-shop.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { ShopSettingService } from '../shop-setting/shop-setting.service';
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
  workHours: boolean;
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
  constructor(public global: GlobalService, private systemShop: SystemShopService, private systemShopConfigRepo: SystemShopConfigurationRepositoryService, private systemShopSetting: ShopSettingService) {}

  public async handleCreate(config: IShopConfiguration){
    let loadingMsg: string = await this.global.language.transform('loading.name.saving');
    await this.global.loading.show(loadingMsg);
    let saved = await this.systemShopConfigRepo.createNewShopConfiguration(config);

    if(saved){
      let successfulMsg: string = await this.global.language.transform('message.success.save');
      await this.global.loading.dismiss();
      await this.global.toast.present(successfulMsg);
      await this.global.modal.dismiss();
    }else{
      let errorMsg: string = await this.global.language.transform('message.error.unsaved');
      await this.global.loading.dismiss();
      await this.global.toast.presentError(errorMsg);
    }
  }

  public async handleSave(config: IShopConfiguration){
    let loadingMsg: string = await this.global.language.transform('loading.name.saving');
    await this.global.loading.show(loadingMsg);
    let saved = await this.systemShopConfigRepo.editExistingShopConfiguration(config);

    if(saved){
      let successfulMsg: string = await this.global.language.transform('message.success.save');
      await this.global.loading.dismiss();
      await this.global.toast.present(successfulMsg);
      await this.global.modal.dismiss();
    }else{
      let errorMsg: string = await this.global.language.transform('message.error.unsaved');
      await this.global.loading.dismiss();
      await this.global.toast.presentError(errorMsg);
    }
  }

  public async handleDelete(config: IShopConfiguration){
    let loadingMsg: string = await this.global.language.transform('loading.name.deleting');
    await this.global.loading.show(loadingMsg);
    let deleted = await this.systemShopConfigRepo.deleteShopConfiguration(config.id);

    if(deleted){
      let successfulMsg: string = await this.global.language.transform('message.success.delete');
      await this.global.loading.dismiss();
      await this.global.toast.present(successfulMsg);
      await this.global.modal.dismiss();
    }else{
      let errorMsg: string = await this.global.language.transform('message.error.delete');
      await this.global.loading.dismiss();
      await this.global.toast.presentError(errorMsg);
    }
  }

  public setDefaultConfig(): IShopConfiguration{
    return {
      id: '',
      name: '',
      phoneNumber: '',
      email: '',
      taxNumber: '',
      active: true,
      timezone: Constant.TimeZone.AustraliaBrisbane,
      address: {
        street: '',
        suburb: 'SUNNYBANK',
        state: 'QLD',
        postCode: '',
      },
      operatingHours: {
        closeDay: [],
        mon: {
          isOpen: true,
          operatingHours: this.getDefaultOperatingHours(),
          index: Constant.Date.DayIndex.Mon,
          day: Constant.Date.Day.Mon,
          workHours: 24
        },
        tue: {
          isOpen: true,
          operatingHours: this.getDefaultOperatingHours(),
          index: Constant.Date.DayIndex.Tue,
          day: Constant.Date.Day.Tue,
          workHours: 24
        },
        wed: {
          isOpen: true,
          operatingHours: this.getDefaultOperatingHours(),
          index: Constant.Date.DayIndex.Wed,
          day: Constant.Date.Day.Wed,
          workHours: 24
        },
        thu: {
          isOpen: true,
          operatingHours: this.getDefaultOperatingHours(),
          index: Constant.Date.DayIndex.Thu,
          day: Constant.Date.Day.Thu,
          workHours: 24
        },
        fri: {
          isOpen: true,
          operatingHours: this.getDefaultOperatingHours(),
          index: Constant.Date.DayIndex.Fri,
          day: Constant.Date.Day.Fri,
          workHours: 24
        },
        sat: {
          isOpen: true,
          operatingHours: this.getDefaultOperatingHours(),
          index: Constant.Date.DayIndex.Sat,
          day: Constant.Date.Day.Sat,
          workHours: 24
        },
        sun: {
          isOpen: true,
          operatingHours: this.getDefaultOperatingHours(),
          index: Constant.Date.DayIndex.Sun,
          day: Constant.Date.Day.Sun,
          workHours: 24
        }
      },
      category: this.getDefaultCategory(),
      country: this.getDefaultCountry(),
      plan: this.getDefaultPlan(),
      setting: this.systemShopSetting.getDefaultShopSetting(),
      activeFrom: new Date(),
      activeTo: null
    };
  }

  private getDefaultOperatingHours(): IShopOperatingHours{
    return {
      openTime: {
        hr: 0,
        min: 0,
        dayNightType: 'AM',
        strValue: '00:00:00',
      },
      closeTime: {
        hr: 0,
        min: 0,
        dayNightType: 'AM',
        strValue: '00:00:00',
      },
    }
  }

  private getDefaultCategory(): IShopCategory{
    return {
      id: '',
      isHairSalon: false,
      isMassageTheraphy: false,
      isPersonalTrainning: false,
      isSkinCare: false,
      name: '',
    }
  }

  private getDefaultCountry(): IShopCountry{
    return {
      id: '',
      currency: Constant.Default.CurrencyType.AUD,
      length: '',
      name: '',
      prefixedPhoneCode: Constant.Default.PhoneCode.AU,
      dateFormat: Constant.Date.Format.Australia,
      code: Constant.Default.CountryCodeType.Australia
    }
  }

  private getDefaultPlan(): IShopPlan{
    return {
      configurationId: '',
      isOverDue: false,
      lastPaymentDate: new Date(),
      paymentDate: new Date(),
      period: {
        name: 'date.period.weekly',
        type: 'Weekly',
        week: 1,
        day: 7
      }
    }
  }


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
      validator.timeZone &&
      validator.workHours
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
      timeZone: false,
      workHours: false
    };
  }

  public editValidator(): IShopConfigurationValidator {
    return {
      name: true,
      email: true,
      phonNumber: true,
      taxNumber: true,
      address: true,
      category: true,
      country: true,
      plan: true,
      timeZone: true,
      workHours: true
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
