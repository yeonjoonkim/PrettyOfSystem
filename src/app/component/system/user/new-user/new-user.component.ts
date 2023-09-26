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
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  public pages: NameValuePairType[] = [
    { name: 'label.title.information', value: 'page1' },
    { name: 'label.title.associatedshop', value: 'page2' },
  ];
  public currentPage: NameValuePairType = { name: 'label.title.information', value: 'page1' };
  public roleFilters: NameValuePairType[] = [];
  public shopFilters: NameValuePairType[] = [];
  public form!: IFormHeaderModalProp;
  public user: IUser = this._systemAdmin.defaultUser();
  public validator = {
    phone: false,
    email: false,
    password: false,
    firstName: false,
    lastName: false,
    associatedShop: false,
  };

  private _roles: RoleConfigurationType[] = [];
  private _criteria!: UserManagementCriteria;
  constructor(private _navParams: NavParams, private _systemAdmin: UserAdminService) {
    this.user.id = this._systemAdmin.getNewId();
  }

  async ngOnInit() {
    await this.loadingFromCtrl();
  }

  public onChangeLoginOption() {
    this.validator.password = false;
    this.user.encryptedPassword = '';
    this.handleEnabledSaveBtn();
  }

  public handleEnabledSaveBtn() {
    const fullNameValiator = this.validator.firstName && this.validator.lastName;
    this.validator.associatedShop = this.user.associatedShops.length > 0;
    let enabled =
      this.validator.email &&
      fullNameValiator &&
      this.validator.phone &&
      this.validator.associatedShop;
    if (this.user.loginOption.email) {
      enabled = enabled && this.validator.password;
    }
    this.form.enabledSavebutton = enabled;
  }

  public onChangePasswordValidation() {
    if (!this.validator.password) {
      this.user.encryptedPassword = '';
    }
    this.handleEnabledSaveBtn();
  }

  public setPassword(pwd: string) {
    this.user.encryptedPassword = pwd;
    this.handleEnabledSaveBtn();
  }

  public async dismiss() {
    await this._systemAdmin.modal.dismiss();
  }

  public async onClickCreate() {
    await this._systemAdmin.handleCreate(this.user, false);
  }

  public onPageChange(page: NameValuePairType) {
    this.currentPage = page;
    this.handleEnabledSaveBtn();
  }

  public onChangeAssociatedShopRole(
    selected: NameValuePairType,
    selectedShop: UserAssociatedShopType
  ) {
    const role = this._roles.find(r => r.id === selected.value);
    const shop = this.user.associatedShops.find(s => s.shopId === selectedShop.shopId);
    if (role !== undefined && shop !== undefined) {
      const index = this.user.associatedShops.findIndex(s => s.shopId === selectedShop.shopId);
      this.user.associatedShops[index] = selectedShop;
    }
    this.handleEnabledSaveBtn();
  }

  public async onClickAddAssociatedShopRole(event: any) {
    this.user = await this._systemAdmin.popover.handleAddAssociatedShop(
      event,
      this.user,
      this._criteria
    );
    this.handleEnabledSaveBtn();
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
    this.handleEnabledSaveBtn();
  }

  private async loadingFromCtrl() {
    const form: IFormHeaderModalProp = this._navParams.get(Constant.Default.ComponentMode.Form);
    const _criteria: UserManagementCriteria = this._navParams.get('criteria');
    this.form = form
      ? form
      : {
          readOnly: true,
          headerTitle: '',
          action: Constant.Default.FormAction.Read,
          enabledSavebutton: false,
        };

    if (_criteria !== undefined && _criteria !== null) {
      this._criteria = _criteria;
      this.roleFilters = _criteria.roleFilter;
      this.shopFilters = _criteria.shopFilter;
      this._roles = _criteria.role;
    }
  }
}