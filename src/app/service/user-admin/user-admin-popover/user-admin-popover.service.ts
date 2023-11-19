import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { cloneDeep } from 'lodash-es';
import { AddAssociatedShopComponent } from 'src/app/component/system/user/add-associated-shop/add-associated-shop.component';
import { IUser, UserManagementCriteria } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class UserAdminPopoverService {
  private _isOpen: boolean = false;
  constructor(private _popover: PopoverController) {}

  public async handleAddAssociatedShop(
    clickEvent: any,
    user: IUser,
    criteria: UserManagementCriteria
  ): Promise<IUser> {
    const userShopIds = user.associatedShops.map(u => u.shopId);
    const shopIds = criteria.shopFilter.map(u => u.value);

    if (!this._isOpen && userShopIds.length !== shopIds.length) {
      this._isOpen = true;
      const popover = await this.createAddAssociatedShop(clickEvent, user, criteria);
      await popover.present();
      const result = await popover.onWillDismiss();
      this._isOpen = false;
      if (result?.data?.user !== undefined && result?.data?.user !== null) {
        return result?.data?.user;
      } else {
        return user;
      }
    } else {
      return user;
    }
  }

  private async createAddAssociatedShop(clickEvent: any, user: IUser, criteria: UserManagementCriteria) {
    const paramUser = cloneDeep(user);
    const paramCriteria = cloneDeep(criteria);
    const popover = await this._popover.create({
      component: AddAssociatedShopComponent,
      translucent: true,
      componentProps: {
        user: paramUser,
        criteria: paramCriteria,
      },
    });
    return popover;
  }
}
