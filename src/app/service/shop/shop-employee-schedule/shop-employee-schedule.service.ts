import { Injectable } from '@angular/core';
import { ShopService } from '../shop.service';
import {
  RoleConfigurationType,
  ShopConfigurationType,
  ShopEmployeeManagementUserType,
  ShopEmployeeScheduleTimeType,
  ShopWorkHoursType,
} from 'src/app/interface';
import { Observable, map, of, switchMap } from 'rxjs';
import { ShopEmployeeManagementService } from '../shop-employee-management/shop-employee-management.service';
import { ShopScheduleTimeService } from './shop-schedule-time/shop-schedule-time.service';
@Injectable({
  providedIn: 'root',
})
export class ShopEmployeeScheduleService {
  public role$!: Observable<RoleConfigurationType | null>;
  public config$!: Observable<ShopConfigurationType | null>;
  public timezone$!: Observable<string | null>;
  public operatingWorkHours$!: Observable<ShopWorkHoursType | null>;
  public employees$!: Observable<ShopEmployeeManagementUserType[]>;
  public scheduledEmployees$!: Observable<ShopEmployeeManagementUserType[]>;
  public scheduledTime$!: Observable<ShopEmployeeScheduleTimeType | null>;

  constructor(
    private _shop: ShopService,
    private _employeeManagement: ShopEmployeeManagementService,
    private _scheduleTime: ShopScheduleTimeService
  ) {
    this.role$ = this._shop.role$;
    this.config$ = this._shop.config$;
    this.timezone$ = this._shop.timezone$;
    this.operatingWorkHours$ = this._shop.operatingWorkHours$;
    this.employees$ = this._shop.employees$;
    this.scheduledEmployeeListener();
    this.scheduledTimeListener();
  }

  private scheduledEmployeeListener() {
    this.scheduledEmployees$ = this.employees$.pipe(
      map(employeeArray => {
        return employeeArray.filter(employee => employee.active && employee.displayInSystem);
      })
    );
  }

  private scheduledTimeListener() {
    this.scheduledTime$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return of(this._scheduleTime.getScheduleTime(config));
        } else {
          return of(null);
        }
      })
    );
  }

  public async update(user: ShopEmployeeManagementUserType) {
    return await this._employeeManagement.updateUser(user);
  }
}
