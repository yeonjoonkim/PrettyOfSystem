import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { combineLatest, filter, from, lastValueFrom, map, Observable, of, switchMap } from 'rxjs';
import {
  ShopCategoryType,
  ShopConfigurationType,
  ShopCountryType,
} from 'src/app/interface/shop/shop.interface';
import { ShopSettingService } from 'src/app/service/system/system-shop/shop-setting/shop-setting.service';
import * as Db from 'src/app/constant/firebase-path';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { DateTransformService } from 'src/app/service/global/date/date-transform/date-transform.service';

@Injectable({
  providedIn: 'root',
})
export class SystemShopConfigurationRepositoryService {
  private readonly _timeStamp = { lastModifiedDate: new Date() };

  constructor(
    private _afs: AngularFirestore,
    private _setting: ShopSettingService,
    private _toaster: FirebaseToasterService,
    private _dateTransform: DateTransformService
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
  public async getSelectedSystemShopCountry(
    selectedId: string
  ): Promise<ShopCountryType | undefined> {
    let categories = await lastValueFrom(this.countryListener());
    return categories.find(countries => countries.id === selectedId);
  }

  public allShopConfigurationValueChangeListener(): Observable<ShopConfigurationType[]> {
    return this._afs
      .collection<ShopConfigurationType>(Db.Context.ShopConfiguration, ref => ref.orderBy('name'))
      .valueChanges()
      .pipe(
        switchMap(configs =>
          from(Promise.all(configs.map(sc => this.validatedShopConfiguration(sc))))
        )
      );
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

    const observables = selectedIds.map(selectedId =>
      this._afs
        .doc<ShopConfigurationType>(`${Db.Context.ShopConfiguration}/${selectedId}`)
        .valueChanges()
        .pipe(
          switchMap(shopconfig =>
            shopconfig ? from(this.validatedShopConfiguration(shopconfig)) : of(null)
          ),
          filter((config): config is ShopConfigurationType => config !== null)
        )
    );

    return combineLatest(observables).pipe(
      map(configs => configs.filter((config): config is ShopConfigurationType => config !== null))
    );
  }

  public async createNewShopConfiguration(shopConfig: ShopConfigurationType): Promise<boolean> {
    const newId = this._afs.createId();
    const config = { ...shopConfig, ...this._timeStamp };
    config.id = newId;

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

  //TODO: Put it into scheduler
  private async validatedShopConfiguration(
    sc: ShopConfigurationType
  ): Promise<ShopConfigurationType> {
    let validated = this._setting.getValidatedResult(sc.setting);
    sc.setting = validated.setting;
    sc.plan.lastPaymentDate = this._dateTransform.toDate(sc.plan.lastPaymentDate);
    sc.plan.paymentDate = this._dateTransform.toDate(sc.plan.paymentDate);
    sc.activeFrom = this._dateTransform.toDate(sc.activeFrom);
    if (sc.activeTo) {
      sc.activeTo = this._dateTransform.toDate(sc.plan.lastPaymentDate);
    }
    return sc;
  }
}
