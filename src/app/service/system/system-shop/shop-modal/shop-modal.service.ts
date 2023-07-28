import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShopConfigurationComponent } from 'src/app/component/system/shop/shop-configuration/shop-configuration.component';
import { IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import { IShopConfiguration } from 'src/app/interface/system/shop/shop.interface';
import { FormControllerService } from 'src/app/shared/services/global/form/form-controller.service';

@Injectable({
  providedIn: 'root'
})
export class ShopModalService {

  constructor(private modal: ModalController, private formCtrl: FormControllerService) { }
  
  
  public async presentCreateSystemShopConfiguration(){
    let form: IFormHeaderModalProp = this.formCtrl.setCreateFormHeaderModalProp();
    form.headerTitle = 'form.header.createshopconfig'
    let modal = await this.modal.create(
      {
        component: ShopConfigurationComponent,
        presentingElement: await this.modal.getTop(),
        componentProps: {form: form}
      });

   await modal.present();
  }

  public async presentReadShopConfiguration(config: IShopConfiguration){
    let form: IFormHeaderModalProp = this.formCtrl.setReadFormHeaderModalProp();
    form.headerTitle = config.name;
    let modal = await this.modal.create(
      {
        component: ShopConfigurationComponent,
        presentingElement: await this.modal.getTop(),
        componentProps: {form: form, config: config}
      });

   await modal.present();
  }

  public async presentEditShopConfiguration(config: IShopConfiguration){
    let form: IFormHeaderModalProp = this.formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = config.name;
    let modal = await this.modal.create(
      {
        component: ShopConfigurationComponent,
        presentingElement: await this.modal.getTop(),
        componentProps: {form: form, config: config}
      });

   await modal.present();
  }


}
