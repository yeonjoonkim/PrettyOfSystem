import { Injectable, inject } from '@angular/core';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import * as Document from 'functions/src/service/override/consult/document-override/consult-document-override';
import { ConsultDocumentType } from 'src/app/interface';
import { ShopConsult } from 'src/app/constant/firebase-path';
import * as Constant from 'src/app/constant/constant';
import { firstValueFrom, map, of, switchMap } from 'rxjs';
import { FirebaseApiService, Query } from '../../firebase-api/firebase-api.service';

@Injectable({
  providedIn: 'root',
})
export class ShopConsultRepositoryService {
  private _api = inject(FirebaseApiService);
  constructor(private _toaster: FirebaseToasterService) {}

  public isFirstVisit(shopId: string, clientId: string) {
    return this._api
      .getDocument<ConsultDocumentType>(ShopConsult(shopId), ref =>
        ref
          .where('client.id', Query.Equal, clientId)
          .where('status.type', Query.NotEqual, Constant.Consult.StatusType.Cancel)
          .limit(1)
      )
      .pipe(map(doc => doc !== null));
  }

  private getConsultsForDayValueChangeListener(startOfDay: string, shopId: string) {
    return this._api
      .valueChangeDocuments<ConsultDocumentType>(ShopConsult(shopId), ref =>
        ref.where('scheduled', Query.NotEqual, null).where('scheduled.startOfDay', Query.Equal, startOfDay)
      )
      .pipe(
        map(doc => {
          return doc.map(doc => Document.override(doc));
        })
      );
  }

  public getScheduledConsultEmployeeFromDay(startOfDay: string, shopId: string, employeeId: string) {
    return this._api
      .getDocuments<ConsultDocumentType>(ShopConsult(shopId), ref =>
        ref
          .where('scheduled.startOfDay', Query.GreaterThanOrEqual, startOfDay)
          .where('status.type', Query.In, Constant.Consult_ScheduledStatusTypes)
          .where('associatedEmployee.id', Query.Equal, employeeId)
      )
      .pipe(
        map(docs => {
          return docs.map(doc => Document.override(doc));
        })
      );
  }

  private async isExistedDocument(shopId: string, consultId: string) {
    const consult = this._api
      .getDocument<ConsultDocumentType>(ShopConsult(shopId), ref =>
        ref.where('id', Query.Equal, consultId).limit(1)
      )
      .pipe(map(doc => doc !== null));
    return await firstValueFrom(consult);
  }

  public async create(consult: ConsultDocumentType) {
    const isExistedDocument = await this.isExistedDocument(consult.id, consult.shopId);
    if (!isExistedDocument) {
      try {
        const saved = await this._api.set<ConsultDocumentType>(ShopConsult(consult.shopId), consult);

        if (saved !== null) {
          await this._toaster.requestSuccess();
        } else {
          await this._toaster.requestFail('');
        }

        return saved !== null;
      } catch (error) {
        await this._toaster.requestFail(error);
        console.error(error);
        return false;
      }
    } else {
      return false;
    }
  }

  public getAssociatedClientValueChangeListener(shopId: string, clientId: string) {
    return this._api
      .valueChangeDocument<ConsultDocumentType>(ShopConsult(shopId), ref =>
        ref.where('client.id', '==', clientId).limit(1)
      )
      .pipe(
        map(doc => {
          return doc !== null ? Document.override(doc) : null;
        })
      );
  }

  public getValueChangeListenerById(shopId: string, consultId: string) {
    return this._api
      .valueChangeDocument<ConsultDocumentType>(ShopConsult(shopId), ref =>
        ref.where('id', '==', consultId).limit(1)
      )
      .pipe(
        map(doc => {
          return doc !== null ? Document.override(doc) : null;
        })
      );
  }

  public getScheduledConsultsForDayValueChangeListener(startOfDay: string, shopId: string) {
    return this.getConsultsForDayValueChangeListener(startOfDay, shopId).pipe(
      switchMap(consult => {
        if (consult.length > 0) {
          return of(consult.filter(c => c.status.type !== Constant.Consult.StatusType.Cancel));
        } else {
          return of(consult);
        }
      })
    );
  }

  public getCanceledConsultsForDayValueChangeListener(startOfDay: string, shopId: string) {
    return this.getConsultsForDayValueChangeListener(startOfDay, shopId).pipe(
      switchMap(consult => {
        if (consult.length > 0) {
          return of(consult.filter(c => c.status.type === Constant.Consult.StatusType.Cancel));
        } else {
          return of(consult);
        }
      })
    );
  }

  public getConsultsForDayRangeValueChangeListener(shopId: string, startOfDay: string, endOfDay: string) {
    return this._api
      .valueChangeDocuments<ConsultDocumentType>(ShopConsult(shopId), ref =>
        ref
          .where('scheduled', '!=', null)
          .where('scheduled.startOfDay', '>=', startOfDay)
          .where('scheduled.startOfDay', '<=', endOfDay)
          .orderBy('scheduled.startDateTime', 'asc')
      )
      .pipe(
        map(doc => {
          return doc.map(doc => Document.override(doc));
        })
      );
  }

  public getConsultsForClientValueChangeListener(shopId: string, clientId: string) {
    return this._api
      .valueChangeDocuments<ConsultDocumentType>(ShopConsult(shopId), ref =>
        ref.where('client.id', '==', clientId)
      )
      .pipe(
        map(doc => {
          return doc.map(doc => Document.override(doc));
        })
      );
  }

  public getEmployeeConsultWithinDays(shopId: string, employeeId: string, startDays: string[]) {
    return startDays.length > 0
      ? this._api
          .valueChangeDocuments<ConsultDocumentType>(ShopConsult(shopId), ref =>
            ref
              .where('associatedEmployee.id', '==', employeeId)
              .where('scheduled.startOfDay', 'in', startDays)
              .where('status.type', 'in', Constant.Consult_ScheduledStatusTypes)
              .orderBy('scheduled.startDateTime', 'asc')
          )
          .pipe(
            map(doc => {
              return doc.map(doc => Document.override(doc));
            })
          )
      : of([] as ConsultDocumentType[]);
  }

  public isAvailableDateTime(shopId: string, employeeId: string, startDateTime: string, endDateTime: string) {
    return employeeId.length > 0
      ? this._api
          .valueChangeDocument<ConsultDocumentType>(ShopConsult(shopId), ref =>
            ref
              .where('associatedEmployee.id', '==', employeeId)
              .where('scheduled.startDateTime', '>=', startDateTime)
              .where('scheduled.startDateTime', '<', endDateTime)
              .where('status.type', 'in', Constant.Consult_ScheduledStatusTypes)
              .limit(1)
          )
          .pipe(
            map(doc => {
              return doc !== null;
            })
          )
      : of(true);
  }
}
