import { Injectable, inject } from '@angular/core';
import { APIQueryMethodType, QueryOperatorType, ShopScheduleDocumentType } from 'src/app/interface';
import { ShopSchedule } from 'src/app/constant/firebase-path';
import * as Constant from 'src/app/constant/constant';
import { map } from 'rxjs';
import { override } from 'functions/src/service/override/shop/document-override/shop-schedule-override/shop-schedule-override';
import { FirebaseApiService, createKeyMap } from '../../firebase-api/firebase-api.service';
import { ShopScheduleUpdateRepositoryService } from './shop-schedule-update-repository/shop-schedule-update-repository.service';

const param = createKeyMap<ShopScheduleDocumentType>([
  'id',
  'shopId',
  'shopTimezone',
  'employeeId',
  'firstName',
  'lastName',
  'gender',
  'startOfDay',
  'startDateTime',
  'endDateTime',
  'dayIndex',
  'isWorking',
  'breakTimes',
  'consults',
  'workHours',
  'breakHours',
  'displayInSystem',
  'active',
]);

@Injectable({
  providedIn: 'root',
})
export class ShopScheduleRepositoryService {
  private _api = inject(FirebaseApiService);
  public updateRequest = inject(ShopScheduleUpdateRepositoryService);
  constructor() {}

  public activeDisplayInSystemEmployeesByShop(
    shopId: string,
    startOfDay: string,
    method: APIQueryMethodType,
    startOfDayQueryMethod: Extract<QueryOperatorType, '==' | '>='>
  ) {
    switch (method) {
      case Constant.API.QueryMethod.Get:
        return this._api
          .getDocuments<ShopScheduleDocumentType>(ShopSchedule(shopId), ref =>
            ref
              .where(param.active, Constant.Query.Equal, true)
              .where(param.displayInSystem, Constant.Query.Equal, true)
              .where(param.startOfDay, startOfDayQueryMethod, startOfDay)
              .orderBy(param.startOfDay, 'asc')
          )
          .pipe(map(documents => documents.map(doc => override(doc))));
      case Constant.API.QueryMethod.Valuechange:
        return this._api
          .valueChangeDocuments<ShopScheduleDocumentType>(ShopSchedule(shopId), ref =>
            ref
              .where(param.active, Constant.Query.Equal, true)
              .where(param.displayInSystem, Constant.Query.Equal, true)
              .where(param.startOfDay, startOfDayQueryMethod, startOfDay)
              .orderBy(param.startOfDay, 'asc')
          )
          .pipe(map(documents => documents.map(doc => override(doc))));
      case Constant.API.QueryMethod.Snapshot:
        return this._api
          .snapshotChangeDocuments<ShopScheduleDocumentType>(ShopSchedule(shopId), ref =>
            ref
              .where(param.active, Constant.Query.Equal, true)
              .where(param.displayInSystem, Constant.Query.Equal, true)
              .where(param.startOfDay, startOfDayQueryMethod, startOfDay)
              .orderBy(param.startOfDay, 'asc')
          )
          .pipe(map(documents => documents.map(doc => override(doc))));
    }
  }

  public employeeOnStartOfDay(shopId: string, empId: string, startOfDay: string, method: APIQueryMethodType) {
    switch (method) {
      case Constant.API.QueryMethod.Get:
        return this._api
          .getDocument<ShopScheduleDocumentType>(ShopSchedule(shopId), ref =>
            ref
              .where(param.employeeId, Constant.Query.Equal, empId)
              .where(param.startOfDay, Constant.Query.Equal, startOfDay)
              .limit(1)
          )
          .pipe(map(document => (document !== null ? override(document) : null)));
      case Constant.API.QueryMethod.Valuechange:
        return this._api
          .valueChangeDocument<ShopScheduleDocumentType>(ShopSchedule(shopId), ref =>
            ref
              .where(param.employeeId, Constant.Query.Equal, empId)
              .where(param.startOfDay, Constant.Query.Equal, startOfDay)
              .limit(1)
          )
          .pipe(map(document => (document !== null ? override(document) : null)));
      case Constant.API.QueryMethod.Snapshot:
        return this._api
          .snapshotChangeDocument<ShopScheduleDocumentType>(ShopSchedule(shopId), ref =>
            ref
              .where(param.employeeId, Constant.Query.Equal, empId)
              .where(param.startOfDay, Constant.Query.Equal, startOfDay)
              .limit(1)
          )
          .pipe(map(document => (document !== null ? override(document) : null)));
    }
  }

  public getDocumentById(shopId: string, empId: string, documentId: string) {
    return this._api
      .getDocument<ShopScheduleDocumentType>(ShopSchedule(shopId), ref =>
        ref
          .where(param.employeeId, Constant.Query.Equal, empId)
          .where(param.id, Constant.Query.Equal, documentId)
          .limit(1)
      )
      .pipe(map(document => (document !== null ? override(document) : null)));
  }

  public valueChangeDocumentListener(shopId: string, documentId: string) {
    return this._api
      .valueChangeDocument<ShopScheduleDocumentType>(ShopSchedule(shopId), ref =>
        ref.where(param.id, Constant.Query.Equal, documentId).limit(1)
      )
      .pipe(map(document => (document !== null ? override(document) : null)));
  }

  public async updateDocument(doc: ShopScheduleDocumentType) {
    try {
      return await this._api.updateDocument<ShopScheduleDocumentType>(ShopSchedule(doc.shopId), doc);
    } catch (error) {
      return false;
    }
  }
}
