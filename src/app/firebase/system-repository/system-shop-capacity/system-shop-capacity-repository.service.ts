import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { ShopCapacityType } from 'src/app/interface/shop/shop.interface';
import * as Db from 'src/app/constant/firebase-path';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';

@Injectable({
  providedIn: 'root',
})
export class SystemShopCapacityRepositoryService {
  constructor(
    private _afs: AngularFirestore,
    private _toaster: FirebaseToasterService
  ) {}

  public capacitiesValueChangeListener(): Observable<ShopCapacityType[]> {
    return this._afs
      .collection<ShopCapacityType>(Db.Context.System.Shop.Capacity, ref => ref.orderBy('name'))
      .valueChanges()
      .pipe(
        map(capacitites => {
          return capacitites;
        })
      );
  }

  public capacityListener(id: string): Observable<ShopCapacityType | null> {
    return this._afs
      .collection<ShopCapacityType>(Db.Context.System.Shop.Capacity, ref => ref.where('id', '==', id).limit(1))
      .valueChanges()
      .pipe(
        map(snapshot => {
          return snapshot[0] || null;
        })
      );
  }

  public async addCapacity(doc: ShopCapacityType) {
    try {
      this._afs.collection<ShopCapacityType>(Db.Context.System.Shop.Capacity).doc(doc.id).set(doc);
      await this._toaster.addSuccess();
      return true;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }

  public async updateCapacity(doc: ShopCapacityType) {
    try {
      this._afs.collection<ShopCapacityType>(Db.Context.System.Shop.Capacity).doc(doc.id).update(doc);
      await this._toaster.updateSuccess();
      return true;
    } catch (error) {
      await this._toaster.uploadFail(error);
      console.error(error);
      return false;
    }
  }

  public async deleteCapacity(doc: ShopCapacityType) {
    try {
      this._afs.collection<ShopCapacityType>(Db.Context.System.Shop.Capacity).doc(doc.id).delete();
      await this._toaster.deleteSuccess();
      return true;
    } catch (error) {
      await this._toaster.deleteFail(error);
      console.error(error);
      return false;
    }
  }

  public defaultCapacityDocument() {
    const result: ShopCapacityType = {
      id: this._afs.createId(),
      name: '',
      isPremium: false,
      isTest: false,
      limitedPackage: 0,
      limitedService: 0,
      limitedCoupon: 0,
      limitedExtra: 0,
      limitedProduct: 0,
      limitedUser: 0,
    };
    return result;
  }
}
