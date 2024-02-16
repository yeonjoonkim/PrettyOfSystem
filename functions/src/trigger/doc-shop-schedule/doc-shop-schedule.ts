// import { onDocumentUpdated } from 'firebase-functions/v2/firestore';
// import * as Repository from '../../repository/index';
// import * as Db from '../../db';
// import * as I from '../../interface';
// import * as C from '../../class';
// import * as Service from '../../service/index';

// export const onShopScheduleUpdate = onDocumentUpdated(Db.Context.Shop.Schedule + '/{scheduleId}', async event => {
//   const snapshot = event.data;
//   const afterData = !snapshot?.after ? null : snapshot.after.data();

//   const doc =
//     afterData !== null
//       ? new C.ShopScheduleDocument(
//           Service.Override.Shop.Document.Schedule.override(afterData as I.ShopScheduleDocumentType)
//         )
//       : null;

//   if (doc !== null) {
//     //Validate Deactivated
//     const shopNow = Service.Date.shopNow(doc.shopTimezone);
//     const currentDate = Service.Date.startDay(shopNow);
//     const isDeactivated = !doc.active || !doc.displayInSystem;
//     const isFutureDocument = currentDate <= doc.startOfDay;

//     if (!isDeactivated) {
//       doc.removeBreakTimeOverlaps();
//       doc.removeConsultOverlaps();
//       doc.removeOutOfRangeBreakTime();
//       doc.removeOutOfRangeConsult();
//     } else {
//       const wipeOutConsults = isDeactivated && doc.scheduledConsults.length > 0 && isFutureDocument;
//       if (wipeOutConsults) {
//         for (const scheduled of doc.scheduledConsults) {
//           doc.deleteConsult(scheduled.consultId);
//         }
//       }
//     }

//     const isFuturecDocumentUpdated = doc.updated && isFutureDocument;

//     if (isFuturecDocumentUpdated) {
//       await Repository.Shop.Schedule.updateDocument(doc.data);
//       if (doc.deletedConsult.length > 0) {
//         await updateConsultToPendtingStatus(doc.data, doc.deletedConsult, isFutureDocument);
//       }
//     }
//   }
// });

// const updateConsultToPendtingStatus = async function (
//   doc: I.ShopScheduleDocumentType,
//   consults: I.ShopEmployeeScheduledConsultType[],
//   isFuture: boolean
// ) {
//   const consultIds = consults.map(consult => consult.consultId);
//   const consultDocuments = await Repository.Shop.Consult.getDocumentsById(doc.shopId, consultIds);
//   if (isFuture) {
//     await Repository.Shop.Consult.updateToPendingStatus(consultDocuments);
//   }
// };
