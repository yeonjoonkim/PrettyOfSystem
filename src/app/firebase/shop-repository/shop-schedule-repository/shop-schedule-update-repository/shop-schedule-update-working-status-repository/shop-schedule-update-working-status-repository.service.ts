import { Injectable, inject } from '@angular/core';
import { UpdateScheduleWorkingStatus } from 'src/app/constant/firebase-path';
import { FirebaseApiService } from 'src/app/firebase/firebase-api/firebase-api.service';
import { FirebaseToasterService } from 'src/app/firebase/firebase-toaster/firebase-toaster.service';
import { ShopScheduleUpdateWorkingStatusDocumentType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class ShopScheduleUpdateWorkingStatusRepositoryService {
  private _api = inject(FirebaseApiService);
  private _toaster = inject(FirebaseToasterService);
  constructor() {}

  public async request(
    shopId: string,
    employeeId: string,
    startOfDay: string,
    documentId: string,
    isWorking: boolean
  ) {
    try {
      const requested = await this._api.set<ShopScheduleUpdateWorkingStatusDocumentType>(
        UpdateScheduleWorkingStatus(shopId),
        {
          id: '',
          shopId: shopId,
          employeeId: employeeId,
          startOfDay: startOfDay,
          documentId: documentId,
          isWorking: isWorking,
        }
      );
      if (requested !== null) {
        await this._toaster.addSuccess();
      } else {
        await this._toaster.addFail('');
      }
      return requested;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }
}
