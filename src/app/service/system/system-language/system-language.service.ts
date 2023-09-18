import { Injectable } from '@angular/core';
import {
  ILanguageKey,
  LanguageSelectionType,
} from 'src/app/interface/system/language/language.interface';
import { PairKeyValueType } from 'src/app/interface/global/global.interface';
import { LanguagePackageService } from 'src/app/service/global/language-package/language-package.service';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { LanguageModalService } from './language-modal/language-modal.service';

@Injectable({
  providedIn: 'root',
})
export class SystemLanguageService {
  constructor(
    private _language: LanguageService,
    private _languagePackage: LanguagePackageService,
    public modal: LanguageModalService
  ) {}

  public async get(): Promise<LanguageSelectionType[]> {
    return await this._language.management.storage.getSelections();
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
