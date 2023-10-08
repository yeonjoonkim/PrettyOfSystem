import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  SystemLanguageTranslateRequestType,
} from 'src/app/interface';
import * as Db from 'src/app/constant/firebase-path';
import { map, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SystemTranslateRequestRepositoryService {
  constructor(
    private _afs: AngularFirestore,
    private _toaster: FirebaseToasterService
  ) {}

  public async createAddLanguageRequest(language: NameValuePairType) {
    const form = this.languageForm(language);
    try {
      await this._afs.collection(Db.Context.SystemLangaugeTranslateRequest).doc(form.id).set(form);
      await this._toaster.requestSuccess();
      return true;
    } catch (error) {
      await this._toaster.requestFail(error);
      console.error(error);
      return false;
    }
  }

  public systemLanguageRequestValueChangeListener() {
    return this._afs
      .collection<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest, ref =>
        ref.where('isSystemAdmin', '==', true).orderBy('reqeustDate', 'asc')
      )
      .valueChanges()
      .pipe(map(snapShots => snapShots.map(doc => doc as ChatGptTranslateDocumentType)));
  }

  private languageForm(language: NameValuePairType) {
    const form: SystemLanguageTranslateRequestType = {
      id: this._afs.createId(),
      name: language.name,
      code: language.value,
      reqeustDate: new Date(),
    };
    return form;
  }
}
