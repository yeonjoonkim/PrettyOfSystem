import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { cloneDeep } from 'lodash-es';
import { ShopCapacityComponent } from 'src/app/component/system/shop-capacity/shop-capacity/shop-capacity.component';
import { SystemShopCapacityRepositoryService } from 'src/app/firebase/system-repository/system-shop-capacity/system-shop-capacity-repository.service';
import { IFormHeaderModalProp, ShopCapacityType } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';

@Injectable({
  providedIn: 'root',
})
export class SystemShopCapacityModalService {
  constructor(
    private _modal: ModalController,
    private _formCtrl: FormControllerService,
    private _repo: SystemShopCapacityRepositoryService
  ) {}

  public async presentNewCapacity() {
    const build = this._repo.defaultCapacityDocument();
    let form: IFormHeaderModalProp = this._formCtrl.setCreateFormHeaderModalProp();
    form.headerTitle = 'label.title.newcapacity';
    const modal = await this._modal.create({
      component: ShopCapacityComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: cloneDeep(form),
        type: cloneDeep(build),
      },
    });
    return modal;
  }

  public async presentReadCapacity(doc: ShopCapacityType) {
    let form: IFormHeaderModalProp = this._formCtrl.setReadFormHeaderModalProp();
    form.headerTitle = doc.name;
    const modal = await this._modal.create({
      component: ShopCapacityComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: cloneDeep(form),
        type: cloneDeep(doc),
      },
    });
    return modal;
  }

  public async presentEditCapacity(doc: ShopCapacityType) {
    let form: IFormHeaderModalProp = this._formCtrl.setReadFormHeaderModalProp();
    form.headerTitle = doc.name;
    const modal = await this._modal.create({
      component: ShopCapacityComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: form,
        type: doc,
      },
    });
    return modal;
  }
}
