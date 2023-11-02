import { onDocumentDeleted, onDocumentUpdated } from 'firebase-functions/v2/firestore';
import * as Repository from '../../repository/index';
import * as Db from '../../db';
import * as I from '../../interface';
import * as Service from '../../service/index';
import * as Constant from '../../constant';

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

      await handleOptionChangePacakge(isOptionChanged, after.shopId, after.id);
      await handleUpdateCoupon(isOptionChanged, after.shopId, after.id);
      if (isTitleChange) {
        const coupons = await Repository.Shop.Coupon.getSelectShop(after.shopId);
        const selectedCoupons = coupons.filter(s => s.serviceId === after.id);

        for (let coupon of selectedCoupons) {
          coupon.titleProp = Service.TextTransform.preCleansingTranslateProp(after.titleProp);
          await Repository.Shop.Coupon.updateCoupon(coupon);
        }

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
      let packages = await Repository.Shop.Package.getSelectShop(service.shopId);
      let coupons = await Repository.Shop.Coupon.getSelectShop(service.shopId);

      //Delete Package;
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

      //Delete Coupons
      coupons = coupons.filter(s => s.serviceId === service.id);
      for (let c of coupons) {
        await Repository.Shop.Coupon.deleteCoupon(c);
      }
    }
  }
);

const handleOptionChangePacakge = async function (
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

const handleUpdateCoupon = async function (
  change: I.OnChangeShopServiceOptionType,
  shopId: string,
  serviceId: string
) {
  let coupons = await Repository.Shop.Coupon.getSelectShop(shopId);
  const updateCoupons = coupons.filter(
    s =>
      s.serviceId === serviceId &&
      change.update.filter(u => u.previous.min === s.option.min).length > 0
  );
  const deleteCoupons = coupons.filter(
    c => change.delete.filter(s => c.option.min === s.min && c.option.price === s.price).length > 0
  );

  for (let d of deleteCoupons) {
    await Repository.Shop.Coupon.deleteCoupon(d);
  }

  for (let u of updateCoupons) {
    const updateOption = change.update.find(
      c => c.previous.min === u.option.min && c.previous.price === u.option.price
    );
    if (updateOption !== undefined) {
      u = Service.Trigger.ShopCoupon.updateDocumentFormServiceOption(u, updateOption.current);
      await Repository.Shop.Coupon.updateCoupon(u);
    }
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

// let shopC = await Repository.Shop.Configuration.getSelectedConfig(service.shopId);
// const titleRequestDocument = await Repository.TranslateRequest.getDocument(
//   service.id,
//   service.shopId,
//   Constant.Text.Format.Title
// );
// const descriptionRequestDocument = await Repository.TranslateRequest.getDocument(
//   service.id,
//   service.shopId,
//   Constant.Text.Format.Description
// );

// if (titleRequestDocument !== null && descriptionRequestDocument !== null && shopC !== null) {
//   const deleteIds = [titleRequestDocument.id, descriptionRequestDocument.id];
//   shopC.translatedRequestIds = shopC.translatedRequestIds.filter(
//     id => !deleteIds.includes(id)
//   );
//   shopC = await handleDeleteShopLanguagePackage(shopC, service.id);

//   await Repository.Shop.Configuration.updateConfig(shopC);
//   await Repository.TranslateRequest.deleteDocumentById(titleRequestDocument.id);
//   await Repository.TranslateRequest.deleteDocumentById(descriptionRequestDocument.id);
// }

// const handleDeleteShopLanguagePackage = async function (
//   shopC: I.ShopConfigurationType,
//   serviceId: string
// ): Promise<I.ShopConfigurationType> {
//   const updatedShopC = { ...shopC, package: { ...shopC.package } };

//   for (let key in updatedShopC.package) {
//     if (key.includes(serviceId)) {
//       delete updatedShopC.package[key];
//     }
//   }

//   return updatedShopC;
// };
