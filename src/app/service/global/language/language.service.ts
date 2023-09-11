import { Injectable, EventEmitter } from '@angular/core';
import getUserLocale from 'get-user-locale';
import { PairKeyValueType } from 'src/app/interface/global/global.interface';
import { SystemLanguageManagementService } from './system-language-management/system-language-management.service';
const localeOption = {
  useFallbackLocale: false,
  fallbackLocale: 'en-US',
};

const currentLocale = getUserLocale(localeOption) === null ? 'en' : getUserLocale(localeOption);

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public changeLanguageAction = new EventEmitter<string>();
  public deafultLanguageCode: string = 'en';
  public currentLanguage: string = '';
  public currentLanguageDescription: string = '';
  public userLocale = getUserLocale(localeOption);

  constructor(public management: SystemLanguageManagementService) {}

  /** Language Change Event */
  public async onLanguageChange(): Promise<void> {
    await this.management.storage.storeCurrentLanguage(this.currentLanguage);
    this.changeLanguageAction.emit(this.currentLanguage);
  }

  /** Retreive from language transform form key to value based on the current language package.
   * 'example.example.title' --> 'Sample Example'
   */
  public async transform(key: string): Promise<string> {
    return await this.management.transform(key);
  }

  /** This will validate new Key and Value */
  public async validateNewKeyPairValue(keyPairValue: PairKeyValueType) {
    let result = await this.management.validateKeyPairValue(keyPairValue);
    return result;
  }

  //** TODO: If Language Selection has added, please specified the language code */
  public async setCurrentLanguage() {
    let currentSetting = await this.management.storage.getCurrentLanguage();
    let isKorean = currentLocale?.includes('ko');
    let isJapanese = currentLocale?.includes('ja');
    let isChinese = currentLocale?.includes('zh');
    let result = isKorean ? 'ko' : isChinese ? 'zh-hans' : isJapanese ? 'ja' : 'en';
    currentSetting !== null && typeof currentSetting === 'string' && currentSetting !== undefined
      ? await this.management.storage.storeCurrentLanguage(currentSetting)
      : await this.management.storage.storeCurrentLanguage(result);
  }
}
