import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import * as Repository from '../../../repository/index';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Service from '../../../service/index';
import * as C from '../../../class';
import { logger } from 'firebase-functions/v2';
import * as Constant from '../../../constant';

export const OnRequestUpdateScheduleWorkingStatus = onDocumentCreated(
  Db.Context.Shop.UpdateSchedule.WorkingStatus + '/{documentId}',
  async event => {
    const requestSnapshot = event.data;
    const requestData = !requestSnapshot ? null : requestSnapshot.data();
    const request = requestData !== null ? (requestData as I.ShopScheduleUpdateWorkingStatusDocumentType) : null;
    let target =
      request !== null ? await Repository.Shop.Schedule.getById(request.shopId, request.documentId) : null;
    if (request !== null && target !== null) {
      target = Service.Override.Shop.Document.Schedule.override(target);
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
      if (request.isWorking) {
        const emp = await Repository.User.getSelectedUser(request.employeeId);
        const shop = await Repository.Shop.Configuration.getSelectedConfig(request.shopId);
        const selectedShop = emp !== null ? emp.associatedShops.find(s => s.shopId === request.shopId) : undefined;

        if (emp !== null && shop !== null && selectedShop !== undefined && selectedShop !== null) {
          const startOfDay = target.startOfDay;
          const day = Service.Date.getDayType(startOfDay);
          // Employee
          target.startDateTime = Service.Date.formatByTimeItem(
            startOfDay,
            selectedShop.defaultRoster[day].operatingHours.openTime
          );
          target.endDateTime = Service.Date.formatByTimeItem(
            startOfDay,
            selectedShop.defaultRoster[day].operatingHours.closeTime
          );
          target.breakTimes = selectedShop.defaultRoster[day].breakTimes.map(bt => {
            return {
              startDateTime: Service.Date.formatByTimeItem(startOfDay, bt.start),
              endDateTime: Service.Date.formatByTimeItem(startOfDay, bt.end),
            };
          });
        }
      }
      target.isWorking = request.isWorking;

      const document = new C.ShopScheduleDocument(target);
      document.updateTime();
      await Repository.Shop.Schedule.updateDocument(document.data);
    }
  }
);
