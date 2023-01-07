import { AlertController, AlertOptions } from '@ionic/angular';
import { ToastService } from '../../../../../shared/services/toast/toast.service';
import { LoadingService } from '../../../../../shared/services/loading/loading.service';
import { ILanguageTransformKeyPairValue } from 'src/app/interface/system/language/language.interface';
import { Component, Input, OnInit} from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/language.service';

@Component({
  selector: 'language-key-pair-select-option',
  templateUrl: './language-key-pair-select-option.component.html',
  styleUrls: ['./language-key-pair-select-option.component.scss'],
})
export class LanguageKeyPairSelectOptionComponent implements OnInit {
  @Input() keyPairValue!: ILanguageTransformKeyPairValue;
  @Input() languageCode!: string;

  constructor(private language: LanguageService, private loading: LoadingService, private toast: ToastService, private alertCtrl: AlertController) {
  }

  ngOnInit() {}




  /** This will open the setConfirmDeleteAlert then receive the action to fire deleteKeyPairValue() based on role value*/
  public async onClickDelete(){
    let confirmAlert = await this.setConfirmDeleteAlert();
    await confirmAlert.present();
    let action = await confirmAlert.onWillDismiss();

    if(action?.role === 'delete'){
      await this.deleteKeyPairValue();
    }
  }


  /** This will open the editAlert then receive the action to fire editkeyPairValue() based on role value*/
  public async onClickEdit(){
    let editAlert = await this.setEditAlert();
    await editAlert.present();

    let result = await editAlert.onDidDismiss();
    let editedValue = result?.data?.values;

    if(result?.role === 'edit' && editedValue !== undefined){
      this.keyPairValue.value = editedValue[0];
      await this.editKeyPairValue();
    }
  }

  /** This will set the confirmation of delete alert */
  private async setConfirmDeleteAlert(){
    let deleteMsg = await this.language.getLanguageTransformValue('message.header.delete');
    let header = this.keyPairValue.key + " - " + deleteMsg;
    let confirmDeleteAlertCriteria: AlertOptions = {
      header: header,
      buttons: [
        {
          text: await this.language.getLanguageTransformValue('button.name.delete'),
          role: 'delete',
        },
        {
        text: await this.language.getLanguageTransformValue('button.name.cancel'),
        role: '',}
    ]};

    let confirmDeleteAlert = await this.alertCtrl.create(confirmDeleteAlertCriteria);

    return confirmDeleteAlert;
  }


  /**This will fire deletion of key pair value in all language packages and selection list to remove the key value. */
  private async deleteKeyPairValue(){
    let deleteMsg = await this.language.getLanguageTransformValue('loading.name.deleting');
    let sucessfulMsg = await this.language.getLanguageTransformValue('message.success.delete');
    let errorMsg = await this.language.getLanguageTransformValue('message.error.updated');
    await this.loading.show(deleteMsg);

    try{
      await this.language.deleteKeyPairValue(this.keyPairValue.key);
      await this.toast.present(sucessfulMsg);
    }
    catch(e){
      await this.toast.presentError(errorMsg);
      console.error(e);
    }
    await this.loading.dismiss();
  }


  //** This will set the edit alert */
  private async setEditAlert(){
    let header = await this.language.getLanguageTransformValue('menu.name.edit');

    let editedAlertCriteria: AlertOptions = {
      header: this.keyPairValue.key + " " + header + " (" + this.languageCode + ")",
      inputs: [
        {
          placeholder: await this.language.getLanguageTransformValue('transform.edit.placeholder'),
        }
      ],
      buttons: [
        {
          text: await this.language.getLanguageTransformValue('button.name.edit'),
          role: 'edit',
        },
        {
        text: await this.language.getLanguageTransformValue('button.name.cancel'),
        role: '',}
    ]};

    let editAlert = await this.alertCtrl.create(editedAlertCriteria);

    return editAlert;
  }


  /** This will fire the update value in the selected package */
  private async editKeyPairValue(){
    let editMsg = await this.language.getLanguageTransformValue('loading.name.editing');
    let sucessfulMsg = await this.language.getLanguageTransformValue('message.success.edit');
    let errorMsg = await this.language.getLanguageTransformValue('message.error.edit');
    await this.loading.show(editMsg);

    try{
      await this.language.editSelectedPackage(this.languageCode, this.keyPairValue);
      await this.toast.present(sucessfulMsg);
    }
    catch(e){
      await this.toast.presentError(errorMsg);
      console.error(e);
    }
    await this.loading.dismiss();
  }
}
