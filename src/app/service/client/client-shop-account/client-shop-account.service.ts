import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatestWith, of, switchMap, take } from 'rxjs';
import {
  AddressType,
  IUser,
  ShopClientManagementUserType,
  ShopConfigurationType,
  UserSettingEmergencyContactType,
  UserSettingMassageType,
  UserSettingMedicalHistroyType,
  UserSettingPrivateInsuranceType,
} from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import { ClientCredentialRepositoryService } from 'src/app/firebase/user-repository/client-credential-repository/client-credential-repository.service';
import { GlobalService } from '../../global/global.service';
import { UserAdminService } from '../../user-admin/user-admin.service';
import { ShopClientAccountService } from '../../shop/shop-client-management/shop-client-account/shop-client-account.service';
import { ShopClientManagementService } from '../../shop/shop-client-management/shop-client-management.service';
import { ShopClientValidatorService } from '../../shop/shop-client-management/shop-client-validator/shop-client-validator.service';
@Injectable({
  providedIn: 'root',
})
export class ClientShopAccountService {
  private _newClient = new BehaviorSubject<ShopClientManagementUserType | null>(null);
  private _timeZone = new BehaviorSubject<string>(Constant.TimeZone.AustraliaBrisbane);
  private _requesting = new BehaviorSubject<boolean>(false);

  private _shopConfig = new BehaviorSubject<ShopConfigurationType | null>(null);

  set shopConfig(value: ShopConfigurationType | null) {
    this._shopConfig.next(value);
  }

  public newClient$ = this._newClient.asObservable();
  public requesting$ = this._requesting.asObservable();
  public config$ = this._shopConfig.asObservable();

  public isRelatedToMedical$!: Observable<boolean>;
  public isMassageShop$!: Observable<boolean>;
  public isSkinCare$!: Observable<boolean>;
  public isHairSalon$!: Observable<boolean>;
  public isPersonalTraining$!: Observable<boolean>;
  public isNailArt$!: Observable<boolean>;
  public isMobileShop$!: Observable<boolean>;

  get newClient() {
    return this._newClient.getValue();
  }

  set newClient(value: ShopClientManagementUserType | null) {
    this._newClient.next(value);
  }

  get firstName() {
    const client = this.newClient;
    return client !== null ? client.firstName : '';
  }

  set firstName(value: string) {
    let client = this.newClient;
    if (client !== null) {
      client.firstName = value;
      this.newClient = client;
    }
  }

  get lastName() {
    const client = this.newClient;
    return client !== null ? client.lastName : '';
  }

  set lastName(value: string) {
    let client = this.newClient;
    if (client !== null) {
      client.lastName = value;
      this.newClient = client;
    }
  }

  get gender() {
    const client = this.newClient;
    return client !== null ? client.gender : Constant.Default.Gender.Male;
  }

  set gender(value: Constant.GenderType) {
    let client = this.newClient;
    if (client !== null) {
      client.gender = value;
      this.newClient = client;
      const isMale = client.gender === Constant.Default.Gender.Male;
      if (isMale) {
        this.pregancyDueDate = null;
      }
    }
  }

  get dob() {
    const client = this.newClient;
    return client !== null ? client.dob : '2000-01-01T00:00:00';
  }

  set dob(value: string) {
    let client = this.newClient;
    if (client !== null) {
      client.dob = value;
      this.newClient = client;
    }
  }

  get phoneNumber() {
    const client = this.newClient;
    return client !== null ? client.phoneNumber : '';
  }

  set phoneNumber(value: string) {
    let client = this.newClient;
    if (client !== null) {
      client.phoneNumber = value;
      this.newClient = client;
    }
  }

  get email() {
    const client = this.newClient;
    return client !== null ? client.email : '';
  }

  set email(value: string) {
    let client = this.newClient;
    if (client !== null) {
      client.email = value;
      this.newClient = client;
    }
  }

