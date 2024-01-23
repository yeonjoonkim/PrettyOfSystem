import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatestWith, firstValueFrom, take } from 'rxjs';
import { ShopService } from '../../shop.service';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import { ClientCredentialRepositoryService } from 'src/app/firebase/user-repository/client-credential-repository/client-credential-repository.service';
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
import { GlobalService } from 'src/app/service/global/global.service';
import { Router } from '@angular/router';
import * as Constant from 'src/app/constant/constant';
import { ShopClientManagementService } from '../shop-client-management.service';
import { UserAdminService } from 'src/app/service/user-admin/user-admin.service';
import { ShopClientQueryService } from '../shop-client-query/shop-client-query.service';
import { ShopClientValidatorService } from '../shop-client-validator/shop-client-validator.service';
import { ShopClientAccountService } from '../shop-client-account/shop-client-account.service';
@Injectable({
  providedIn: 'root',
})
export class ShopClientCreateAccountService {
  private _newClient = new BehaviorSubject<ShopClientManagementUserType | null>(null);
  private _timeZone = new BehaviorSubject<string>(Constant.TimeZone.AustraliaBrisbane);
  private _requesting = new BehaviorSubject<boolean>(false);

  public shopConfig$ = this._shop.config$;
  public newClient$ = this._newClient.asObservable();
  public requesting$ = this._requesting.asObservable();

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
    private _shop: ShopService,
    private _userRepo: UserCredentialRepositoryService,
    private _clientRepo: ClientCredentialRepositoryService,
    private _global: GlobalService,
    private _router: Router,
    private _management: ShopClientManagementService,
    private _shopClientAcc: ShopClientAccountService,
    private _admin: UserAdminService,
    private _query: ShopClientQueryService
  ) {}

  public async start(phoneNumber: string) {
    const decryptedPhoneNumber: string | null = this._global.crypt.decrypt(phoneNumber);
    if (decryptedPhoneNumber !== null && decryptedPhoneNumber.includes('+')) {
      this._shop.config$
        .pipe(combineLatestWith(this._userRepo.subscribeUserByPhoneNumber(decryptedPhoneNumber)), take(1))
        .subscribe(async ([config, client]) => {
          if (config !== null) {
            const isExistedClient = client !== null ? this.isExistedClient(config, client) : false;
            if (isExistedClient) {
              await this.toastExsitingClient();
              await this._router.navigateByUrl(`shop/client-management`);
            } else {
              this.newClient =
                client !== null
                  ? this._clientRepo.newShopClientManagementUserType(client, config)
                  : await this.getNewClient(config, decryptedPhoneNumber);
              this.timezone = config.timezone;
            }
          } else {
            await this._router.navigateByUrl(`shop/client-management`);
          }
        });
    } else {
      await this._router.navigateByUrl(`shop/client-management`);
    }
  }

  public async verify(config: ShopConfigurationType, phoneNumber: string) {
    const account = await this.getAccount(phoneNumber);
    if (account !== null) {
      const isExistedClient = this.isExistedClient(config, account);
      if (isExistedClient) {
        await this.toastExsitingClient();
        return false;
      } else {
        const clientConfirmation = await this.getClientConsentConfirmation(
          `${account.firstName} ${account.lastName}`
        );
        if (clientConfirmation) {
          const encryptedPhoneNumber = this._global.crypt.encrypt(phoneNumber);
          await this._router.navigateByUrl(`shop/client-management/create/${encryptedPhoneNumber}`);
          return true;
        } else {
          return false;
        }
      }
    } else {
      const encryptedPhoneNumber = this._global.crypt.encrypt(phoneNumber);
      await this._router.navigateByUrl(`shop/client-management/create/${encryptedPhoneNumber}`);
      return true;
    }
  }

  public async create() {
    this.requesting = true;
    const created = this.newClient !== null ? await this._management.create(this.newClient) : false;
    this.requesting = false;
    if (created && this.newClient !== null) {
      await this._global.loading.init();
      this._query.firstNameParam = this.newClient.firstName;
      this._query.lastNameParam = this.newClient.lastName;
      this._query.phoneNumberParam = this.newClient.phoneNumber;
      await this._query.refresh();
      this.completed();
      await this._router.navigateByUrl(`shop/client-management`);
    }
    return created;
  }

  public completed() {
    this._newClient.next(null);
    this._requesting.next(false);
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
      dob: `2000-01-01T00:00:00`,
      consent: this._clientRepo.newConsent(shop),
      signature: null,
      address: null,
    };
    result.setting.preferLanguage = typeof currentLanguage === 'string' ? currentLanguage : 'en';
    return result;
  }

  private async getAccount(phoneNumber: string) {
    const clientAcc = this._userRepo.subscribeUserByPhoneNumber(phoneNumber);
    const acc = await firstValueFrom(clientAcc);
    return acc;
  }

  private isExistedClient(shop: ShopConfigurationType, user: IUser | null) {
    const client = user !== null ? this._clientRepo.newShopClientManagementUserType(user, shop) : null;
    return client !== null && user !== null ? this._shopClientAcc.isExisitedShop(user, client) : false;
  }

  private async getClientConsentConfirmation(fullName: string) {
    return await this._global.confirmAlert.confirmation(
      `${fullName}`,
      'label.description.clienthasanaccountinourplatform'
    );
  }

  private async toastExsitingClient() {
    const msg = await this._global.language.transform('messageerror.description.existingclient');
    await this._global.toast.presentError(msg);
  }
}
