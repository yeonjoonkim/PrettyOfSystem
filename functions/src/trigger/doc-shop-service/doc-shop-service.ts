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
      const isOptionChanged = Service.Trigger.ShopService.onChangeOption(before, after);

      await handleOptionChange(isOptionChanged, after.shopId, after.id);

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

      let packages = await Repository.Shop.Package.getSelectShop(service.shopId);
      packages = packages.filter(s => s.services.filter(s => s.id === service.id).length > 0);
      packages = handleDeleteServiceInPackage(service.options, packages, service.id);

      const deletePackage = packages.filter(s => s.services.length === 0);
      const updatePackage = packages.filter(s => s.services.length > 0);

      for (let d of deletePackage) {
        await Repository.Shop.Package.deletePackage(d);
      }

      for (let u of updatePackage) {
        u = Service.Trigger.ShopPackage.updatePrice(u);
        if (u.discountPrice === 0) {
          await Repository.Shop.Package.deletePackage(u);
        } else {
          await Repository.Shop.Package.updatePackage(u);
        }
      }

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

const handleOptionChange = async function (
  change: I.OnChangeShopServiceOptionType,
  shopId: string,
  serviceId: string
) {
  let packages = await Repository.Shop.Package.getSelectShop(shopId);
  packages = packages.filter(s => s.services.filter(s => s.id === serviceId).length > 0);
  packages = handleUpdateServiceInPackage(change.update, packages, serviceId);
  packages = handleDeleteServiceInPackage(change.delete, packages, serviceId);

  const deletePackage = packages.filter(s => s.services.length === 0 || s.discountPrice === 0);
  const updatePackage = packages.filter(s => s.services.length > 0 || s.discountPrice === 0);

  for (let d of deletePackage) {
    await Repository.Shop.Package.deletePackage(d);
  }

  for (let u of updatePackage) {
    u = Service.Trigger.ShopPackage.updatePrice(u);
    await Repository.Shop.Package.updatePackage(u);
  }
};

const handleDeleteServiceInPackage = function (
  deletes: I.ShopServiceOptionType[],
  packages: I.ShopPackageDocumentType[],
  serviceId: string
) {
  for (let d of deletes) {
    for (let pack of packages) {
      pack.services = pack.services.filter(
        s => !(s.id === serviceId && d.min === s.option.min && d.price === s.option.price)
      );
    }
  }

  return packages;
};

const handleUpdateServiceInPackage = function (
  changes: I.OnChangeSopServiceOptionUpdateType[],
  packages: I.ShopPackageDocumentType[],
  serviceId: string
) {
  for (let c of changes) {
    for (let pack of packages) {
      let service = pack.services.find(s => s.id === serviceId && c.previous.min === s.option.min);
      const index = pack.services.findIndex(
        s => s.id === serviceId && c.previous.min === s.option.min
      );

      if (service !== null && service !== undefined) {
        service.option.price = c.current.price;
        pack.services[index] = service;
      }
    }
  }

  return packages;
};
