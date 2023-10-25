import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { cloneDeep } from 'lodash-es';
import { ShopEmployeeComponent } from 'src/app/component/shop/shop-employee-management/shop-employee/shop-employee.component';
import {
  EmployeeManagementRolePropType,
  IFormHeaderModalProp,
  ShopConfigurationType,
  ShopEmployeeManagementUserType,
} from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';

@Injectable({
  providedIn: 'root',
})
export class ShopEmployeeAccountModalService {
  constructor(
    private _modal: ModalController,
    private _formCtrl: FormControllerService
  ) {}

  public async presentNewEmployee(
    newEmployee: ShopEmployeeManagementUserType,
    availableRoles: EmployeeManagementRolePropType,
    isReachToMax: boolean
  ) {
    const copiedNewEmployee = cloneDeep(newEmployee);
    const copiedAvailableRole = cloneDeep(availableRoles);
    const copiedIsReachToMax = cloneDeep(isReachToMax);
    let form: IFormHeaderModalProp = this._formCtrl.setCreateFormHeaderModalProp();
    form.headerTitle = 'label.title.newemployee';
    const modal = await this._modal.create({
      component: ShopEmployeeComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        employee: copiedNewEmployee,
        availableRole: copiedAvailableRole,
        isReachToMax: copiedIsReachToMax,
      },
    });

    return modal;
  }

  public async presentReadOnlyEmployee(
    employee: ShopEmployeeManagementUserType,
    shopConfig: ShopConfigurationType,
    isReachToMax: boolean
  ) {
    const copied = cloneDeep(employee);
    const copiedShopConfig = cloneDeep(shopConfig);
    const copiedIsReachToMax = cloneDeep(isReachToMax);
    let form: IFormHeaderModalProp = this._formCtrl.setReadFormHeaderModalProp();
    form.headerTitle = copied.firstName + ' ' + copied.lastName;
    const modal = await this._modal.create({
      component: ShopEmployeeComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        employee: copied,
        shopConfig: copiedShopConfig,
        isReachToMax: copiedIsReachToMax,
      },
    });
    return modal;
  }

  public async presentEditEmployee(
    employee: ShopEmployeeManagementUserType,
    availableRoles: EmployeeManagementRolePropType,
    shopConfig: ShopConfigurationType,
    isReachToMax: boolean
  ) {
    const copiedEmployee = cloneDeep(employee);
    const copiedAvailableRole = cloneDeep(availableRoles);
    const copiedShopConfig = cloneDeep(shopConfig);
    const copiedIsReachToMax = cloneDeep(isReachToMax);
    let form: IFormHeaderModalProp = this._formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = copiedEmployee.firstName + ' ' + copiedEmployee.lastName;
    const modal = await this._modal.create({
      component: ShopEmployeeComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        employee: copiedEmployee,
        availableRole: copiedAvailableRole,
        shopConfig: copiedShopConfig,
        isReachToMax: copiedIsReachToMax,
      },
    });

    return modal;
  }
}
