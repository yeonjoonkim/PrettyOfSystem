import { IRoleConfiguration } from 'src/app/interface/system/role/role.interface';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { RoleComponent } from 'src/app/management/system/components/role-management/role/role.component';
@Injectable({
  providedIn: 'root'
})
export class RoleModalService {

  constructor(private modalCtrl: ModalController) { }

  /**This will present the Add Role Component as a Modal with modal cssClass */
  public async prsentAddRole(){
    let addRole = await this.modalCtrl.create({component: RoleComponent, cssClass: 'modal'});
    await addRole.present();
  }

  public async presentEditRole(config: IRoleConfiguration){
    let eidtRole = await this.modalCtrl.create({component: RoleComponent, cssClass: 'modal', componentProps: {role: config, editable: true}});
    await eidtRole.present();
  }

  /** This method is to close the opened modal. */
  public async dismissModal(): Promise<void>{
    await this.modalCtrl.dismiss();
  }

}
