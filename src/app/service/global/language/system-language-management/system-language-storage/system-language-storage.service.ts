import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { SystemLanguageRepositoryService } from 'src/app/firebase/system-repository/language/system-language-repository.service';
import { ILanguageKey, LanguageSelectionType } from 'src/app/interface';
import * as StorageKey from 'src/app/service/global/storage/storage.key';
import { StorageService } from 'src/app/service/global/storage/storage.service';
@Injectable({
  providedIn: 'root',
})
export class SystemLanguageStorageService {
  private _hasSelection: boolean = false;
  private _refreshing: boolean = false;
  constructor(
    private _stroage: StorageService,
    private _systemLanguageRepo: SystemLanguageRepositoryService
  ) {}

  public async create() {
    this._stroage.create();
  }

  public async setDefault(isConnected: boolean) {
    let now: Date = new Date();
    let expiredDate: Date | null = await this._stroage.getLanguageSelectionExpireDateTime();
    let isExpired: boolean = expiredDate !== null ? now > expiredDate : true;
    let selections: null | LanguageSelectionType[] = await this.getSelections();
    let keys: null | ILanguageKey = await this.getKey();
    let refresh: boolean =
      selections === null || expiredDate === null || isExpired || keys === null;

    if (refresh && isConnected) {
      await this.refresh();
      await this._stroage.storeExpiredDateTime();
      console.log('refresh');
    }
  }

  public async refresh() {
    let selections: LanguageSelectionType[] = await this.getLanguageSelections();
    let key: ILanguageKey = await this.getLanguageKey();
    await this._stroage.store(StorageKey.default.languageSelection, selections);
    await this._stroage.store(StorageKey.default.languageSelectionKey, key);
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
    return await this._stroage.getLanguage();
  }

  public async getDefaultSelection(): Promise<LanguageSelectionType> {
    let selections: LanguageSelectionType[] = await this._stroage.getLanguageSelection();
    let selection = selections.filter(selection => selection.isDefault);

    return selection[0];
  }

  public async getSelections(): Promise<LanguageSelectionType[]> {
    let result: LanguageSelectionType[] = await this._stroage.getLanguageSelection();
    return result;
  }

  public async getCurrentSelection(): Promise<LanguageSelectionType> {
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
    return selections.find(
      selection => selection.code === selectedCode.toLowerCase()
    ) as LanguageSelectionType;
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
}
