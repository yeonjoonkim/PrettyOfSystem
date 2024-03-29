const system: string = 'system/';
const systemLanguage: string = system + 'language/';
const systemMenu: string = system + 'menu/';
const systemRole: string = system + 'role/';
const systemShop: string = system + 'shop/';

//Signature Transfer
const sigantureTransfer: string = 'signatureTransfer';

//Shop
const shopConfiguration: string = 'shopConfiguration';
const user: string = 'user';
const shop: string = 'shop/';
const shopService: string = shop + '{shopId}/service';
const shopExtra: string = shop + '{shopId}/extra';
const shopPackage: string = shop + '{shopId}/package';
const shopCoupon: string = shop + '{shopId}/coupon';
const shopConsult: string = shop + '{shopId}/consult';
const shopPayment: string = shop + '{shopId}/payment';
const shopTransaction: string = shop + '{shopId}/transaction';
const shopSchedule: string = shop + '{shopId}/schedule';

//Reporter
const FunctionError: string = 'functionError';

//OpenApi
const OpenApiInstance: string = 'openApiInstance';
const ChatGptTranslateRequest: string = 'chatGptTranslateRequest';
const SystemLanguageTranslateRequest: string = 'systemLanguageTranslateRequest';

//Waiting List
const waitingListCriteria: string = 'waitingListCriteria';
const waitingListSession: string = 'waitingListSession';

//Change Phone Number Request
const changePhoneNumberRequest: string = 'changePhoneNumberRequest';

//ShopScheduler
const shopScheduler: string = 'shopScheduler';
//ShopScheduleUpdateRequest
const scheduleUpdateRequest: string = 'shopScheduleUpdateRequest';

export const Context = {
  OpenApiInstance: OpenApiInstance,
  SystemLangaugeTranslateRequest: SystemLanguageTranslateRequest,
  ChatGptTranslateRequest: ChatGptTranslateRequest,
  ShopConfiguration: shopConfiguration,
  ShopScheduler: shopScheduler,
  ScheduleUpdateRequest: scheduleUpdateRequest,
  User: user,
  SigantureTransfer: sigantureTransfer,
  ChangePhoneNumberRequest: changePhoneNumberRequest,
  Shop: {
    Service: shopService,
    Extra: shopExtra,
    Package: shopPackage,
    Coupon: shopCoupon,
    Consult: shopConsult,
    Transaction: shopTransaction,
    Payment: shopPayment,
    Schedule: shopSchedule,
  } as const,
  WaitingList: {
    Criteria: waitingListCriteria,
    Session: waitingListSession,
  } as const,
  System: {
    Language: {
      Selection: systemLanguage + 'selection',
      Key: systemLanguage + 'key',
    } as const,
    Menu: {
      Category: systemMenu + 'category',
    } as const,
    Role: {
      Configuration: systemRole + 'configuration',
    } as const,
    Shop: {
      Category: systemShop + 'category',
      Country: systemShop + 'country',
      Capacity: systemShop + 'capacity',
    },
  } as const,
  Report: {
    FunctionError: FunctionError,
  } as const,
} as const;

export const ShopService = (shopId: string): string => `shop/${shopId}/service/`;
export const ShopExtra = (shopId: string): string => `shop/${shopId}/extra/`;
export const ShopPackage = (shopId: string): string => `shop/${shopId}/package/`;
export const ShopCoupon = (shopId: string): string => `shop/${shopId}/coupon/`;
export const ShopConsult = (shopId: string): string => `shop/${shopId}/consult/`;
export const ShopPayment = (shopId: string): string => `shop/${shopId}/payment/`;
export const ShopTransaction = (shopId: string): string => `shop/${shopId}/transaction/`;
export const ShopSchedule = (shopId: string): string => `shop/${shopId}/schedule/`;

export const ShopLogo = (shopId: string, file: File): string =>
  `logo/${shopId}/${new Date().getTime()}/${file.name}`;

export const ShopImage1 = (shopId: string, file: File): string =>
  `shopimage1/${shopId}/${new Date().getTime()}/${file.name}`;

export const ShopImage2 = (shopId: string, file: File): string =>
  `shopimage2/${shopId}/${new Date().getTime()}/${file.name}`;

export const ShopImage3 = (shopId: string, file: File): string =>
  `shopimage3/${shopId}/${new Date().getTime()}/${file.name}`;

export const Storage = {
  Shop: {
    Logo: (shopId: string) => `logo/${shopId}/`,
    Image1: (shopId: string) => `shopimage1/${shopId}/`,
    Image2: (shopId: string) => `shopimage2/${shopId}/`,
    Image3: (shopId: string) => `shopimage3/${shopId}/`,
  } as const,
} as const;
