import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import {
  IFormHeaderModalProp,
  IUser,
  NameValuePairType,
  RoleConfigurationType,
  UserAssociatedShopType,
  UserManagementCriteria,
} from 'src/app/interface';
import { UserAdminService } from 'src/app/service/user/user-admin/user-admin.service';
import * as Constant from '../../../../constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public pages: NameValuePairType[] = [
    { name: 'label.title.information', value: 'page1' },
    { name: 'label.title.associatedshop', value: 'page2' },
  ];
  public currentPage: NameValuePairType = { name: 'label.title.information', value: 'page1' };
  public form!: IFormHeaderModalProp;
  public user: IUser = this._systemAdmin.defaultUser();
  public roleFilters: NameValuePairType[] = [];
  public shopFilters: NameValuePairType[] = [];
  public resetPassword: boolean = false;
  public validator = {
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    password: false,
  };
  private _paramUser!: IUser;
  private _roles: RoleConfigurationType[] = [];
  private _encryptedPassword: string = '';
  private _criteria!: UserManagementCriteria;
  constructor(
    private _navParams: NavParams,
    private _systemAdmin: UserAdminService,
    private _global: GlobalService
  ) {}

  async ngOnInit() {
    await this.loadingFromCtrl();
  }

  public async handleEdit() {
    this.form.readOnly = false;
  }

  public async handleSave() {
    this.user.encryptedPassword =
      this.user.loginOption.email && this.resetPassword
        ? this._encryptedPassword
        : this.user.encryptedPassword;
    await this._systemAdmin.updateUser(this.user);
    await this._global.modal.dismissRefreshAction();
  }

  public async handleDelete() {
    await this._systemAdmin.deleteUser(this.user);
    await this._global.modal.dismissRefreshAction();
  }

  public async dismiss() {
    await this._systemAdmin.modal.dismiss();
  }

  public onPageChange(page: NameValuePairType) {
    this.currentPage = page;
  }

  public onChangeAssociatedShopRole(
    selected: NameValuePairType,
    selectedShop: UserAssociatedShopType
  ) {
    const role = this._roles.find(r => r.id === selected.value);
    const shop = this.user.associatedShops.find(s => s.shopId === selectedShop.shopId);
    const index = this.user.associatedShops.findIndex(s => s.shopId === selectedShop.shopId);
    if (role !== undefined && shop !== undefined) {
      shop.role = role;
      this.user.associatedShops[index] = shop;
    }
  }

  public async onClickAddAssociatedShopRole(event: any) {
    this.user = await this._systemAdmin.popover.handleAddAssociatedShop(
      event,
      this.user,
      this._criteria
    );
  }

  public async onClickDisabledAccount() {
    this.user.disabledAccount = !this.user.disabledAccount;
  }

  public setPassword(pwd: string) {
    this._encryptedPassword = pwd;
  }

  public async onClickResetPassword() {
    this._encryptedPassword = '';
    this.handleEnabledSaveBtn();
  }

  public async handleEnabledSaveBtn() {
    let validation =
      this.validator.firstName &&
      this.validator.lastName &&
      this.validator.phone &&
      this.validator.email;

    if (this.user.loginOption.email) {
      validation = this.resetPassword ? validation && this.validator.password : validation;
      if (!this.validator.password) {
        this._encryptedPassword = '';
      }
    }
    this.form.enabledSavebutton = validation;
  }

  public onClickActiveAssociatedShop(selected: UserAssociatedShopType) {
    const selectedShop = this.user.associatedShops.find(s => s.shopId === selected.shopId);
    const selectedShopIndex = this.user.associatedShops.findIndex(
      s => s.shopId === selected.shopId
    );
    if (selectedShop !== undefined) {
      if (selectedShop.active && this.user.currentShopId.length === 0) {
        this.user.currentShopId = selectedShop.shopId;
      }

      if (!selectedShop.active && this.user.currentShopId === selectedShop.shopId) {
        const activeShop = this.user.associatedShops.filter(
          s => s.active && s.shopId !== selectedShop.shopId
        );
        this.user.currentShopId = activeShop.length > 0 ? activeShop[0].shopId : '';
      }
      if (!selectedShop.active) {
        selectedShop.activeTo = new Date();
        this.user.associatedShops[selectedShopIndex] = selectedShop;
      } else {
        selectedShop.activeTo = null;
        this.user.associatedShops[selectedShopIndex] = selectedShop;
      }
    }
    this.user.disabledAccount = !(this.user.associatedShops.filter(s => s.active).length > 0);
  }

  public async onClickDeleteAssociatedShop(selected: UserAssociatedShopType) {
    const shop = this.shopFilters.find(s => s.value === selected.shopId);
    if (shop !== undefined) {
      this.user = await this._systemAdmin.deleteAssociatedShop(
        this.user,
        selected.shopId,
        shop.name
      );
    }

    this.user.disabledAccount = !(this.user.associatedShops.filter(s => s.active).length > 0);
  }

  private async loadingFromCtrl() {
    const form: IFormHeaderModalProp = this._navParams.get(Constant.Default.ComponentMode.Form);
    const _criteria: UserManagementCriteria = this._navParams.get('criteria');
    this._paramUser = this._navParams.get('config');

    this.form = form
      ? form
      : {
          readOnly: true,
          headerTitle: '',
          action: Constant.Default.FormAction.Read,
          enabledSavebutton: false,
        };
    this.user = this._paramUser ? this._paramUser : this._systemAdmin.defaultUser();

    if (_criteria !== undefined && _criteria !== null) {
      this._criteria = _criteria;
      this.roleFilters = _criteria.roleFilter;
      this.shopFilters = _criteria.shopFilter;
      this._roles = _criteria.role;
    }
  }
}
