import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, lastValueFrom, map, Observable, switchMap } from 'rxjs';
import {
  ShopCategoryType,
  ShopConfigurationType,
  ShopCountryType,
} from 'src/app/interface/shop/shop.interface';
import { FirebaseService } from 'src/app/service/firebase/firebase.service';
import { ShopSettingService } from 'src/app/service/system/system-shop/shop-setting/shop-setting.service';
import { ShopSettingValiationResultType } from 'src/app/interface/shop/shop-setting.interface';
import * as Db from 'src/app/constant/firebase-path';

@Injectable({
  providedIn: 'root',
})
export class SystemShopConfigurationRepositoryService {
  private readonly _timeStamp = { lastModifiedDate: new Date() };

  constructor(
    private _afs: AngularFirestore,
    private _firebaseService: FirebaseService,
    private _setting: ShopSettingService
  ) {}

  public getShopCategories(): Observable<ShopCategoryType[]> {
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

  public async getSelectedSystemShopCategory(
    selectedId: string
  ): Promise<ShopCategoryType | undefined> {
    let systemShopCategories: ShopCategoryType[] = await lastValueFrom(this.getShopCategories());
    return systemShopCategories.find(r => r.id === selectedId);
  }

  public getSystemShopCountries(): Observable<ShopCountryType[]> {
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
    let categories = await lastValueFrom(this.getSystemShopCountries());
    return categories.find(countries => countries.id === selectedId);
  }

  public async createNewShopConfiguration(shopConfig: ShopConfigurationType): Promise<boolean> {
    let result: boolean = false;
    let newId = this._afs.createId();
    shopConfig.id = newId;
    let config = { ...shopConfig, ...this._timeStamp };
    try {
      await this._afs.collection(Db.Context.ShopConfiguration).doc(shopConfig.id).set(config);
      result = true;
    } catch (e) {
      console.error(e);
    }
    return result;
  }

  public async editExistingShopConfiguration(shopConfig: ShopConfigurationType): Promise<boolean> {
    let result: boolean = false;
    let updatedConfig = { ...shopConfig, ...this._timeStamp };

    try {
      await this._afs
        .collection(Db.Context.ShopConfiguration)
        .doc(updatedConfig.id)
        .update(updatedConfig);
      result = true;
    } catch (e) {
      console.error(e);
    }

    return result;
  }

  public async deleteShopConfiguration(shopConfigId: string): Promise<boolean> {
    let result: boolean = false;

    try {
      await this._afs.collection(Db.Context.ShopConfiguration).doc(shopConfigId).delete();
      result = true;
    } catch (e) {
      console.error(e);
    }

    return result;
  }

  private async updateShopSetting(
    config: ShopConfigurationType,
    validated: ShopSettingValiationResultType
  ) {
    if (validated.isModified) {
      config.setting = validated.setting;
      let updatedConfig = { ...config, ...this._timeStamp };
      try {
        await this._afs
          .collection(Db.Context.ShopConfiguration)
          .doc(updatedConfig.id)
          .update(updatedConfig);
      } catch (e) {
        console.error(e);
      }
    }
  }

  public shopConfigurationValueChangeListener(): Observable<ShopConfigurationType[]> {
    return this._afs
      .collection<ShopConfigurationType>(Db.Context.ShopConfiguration, ref => ref.orderBy('name'))
      .valueChanges()
      .pipe(
        switchMap(configs =>
          from(Promise.all(configs.map(sc => this.validatedShopConfiguration(sc))))
        )
      );
  }

  public getAllShopConfigurations(): Observable<ShopConfigurationType[]> {
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

  public getSelectedShopConfiguration(
    selectedId: string
  ): Observable<ShopConfigurationType | undefined> {
    return this._afs
      .doc<ShopConfigurationType>(`${Db.Context.ShopConfiguration}/${selectedId}`)
      .valueChanges()
      .pipe(
        switchMap(async shopconfig => {
          if (shopconfig) {
            return await this.validatedShopConfiguration(shopconfig);
          }
          return undefined;
        })
      );
  }

  //TODO: Put it into scheduler
  private async validatedShopConfiguration(
    sc: ShopConfigurationType
  ): Promise<ShopConfigurationType> {
    let validated = this._setting.getValidatedResult(sc.setting);
    sc.setting = validated.setting;
    sc.plan.lastPaymentDate = this._firebaseService.toDate(sc.plan.lastPaymentDate);
    sc.plan.paymentDate = this._firebaseService.toDate(sc.plan.paymentDate);
    sc.activeFrom = this._firebaseService.toDate(sc.activeFrom);
    if (sc.activeTo) {
      sc.activeTo = this._firebaseService.toDate(sc.plan.lastPaymentDate);
    }

    await this.updateShopSetting(sc, validated);

    return sc;
  }
}
