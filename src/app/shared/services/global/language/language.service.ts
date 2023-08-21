import { LanguagePackageService } from './../language-package/language-package.service';
import { Injectable, EventEmitter} from '@angular/core';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { SystemLanguageRepositoryService } from '../../../../firebase/system-repository/language/system-language-repository.service';
import { TextTransformService } from '../text-transform/text-transform.service';
import { ILanguageSelection, ILanguageKey, ILanguageTranslateResult, ILanguageTranslatedCriteria, ILanguageTranslateItem, IAddLanguageTransformSaveCommand } from '../../../../interface/system/language/language.interface';
import { ToastService } from '../toast/toast.service';
import storageKey, * as StorageKey from '../../global/storage/storage.key';
import getUserLocale from 'get-user-locale';
import { IPairKeyValue } from 'src/app/interface/global/global.interface';
const localeOption = {
    useFallbackLocale: false,
    fallbackLocale: 'en-US',
};

const currentLocale = getUserLocale(localeOption) === null ? 'en' : getUserLocale(localeOption);


@Injectable({
  providedIn: 'root',
})

export class LanguageService{
  public changeLanguageAction = new EventEmitter<string>();
  public deafultLanguageCode: string = 'en';
  public currentLanguage: string = '';
  public currentLanguageDescription: string = '';
  public userLocale = getUserLocale(localeOption);

  /** At the start of the build, It will listen to the languageRepo then set the default language to avoid any errors. */
  constructor( private textTransform: TextTransformService, private storage: StorageService,
     private systemLanguageRepository: SystemLanguageRepositoryService, private languagePackage: LanguagePackageService,
     private toast: ToastService) {
  }

  /** This will return list of key pair value in default language*/
  public async getDefaultKeyPairValueList(): Promise<IPairKeyValue[]>{
    let defaultLanguage = await this.getDefaultLanguageSelection();
    let key = await this.getLanguageSelectionKey();
    let keyPairValueList: IPairKeyValue[] = this.languagePackage.getKeyPairValue(key.used, defaultLanguage.package);
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
    await this.storage.store(StorageKey.default.language, this.currentLanguage);
    this.changeLanguageAction.emit(this.currentLanguage);
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
  public async validateNewKeyPairValue(keyPairValue: IPairKeyValue){
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
    keyValue = keyValue.toLowerCase().replace(" ", "");
    if(!result.isEmpty){
      await this.updateLanguagePackage(result.translated, keyValue);
      await this.updateLanguageKey(keyValue);
      await this.setLocalLanguageSelection();
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
            let keyPairValue: IPairKeyValue = {key: keyValue, value: translated[translatedLanguageCode]}
            language.package = this.languagePackage.updateKeyValuePackage(language.package, keyPairValue);
            await this.systemLanguageRepository.updateLanguageSelection(language);
          }
        }
      });
  }

  /** Edit the key pair value in selected language package. */
  public async editSelectedPackage(selectedLanguageCode: string, keyPairValue: IPairKeyValue): Promise<void>{
    let language = (await this.getLanguageSelection()).filter(lang => lang.code === selectedLanguageCode)[0];
    language.package = this.languagePackage.updateKeyValuePackage(language.package, keyPairValue);
    await this.systemLanguageRepository.updateLanguageSelection(language);
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
      await this.storage.store(StorageKey.default.language, this.currentLanguage);
    }
    else if(isChinese){
      this.currentLanguage = 'zh-hans';
      this.storage.store(StorageKey.default.language, this.currentLanguage);
    }
    else if(isJapanese){
      this.currentLanguage = 'ja';
      this.storage.store(StorageKey.default.language, this.currentLanguage);
    }
    else{
      this.currentLanguage = 'en';
      this.storage.store(StorageKey.default.language, this.currentLanguage);
    }
  }


  /** This will retreive the default language selection */
  private async getDefaultLanguageSelection(): Promise<ILanguageSelection>{
    let selection = await this.getLanguageSelection();
    return selection.filter(lang => lang.isDefault)[0];
  }

  public async getLanguageSelection(): Promise<ILanguageSelection[]>{
    let isNull: boolean = await this.storage.getLanguageSelection() === null;
    let storage: ILanguageSelection[] = isNull ? await this.getLanguageSelectionResult() : await this.storage.getLanguageSelection();
    if(isNull){
      this.storage.store(storageKey.languageSelection, storage);
    }
    
    return storage;
  }

  public async setLocalLanguageSelection(){
    let selections = await this.getLanguageSelectionResult();
    let selectionKey = await this.getLanguagSelectionKey();
    await this.storage.store(storageKey.languageSelection, selections);
    await this.storage.store(storageKey.languageSelectionKey, selectionKey[0]);
  }

  private async getLanguagSelectionKey(): Promise<ILanguageKey[]>{
    let subscription = this.subscribeLanguageKeyResult();
    return await lastValueFrom(subscription);
  }

  /** This will retreive selected language selection by language code */
  public async getSelectedLanguageSelection(selectedLangCode: string): Promise<ILanguageSelection>{
    let storage: ILanguageSelection[] = await this.getLanguageSelection();
    return storage.filter(lang => lang.code === selectedLangCode)[0];
  }

  /** Retreive used languageSelection package keys */
  public async getLanguageSelectionKey(): Promise<ILanguageKey>{
    let storage: ILanguageKey | null = await this.storage.getLanguageSelectionKey();
    if(storage === null){
      let selectionKey = await this.getLanguagSelectionKey();
      storage = selectionKey[0];
      await this.storage.store(storageKey.languageSelectionKey, storage);
    }

    return storage;
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

    public getLanguageSelectionResult(): Promise<ILanguageSelection[]>{
      return lastValueFrom(this.systemLanguageRepository.getLanguageSelectionResult());
    }

    public subscribeLanguageKeyResult(): Observable<ILanguageKey[]>{
      return this.systemLanguageRepository.getLanguageKeyResult();
    }

    //** This will validate the local storage value then set either default value*/
    public async setDefaultLanguage(): Promise<void> {
      let result = await this.storage.getLanguage();
      if(result){
        this.currentLanguage = result;
      }
      else{
        await this.setCurrentLanguage();
      }
    }

    public async deleteLanguageSelectionKeyList(value: string){
      //let keyList = await this.getLanguageSelectionKey();
      //keyList.used = keyList.used.filter(i => i.startsWith(value));
      //await this.systemLanguageRepository.updateLanguageKey(usedKey);
    }
}
