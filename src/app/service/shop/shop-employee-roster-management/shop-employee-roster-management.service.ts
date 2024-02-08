import { Injectable, Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ShopService } from '../shop.service';
import { ShopEmployeeRosterService } from './shop-employee-roster/shop-employee-roster.service';
import { ShopOperatingHoursService } from './shop-operating-hours/shop-operating-hours.service';
import * as Constant from 'src/app/constant/constant';
import { ShopEmployeeManagementUserType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class ShopEmployeeRosterManagementService {
  public operatingHours = inject(ShopOperatingHoursService);
  private _shop = inject(ShopService);
  public roster = inject(ShopEmployeeRosterService);

  //Employees
  private employees = toSignal(this._shop.employees$) as Signal<ShopEmployeeManagementUserType[]>;
  private activeEmployees = computed(() => {
    const employees = this.employees();
    return employees !== undefined ? employees.filter(emp => emp.active) : [];
  });

  public loaded = computed(() => {
    return this.employees() !== undefined;
  });

  public scheduledEmployees = computed(() => {
    return this.activeEmployees().filter(emp => emp.displayInSystem);
  });

  constructor() {}

  public allowEditWorkingStatus(day: Constant.DayType) {
    return this.operatingHours.isWorking(day);
  }
}
