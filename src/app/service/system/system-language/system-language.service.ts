import { Injectable } from '@angular/core';
import {
  ILanguageKey,
  LanguageSelectionType,
} from 'src/app/interface/system/language/language.interface';
import { NameValuePairType, PairKeyValueType } from 'src/app/interface/global/global.interface';
import { LanguagePackageService } from 'src/app/service/global/language-package/language-package.service';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { LanguageModalService } from './language-modal/language-modal.service';
import { SystemTranslateRequestRepositoryService } from 'src/app/firebase/system-repository/system-translate-request/system-translate-request-repository.service';
import { TranslateRequestRepositoryService } from 'src/app/firebase/system-repository/translate-request/translate-request-repository.service';
import { ChatGptTranslateDocumentType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class SystemLanguageService {
  constructor(
    private _language: LanguageService,
    private _languagePackage: LanguagePackageService,
    public modal: LanguageModalService,
    private _systemTranslateRequest: SystemTranslateRequestRepositoryService,
    private _translateRequest: TranslateRequestRepositoryService
  ) {}

  public async get(): Promise<LanguageSelectionType[]> {
    return await this._language.management.storage.getSelections();
  }

  public translateRequestValueChangeListener() {
    return this._systemTranslateRequest.systemLanguageRequestValueChangeListener();
  }

  public async sendRequest(nameValuePair: NameValuePairType) {
    return await this._systemTranslateRequest.createAddLanguageRequest(nameValuePair);
  }

  public async updateTranslateDocument(doc: ChatGptTranslateDocumentType) {
    await this._translateRequest.updateDocument(doc);
  }

  public async getSelectedLanguageKeyPairValueList(code: string): Promise<PairKeyValueType[]> {
    let selectedLang: LanguageSelectionType =
      await this._language.management.storage.getSelectedSelection(code);
    let key: ILanguageKey = await this._language.management.storage.getKey();
    let result: PairKeyValueType[] = this._languagePackage.getKeyPairValue(
      key?.used,
      selectedLang?.package
    );

    return result;
  }

  public async getLanguageSelectionKeyPairValueList(
    selections: LanguageSelectionType[]
  ): Promise<PairKeyValueType[]> {
    let promises = selections.map(async s => {
      let name = await this._language.transform(s.description);
      let keyPairValue: PairKeyValueType = { key: s.code, value: name };
      return keyPairValue;
    });
    let result = await Promise.all(promises);
    return result;
  }
}
