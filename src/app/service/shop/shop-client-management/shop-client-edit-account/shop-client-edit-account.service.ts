import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatestWith, filter, take } from 'rxjs';
import { ClientCredentialRepositoryService } from 'src/app/firebase/user-repository/client-credential-repository/client-credential-repository.service';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import {
  ShopClientManagementUserType,
  AddressType,
  UserSettingPrivateInsuranceType,
  UserSettingMassageType,
  UserSettingMedicalHistroyType,
  UserSettingEmergencyContactType,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopService } from '../../shop.service';
import { ShopClientManagementService } from '../shop-client-management.service';
import { ShopClientQueryService } from '../shop-client-query/shop-client-query.service';
import { ShopClientValidatorService } from '../shop-client-validator/shop-client-validator.service';
import * as Constant from 'src/app/constant/constant';

@Injectable({
  providedIn: 'root',
})
export class ShopClientEditAccountService {
  private _client = new BehaviorSubject<ShopClientManagementUserType | null>(null);
  private _timezone = new BehaviorSubject<string>(Constant.TimeZone.AustraliaBrisbane);
  private _requesting = new BehaviorSubject<boolean>(false);

  public shopConfig$ = this._shop.config$;
  public client$ = this._client.asObservable();
  public requesting$ = this._requesting.asObservable();

  get client() {
    return this._client.getValue();
  }

  set client(value: ShopClientManagementUserType | null) {
    this._client.next(value);
  }

  get firstName() {
    const client = this.client;
    return client !== null ? client.firstName : '';
  }

  set firstName(value: string) {
    let client = this.client;
    if (client !== null) {
      client.firstName = value;
      this.client = client;
    }
  }

  get lastName() {
    const client = this.client;
    return client !== null ? client.lastName : '';
  }

  set lastName(value: string) {
    let client = this.client;
    if (client !== null) {
      client.lastName = value;
      this.client = client;
    }
  }

  get gender() {
    const client = this.client;
    return client !== null ? client.gender : Constant.Default.Gender.Male;
  }

  set gender(value: Constant.GenderType) {
    let client = this.client;
    if (client !== null) {
      client.gender = value;
      this.client = client;
      const isMale = client.gender === Constant.Default.Gender.Male;
      if (isMale) {
        this.pregancyDueDate = null;
      }
    }
  }

  get dob() {
    const client = this.client;
    return client !== null ? client.dob : '2000-01-01T00:00:00';
  }

  set dob(value: string) {
    let client = this.client;
    if (client !== null) {
      client.dob = value;
      this.client = client;
    }
  }

  get phoneNumber() {
    const client = this.client;
    return client !== null ? client.phoneNumber : '';
  }

  set phoneNumber(value: string) {
    let client = this.client;
    if (client !== null) {
      client.phoneNumber = value;
      this.client = client;
    }
  }

  get email() {
    const client = this.client;
    return client !== null ? client.email : '';
  }

  set email(value: string) {
    let client = this.client;
    if (client !== null) {
      client.email = value;
      this.client = client;
    }
  }

  get address() {
    const client = this.client;
    return client !== null && client.address !== undefined ? client.address : null;
  }

  set address(address: AddressType | null) {
    let client = this.client;
    if (client !== null) {
      client.address = address;
      this.client = client;
    }
  }

  get signature() {
    const client = this.client;
    return client !== null && client.signature !== undefined ? client.signature : null;
  }

  set signature(value: string | null) {
    let client = this.client;
    if (client !== null) {
      client.signature = value;
      this.client = client;
    }
  }

  get isVIP() {
    const client = this.client;
    return client !== null ? client.consent.isVIP : false;
  }

  set isVIP(value: boolean) {
    let client = this.client;
    if (client !== null) {
      client.consent.isVIP = value;
      this.client = client;
    }
  }

  get hasMarketingEmailConsent() {
    const client = this.client;
    return client !== null ? client.consent.hasMarketingEmailConsent : false;
  }

  set hasMarketingEmailConsent(value: boolean) {
    let client = this.client;
    if (client !== null) {
      client.consent.hasMarketingEmailConsent = value;
      this.client = client;
    }
  }

  get hasMarketingSMSConsent() {
    const client = this.client;
    return client !== null ? client.consent.hasMarketingSMSConsent : false;
  }

  set hasMarketingSMSConsent(value: boolean) {
    let client = this.client;
    if (client !== null) {
      client.consent.hasMarketingSMSConsent = value;
      this.client = client;
    }
  }

  get hasTermandConditionConsent() {
    const client = this.client;
    return client !== null ? client.consent.hasTermandConditionConsent : false;
  }

