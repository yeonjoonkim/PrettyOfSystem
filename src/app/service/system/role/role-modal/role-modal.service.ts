import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AddRoleComponent } from 'src/app/management/system/components/role-management/add-role/add-role.component';
@Injectable({
  providedIn: 'root'
})
export class RoleModalService {

  constructor(private modalCtrl: ModalController) { }

  /**This will present the Add Role Component as a Modal with modal cssClass */
  public async prsentAddRole(){
    let addRole = await this.modalCtrl.create({component: AddRoleComponent, cssClass: 'modal'});
    await addRole.present();
  }

  /** This method is to close the opened modal. */
  public async dismissModal(): Promise<void>{
    await this.modalCtrl.dismiss();
  }
  
}
