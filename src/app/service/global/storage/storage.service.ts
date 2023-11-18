import { Injectable } from '@angular/core';
import * as _storageKey from './storage.key';
import { Storage } from '@ionic/storage-angular';
import { CryptService } from '../crypt/crypt.service';
import { DateTransformService } from '../date/date-transform/date-transform.service';
import { DateService } from '../date/date.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage;
  private _crypt: CryptService;
  private _dateTransform: DateTransformService;
  private _date: DateService;
  constructor() {
    this._storage = new Storage();
    this._crypt = new CryptService();
    this._dateTransform = new DateTransformService();
    this._date = new DateService(this._dateTransform);
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
        returnValue = this._date.transform.toLocalDateTime(result);
      }
    } catch (error) {
      console.error('Error processing the date:', error);
    }

    return returnValue;
  }

  public async storeExpiredDateTime() {
    let now: Date = new Date();
    let formatted = this._date.addMin(now, 30);
    await this.store(_storageKey.default.languageSelectionExpiredDateTime, formatted);
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
