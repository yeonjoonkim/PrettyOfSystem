import { AlertController, AlertOptions } from '@ionic/angular';
import { IPairKeyValue } from 'src/app/interface/global/global.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'language-key-pair-select-option',
  templateUrl: './language-key-pair-select-option.component.html',
  styleUrls: ['./language-key-pair-select-option.component.scss'],
})
export class LanguageKeyPairSelectOptionComponent implements OnInit {
  @Input() keyPairValue!: IPairKeyValue;
  @Input() languageCode!: string;
  @Output() keyPairValueChange = new EventEmitter<boolean>();

  constructor(private global: GlobalService, private alertCtrl: AlertController) {}

  ngOnInit() {}

  /** This will open the setConfirmDeleteAlert then receive the action to fire deleteKeyPairValue() based on role value*/
  public async onClickDelete(): Promise<void> {
    let confirmAlert = await this.setConfirmDeleteAlert();
    await confirmAlert.present();
    let action = await confirmAlert.onWillDismiss();

    if (action?.role === 'delete') {
      await this.deleteKeyPairValue();
      this.keyPairValueChange.emit(true);
    }
  }

  /** This will open the editAlert then receive the action to fire editkeyPairValue() based on role value*/
  public async onClickEdit(): Promise<void> {
    let editAlert = await this.setEditAlert();
    await editAlert.present();

    let result = await editAlert.onDidDismiss();
    let editedValue = result?.data?.values;

    if (result?.role === 'edit' && editedValue !== undefined) {
      this.keyPairValue.value = editedValue[0];
      await this.editKeyPairValue();
      this.keyPairValueChange.emit(true);
    }
  }

  /** This will set the confirmation of delete alert */
  private async setConfirmDeleteAlert(): Promise<HTMLIonAlertElement> {
    let deleteMsg = await this.global.language.transform('confirmation.description.delete');
    let header = this.keyPairValue.key + ' - ' + deleteMsg;
    let confirmDeleteAlertCriteria: AlertOptions = {
      header: header,
      buttons: [
        {
          text: await this.global.language.transform('button.title.delete'),
          role: 'delete',
        },
        {
          text: await this.global.language.transform('button.title.cancel'),
          role: '',
        },
      ],
    };

    let confirmDeleteAlert = await this.alertCtrl.create(confirmDeleteAlertCriteria);

    return confirmDeleteAlert;
  }

  /**This will fire deletion of key pair value in all language packages and selection list to remove the key value. */
  private async deleteKeyPairValue(): Promise<void> {
    let sucessfulMsg = await this.global.language.transform('messagesuccess.title.delete');
    let errorMsg = await this.global.language.transform('messagefail.title.updated');
    await this.global.loading.show();

    try {
      await this.global.language.management.deletePackage(this.keyPairValue.key);
      await this.global.toast.present(sucessfulMsg);
    } catch (e) {
      await this.global.toast.presentError(errorMsg);
      console.error(e);
    }
    await this.global.loading.dismiss();
  }

  //** This will set the edit alert */
  private async setEditAlert(): Promise<HTMLIonAlertElement> {
    let header = await this.global.language.transform('label.title.edit');

    let editedAlertCriteria: AlertOptions = {
      header: this.keyPairValue.key + ' ' + header + ' (' + this.languageCode + ')',
      inputs: [
        {
          placeholder: await this.global.language.transform('placeholder.description.entervalue'),
        },
      ],
      buttons: [
        {
          text: await this.global.language.transform('button.title.edit'),
          role: 'edit',
        },
        {
          text: await this.global.language.transform('button.title.cancel'),
          role: '',
        },
      ],
    };

    let editAlert = await this.alertCtrl.create(editedAlertCriteria);

    return editAlert;
  }

  /** This will fire the update value in the selected package */
  private async editKeyPairValue(): Promise<void> {
    let sucessfulMsg = await this.global.language.transform('messagesuccess.title.edited');
    let errorMsg = await this.global.language.transform('messageerror.title.edited');
    await this.global.loading.show();

    try {
      await this.global.language.management.editSelectedPackage(
        this.languageCode,
        this.keyPairValue
      );
      await this.global.toast.present(sucessfulMsg);
    } catch (e) {
      await this.global.toast.presentError(errorMsg);
      console.error(e);
    }
    await this.global.loading.dismiss();
  }
}
