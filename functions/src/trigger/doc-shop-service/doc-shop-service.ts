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

export const onShopServiceCreate = onDocumentCreated(
  Db.Context.Shop.Service + '/{serviceId}',
  async event => {
    const shopServiceSnapshot = event.data;
    const shopServiceData = !shopServiceSnapshot ? null : shopServiceSnapshot.data();
    const service =
      shopServiceData !== null ? (shopServiceData as I.ShopServiceDocumentType) : null;

    if (service !== null) {
      const shopC = await Repository.Shop.Configuration.getSelectedConfig(service.shopId);
      const lang = await Repository.System.Language.getAllNameValueTypeList();
      const titleProp = Service.TextTransform.preCleansingTranslateProp(service.titleProp);
      const descriptionProp = Service.TextTransform.preCleansingTranslateProp(
        service.descriptionProp
      );
      if (shopC !== null && lang.length > 0) {
        const titleRequest = Service.Trigger.ShopService.getTranslateRequestDocument(
          lang,
          shopC.id,
          service.id,
          titleProp,
          Constant.Text.Format.Title
        );

        const descriptionRequest = Service.Trigger.ShopService.getTranslateRequestDocument(
          lang,
          shopC.id,
          service.id,
          descriptionProp,
          Constant.Text.Format.Description
        );

        shopC.translatedRequestIds.push(titleRequest.id);
        shopC.translatedRequestIds.push(descriptionRequest.id);

        const updateShopConfig = await Repository.Shop.Configuration.updateConfig(shopC);

        if (updateShopConfig) {
          const sleep = async (duration: number) => {
            return new Promise(resolve => setTimeout(resolve, duration));
          };
          await Repository.TranslateRequest.create(titleRequest);
          await sleep(1000);
          await Repository.TranslateRequest.create(descriptionRequest);
        }
      }
    }
  }
);

export const onShopServiceUpdated = onDocumentUpdated(
  Db.Context.Shop.Service + '/{serviceId}',
  async event => {
    const serviceSnapshot = event.data;
    const afterData = !serviceSnapshot?.after ? null : serviceSnapshot.after.data();
    const beforeData = !serviceSnapshot?.before ? null : serviceSnapshot.before.data();

    const after = afterData !== null ? (afterData as I.ShopServiceDocumentType) : null;
    const before = beforeData !== null ? (beforeData as I.ShopServiceDocumentType) : null;

    if (after !== null && before !== null) {
      const isTitleChange = before.titleProp !== after.titleProp;
      const isDescriptionChange = before.descriptionProp !== after.descriptionProp;

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
            'onShopServiceUpdated'
          );
        }
      }

      if (isDescriptionChange) {
        const descriptionRequestDocument = await Repository.TranslateRequest.getDocument(
          after.id,
          after.shopId,
          Constant.Text.Format.Description
        );
        if (descriptionRequestDocument !== null) {
          descriptionRequestDocument.attempt = 0;
          descriptionRequestDocument.error = [];
          descriptionRequestDocument.result = [];
          descriptionRequestDocument.status = Constant.API.TranslateStatus.Pending;
          descriptionRequestDocument.prop = Service.TextTransform.preCleansingTranslateProp(
            after.descriptionProp
          );
          await Repository.TranslateRequest.updateDocument(descriptionRequestDocument);
        } else {
          await Repository.Error.createErrorReport(
            after,
            'Description Could not found',
            'update',
            'onShopServiceUpdated'
          );
        }
      }
    }
  }
);

export const onShopServiceDelete = onDocumentDeleted(
  Db.Context.Shop.Service + '/{serviceId}',
  async event => {
    const serviceSnapshot = event.data;
    const serviceData = !serviceSnapshot ? null : serviceSnapshot.data();
    const service = serviceData !== null ? (serviceData as I.ShopServiceDocumentType) : null;

    if (service !== null) {
      let shopC = await Repository.Shop.Configuration.getSelectedConfig(service.shopId);
      const titleRequestDocument = await Repository.TranslateRequest.getDocument(
        service.id,
        service.shopId,
        Constant.Text.Format.Title
      );
      const descriptionRequestDocument = await Repository.TranslateRequest.getDocument(
        service.id,
        service.shopId,
        Constant.Text.Format.Description
      );

      if (titleRequestDocument !== null && descriptionRequestDocument !== null && shopC !== null) {
        const deleteIds = [titleRequestDocument.id, descriptionRequestDocument.id];
        shopC.translatedRequestIds = shopC.translatedRequestIds.filter(
          id => !deleteIds.includes(id)
        );
        shopC = await handleDeleteShopLanguagePackage(shopC, service.id);

        await Repository.Shop.Configuration.updateConfig(shopC);
        await Repository.TranslateRequest.deleteDocumentById(titleRequestDocument.id);
        await Repository.TranslateRequest.deleteDocumentById(descriptionRequestDocument.id);
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
