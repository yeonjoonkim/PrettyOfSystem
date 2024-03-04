import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import * as Repository from '../../../repository/index';
import * as Db from '../../../db';
import * as I from '../../../interface';
import { logger } from 'firebase-functions/v2';
import * as Constant from '../../../constant';
import * as Service from '../../../service/index';
export const OnRequestUpdateScheduleWorkingStatus = onDocumentCreated(
  Db.Context.Shop.UpdateSchedule.WorkingStatus + '/{documentId}',
  async event => {
    const requestSnapshot = event.data;
    const requestData = !requestSnapshot ? null : requestSnapshot.data();
    const request = requestData !== null ? (requestData as I.ShopScheduleUpdateWorkingStatusDocumentType) : null;
    let target =
      request !== null ? await Repository.Shop.Schedule.getById(request.shopId, request.documentId) : null;
    if (request !== null && target !== null) {
      logger.info('start Request');
      if (!request.isWorking) {
        const inCompletedConsults = target.scheduledConsults.filter(c =>
          Constant.Consult_InCompletedStatusTypes.some(s => c.status.type === s)
        );
        const completedConsults = target.scheduledConsults.filter(c =>
          Constant.Consult_CompletedStatusTypes.some(s => c.status.type === s)
        );
        target.scheduledConsults = completedConsults;

        await Repository.Shop.Consult.updateToPendingStatusByIds(
          request.shopId,
          inCompletedConsults.map(c => c.consultId)
        );
      }
      target.isWorking = request.isWorking;
      await Repository.Shop.Schedule.updateDocument(target);
      await Service.sleep(1000);
      await Repository.Shop.Schedule.UpdateRequest.WorkingStatus.deleteDocument(request.shopId, event.id);
    }
  }
);
