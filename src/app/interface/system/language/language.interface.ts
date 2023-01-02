export interface ILanguageSelection {
  id?: string;
  code: string;
  name: string;
  flag: string;
  description: string;
  package: {};
  isDefault: boolean;
}

export interface ILanguageKey{
  id?: string;
  used: string[];
}

export interface ILanguageTransform {
  description: string;
  key: string;
  isTitle: boolean;
  isDescription: boolean;
}

export interface ILanguageNameCodeCollection {
  name: string[],
  code: string[]
}

export interface ILanguageTranslateResult{
  [key: string]: string;
}

export interface ILanguageTransformKeyPairValue{
  key: string;
  value: string;
}
