import { Injectable } from '@angular/core';
import { IRoleAccessLevel, IRoleConfiguration } from 'src/app/interface/system/role/role.interface';
import { IUser, IUserAssociatedShop } from 'src/app/interface/user/user.interface';
import { SystemShopWorkHoursService } from '../system-shop/system-shop-work-hours/system-shop-work-hours.service';
import * as Constant from '../../global/global-constant';
@Injectable({
  providedIn: 'root',
})
export class SystemUserService {
  constructor(private systemWorkHoursService: SystemShopWorkHoursService) {}

  public handleOnChangeSystemAdmin(
    user: IUser,
    associatedShops: IUserAssociatedShop[],
    systemAdminRole: IRoleConfiguration
  ) {
    user.associatedShops = user.isSystemAdmin
      ? this.setUserInfoInAssociatedShops(associatedShops, user, systemAdminRole)
      : [];
    user.currentShop = user.isSystemAdmin
      ? user.associatedShops[0]
      : this.resetCurrentShop(systemAdminRole);
  }

  private setUserInfoInAssociatedShops(
    shops: IUserAssociatedShop[],
    user: IUser,
    systemAdminRole: IRoleConfiguration
  ) {
    let accessLevel: IRoleAccessLevel = this.setDefaultAccessLevel();
    accessLevel.isSystemAdmin = true;

    shops = shops.map(s => {
      s.email = user.email;
      s.phoneNumber = user.phoneNumber;
      s.role = systemAdminRole;
      s.active = true;
      return s;
    });

    return shops;
  }

  public resetCurrentShop(systemAdminRole: IRoleConfiguration): IUserAssociatedShop {
    return {
      shopId: '',
      shopName: '',
      role: systemAdminRole,
      loginOption: {
        email: false,
        phoneNumber: false,
        id: '',
      },
      gender: Constant.Default.Gender.Male,
      workHours: this.systemWorkHoursService.setDefaultWorkHours(),
      phoneNumber: '',
      email: '',
      activeFrom: new Date(),
      activeTo: null,
      active: true,
    };
  }

  private setDefaultAccessLevel() {
    return {
      isAdmin: false,
      isManager: false,
      isEmployee: false,
      isReception: false,
      isSystemAdmin: false,
    };
  }
}
