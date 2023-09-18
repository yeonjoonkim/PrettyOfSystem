import { RoleConfigurationType } from 'src/app/interface/system/role/role.interface';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';

import { RoleComponent } from 'src/app/component/system/role/role/role.component';
@Injectable({
  providedIn: 'root',
})
export class RoleModalService {
  constructor(private _modalCtrl: ModalController) {}

  /**This will present the Add Role Component as a Modal with modal cssClass */
  public async prsentAddRole() {
    let addRole = await this._modalCtrl.create({ component: RoleComponent });

    return addRole;
  }

  public async presentEditRole(config: RoleConfigurationType) {
    let editRole = await this._modalCtrl.create({
      component: RoleComponent,
      componentProps: { role: config, editable: true },
    });

    return editRole;
  }

  /** This method is to close the opened modal. */
  public async dismissModal(): Promise<void> {
    await this._modalCtrl.dismiss();
  }

  public async dissmissModalWithRefresh() {
    await this._modalCtrl.dismiss('refresh');
  }
}
