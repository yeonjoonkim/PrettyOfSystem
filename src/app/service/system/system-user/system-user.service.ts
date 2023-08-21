import { Injectable } from '@angular/core';
import { IRoleAccessLevel, IRoleConfiguration } from 'src/app/interface/system/role/role.interface';
import { IUser, IUserAssociatedShop, IUserInformation } from 'src/app/interface/user/user.interface';
import { SystemShopWorkHoursService } from '../system-shop/system-shop-work-hours/system-shop-work-hours.service';
import * as Constant from "../../../shared/services/global/global-constant";
@Injectable({
  providedIn: 'root'
})
export class SystemUserService {

  constructor(private systemWorkHoursService: SystemShopWorkHoursService) { }

  public handleOnChangeSystemAdmin(user: IUser, associatedShops: IUserAssociatedShop[], systemAdminRole: IRoleConfiguration){
    user.associatedShops = user.isSystemAdmin ? this.setUserInfoInAssociatedShops(associatedShops, user, systemAdminRole) : [];
    user.currentShop = user.isSystemAdmin ? user.associatedShops[0] : this.resetCurrentShop(systemAdminRole);
  }

  private setUserInfoInAssociatedShops(shops: IUserAssociatedShop[], user: IUser, systemAdminRole: IRoleConfiguration){
    let accessLevel: IRoleAccessLevel = this.setDefaultAccessLevel();
    accessLevel.isSystemAdmin = true;

    shops = shops.map(s => {
      s.userInfo.email = user.email;
      s.userInfo.phoneNumber = user.phoneNumber;
      s.role = systemAdminRole;
      s.userInfo.active = true;
      return s;
    });

    return shops;
  }

  public resetCurrentShop(systemAdminRole: IRoleConfiguration): IUserAssociatedShop{
    return {
      shopId: '',
      shopName: '',
      role: systemAdminRole,
      loginOption: {
        email: false,
        phoneNumber: false,
        loginId: ''
      },
      gender: Constant.Default.Gender.Male,
      userInfo: this.setDefaultUserInfo(),
      workHours: this.systemWorkHoursService.setDefaultWorkHours()
    };
  }

  private setDefaultAccessLevel(){
    return {
      isAdmin: false,
      isManager: false,
      isEmployee: false,
      isReception: false,
      isSystemAdmin: false
    }
  }

  public setDefaultUserInfo(): IUserInformation{
    return {
      phoneNumber: '',
      email: '',
      activeFrom: new Date(),
      activeTo: null,
      active: false
    }
  }
}
