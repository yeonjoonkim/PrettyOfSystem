import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { cloneDeep } from 'lodash-es';
import { ShopCouponComponent } from 'src/app/component/shop/shop-coupon-management/shop-coupon/shop-coupon.component';
import { IFormHeaderModalProp, ShopCouponModalProp } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';

@Injectable({
  providedIn: 'root',
})
export class ShopCouponModalService {
  constructor(
    private _modal: ModalController,
    private _formCtrl: FormControllerService
  ) {}

  public async presentNewCoupon(prop: ShopCouponModalProp) {
    const copiedProp = cloneDeep(prop);
    let form: IFormHeaderModalProp = this._formCtrl.setCreateFormHeaderModalProp();
    form.headerTitle = 'label.title.newcoupon';
    const modal = await this._modal.create({
      component: ShopCouponComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        prop: copiedProp,
      },
    });
    return modal;
  }

  public async presentEditCoupon(prop: ShopCouponModalProp) {
    const copiedProp = cloneDeep(prop);
    let form: IFormHeaderModalProp = this._formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = 'label.title.editcoupon';
    const modal = await this._modal.create({
      component: ShopCouponComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        prop: copiedProp,
      },
    });
    return modal;
  }
}
