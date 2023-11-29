import { Injectable } from '@angular/core';
import { IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import {
  ShopCategoryType,
  ShopConfigurationType,
  ShopCountryType,
  ShopWorkHoursType,
} from 'src/app/interface/shop/shop.interface';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Constant from 'src/app/constant/constant';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { SystemShopWorkHoursService } from '../system-shop-work-hours/system-shop-work-hours.service';
import { ModalController } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { IShopSetting } from 'src/app/interface';
import { SystemShopCapacityRepositoryService } from 'src/app/firebase/system-repository/system-shop-capacity/system-shop-capacity-repository.service';
export interface ShopConfigurationTypeValidator {
  name: boolean;
  email: boolean;
  phonNumber: boolean;
  taxNumber: boolean;
  address: boolean;
  category: boolean;
  country: boolean;
  timeZone: boolean;
  workHours: boolean;
  capacity: boolean;
}
export interface ShopConfigurationTypeDisplayOption {
  info: boolean;
  address: boolean;
  capacity: boolean;
  workHours: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ShopConfigurationService {
  constructor(
    public global: GlobalService,
    public capcacityReo: SystemShopCapacityRepositoryService,
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
    let existingBusinessName: string[] = existingConfig.filter(c => c.id !== config.id).map(c => c.name);

    return existingBusinessName.includes(config.name);
  }

  private async getAllSystemShopConfiguration(): Promise<ShopConfigurationType[]> {
    return await lastValueFrom(this._systemShopConfigRepo.allShopConfigurationGetListener());
  }

  public async handleSave(config: ShopConfigurationType, form: IFormHeaderModalProp) {
    let isExistingBusinessName: boolean = await this.isExistingBusinessName(config);
    await this.global.loading.show();
    let saved = !isExistingBusinessName ? await this._systemShopConfigRepo.updateShopConfiguration(config) : false;

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
      setting: this.defaultShopSetting(),
      activeFrom: this.global.date.shopTimeStamp(null),
      activeTo: null,
      translatedRequestIds: [],
      capacityId: '',
      waitingListSessionId: this.global.newId(),
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

  public formInputValidator(validator: ShopConfigurationTypeValidator) {
    return (
      validator.name &&
      validator.email &&
      validator.phonNumber &&
      validator.taxNumber &&
      validator.address &&
      validator.category &&
      validator.country &&
      validator.timeZone &&
      validator.workHours &&
      validator.capacity
    );
  }

  public defaultShopDisplayOption(): ShopConfigurationTypeDisplayOption {
    return {
      info: true,
      address: false,
      capacity: false,
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
      timeZone: false,
      workHours: false,
      capacity: false,
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
      timeZone: true,
      workHours: true,
      capacity: true,
    };
  }

  public displayInfo(): ShopConfigurationTypeDisplayOption {
    return {
      info: true,
      address: false,
      capacity: false,
      workHours: false,
    };
  }

  public displayAddress(): ShopConfigurationTypeDisplayOption {
    return {
      info: false,
      address: true,
      capacity: false,
      workHours: false,
    };
  }

  public displayCapacity(): ShopConfigurationTypeDisplayOption {
    return {
      info: false,
      address: false,
      capacity: true,
      workHours: false,
    };
  }

  public displayWorkHours(): ShopConfigurationTypeDisplayOption {
    return {
      info: false,
      address: false,
      capacity: false,
      workHours: true,
    };
  }

  private defaultShopSetting() {
    const result: IShopSetting = {
      calendar: {
        intervalMin: Constant.ShopSetting.Calender.IntervalMin,
        nextAvailableBookingMin: Constant.ShopSetting.Calender.NextAvailableBookingMin,
        maximumAvailableFutureBookingDays: Constant.ShopSetting.Calender.MaximumAvailableFutureBookingDays,
      },
      financial: {
        taxRate: Constant.ShopSetting.Financial.TaxRate,
        cardSurchargeRate: Constant.ShopSetting.Financial.CardSurchargeRate,
        cashDiscountRate: Constant.ShopSetting.Financial.CashDiscountRate,
        openingBalance: Constant.ShopSetting.Financial.OpeningBalance,
        openingHour: Constant.ShopSetting.Financial.OpeningHour,
        closingHour: Constant.ShopSetting.Financial.ClosingHour,
      },
      picture: {
        logo: Constant.ShopSetting.Picture.Placeholder,
        shopImage1: Constant.ShopSetting.Picture.Placeholder,
        shopImage2: Constant.ShopSetting.Picture.Placeholder,
        shopImage3: Constant.ShopSetting.Picture.Placeholder,
      },
      qrCode: {
        waitingListSessionExiryMin: Constant.ShopSetting.QRCode.WaitingListSessionExiryMin,
      },
    };
    return result;
  }
}
