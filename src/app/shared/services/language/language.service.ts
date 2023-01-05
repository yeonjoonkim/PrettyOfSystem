import { LanguagePackageService } from './../language-package/language-package.service';
import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { SystemLanguageRepositoryService } from './../../../firebase/system-repository/language/system-language-repository.service';
import { ITextTransformObject, TextTransformService } from '../text-transform/text-transform.service';
import { ILanguageSelection, ILanguageKey, ILanguageTranslateResult, ILanguageTransformKeyPairValue, ILanguageTranslatedCriteria } from './../../../interface/system/language/language.interface';

@Injectable({
  providedIn: 'root',
})

export class LanguageService{
  public currentLanguage: string = '';
  public changeLanguageAction = new EventEmitter<string>();
  public languageSelectionKey!: Observable<ILanguageKey[]>;
  public languageSelection!: Observable<ILanguageSelection[]>;

  /** At the start of the build, It will listen to the languageRepo then set the default language to avoid any errors. */
  constructor(private textTransform: TextTransformService, private storage: StorageService,
     private systemLanguageRepository: SystemLanguageRepositoryService,private languagePackage: LanguagePackageService) {
      this.subscribeLanguageRepository().then(() => {
        this.setDefaultLanguage();
      });
  }

  /** Subscribe Language Repository */
  private async subscribeLanguageRepository(): Promise<void>{
    this.languageSelection = this.systemLanguageRepository.getLanguageSelectionResult();
    this.languageSelectionKey = this.systemLanguageRepository.getLanguageKeyResult();
  }


  //** This will validate the local storage value then set either default value*/
  private async setDefaultLanguage(): Promise<void> {
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


  /** This will retreive the default language selection */
  public async getDefaultLanguageSelection(): Promise<ILanguageSelection>{
    let selection = await firstValueFrom(this.languageSelection);
    return selection.filter(lang => lang.isDefault)[0];
  }


  /** This will return list of key pair value in default language*/
  public async getDefaultKeyPairValueList(): Promise<ILanguageTransformKeyPairValue[]>{
    let defaultLanguage = await this.getDefaultLanguageSelection();
    let key = await this.getLanguageSelectionKey();
    let keyPairValueList: ILanguageTransformKeyPairValue[] = this.languagePackage.getKeyPairValue(key.used, defaultLanguage.package);
    return keyPairValueList;
  }


  /** This will retreive the list of key pair value in selected language package. */
  public async getSelectedLanguageKeyPairValueList(selectedLangCode: string): Promise<ILanguageTransformKeyPairValue[]>{
    let selectedLanguage = await this.getSelectedLanguageSelection(selectedLangCode);
    let key = await this.getLanguageSelectionKey();
    let keyPairValueList: ILanguageTransformKeyPairValue[] = this.languagePackage.getKeyPairValue(key.used, selectedLanguage.package);
    return keyPairValueList;
  }


  /** This will retreive selected language selection by language code */
  public async getSelectedLanguageSelection(selectedLangCode: string): Promise<ILanguageSelection>{
    let selection = await firstValueFrom(this.languageSelection);
    return selection.filter(lang => lang.code === selectedLangCode)[0];
  }


  /** This will retreive all list of language selection.*/
  public async getLanguageSelection(): Promise<ILanguageSelection[]>{
    return await firstValueFrom(this.languageSelection);
  }

  /** This will set the all language translate criteria list to query the JSON format. */
  public async getAllLanguageTranslateCriteria(): Promise<ILanguageTranslatedCriteria>{
    let selections = await this.getLanguageSelection();
    let languageCodeList = selections.map(language => language.code.toLowerCase());
    let languageNameList = selections.map(language => language.name);

    return {code: languageCodeList, name: languageNameList, isTitle: false};
  }


  /** Retreive used languageSelection package keys */
  public async getLanguageSelectionKey(): Promise<ILanguageKey>{
    let key = await firstValueFrom(this.languageSelectionKey);
    return key[0];
  }


  /** Language Change Event */
  public async languageChange(): Promise<void> {
    await this.storage.storeCurrentLanguage(this.currentLanguage);
    this.changeLanguageAction.emit(this.currentLanguage);
  }


  /** Retreive from language transform form key to value based on the current language package.
   * 'example.example.title' --> 'Sample Example'
   */
  public async getLanguageTransformValue(key: string): Promise<string> {
    let currentLanguage = await this.getSelectedLanguageSelection(this.currentLanguage);
    let path = this.textTransform.setLanguageTransformCodeList(key);
    let objectValue = this.languagePackage.getValue(path, currentLanguage?.package);

    return (typeof objectValue === 'string') ? objectValue : key;
  }


  /**Update all language package with new translated value and key value. */
  public async updateLanguagePackage(translated: ILanguageTranslateResult, keyValue: string): Promise<void> {
    await this.updatePackage(translated, keyValue);
    await this.updateLanguageKey(keyValue);
  }

  /**Delete the key value */
  public async deleteKeyPairValue(selectedKey: string): Promise<void> {
    await this.deletePackageKeyValue(selectedKey);
    await this.deleteUsedKey(selectedKey);
  }

  /** Update Transform value in db */
  private async updatePackage(translated: ILanguageTranslateResult, keyValue: string): Promise<void>{
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


  /** Edit the key pair value in selected language package. */
  public async editSelectedPackage(selectedLanguageCode: string, keyPairValue: ILanguageTransformKeyPairValue): Promise<void>{
    let language = (await this.getLanguageSelection()).filter(lang => lang.code === selectedLanguageCode)[0];
    language.package = this.languagePackage.editKeyValuePackage(language.package, keyPairValue);
    await this.systemLanguageRepository.updateLanguageSelection(language);
  }


  /** Update Transform language selection key in db */
  private async updateLanguageKey(newKeyValue: string): Promise<void>{
    let key = await this.getLanguageSelectionKey();
    key.used.push(newKeyValue);
    key.used.sort();
    await this.systemLanguageRepository.updateLanguageKey(key);
  }


  /** This will delete the used key value in db */
  private async deleteUsedKey(usedKeyValue: string): Promise<void>{
    let key = await this.getLanguageSelectionKey();

    if(key.used.length > 0){
      let isExistKey = key.used.includes(usedKeyValue);
      let index = key.used.indexOf(usedKeyValue);
      if(isExistKey && index !== -1){
        if (index !== -1) {
          key.used.splice(index, 1);
          key.used.sort();
          await this.systemLanguageRepository.updateLanguageKey(key);
        }
      }
    }

  }


  /** This will delete key pair value in all language selections. */
  private async deletePackageKeyValue(key: string): Promise<void>{
    let selections = await this.getLanguageSelection();
    let usedKey = await this.getLanguageSelectionKey();
    if(usedKey.used.length > 0){
      let isUsed = usedKey.used.includes(key);

      if(isUsed){
        selections.forEach(
          async selection => {
            selection.package = this.languagePackage.deleteKeyValuePackage(selection.package, key);
            await this.systemLanguageRepository.updateLanguageSelection(selection);
          });
        }
      }

    }

}
