import { LanguageService } from 'src/app/shared/services/language/language.service';
import { Injectable } from '@angular/core';
import { AlertOptions, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DeleteConfirmationAlert {

  constructor(private language: LanguageService, private alertCtrl: AlertController) {}

  public async getdeleteConfirmation(selectedName: string){
    let confirmationAlert = await this.setConfirmationDeleteAlert(selectedName);
    await confirmationAlert.present();
    let confirmation = await confirmationAlert.onWillDismiss();

    return confirmation?.role === 'delete';
  }

  private async setConfirmationDeleteAlert(selectedName: string){
    let name = await this.language.transform(selectedName);
    let deleteMsg = await this.language.transform('message.header.delete');
    let header = name + " - " + deleteMsg;
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
