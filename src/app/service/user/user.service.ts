import { Injectable } from '@angular/core';
import { IUser, UserSettingType } from 'src/app/interface/user/user.interface';
import { ShopConfigurationService } from '../system/system-shop/shop-configuration/shop-configuration.service';
import * as Constant from '../../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private systemShop: ShopConfigurationService) {}

  public defaultUser(): IUser {
    return {
      id: '',
      isSystemAdmin: false,
      associatedShops: [],
      currentShop: {
        shopId: '',
        firstName: '',
        lastName: '',
        role: {
          id: '',
          name: '',
          description: '',
          accessLevel: {
            isSystemAdmin: false,
            isAdmin: false,
            isManager: false,
            isEmployee: false,
            isReception: false,
          },
          rate: 0,
        },
        workHours: this.systemShop.setWorkHours(),
        shopName: '',
        gender: 'Male',
        loginOption: { email: false, phoneNumber: true, id: '' },
        activeFrom: new Date(),
        activeTo: null,
        active: false,
        phoneNumber: '',
        email: '',
        displayInSystem: true,
      },
      setting: this.setDefaultUserSetting(),
      loginIds: [],
      phoneNumber: '',
      email: '',
    };
  }

  public setDefaultUserSetting(): UserSettingType {
    return {
      preferLanguage: '',
    };
  }
}
