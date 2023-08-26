import { Injectable } from '@angular/core';
import { IDatePeriod, IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import {
  IShopCategory,
  IShopConfiguration,
  IShopCountry,
  IShopPlan,
  IShopWorkHours,
} from 'src/app/interface/shop/shop.interface';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Constant from 'src/app/constant/constant';
import { SystemShopService } from '../system-shop.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { ShopSettingService } from '../shop-setting/shop-setting.service';
import { SystemShopWorkHoursService } from '../system-shop-work-hours/system-shop-work-hours.service';
import { ModalController } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
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
  workHours: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ShopConfigurationService {
  constructor(
    public global: GlobalService,
    private systemShop: SystemShopService,
    private modalCtrl: ModalController,
    private systemShopConfigRepo: SystemShopConfigurationRepositoryService,
    private systemShopSetting: ShopSettingService,
    private systemWorkHoursService: SystemShopWorkHoursService
  ) {}

  public async handleCreate(config: IShopConfiguration, form: IFormHeaderModalProp) {
    let loadingMsg: string = await this.global.language.transform('loading.name.saving');
    let isExistingBusinessName: boolean = await this.isExistingBusinessName(config);
    await this.global.loading.show(loadingMsg);
    let saved = !isExistingBusinessName
      ? await this.systemShopConfigRepo.createNewShopConfiguration(config)
      : false;

    if (saved) {
      let successfulMsg: string = await this.global.language.transform('message.success.save');
      await this.global.loading.dismiss();
      await this.global.toast.present(successfulMsg);
      await this.modalCtrl.dismiss(config, form.action);
    } else {
      let msg: string = this.handleErrorMessage(isExistingBusinessName);
      let errorMsg: string = await this.global.language.transform(msg);
      await this.global.loading.dismiss();
      await this.global.toast.presentError(errorMsg);
    }
  }

  private async isExistingBusinessName(config: IShopConfiguration): Promise<boolean> {
    let existingConfig: IShopConfiguration[] = await this.getAllSystemShopConfiguration();
    let existingBusinessName: string[] = existingConfig
      .filter(c => c.id !== config.id)
      .map(c => c.name);

    return existingBusinessName.includes(config.name);
  }

  private async getAllSystemShopConfiguration(): Promise<IShopConfiguration[]> {
    return await lastValueFrom(this.systemShopConfigRepo.getAllShopConfigurations());
  }

  private handleErrorMessage(isExistingBusinessName: boolean): string {
    return isExistingBusinessName ? 'message.error.existedbusinessname' : 'message.error.unsaved';
  }

  public async handleSave(config: IShopConfiguration, form: IFormHeaderModalProp) {
    let loadingMsg: string = await this.global.language.transform('loading.name.saving');
    let isExistingBusinessName: boolean = await this.isExistingBusinessName(config);
    await this.global.loading.show(loadingMsg);
    let saved = !isExistingBusinessName
      ? await this.systemShopConfigRepo.editExistingShopConfiguration(config)
      : false;

    if (saved) {
      let successfulMsg: string = await this.global.language.transform('message.success.save');
      await this.global.loading.dismiss();
      await this.global.toast.present(successfulMsg);
      await this.modalCtrl.dismiss(config, form.action);
    } else {
      let msg: string = this.handleErrorMessage(isExistingBusinessName);
      let errorMsg: string = await this.global.language.transform(msg);
      await this.global.loading.dismiss();
      await this.global.toast.presentError(errorMsg);
    }
  }

  public async handleDelete(config: IShopConfiguration, form: IFormHeaderModalProp) {
    let loadingMsg: string = await this.global.language.transform('loading.name.deleting');
    await this.global.loading.show(loadingMsg);
    let deleted = await this.systemShopConfigRepo.deleteShopConfiguration(config.id);

    if (deleted) {
      let successfulMsg: string = await this.global.language.transform('message.success.delete');
      await this.global.loading.dismiss();
      await this.global.toast.present(successfulMsg);
      await this.modalCtrl.dismiss(config, form.action);
    } else {
      let errorMsg: string = await this.global.language.transform('message.error.delete');
      await this.global.loading.dismiss();
      await this.global.toast.presentError(errorMsg);
    }
  }

  public setDefaultConfig(): IShopConfiguration {
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
      operatingHours: this.setWorkHours(),
      category: this.getDefaultCategory(),
      country: this.getDefaultCountry(),
      plan: this.getDefaultPlan(),
      setting: this.systemShopSetting.getDefaultShopSetting(),
      activeFrom: new Date(),
      activeTo: null,
      associatedUser: [],
    };
  }

  public setWorkHours(): IShopWorkHours {
    return this.systemWorkHoursService.setDefaultWorkHours();
  }

  private getDefaultCategory(): IShopCategory {
    return {
      id: '',
      isHairSalon: false,
      isMassageTheraphy: false,
      isPersonalTrainning: false,
      isSkinCare: false,
      isMobileShop: false,
      name: '',
    };
  }

  private getDefaultCountry(): IShopCountry {
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

  private getDefaultPlan(): IShopPlan {
    return {
      configurationId: '',
      isOverDue: false,
      lastPaymentDate: new Date(),
      paymentDate: new Date(),
      period: {
        name: 'date.period.weekly',
        type: 'Weekly',
        week: 1,
        day: 7,
      },
    };
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
      workHours: false,
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
      workHours: false,
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
      workHours: true,
    };
  }

  public displayInfo(): IShopConfigurationDisplayOption {
    return {
      info: true,
      address: false,
      subscription: false,
      workHours: false,
    };
  }

  public displayAddress(): IShopConfigurationDisplayOption {
    return {
      info: false,
      address: true,
      subscription: false,
      workHours: false,
    };
  }

  public displaySubscription(): IShopConfigurationDisplayOption {
    return {
      info: false,
      address: false,
      subscription: true,
      workHours: false,
    };
  }

  public displayWorkHours(): IShopConfigurationDisplayOption {
    return {
      info: false,
      address: false,
      subscription: false,
      workHours: true,
    };
  }

  public async getSelectedTotalPrice(selectedId: string, period: IDatePeriod) {
    let selectedPlan = (await this.systemShop.getSystemShopPlanConfigList()).find(
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
}
