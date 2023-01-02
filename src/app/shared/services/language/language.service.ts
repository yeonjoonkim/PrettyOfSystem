import { LanguagePackageService } from './../language-package/language-package.service';
import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { SystemLanguageRepositoryService } from './../../../firebase/system-repository/language/system-language-repository.service';
import { ITextTransformObject, TextTransformService } from '../text-transform/text-transform.service';
import { ILanguageSelection, ILanguageKey, ILanguageTranslateResult, ILanguageTransformKeyPairValue } from './../../../interface/system/language/language.interface';

@Injectable({
  providedIn: 'root',
})

export class LanguageService{
  public currentLanguage: string = '';
  public changeLanguageAction = new EventEmitter<string>();
  public languageSelectionKey!: Observable<ILanguageKey[]>;
  public languageSelection!: Observable<ILanguageSelection[]>;


  constructor( private textTransform: TextTransformService,
    private storage: StorageService, private systemLanguageRepository: SystemLanguageRepositoryService,
    private languagePackage: LanguagePackageService
    ) {
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

  public async getDefaultLanguageSelection(){
    let selection = await firstValueFrom(this.languageSelection);
    return selection.filter(lang => lang.isDefault)[0];
  }

  public async getDefaultKeyPairValueList(){
    let defaultLanguage = await this.getDefaultLanguageSelection();
    let key = await this.getLanguageSelectionKey();
    let keyPairValueList: ILanguageTransformKeyPairValue[] = this.languagePackage.getKeyPairValue(key.used, defaultLanguage.package);
    return keyPairValueList;
  }

  public async getSelectedLanguageKeyPairValueList(selectedLangCode: string){
    let selectedLanguage = await this.getSelectedLanguageSelection(selectedLangCode);
    let key = await this.getLanguageSelectionKey();
    let keyPairValueList: ILanguageTransformKeyPairValue[] = this.languagePackage.getKeyPairValue(key.used, selectedLanguage.package);
    return keyPairValueList;
  }

  public async getSelectedLanguageSelection(selectedLangCode: string){
    let selection = await firstValueFrom(this.languageSelection);
    return selection.filter(lang => lang.code === selectedLangCode)[0];
  }

  public async getLanguageSelection(){
    return await firstValueFrom(this.languageSelection);
  }

  public async getAllLanguageTranslateCriteria(){
    let selections = await this.getLanguageSelection();
    let languageCodeList = selections.map(language => language.code.toLowerCase());
    let languageNameList = selections.map(language => language.name);

    return {code: languageCodeList, name: languageNameList, isTitle: false};
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
    let objectValue = this.languagePackage.getValue(path, currentLanguage?.package);

    return (typeof objectValue === 'string') ? objectValue : key;
  }

  public async updateLanguagePackage(translated: ILanguageTranslateResult, keyValue: string){
    await this.updatePackage(translated, keyValue);
    await this.updateLanguageKey(keyValue);
  }

  public async deleteKeyPairValue(selectedKey: string){
    await this.deletePackageKeyValue(selectedKey);
    await this.deleteUsedKey(selectedKey);
  }

  /** Update Transform value in db */
  private async updatePackage(translated: ILanguageTranslateResult, keyValue: string){
    let languages = await this.getLanguageSelection();

    languages.forEach(
      async language => {
        let languageCode = language.code.toLowerCase();
        for(let translatedLanguageCode in translated){
          if(languageCode === translatedLanguageCode){
            let keyPairValue: ILanguageTransformKeyPairValue = {key: keyValue, value: translated[translatedLanguageCode]}
            language.package = this.languagePackage.editKeyValuePackage(language.package, keyPairValue);
            await this.systemLanguageRepository.updateLanguageSelection(language);
          }
        }
      });
  }


  public async editSelectedPackage(selectedLanguageCode: string, keyPairValue: ILanguageTransformKeyPairValue){
    let language = (await this.getLanguageSelection()).filter(lang => lang.code === selectedLanguageCode)[0];
    language.package = this.languagePackage.editKeyValuePackage(language.package, keyPairValue);
    await this.systemLanguageRepository.updateLanguageSelection(language);
  }

  /** Update Transform language selection key in db */
  private async updateLanguageKey(newKeyValue: string){
    let key = await this.getLanguageSelectionKey();
    key.used.push(newKeyValue);
    key.used.sort();
    await this.systemLanguageRepository.updateLanguageKey(key);
  }

  private async deleteUsedKey(usedKeyValue: string){
    let key = await this.getLanguageSelectionKey();
    let index = key.used.indexOf(usedKeyValue);
    key.used.splice(index, 1);
    key.used.sort();
    await this.systemLanguageRepository.updateLanguageKey(key);
  }

  private async deletePackageKeyValue(key: string){
    let selections = await this.getLanguageSelection();
    let usedKey = await this.getLanguageSelectionKey();
    let isUsed = usedKey.used.includes(key)

    if(isUsed){
      selections.forEach(
        async selection => {
          selection.package = this.languagePackage.deleteKeyValuePackage(selection.package, key);
          this.systemLanguageRepository.updateLanguageSelection(selection);
      });
    }
  }




}
