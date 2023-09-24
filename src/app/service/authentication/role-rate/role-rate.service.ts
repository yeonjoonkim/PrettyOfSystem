import { RoleAccessLevelType } from '../../../interface/system/role/role.interface';
import { Injectable } from '@angular/core';
import * as Constant from '../../../constant/constant';
import { IUserLoginOption } from 'src/app/interface/user/user.interface';
@Injectable({
  providedIn: 'root',
})
export class RoleRateService {
  private readonly _rate = Constant.Default.RoleAccessRateType;

  constructor() {}

  public setLoginOptionByRate(rate: Constant.RoleAccessRateType): IUserLoginOption {
    return Constant.Default.RoleAccessRateType.Reception === rate
      ? { phoneNumber: false, email: true }
      : { phoneNumber: true, email: false };
  }

  public getSystemRoleRateSettingByConfiguration(accessLevel: RoleAccessLevelType): number {
    let rate: number = 0;
    rate = this.getEmployeeRate(accessLevel, rate);
    rate = this.getReceptionRate(accessLevel, rate);
    rate = this.getManagerRate(accessLevel, rate);
    rate = this.getAdminRate(accessLevel, rate);
    rate = this.getSystemAdminRate(accessLevel, rate);

    return rate;
  }

  public getSystemRoleRateAccessLevel(level: Constant.RoleDescriptionType): number {
    return level === Constant.Default.RoleDescriptionType.SystemAdmin
      ? this._rate.SystemAdmin
      : level === Constant.Default.RoleDescriptionType.Admin
      ? this._rate.Admin
      : level === Constant.Default.RoleDescriptionType.Manager
      ? this._rate.Manager
      : level === Constant.Default.RoleDescriptionType.Reception
      ? this._rate.Reception
      : level === Constant.Default.RoleDescriptionType.Employee
      ? this._rate.Employee
      : 0;
  }

  private getEmployeeRate(accessLevel: RoleAccessLevelType, currentRate: number): number {
    return accessLevel.isEmployee ? this._rate.Employee : currentRate;
  }

  private getReceptionRate(accessLevel: RoleAccessLevelType, currentRate: number): number {
    return accessLevel.isReception ? this._rate.Reception : currentRate;
  }

  private getManagerRate(accessLevel: RoleAccessLevelType, currentRate: number): number {
    return accessLevel.isManager ? this._rate.Manager : currentRate;
  }

  private getAdminRate(accessLevel: RoleAccessLevelType, currentRate: number): number {
    return accessLevel.isAdmin ? this._rate.Admin : currentRate;
  }

  private getSystemAdminRate(accessLevel: RoleAccessLevelType, currentRate: number): number {
    return accessLevel.isSystemAdmin ? this._rate.SystemAdmin : currentRate;
  }
}
