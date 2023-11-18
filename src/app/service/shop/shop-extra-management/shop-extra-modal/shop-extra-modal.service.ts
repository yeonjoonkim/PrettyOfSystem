import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { cloneDeep } from 'lodash-es';
import { ShopExtraComponent } from 'src/app/component/shop/shop-extra-management/shop-extra/shop-extra.component';
import { ShopLanguagePackageComponent } from 'src/app/component/shop/shop-language-package/shop-language-package.component';
import { IFormHeaderModalProp, ShopExtraDocumentType, ShopLanguagePackageModalProp } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';

@Injectable({
  providedIn: 'root',
})
export class ShopExtraModalService {
  constructor(
    private _modal: ModalController,
    private _formCtrl: FormControllerService
  ) {}

  public async presentNewExtra(prop: ShopExtraDocumentType) {
    const copiedProp = cloneDeep(prop);
    let form: IFormHeaderModalProp = this._formCtrl.setCreateFormHeaderModalProp();
    form.headerTitle = 'label.title.newextra';
    const modal = await this._modal.create({
      component: ShopExtraComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        prop: copiedProp,
      },
    });
    return modal;
  }

  public async presentEditExtra(prop: ShopExtraDocumentType) {
    const copiedProp = cloneDeep(prop);
    let form: IFormHeaderModalProp = this._formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = prop.titleProp;
    const modal = await this._modal.create({
      component: ShopExtraComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        prop: copiedProp,
      },
    });
    return modal;
  }

  public async presentEditPackage(prop: ShopLanguagePackageModalProp) {
    const copiedProp = cloneDeep(prop);
    let form: IFormHeaderModalProp = this._formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = prop.title;
    const modal = await this._modal.create({
      component: ShopLanguagePackageComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        prop: copiedProp,
      },
    });
    return modal;
  }
}
