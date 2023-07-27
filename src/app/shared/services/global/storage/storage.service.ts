import { Injectable } from '@angular/core';
import * as storageKey from './storage.key';
import { Sha256 } from '@aws-crypto/sha256-js';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  public clear() {
    localStorage.clear();
  }

  private async hashKey(key: string): Promise<string> {
    const hash = new Sha256();
    hash.update(key);
    const digest = await hash.digest();
    return Array.from(digest)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }

  public async store(key: string, value: any) {
    const hashedKey = await this.hashKey(key);
    localStorage.setItem(hashedKey, JSON.stringify(value));
  }

  public async get(key: string) {
    const hashedKey = await this.hashKey(key);
    const value = localStorage.getItem(hashedKey);
    return value !== null ? JSON.parse(value) : null;
  }

  public async removeItem(key: string) {
    const hashedKey = await this.hashKey(key);
    localStorage.removeItem(hashedKey);
  }

  public async getLanguage(){
    const hashedKey = await this.hashKey(storageKey.default.language);
    const value = localStorage.getItem(hashedKey);
    return value !== null ? JSON.parse(value) : null;
  }

  // Other methods for handling specific keys...
}