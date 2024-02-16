import { Injectable, Signal, inject } from '@angular/core';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  APIQueryMethodType,
  QueryOperatorType,
  ShopScheduleDocumentType,
  ShopSchedulerDocumentType,
} from 'src/app/interface';
import { Context } from 'src/app/constant/firebase-path';
import * as Constant from 'src/app/constant/constant';
import { of, switchMap } from 'rxjs';
import { FirebaseApiService, createKeyMap } from '../../firebase-api/firebase-api.service';
import { toSignal } from '@angular/core/rxjs-interop';

const param = createKeyMap<ShopSchedulerDocumentType>([
  'id',
  'shopId',
  'shopTimezone',
  'activatedDate',
  'currentDate',
  'currentDate',
  'endDate',
  'isOpenToday',
  'dayIndex',
]);

@Injectable({
  providedIn: 'root',
})
export class ShopSchedulerRepositoryService {
  private _api = inject(FirebaseApiService);
  private _afs = inject(AngularFirestore);

  constructor() {}

  public getAsObservable(shopId: string) {
    const collection = this._afs.collection<ShopSchedulerDocumentType>(Context.ShopScheduler, ref =>
      ref.where(param.shopId, Constant.Query.Equal, shopId).limit(1)
    );

    return this._api.getAsObservable<ShopSchedulerDocumentType>(collection).pipe(
      switchMap(documents => {
        return of(documents.length > 0 ? documents[0] : null);
      })
    );
  }

  public getAsSignal(shopId: string) {
    const signal = this.getAsObservable(shopId);
    return toSignal(signal) as Signal<ShopSchedulerDocumentType | null>;
  }
}
