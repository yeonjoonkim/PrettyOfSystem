const system: string = 'system/';
const systemLanguage: string = system + 'language/';
const systemMenu: string = system + 'menu/';
const systemPlan: string = system + 'plan/';
const systemRole: string = system + 'role/';
const systemShop: string = system + 'shop/';

const shopConfiguration: string = 'shopConfiguration';
const user: string = 'user';
const shop: string = 'shop/';
const shopService: string = shop + '{shopId}/service';
const shopExtra: string = shop + '{shopId}/extra';
const shopPackage: string = shop + '{shopId}/package';
//Reporter
const FunctionError: string = 'functionError';

//OpenApi
const OpenApiInstance: string = 'openApiInstance';
const ChatGptTranslateRequest: string = 'chatGptTranslateRequest';
const SystemLanguageTranslateRequest: string = 'systemLanguageTranslateRequest';

export const Context = {
  OpenApiInstance: OpenApiInstance,
  SystemLangaugeTranslateRequest: SystemLanguageTranslateRequest,
  ChatGptTranslateRequest: ChatGptTranslateRequest,
  ShopConfiguration: shopConfiguration,
  User: user,
  Shop: {
    Service: shopService,
    Extra: shopExtra,
    Package: shopPackage,
  } as const,
  System: {
    Language: {
      Selection: systemLanguage + 'selection',
      Key: systemLanguage + 'key',
    } as const,
    Menu: {
      Category: systemMenu + 'category',
    } as const,
    Plan: {
      Option: systemPlan + 'option',
    } as const,
    Role: {
      Configuration: systemRole + 'configuration',
    } as const,
    Shop: {
      Category: systemShop + 'category',
      Country: systemShop + 'country',
    },
  } as const,
  Report: {
    FunctionError: FunctionError,
  } as const,
} as const;

export const ShopService = (shopId: string): string => `shop/${shopId}/service/`;
export const ShopExtra = (shopId: string): string => `shop/${shopId}/extra/`;
export const ShopPackage = (shopId: string): string => `shop/${shopId}/package/`;
