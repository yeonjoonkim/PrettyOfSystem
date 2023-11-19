import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, lastValueFrom, map, Observable, of, switchMap } from 'rxjs';
import { ShopCategoryType, ShopConfigurationType, ShopCountryType } from 'src/app/interface/shop/shop.interface';
import * as Db from 'src/app/constant/firebase-path';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { override } from '../../../../../functions/src/service/shop/shop-config-override/shop-config-override';
@Injectable({
  providedIn: 'root',
})
export class SystemShopConfigurationRepositoryService {
  private readonly _timeStamp = { lastModifiedDate: new Date() };

  constructor(
    private _afs: AngularFirestore,
    private _toaster: FirebaseToasterService
  ) {}

  public categoryListener(): Observable<ShopCategoryType[]> {
    return this._afs
      .collection<ShopCategoryType>(Db.Context.System.Shop.Category, ref => ref.orderBy('name'))
      .get()
      .pipe(
        map(snapshot => {
          return snapshot.docs.map(doc => {
            return doc.data();
          });
        })
      );
  }

  public async getCategory(selectedId: string): Promise<ShopCategoryType | undefined> {
    let systemShopCategories: ShopCategoryType[] = await lastValueFrom(this.categoryListener());
    return systemShopCategories.find(r => r.id === selectedId);
  }

  public countryListener(): Observable<ShopCountryType[]> {
    return this._afs
      .collection<ShopCountryType>(Db.Context.System.Shop.Country, ref => ref.orderBy('name'))
      .get()
      .pipe(
        map(snapshot => {
          return snapshot.docs.map(doc => {
            return doc.data();
          });
        })
      );
  }
  public async getSelectedSystemShopCountry(selectedId: string): Promise<ShopCountryType | undefined> {
    let categories = await lastValueFrom(this.countryListener());
    return categories.find(countries => countries.id === selectedId);
  }

  public allShopConfigurationGetListener(): Observable<ShopConfigurationType[]> {
    return this._afs
      .collection<ShopConfigurationType>(Db.Context.ShopConfiguration, ref => ref.orderBy('name'))
      .get()
      .pipe(
        switchMap(configs =>
          from(
            Promise.all(
              configs.docs.map(snapshot => {
                let shopconfig = snapshot.data();
                shopconfig = this.overrideConfig(shopconfig);
                return shopconfig;
              })
            )
          )
        )
      );
  }

  public assocatedShopConfigurationValueChangeListener(
    selectedIds: string[]
  ): Observable<ShopConfigurationType[] | []> {
    if (!selectedIds.length) return of([]);

    return this._afs
      .collection<ShopConfigurationType>(Db.Context.ShopConfiguration, ref => ref.where('id', 'in', selectedIds))
      .valueChanges()
      .pipe(
        map(snapShots =>
          snapShots.map(doc => {
            let data = doc as ShopConfigurationType;
            data = this.overrideConfig(data);
            return data;
          })
        )
      );
  }

  public async createNewShopConfiguration(shopConfig: ShopConfigurationType): Promise<boolean> {
    const config = { ...shopConfig, ...this._timeStamp };

    try {
      await this._afs.collection(Db.Context.ShopConfiguration).doc(shopConfig.id).set(config);
      await this._toaster.addSuccess();
      return true;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }

  public async updateShopConfiguration(shopConfig: ShopConfigurationType): Promise<boolean> {
    const updatedConfig = { ...shopConfig, ...this._timeStamp };
    const collection = Db.Context.ShopConfiguration;
    try {
      await this._afs.collection(collection).doc(updatedConfig.id).update(updatedConfig);
      await this._toaster.editSuccess();
      return true;
    } catch (error) {
      await this._toaster.editFail(error);
      console.error(error);
      return false;
    }
  }

  public async deleteShopConfiguration(shopConfigId: string): Promise<boolean> {
    try {
      await this._afs.collection(Db.Context.ShopConfiguration).doc(shopConfigId).delete();
      await this._toaster.deleteSuccess();
      return true;
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
