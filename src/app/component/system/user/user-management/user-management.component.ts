import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IUser, NameValuePairType, UserManagementCriteria } from 'src/app/interface';
import { UserAdminService } from 'src/app/service/user/user-admin/user-admin.service';
import * as Constant from 'src/app/constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';
import { DeviceWidthService } from 'src/app/service/global/device-width/device-width.service';

@Component({
  selector: 'user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserManagementComponent implements OnInit {
  public criteria: UserManagementCriteria = {
    createShopUserCriteria: [],
    shopFilter: [],
    userGridData: [],
    role: [],
    roleFilter: [],
  };
  public queryData: IUser[] = [];
  public queryShopFilter: NameValuePairType[] = [];
  public query: string = '';
  constructor(
    public device: DeviceWidthService,
    private _userAdmin: UserAdminService,
    private _global: GlobalService
  ) {}

  async ngOnInit() {
    await this.refresh();
    await this.onClickEditUser(this.criteria.userGridData[0]);
  }

  public async onClickCreateSystemAdmin() {
    const modal = await this._userAdmin.modal.presentCreateNewSystemAdmin();
    await modal.present();
    await this.handleModalDismiss(modal);
  }

  public async onClickEditUser(selectedUser: IUser) {
    const modal = await this._userAdmin.modal.presentEditUser(selectedUser, this.criteria);
    await modal.present();
    await this.handleModalDismiss(modal);
  }

  public async refresh() {
    await this._global.loading.show();
    await this.loadingCriteria();
    await this._global.loading.dismiss();
  }

  public onChangeQuery() {
    const queryParam = this.query.toLowerCase().replace(/\s/g, '');
    const querydata = this.criteria.userGridData
      .filter(user => {
        const associatedShopIds: string[] = user.associatedShops.map(s => s.shopId);
        const queryedShopId: string[] = this.queryShopFilter.map(qs => qs.value);
        const shopCompared =
          queryedShopId.length === 0
            ? true
            : queryedShopId.some(id => associatedShopIds.includes(id));
        const nameCompared = [user.firstName, user.lastName]
          .join('')
          .toLowerCase()
          .replace(/\s/g, '')
          .includes(queryParam);
        const phoneNumberCompared = user.phoneNumber.includes(queryParam);
        const emailCompared = user.email.includes(queryParam);

        return (nameCompared || phoneNumberCompared || emailCompared) && shopCompared;
      })
      .sort((a, b) => a.lastName.localeCompare(b.lastName))
      .sort((a, b) => a.firstName.localeCompare(b.firstName));
    this.queryData = querydata;
  }

  private async handleModalDismiss(modal: HTMLIonModalElement) {
    const result = await modal.onDidDismiss();
    if (result?.data === Constant.Default.Refresh) {
      await this.refresh();
    }
  }

  private async loadingCriteria() {
    this.criteria = await this._userAdmin.getUserManagementCriteria();
    this.onChangeQuery();
  }
}
