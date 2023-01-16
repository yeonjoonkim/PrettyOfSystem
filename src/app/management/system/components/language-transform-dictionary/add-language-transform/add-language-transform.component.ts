import { LanguageService } from 'src/app/shared/services/language/language.service';
import { Component, OnInit } from '@angular/core';
import { IAddLanguageTransformSaveCommand, ILanguageKey, ILanguageTranslateItem, ILanguageTransformKeyPairValue } from 'src/app/interface/system/language/language.interface';
import { LanguageTranslateService } from 'src/app/shared/services/language-translate/language-translate.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'add-language-transform',
  templateUrl: './add-language-transform.component.html',
  styleUrls: ['./add-language-transform.component.scss'],
})

export class AddLanguageTransformComponent implements OnInit {
  private isSaved: boolean = false;
  public languageTransform: ILanguageTransformKeyPairValue = {
    key: '',
    value: ''
  }

  constructor(public language: LanguageService, private langugeTranslate: LanguageTranslateService,
    private actionSheetCtrl: ActionSheetController, private toast: ToastService, private modalCtrl: ModalController) { }

  ngOnInit() {}


  /** This will close the this component as a modal*/
  public async dismissAddLanguage(): Promise<void>{
    await this.modalCtrl.dismiss({key: this.languageTransform.key, isSaved: this.isSaved});
  }


  /**This will start, when user click save button */
  public async onClickSaveButton(): Promise<void>{
    let validated: IAddLanguageTransformSaveCommand = await this.language.validateNewKeyPairValue(this.languageTransform);

    if(validated.hasValue && validated.isKeyNotExisted && validated.isTransformKeyValueFormat){
      let selectionFormat =  await this.openFormatSelectionSheet();
      if(!selectionFormat?.data?.isCancel && selectionFormat?.data !== undefined){
        let translateCriteria = await this.language.getAllLanguageTranslateCriteria();
        translateCriteria.isTitle = selectionFormat.data.isTitle;
        let result = await this.langugeTranslate.getTranslatedLanguagePackage(this.languageTransform.value, translateCriteria);
        await this.updateLanguagePackage(result);
      }
    }
    else{
      await this.sendErrorToast(validated);
    }
  }


  /**This will return format action */
  private async openFormatSelectionSheet(){
    let formatSelectionHeader = await this.language.transform('transform.name.formatselectionheader');
    let descriptionFormat = await this.language.transform('transform.name.descriptionformat');
    let titleFormat = await this.language.transform('transform.name.titleFormat');
    let cancel = await this.language.transform('button.name.cancel');
    let formatSelection = await this.actionSheetCtrl.create({
      header: formatSelectionHeader,
      buttons:[
        {text: descriptionFormat, data: { isTitle: false, isCancel: false}},
        {text: titleFormat, data: { isTitle: true, isCancel: false}},
        {text: cancel, data: { isTitle: false, isCancel: true}}
      ]
    });

    await formatSelection.present();
    let result = await formatSelection.onDidDismiss();
    return result;
  }


  /** This will update language package */
  private async updateLanguagePackage(result: ILanguageTranslateItem): Promise<void>{
    if(!result.isEmpty){
      let sccuess = await this.language.transform('message.success.save');
      await this.language.editLanguagePackage(result, this.languageTransform.key.toLowerCase());
      await this.toast.present(sccuess);
      this.isSaved = true;
      this.dismissAddLanguage();
    }
    else{
      let errorMsg = await this.language.transform('message.error.unsaved');
      await this.toast.presentError(errorMsg);
    }
  }


  /** Send Error Notifciation */
  private async sendErrorToast(validated: IAddLanguageTransformSaveCommand): Promise<void>{
    if(!validated.isTransformKeyValueFormat){
      let error = await this.language.transform('message.error.transformkeyvalue');
      await this.toast.presentError(error);
    }
    else if(!validated.isKeyNotExisted){
      let error = await this.language.transform('message.error.transformsamekeyvalue');
      await this.toast.presentError(error);
    }
    else if(!validated.hasValue){
      let error = await this.language.transform('message.error.transformdescription');
      await this.toast.presentError(error);
    }
  }
}
