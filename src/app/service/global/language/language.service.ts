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
    const currentSetting = await this.management.storage.getCurrentLanguage();
    const locale = currentLocale?.toLowerCase();
    const isKorean = locale?.includes('ko');
    const isJapanese = locale?.includes('ja');
    const isChinese = locale?.includes('zh');
    let isHindi = locale?.includes('hi');
    let isItailan = locale?.includes('it');
    let isSpanish = locale?.includes('es');
    let isFilipino = locale?.includes('ph');
    let isVietnamese = locale?.includes('vi');
    let isIndonesian = locale?.includes('id');
    let isFrench = locale?.includes('fr');
    let result = isKorean
      ? 'ko'
      : isChinese
      ? 'zh-hans'
      : isJapanese
      ? 'ja'
      : isHindi
      ? 'hi_in'
      : isItailan
      ? '	it'
      : isSpanish
      ? 'es'
      : isFilipino
      ? 'tl-ph'
      : isVietnamese
      ? 'vi-vn'
      : isIndonesian
      ? 'id_id'
      : isFrench
      ? 'fr'
      : 'en';

    currentSetting !== null && typeof currentSetting === 'string' && currentSetting !== undefined
      ? await this.management.storage.storeCurrentLanguage(currentSetting)
      : await this.management.storage.storeCurrentLanguage(result);
  }
}
