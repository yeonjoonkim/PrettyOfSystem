import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShopConfigurationComponent } from 'src/app/component/system/shop/shop-configuration/shop-configuration.component';
import { IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import { ShopConfigurationType } from 'src/app/interface/shop/shop.interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ShopModalService {
  constructor(private _modal: ModalController, private _formCtrl: FormControllerService) {}

  public async presentCreateSystemShopConfiguration() {
    let form: IFormHeaderModalProp = this._formCtrl.setCreateFormHeaderModalProp();
    form.headerTitle = 'label.title.createshopconfig';
    let modal = await this._modal.create({
      component: ShopConfigurationComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: { form: form },
    });

    return modal;
  }

  public async presentReadShopConfiguration(config: ShopConfigurationType) {
    let form: IFormHeaderModalProp = this._formCtrl.setReadFormHeaderModalProp();
    form.headerTitle = config.name;
    let modal = await this._modal.create({
      component: ShopConfigurationComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: cloneDeep(form),
        config: cloneDeep(config),
      },
    });

    await modal.present();
  }

  public async presentEditShopConfiguration(config: ShopConfigurationType) {
    let form: IFormHeaderModalProp = this._formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = config.name;
    let modal = await this._modal.create({
      component: ShopConfigurationComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: cloneDeep(form),
        config: cloneDeep(config),
      },
    });

    return modal;
  }
}
