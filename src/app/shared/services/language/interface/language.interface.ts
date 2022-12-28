//Language Package
export interface ILanguagePackageItem {
  language: ILanguagePackageDescription;
  file: any;
}

//Description
export interface ILanguagePackageDescription {
  code: string;
  name: string;
  flag: string;
}

//Key Pair Value
export interface ILanugagePackageKeyPairValue {
  key: string;
  value: string;
}

//Transform Package
export interface ILanguagePackage {
  language: ILanguage;
  menu: ILanguagePackageMenu;
  system: ILanguagePackageSystem;
}

//Language
export interface ILanguage {
  language: string;
  english: string;
  korean: string;
  chinese: string;
}

//Menu
export interface ILanguagePackageMenu {
  setting: string;
  management: string;
  systemManagement: string;
  userManagement: string;
  shopManagement: string;
  paymentSubscription: string;
  signOut: string;
  signIn: string;
  edit: string;
}

export interface ILanguagePackageSystem {
  open: string;
  modal: ILanguagePackageSystemModal;
  menuSelection: ILanguagePackageSystemMenuSelection;
}

export interface ILanguagePackageSystemMenuSelection{
  route: string;
}

//System Modal
export interface ILanguagePackageSystemModal{
  dictionary: string;
  key: string;
  value: string;
}


