import { MenuCategoryType } from 'src/app/interface/menu/menu.interface';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import {
  RoleAccessLevelType,
  RoleConfigurationType,
} from 'src/app/interface/system/role/role.interface';
import { RoleRateService } from '../role-rate/role-rate.service';
import { Injectable } from '@angular/core';
import * as Constant from '../../../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class AccessControlService {
  constructor(private roleRate: RoleRateService) {}

  public systemAdmin(accessLevel: RoleAccessLevelType): boolean {
    return accessLevel.isSystemAdmin;
  }

  public admin(accessLevel: RoleAccessLevelType): boolean {
    return accessLevel.isSystemAdmin || accessLevel.isAdmin;
  }

  public manager(accessLevel: RoleAccessLevelType): boolean {
    return accessLevel.isSystemAdmin || accessLevel.isAdmin || accessLevel.isManager;
  }

  public reception(accessLevel: RoleAccessLevelType): boolean {
    return (
      accessLevel.isSystemAdmin ||
      accessLevel.isAdmin ||
      accessLevel.isManager ||
      accessLevel.isReception
    );
  }

  public employee(accessLevel: RoleAccessLevelType): boolean {
    return (
      accessLevel.isSystemAdmin ||
      accessLevel.isAdmin ||
      accessLevel.isManager ||
      accessLevel.isReception ||
      accessLevel.isEmployee
    );
  }
}
