import { LanguagePackageService } from './../language-package/language-package.service';
import { Injectable, EventEmitter} from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { SystemLanguageRepositoryService } from './../../../firebase/system-repository/language/system-language-repository.service';
import { TextTransformService } from '../text-transform/text-transform.service';
import { ILanguageSelection, ILanguageKey, ILanguageTranslateResult, ILanguageTransformKeyPairValue, ILanguageTranslatedCriteria, ILanguageTranslateItem, IAddLanguageTransformSaveCommand } from './../../../interface/system/language/language.interface';
import { ToastService } from '../toast/toast.service';
import getUserLocale from 'get-user-locale';

const localeOption = {
    useFallbackLocale: false,
    fallbackLocale: 'en-US',
};

const currentLocale = getUserLocale(localeOption) === null ? 'en' : getUserLocale(localeOption);


@Injectable({
  providedIn: 'root',
})

export class LanguageService{
  public deafultLanguageCode: string = 'en';
  public currentLanguage: string = '';
  public currentLanguageDescription: string = '';
  public changeLanguageAction = new EventEmitter<string>();
  public languageSelectionKey!: Observable<ILanguageKey[]>;
  public languageSelection!: Observable<ILanguageSelection[]>;


  /** At the start of the build, It will listen to the languageRepo then set the default language to avoid any errors. */
  constructor( private textTransform: TextTransformService, private storage: StorageService,
     private systemLanguageRepository: SystemLanguageRepositoryService, private languagePackage: LanguagePackageService,
     private toast: ToastService) {
      this.subscribeLanguageRepository().then(() => {
        this.setDefaultLanguage();
      });
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
    let keyPairValueList: ILanguageTransformKeyPairValue[] = this.languagePackage.getKeyPairValue(key?.used, selectedLanguage.package);
    return keyPairValueList;
  }


  /** This will set the all language translate criteria list to query the JSON format. */
  public async getAllLanguageTranslateCriteria(): Promise<ILanguageTranslatedCriteria>{
    let selections = await this.getLanguageSelection();
    let languageCodeList = selections.map(language => language.code.toLowerCase());
    let languageNameList = selections.map(language => language.name);

    return {code: languageCodeList, name: languageNameList, isTitle: false};
  }


  /** Language Change Event */
  public async onLanguageChange(): Promise<void> {
    await this.storage.storeCurrentLanguage(this.currentLanguage);
    this.changeLanguageAction.emit(this.currentLanguage);
    await this.getLanguageDescription();
  }

  public async getLanguageDescription(){
    let lang =  await this.getSelectedLanguageSelection(this.currentLanguage)
    console.log(lang.description)
    return lang.description;
  }


  /** Retreive from language transform form key to value based on the current language package.
   * 'example.example.title' --> 'Sample Example'
   */
  public async transform(key: string): Promise<string> {
    let currentLanguage = await this.getSelectedLanguageSelection(this.currentLanguage);
    let path = this.textTransform.setLanguageTransformCodeList(key);
    let objectValue = this.languagePackage.getValue(path, currentLanguage?.package);

    return (typeof objectValue === 'string') ? objectValue : key;
  }


  /** This will validate new Key and Value */
  public async validateNewKeyPairValue(keyPairValue: ILanguageTransformKeyPairValue){
    let key: ILanguageKey = await this.getLanguageSelectionKey();
    let validated: IAddLanguageTransformSaveCommand  = {
      hasValue: keyPairValue.value.length > 0,
      isKeyNotExisted: !key.used.includes(keyPairValue.key.toLowerCase()),
      isTransformKeyValueFormat: this.textTransform.setLanguageTransformCodeList(keyPairValue.key.toLowerCase()).length === 3
    };

    if(!validated.isTransformKeyValueFormat){
      let error = await this.transform('message.error.transformkeyvalue');
      await this.toast.presentError(error);
    }
    else if(!validated.isKeyNotExisted){
      let error = await this.transform('message.error.transformsamekeyvalue');
      await this.toast.presentError(error);
    }
    else if(!validated.hasValue){
      let error = await this.transform('message.error.transformdescription');
      await this.toast.presentError(error);
    }

    return validated;
  }


