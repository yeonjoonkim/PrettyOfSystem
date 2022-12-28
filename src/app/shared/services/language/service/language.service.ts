import { ILanugagePackageKeyPairValue } from './../interface/language.interface';
import * as englishPackage from '../language-package/en.language';
import * as koreanPackage from '../language-package/kr.language';
import * as chinesePackage from '../language-package/cn.language';
import { Inject, Injectable, EventEmitter } from '@angular/core';
import { languageTrainsformConfigService } from '../../../pipes/language-transform-pipe/language-transform-config.service';
import { StorageService } from '../../storage/storage.service';
import { Storage } from '@ionic/storage';
import {
  ILanguagePackage,
  ILanguagePackageItem,
  ILanguagePackageDescription,
} from '../interface/language.interface';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public changeLanguageAction = new EventEmitter<string>();
  public currentLanguage: string = '';
  private readonly languagePack = [
    { pack: englishPackage.default, code: 'EN' },
    { pack: koreanPackage.default, code: 'KR' },
    { pack: chinesePackage.default, code: 'CN' },
  ];

  constructor(
    @Inject(languageTrainsformConfigService) public languages: any,
    private storage: StorageService,
    private db: Storage
  ) {
    this.db.create().then(() => {
      this.setCurrentLanguage();
    });
  }

  public getLanguageSelection() {
    let selection: Array<ILanguagePackageDescription> = [];
    let languages: ILanguagePackageItem[] = this.languages;

    languages.forEach((lang) => {
      let newSelection: ILanguagePackageDescription = lang.language;
      selection.push(newSelection);
    });

    return selection;
  }

  //Language Change Event
  public async languageChange(lang: string) {
    this.currentLanguage = lang;
    this.changeLanguageAction.emit(lang);
    await this.storage.storeCurrentLanguage(lang);
  }

  //** Transform Value */
  public getTransformValue(uiCode: string) {
    let splitUiCode = uiCode.split('.');
    let currentpack = this.getCurrentLanguagePackage();
    let word = this.getSelectedWord(splitUiCode, currentpack);

    return typeof word === 'string' ? word : uiCode;
  }

  public getLanguageTransformValue(languageCode: string) {
    let selectedPackage: ILanguagePackage =
      this.getSelectedLanguagePackage(languageCode);
    let keyValueList: Array<ILanugagePackageKeyPairValue> =
      this.getLanuagePackageKeyPairValue(selectedPackage);

    return keyValueList;
  }

  private getLanuagePackageKeyPairValue(obj: any) {
    let list: Array<ILanugagePackageKeyPairValue> = [];

    Object.keys(obj).forEach((firstKeyName) => {
      let firstKeyValue = obj[firstKeyName];

      Object.keys(firstKeyValue).forEach((secondKey) => {
        let keyPairName = firstKeyName + '.' + secondKey;
        let keyPairValue = firstKeyValue[secondKey];
        let isStringType = (typeof keyPairValue) === 'string';

        if(isStringType){
          let element = { key: keyPairName, value: keyPairValue };
          list.push(element);
        }else{
          Object.keys(keyPairValue).forEach((thirdKey) => {
            let thirdKeyPairName = firstKeyName + '.' + secondKey + '.' + thirdKey;
            let thridKeyPairValue = keyPairValue[thirdKey];
            let element = {key: thirdKeyPairName, value: thridKeyPairValue};
            list.push(element);
          });
        }
      });
    });

    return list;
  }

  private getSelectedLanguagePackage(languageCode: string) {
    return this.languagePack.filter((pack) => pack.code === languageCode)[0]
      ?.pack;
  }

  //get Current Pack
  private getCurrentLanguagePackage() {
    return this.languagePack.filter(
      (pack) => pack.code === this.currentLanguage
    )[0]?.pack;
  }

  private getSelectedWord(splitedCode: Array<string>, pack: ILanguagePackage) {
    let selectedValue: any;

    splitedCode.forEach((code, index) => {
      if (index === 0) {
        selectedValue = pack;
        for (let key in selectedValue) {
          if (key === code) {
            selectedValue = selectedValue[key];
          }
        }
      } else if (index > 0) {
        for (let key in selectedValue) {
          if (key === code) {
            selectedValue = selectedValue[key];
          }
        }
      }
    });

    return selectedValue;
  }

  //** This will validate the local storage value then set either default value or */
  private setCurrentLanguage() {
    this.storage.getCurrentLanguage().then((result) => {
      if (result) {
        this.currentLanguage = result;
      } else {
        this.storage.storeCurrentLanguage('EN');
      }
    });
  }
}
