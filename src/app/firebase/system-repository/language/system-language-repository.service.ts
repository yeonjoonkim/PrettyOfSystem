import { ILanguageSelection, ILanguageKey } from './../../../interface/system/language/language.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemLanguageRepositoryService {
  private readonly timeStamp = {lastModifiedDate: new Date()};
  private readonly systemLanguage: string = 'system/language/';
  private readonly languageSelectionCollectionPath: string = this.systemLanguage + 'selection';
  private readonly languageKeyPath: string = this.systemLanguage + 'key';

  constructor(private afs: AngularFirestore) {}

  public getLanguageSelectionResult(){
    return this.afs.collection(this.languageSelectionCollectionPath)
    .snapshotChanges()
    .pipe(
      map(collection => {
        return collection.map(ref =>{
          let result = this.setILanuageSelection(ref.payload.doc.data(), ref.payload.doc.id);
          return result;
        })
      }));
  }

  public getLanguageKeyResult(){
    return this.afs.collection(this.languageKeyPath)
    .snapshotChanges()
    .pipe(
      map(collection => {
        return collection.map(ref =>{
          let result = this.setILanguageKey(ref.payload.doc.data(), ref.payload.doc.id);
          return result;
        })
      }));
  }

  public async updateLanguageSelection(criteria: ILanguageSelection){
    let updateCommand = {...criteria, ...this.timeStamp};
    this.afs.collection(this.languageSelectionCollectionPath).doc(criteria.id).update(updateCommand);
  }

  public async updateLanguageKey(criteria: ILanguageKey){
    let updateCommand = {...criteria, ...this.timeStamp};
    this.afs.collection(this.languageKeyPath).doc(criteria.id).update(updateCommand);
  }

  private setILanuageSelection(response: any, id: string){
    let selection: ILanguageSelection = response;
    selection.id = id;
    return selection;
  }

  public setILanguageKey(response: any, id: string){
    let key: ILanguageKey = {
      used: response?.used,
      id: id
    };
    return key;
  }

  public async addNewLanguageSelection(criteria: ILanguageSelection){
    let id = this.afs.createId();
    let newSelection = {...criteria, ...this.timeStamp, id: id};
    try{
      await this.afs.collection(this.languageSelectionCollectionPath).doc(id).set(newSelection);
    }
    catch(e){
      console.error(e);
    }
  }

  private setDefaultILanguageSelection(code: string, description: string, name: string){
    let selection: ILanguageSelection = {
      code: code,
      description: description,
      name: name,
      package: {},
      isDefault: false
    }
    return selection;
  }
}
