import { Injectable } from '@angular/core';
import * as storageKey from './storage.key';
import { Storage } from '@ionic/storage-angular';
import { CryptService } from '../crypt/crypt.service';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(private storage: Storage, private crypt: CryptService) {}
  public clear() {
    this.storage.clear();
  }

  public async store(key: string, value: any) {
    let encryptedValue =  this.crypt.encrypt(value);
    await this.storage.set(key, encryptedValue);
  }

  public async get(key: string) {
    let encryptedValue = await this.storage.get(key);
    if (encryptedValue !== null) {
      let decrypted = this.crypt.decrypt(encryptedValue);
      return decrypted;
    }
    return null;
  }

  public removeItem(key: string) {
    const encryptedKey =  this.crypt.encrypt(key);
    this.storage.remove(encryptedKey);
  }

  public async getLanguage(){
    let result = await this.get(storageKey.default.language);
    return result;
  }

  public async getLanguageSelection(){
    let result = await this.get(storageKey.default.languageSelection);
    return result;
  }

  public async getLanguageSelectionKey(){
    let result = await this.get(storageKey.default.languageSelectionKey);
    return result;
  }

}