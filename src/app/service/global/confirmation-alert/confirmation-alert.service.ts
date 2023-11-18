import { LanguageService } from 'src/app/service/global/language/language.service';
import { Injectable } from '@angular/core';
import { AlertOptions, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DeleteConfirmationAlert {
  constructor(
    private _language: LanguageService,
    private _alertCtrl: AlertController
  ) {}

  public async getDeleteConfirmation() {
    let confirmationAlert = await this.setConfirmationDeleteAlert('', false);
    await confirmationAlert.present();
    let confirmation = await confirmationAlert.onWillDismiss();

    return confirmation?.role === 'delete';
  }

  public async getDeleteConfirmationWithName(selectedName: string) {
    let confirmationAlert = await this.setConfirmationDeleteAlert(selectedName, true);
    await confirmationAlert.present();
    let confirmation = await confirmationAlert.onWillDismiss();

    return confirmation?.role === 'delete';
  }

  private async setConfirmationDeleteAlert(selectedName: string, withName: boolean) {
    let name = await this._language.transform(selectedName);
    let deleteMsg = await this._language.transform('confirmation.title.delete');
    let header = withName ? deleteMsg + '- (' + name + ')' : deleteMsg;
    let confirmDeleteAlertCriteria: AlertOptions = {
      header: header,
      buttons: [
        {
          text: await this._language.transform('button.title.delete'),
          role: 'delete',
        },
        {
          text: await this._language.transform('button.title.cancel'),
          role: '',
        },
      ],
    };

    let confirmDeleteAlert = await this._alertCtrl.create(confirmDeleteAlertCriteria);
    return confirmDeleteAlert;
  }

  public async getEditConfirmation() {
    let confirmationAlert = await this.setConfirmationEditAlert('', false);
    await confirmationAlert.present();
    let confirmation = await confirmationAlert.onWillDismiss();

    return confirmation?.role === 'edit';
  }

  public async getEditonfirmationWithName(selectedName: string) {
    let confirmationAlert = await this.setConfirmationEditAlert(selectedName, true);
    await confirmationAlert.present();
    let confirmation = await confirmationAlert.onWillDismiss();

    return confirmation?.role === 'edit';
  }

  private async setConfirmationEditAlert(selectedName: string, withName: boolean) {
    let name = await this._language.transform(selectedName);
    let deleteMsg = await this._language.transform('confirmation.description.edit');
    let header = withName ? name + ' - ' + deleteMsg : deleteMsg;
    let confirmDeleteAlertCriteria: AlertOptions = {
      header: header,
      buttons: [
        {
          text: await this._language.transform('button.title.edit'),
          role: 'edit',
        },
        {
          text: await this._language.transform('button.title.cancel'),
          role: '',
        },
      ],
    };

    let confirmDeleteAlert = await this._alertCtrl.create(confirmDeleteAlertCriteria);
    return confirmDeleteAlert;
  }
}
