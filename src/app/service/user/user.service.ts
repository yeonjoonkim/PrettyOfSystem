import { Injectable } from '@angular/core';
import { IUser, UserSettingType } from 'src/app/interface/user/user.interface';
import { ShopConfigurationService } from '../system/system-shop/shop-configuration/shop-configuration.service';
import { SystemLanguageStorageService } from '../global/language/system-language-management/system-language-storage/system-language-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private _systemShop: ShopConfigurationService,
    private _langaugeStorage: SystemLanguageStorageService
  ) {}

  public defaultUser(): IUser {
    return {
      id: '',
      firstName: '',
      lastName: '',
      gender: 'Male',
      isSystemAdmin: false,
      associatedShops: [],
      currentShopId: '',
      phoneNumber: '',
      email: '',
      encryptedPassword: '',
      loginOption: {
        email: false,
        phoneNumber: true,
      },
      setting: this.setDefaultUserSetting(),
      disabledAccount: false,
    };
  }

  public setDefaultUserSetting(): UserSettingType {
    return {
      preferLanguage: '',
    };
  }
}
