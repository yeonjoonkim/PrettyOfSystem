import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { cloneDeep } from 'lodash-es';
import { ShopLanguagePackageComponent } from 'src/app/component/shop/shop-language-package/shop-language-package.component';
import { ShopPackageComponent } from 'src/app/component/shop/shop-package-management/shop-package/shop-package.component';
import {
  IFormHeaderModalProp,
  ShopLanguagePackageModalProp,
  ShopPackageModalDocumentProp,
} from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';

@Injectable({
  providedIn: 'root',
})
export class ShopPackageModalService {
  constructor(
    private _modal: ModalController,
    private _formCtrl: FormControllerService
  ) {}

  public async presentNewPackage(prop: ShopPackageModalDocumentProp) {
    const copiedProp = cloneDeep(prop);
    let form: IFormHeaderModalProp = this._formCtrl.setCreateFormHeaderModalProp();
    form.headerTitle = 'label.title.newpackage';
    const modal = await this._modal.create({
      component: ShopPackageComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        prop: copiedProp,
      },
    });
    return modal;
  }

  public async presentEditPackage(prop: ShopPackageModalDocumentProp) {
    const copiedProp = cloneDeep(prop);
    let form: IFormHeaderModalProp = this._formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = prop.package.titleProp;
    const modal = await this._modal.create({
      component: ShopPackageComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        prop: copiedProp,
      },
    });
    return modal;
  }

  public async presentEditLanguagePackage(prop: ShopLanguagePackageModalProp) {
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
