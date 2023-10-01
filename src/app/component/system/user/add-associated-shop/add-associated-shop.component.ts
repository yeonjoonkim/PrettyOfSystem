import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { cloneDeep } from 'lodash-es';
import {
  IUser,
  NameValuePairType,
  UserAssociatedShopType,
  UserManagementCriteria,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'add-associated-shop',
  templateUrl: './add-associated-shop.component.html',
  styleUrls: ['./add-associated-shop.component.scss'],
})
export class AddAssociatedShopComponent implements OnInit {
  private _criteria!: UserManagementCriteria;
  private _user!: IUser;
  public shopFilters: NameValuePairType[] = [];
  public roleFilters: NameValuePairType[] = [];
  public selectedShop: NameValuePairType = { name: '', value: '' };
  public selectedRole: NameValuePairType = { name: '', value: '' };
  public displayInBooking: boolean = false;
  constructor(
    private _popover: PopoverController,
    private _navParam: NavParams,
    private _global: GlobalService
  ) {}

  async ngOnInit() {
    await this.loadingNavParams();
  }

  private setShopFilterNonExistShops() {
    const currentShopIds: string[] = this._user.associatedShops.map(s => s.shopId);
    const nonAssociatedShops = this._criteria.shopFilter.filter(
      s => !currentShopIds.includes(s.value)
    );
    this.shopFilters = nonAssociatedShops;
  }

  private async validateNoShopToAdd() {
    const noShopToAdd = this.shopFilters.length === 0;
    if (noShopToAdd) {
      const msg = await this._global.language.transform('messagesuccess.description.noshoptoadd');
      await this._global.toast.present(msg);
    } else {
      this.selectedShop = this.shopFilters[0];
    }
  }

  private async dismiss() {
    await this._popover.dismiss({ user: this._user });
  }

  public async onClickAdd() {
    const newShop: UserAssociatedShopType | null = this.newShop();
    if (newShop !== null) {
      await this.handleAdd(newShop);
    } else {
      const err = await this._global.language.transform('messagefail.description.noshoprole');
      await this._global.toast.presentError(err);
    }
  }

  private async handleAdd(newShop: UserAssociatedShopType) {
    this._user.associatedShops.push(newShop);
    this._user.associatedShopIds.push(newShop.shopId);
    this.setCurrentShop(newShop);
    this.setShopFilterNonExistShops();
    await this.validateNoShopToAdd();
    await this.dismiss();
  }

  private setCurrentShop(newShop: UserAssociatedShopType) {
    const currentShop = this._user.associatedShops.find(s => s.shopId === this._user.currentShopId);
    if (currentShop === undefined) {
      this._user.currentShopId = newShop.shopId;
    }
  }

  private newShop(): UserAssociatedShopType | null {
    const role = this._criteria.role.find(r => r.id === this.selectedRole.value);
    const shop = this._criteria.createShopUserCriteria.find(s => s.id === this.selectedShop.value);
    if (role !== undefined && shop !== undefined) {
      const associatedShop: UserAssociatedShopType = {
        shopId: shop.id,
        userId: this._user.id,
        role: role,
        activeFrom: new Date(),
        activeTo: null,
        active: true,
        displayInSystem: this.displayInBooking,
        roster: shop.operatingHours,
      };
      return associatedShop;
    } else {
      return null;
    }
  }

  private async loadingNavParams() {
    const _criteria: UserManagementCriteria | null | undefined = this._navParam.get('criteria');
    const _user: IUser | null | undefined = this._navParam.get('user');

    if (_criteria !== undefined && _criteria !== null && _user !== undefined && _user !== null) {
      const role = _criteria.role.find(r => r.accessLevel.isEmployee);
      const employeeFilter = _criteria.roleFilter.find(r => r.value === role?.id);
      this._criteria = cloneDeep(_criteria);
      this._user = cloneDeep(_user);
      this.setShopFilterNonExistShops();
      await this.validateNoShopToAdd();
      this.roleFilters = this._criteria.roleFilter;
      this.selectedRole =
        employeeFilter !== undefined
          ? employeeFilter
          : _criteria.roleFilter.length > 0
          ? _criteria.roleFilter[0]
          : { name: '', value: '' };
    } else {
      const err = await this._global.language.transform('messagefail.description.load');
      await this._global.toast.presentError(err);
      await this.dismiss();
    }
  }
}
