import { LanguageSelectionType, ILanguageKey } from 'src/app/interface/system/language/language.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import * as Db from 'src/app/constant/firebase-path';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { FirebaseApiService, createKeyMap, Query } from '../../firebase-api/firebase-api.service';

@Injectable({
  providedIn: 'root',
})
export class SystemLanguageRepositoryService {
  private _api = inject(FirebaseApiService);

  constructor(private _toaster: FirebaseToasterService) {}

  public getLanguageSelectionResult() {
    return this._api.getDocuments<LanguageSelectionType>(Db.Context.System.Language.Selection).pipe(
      map(docs => {
        return docs.map(doc => {
          let result = this.setILanuageSelection(doc, doc.id);
          return result;
        });
      })
    );
  }

  public getLanguageKeyResult() {
    return this._api.getDocuments<ILanguageKey>(Db.Context.System.Language.Key).pipe(
      map(docs => {
        return docs.map(doc => {
          const id = doc.id !== undefined ? doc.id : '';
          let result = this.setILanguageKey(doc, id);
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
    let updateCommand = { ...criteria };
    try {
      const updated = await this._api.updateDocument<LanguageSelectionType>(
        Db.Context.System.Language.Selection,
        updateCommand
      );
      if (updated) {
        await this._toaster.updateSuccess();
      } else {
        await this._toaster.updateFail('');
      }
      return updated;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async updateLanguageKey(criteria: ILanguageKey) {
    const updateCommand = { ...criteria };
    try {
      const updated = await this._api.updateDocument<ILanguageKey>(Db.Context.System.Language.Key, updateCommand);
      if (updated) {
        await this._toaster.updateSuccess();
      } else {
        await this._toaster.updateFail('');
      }
      return updated;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async addNewLanguageSelection(criteria: LanguageSelectionType) {
    try {
      const saved = await this._api.set<LanguageSelectionType>(Db.Context.System.Language.Selection, criteria);
      if (saved) {
        await this._toaster.addSuccess();
      } else {
        await this._toaster.addFail('');
      }
      return true;
    } catch (error) {
      console.error(error);
      await this._toaster.addFail(error);
      return false;
    }
  }
}
