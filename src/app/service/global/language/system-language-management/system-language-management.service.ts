import { Injectable } from '@angular/core';
import { SystemLanguagePackageService } from './system-language-package/system-language-package.service';
import { SystemLanguageRepositoryService } from 'src/app/firebase/system-repository/language/system-language-repository.service';
import { SystemLanguageStorageService } from './system-language-storage/system-language-storage.service';
import {
  IAddLanguageTransformSaveCommand,
  ILanguageKey,
  LanguageSelectionType,
  ILanguageTranslateItem,
  PairKeyValueType,
} from 'src/app/interface';
import { TextTransformService } from '../../text-transform/text-transform.service';
import { TranslateCriteriaService } from './translate-criteria/translate-criteria.service';
import { ToastService } from '../../toast/toast.service';
import { SystemLanguageAddService } from './system-language-add/system-language-add.service';
import { LanguageTranslationPackageService } from '../../language-translation-package/language-translation-package.service';
import { lastValueFrom } from 'rxjs';
import { getUserLocale } from 'get-user-locale';

const currentLocale = getUserLocale() === null ? 'en' : getUserLocale();
@Injectable({
  providedIn: 'root',
})
export class SystemLanguageManagementService {
  public currentSelection!: LanguageSelectionType;
  public currentLanguage!: string;
  constructor(
    public storage: SystemLanguageStorageService,
    public translateCriteria: TranslateCriteriaService,
    public translate: LanguageTranslationPackageService,
    public add: SystemLanguageAddService,
    private _systemLanguageRepo: SystemLanguageRepositoryService,
    private _systemLanguagePackage: SystemLanguagePackageService,
    private _textTransform: TextTransformService,
    private _toast: ToastService
  ) {}

  public async editSelectedPackage(selectedLanguageCode: string, pair: PairKeyValueType) {
    let selection: LanguageSelectionType = await this.storage.getSelectedSelection(selectedLanguageCode);
    selection.package = this._systemLanguagePackage.update(selection.package, pair);
    await this._systemLanguageRepo.updateLanguageSelection(selection);
    await this.storage.refresh();
  }

  public async addPackage(result: ILanguageTranslateItem, keyValue: string) {
    let isSuccess: boolean;
    isSuccess = true;
    let selections: LanguageSelectionType[] = await lastValueFrom(
      this._systemLanguageRepo.getLanguageSelectionResult()
    );
    if (!result.isEmpty) {
      for (let i = 0; i < selections.length; i++) {
        if (isSuccess) {
          let selection: LanguageSelectionType = selections[i];
          let selectionCode: string = selection.code.toLowerCase();
          let translatedKeyPairValue: PairKeyValueType = {
            key: keyValue,
            value: result.translated[selectionCode],
          };
          selection.package = this._systemLanguagePackage.update(selection.package, translatedKeyPairValue);
          isSuccess = await this._systemLanguageRepo.updateLanguageSelection(selection);
        }
      }
      if (isSuccess) {
        await this.addLanguageKey(keyValue);
        await this.storage.storeSelection(selections);
      }
      await this.storage.refresh();
    }

    return isSuccess;
  }

  public async deletePackage(key: string) {
    let selections: LanguageSelectionType[] = await lastValueFrom(
      this._systemLanguageRepo.getLanguageSelectionResult()
    );
    const updatePromises = selections.map(async (selection: LanguageSelectionType) => {
      selection.package = this._systemLanguagePackage.delete(selection.package, key);
      return this._systemLanguageRepo.updateLanguageSelection(selection);
    });
    const result = await Promise.all(updatePromises);

    if (!result.includes(false)) {
      await this.storage.storeSelection(selections);
      await this.deleteLanguageKey(key);
    }

    return !result.includes(false);
  }

  public async getDefaultKeyPairValueList() {
    let defaultSelection = await this.storage.getDefaultSelection();
    let key = await this.storage.getKey();
    let result = this._systemLanguagePackage.getKeyPairValueList(key.used, defaultSelection.package);
    return result.map(r => {
      return { key: r.key, value: r.value };
    });
  }

  public async getSelectedSelection(code: string): Promise<LanguageSelectionType> {
    let selections = await this.storage.getSelections();
    return selections.find(r => r.code === code) as LanguageSelectionType;
  }

  public async transform(key: string) {
    if (this.currentSelection !== undefined && this.currentLanguage !== undefined) {
      let path = this._textTransform.setLanguageTransformCodeList(key);
      let result = this._systemLanguagePackage.getValue(path, this.currentSelection.package);
      return !this.isObject(result) && this.isString(result) ? result : key;
    } else {
      let currentLanguage = await this.storage.getCurrentLanguage();
      if (currentLanguage === null) {
        await this.setCurrentLanguage();
      }
      this.currentLanguage = await this.storage.getCurrentLanguage();
      this.currentSelection = await this.storage.getCurrentSelection();
      let path = this._textTransform.setLanguageTransformCodeList(key);
      let result = this._systemLanguagePackage.getValue(path, this.currentSelection.package);

      return !this.isObject(result) && this.isString(result) ? result : key;
    }
  }

