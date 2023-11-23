import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { ShopOneTimeCheckInUrl, ShopOneTimeCheckInUrlCriteria } from 'src/app/interface';
import { DateService } from 'src/app/service/global/date/date.service';
import * as Db from 'src/app/constant/firebase-path';
import { DeviceService } from 'src/app/service/global/device/device.service';

@Injectable({
  providedIn: 'root',
})
export class ShopOneTimeCheckinUrlService {
  constructor(
    private _afs: AngularFirestore,
    private _date: DateService,
    private _device: DeviceService
  ) {}

  public getCriteria(oneTimeCheckInUrlId: string) {
    const oneTimeUrlRef = this._afs.collection<ShopOneTimeCheckInUrlCriteria>(
      Db.Context.ShopOneTimeCheckInUrlCriteria,
      ref => ref.where('id', '==', oneTimeCheckInUrlId).limit(1)
    );
    return oneTimeUrlRef.get().pipe(
      map(snapshot => {
        if (snapshot.docs.length > 0) {
          return snapshot.docs[0].data();
        } else {
          return null;
        }
      })
    );
  }
  public async createOneTimeUrl(criteria: ShopOneTimeCheckInUrlCriteria, ipAddress: string | null) {
    try {
      const url = this.createURL(criteria, ipAddress);
      await this._afs.collection<ShopOneTimeCheckInUrl>(Db.Context.ShopOneTimeCheckInUrl).doc(url.id).set(url);
      return url.id;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public getSession(sessionId: string, ipAddress: string | null) {
    const urlRef = this._afs.collection<ShopOneTimeCheckInUrl>(Db.Context.ShopOneTimeCheckInUrl, ref =>
      ref.where('id', '==', sessionId).where('ipAddress', '==', ipAddress).limit(1)
    );
    return urlRef.get().pipe(
      map(snapshot => {
        if (snapshot.docs.length > 0) {
          return snapshot.docs[0].data();
        } else {
          return null;
        }
      })
    );
  }

  private createURL(criteria: ShopOneTimeCheckInUrlCriteria, ipAddress: string | null): ShopOneTimeCheckInUrl {
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
