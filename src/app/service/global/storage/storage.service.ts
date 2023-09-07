import { Injectable } from '@angular/core';
import * as _storageKey from './storage.key';
import { Storage } from '@ionic/storage-angular';
import { CryptService } from '../crypt/crypt.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage;
  private _crypt: CryptService;
  constructor() {
    this._storage = new Storage();
    this._crypt = new CryptService();
  }

  public async create() {
    await this._storage.create();
  }
  public clear() {
    this._storage.clear();
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

  public async getLanguageSelectionKey() {
    let result = await this.get(_storageKey.default.languageSelectionKey);
    return result;
  }

  public async clearLanguage() {
    await this.removeItem(_storageKey.default.languageSelection);
    await this.removeItem(_storageKey.default.languageSelectionKey);
  }
}
