import { onDocumentDeleted, onDocumentUpdated } from 'firebase-functions/v2/firestore';
import * as Repository from '../../repository/index';
import * as Db from '../../db';
import * as I from '../../interface';
import * as Service from '../../service/index';
import * as Constant from '../../constant';

export const onShopExtraUpdated = onDocumentUpdated(Db.Context.Shop.Extra + '/{extraId}', async event => {
  const serviceSnapshot = event.data;
  const afterData = !serviceSnapshot?.after ? null : serviceSnapshot.after.data();
  const beforeData = !serviceSnapshot?.before ? null : serviceSnapshot.before.data();

  const after =
    afterData !== null && afterData !== undefined
      ? Service.Override.Shop.Document.Extra.override(afterData as I.ShopExtraDocumentType)
      : null;
  const before =
    beforeData !== null && beforeData !== undefined
      ? Service.Override.Shop.Document.Extra.override(beforeData as I.ShopExtraDocumentType)
      : null;

  if (after !== null && before !== null) {
    const isTitleChange = before.titleProp !== after.titleProp;
    const isPriceChange = before.price !== after.price;

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
        titleRequestDocument.prop = Service.TextTransform.preCleansingTranslateProp(after.titleProp);
        await Repository.TranslateRequest.updateDocument(titleRequestDocument);
      } else {
        await Repository.Error.createErrorReport(after, 'Title Could not found', 'update', 'onshopExtraUpdated');
      }
    }

    if (isPriceChange) {
      let packages = await Repository.Shop.Package.getSelectShop(after.shopId);
      packages = packages.filter(s => s.extras.filter(s => s.id === after.id).length > 0);

      for (let pack of packages) {
        pack = Service.Trigger.ShopPackage.updateExtra(after, pack);
        pack = Service.Trigger.ShopPackage.updatePrice(pack);
        if (pack.discountPrice === 0) {
          await Repository.Shop.Package.deletePackage(pack);
        } else {
          await Repository.Shop.Package.updatePackage(pack);
        }
      }
    }
  }
});

export const onShopExtraDelete = onDocumentDeleted(Db.Context.Shop.Extra + '/{extraId}', async event => {
  const serviceSnapshot = event.data;
  const extraData = !serviceSnapshot ? null : serviceSnapshot.data();
  const extra =
    extraData !== null && extraData !== undefined
      ? Service.Override.Shop.Document.Extra.override(extraData as I.ShopExtraDocumentType)
      : null;
  if (extra !== null) {
    let services = await Repository.Shop.Service.getSelectShop(extra.shopId);

    await handleDeleteShopPackageExtra(extra);

    for (let service of services) {
      if (service.extraIds.includes(extra.id)) {
        service.extraIds = service.extraIds.filter(id => extra.id !== id);
        await Repository.Shop.Service.updateService(service);
      }
    }
  }
});

const handleDeleteShopPackageExtra = async function (extra: I.ShopExtraDocumentType) {
  const packages = await Repository.Shop.Package.getSelectShop(extra.shopId);
  const selected = packages.filter(p => p.extras.filter(ex => ex.id === extra.id).length > 0);

  for (let pack of selected) {
    pack = Service.Trigger.ShopPackage.deleteExtra(extra, pack);
    pack = Service.Trigger.ShopPackage.updatePrice(pack);
    if (pack.discountPrice === 0) {
      await Repository.Shop.Package.deletePackage(pack);
    } else {
      await Repository.Shop.Package.updatePackage(pack);
    }
  }
};

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
