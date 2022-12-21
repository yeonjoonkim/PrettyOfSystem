import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as storageKey from '../../services/storage/storage.key';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(private storage: Storage) {
  }

  public async create(){
    await this.storage.create();
  }
  public async clear(){
    await this.storage.clear();
  }

  public async store(key: string, value: any) {
    const encryptedValue = btoa(JSON.stringify(value));
    await this.storage.set(key, encryptedValue);
  }

  public async storeCurrentLanguage(value: string){
    await this.storage.set(storageKey.default.language, value);
  }

  public async getCurrentLanguage(){
    let value = await this.storage.get(storageKey.default.language);
    return value;
  }

  public async get(key: string){
    return new Promise(
      resolve => {
        this.storage.get(key).then(
          (result) => {
            if(result == null){
              resolve(false);
            }else{
              resolve(JSON.parse(atob(result)));
            }
          });
    });
  }

  public removeItem(key: string){
    this.storage.remove(key);
  }

  public getAllStorageKeyValue(){
    this.storage.keys();
  }

}
