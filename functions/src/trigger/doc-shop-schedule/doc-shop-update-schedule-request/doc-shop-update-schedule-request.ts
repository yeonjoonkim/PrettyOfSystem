import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import * as Repository from '../../../repository/index';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Class from '../../../class';

export const onScheduleUpdateRequest = onDocumentCreated(
  Db.Context.ScheduleUpdateRequest + '/{shopId}',
  async event => {
    const snapshot = event.data;
    const snapshotData = !snapshot ? null : snapshot.data();
    const request = snapshotData !== null ? (snapshotData as I.ShopScheduleUpdateRequestDocumentType) : null;
    if (request !== null) {
      const hasBlockingUpdating = await Repository.Shop.Schedule.UpdateRequest.hasBlockingRequest(
        request.shopId,
        request.documentId,
        request.shopTimestamp
      );
      if (hasBlockingUpdating) {
        await Repository.Shop.Schedule.UpdateRequest.requestBlocked(request);
      } else {
        const document = new Class.ShopScheduleDocument(request.after);
        document.removeBreakTimeOverlaps();
        document.removeOutOfRangeBreakTime();
        document.removeConsultOverlaps();
        document.removeOutOfRangeConsult();
        if (document.deletedConsult.length > 0) {
          await Repository.Shop.Schedule.UpdateRequest.requestFail(request);
          return;
        } else {
          await Repository.Shop.Schedule.updateDocument(request.after);
          await Repository.Shop.Schedule.UpdateRequest.requestSuccess(request);
        }
      }
    }
  }
);
