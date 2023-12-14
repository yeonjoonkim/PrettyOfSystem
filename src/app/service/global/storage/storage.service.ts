import { Injectable } from '@angular/core';
import * as _storageKey from './storage.key';
import { CryptService } from '../crypt/crypt.service';
import { DateTransformService } from '../date/date-transform/date-transform.service';
import { DateService } from '../date/date.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _crypt: CryptService;
  private _dateTransform: DateTransformService;
  private _date: DateService;
  constructor() {
    this._crypt = new CryptService();
    this._dateTransform = new DateTransformService();
    this._date = new DateService(this._dateTransform);
  }

  public async clear() {
    localStorage.clear();
  }

  public async store(key: string, value: any) {
    let encryptedValue = this._crypt.encrypt(value);
    localStorage.setItem(key, encryptedValue);
  }

  public async get(key: string) {
    let en_cryptedValue = localStorage.getItem(key);
    if (en_cryptedValue !== null) {
      let de_crypted = this._crypt.decrypt(en_cryptedValue);
      return de_crypted;
    }
    return null;
  }

  public async removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public async getLanguage() {
    let result = await this.get(_storageKey.default.language);
    return result;
  }

  public async getLanguageSelection() {
    let result = await this.get(_storageKey.default.languageSelection);
    return result;
  }

  public async getLanguageSelectionExpireDateTime(): Promise<Date | null> {
    let result = await this.get(_storageKey.default.languageSelectionExpiredDateTime);
    let returnValue: Date | null = null;

    try {
      if (typeof result === 'string') {
        returnValue = this._date.transform.toLocalDateTime(result);
      }
    } catch (error) {
      console.error('Error processing the date:', error);
    }

    return returnValue;
  }

  public async storeExpiredDateTime() {
    let now: Date = new Date();
    let formatted = this._date.addMin(now, 600);
    await this.store(_storageKey.default.languageSelectionExpiredDateTime, formatted);
  }

  public async getLanguageSelectionKey() {
    let result = await this.get(_storageKey.default.languageSelectionKey);
    return result;
  }

  public async getInternalAPIURL() {
    const internalURL = await this.get(_storageKey.default.internalAPI);
    return internalURL;
  }

  public async storeInternalAPIURL(url: string | null) {
    await this.store(_storageKey.default.internalAPI, url);
  }

  public async clearInternalAPIURL() {
    await this.removeItem(_storageKey.default.internalAPI);
  }

  public async clearLanguage() {
    await this.removeItem(_storageKey.default.languageSelection);
    await this.removeItem(_storageKey.default.languageSelectionKey);
  }
}
