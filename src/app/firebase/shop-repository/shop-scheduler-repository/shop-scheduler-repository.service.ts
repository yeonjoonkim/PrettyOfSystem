import { Injectable, Signal, inject } from '@angular/core';
import { ShopSchedulerDocumentType } from 'src/app/interface';
import { Context } from 'src/app/constant/firebase-path';
import { FirebaseApiService, createKeyMap, Query } from '../../firebase-api/firebase-api.service';
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

  constructor() {}

  public getAsObservable(shopId: string) {
    return this._api.getDocument<ShopSchedulerDocumentType>(Context.ShopScheduler, ref =>
      ref.where(param.shopId, Query.Equal, shopId).limit(1)
    );
  }

  public getAsSignal(shopId: string) {
    const signal = this.getAsObservable(shopId);
    return toSignal(signal) as Signal<ShopSchedulerDocumentType | null>;
  }
}
