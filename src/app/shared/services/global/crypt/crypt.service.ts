import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import * as _ from './../../../../../../storage-key';

@Injectable({
  providedIn: 'root'
})
export class CryptService {
  

  constructor() { }

  public encrypt(value: any){
    return CryptoJS.AES.encrypt(JSON.stringify(value),  _.Crypt.key).toString();
  }

  public decrypt(encryptedValue: any){
    let bytes = CryptoJS.AES.decrypt(encryptedValue, _.Crypt.key);
    if (bytes.toString()) {
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return null;
  }
}
