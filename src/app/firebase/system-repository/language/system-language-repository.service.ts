
import { ToastService } from './../../../shared/services/toast/toast.service';
import { ILanguageSelection, ILanguageKey } from './../../../interface/system/language/language.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemLanguageRepositoryService {
  private readonly timeStamp = {timeStamp: new Date()};
  private readonly systemLanguage: string = 'system/language/';
  private readonly languageSelectionCollectionPath: string = this.systemLanguage + 'selection';
  private readonly languageKeyPath: string = this.systemLanguage + 'key';

  constructor(private afs: AngularFirestore, private toast: ToastService) {}

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

  public updateLanguageKey(criteria: ILanguageKey){
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
    let id = {id: this.afs.createId()};
    let newSelection = {...id, ...criteria, ...this.timeStamp};
    try{
      await this.afs.collection(this.languageSelectionCollectionPath).ref.add(newSelection);
    }
    catch(e){
      console.error(e);
    }
  }

  private setDefaultILanguageSelection(code: string, description: string, name: string, flag: string){
    let selection: ILanguageSelection = {
      code: code,
      description: description,
      name: name,
      flag: flag,
      package: {},
      isDefault: false
    }
    return selection;
  }
}
