import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { cloneDeep } from 'lodash-es';
import {
  EmployeeManagementEditUserPropType,
  RoleConfigurationType,
  ShopEmployeeManagementUserType,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopEmployeeManagementService } from 'src/app/service/shop/shop-employee-management/shop-employee-management.service';

@Component({
  selector: 'shop-employee-grid',
  templateUrl: './shop-employee-grid.component.html',
  styleUrls: ['./shop-employee-grid.component.scss'],
})
export class ShopEmployeeGridComponent implements OnInit, OnChanges {
  @Output() onEdit = new EventEmitter<EmployeeManagementEditUserPropType>();
  @Output() onCreate = new EventEmitter<boolean>();

  @Input() employees: ShopEmployeeManagementUserType[] = [];
  @Input() role: RoleConfigurationType | null = null;

  public isLoading: boolean = false;

  constructor(
    private _shopEmp: ShopEmployeeManagementService,
    private _global: GlobalService,
    private _loading: LoadingController
  ) {}

  ngOnInit() {}

  async ngOnChanges(changes: SimpleChanges) {
    const employeesChange: SimpleChange | undefined = changes['employees'];
    if (employeesChange?.firstChange) {
      await this._global.loading.show();
    } else {
      const isLoading = await this._loading.getTop();

      if (isLoading !== undefined) {
        await this._loading.dismiss();
      }
    }
  }

  public isAuthorisedRole() {
    if (this.role !== null) {
      return this._shopEmp.isAuthorisedRole(this.role);
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
