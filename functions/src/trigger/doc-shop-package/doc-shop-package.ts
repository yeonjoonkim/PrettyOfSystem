import { onDocumentUpdated } from 'firebase-functions/v2/firestore';
import * as Repository from '../../repository/index';
import * as Db from '../../db';
import * as I from '../../interface';
import * as Service from '../../service/index';
import * as Constant from '../../constant';

export const onShopPackageUpdated = onDocumentUpdated(Db.Context.Shop.Package + '/{packageId}', async event => {
  const packageSnapshot = event.data;
  const afterData = !packageSnapshot?.after ? null : packageSnapshot.after.data();
  const beforeData = !packageSnapshot?.before ? null : packageSnapshot.before.data();

  const after =
    afterData !== null && afterData !== undefined
      ? Service.Shop.Document.Package.override(afterData as I.ShopPackageDocumentType)
      : null;
  const before =
    beforeData !== null && beforeData !== undefined
      ? Service.Shop.Document.Package.override(beforeData as I.ShopPackageDocumentType)
      : null;

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
        titleRequestDocument.createdDate = new Date();
        titleRequestDocument.prop = Service.TextTransform.preCleansingTranslateProp(after.titleProp);

        await Repository.TranslateRequest.updateDocument(titleRequestDocument);
      } else {
        await Repository.Error.createErrorReport(after, 'Title Could not found', 'update', 'onShopPackageUpdated');
      }
    }
  }
});

// export const onShopPackageDeleted = onDocumentDeleted(
//   Db.Context.Shop.Package + '/{packageId}',
//   async event => {
//     const packageSnapshot = event.data;
//     const packageData = !packageSnapshot ? null : packageSnapshot.data();
//     const pack = packageData !== null ? (packageData as I.ShopPackageDocumentType) : null;

//     if (pack !== null) {
//       let shopC = await Repository.Shop.Configuration.getSelectedConfig(pack.shopId);
//       const titleRequestDocument = await Repository.TranslateRequest.getDocument(
//         pack.id,
//         pack.shopId,
//         Constant.Text.Format.Title
//       );

//       if (titleRequestDocument !== null && shopC !== null) {
//         const deleteIds = [titleRequestDocument.id];
//         shopC.translatedRequestIds = shopC.translatedRequestIds.filter(
//           id => !deleteIds.includes(id)
//         );
//         shopC = await handleDeleteShopLanguagePackage(shopC, pack.id);

//         await Repository.Shop.Configuration.updateConfig(shopC);
//         await Repository.TranslateRequest.deleteDocumentById(titleRequestDocument.id);
//       }
//     }
//   }
// );

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
