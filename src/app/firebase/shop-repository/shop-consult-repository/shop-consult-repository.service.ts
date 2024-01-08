import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { DateService } from 'src/app/service/global/date/date.service';
import { SystemLanguageStorageService } from 'src/app/service/global/language/system-language-management/system-language-storage/system-language-storage.service';
import * as Document from 'functions/src/service/override/consult/document-override/consult-document-override';
import { ConsultDocumentType, ConsultStatusType } from 'src/app/interface';
import { ShopConsult, ShopConsultStatusSync } from 'src/app/constant/firebase-path';
import * as Constant from 'src/app/constant/constant';
import { map, of, switchMap } from 'rxjs';

const ScheduledStatuses = [
  Constant.Consult.StatusType.Pending,
  Constant.Consult.StatusType.Scheduled,
  Constant.Consult.StatusType.Start,
  Constant.Consult.StatusType.Completed,
];
const CancelStatuses = [Constant.Consult.StatusType.Cancel];
@Injectable({
  providedIn: 'root',
})
export class ShopConsultRepositoryService {
  constructor(
    private _afs: AngularFirestore,
    private _toaster: FirebaseToasterService,
    private _date: DateService,
    private _languageStorage: SystemLanguageStorageService
  ) {}

  public isFirstVisit(shopId: string, clientId: string) {
    return this._afs
      .collection<ConsultDocumentType>(ShopConsult(shopId), ref =>
        ref
          .where('client.id', '==', clientId)
          .where('status.type', '!=', Constant.Consult.StatusType.Cancel)
          .limit(1)
      )
      .get()
      .pipe(
        map(doc => {
          if (doc.docs.length > 0) {
            return false;
          } else {
            return true;
          }
        })
      );
  }

  private getConsultsForDayValueChangeListener(startOfDay: string, shopId: string) {
    return this._afs
      .collection<ConsultDocumentType>(ShopConsult(shopId), ref =>
        ref.where('scheduled', '!=', null).where('scheduled.startOfDay', '==', startOfDay)
      )
      .valueChanges()
      .pipe(
        map(doc => {
          return doc.map(doc => Document.override(doc));
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
    return this._afs
      .collection<ConsultDocumentType>(ShopConsult(shopId), ref =>
        ref
          .where('scheduled', '!=', null)
          .where('scheduled.startOfDay', '>=', startOfDay)
          .where('scheduled.startOfDay', '<=', endOfDay)
          .orderBy('scheduled.startDateTime', 'asc')
      )
      .valueChanges()
      .pipe(
        map(doc => {
          return doc.map(doc => Document.override(doc));
        })
      );
  }

  public getConsultsForClientValueChangeListener(shopId: string, clientId: string) {
    return this._afs
      .collection<ConsultDocumentType>(ShopConsult(shopId), ref => ref.where('client.id', '==', clientId))
      .valueChanges()
      .pipe(
        map(doc => {
          return doc.map(doc => Document.override(doc));
        })
      );
  }

  public updateStatusSync(shopId: string, consultId: string, status: ConsultStatusType) {
    this._afs
      .collection<ConsultDocumentType>(ShopConsultStatusSync(shopId))
      .doc(consultId)
      .update({ status: status });
  }

  public isAvailableDateTime(shopId: string, employeeId: string, startDateTime: string, endDateTime: string) {
    return employeeId.length > 0
      ? this._afs
          .collection<ConsultDocumentType>(ShopConsult(shopId), ref =>
            ref
              .where('associatedEmployee.id', '==', employeeId)
              .where('scheduled.startDateTime', '>=', startDateTime)
              .where('scheduled.startDateTime', '<', endDateTime)
              .where('status.type', 'in', ScheduledStatuses)
              .limit(1)
          )
          .valueChanges()
          .pipe(
            map(doc => {
              return !(doc.length > 0);
            })
          )
      : of(true);
  }
}
