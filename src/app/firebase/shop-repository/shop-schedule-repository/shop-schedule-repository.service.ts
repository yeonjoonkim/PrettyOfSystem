import { Injectable, inject } from '@angular/core';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { APIQueryMethodType, QueryOperatorType, ShopScheduleDocumentType } from 'src/app/interface';
import { ShopSchedule } from 'src/app/constant/firebase-path';
import * as Constant from 'src/app/constant/constant';
import { map, of, switchMap } from 'rxjs';
import { FirebaseApiService, createKeyMap } from '../../firebase-api/firebase-api.service';
import { override } from 'functions/src/service/override/shop/document-override/shop-schedule-override/shop-schedule-override';

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
  'scheduledConsults',
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
  private _afs = inject(AngularFirestore);

  constructor() {}

  public activeDisplayInSystemEmployeesByShop(
    shopId: string,
    startOfDay: string,
    method: APIQueryMethodType,
    startOfDayQueryMethod: Extract<QueryOperatorType, '==' | '>='>
  ) {
    const collection = this._afs.collection<ShopScheduleDocumentType>(ShopSchedule(shopId), ref =>
      ref
        .where(param.active, Constant.Query.Equal, true)
        .where(param.displayInSystem, Constant.Query.Equal, true)
        .where(param.startOfDay, startOfDayQueryMethod, startOfDay)
        .orderBy(param.startOfDay, 'asc')
    );

    switch (method) {
      case Constant.API.QueryMethod.Get:
        return this._api.getAsObservable<ShopScheduleDocumentType>(collection).pipe(
          switchMap(documents => {
            return of(documents.length > 0 ? documents.map(doc => override(doc)) : []);
          })
        );
      case Constant.API.QueryMethod.Valuechange:
        return this._api.valueChangesAsObservable<ShopScheduleDocumentType>(collection).pipe(
          switchMap(documents => {
            return of(documents.length > 0 ? documents.map(doc => override(doc)) : []);
          })
        );
      case Constant.API.QueryMethod.Snapshot:
        return this._api.snapshotChangesAsObservable<ShopScheduleDocumentType>(collection).pipe(
          switchMap(documents => {
            return of(documents.length > 0 ? documents.map(doc => override(doc)) : []);
          })
        );
    }
  }

  public employeeOnStartOfDay(shopId: string, empId: string, startOfDay: string, method: APIQueryMethodType) {
    const collection = this._afs.collection<ShopScheduleDocumentType>(ShopSchedule(shopId), ref =>
      ref
        .where(param.employeeId, Constant.Query.Equal, empId)
        .where(param.startOfDay, Constant.Query.Equal, startOfDay)
        .limit(1)
    );

    switch (method) {
      case Constant.API.QueryMethod.Get:
        return this._api.getAsObservable<ShopScheduleDocumentType>(collection).pipe(
          switchMap(documents => {
            return of(documents.length > 0 ? documents.map(doc => override(doc))[0] : null);
          })
        );
      case Constant.API.QueryMethod.Valuechange:
        return this._api.valueChangesAsObservable<ShopScheduleDocumentType>(collection).pipe(
          switchMap(documents => {
            return of(documents.length > 0 ? documents.map(doc => override(doc))[0] : null);
          })
        );
      case Constant.API.QueryMethod.Snapshot:
        return this._api.snapshotChangesAsObservable<ShopScheduleDocumentType>(collection).pipe(
          switchMap(documents => {
            return of(documents.length > 0 ? documents.map(doc => override(doc))[0] : null);
          })
        );
    }
  }
}
