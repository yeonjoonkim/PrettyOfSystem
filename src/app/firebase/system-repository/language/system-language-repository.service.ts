import { ILanguageSelection, ILanguageKey } from './../../../interface/system/language/language.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import * as Db from './../../../shared/services/global/constant/firebase-path';

@Injectable({
  providedIn: 'root'
})
export class SystemLanguageRepositoryService {
  private readonly timeStamp = {lastModifiedDate: new Date()};
  
  constructor(private afs: AngularFirestore) {}


public getLanguageSelectionResult() {
  return this.afs.collection(Db.Context.System.Language.Selection)
  .get()
  .pipe(
    map(snapshot => {
      return snapshot.docs.map(doc => {
        let result = this.setILanuageSelection(doc.data(), doc.id);
        return result;
      });
    })
  );
}

  public getLanguageKeyResult(){
    return this.afs.collection(Db.Context.System.Language.Key)
    .get()
    .pipe(
      map(snapshot => {
        return snapshot.docs.map(doc =>{
          let result = this.setILanguageKey(doc.data(), doc.id);
          return result;
        })
      }));
  }

  public async updateLanguageSelection(criteria: ILanguageSelection){
    let updateCommand = {...criteria, ...this.timeStamp};
    this.afs.collection(Db.Context.System.Language.Selection).doc(criteria.id).update(updateCommand);
  }

  public async updateLanguageKey(criteria: ILanguageKey){
    let updateCommand = {...criteria, ...this.timeStamp};
    this.afs.collection(Db.Context.System.Language.Key).doc(criteria.id).update(updateCommand);
  }

  private setILanuageSelection(response: any, id?: string){
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
      await this.afs.collection(Db.Context.System.Language.Selection).doc(id).set(newSelection);
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
