import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  EmployeeManagementEditUserPropType,
  EmployeeManagementRolePropType,
  EmployeeManagementUsageType,
  RoleConfigurationType,
  ShopConfigurationType,
  ShopEmployeeManagementUserType,
} from 'src/app/interface';
import { ShopEmployeeManagementService } from 'src/app/service/shop/shop-employee-management/shop-employee-management.service';

@Component({
  selector: 'shop-employee-management',
  templateUrl: './shop-employee-management.component.html',
  styleUrls: ['./shop-employee-management.component.scss'],
})
export class ShopEmployeeManagementComponent implements OnInit, OnDestroy {
  private _shopEmployeesSubscription!: Subscription;
  private _shopPlanSubscription!: Subscription;
  private _roleFilterSubscription!: Subscription;
  private _availableRoleSubscription!: Subscription;
  private _currentRoleSubscription!: Subscription;
  private _shopConfigSubscription!: Subscription;
  private _addNewEmployeeSubscription!: Subscription;

  public employees: ShopEmployeeManagementUserType[] = [];
  public currentRole: RoleConfigurationType | null = null;
  public usage: EmployeeManagementUsageType = {
    currentActiveUsers: 0,
    currentDeactiveUsers: 0,
    maximumUsers: 0,
  };

  private _shopConfig!: ShopConfigurationType;
  private _addNewEmployee!: boolean;
  private _roleProp: EmployeeManagementRolePropType = {
    role: [],
    filter: [],
  };

  constructor(private _shopEmp: ShopEmployeeManagementService) {}

  ngOnInit() {
    this.subscribeEmployees();
    this.subscribePlan();
    this.subscribeRoles();
    this.subscribeShopConfig();
    this.subscribeAddNewEmployee();
  }

  ngOnDestroy() {
    this._shopEmployeesSubscription?.unsubscribe();
    this._shopPlanSubscription?.unsubscribe();
    this._availableRoleSubscription?.unsubscribe();
    this._roleFilterSubscription?.unsubscribe();
    this._currentRoleSubscription?.unsubscribe();
    this._shopConfigSubscription?.unsubscribe();
    this._addNewEmployeeSubscription?.unsubscribe();
  }

  private subscribeEmployees() {
    this._shopEmployeesSubscription = this._shopEmp.shopEmployees$.subscribe(emps => {
      this.employees = emps;
      this.usage.currentActiveUsers = this.employees.filter(emp => emp.active).length;
      this.usage.currentDeactiveUsers = this.employees.filter(emp => !emp.active).length;
    });
  }

  private subscribeRoles() {
    this._availableRoleSubscription = this._shopEmp.availableRoles$.subscribe(roles => {
      this._roleProp.role = roles;
    });
    this._roleFilterSubscription = this._shopEmp.availableRoleFilter$.subscribe(filter => {
      this._roleProp.filter = filter;
    });
    this._currentRoleSubscription = this._shopEmp.role$.subscribe(r => {
      this.currentRole = r;
    });
  }

  private subscribeShopConfig() {
    this._shopConfigSubscription = this._shopEmp.shopConfig$.subscribe(config => {
      if (config !== null) {
        this._shopConfig = config;
      }
    });
  }

  private subscribePlan() {
    this._shopPlanSubscription = this._shopEmp.shopPlan$.subscribe(plan => {
      if (plan !== null) {
        this.usage.maximumUsers = plan.limitedUser;
      }
    });
  }
  private subscribeAddNewEmployee() {
    this._addNewEmployeeSubscription = this._shopEmp.addNewEmployee$.subscribe(add => {
      this._addNewEmployee = add;
    });
  }

  public async handleClickCreateUser() {
    if (this._addNewEmployee) {
      const newEmployee = await this._shopEmp.buildNewEmployee();
      if (newEmployee !== null && this._shopConfig !== null) {
        const modal = await this._shopEmp.modal.presentNewEmployee(newEmployee, this._roleProp);
        await modal.present();
      }
    } else {
      await this._shopEmp.toastReachedToMaximumError();
    }
  }

  public async handleClickEditUser(param: EmployeeManagementEditUserPropType) {
    const modal = param.isReadOnly
      ? await this._shopEmp.modal.presentReadOnlyEmployee(param.employee, this._shopConfig)
      : await this._shopEmp.modal.presentEditEmployee(
          param.employee,
          this._roleProp,
          this._shopConfig
        );

    await modal.present();
  }
}
