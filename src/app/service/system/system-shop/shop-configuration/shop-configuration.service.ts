import { Injectable } from '@angular/core';
import { IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import { IShopConfiguration } from 'src/app/interface/system/shop/shop.interface';
import { GlobalService } from 'src/app/shared/services/global/global.service';
import * as Constant from './../../../../shared/services/global/global-constant';

export interface IShopConfigurationValidator {
  name: boolean;
  email: boolean;
  phonNumber: boolean;
  taxNumber: boolean;
  address: boolean;
  category: boolean;
  country: boolean;
  plan: boolean;
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
  constructor(public global: GlobalService) {}

  public formInputValidator(validator: IShopConfigurationValidator) {
    return (
      validator.name &&
      validator.email &&
      validator.phonNumber &&
      validator.taxNumber &&
      validator.address &&
      validator.category &&
      validator.country &&
      validator.plan
    );
  }

  public defaultShopConfig(): IShopConfiguration {
    return {
      id: '',
      name: '',
      phoneNumber: '',
      email: '',
      taxNumber: '',
      logoImg: undefined,
      active: true,
      timezone: Constant.TimeZone.AustraliaBrisbane,
      address: {
        street: '',
        suburb: 'SUNNYBANK',
        state: 'QLD',
        postCode: '',
      },
      operatingHours: {
        mon: {
          isOpen: false,
          operatingHours: {
            openTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
            closeTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
          },
          index: Constant.Date.DayIndex.Mon
        },
        tue: {
          isOpen: false,
          operatingHours: {
            openTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
            closeTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
          },
          index: Constant.Date.DayIndex.Tue
        },
        wed: {
          isOpen: false,
          operatingHours: {
            openTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
            closeTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
          },
          index: Constant.Date.DayIndex.Wed
        },
        thu: {
          isOpen: false,
          operatingHours: {
            openTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
            closeTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
          },
          index: Constant.Date.DayIndex.Thu
        },
        fri: {
          isOpen: false,
          operatingHours: {
            openTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
            closeTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
          },
          index: Constant.Date.DayIndex.Fri
        },
        sat: {
          isOpen: false,
          operatingHours: {
            openTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
            closeTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
          },
          index: Constant.Date.DayIndex.Sat
        },
        sun: {
          isOpen: false,
          operatingHours: {
            openTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
            closeTime: {
              hr: 0,
              min: 0,
              sec: 0,
              DayNightType: 'PM',
              strValue: '',
            },
          },
          index: Constant.Date.DayIndex.Sun
        },
      },
      category: {
        id: '',
        isHairSalon: false,
        isMassageTheraphy: false,
        isPersonalTrainning: false,
        isSkinCare: false,
        name: '',
      },
      country: {
        id: '',
        currency: Constant.Default.CurrencyType.AUD,
        length: '',
        name: '',
        prefixedPhoneCode: Constant.Default.PhoneCode.AU,
        dateFormat: Constant.Date.Format.Australia,
        code: Constant.Default.CountryCodeType.Australia
      },
      plan: {
        configurationId: '',
        isOverDue: false,
        lastPaymentDate: new Date(),
        paymentDate: new Date(),
        option: {
          isWeekly: false,
          isMonthly: false,
          isAnnually: true
        }
      },
      setting: {
        reservationScheduler: {
          isEnabled: false,
          intervalMin: 0,
        },
      },
    };
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
  
}
