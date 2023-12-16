import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { SystemLanguageRepositoryService } from 'src/app/firebase/system-repository/language/system-language-repository.service';
import { ILanguageKey, LanguageSelectionType } from 'src/app/interface';
import * as StorageKey from 'src/app/service/global/storage/storage.key';
import { StorageService } from 'src/app/service/global/storage/storage.service';
import getUserLocale from 'get-user-locale';
const localeOption = {
  useFallbackLocale: false,
  fallbackLocale: 'en-US',
};

const currentLocale = getUserLocale(localeOption) === null ? 'en' : getUserLocale(localeOption);

@Injectable({
  providedIn: 'root',
})
export class SystemLanguageStorageService {
  private _hasSelection: boolean = false;
  private _refreshing: boolean = false;
  public currentLanguage!: string;
  public currentSelection!: LanguageSelectionType;
  constructor(
    private _stroage: StorageService,
    private _systemLanguageRepo: SystemLanguageRepositoryService
  ) {}

  public async setDefault(isConnected: boolean) {
    let now: Date = new Date();
    let expiredDate: Date | null = await this._stroage.getLanguageSelectionExpireDateTime();
    let isExpired: boolean = expiredDate !== null ? now > expiredDate : true;
    let selections: null | LanguageSelectionType[] = await this.getSelections();
    let currentLanguage: string | null = await this.getCurrentLanguage();
    let keys: null | ILanguageKey = await this.getKey();
    let refresh: boolean =
      selections === null ||
      expiredDate === null ||
      isExpired ||
      keys === null ||
      selections?.length === 0 ||
      currentLanguage === null;

    if (refresh && isConnected) {
      await this.refresh();
      await this._stroage.storeExpiredDateTime();
      console.log('language refreshed');
    }
    this.currentLanguage = await this.getCurrentLanguage();
    this.currentSelection = await this.getCurrentSelection();
  }

  public async refresh() {
    const selections: LanguageSelectionType[] = await this.getLanguageSelections();
    const key: ILanguageKey = await this.getLanguageKey();
    const language = await this.getCurrentLanguage();
    await this._stroage.store(StorageKey.default.languageSelection, selections);
    await this._stroage.store(StorageKey.default.languageSelectionKey, key);
    if (language === null) {
      this.setCurrentLanguage();
    }
    this.currentLanguage = await this.getCurrentLanguage();
    this.currentSelection = await this.getCurrentSelection();
  }

  public async storeCurrentLanguage(code: string) {
    await this._stroage.store(StorageKey.default.language, code);
  }

  public async storeSelection(selection: LanguageSelectionType[]) {
    await this._stroage.store(StorageKey.default.languageSelection, selection);
  }

  public async storeKey(key: ILanguageKey) {
    await this._stroage.store(StorageKey.default.languageSelectionKey, key);
  }

  public async getCurrentLanguage() {
    if (this.currentLanguage !== undefined) {
      return this.currentLanguage;
    } else {
      this.currentLanguage = await this._stroage.getLanguage();
      return this.currentLanguage;
    }
  }

  public async getDefaultSelection(): Promise<LanguageSelectionType> {
    let selections: LanguageSelectionType[] = await this._stroage.getLanguageSelection();
    let selection = selections.filter(selection => selection.isDefault);

    return selection[0];
  }

  public async getSelections(): Promise<LanguageSelectionType[]> {
    let result: LanguageSelectionType[] | null = await this._stroage.getLanguageSelection();
    if (result !== null) {
      return result;
    } else {
      await this.refresh();
      let result: LanguageSelectionType[] = await this._stroage.getLanguageSelection();
      return result;
    }
  }

  public async getCurrentSelection(): Promise<LanguageSelectionType> {
    if (this.currentSelection !== undefined) {
      return this.currentSelection;
    } else {
      this.currentSelection = await this.currentSelectedSelection();
      return this.currentSelection;
    }
  }

  private async currentSelectedSelection(): Promise<LanguageSelectionType> {
    let currentLanguage: string = await this._stroage.getLanguage();
    let selections: null | LanguageSelectionType[] = await this.getSelections();

    let selected = selections?.filter(s => s.code === currentLanguage);

    if (selections !== null) {
      this._hasSelection = true;
      return selected[0] as LanguageSelectionType;
    }

    if (!this._refreshing) {
      this._refreshing = true;
      await this.refresh();
      this._refreshing = false;
      selections = await this.getSelections();

      selected = selections.filter(s => s.code === currentLanguage);
      this._hasSelection = selected.length > 0;
      return selected[0] as LanguageSelectionType;
    }

    while (this._refreshing) {
      await new Promise(resolve => setTimeout(resolve, 2500));
    }

    selections = await this.getSelections();

    if (!selections) {
      throw new Error('Selections are null or undefined after waiting for refresh');
    }

    selected = selections.filter(s => s.code === currentLanguage);

    this._hasSelection = selected.length > 0;
    return selected[0] as LanguageSelectionType;
  }

  public async getSelectedSelection(selectedCode: string): Promise<LanguageSelectionType> {
    let selections: LanguageSelectionType[] = await this.getLanguageSelections();
    return selections.find(selection => selection.code === selectedCode.toLowerCase()) as LanguageSelectionType;
  }

  public async getKey(): Promise<ILanguageKey> {
    let result = await this._stroage.getLanguageSelectionKey();
    return result as ILanguageKey;
  }

  private async getLanguageSelections(): Promise<LanguageSelectionType[]> {
    return await lastValueFrom(this._systemLanguageRepo.getLanguageSelectionResult());
  }

  private async getLanguageKey(): Promise<ILanguageKey> {
    let result = await lastValueFrom(this._systemLanguageRepo.getLanguageKeyResult());
    return result.length > 0 ? result[0] : { id: '', used: [] };
  }

  private async setCurrentLanguage() {
    const currentSetting = await this.getCurrentLanguage();
    const locale = currentLocale?.toLowerCase();
    const isKorean = locale?.includes('ko');
    const isJapanese = locale?.includes('ja');
    const isChinese = locale?.includes('zh');
    const isHindi = locale?.includes('hi');
    const isItailan = locale?.includes('it');
    const isSpanish = locale?.includes('es');
    const isFilipino = locale?.includes('ph');
    const isVietnamese = locale?.includes('vi');
    const isIndonesian = locale?.includes('id');
    const isFrench = locale?.includes('fr');
    const isThai = locale?.includes('th');
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
      : isThai
      ? 'th'
      : 'en';

    currentSetting !== null && typeof currentSetting === 'string' && currentSetting !== undefined
      ? await this.storeCurrentLanguage(currentSetting)
      : await this.storeCurrentLanguage(result);
  }
}
