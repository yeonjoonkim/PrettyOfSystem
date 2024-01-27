import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import * as _ from './../../../../../storage-key';

@Injectable({
  providedIn: 'root',
})
export class CryptService {
  constructor() {}

  public encrypt(value: any) {
    return CryptoJS.AES.encrypt(JSON.stringify(value), _.Crypt.key).toString();
  }

  public decrypt(encryptedValue: any) {
    let bytes = CryptoJS.AES.decrypt(encryptedValue, _.Crypt.key);
    if (bytes.toString()) {
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return null;
  }

  public encryptUrlParam(value: any) {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(value), _.Crypt.key).toString();
    // Replace URL-unfriendly characters with URL-safe characters
    const encryptedParam = encrypted.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    return encryptedParam;
  }

  public decryptUrlParam(encryptedText: string): string | null {
    const replacedText = encryptedText.replace(/-/g, '+').replace(/_/g, '/');
    const bytes = CryptoJS.AES.decrypt(replacedText, _.Crypt.key);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

    try {
      return decryptedText ? JSON.parse(decryptedText) : null;
    } catch (error) {
      console.error('Error parsing decrypted text:', error);
      return null;
    }
  }
}
