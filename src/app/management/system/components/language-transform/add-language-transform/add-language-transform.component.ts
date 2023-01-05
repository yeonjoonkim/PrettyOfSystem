import { LanguageService } from 'src/app/shared/services/language/language.service';
import { Component, OnInit } from '@angular/core';
import { ILanguageKey, ILanguageTranslatedCriteria, ILanguageTranslateResult } from 'src/app/interface/system/language/language.interface';
import { LanguageTranslateService } from 'src/app/shared/services/language-translate/language-translate.service';
import { TextTransformService } from 'src/app/shared/services/text-transform/text-transform.service';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

export interface IAddLanguageTransformSaveCommand{
  hasDescriptionValue: boolean;
  isKeyNotExisted: boolean;
  isTransformKeyValueFormat: boolean;
}

@Component({
  selector: 'add-language-transform',
  templateUrl: './add-language-transform.component.html',
  styleUrls: ['./add-language-transform.component.scss'],
})

export class AddLanguageTransformComponent implements OnInit {
  private isSaved: boolean = false;
  public languageTransform = {
    key: '',
    description: ''
  }

  constructor(public language: LanguageService, private langugeTranslate: LanguageTranslateService,
    private actionSheetCtrl: ActionSheetController, private textTransform: TextTransformService,
    private loading: LoadingService, private toast: ToastService, private modalCtrl: ModalController) { }

  ngOnInit() {}

  /** This will close the this component as a modal*/
  public async dismissAddLanguage(){
    await this.modalCtrl.dismiss({key: this.languageTransform.key, isSaved: this.isSaved});
  }


  /**This will start, when user click save button */
  public async onClickSaveButton(){
    let validated: IAddLanguageTransformSaveCommand = await this.vaildatedInputValue();
    if(validated.hasDescriptionValue && validated.isKeyNotExisted && validated.isTransformKeyValueFormat){

      let selectionFormat =  await this.openFormatSelectionSheet();
      if(!selectionFormat?.data?.isCancel){
        let translateCriteria = await this.language.getAllLanguageTranslateCriteria();
        translateCriteria.isTitle = selectionFormat.data.isTitle;
        let translatedResult = await this.getTranslatedDescription(translateCriteria);
        await this.updateLanguagePackage(translatedResult);
      }
    }
    else{
      await this.sendErrorToast(validated);
    }
  }


  /**This will validated the user input */
  private async vaildatedInputValue(){
    let key: ILanguageKey = await this.language.getLanguageSelectionKey();
    let vaildated: IAddLanguageTransformSaveCommand  = {
      hasDescriptionValue: this.languageTransform.description.length > 0,
      isKeyNotExisted: !key.used.includes(this.languageTransform.key.toLowerCase()),
      isTransformKeyValueFormat: this.textTransform.setLanguageTransformCodeList(this.languageTransform.key.toLowerCase()).length === 3
    };

    return vaildated;
  }


  /**This will return format action */
  private async openFormatSelectionSheet(){
    let formatSelectionHeader = await this.language.getLanguageTransformValue('transform.name.formatselectionheader');
    let descriptionFormat = await this.language.getLanguageTransformValue('transform.name.descriptionformat');
    let titleFormat = await this.language.getLanguageTransformValue('transform.name.titleFormat');
    let cancel = await this.language.getLanguageTransformValue('button.name.cancel');
    let formatSelection = await this.actionSheetCtrl.create({
      header: formatSelectionHeader,
      buttons:[
        {text: descriptionFormat, data: { isTitle: false, isCancel: false}},
        {text: titleFormat, data: { isTitle: true, isCancel: false}},
        {text: cancel, data: { isTitle: false, isCancel: true}}
      ]
    })
    await formatSelection.present();
    let result = await formatSelection.onDidDismiss();
    return result;
  }


  /** This will update language package */
  private async updateLanguagePackage(translated: ILanguageTranslateResult){
    if(translated){
      try{
        let sccuess = await this.language.getLanguageTransformValue('message.success.save');
        await this.language.updateLanguagePackage(translated, this.languageTransform.key.toLowerCase());
        await this.toast.present(sccuess);
        this.isSaved = true;
        this.dismissAddLanguage();
      }
      catch(err: any){
        let errorMsg = await this.language.getLanguageTransformValue('message.error.unsave');
        await this.toast.presentError(errorMsg);
        await this.toast.presentError(err?.message);
      }
    }
  }


  /** This will retreive the translated description */
  private async getTranslatedDescription(translatedCriteria: ILanguageTranslatedCriteria){
    let loadingMsg = await this.language.getLanguageTransformValue('loading.name.translating');
    this.loading.show(loadingMsg);
    let translated = await this.langugeTranslate.getTranslatedSentenceAllLanguages(this.languageTransform.description, translatedCriteria);
    this.loading.dismiss();

    return translatedCriteria.isTitle ? this.textTransform.getTranslatedTitleFormat(translated) : this.textTransform.getTranslatedDescrptionFormat(translated);
  }


  /** Send Error Notifciation */
  private async sendErrorToast(validated: IAddLanguageTransformSaveCommand){
    if(!validated.isTransformKeyValueFormat){
      let error = await this.language.getLanguageTransformValue('message.error.transformkeyvalue');
      await this.toast.presentError(error);
    }
    else if(!validated.isKeyNotExisted){
      let error = await this.language.getLanguageTransformValue('message.error.transformsamekeyvalue');
      await this.toast.presentError(error);
    }
    else if(!validated.hasDescriptionValue){
      let error = await this.language.getLanguageTransformValue('message.error.transformdescription');
      await this.toast.presentError(error);
    }
  }

}




