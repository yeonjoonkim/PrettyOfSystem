import { Inject, Injectable, EventEmitter } from '@angular/core';
import { ILanguagePackageItem } from '../interface/language.interface';
import { languageTrainsformConfigService } from '../../../pipes/language-transform-pipe/language-transform-config.service';
import { StorageService } from '../../storage/storage.service';
import { IonicUiService } from '../../ui-ionic/service/ui-ionic.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  public changeLanguageAction = new EventEmitter<string>();
  public currentLanguage: string = '';

  constructor(@Inject(languageTrainsformConfigService) public languages: any, public ionic: IonicUiService, private storage: StorageService, private db: Storage) {
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

  getString(languageCode: string){
    return this.languages[
      this.languages
        .map((e: ILanguagePackageItem , i: any) => (e.language.code === this.currentLanguage ? i : null))
        .filter((e: ILanguagePackageItem) => e !== null)[0]
    ]?.file.default[languageCode];
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