  private async setCurrentLanguage() {
    const currentSetting = await this.storage.getCurrentLanguage();
    const locale = currentLocale?.toLowerCase();
    const isKorean = locale?.includes('ko');
    const isJapanese = locale?.includes('ja');
    const isChinese = locale?.includes('zh');
    const isHindi = locale?.includes('hi');
    const isItailan = locale?.includes('it');
    const isSpanish = locale?.includes('es');
    const isFilipino = locale?.includes('ph');
    const isVietnamese = locale?.includes('vi');
    const isIndonesian = locale?.includes('id');
    const isFrench = locale?.includes('fr');
    const isThai = locale?.includes('th');
    const isSwedish = locale?.includes('sv');
    const isPortuguese = locale?.includes('pt');
    const isRussian = locale?.includes('ru');
    const isTurkish = locale?.includes('tr');

    let result = isKorean
      ? 'ko'
      : isChinese
      ? 'zh-hans'
      : isJapanese
      ? 'ja'
      : isHindi
      ? 'hi_in'
      : isItailan
      ? '	it'
      : isSpanish
      ? 'es'
      : isFilipino
      ? 'tl-ph'
      : isVietnamese
      ? 'vi-vn'
      : isIndonesian
      ? 'id_id'
      : isFrench
      ? 'fr'
      : isThai
      ? 'th'
      : isSwedish
      ? 'sv'
      : isPortuguese
      ? 'pt'
      : isRussian
      ? 'ru'
      : isTurkish
      ? 'tr'
      : 'en';

    currentSetting !== null && typeof currentSetting === 'string' && currentSetting !== undefined
      ? await this.storage.storeCurrentLanguage(currentSetting)
      : await this.storage.storeCurrentLanguage(result);
  }

  public async validateKeyPairValue(pair: PairKeyValueType): Promise<IAddLanguageTransformSaveCommand> {
    let errorMsg: string = '';
    let key: ILanguageKey = await this.storage.getKey();
    let result = {
      hasValue: pair.value.length > 0,
      isKeyNotExisted: !key.used.includes(pair.key.toLowerCase()),
      isTransformKeyValueFormat:
        this._textTransform.setLanguageTransformCodeList(pair.key.toLowerCase()).length === 3,
    };

    errorMsg = !result.isTransformKeyValueFormat
      ? await this.transform('messageerror.description.transformkeyvalue')
      : !result.isKeyNotExisted
      ? await this.transform('messageerror.description.transformsamekeyvalue')
      : !result.hasValue
      ? await this.transform('messageerror.description.transformdescription')
      : '';

    if (errorMsg) {
      await this._toast.presentError(errorMsg);
    }

    return result;
  }

  private async addLanguageKey(newKey: string): Promise<void> {
    let key = await this.storage.getKey();
    if (!key.used.includes(newKey)) {
      key.used.push(newKey);
      key.used.sort();
      await this._systemLanguageRepo.updateLanguageKey(key);
      await this.storage.storeKey(key);
    }
  }

  public async deletePackages(keyList: string[]) {
    let isSuccess: boolean = true;
    let selections = await this.storage.getSelections();
    let usedKey = await this.storage.getKey();
    usedKey.used = usedKey.used.filter(element => !keyList.includes(element));

    for (let i = 0; i < selections.length; i++) {
      let selection: LanguageSelectionType = selections[i];
      if (isSuccess) {
        for (let i = 0; i < keyList.length; i++) {
          if (isSuccess) {
            let key: string = keyList[i];

            selection.package = this._systemLanguagePackage.delete(selection.package, key);
            isSuccess = await this._systemLanguageRepo.updateLanguageSelection(selection);
          }
        }
      }
    }
    if (isSuccess) {
      await this._systemLanguageRepo.updateLanguageKey(usedKey);
    }

    return isSuccess;
  }

  public async deleteLanguageKey(usedKeyValue: string): Promise<void> {
    let key = await this.storage.getKey();

    if (key.used.length > 0) {
      let isExistKey = key.used.includes(usedKeyValue);
      let index = key.used.indexOf(usedKeyValue);
      if (isExistKey && index !== -1) {
        if (index !== -1) {
          key.used.splice(index, 1);
          key.used.sort();
          const result = await this._systemLanguageRepo.updateLanguageKey(key);
          if (result) {
            await this.storage.storeKey(key);
          }
        }
      }
    }
  }
  private isObject(value: any): value is object {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  private isString(value: any): value is string {
    return typeof value === 'string';
  }
}
