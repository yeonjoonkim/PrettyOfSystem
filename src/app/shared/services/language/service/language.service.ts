import { Inject, Injectable, EventEmitter } from '@angular/core';
import { ILanguagePackage, ILanguagePackageItem } from '../interface/language.interface';
import { languageTrainsformConfigService } from '../../../pipes/language-transform-pipe/language-transform-config.service';
import { StorageService } from '../../storage/storage.service';
import { Storage } from '@ionic/storage';
import { type } from 'os';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  public changeLanguageAction = new EventEmitter<string>();
  public currentLanguage: string = '';

  constructor(@Inject(languageTrainsformConfigService) public languages: any, private storage: StorageService, private db: Storage) {
    this.db.create().then(() => {
      this.getCurrentLanguageType();
    });
  }


  getCurrentLanguageType(){
    this.storage.getCurrentLanguage().then(
      result => {
        if(result){
         this.currentLanguage = result;
        }else{
          this.storage.storeCurrentLanguage('EN');
        }
      });
  }

  getString(uiCode: string){
    let splitUiCode = uiCode.split(".");
    let currentpack = this.getCurrentLanguagePackage();
    if(currentpack){
      let word = this.getSelectedWord(splitUiCode, currentpack);
      return (typeof word) === 'string' ? word : " ";
    }
  }

  getSelectedWord(splitedCode: Array<string>, pack: ILanguagePackage){
    let maxIndex: number = splitedCode.length;
    let selectedValue: any;
    splitedCode.forEach((code, index) => {
      let isMaxIndex = maxIndex === index;
      if(index === 0){
        selectedValue = pack;
        for(let key in selectedValue){
          if(key === code){
            selectedValue = selectedValue[key];
          }
        }
      }
      else if(index > 0){
        for(let key in selectedValue){
          if(key === code){
            selectedValue = selectedValue[key];
          }
        }
      }
    });

    return selectedValue;
  }

  getCurrentLanguagePackage(){
    for(let i = 0; i < this.languages.length; i++){
      let pack = this.languages[i]
      let langCode = pack.language?.code;

      if(langCode === this.currentLanguage){
        return pack?.file?.default;
      }
    }
  }

  getPackageString(splitedCode: Array<string>){
    let currentCode: string = '';

    splitedCode.forEach(code => {
      currentCode = code;
      console.log(code)
    });
  }


  getSelectedLanguagePackage(){
    return this.languages?.filter((e: any) => e.language.code === this.currentLanguage)[0];
  }


  async languageChange(lang: string) {
    this.currentLanguage = lang;
    this.changeLanguageAction.emit(lang);
    await this.storage.storeCurrentLanguage(lang);
  }
}
