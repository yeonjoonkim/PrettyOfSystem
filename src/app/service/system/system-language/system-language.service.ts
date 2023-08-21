import { Injectable } from '@angular/core';
import { ILanguageKey, ILanguageSelection } from 'src/app/interface/system/language/language.interface';
import { IPairKeyValue } from 'src/app/interface/global/global.interface';
import { LanguagePackageService } from 'src/app/shared/services/global/language-package/language-package.service';
import { LanguageService } from 'src/app/shared/services/global/language/language.service';
import { LanguageModalService } from './language-modal/language-modal.service';

@Injectable({
  providedIn: 'root'
})
export class SystemLanguageService {

  constructor(private language: LanguageService, private languagePackage: LanguagePackageService, public modal: LanguageModalService) {}

  public async get(): Promise<ILanguageSelection[]>{
    return await this.language.getLanguageSelectionResult();
  }
  public async getSelectedLanguageKeyPairValueList(code: string): Promise<IPairKeyValue[]>{
    let selectedLang: ILanguageSelection = await this.language.getSelectedLanguageSelection(code);
    let key: ILanguageKey = await this.language.getLanguageSelectionKey();
    let result: IPairKeyValue[] = this.languagePackage.getKeyPairValue(key?.used, selectedLang?.package);

    return result;
  }

  public async refreshLocalStorage(){
    await this.language.setLocalLanguageSelection();
  }

  public async getLanguageSelectionKeyPairValueList(selections: ILanguageSelection[]): Promise<IPairKeyValue[]>{
    let promises = selections.map(async (s) => {
      let name = await this.language.transform(s.description);
      let keyPairValue: IPairKeyValue = { key: s.code, value: name};
      return keyPairValue;
    })
    let result = await Promise.all(promises);
    return result;
  }
}
