import {
  IAddLanguageTransformSaveCommand,
  ILanguageKey,
  ILanguageTranslateItem,
  ILanguageTrasnlationResult,
} from 'src/app/interface/system/language/language.interface';
import { LanguageTranslateService } from '../language-translate/language-translate.service';
import { Injectable } from '@angular/core';
import { TextTransformService } from '../text-transform/text-transform.service';
import { TranslateCriteriaService } from '../language/system-language-management/translate-criteria/translate-criteria.service';
import { PairKeyValueType } from 'src/app/interface/global/global.interface';
import { SystemLanguageStorageService } from '../language/system-language-management/system-language-storage/system-language-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageTranslationPackageService {
  constructor(
    private _languageTranslate: LanguageTranslateService,
    private _texTransform: TextTransformService,
    private _translateCriteria: TranslateCriteriaService,
    private _storage: SystemLanguageStorageService
  ) {}

  public async translateObjectNameFormat(objectName: string, value: string) {
    let criteria = await this._translateCriteria.allLanguageCriteria(objectName);
    let result = await this._languageTranslate.get(value, criteria, true);
    let validated = await this.validateLanugageResult(result, objectName);
    return { result: result, validated: validated };
  }

  public async translateTitleFormat(objectName: string, value: string) {
    let criteria = await this._translateCriteria.allLanguageTitleCriteria();
    let result = await this._languageTranslate.get(value, criteria, true);
    let validated = await this.validateLanugageResult(result, objectName);
    return { result: result, validated: validated };
  }

  public async translateDescriptionFormat(objectName: string, value: string) {
    let criteria = await this._translateCriteria.allLanguageDescriptionCriteria();
    let result = await this._languageTranslate.get(value, criteria, true);
    let validated = await this.validateLanugageResult(result, objectName);
    return { result: result, validated: validated };
  }

  private async validateLanugageResult(item: ILanguageTranslateItem, objectName: string) {
    let result: ILanguageTrasnlationResult = this.defaultResult();
    result.isEmpty = item.isEmpty;
    if (!result.isEmpty) {
      let defaultDescription = this._texTransform.getDefaultLanguageTranslateResult(item.translated);
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

  private async validateKeyPairValue(pair: PairKeyValueType): Promise<IAddLanguageTransformSaveCommand> {
    let key: ILanguageKey = await this._storage.getKey();
    let result = {
      hasValue: pair.value.length > 0,
      isKeyNotExisted: !key.used.includes(pair.key.toLowerCase()),
      isTransformKeyValueFormat:
        this._texTransform.setLanguageTransformCodeList(pair.key.toLowerCase()).length === 3,
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
