import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  EmployeeManagementRolePropType,
  IFormHeaderModalProp,
  NameValuePairType,
  RoleConfigurationType,
  ShopConfigurationType,
  ShopEmployeeManagementUserType,
} from 'src/app/interface';
import { NavParams } from '@ionic/angular';
import * as Constant from 'src/app/constant/constant';
import { cloneDeep } from 'lodash-es';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopEmployeeManagementService } from 'src/app/service/shop/shop-employee-management/shop-employee-management.service';

@Component({
  selector: 'shop-employee',
  templateUrl: './shop-employee.component.html',
  styleUrls: ['./shop-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopEmployeeComponent implements OnInit {
  public form!: IFormHeaderModalProp;
  public availableRoleFilter: NameValuePairType[] = [];
  public selectedRole: NameValuePairType = { name: '', value: '' };
  public employee!: ShopEmployeeManagementUserType;
  public resetPassword: boolean = false;
  public loading = true;
  public shopConfig: ShopConfigurationType | undefined;
  public validator = {
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    password: false,
  };

  private _roles!: RoleConfigurationType[];
  private _encryptedPassword: string = '';

  constructor(
    private _modalCtrl: ModalController,
    private _navParams: NavParams,
    private _global: GlobalService,
    private _shopEmp: ShopEmployeeManagementService
  ) {}
  async ngOnInit() {
    await this.loadingFormCtrl();
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  public async onClickResetPassword() {
    this._encryptedPassword = '';
    this.validator.password = false;
    this.handleEnabledSaveBtn();
  }

  public setPassword(pwd: string) {
    this._encryptedPassword = pwd;
    this.validator.password = true;
    this.handleEnabledSaveBtn();
  }

  public onChangeRole() {
    const selectedRole = this._roles.find(r => r.id === this.selectedRole.value);
    if (selectedRole !== undefined) {
      this.employee.role = selectedRole;
      this.employee.loginOption.email = this.employee.role.accessLevel.isReception;
      this.employee.loginOption.phoneNumber = !this.employee.role.accessLevel.isReception;

      if (this.employee.loginOption.phoneNumber) {
        this._encryptedPassword = '';
        this.validator.password = false;
        this.resetPassword = false;
      }

      if (this.employee.loginOption.email) {
        this.resetPassword = this.employee.encryptedPassword.length === 0;
        this.validator.password = this.employee.encryptedPassword.length > 0;
        this._encryptedPassword = '';
      }
      this.handleEnabledSaveBtn();
    }
  }

  public onChangeActive() {
    if (this.employee.active) {
      this.employee.activeFrom = new Date();
      this.employee.activeTo = null;
    } else {
      this.employee.activeTo = new Date();
    }
    this.handleEnabledSaveBtn();
  }

  public async handleCreate() {
    this.handleEncryptedPassword();
    await this._global.loading.show();
    const result = await this._shopEmp.createNewUser(this.employee);
    await this._global.loading.dismiss();

    if (result) {
      await this.dismiss();
    }
  }

  public async handleEdit() {
    this.form.readOnly = false;
  }

  public async handleSave() {
    try {
      const encryptedPassword = this.handleEncryptedPassword();
      if (encryptedPassword) {
        await this._global.loading.show();
        const result = await this._shopEmp.updateUser(this.employee);
        await this._global.loading.dismiss();

        if (result) {
          await this.dismiss();
        }
      } else {
        await this.presentPasswordError();
        await this._global.loading.dismiss();
      }
    } catch (error) {
      console.error(error);
      await this._global.loading.dismiss();
    }
  }

  public async handleDelete() {
    await this._global.loading.show();
    const result = await this._shopEmp.deleteUser(this.employee);
    await this._global.loading.dismiss();

    if (result) {
      await this.dismiss();
    }
  }

  private handleEncryptedPassword() {
    const isNewAccount = this.form.action === Constant.Default.FormAction.Create;
    if (isNewAccount) {
      this.employee.encryptedPassword = this.employee.loginOption.email
        ? this._encryptedPassword
        : '';
    } else {
      const resetPassword = this.employee.loginOption.email && this.resetPassword;
      this.employee.encryptedPassword = resetPassword
        ? this._encryptedPassword
        : this.employee.loginOption.phoneNumber
        ? ''
        : this.employee.encryptedPassword;
    }

    if (this.employee.loginOption.email) {
      if (!this.employee.encryptedPassword) {
        return false;
      }
    }
    return true;
  }

  public handleEnabledSaveBtn() {
    const isCreate = this.form.action === Constant.Default.FormAction.Create;
    const isEdit = this.form.action === Constant.Default.FormAction.Edit;
    let enabled =
      this.validator.firstName &&
      this.validator.lastName &&
      this.validator.phone &&
      this.validator.email;

    if (this.employee.loginOption.email && isCreate) {
      enabled = enabled && this.validator.password;
    }

    if (this.employee.loginOption.email && isEdit) {
      enabled = this.resetPassword ? enabled && this.validator.password : enabled;
      if (!this.validator.password) {
        this._encryptedPassword = '';
      }
    }
    this.form.enabledSavebutton = enabled;
  }

  private async loadingFormCtrl() {
    const formProp: IFormHeaderModalProp | undefined = this._navParams.get(
      Constant.Default.ComponentMode.Form
    );
    const employeeProp: ShopEmployeeManagementUserType | undefined =
      this._navParams.get('employee');
    const roleProp: EmployeeManagementRolePropType | undefined =
      this._navParams.get('availableRole');
    const shopConfigProp: ShopConfigurationType | undefined = this._navParams.get('shopConfig');
    if (formProp !== undefined && employeeProp !== undefined) {
      this.form = formProp;
      this.employee = cloneDeep(employeeProp);
      this.availableRoleFilter = roleProp !== undefined ? roleProp.filter : [];
      this.selectedRole = { name: this.employee.role.name, value: this.employee.role.id };
      this._roles = roleProp !== undefined ? roleProp.role : [];
      this.shopConfig = shopConfigProp;
      this.loading = false;
    } else {
      await this.dismiss();
    }
  }

  private async presentPasswordError() {
    const msg = await this._global.language.transform('messageerror.description.inputpassword');
    await this._global.toast.presentError(msg);
  }
}
