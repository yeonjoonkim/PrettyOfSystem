import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import * as Document from 'functions/src/service/override/consult/document-override/consult-document-override';
import { ConsultDocumentType } from 'src/app/interface';
import { ShopConsult } from 'src/app/constant/firebase-path';
import * as Constant from 'src/app/constant/constant';
import { firstValueFrom, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopConsultRepositoryService {
  constructor(
    private _afs: AngularFirestore,
    private _toaster: FirebaseToasterService
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

  private async isExistedDocument(shopId: string, consultId: string) {
    const isExisted = this._afs
      .collection<ConsultDocumentType>(ShopConsult(shopId))
      .doc(consultId)
      .get()
      .pipe(
        map(document => {
          return document.exists;
        })
      );
    return await firstValueFrom(isExisted);
  }

  public async create(consult: ConsultDocumentType) {
    const isExistedDocument = await this.isExistedDocument(consult.id, consult.shopId);
    if (!isExistedDocument) {
      try {
        await this._afs.collection<ConsultDocumentType>(ShopConsult(consult.shopId)).doc(consult.id).set(consult);
        await this._toaster.requestSuccess();
        return true;
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
    return this._afs
      .collection<ConsultDocumentType>(ShopConsult(shopId), ref => ref.where('client.id', '==', clientId).limit(1))
      .valueChanges()
      .pipe(
        map(doc => {
          const document = doc.length > 0 ? doc[0] : null;
          return document !== null ? Document.override(document) : null;
        })
      );
  }

  public getValueChangeListenerById(shopId: string, consultId: string) {
    return this._afs
      .collection<ConsultDocumentType>(ShopConsult(shopId), ref => ref.where('id', '==', consultId).limit(1))
      .valueChanges()
      .pipe(
        map(doc => {
          const document = doc.length > 0 ? doc[0] : null;
          return document !== null ? Document.override(document) : null;
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

  public getEmployeeConsultWithinDays(shopId: string, employeeId: string, startDays: string[]) {
    return startDays.length > 0
      ? this._afs
          .collection<ConsultDocumentType>(ShopConsult(shopId), ref =>
            ref
              .where('associatedEmployee.id', '==', employeeId)
              .where('scheduled.startOfDay', 'in', startDays)
              .where('status.type', 'in', Constant.Consult_ScheduledStatusTypes)
              .orderBy('scheduled.startDateTime', 'asc')
          )
          .valueChanges()
          .pipe(
            map(doc => {
              return doc.map(doc => Document.override(doc));
            })
          )
      : of([] as ConsultDocumentType[]);
  }

  public isAvailableDateTime(shopId: string, employeeId: string, startDateTime: string, endDateTime: string) {
    return employeeId.length > 0
      ? this._afs
          .collection<ConsultDocumentType>(ShopConsult(shopId), ref =>
            ref
              .where('associatedEmployee.id', '==', employeeId)
              .where('scheduled.startDateTime', '>=', startDateTime)
              .where('scheduled.startDateTime', '<', endDateTime)
              .where('status.type', 'in', Constant.Consult_ScheduledStatusTypes)
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
