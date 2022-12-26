import { ILanguagePackage } from "../interface/language.interface";

const krLangPackage: ILanguagePackage = {
  language:{
  language: '언어',
  english: '영어',
  korean: '한국어',
  chinese: '중국어'
  },
  menu :
  {
  setting: '설정',
  management: '관리',
  systemManagement: '시스템 관리',
  shopManagement: '점포 관리',
  userManagement: '사용자 관리',
  paymentSubscription: '결제 구독 관리',
  signOut: '로그아웃',
  signIn: '로그인',
  edit: '편집'
  },
  system:{
    open: '열기'
  },
  systemModal: {
    dictionary: '언어 변형 사전',
    key: '키',
    value: '값',
  }
};

export default krLangPackage;