  set hasTermandConditionConsent(value: boolean) {
    let client = this.client;
    if (client !== null) {
      client.consent.hasTermandConditionConsent = value;
      this.client = client;
    }
  }

  get preferLanguage() {
    const client = this.client;
    return client !== null ? client.setting.preferLanguage : 'en';
  }

  set preferLanguage(value: string) {
    let client = this.client;
    if (client !== null) {
      client.setting.preferLanguage = value;
      this.client = client;
    }
  }

  get pregancyDueDate() {
    const client = this.client;
    return client !== null ? client.setting.pregnancyDueDate : null;
  }

  set pregancyDueDate(value: string | null) {
    let client = this.client;
    if (client !== null) {
      client.setting.pregnancyDueDate = value;
      this.client = client;
    }
  }

  get privateInsurance() {
    const client = this.client;
    return client !== null ? client.setting.privateInsurance : null;
  }

  set privateInsurance(value: UserSettingPrivateInsuranceType | null) {
    let client = this.client;
    if (client !== null) {
      client.setting.privateInsurance = value;
      this.client = client;
    }
  }

  get massage() {
    const client = this.client;
    return client !== null ? client.setting.massage : null;
  }

  set massage(value: UserSettingMassageType | null) {
    let client = this.client;
    if (client !== null && value !== null) {
      client.setting.massage = value;
      this.client = client;
    }
  }

  get medical() {
    const client = this.client;
    return client !== null ? client.setting.medical : null;
  }

  set medical(value: UserSettingMedicalHistroyType | null) {
    let client = this.client;
    if (client !== null && value !== null) {
      client.setting.medical = value;
      this.client = client;
    }
  }

  get emergencyContact() {
    const client = this.client;
    return client !== null ? client.setting.emergencyContact : null;
  }

  set emergencyContact(value: UserSettingEmergencyContactType | null) {
    let client = this.client;
    if (client !== null && value !== null) {
      client.setting.emergencyContact = value;
      this.client = client;
    }
  }

  get timezone() {
    return this._timezone.getValue();
  }

  set timezone(value: Constant.TimeZoneType) {
    this._timezone.next(value);
  }

  get requesting() {
    return this._requesting.getValue();
  }

  set requesting(value: boolean) {
    this._requesting.next(value);
  }

  constructor(
    public validator: ShopClientValidatorService,
    private _shop: ShopService,
    private _userRepo: UserCredentialRepositoryService,
    private _clientRepo: ClientCredentialRepositoryService,
    private _global: GlobalService,
    private _router: Router,
    private _management: ShopClientManagementService,
    private _query: ShopClientQueryService
  ) {}

  public async start(clientId: string) {
    this.client = null;
    this._shop.config$
      .pipe(
        combineLatestWith(this._userRepo.subscribeUserById(clientId)),
        take(1),
        filter(([config, client]) => client !== null && config !== null)
      )
      .subscribe(async ([config, client]) => {
        if (config !== null && client !== null) {
          this.client = this._clientRepo.transformIntoShopClientManagementUserType(client, config.id);
          if (!this.client) {
            await this._router.navigateByUrl(`shop/client-management`);
          }
        } else {
          await this._router.navigateByUrl(`shop/client-management`);
        }
      });
  }

  public async edit() {
    this.requesting = true;
    const updated = this.client !== null ? await this._management.update(this.client) : false;
    this.requesting = false;
    if (updated && this.client !== null) {
      await this._global.loading.init();
      this._query.firstNameParam = this.client.firstName;
      this._query.lastNameParam = this.client.lastName;
      this._query.phoneNumberParam = this.client.phoneNumber;
      await this._query.refresh();
      this.completed();
      await this._router.navigateByUrl(`shop/client-management`);
    }
    return updated;
  }

  //Todo: Validate Coupon and Existing Consult
  public async startDelete() {
    const confirmation = await this._global.confirmAlert.getDeleteConfirmation();
    return await this.delete();
  }

  private async delete() {
    this.requesting = true;
    const updated = this.client !== null ? await this._management.delete(this.client) : false;
    this.requesting = false;
    if (updated && this.client !== null) {
      await this._global.loading.init();
      this._query.firstNameParam = this.client.firstName;
      this._query.lastNameParam = this.client.lastName;
      this._query.phoneNumberParam = this.client.phoneNumber;
      await this._query.refresh();
      this.completed();
      await this._router.navigateByUrl(`shop/client-management`);
    }
    return updated;
  }

  public completed() {
    this._client.next(null);
    this._timezone.next(Constant.TimeZone.AustraliaBrisbane);
    this._requesting.next(false);
  }

  private async toastNoExsitingClient() {
    const msg = await this._global.language.transform('messageerror.description.notexistingclient');
    await this._global.toast.presentError(msg);
  }
}
