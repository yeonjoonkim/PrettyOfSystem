import { Injectable } from '@angular/core';
import * as storageKey from './storage.key';
import * as CryptoJS from 'crypto-js';
import * as _ from './../../../../../../storage-key';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(private storage: Storage) {}
  public clear() {
    this.storage.clear();
  }

  private encrypt(value: any){
    return CryptoJS.AES.encrypt(JSON.stringify(value),  _.STORAGE.key).toString();
  }

  private decrypt(encryptedValue: any){
    let bytes = CryptoJS.AES.decrypt(encryptedValue, _.STORAGE.key);
    if (bytes.toString()) {
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return null;
  }

  public async store(key: string, value: any) {
    let encryptedValue =  this.encrypt(value);
    await this.storage.set(key, encryptedValue);
  }

  public async get(key: string) {
    let encryptedValue = await this.storage.get(key);
    if (encryptedValue !== null) {
      let decrypted = this.decrypt(encryptedValue);
      return decrypted;
    }
    return null;
  }

  public removeItem(key: string) {
    const encryptedKey =  this.encrypt(key);
    this.storage.remove(encryptedKey);
  }

  public async getLanguage(){
    let result = await this.get(storageKey.default.language);
    return result;
  }
}