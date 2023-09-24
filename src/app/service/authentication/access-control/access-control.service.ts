import { RoleAccessLevelType } from 'src/app/interface/system/role/role.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessControlService {
  constructor() {}

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
