import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ShopCapacityType } from 'src/app/interface/shop/shop.interface';
import * as Db from 'src/app/constant/firebase-path';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { FirebaseApiService, createKeyMap, Query } from '../../firebase-api/firebase-api.service';

const param = createKeyMap<ShopCapacityType>([
  'id',
  'isPremium',
  'isTest',
  'limitedCoupon',
  'limitedExtra',
  'limitedPackage',
  'limitedProduct',
  'limitedService',
  'limitedUser',
  'name',
]);

@Injectable({
  providedIn: 'root',
})
export class SystemShopCapacityRepositoryService {
  private _api = inject(FirebaseApiService);

  constructor(private _toaster: FirebaseToasterService) {}

  public capacitiesValueChangeListener(): Observable<ShopCapacityType[]> {
    return this._api.valueChangeDocuments<ShopCapacityType>(Db.Context.System.Shop.Capacity, ref =>
      ref.orderBy(param.name)
    );
  }

  public capacityListener(id: string): Observable<ShopCapacityType | null> {
    return this._api.valueChangeDocument<ShopCapacityType>(Db.Context.System.Shop.Capacity, ref =>
      ref.where(param.id, Query.Equal, id).limit(1)
    );
  }

  public async addCapacity(doc: ShopCapacityType) {
    try {
      const saved = await this._api.set<ShopCapacityType>(Db.Context.System.Shop.Capacity, doc);

      if (saved !== null) {
        await this._toaster.addSuccess();
      } else {
        await this._toaster.addFail('');
      }
      return saved !== null;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }

  public async updateCapacity(doc: ShopCapacityType) {
    try {
      const updated = await this._api.updateDocument<ShopCapacityType>(Db.Context.System.Shop.Capacity, doc);

      if (updated) {
        await this._toaster.updateSuccess();
      } else {
        await this._toaster.updateFail('');
      }

      return updated;
    } catch (error) {
      await this._toaster.uploadFail(error);
      console.error(error);
      return false;
    }
  }

  public async deleteCapacity(doc: ShopCapacityType) {
    try {
      const deleted = await this._api.delete<ShopCapacityType>(Db.Context.System.Shop.Capacity, doc.id);
      if (deleted) {
        await this._toaster.deleteSuccess();
      } else {
        await this._toaster.deleteFail('');
      }
      return deleted;
    } catch (error) {
      await this._toaster.deleteFail(error);
      console.error(error);
      return false;
    }
  }

  public defaultCapacityDocument() {
    const result: ShopCapacityType = {
      id: this._api.newId(),
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
