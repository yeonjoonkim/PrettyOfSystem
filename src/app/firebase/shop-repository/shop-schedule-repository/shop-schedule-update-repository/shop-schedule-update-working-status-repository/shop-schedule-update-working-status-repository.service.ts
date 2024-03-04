import { Injectable, inject } from '@angular/core';
import { UpdateScheduleWorkingStatus } from 'src/app/constant/firebase-path';
import { FirebaseApiService } from 'src/app/firebase/firebase-api/firebase-api.service';
import { ShopScheduleUpdateWorkingStatusDocumentType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class ShopScheduleUpdateWorkingStatusRepositoryService {
  private _api = inject(FirebaseApiService);
  constructor() {}

  public async request(
    shopId: string,
    employeeId: string,
    startOfDay: string,
    documentId: string,
    isWorking: boolean
  ) {
    return await this._api.set<ShopScheduleUpdateWorkingStatusDocumentType>(UpdateScheduleWorkingStatus(shopId), {
      id: '',
      shopId: shopId,
      employeeId: employeeId,
      startOfDay: startOfDay,
      documentId: documentId,
      isWorking: isWorking,
    });
  }
}
