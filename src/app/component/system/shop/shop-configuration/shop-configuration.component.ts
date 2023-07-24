import { IDatePeriod, IFormHeaderModalProp } from './../../../../interface/global/global.interface';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IShopConfiguration } from 'src/app/interface/system/shop/shop.interface';
import * as Constant from './../../../../shared/services/global/global-constant';
import {
  IShopConfigurationDisplayOption,
  IShopConfigurationValidator,
  ShopConfigurationService,
} from 'src/app/service/system/system-shop/shop-configuration/shop-configuration.service';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'shop-configuration',
  templateUrl: './shop-configuration.component.html',
  styleUrls: ['./shop-configuration.component.scss'],
})
//TODO: ADD USER VERIFICATION
export class ShopConfigurationComponent implements OnInit, AfterViewInit {
  public planPrice: number = 0;
  public form!: IFormHeaderModalProp;
  public timeZoneList: Constant.TimeZoneType[] = Object.values(Constant.TimeZone);
  public validator: IShopConfigurationValidator = this.shopConfig.defaultValidator();
  public display: IShopConfigurationDisplayOption = this.shopConfig.defaultShopDisplayOption();
  public config: IShopConfiguration = {
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
            strValue: ''
          },
          closeTime: {
            hr: 0,
            min: 0,
            sec: 0,
            DayNightType: 'PM',
            strValue: '',
          },
        },
        index: Constant.Date.DayIndex.Mon,
        day: Constant.Date.Day.Mon
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
        index: Constant.Date.DayIndex.Tue,
        day: Constant.Date.Day.Tue
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
        index: Constant.Date.DayIndex.Wed,
        day: Constant.Date.Day.Wed
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
        index: Constant.Date.DayIndex.Thu,
        day: Constant.Date.Day.Thu
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
        index: Constant.Date.DayIndex.Fri,
        day: Constant.Date.Day.Fri
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
        index: Constant.Date.DayIndex.Sat,
        day: Constant.Date.Day.Fri
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
        index: Constant.Date.DayIndex.Sun,
        day: Constant.Date.Day.Fri
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
      period: {
        name: 'date.period.weekly',
        type: 'Weekly',
        week: 1,
        day: 7
      }
    },
    setting: {
      reservationScheduler: {
        isEnabled: false,
        intervalMin: 0,
      },
    },
  };

  constructor(private shopConfig: ShopConfigurationService, private navParams: NavParams) {
    this.loadingFormCtrl();
  }

  ngOnInit() {
    this.autoPaymentDateCalculation();
  }

  async ngAfterViewInit() {
    await this.onChangeForm();
  }

  private async onChangeForm(): Promise<void>{
    setTimeout(() => {
      this.form.enabledSavebutton = this.shopConfig.formInputValidator(this.validator);
    });
  }
  private loadingFormCtrl(): void{
    let form: IFormHeaderModalProp = this.navParams.get(Constant.Default.ComponentMode.Form);
    this.form = form ? form : { readOnly: true, headerTitle: '', action: Constant.Default.FormAction.Read, enabledSavebutton: false};
  }

  public async onPlanPeriodChange(){
    this.config.plan.paymentDate = this.shopConfig.global.date.transform.addDay(this.config.plan.lastPaymentDate, this.config.plan.period.day);
  }

  public onClickInfo(): void {
    this.display = this.shopConfig.displayInfo();
  }

  public onClickAddress(): void {
    this.display = this.shopConfig.displayAddress();
  }

  public onClickSubscription(): void {
    this.display = this.shopConfig.displaySubscription();
  }

  public autoPaymentDateCalculation(){
    if(this.form.action === Constant.Default.FormAction.Create){
      this.onPlanPeriodChange();
    }
  }

  public async onChangePlan(){
    if(this.config.plan.configurationId){
      this.planPrice = await this.shopConfig.getSelectedTotalPrice(this.config.plan.configurationId, this.config.plan.period);
    }
  }

  public dismiss(){
    this.shopConfig.global.modal.dismiss();
  }
}