  /**Update all language package with new translated value and key value. */
  public async editLanguagePackage(result: ILanguageTranslateItem, keyValue: string): Promise<void> {
    if(!result.isEmpty){
      await this.updateLanguagePackage(result.translated, keyValue);
      await this.updateLanguageKey(keyValue);
    }else{
      let errorMsg = await this.transform('message.error.unsaved');
      await this.toast.presentError(errorMsg);
    }
  }


  /**Delete the key value */
  public async deleteKeyPairValue(selectedKey: string): Promise<void> {
    await this.deletePackageKeyValue(selectedKey);
    await this.deleteUsedKey(selectedKey);
  }

  public async deleteKeyPairValueList(selectedDeleteKeyList: string[]): Promise<void>{
    let selections = await this.getLanguageSelection();
    let usedKey = await this.getLanguageSelectionKey();
    usedKey.used = usedKey.used.filter((element) => !selectedDeleteKeyList.includes(element));

    selections.forEach(
      async selection => {
        selectedDeleteKeyList.forEach(key => {
          selection.package = this.languagePackage.deleteKeyValuePackage(selection.package, key);
        });
        await this.systemLanguageRepository.updateLanguageSelection(selection);
      });

      await this.systemLanguageRepository.updateLanguageKey(usedKey);
  }

  public getDefaultLanguageDescription(result: ILanguageTranslateResult){
    let description = '';
    for(let key in result){
      if(key === this.deafultLanguageCode){
        description = result[key];
      }
    }

    return description;
  }


  /** Update Transform value in db */
  private async updateLanguagePackage(translated: ILanguageTranslateResult, keyValue: string): Promise<void>{
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


  /** This will retreive all list of language selection.*/
  private async getLanguageSelection(): Promise<ILanguageSelection[]>{
    return await firstValueFrom(this.languageSelection);
  }


  /** Update Transform language selection key in db */
  private async updateLanguageKey(newKeyValue: string): Promise<void>{
    let key = await this.getLanguageSelectionKey();
    if(!key.used.includes(newKeyValue)){
      key.used.push(newKeyValue);
      key.used.sort();
      await this.systemLanguageRepository.updateLanguageKey(key);
    }
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


  //** TODO: If Language Selection has added, please specified the language code */
  private async setCurrentLanguage(){
    let isKorean = currentLocale?.includes('ko');
    let isJapanese = currentLocale?.includes('ja');
    let isChinese = currentLocale?.includes('zh');

    if(isKorean){
      this.currentLanguage = 'ko';
      await this.storage.storeCurrentLanguage('ko');
    }
    else if(isChinese){
      this.currentLanguage = 'zh';
      await this.storage.storeCurrentLanguage('zh');
    }
    else if(isJapanese){
      this.currentLanguage = 'ja';
      await this.storage.storeCurrentLanguage('ja');
    }
    else{
      this.currentLanguage = 'en';
      await this.storage.storeCurrentLanguage('en');
    }
  }


  /** This will retreive the default language selection */
  private async getDefaultLanguageSelection(): Promise<ILanguageSelection>{
    let selection = await firstValueFrom(this.languageSelection);
    return selection.filter(lang => lang.isDefault)[0];
  }


  /** This will retreive selected language selection by language code */
  private async getSelectedLanguageSelection(selectedLangCode: string): Promise<ILanguageSelection>{
    let selection = await firstValueFrom(this.languageSelection);
    return selection.filter(lang => lang.code === selectedLangCode)[0];
  }


  /** Retreive used languageSelection package keys */
  private async getLanguageSelectionKey(): Promise<ILanguageKey>{
    let key = await firstValueFrom(this.languageSelectionKey);
    return key[0];
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
        await this.setCurrentLanguage();
      }
    }

}
