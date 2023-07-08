import { LanguageService } from 'src/app/shared/services/global/language/language.service';
import { Injectable } from '@angular/core';
import { AlertOptions, AlertController } from '@ionic/angular';
import * as Constant from '../global-constant';

@Injectable({
  providedIn: 'root'
})
export class DeleteConfirmationAlert {

  constructor(private language: LanguageService, private alertCtrl: AlertController) {}

  public async getdeleteConfirmation(){
    let confirmationAlert = await this.setConfirmationDeleteAlert('', false);
    await confirmationAlert.present();
    let confirmation = await confirmationAlert.onWillDismiss();

    return confirmation?.role === 'delete';
  }

  public async getdeleteConfirmationWithName(selectedName: string){
    let confirmationAlert = await this.setConfirmationDeleteAlert(selectedName, true);
    await confirmationAlert.present();
    let confirmation = await confirmationAlert.onWillDismiss();

    return confirmation?.role === 'delete'
  }


  private async setConfirmationDeleteAlert(selectedName: string, withName: boolean){
    let name = await this.language.transform(selectedName);
    let deleteMsg = await this.language.transform('message.header.delete');
    let header = withName ? name + " - " + deleteMsg : deleteMsg;
    let confirmDeleteAlertCriteria: AlertOptions = {
      header: header,
      buttons: [
        {
          text: await this.language.transform('button.name.delete'),
          role: 'delete',
        },
        {
        text: await this.language.transform('button.name.cancel'),
        role: '',}
    ]};

    let confirmDeleteAlert = await this.alertCtrl.create(confirmDeleteAlertCriteria);
    return confirmDeleteAlert;
  }
}
