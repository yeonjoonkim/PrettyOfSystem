import { Injectable, inject } from '@angular/core';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  SystemLanguageTranslateRequestType,
} from 'src/app/interface';
import * as Db from 'src/app/constant/firebase-path';
import { FirebaseApiService, createKeyMap, Query } from '../../firebase-api/firebase-api.service';

const chatGptParam = createKeyMap<ChatGptTranslateDocumentType>([
  'id',
  'attempt',
  'createdDate',
  'error',
  'format',
  'isSystemAdmin',
  'languages',
  'packageKey',
  'parentId',
  'prop',
  'result',
  'serviceId',
  'shopId',
  'status',
  'translateResult',
]);

@Injectable({
  providedIn: 'root',
})
export class SystemTranslateRequestRepositoryService {
  private _api = inject(FirebaseApiService);
  constructor(private _toaster: FirebaseToasterService) {}

  public async createAddLanguageRequest(language: NameValuePairType) {
    const form = this.languageForm(language);
    try {
      const requested = await this._api.set<SystemLanguageTranslateRequestType>(
        Db.Context.SystemLangaugeTranslateRequest,
        form
      );

      if (requested !== null) {
        await this._toaster.requestSuccess();
      } else {
        await this._toaster.requestFail('');
      }

      return requested !== null;
    } catch (error) {
      await this._toaster.requestFail(error);
      console.error(error);
      return false;
    }
  }

  public systemLanguageRequestValueChangeListener() {
    return this._api.valueChangeDocuments<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest, ref =>
      ref.where(chatGptParam.isSystemAdmin, Query.Equal, true)
    );
  }

  private languageForm(language: NameValuePairType) {
    const form: SystemLanguageTranslateRequestType = {
      id: this._api.newId(),
      name: language.name,
      code: language.value,
      reqeustDate: new Date(),
    };
    return form;
  }
}
