import { ILanguageTransformKeyPairValue, ILanguageTranslateItem, ILanguageTrasnlationResult } from 'src/app/interface/system/language/language.interface';
import { LanguageTranslateService } from 'src/app/shared/services/language-translate/language-translate.service';
import { Injectable } from '@angular/core';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageTranslationPackageService {

  constructor(private language: LanguageService, private languageTranslate: LanguageTranslateService) { }

  public async getLanguageTitleTrasnslationResult(prefixedObjectName: string, description: string): Promise<{translatedResult: ILanguageTranslateItem; validated: ILanguageTrasnlationResult;}>{
    let translateCriteria = await this.language.getAllLanguageTranslateCriteria();
    translateCriteria.isTitle = true;
    let translatedResult: ILanguageTranslateItem = await this.languageTranslate.getTranslatedLanguagePackage(description, translateCriteria);
    let validated: ILanguageTrasnlationResult = await this.validateLanugageResult(translatedResult, prefixedObjectName);

    return {translatedResult: translatedResult, validated: validated};
  }

  public async getLanguageDescriptionTrasnslationResult(prefixedObjectName: string, description: string): Promise<{translatedResult: ILanguageTranslateItem; result: ILanguageTrasnlationResult;}>{
    let translateCriteria = await this.language.getAllLanguageTranslateCriteria();
    translateCriteria.isTitle = false;
    let translatedResult: ILanguageTranslateItem = await this.languageTranslate.getTranslatedLanguagePackage(description, translateCriteria);
    let validated: ILanguageTrasnlationResult = await this.validateLanugageResult(translatedResult, prefixedObjectName);

    return {translatedResult: translatedResult, result: validated};
  }

  public async updateLanguageTranslationResult(previousName: string, result: {translatedResult: ILanguageTranslateItem; result: ILanguageTrasnlationResult}){
    await this.language.deleteKeyPairValue(previousName).then(() => {
      this.language.editLanguagePackage(result.translatedResult, result.result.name);
    });
  }

  private async validateLanugageResult(translatedResult: ILanguageTranslateItem, prefixedObjectName: string): Promise<ILanguageTrasnlationResult>{
    let result: ILanguageTrasnlationResult = this.setInitialILanguageTranslationResult();
    result.isEmpty = translatedResult.isEmpty;
    if(!result.isEmpty){
      result.name = prefixedObjectName + this.language.getDefaultLanguageDescription(translatedResult.translated).toLowerCase().replace(" ", "");
      result.description = this.language.getDefaultLanguageDescription(translatedResult.translated);
      result.isKeyNotExisited = (await this.language.validateNewKeyPairValue({ key: result.name, value: result.description })).isKeyNotExisted;
    }

    return result;
  }

  private setInitialILanguageTranslationResult(): ILanguageTrasnlationResult{
    return {
      isEmpty: true,
      isSaved: false,
      isKeyNotExisited: false,
      name: '',
      description: ''
    }
  }
}
