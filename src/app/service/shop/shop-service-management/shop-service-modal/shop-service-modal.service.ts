import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { cloneDeep } from 'lodash-es';
import { ShopServiceLanguagePackageComponent } from 'src/app/component/shop/shop-service-management/shop-service-language-package/shop-service-language-package.component';
import { ShopServiceComponent } from 'src/app/component/shop/shop-service-management/shop-service/shop-service.component';
import {
  IFormHeaderModalProp,
  ShopServiceModalDocumentProp,
  ShopServiceModalPackageProp,
} from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';

@Injectable({
  providedIn: 'root',
})
export class ShopServiceModalService {
  constructor(
    private _modal: ModalController,
    private _formCtrl: FormControllerService
  ) {}

  public async presentNewService(prop: ShopServiceModalDocumentProp) {
    const copiedProp = cloneDeep(prop);
    let form: IFormHeaderModalProp = this._formCtrl.setCreateFormHeaderModalProp();
    form.headerTitle = 'label.title.newservice';
    const modal = await this._modal.create({
      component: ShopServiceComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        prop: copiedProp,
      },
    });
    return modal;
  }

  public async presentEditService(prop: ShopServiceModalDocumentProp) {
    const copiedProp = cloneDeep(prop);
    let form: IFormHeaderModalProp = this._formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = prop.service.titleProp;
    const modal = await this._modal.create({
      component: ShopServiceComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        prop: copiedProp,
      },
    });
    return modal;
  }

  public async presentEditPackage(prop: ShopServiceModalPackageProp) {
    const copiedProp = cloneDeep(prop);
    let form: IFormHeaderModalProp = this._formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = prop.title;
    const modal = await this._modal.create({
      component: ShopServiceLanguagePackageComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        prop: copiedProp,
      },
    });
    return modal;
  }
}
