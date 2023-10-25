import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { Observable, firstValueFrom } from 'rxjs';
import { RoleConfigurationType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  public currentRole$!: Observable<RoleConfigurationType | null>;
  constructor(private _userService: UserService) {
    this.currentRole$ = this._userService.currentRole$;
  }

  private async get() {
    return await firstValueFrom(this.currentRole$);
  }

  async isSystemAdminAccess() {
    const current = await this.get();
    return current !== null ? current.accessLevel.isSystemAdmin : false;
  }

  async isAdminAccess() {
    const current = await this.get();
    return current !== null
      ? current.accessLevel.isAdmin || current.accessLevel.isSystemAdmin
      : false;
  }

  async isManagerAccess() {
    const current = await this.get();
    return current !== null
      ? current.accessLevel.isManager ||
          current.accessLevel.isAdmin ||
          current.accessLevel.isSystemAdmin
      : false;
  }

  async isReceptionistAccess() {
    const current = await this.get();
    return current !== null
      ? current.accessLevel.isReception ||
          current.accessLevel.isManager ||
          current.accessLevel.isAdmin ||
          current.accessLevel.isSystemAdmin
      : false;
  }

  async isEmployeeAccess() {
    const current = await this.get();
    return current !== null
      ? current.accessLevel.isEmployee ||
          current.accessLevel.isReception ||
          current.accessLevel.isManager ||
          current.accessLevel.isAdmin ||
          current.accessLevel.isSystemAdmin
      : false;
  }
}
