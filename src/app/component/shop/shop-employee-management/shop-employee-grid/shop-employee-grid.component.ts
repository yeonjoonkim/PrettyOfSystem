import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import {
  EmployeeManagementEditUserPropType,
  RoleConfigurationType,
  ShopEmployeeManagementUserType,
} from 'src/app/interface';
import { ShopEmployeeManagementService } from 'src/app/service/shop/shop-employee-management/shop-employee-management.service';

@Component({
  selector: 'shop-employee-grid',
  templateUrl: './shop-employee-grid.component.html',
  styleUrls: ['./shop-employee-grid.component.scss'],
})
export class ShopEmployeeGridComponent implements OnInit {
  @Output() onEdit = new EventEmitter<EmployeeManagementEditUserPropType>();
  @Output() onCreate = new EventEmitter<boolean>();

  @Input() employees: ShopEmployeeManagementUserType[] = [];
  @Input() role: RoleConfigurationType | null = null;

  public isLoading: boolean = false;

  constructor(private _shopEmp: ShopEmployeeManagementService) {}

  ngOnInit() {}

  public isAuthorisedRole() {
    if (this.role !== null) {
      return this._shopEmp.isManagerAccessLevel(this.role);
    } else {
      return false;
    }
  }

  public onClickCreate() {
    this.onCreate.emit(true);
  }

  public async onClickEdit(selected: ShopEmployeeManagementUserType) {
    const param: EmployeeManagementEditUserPropType = {
      isReadOnly: await this._shopEmp.isHigerRole(selected.role),
      employee: cloneDeep(selected),
    };
    this.onEdit.emit(param);
  }
}
