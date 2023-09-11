import { ITextTransformObject } from 'src/app/service/global/text-transform/text-transform.service';
import { PairKeyValueType } from '../../global/global.interface';

export interface ILanguageSelection {
  id?: string;
  code: string;
  name: string;
  description: string;
  package: {};
  isDefault: boolean;
}

export interface ILanguageKey {
  id?: string;
  used: string[];
}

export interface ILanguageTrasnlationResult {
  description: string;
  name: string;
  isSaved: boolean;
  isEmpty: boolean;
  isKeyNotExisited: boolean;
}

export interface ILanguageTranslateItem {
  isEmpty: boolean;
  translated: ILanguageTranslateResult;
}

export interface IAddLanguageTransformSaveCommand {
  hasValue: boolean;
  isKeyNotExisted: boolean;
  isTransformKeyValueFormat: boolean;
}

export interface ILanguageTranslatedCriteria {
  name: string[];
  code: string[];
  format: ILanguageTranslatedFormatCriteria;
}

export interface ILanguageTranslatedFormatCriteria {
  isTitle: boolean;
  isUpper: boolean;
  isLower: boolean;
  isDescription: boolean;
}

export interface ILanguageTranslateResult {
  [key: string]: string;
}

export interface LanugaeTransformPopOverCriteriaType {
  key: string;
  value: string;
  selectedLangCode: string;
}

export interface CreateNewPackageCommandType {
  code: string;
  defaultKeyPairList: PairKeyValueType[];
  newPackage: ITextTransformObject;
  errorKeyPairList: PairKeyValueType[];
  translateTo: string;
  end: number;
  current: number;
  currentKeyPair: PairKeyValueType;
  inProgress: boolean;
  endTransaction: boolean;
  attemptError: boolean;
}
