import { Injectable, inject } from '@angular/core';
import { FirebaseApiService, createKeyMap } from 'src/app/firebase/firebase-api/firebase-api.service';
import { ShopScheduleDocumentType, ShopScheduleUpdateRequestDocumentType } from 'src/app/interface';
import * as Db from 'src/app/constant/firebase-path';
import * as Constant from 'src/app/constant/constant';
import { map, of } from 'rxjs';
import { DateService } from 'src/app/service/global/date/date.service';
import { getTime } from 'date-fns';

const param = createKeyMap<ShopScheduleUpdateRequestDocumentType>(['id', 'documentId', 'shopId', 'status']);

@Injectable({
  providedIn: 'root',
})
export class ShopScheduleUpdateRepositoryService {
  private _api = inject(FirebaseApiService);
  private _dateSvc = inject(DateService);
  constructor() {}

  public async send(schedule: ShopScheduleDocumentType) {
    const doc: ShopScheduleUpdateRequestDocumentType = {
      id: this._api.newId(),
      shopId: schedule.shopId,
      documentId: schedule.id,
      status: Constant.API.Status.Pending,
      after: schedule,
      shopTimestamp: getTime(this._dateSvc.shopNow(schedule.shopTimezone)),
    };
    return await this._api.set<ShopScheduleUpdateRequestDocumentType>(Db.Context.ScheduleUpdateRequest, doc);
  }

  public isInProgress(shopId: string, documentId: string) {
    return this._api
      .valueChangeDocuments<ShopScheduleUpdateRequestDocumentType>(Db.Context.ScheduleUpdateRequest, ref =>
        ref
          .where(param.status, Constant.Query.Equal, Constant.API.Status.Pending)
          .where(param.shopId, Constant.Query.Equal, shopId)
          .where(param.documentId, Constant.Query.Equal, documentId)
      )
      .pipe(map(docs => docs.length > 0));
  }

  public requestListener(documentId: string) {
    return this._api.valueChangeDocument<ShopScheduleUpdateRequestDocumentType>(
      Db.Context.ScheduleUpdateRequest,
      ref => ref.where(param.id, Constant.Query.Equal, documentId).limit(1)
    );
  }
}
