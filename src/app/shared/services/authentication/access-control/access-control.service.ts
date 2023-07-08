import { IMenuCategory } from 'src/app/interface/menu/menu.interface';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { IRoleConfiguration } from 'src/app/interface/system/role/role.interface';
import { RoleRateService } from '../role-rate/role-rate.service';
import { Injectable } from '@angular/core';
import * as Constant from '../../global/global-constant';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {

  constructor(private roleRate: RoleRateService) { }

  public getAccessGrantLevel(level: Constant.RoleAccessType): number{
    return this.roleRate.getSystemRoleRateAccessLevel(level);
  }

  public isAccessGrant(roleConfig: IRoleConfiguration, accessGrantLevel: number){
    return roleConfig.rate >= accessGrantLevel;
  }

  public isMenuCategoryAccessGranted(category: IMenuCategory, roleConfig: IRoleConfiguration){
    let categoryAccessLevel: number = this.roleRate.getSystemRoleRateSettingByConfiguration(category.accessLevel);
    return this.isAccessGrant(roleConfig, categoryAccessLevel);
  }

  public getAccessGrantedMenu(userRoleConfig: IRoleConfiguration, menu: IMenuCategory[]){
    let grantedMenu: IMenuCategory[] = [];

    if(menu.length > 0){
      menu.forEach(category => {
        let isCategoryAccessGranted = this.isMenuCategoryAccessGranted(category, userRoleConfig);
        if(isCategoryAccessGranted){
          grantedMenu.push(category);
        }
      });
    }
    return grantedMenu;
  }

}