  get address() {
    const client = this.newClient;
    return client !== null && client.address !== undefined ? client.address : null;
  }

  set address(address: AddressType | null) {
    let client = this.newClient;
    if (client !== null) {
      client.address = address;
      this.newClient = client;
    }
  }

  get signature() {
    const client = this.newClient;
    return client !== null && client.signature !== undefined ? client.signature : null;
  }

  set signature(value: string | null) {
    let client = this.newClient;
    if (client !== null) {
      client.signature = value;
      this.newClient = client;
    }
  }

  get isVIP() {
    const client = this.newClient;
    return client !== null ? client.consent.isVIP : false;
  }

  set isVIP(value: boolean) {
    let client = this.newClient;
    if (client !== null) {
      client.consent.isVIP = value;
      this.newClient = client;
    }
  }

  get hasMarketingEmailConsent() {
    const client = this.newClient;
    return client !== null ? client.consent.hasMarketingEmailConsent : false;
  }

  set hasMarketingEmailConsent(value: boolean) {
    let client = this.newClient;
    if (client !== null) {
      client.consent.hasMarketingEmailConsent = value;
      this.newClient = client;
    }
  }

  get hasMarketingSMSConsent() {
    const client = this.newClient;
    return client !== null ? client.consent.hasMarketingSMSConsent : false;
  }

  set hasMarketingSMSConsent(value: boolean) {
    let client = this.newClient;
    if (client !== null) {
      client.consent.hasMarketingSMSConsent = value;
      this.newClient = client;
    }
  }

  get hasTermandConditionConsent() {
    const client = this.newClient;
    return client !== null ? client.consent.hasTermandConditionConsent : false;
  }

  set hasTermandConditionConsent(value: boolean) {
    let client = this.newClient;
    if (client !== null) {
      client.consent.hasTermandConditionConsent = value;
      this.newClient = client;
    }
  }

  get preferLanguage() {
    const client = this.newClient;
    return client !== null ? client.setting.preferLanguage : 'en';
  }

  set preferLanguage(value: string) {
    let client = this.newClient;
    if (client !== null) {
      client.setting.preferLanguage = value;
      this.newClient = client;
    }
  }

  get pregancyDueDate() {
    const client = this.newClient;
    return client !== null ? client.setting.pregnancyDueDate : null;
  }

  set pregancyDueDate(value: string | null) {
    let client = this.newClient;
    if (client !== null) {
      client.setting.pregnancyDueDate = value;
      this.newClient = client;
    }
  }

  get privateInsurance() {
    const client = this.newClient;
    return client !== null ? client.setting.privateInsurance : null;
  }

  set privateInsurance(value: UserSettingPrivateInsuranceType | null) {
    let client = this.newClient;
    if (client !== null) {
      client.setting.privateInsurance = value;
      this.newClient = client;
    }
  }

  get massage() {
    const client = this.newClient;
    return client !== null ? client.setting.massage : null;
  }

  set massage(value: UserSettingMassageType | null) {
    let client = this.newClient;
    if (client !== null && value !== null) {
      client.setting.massage = value;
      this.newClient = client;
    }
  }

  get medical() {
    const client = this.newClient;
    return client !== null ? client.setting.medical : null;
  }

  set medical(value: UserSettingMedicalHistroyType | null) {
    let client = this.newClient;
    if (client !== null && value !== null) {
      client.setting.medical = value;
      this.newClient = client;
    }
  }

  get emergencyContact() {
    const client = this.newClient;
    return client !== null ? client.setting.emergencyContact : null;
  }

  set emergencyContact(value: UserSettingEmergencyContactType | null) {
    let client = this.newClient;
    if (client !== null && value !== null) {
      client.setting.emergencyContact = value;
      this.newClient = client;
    }
  }

  get timezone() {
    return this._timeZone.getValue();
  }

  set timezone(value: Constant.TimeZoneType) {
    this._timeZone.next(value);
  }

