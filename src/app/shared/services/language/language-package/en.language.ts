import { ILanguagePackage } from "../interface/language.interface";

const enLangPackage: ILanguagePackage = {
  language: {
    language: 'Language',
    english: 'English',
    korean: 'Korean',
    chinese: 'Chinese',
  },
    menu :
    {
    setting: 'Setting',
    management: 'Management',
    systemManagement: 'System Management',
    shopManagement: 'Shop Management',
    userManagement: 'User Management',
    paymentSubscription: 'Payment Subscription',
    signOut: 'Sign Out',
    signIn: 'Sign In',
    edit: 'Edit'
  },
  system:{
    open: 'Open'
  },
  systemModal: {
    dictionary: 'Language Transform Dictionary',
    key: 'Key',
    value: 'Value',
  }
};


export default enLangPackage;
