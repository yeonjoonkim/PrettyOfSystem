import { Injectable } from '@angular/core';
import { DatePeriodType, IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import {
  ShopCategoryType,
  ShopConfigurationType,
  ShopCountryType,
  ShopPlanType,
  ShopWorkHoursType,
} from 'src/app/interface/shop/shop.interface';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Constant from 'src/app/constant/constant';
import { SystemShopService } from '../system-shop.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { SystemShopWorkHoursService } from '../system-shop-work-hours/system-shop-work-hours.service';
import { ModalController } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { IShopSetting } from 'src/app/interface';
export interface ShopConfigurationTypeValidator {
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
  planPeriod: boolean;
}
export interface ShopConfigurationTypeDisplayOption {
  info: boolean;
  address: boolean;
  subscription: boolean;
  workHours: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ShopConfigurationService {
  constructor(
    public global: GlobalService,
    private _systemShop: SystemShopService,
    private _modalCtrl: ModalController,
    private _systemShopConfigRepo: SystemShopConfigurationRepositoryService,
    private _systemWorkHoursService: SystemShopWorkHoursService
  ) {}

  public async handleCreate(config: ShopConfigurationType, form: IFormHeaderModalProp) {
    let isExistingBusinessName: boolean = await this.isExistingBusinessName(config);
    await this.global.loading.show();
    let saved = !isExistingBusinessName
      ? await this._systemShopConfigRepo.createNewShopConfiguration(config)
      : false;

    if (saved) {
      await this.global.loading.dismiss();
      await this._modalCtrl.dismiss(config, form.action);
    } else {
      await this.global.loading.dismiss();
    }
  }

  private async isExistingBusinessName(config: ShopConfigurationType): Promise<boolean> {
    let existingConfig: ShopConfigurationType[] = await this.getAllSystemShopConfiguration();
    let existingBusinessName: string[] = existingConfig
      .filter(c => c.id !== config.id)
      .map(c => c.name);

    return existingBusinessName.includes(config.name);
  }

  private async getAllSystemShopConfiguration(): Promise<ShopConfigurationType[]> {
    return await lastValueFrom(this._systemShopConfigRepo.allShopConfigurationGetListener());
  }

  public async handleSave(config: ShopConfigurationType, form: IFormHeaderModalProp) {
    let isExistingBusinessName: boolean = await this.isExistingBusinessName(config);
    await this.global.loading.show();
    let saved = !isExistingBusinessName
      ? await this._systemShopConfigRepo.updateShopConfiguration(config)
      : false;

    if (saved) {
      await this.global.loading.dismiss();
      await this._modalCtrl.dismiss(config, form.action);
    } else {
      await this.global.loading.dismiss();
    }
  }

  public async handleDelete(config: ShopConfigurationType, form: IFormHeaderModalProp) {
    await this.global.loading.show();
    let deleted = await this._systemShopConfigRepo.deleteShopConfiguration(config.id);

    if (deleted) {
      await this.global.loading.dismiss();
      await this._modalCtrl.dismiss(config, form.action);
    } else {
      await this.global.loading.dismiss();
    }
  }

  public setDefaultConfig(): ShopConfigurationType {
    return {
      id: this.global.newId(),
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
      package: {},
      operatingHours: this.setWorkHours(),
      category: this.getDefaultCategory(),
      country: this.getDefaultCountry(),
      plan: this.getDefaultPlan(),
      setting: this.defaultShopSetting(),
      activeFrom: new Date(),
      activeTo: null,
      translatedRequestIds: [],
    };
  }

  public setWorkHours(): ShopWorkHoursType {
    return this._systemWorkHoursService.setDefaultWorkHours();
  }

  private getDefaultCategory(): ShopCategoryType {
    return {
      id: '',
      isHairSalon: false,
      isMassageTheraphy: false,
      isPersonalTrainning: false,
      isSkinCare: false,
      isMobileShop: false,
      isNailArt: false,
      name: '',
    };
  }

  private getDefaultCountry(): ShopCountryType {
    return {
      id: '',
      currency: Constant.Default.CurrencyType.AUD,
      length: '',
      name: '',
      prefixedPhoneCode: Constant.Default.PhoneCode.AU,
      dateFormat: Constant.Date.Format.Australia,
      code: Constant.Default.CountryCodeType.Australia,
    };
  }

  private getDefaultPlan(): ShopPlanType {
    return {
      configurationId: '',
      isOverDue: false,
      lastPaymentDate: new Date(),
      paymentDate: new Date(),
      period: {
        name: 'date.title.weekly',
        type: 'Weekly',
        week: 1,
        day: 7,
      },
    };
  }

  public formInputValidator(validator: ShopConfigurationTypeValidator) {
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
      validator.workHours &&
      validator.planPeriod
    );
  }

  public defaultShopDisplayOption(): ShopConfigurationTypeDisplayOption {
    return {
      info: true,
      address: false,
      subscription: false,
      workHours: false,
    };
  }

  public defaultValidator(): ShopConfigurationTypeValidator {
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
      workHours: false,
      planPeriod: false,
    };
  }

  public editValidator(): ShopConfigurationTypeValidator {
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
      workHours: true,
      planPeriod: true,
    };
  }

  public displayInfo(): ShopConfigurationTypeDisplayOption {
    return {
      info: true,
      address: false,
      subscription: false,
      workHours: false,
    };
  }

  public displayAddress(): ShopConfigurationTypeDisplayOption {
    return {
      info: false,
      address: true,
      subscription: false,
      workHours: false,
    };
  }

  public displaySubscription(): ShopConfigurationTypeDisplayOption {
    return {
      info: false,
      address: false,
      subscription: true,
      workHours: false,
    };
  }

  public displayWorkHours(): ShopConfigurationTypeDisplayOption {
    return {
      info: false,
      address: false,
      subscription: false,
      workHours: true,
    };
  }

  public async getSelectedTotalPrice(selectedId: string, period: DatePeriodType) {
    let selectedPlan = (await this._systemShop.getSystemShopPlanConfigList()).find(
      p => p.id === selectedId
    );
    let price: number = 0;
    if (selectedPlan !== undefined) {
      price =
        period.type === Constant.Date.Period.Weekly
          ? selectedPlan.weeklyPrice.total
          : period.type === Constant.Date.Period.Monthly
          ? selectedPlan.monthlyPrice.total
          : period.type === Constant.Date.Period.Annually
          ? selectedPlan.annuallyPrice.total
          : 0;
    }

    return price;
  }

  private defaultShopSetting() {
    const result: IShopSetting = {
      timePicker: {
        intervalMin: Constant.ShopSetting.TimePicker.IntervalMin,
      },
      general: {
        taxRate: Constant.ShopSetting.General.TaxRate,
        surchargeRate: Constant.ShopSetting.General.SurchargeRate,
      },
    };
    return result;
  }
}
