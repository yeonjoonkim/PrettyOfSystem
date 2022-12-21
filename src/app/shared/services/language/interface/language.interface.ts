export interface ILanguagePackageItem
{
  language: {
    code: string,
    name: string,
    flag: string
  };
  file: any;
}

export interface ILanguagePackage{
  //langauge
  language: string;
  englishLangauge: string;
  koreanLangauge: string;
  chineseLangauge: string;

  //Setting
  settingTitle: string;
}


