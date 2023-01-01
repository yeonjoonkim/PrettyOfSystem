import { ToastService } from './../../shared/services/toast/toast.service';
import { LoadingService } from './../../shared/services/loading/loading.service';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ILanguageKey, ILanguageTransform } from './../../interface/system/language/language.interface';
import { LanguageService } from 'src/app/shared/services/language/language.service';
import { LanguageTranslateService } from './../../shared/services/language-translate/language-translate.service';
import { TextTransformService } from './../../shared/services/text-transform/text-transform.service';


@Component({
  selector: 'app-system',
  templateUrl: './system.page.html',
  styleUrls: ['./system.page.scss'],
})

export class SystemPage implements OnInit {
  public isDevelopment: boolean = false;
  public languageTransform: ILanguageTransform = {
    key: '',
    description: '',
    isTitle: true
  }

  constructor(public language: LanguageService, private popOverCtrl: PopoverController, private langugeTranslate: LanguageTranslateService, private textTransform: TextTransformService, private loading: LoadingService, private toast: ToastService) {
  }

  ngOnInit() {
  }

  async onClickSave(){
    let key: ILanguageKey = await this.language.getLanguageSelectionKey();
    let titleFormat =  this.textTransform.getSentenceFormat(this.languageTransform.description);
    let sentenceFormat =  this.textTransform.getTitleFormat(this.languageTransform.description);
    let selectedFormat = this.languageTransform.isTitle ? titleFormat : sentenceFormat;
    let isTransformKeyValue = this.textTransform.setLanguageTransformCodeList(this.languageTransform.key.toLowerCase()).length === 3;
    let hasKeyValue = key.used.includes(this.languageTransform.key.toLowerCase());

    if(selectedFormat && isTransformKeyValue && !hasKeyValue){
      try{
        let loading = await this.language.getLanguageTransformValue('loading.name.translating');
        this.loading.show(loading);
        let translated = await this.langugeTranslate.getTranslatedSentenceAllLanguages(selectedFormat);
        let sccuess = await this.language.getLanguageTransformValue('message.success.save');
        translated = this.languageTransform.isTitle ? this.textTransform.getTranslatedTitleFormat(translated) : this.textTransform.getTranslatedDescrptionFormat(translated);
        await this.loading.dismiss();
        await this.language.updateTransformValue(translated, this.languageTransform.key.toLowerCase());
        await this.language.updateLanguageKey(key, this.languageTransform.key.toLowerCase());
        await this.toast.present(sccuess);
      }
      catch(err: any){
        await this.toast.presentError(err?.message);
      }
    }else{
      if(!isTransformKeyValue){
        let error = await this.language.getLanguageTransformValue('message.error.transformkeyvalue');
        await this.toast.presentError(error);
      }
      else if(hasKeyValue){
        let error = await this.language.getLanguageTransformValue('message.error.transformsamekeyvalue');
        await this.toast.presentError(error);
      }
      else if(!selectedFormat){
        let error = await this.language.getLanguageTransformValue('message.error.transformdescription');
        await this.toast.presentError(error);
      }
    }
  }

}
