import { Injectable } from '@angular/core';
import * as storageKey from './storage.key';
import { Sha256 } from '@aws-crypto/sha256-js';
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

  private async hashKey(key: string): Promise<string> {
    const hash = new Sha256();
    hash.update(key);
    const digest = await hash.digest();
    return Array.from(digest)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }

  private encryptValue(value: any): string{
    const str = JSON.stringify(value);
    return CryptoJS.AES.encrypt(str, _.STORAGE.key).toString();
  }

  private decryptValue(encryptedValue: string): any{
    const decryptedValue = CryptoJS.AES.decrypt(encryptedValue, _.STORAGE.key);
    return JSON.parse(decryptedValue.toString(CryptoJS.enc.Utf8));
  }

  public async store(key: string, value: any) {
    const hashedKey = await this.hashKey(key);
    const encryptedValue = this.encryptValue(value);
    this.storage.set(hashedKey, encryptedValue);
  }

  public async get(key: string) {
    const hashedKey = await this.hashKey(key);
    const encryptedValue: string | unknown = this.storage.get(hashedKey);
    const decryptedValue = typeof encryptedValue === 'string' ? this.decryptValue(encryptedValue) : null;
    return decryptedValue !== null ? decryptedValue : null;
  }

  public async removeItem(key: string) {
    const hashedKey = await this.hashKey(key);
    this.storage.remove(hashedKey);
  }

  public async getLanguage(){
    const hashedKey = await this.hashKey(storageKey.default.language);
    return this.get(hashedKey);
  }
}