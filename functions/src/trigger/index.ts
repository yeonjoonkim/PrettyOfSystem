// User
export { onUserCreate, onUserDelete, onUserUpdate } from './doc-user/doc-user';

//Translate
export {
  onCreateChatGptTranslateRequest,
  onUpdateChatGptTranslateRequest,
} from './doc-translate/doc-translate';
export { onCreateNewLanguage } from './doc-system-translate/doc-system-translate';
export { onOpenAPIInstanceUpdate } from './open-api-instance/open-api-instnace';

//Shop
export { onShopCreate, onShopDelete, onShopUpdate } from './doc-shop/doc-shop';

//Shop Services
export {
  onShopServiceCreate,
  onShopServiceDelete,
  onShopServiceUpdated,
} from './doc-shop-service/doc-shop-service';
export {
  onShopExtraCreate,
  onShopExtraDelete,
  onShopExtraUpdated,
} from './doc-shop-extra/doc-shop-extra';
export {
  onShopPackageCreate,
  onShopPackageDeleted,
  onShopPackageUpdated,
} from './doc-shop-package/doc-shop-package';
