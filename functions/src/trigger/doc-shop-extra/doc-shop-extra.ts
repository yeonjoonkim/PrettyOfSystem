import {
  onDocumentCreated,
  onDocumentDeleted,
  onDocumentUpdated,
} from 'firebase-functions/v2/firestore';
import * as Repository from '../../repository/index';
import * as Db from '../../db';
import * as I from '../../interface';
import * as Service from '../../service/index';
import * as Constant from '../../constant';

export const onShopExtraCreate = onDocumentCreated(
  Db.Context.Shop.Extra + '/{extraId}',
  async event => {
    const shopExtraSnapshot = event.data;
    const shopExtraData = !shopExtraSnapshot ? null : shopExtraSnapshot.data();
    const service = shopExtraData !== null ? (shopExtraData as I.ShopExtraDocumentType) : null;

    if (service !== null) {
      const shopC = await Repository.Shop.Configuration.getSelectedConfig(service.shopId);
      const lang = await Repository.System.Language.getAllNameValueTypeList();
      const titleProp = Service.TextTransform.preCleansingTranslateProp(service.titleProp);

      if (shopC !== null && lang.length > 0) {
        const titleRequest = Service.Trigger.ShopService.getTranslateRequestDocument(
          lang,
          shopC.id,
          service.id,
          titleProp,
          Constant.Text.Format.Title
        );

        shopC.translatedRequestIds.push(titleRequest.id);

        const updateShopConfig = await Repository.Shop.Configuration.updateConfig(shopC);

        if (updateShopConfig) {
          await Repository.TranslateRequest.create(titleRequest);
        }
      }
    }
  }
);

export const onShopExtraUpdated = onDocumentUpdated(
  Db.Context.Shop.Extra + '/{extraId}',
  async event => {
    const serviceSnapshot = event.data;
    const afterData = !serviceSnapshot?.after ? null : serviceSnapshot.after.data();
    const beforeData = !serviceSnapshot?.before ? null : serviceSnapshot.before.data();

    const after = afterData !== null ? (afterData as I.ShopExtraDocumentType) : null;
    const before = beforeData !== null ? (beforeData as I.ShopExtraDocumentType) : null;

    if (after !== null && before !== null) {
      const isTitleChange = before.titleProp !== after.titleProp;

      if (isTitleChange) {
        const titleRequestDocument = await Repository.TranslateRequest.getDocument(
          after.id,
          after.shopId,
          Constant.Text.Format.Title
        );
        if (titleRequestDocument !== null) {
          titleRequestDocument.attempt = 0;
          titleRequestDocument.error = [];
          titleRequestDocument.result = [];
          titleRequestDocument.status = Constant.API.TranslateStatus.Pending;
          titleRequestDocument.prop = Service.TextTransform.preCleansingTranslateProp(
            after.titleProp
          );
          await Repository.TranslateRequest.updateDocument(titleRequestDocument);
        } else {
          await Repository.Error.createErrorReport(
            after,
            'Title Could not found',
            'update',
            'onshopExtraUpdated'
          );
        }
      }
    }
  }
);

export const onShopExtraDelete = onDocumentDeleted(
  Db.Context.Shop.Extra + '/{extraId}',
  async event => {
    const serviceSnapshot = event.data;
    const extraData = !serviceSnapshot ? null : serviceSnapshot.data();
    const extra = extraData !== null ? (extraData as I.ShopExtraDocumentType) : null;
    if (extra !== null) {
      let services = await Repository.Shop.Service.getSelectShop(extra.shopId);
      let shopC = await Repository.Shop.Configuration.getSelectedConfig(extra.shopId);
      const titleRequestDocument = await Repository.TranslateRequest.getDocument(
        extra.id,
        extra.shopId,
        Constant.Text.Format.Title
      );

      if (titleRequestDocument !== null && shopC !== null) {
        const deleteIds = [titleRequestDocument.id];
        shopC.translatedRequestIds = shopC.translatedRequestIds.filter(
          id => !deleteIds.includes(id)
        );
        shopC = await handleDeleteShopLanguagePackage(shopC, extra.id);

        await Repository.Shop.Configuration.updateConfig(shopC);
        await Repository.TranslateRequest.deleteDocumentById(titleRequestDocument.id);
      }
      for (let service of services) {
        if (service.extraIds.includes(extra.id)) {
          service.extraIds = service.extraIds.filter(id => extra.id !== id);
          await Repository.Shop.Service.updateService(service);
        }
      }
    }
  }
);

const handleDeleteShopLanguagePackage = async function (
  shopC: I.ShopConfigurationType,
  serviceId: string
): Promise<I.ShopConfigurationType> {
  const updatedShopC = { ...shopC, package: { ...shopC.package } };

  for (let key in updatedShopC.package) {
    if (key.includes(serviceId)) {
      delete updatedShopC.package[key];
    }
  }

  return updatedShopC;
};
