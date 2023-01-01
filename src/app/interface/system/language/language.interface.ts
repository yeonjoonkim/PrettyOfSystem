export interface ILanguageSelection {
  id?: string;
  code: string;
  name: string;
  flag: string;
  description: string;
  package: {};
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

