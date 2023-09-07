import {
  IAddLanguageTransformSaveCommand,
  ILanguageKey,
  ILanguageTranslateItem,
  ILanguageTranslatedCriteria,
  ILanguageTrasnlationResult,
} from 'src/app/interface/system/language/language.interface';
import { LanguageTranslateService } from '../language-translate/language-translate.service';
import { Injectable } from '@angular/core';
import { LanguageService } from '../language/language.service';
import { TextTransformService } from '../text-transform/text-transform.service';
import { TranslateCriteriaService } from '../language/system-language-management/translate-criteria/translate-criteria.service';
import { IPairKeyValue } from 'src/app/interface/global/global.interface';
import { SystemLanguageStorageService } from '../language/system-language-management/system-language-storage/system-language-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageTranslationPackageService {
  constructor(
    private language: LanguageService,
    private languageTranslate: LanguageTranslateService,
    private texTransform: TextTransformService,
    private translateCriteria: TranslateCriteriaService,
    private storage: SystemLanguageStorageService
  ) {}

  public async translateObjectNameFormat(objectName: string, value: string) {
    let criteria = await this.translateCriteria.allLanguageCriteria(objectName);
    let result = await this.languageTranslate.get(value, criteria, true);
    let validated = await this.validateLanugageResult(result, objectName);
    return { result: result, validated: validated };
  }

  public async translateTitleFormat(objectName: string, value: string) {
    let criteria = await this.translateCriteria.allLanguageTitleCriteria();
    let result = await this.languageTranslate.get(value, criteria, true);
    let validated = await this.validateLanugageResult(result, objectName);
    return { result: result, validated: validated };
  }

  public async translateDescriptionFormat(objectName: string, value: string) {
    let criteria = await this.translateCriteria.allLanguageDescriptionCriteria();
    let result = await this.languageTranslate.get(value, criteria, true);
    let validated = await this.validateLanugageResult(result, objectName);
    return { result: result, validated: validated };
  }

  private async validateLanugageResult(item: ILanguageTranslateItem, objectName: string) {
    let result: ILanguageTrasnlationResult = this.defaultResult();
    result.isEmpty = item.isEmpty;
    if (!result.isEmpty) {
      let defaultDescription = this.texTransform.getDefaultLanguageTranslateResult(item.translated);
      result.name = objectName + defaultDescription.toLowerCase().replace(' ', '');
      result.description = defaultDescription;
      let keyValidation = await this.validateKeyPairValue({
        key: result.name,
        value: result.description,
      });
      result.isKeyNotExisited = keyValidation.isKeyNotExisted;
    }

    return result;
  }

  private async validateKeyPairValue(
    pair: IPairKeyValue
  ): Promise<IAddLanguageTransformSaveCommand> {
    let key: ILanguageKey = await this.storage.getKey();
    let result = {
      hasValue: pair.value.length > 0,
      isKeyNotExisted: !key.used.includes(pair.key.toLowerCase()),
      isTransformKeyValueFormat:
        this.texTransform.setLanguageTransformCodeList(pair.key.toLowerCase()).length === 3,
    };
    return result;
  }

  private defaultResult(): ILanguageTrasnlationResult {
    return {
      isEmpty: true,
      isSaved: false,
      isKeyNotExisited: false,
      name: '',
      description: '',
    };
  }
}
