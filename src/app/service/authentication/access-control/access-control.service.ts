import { IMenuCategory } from 'src/app/interface/menu/menu.interface';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { IRoleAccessLevel, IRoleConfiguration } from 'src/app/interface/system/role/role.interface';
import { RoleRateService } from '../role-rate/role-rate.service';
import { Injectable } from '@angular/core';
import * as Constant from '../../../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class AccessControlService {
  constructor(private roleRate: RoleRateService) {}

  public systemAdmin(accessLevel: IRoleAccessLevel): boolean {
    return accessLevel.isSystemAdmin;
  }

  public admin(accessLevel: IRoleAccessLevel): boolean {
    return accessLevel.isSystemAdmin || accessLevel.isAdmin;
  }

  public manager(accessLevel: IRoleAccessLevel): boolean {
    return accessLevel.isSystemAdmin || accessLevel.isAdmin || accessLevel.isManager;
  }

  public reception(accessLevel: IRoleAccessLevel): boolean {
    return (
      accessLevel.isSystemAdmin ||
      accessLevel.isAdmin ||
      accessLevel.isManager ||
      accessLevel.isReception
    );
  }

  public employee(accessLevel: IRoleAccessLevel): boolean {
    return (
      accessLevel.isSystemAdmin ||
      accessLevel.isAdmin ||
      accessLevel.isManager ||
      accessLevel.isReception ||
      accessLevel.isEmployee
    );
  }
}
