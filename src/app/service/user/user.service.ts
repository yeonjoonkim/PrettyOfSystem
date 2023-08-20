import { Injectable } from '@angular/core';
import { IUser, IUserSetting } from 'src/app/interface/user/user.interface';
import { ShopConfigurationService } from '../system/system-shop/shop-configuration/shop-configuration.service';
import * as Constant from './../../shared/services/global/global-constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private systemShop: ShopConfigurationService) {}
  
  public defaultUser(): IUser{
    return {
      id: '',
      firstName: '',
      lastName: '',
      isSystemAdmin: false,
      associatedShops: [],
      currentShop: {
        shopId: "",
        role: {
          id: '',
          name: '',
          description: '',
          accessLevel: {
            isSystemAdmin: false,
            isAdmin: false,
            isManager: false,
            isEmployee: false,
            isReception: false
          },
          rate: 0
        },
        userInfo: {
          phoneNumber: '',
          email: '',
          activeFrom: new Date(),
          activeTo: null,
          active: false
        },
        workHours: this.systemShop.setWorkHours(),
        shopName: '',
        gender: 'Male',
        loginOption: {email: false, phoneNumber: true, loginId: ''},
      },
      setting: this.setDefaultUserSetting(),
      loginIds: [],
      phoneNumber: '',
      email: ''
    }
  }

  public setDefaultUserSetting(): IUserSetting{
    return {
        preferLanguage: ''
    }
  }
}
