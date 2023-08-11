import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ILanguageKey, ILanguageSelection, ILanguageTransformKeyPairValue } from 'src/app/interface/system/language/language.interface';
import { LanguagePackageService } from 'src/app/shared/services/global/language-package/language-package.service';
import { LanguageService } from 'src/app/shared/services/global/language/language.service';

@Injectable({
  providedIn: 'root'
})
export class SystemLanguageService {

  constructor(private language: LanguageService, private languagePackage: LanguagePackageService) {}

  public subscription(){
    return this.language.languageSelection;
  }

  public async getSelectedLanguageKeyPairValueList(code: string): Promise<ILanguageTransformKeyPairValue[]>{
    let selectedLang: ILanguageSelection = await this.language.getSelectedLanguageSelection(code);
    let key: ILanguageKey = await this.language.getLanguageSelectionKey();
    let result: ILanguageTransformKeyPairValue[] = this.languagePackage.getKeyPairValue(key?.used, selectedLang?.package);

    return result;
  }

  public async getLanguageSelectionKeyPairValueList(selections: ILanguageSelection[]): Promise<ILanguageTransformKeyPairValue[]>{
    let promises = selections.map(async (s) => {
      let name = await this.language.transform(s.description);
      let keyPairValue: ILanguageTransformKeyPairValue = { key: s.code, value: name};
      return keyPairValue;
    })
    let result = await Promise.all(promises);
    return result;
  }
}

