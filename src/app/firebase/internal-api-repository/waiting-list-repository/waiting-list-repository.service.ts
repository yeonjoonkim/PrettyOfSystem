import { Injectable, inject } from '@angular/core';
import { WaitingListCriteriaType, WaitingListSessionType } from 'src/app/interface';
import { DateService } from 'src/app/service/global/date/date.service';
import * as Db from 'src/app/constant/firebase-path';
import { FirebaseApiService, createKeyMap, Query } from '../../firebase-api/firebase-api.service';

const criteriaParam = createKeyMap<WaitingListCriteriaType>(['id', 'expiredTime', 'shopId']);
const sessionParam = createKeyMap<WaitingListSessionType>(['id', 'expiredDate', 'ipAddress', 'shopId']);
@Injectable({
  providedIn: 'root',
})
export class WaitingListRepositoryService {
  private _api = inject(FirebaseApiService);

  constructor(private _date: DateService) {}

  public getCriteria(criteriaId: string) {
    return this._api.getDocument<WaitingListCriteriaType>(Db.Context.WaitingList.Criteria, ref =>
      ref.where(criteriaParam.id, Query.Equal, criteriaId).limit(1)
    );
  }

  public async createSession(criteria: WaitingListCriteriaType, ipAddress: string | null) {
    try {
      const url = this.createURL(criteria, ipAddress);
      return await this._api.set<WaitingListSessionType>(Db.Context.WaitingList.Session, url);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public sessionValueListener(sessionId: string) {
    return this._api.valueChangeDocument<WaitingListSessionType>(Db.Context.WaitingList.Session, ref =>
      ref.where(sessionParam.id, Query.Equal, sessionId).limit(1)
    );
  }

  public async deleteSession(sessionId: string) {
    try {
      return await this._api.delete<WaitingListSessionType>(Db.Context.WaitingList.Session, sessionId);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public getSession(sessionId: string, ipAddress: string | null) {
    return this._api.getDocument<WaitingListSessionType>(Db.Context.WaitingList.Session, ref =>
      ref
        .where(sessionParam.id, Query.Equal, sessionId)
        .where(sessionParam.ipAddress, Query.Equal, ipAddress)
        .limit(1)
    );
  }

  private createURL(criteria: WaitingListCriteriaType, ipAddress: string | null): WaitingListSessionType {
    const shopNow = this._date.shopTimeStamp('Australia/Brisbane');
    const expiredDate = this._date.addMin(shopNow, criteria.expiredTime);
    return {
      id: this._api.newId(),
      shopId: criteria.shopId,
      expiredDate: expiredDate,
      ipAddress: ipAddress,
    };
  }
}
