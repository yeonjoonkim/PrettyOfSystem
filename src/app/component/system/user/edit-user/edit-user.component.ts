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
import { UserService } from 'src/app/service/user/user.service';
import * as Constant from '../../../../constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public form!: IFormHeaderModalProp;
  public user: IUser = this._userService.defaultUser();
  public roleFilters: NameValuePairType[] = [];
  public shopFilters: NameValuePairType[] = [];
  private _paramUser!: IUser;
  private _roles: RoleConfigurationType[] = [];

  constructor(
    private _userService: UserService,
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

  public async dismiss() {
    await this._systemAdmin.modal.dismiss();
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
    this.user = this._paramUser ? this._paramUser : this._userService.defaultUser();
    if (_criteria !== undefined && _criteria !== null) {
      this._roles = _criteria.role;
      this.roleFilters = _criteria.roleFilter;
      this.shopFilters = _criteria.shopFilter;
    }
  }

  public onChangeRole(selected: NameValuePairType, selectedShop: UserAssociatedShopType) {
    const role = this._roles.find(r => r.id === selected.value);
    const shop = this.user.associatedShops.find(s => s.shopId === selectedShop.shopId);
    if (role !== undefined && shop !== undefined) {
      const index = this.user.associatedShops.findIndex(s => s.shopId === selectedShop.shopId);
      this.user.associatedShops[index] = selectedShop;
    }
  }

  public async onClickDeleteAssociatedShop(selectedShop: UserAssociatedShopType) {
    const shop = this.shopFilters.find(s => s.value === selectedShop.shopId);
    if (shop !== undefined) {
      const confirm = await this._global.confirmAlert.getDeleteConfirmationWithName(shop.name);
      if (confirm) {
        this.user.associatedShops = this.user.associatedShops.filter(
          s => s.shopId !== selectedShop.shopId
        );
      }
    }
  }
}
