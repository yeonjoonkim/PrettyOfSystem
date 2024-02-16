// User
export { onUserCreate, onUserDelete, onUserUpdate } from './doc-user/doc-user';

//Translate
export { onCreateChatGptTranslateRequest, onUpdateChatGptTranslateRequest } from './doc-translate/doc-translate';
export { onCreateNewLanguage } from './doc-system-translate/doc-system-translate';
export { onOpenAPIInstanceUpdate } from './open-api-instance/open-api-instnace';

//Shop
export { onShopCreate, onShopDelete, onShopUpdate } from './doc-shop/doc-shop';

//Shop Services
export { onShopServiceDelete, onShopServiceUpdated } from './doc-shop-service/doc-shop-service';
export { onShopExtraDelete, onShopExtraUpdated } from './doc-shop-extra/doc-shop-extra';
export { onShopPackageUpdated } from './doc-shop-package/doc-shop-package';

//Shop Consult
export { OnConsultCreate } from './doc-consult/doc-consult';

// //Shop Schedule
// export { onShopScheduleUpdate } from './doc-shop-schedule/doc-shop-schedule';
