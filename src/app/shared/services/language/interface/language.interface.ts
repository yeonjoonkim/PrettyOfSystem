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
  language: ILanguage;
  menu: ILanguagePackageMenu;
}

export interface ILanguage{
  language: string;
  englishLangauge: string;
  koreanLangauge: string;
  chineseLangauge: string;
}

//Setting
export interface ILanguagePackageMenu{
  setting: string;
  management: string;
  systemManagement: string;
  userManagement: string;
  shopManagement: string;
  paymentSubscriptionManagement: string;
  signOut: string;
  signIn: string;
  edit: string;
}




