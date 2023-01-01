import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { SystemLanguageRepositoryService } from './../../../firebase/system-repository/language/system-language-repository.service';
import { ITextTransformObject, TextTransformService } from '../text-transform/text-transform.service';
import { ILanguageTranslateResult } from '../language-translate/language-translate.service';
import { ILanguageSelection, ILanguageKey } from './../../../interface/system/language/language.interface';

@Injectable({
  providedIn: 'root',
})

export class LanguageService{
  public currentLanguage: string = '';
  public changeLanguageAction = new EventEmitter<string>();
  public languageSelectionKey!: Observable<ILanguageKey[]>;
  public languageSelection!: Observable<ILanguageSelection[]>;


  constructor( private textTransform: TextTransformService, private storage: StorageService, private systemLanguageRepository: SystemLanguageRepositoryService) {
    this.subscribeLanguageRepository().then(() => {
      this.setDefaultLanguage();
    });
  }

  /** Subscribe Language Repository */
  private async subscribeLanguageRepository(){
    this.languageSelection = this.systemLanguageRepository.getLanguageSelectionResult();
    this.languageSelectionKey = this.systemLanguageRepository.getLanguageKeyResult();
  }


  //** This will validate the local storage value then set either default value*/
  private async setDefaultLanguage() {
    await this.storage.create();
    let result = await this.storage.getCurrentLanguage();
    if(result){
      this.currentLanguage = result;
    }
    else{
      this.currentLanguage ='EN';
      await this.storage.storeCurrentLanguage('EN');
    }
  }


  /** Retreive Language Selection Item */
  public async getSelectedLanguageSelection(selectedLangCode: string){
    let selection = await firstValueFrom(this.languageSelection);
    return selection.filter(lang => lang.code === selectedLangCode)[0];
  }


  /** Retreive used languageSelection package keys */
  public async getLanguageSelectionKey(){
    let key = await firstValueFrom(this.languageSelectionKey);
    return key[0];
  }


  /** Language Change Event */
  public async languageChange() {
    console.log(this.currentLanguage)
    await this.storage.storeCurrentLanguage(this.currentLanguage);
    this.changeLanguageAction.emit(this.currentLanguage);
  }


  /** Transform Value */
  public async getLanguageTransformValue(key: string) {
    let path = this.textTransform.setLanguageTransformCodeList(key);
    let currentLanguage = await this.getSelectedLanguageSelection(this.currentLanguage);
    let objectValue = await this.getObjectValue(path, currentLanguage?.package);

    return (typeof objectValue === 'string') ? objectValue : key;
  }

  /** Update Transform value in db */
  public async updateTransformValue(translated: ILanguageTranslateResult, keyValue: string){
    let updatedJapaneseSelection: ILanguageSelection = await this.addNewTransformValue('JP', keyValue, translated.jp);
    let updatedKoreanSelection: ILanguageSelection = await this.addNewTransformValue('KR', keyValue, translated.kr);
    let updatedEnglishSelection: ILanguageSelection = await this.addNewTransformValue('EN', keyValue, translated.en);
    let updatedChineseSelection: ILanguageSelection = await this.addNewTransformValue('CN', keyValue, translated.cn);
    try{
      this.systemLanguageRepository.updateLanguageSelection(updatedChineseSelection);
      this.systemLanguageRepository.updateLanguageSelection(updatedEnglishSelection);
      this.systemLanguageRepository.updateLanguageSelection(updatedKoreanSelection);
      this.systemLanguageRepository.updateLanguageSelection(updatedJapaneseSelection);
    }
    catch(error){
      console.error(error);
    }
  }

  /** Update Transform language selection key in db */
  public async updateLanguageKey(key: ILanguageKey, newKeyValue: string){
    key.used.push(newKeyValue);
    key.used.sort();
    this.systemLanguageRepository.updateLanguageKey(key);
  }

  /** Retreive Language Selection with updated transfrom value */
  private async addNewTransformValue(selectedlanguageCode: string, key: string, value: string){
    let langugeSelection = await this.getSelectedLanguageSelection(selectedlanguageCode);
    let pack: ITextTransformObject =  langugeSelection.package;
    let path = this.textTransform.setLanguageTransformCodeList(key);
    let hasFirstPath = pack[path[0]] !== undefined;
    let hasSecondPath = this.hasSecondPath(pack, path);
    let hasThirdPath = this.hasThirdPath(pack, path);

    if(!hasFirstPath){
      pack[path[0]] = {};
    }

    if(!hasSecondPath){
      let firstPath: any = pack[path[0]];
      firstPath[path[1]] = {};
      pack[path[0]] = firstPath;
    }

    if(!hasThirdPath){
      let firstPath: any = pack[path[0]];
      let secondPath: any = firstPath[path[1]];
      secondPath[path[2]] = value;
      pack[path[0]] = firstPath;
    }

    langugeSelection.package = pack;
    return langugeSelection;
  }

  private hasSecondPath(pack: any, path: string[]){
    let object = pack[path[0]] !== undefined ? pack[path[0]] : {};
    let secondObject = object[path[1]];
    return secondObject !== undefined;
  }

  private hasThirdPath(pack: any, path: string[]){
    let object = pack[path[0]] !== undefined ? pack[path[0]] : {};
    let secondObject = pack[path[1]] !== undefined ? object[path[1]] : {};
    let thirdObject = secondObject[path[2]];

    return thirdObject !== undefined;
  }

  /** Find a Object Key Value from path */
  private getObjectValue(path: string[], obj: {}){
    let selectedValue: any;

    path.forEach((code, index) => {
      if (index === 0) {
        selectedValue = obj;
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

}
