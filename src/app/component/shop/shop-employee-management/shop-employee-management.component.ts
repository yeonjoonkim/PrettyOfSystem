import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import {
  EmployeeManagementEditUserPropType,
  EmployeeManagementRolePropType,
  EmployeeManagementUsageType,
  RoleConfigurationType,
  ShopConfigurationType,
  ShopEmployeeManagementUserType,
  ShopLimitedProgpressBarType,
} from 'src/app/interface';
import { ShopEmployeeManagementService } from 'src/app/service/shop/shop-employee-management/shop-employee-management.service';

@Component({
  selector: 'shop-employee-management',
  templateUrl: './shop-employee-management.component.html',
  styleUrls: ['./shop-employee-management.component.scss'],
})
export class ShopEmployeeManagementComponent implements OnInit, OnDestroy {
  private _onDestroy$ = new Subject<void>();

  public employees: ShopEmployeeManagementUserType[] = [];
  public currentRole: RoleConfigurationType | null = null;
  public usage: EmployeeManagementUsageType = {
    currentActiveUsers: 0,
    currentDeactiveUsers: 0,
    maximumUsers: 0,
  };

  private _isModalOpen!: boolean;
  private _shopConfig!: ShopConfigurationType;
  private _addNewEmployee!: boolean;
  private _roleProp: EmployeeManagementRolePropType = {
    role: [],
    filter: [],
  };
  public progressBar$: Observable<ShopLimitedProgpressBarType> = this._shopEmp.progressBar$.pipe(
    takeUntil(this._onDestroy$)
  );

  constructor(private _shopEmp: ShopEmployeeManagementService) {}

  async ngOnInit() {
    this.shopEmployees();
    this.shopConfig();
    this.shopPlan();
    this.userRoles();
    this.addNewEmployee();
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  private shopEmployees() {
    this._shopEmp.shopEmployees$.pipe(takeUntil(this._onDestroy$)).subscribe(emps => {
      this.employees = emps;
      this.usage.currentActiveUsers = this.employees.filter(emp => emp.active).length;
      this.usage.currentDeactiveUsers = this.employees.filter(emp => !emp.active).length;
    });
  }

  private userRoles() {
    this._shopEmp.availableRoles$.pipe(takeUntil(this._onDestroy$)).subscribe(roles => {
      this._roleProp.role = roles;
    });
    this._shopEmp.availableRoleFilter$.pipe(takeUntil(this._onDestroy$)).subscribe(filter => {
      this._roleProp.filter = filter;
    });
    this._shopEmp.role$.pipe(takeUntil(this._onDestroy$)).subscribe(r => {
      this.currentRole = r;
    });
  }

  private shopConfig() {
    this._shopEmp.shopConfig$.pipe(takeUntil(this._onDestroy$)).subscribe(config => {
      if (config !== null) {
        this._shopConfig = config;
      }
    });
  }

  private shopPlan() {
    this._shopEmp.shopPlan$.pipe(takeUntil(this._onDestroy$)).subscribe(plan => {
      if (plan !== null) {
        this.usage.maximumUsers = plan.limitedUser;
      }
    });
  }
  private addNewEmployee() {
    this._shopEmp.addNewEmployee$.pipe(takeUntil(this._onDestroy$)).subscribe(add => {
      this._addNewEmployee = add;
    });
  }

  public async handleClickCreateUser() {
    if (this._addNewEmployee) {
      const newEmployee = await this._shopEmp.buildNewEmployee();
      if (newEmployee !== null && this._shopConfig !== null && !this._isModalOpen) {
        const modal = await this._shopEmp.modal.presentNewEmployee(
          newEmployee,
          this._roleProp,
          !this._addNewEmployee
        );

        this._isModalOpen = true;
        await modal.present();
        await this.handleModalDismiss(modal);
      }
    } else {
      await this._shopEmp.toastReachedToMaximumError();
    }
  }

  public async handleClickEditUser(param: EmployeeManagementEditUserPropType) {
    const modal = param.isReadOnly
      ? await this._shopEmp.modal.presentReadOnlyEmployee(
          param.employee,
          this._shopConfig,
          !this._addNewEmployee
        )
      : await this._shopEmp.modal.presentEditEmployee(
          param.employee,
          this._roleProp,
          this._shopConfig,
          !this._addNewEmployee
        );

    if (!this._isModalOpen) {
      this._isModalOpen = true;
      await modal.present();
      await this.handleModalDismiss(modal);
    }
  }

  private async handleModalDismiss(modal: HTMLIonModalElement) {
    const dismiss = await modal.onDidDismiss();

    if (dismiss) {
      this._isModalOpen = false;
    }
  }
}
