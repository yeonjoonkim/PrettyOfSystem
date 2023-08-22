import { IRoleAccessLevel } from '../../../interface/system/role/role.interface';
import { Injectable } from '@angular/core';
import * as Constant from '../../global/global-constant';
import { IUserLoginOption } from 'src/app/interface/user/user.interface';
@Injectable({
  providedIn: 'root',
})
export class RoleRateService {
  private readonly rate = Constant.Default.RoleAccessRateType;

  constructor() {}

  public setLoginOptionByRate(rate: Constant.RoleAccessRateType): IUserLoginOption {
    return Constant.Default.RoleAccessRateType.Reception === rate
      ? { id: '', phoneNumber: false, email: true }
      : { id: '', phoneNumber: true, email: false };
  }

  public getSystemRoleRateSettingByConfiguration(accessLevel: IRoleAccessLevel): number {
    let rate: number = 0;
    rate = this.getEmployeeRate(accessLevel, rate);
    rate = this.getReceptionRate(accessLevel, rate);
    rate = this.getManagerRate(accessLevel, rate);
    rate = this.getAdminRate(accessLevel, rate);
    rate = this.getSystemAdminRate(accessLevel, rate);

    return rate;
  }

  public getSystemRoleRateAccessLevel(level: Constant.RoleAccessType): number {
    return level === Constant.Default.RoleAccessType.SystemAdmin
      ? this.rate.SystemAdmin
      : level === Constant.Default.RoleAccessType.Admin
      ? this.rate.Admin
      : level === Constant.Default.RoleAccessType.Manager
      ? this.rate.Manager
      : level === Constant.Default.RoleAccessType.Reception
      ? this.rate.Reception
      : level === Constant.Default.RoleAccessType.Employee
      ? this.rate.Employee
      : 0;
  }

  private getEmployeeRate(accessLevel: IRoleAccessLevel, currentRate: number): number {
    return accessLevel.isEmployee ? this.rate.Employee : currentRate;
  }

  private getReceptionRate(accessLevel: IRoleAccessLevel, currentRate: number): number {
    return accessLevel.isReception ? this.rate.Reception : currentRate;
  }

  private getManagerRate(accessLevel: IRoleAccessLevel, currentRate: number): number {
    return accessLevel.isManager ? this.rate.Manager : currentRate;
  }

  private getAdminRate(accessLevel: IRoleAccessLevel, currentRate: number): number {
    return accessLevel.isAdmin ? this.rate.Admin : currentRate;
  }

  private getSystemAdminRate(accessLevel: IRoleAccessLevel, currentRate: number): number {
    return accessLevel.isSystemAdmin ? this.rate.SystemAdmin : currentRate;
  }
}
