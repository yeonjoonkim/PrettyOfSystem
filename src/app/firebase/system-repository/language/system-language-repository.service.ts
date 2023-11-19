import { LanguageSelectionType, ILanguageKey } from 'src/app/interface/system/language/language.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import * as Db from 'src/app/constant/firebase-path';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';

@Injectable({
  providedIn: 'root',
})
export class SystemLanguageRepositoryService {
  private readonly _timeStamp = { lastModifiedDate: new Date() };

  constructor(
    private _afs: AngularFirestore,
    private _toaster: FirebaseToasterService
  ) {}

  public getLanguageSelectionResult() {
    return this._afs
      .collection(Db.Context.System.Language.Selection)
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

  public getLanguageKeyResult() {
    return this._afs
      .collection(Db.Context.System.Language.Key)
      .get()
      .pipe(
        map(snapshot => {
          return snapshot.docs.map(doc => {
            let result = this.setILanguageKey(doc.data(), doc.id);
            return result;
          });
        })
      );
  }

  private setILanuageSelection(response: any, id?: string) {
    let selection: LanguageSelectionType = response;
    selection.id = id;
    return selection;
  }

  public setILanguageKey(response: any, id: string) {
    let key: ILanguageKey = {
      used: response?.used,
      id: id,
    };
    return key;
  }

  public async updateLanguageSelection(criteria: LanguageSelectionType) {
    let updateCommand = { ...criteria, ...this._timeStamp };
    try {
      await this._afs.collection(Db.Context.System.Language.Selection).doc(criteria.id).update(updateCommand);
      await this._toaster.updateSuccess();
      return true;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async updateLanguageKey(criteria: ILanguageKey) {
    const updateCommand = { ...criteria, ...this._timeStamp };
    const collection = Db.Context.System.Language.Key;
    try {
      await this._afs.collection(collection).doc(criteria.id).update(updateCommand);
      await this._toaster.updateSuccess();
      return true;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async addNewLanguageSelection(criteria: LanguageSelectionType) {
    try {
      const id = this._afs.createId();
      const newSelection = { ...criteria, ...this._timeStamp, id: id };
      await this._afs.collection(Db.Context.System.Language.Selection).doc(id).set(newSelection);
      await this._toaster.addSuccess();
      return true;
    } catch (error) {
      console.error(error);
      await this._toaster.addFail(error);
      return false;
    }
  }
}