  get requesting() {
    return this._requesting.getValue();
  }

  set requesting(value: boolean) {
    this._requesting.next(value);
  }

  constructor(
    public validator: ShopClientValidatorService,
    private _userRepo: UserCredentialRepositoryService,
    private _clientRepo: ClientCredentialRepositoryService,
    private _global: GlobalService,
    private _admin: UserAdminService,
    private _shopClientAcc: ShopClientAccountService,
    private _clientManagement: ShopClientManagementService
  ) {
    this.relatedShopCategoryListener();
    this.isRelatedToMedical();
  }

  public async start(config: ShopConfigurationType, phoneNumber: string) {
    this.shopConfig = config;
    if (phoneNumber.includes('+')) {
      this.config$
        .pipe(combineLatestWith(this._userRepo.subscribeUserByPhoneNumber(phoneNumber)), take(1))
        .subscribe(async ([config, client]) => {
          if (config !== null) {
            const isExistedClient = client !== null ? this.isExistedClient(config, client) : false;
            if (isExistedClient) {
              await this.toastExsitingClient();
              return false;
            } else {
              this.newClient =
                client !== null
                  ? this._clientRepo.newShopClientManagementUserType(client, config)
                  : await this.getNewClient(config, phoneNumber);
              this.timezone = config.timezone;
              return true;
            }
          } else {
            return false;
          }
        });
    }
    return false;
  }

  public async create() {
    this.requesting = true;
    const created = this.newClient !== null ? await this._clientManagement.create(this.newClient) : false;
    this.requesting = false;
    return created;
  }

  public async completed() {
    this._requesting.next(false);
    this._shopConfig.next(null);
    this._newClient.next(null);
  }

  private isExistedClient(shop: ShopConfigurationType, user: IUser | null) {
    const client = user !== null ? this._clientRepo.newShopClientManagementUserType(user, shop) : null;
    return client !== null && user !== null ? this._shopClientAcc.isExisitedShop(user, client) : false;
  }

  private async toastExsitingClient() {
    const msg = await this._global.language.transform('messageerror.description.existingclient');
    await this._global.toast.presentError(msg);
  }

  private isRelatedToMedical() {
    this.isRelatedToMedical$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName =
            name === Constant.ShopCategoryTitle.MassageTheraphy ||
            name === Constant.ShopCategoryTitle.PersonalTraining ||
            name === Constant.ShopCategoryTitle.SkinCare;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );
  }

  private async getNewClient(shop: ShopConfigurationType, phoneNumber: string) {
    const currentLanguage = await this._global.language.management.storage.getCurrentLanguage();
    const setting = this._admin.setDefaultUserSetting();
    const clientId = this._global.newId();
    const result: ShopClientManagementUserType = {
      id: clientId,
      shopId: shop.id,
      firstName: '',
      lastName: '',
      loginOption: { phoneNumber: true, email: false },
      gender: Constant.Default.Gender.Male,
      phoneNumber: phoneNumber,
      email: '',
      setting: setting,
      dob: `1990-01-01T00:00:00`,
      consent: this._clientRepo.newConsent(shop),
      signature: null,
      address: null,
    };
    result.setting.preferLanguage = typeof currentLanguage === 'string' ? currentLanguage : 'en';
    return result;
  }

  private relatedShopCategoryListener() {
    this.isMassageShop$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName = name === Constant.ShopCategoryTitle.MassageTheraphy;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );

    this.isSkinCare$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName = name === Constant.ShopCategoryTitle.SkinCare;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );
    this.isHairSalon$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName = name === Constant.ShopCategoryTitle.Hairsalon;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );
    this.isPersonalTraining$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName = name === Constant.ShopCategoryTitle.PersonalTraining;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );
    this.isMobileShop$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName = name === Constant.ShopCategoryTitle.MobileShop;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );
    this.isNailArt$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName = name === Constant.ShopCategoryTitle.NailArt;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );
  }
}
