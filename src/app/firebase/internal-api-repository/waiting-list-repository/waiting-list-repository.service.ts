import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { WaitingListCriteriaType, WaitingListSessionType } from 'src/app/interface';
import { DateService } from 'src/app/service/global/date/date.service';
import * as Db from 'src/app/constant/firebase-path';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WaitingListRepositoryService {
  constructor(
    private _afs: AngularFirestore,
    private _date: DateService
  ) {}

  public getCriteria(criteriaId: string) {
    const criteriaRef = this._afs.collection<WaitingListCriteriaType>(Db.Context.WaitingList.Criteria, ref =>
      ref.where('id', '==', criteriaId).limit(1)
    );
    return criteriaRef.get().pipe(
      map(snapshot => {
        if (snapshot.docs.length > 0) {
          return snapshot.docs[0].data();
        } else {
          return null;
        }
      })
    );
  }

  public async createSession(criteria: WaitingListCriteriaType, ipAddress: string | null) {
    try {
      const url = this.createURL(criteria, ipAddress);
      await this._afs.collection<WaitingListSessionType>(Db.Context.WaitingList.Session).doc(url.id).set(url);
      console.log(url);
      return url.id;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public getSession(sessionId: string, ipAddress: string | null) {
    const sessionRef = this._afs.collection<WaitingListSessionType>(Db.Context.WaitingList.Session, ref =>
      ref.where('id', '==', sessionId).where('ipAddress', '==', ipAddress).limit(1)
    );

    return sessionRef.get().pipe(
      map(snapshot => {
        if (snapshot.docs.length > 0) {
          return snapshot.docs[0].data();
        } else {
          return null;
        }
      })
    );
  }

  private createURL(criteria: WaitingListCriteriaType, ipAddress: string | null): WaitingListSessionType {
    const shopNow = this._date.shopTimeStamp('Australia/Brisbane');
    const expiredDate = this._date.addMin(shopNow, criteria.expiredTime);
    return {
      id: this._afs.createId(),
      shopId: criteria.shopId,
      expiredDate: expiredDate,
      ipAddress: ipAddress,
    };
  }
}
