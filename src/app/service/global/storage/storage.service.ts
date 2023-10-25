import { Injectable } from '@angular/core';
import * as _storageKey from './storage.key';
import { Storage, StorageConfig } from '@ionic/storage-angular';
import { CryptService } from '../crypt/crypt.service';
import { DateTransformService } from '../date/date-transform/date-transform.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage;
  private _crypt: CryptService;
  private _dateTransform: DateTransformService;
  constructor() {
    this._storage = new Storage();
    this._crypt = new CryptService();
    this._dateTransform = new DateTransformService();
  }

  public async create() {
    await this._storage.create();
  }
  public async clear() {
    await this._storage.clear();
  }

  public async store(key: string, value: any) {
    let encryptedValue = this._crypt.encrypt(value);
    await this._storage.set(key, encryptedValue);
  }

  public async get(key: string) {
    let en_cryptedValue = await this._storage.get(key);
    if (en_cryptedValue !== null) {
      let de_crypted = this._crypt.decrypt(en_cryptedValue);
      return de_crypted;
    }
    return null;
  }

  public async removeItem(key: string) {
    this._storage.remove(key);
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
        const dateObj = new Date(result);
        if (!isNaN(dateObj.getTime())) {
          returnValue = dateObj;
        }
      }
    } catch (error) {
      console.error('Error processing the date:', error);
    }

    return returnValue;
  }

  public async storeExpiredDateTime() {
    let now: Date = new Date();
    let expiredDateTime: Date = this._dateTransform.addMin(now, 30);
    let expiredDateString = expiredDateTime.toString();
    await this.store(_storageKey.default.languageSelectionExpiredDateTime, expiredDateString);
  }

  public async getLanguageSelectionKey() {
    let result = await this.get(_storageKey.default.languageSelectionKey);
    return result;
  }

  public async clearLanguage() {
    await this.removeItem(_storageKey.default.languageSelection);
    await this.removeItem(_storageKey.default.languageSelectionKey);
  }
}
