import { inject, Injectable } from '@angular/core';
import { lastValueFrom, map, Observable, of } from 'rxjs';
import { ShopCategoryType, ShopConfigurationType, ShopCountryType } from 'src/app/interface/shop/shop.interface';
import { PostCodeItemType } from 'src/app/interface';
import { override } from '../../../../../functions/src/service/override/shop/shop-config-override/shop-config-override';
import { FirebaseApiService, Query } from '../../firebase-api/firebase-api.service';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import * as Db from 'src/app/constant/firebase-path';

@Injectable({
  providedIn: 'root',
})
export class SystemShopConfigurationRepositoryService {
  private _api = inject(FirebaseApiService);

  constructor(private _toaster: FirebaseToasterService) {}

  public categoryListener(): Observable<ShopCategoryType[]> {
    return this._api.getDocuments<ShopCategoryType>(Db.Context.System.Shop.Category, ref => ref.orderBy('name'));
  }

  public countryListener(): Observable<ShopCountryType[]> {
    return this._api.getDocuments<ShopCountryType>(Db.Context.System.Shop.Country, ref => ref.orderBy('name'));
  }

  public async getSelectedSystemShopCountry(selectedId: string): Promise<ShopCountryType | undefined> {
    let categories = await lastValueFrom(this.countryListener());
    return categories.find(countries => countries.id === selectedId);
  }

  public async getCategory(selectedId: string): Promise<ShopCategoryType | undefined> {
    let systemShopCategories: ShopCategoryType[] = await lastValueFrom(this.categoryListener());
    return systemShopCategories.find(r => r.id === selectedId);
  }

  public allShopConfigurationGetListener(): Observable<ShopConfigurationType[]> {
    return this._api
      .getDocuments<ShopConfigurationType>(Db.Context.ShopConfiguration, ref => ref.orderBy('name'))
      .pipe(
        map(docs => {
          return docs.map(doc => {
            return this.overrideConfig(doc);
          });
        })
      );
  }

  public postcodeAssociatedShopConfigurationValueChangeListener(
    query: PostCodeItemType
  ): Observable<ShopConfigurationType[]> {
    return this._api
      .valueChangeDocuments<ShopConfigurationType>(Db.Context.ShopConfiguration, ref =>
        ref.where('address.suburb', '==', query.suburb).where('address.postCode', '==', query.postCode)
      )
      .pipe(
        map(docs => {
          return docs.map(doc => {
            return this.overrideConfig(doc);
          });
        })
      );
  }

  public assocatedShopConfigurationValueChangeListener(
    selectedIds: string[]
  ): Observable<ShopConfigurationType[]> {
    if (!selectedIds.length) return of([]);
    return this._api
      .valueChangeDocuments<ShopConfigurationType>(Db.Context.ShopConfiguration, ref =>
        ref.where('id', 'in', selectedIds)
      )
      .pipe(
        map(docs => {
          return docs.map(doc => {
            return this.overrideConfig(doc);
          });
        })
      );
  }

  public shopConfigurationValueChangeListener(id: string): Observable<ShopConfigurationType | null> {
    return this._api
      .valueChangeDocument<ShopConfigurationType>(Db.Context.ShopConfiguration, ref =>
        ref.where('id', Query.Equal, id).limit(1)
      )
      .pipe(map(doc => (doc !== null ? this.overrideConfig(doc) : null)));
  }

  public async createNewShopConfiguration(shopConfig: ShopConfigurationType): Promise<boolean> {
    const config = { ...shopConfig };

    try {
      const saved = await this._api.set<ShopConfigurationType>(Db.Context.ShopConfiguration, config);
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

  public async updateShopConfiguration(shopConfig: ShopConfigurationType): Promise<boolean> {
    const updatedConfig = { ...shopConfig };

    try {
      const updated = await this._api.updateDocument<ShopConfigurationType>(
        Db.Context.ShopConfiguration,
        updatedConfig
      );
      if (updated) {
        await this._toaster.editSuccess();
      } else {
        await this._toaster.editFail('');
      }

      return updated;
    } catch (error) {
      await this._toaster.editFail(error);
      console.error(error);
      return false;
    }
  }

  public async deleteShopConfiguration(shopConfigId: string): Promise<boolean> {
    try {
      const deleted = await this._api.delete<ShopConfigurationType>(Db.Context.ShopConfiguration, shopConfigId);
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

  public overrideConfig(sc: ShopConfigurationType) {
    sc.setting = override(sc.setting);
    return sc;
  }
}
