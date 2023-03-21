import { IRoleAccessLevel } from './../../../../interface/system/role/role.interface';
import { IRoleConfiguration } from 'src/app/interface/system/role/role.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleRateService {
  private readonly employeeRate: number = 10;
  private readonly receptionRate: number = 100;
  private readonly managerRate: number = 1000;
  private readonly adminRate: number = 10000;
  private readonly systemAdminRate: number = 100000;

  constructor() { }

  public getSystemRoleRateSettingByConfiguration(accessLevel: IRoleAccessLevel): number{
    let rate: number = 0;
    rate = this.getEmployeeRate(accessLevel, rate);
    rate = this.getReceptionRate(accessLevel, rate);
    rate = this.getManagerRate(accessLevel, rate);
    rate = this.getAdminRate(accessLevel, rate);
    rate = this.getSystemAdminRate(accessLevel, rate);

    return rate;
  }

  public getSystemRoleRateAccessLevel(level: 'systemAdmin'| 'admin' | 'manager' | 'reception' | 'employee'): number{
    return level === 'systemAdmin' ? this.systemAdminRate
    : level === 'admin' ? this.adminRate
    : level === 'manager' ? this.managerRate
    : level === 'reception' ? this.receptionRate
    : level === 'employee' ? this.employeeRate
    : 0;
  }

  private getEmployeeRate(accessLevel: IRoleAccessLevel, currentRate: number): number{
    return accessLevel.isEmployee ? this.employeeRate : currentRate;
  }

  private getReceptionRate(accessLevel: IRoleAccessLevel, currentRate: number): number{
    return accessLevel.isReception ? this.receptionRate : currentRate;
  }

  private getManagerRate(accessLevel: IRoleAccessLevel, currentRate: number): number{
    return accessLevel.isManager ? this.managerRate : currentRate;
  }

  private getAdminRate(accessLevel: IRoleAccessLevel, currentRate: number): number{
    return accessLevel.isAdmin ? this.adminRate : currentRate;
  }

  private getSystemAdminRate(accessLevel: IRoleAccessLevel, currentRate: number): number{
    return accessLevel.isSystemAdmin ? this.systemAdminRate : currentRate;
  }

}
