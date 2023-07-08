import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShopConfigurationComponent } from 'src/app/component/system/shop/shop-configuration/shop-configuration.component';
import { IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import { FormControllerService } from 'src/app/shared/services/global/form/form-controller.service';

@Injectable({
  providedIn: 'root'
})
export class ShopModalService {

  constructor(private modal: ModalController, private formCtrl: FormControllerService) { }


  public async presentCreateSystemShopConfiguration(){
    let form: IFormHeaderModalProp = this.formCtrl.setDefaultFormHeaderModalProp();
    form.headerTitle = 'form.header.createshopconfig'
   let modal = await this.modal.create(
     {
       component: ShopConfigurationComponent,
       presentingElement: await this.modal.getTop(),
       componentProps: {form: form}
     }
     );

   await modal.present();
 }
}
