import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { from, lastValueFrom, map, Observable, switchMap } from 'rxjs';
import {
  IShopCategory,
  IShopConfiguration,
  IShopCountry,
} from 'src/app/interface/shop/shop.interface';
import { LanguageService } from '../../../service/global/language/language.service';
import { FirebaseService } from '../../../service/firebase/firebase.service';
import { ShopSettingService } from 'src/app/service/system/system-shop/shop-setting/shop-setting.service';
import { IShopSettingValiationResult } from 'src/app/interface/system/system.interface';
import * as Db from '../../../service/global/constant/firebase-path';

@Injectable({
  providedIn: 'root',
})
export class SystemShopConfigurationRepositoryService {
  private readonly timeStamp = { lastModifiedDate: new Date() };

  constructor(
    private afs: AngularFirestore,
    private language: LanguageService,
    private afstorage: AngularFireStorage,
    private firebaseService: FirebaseService,
    private setting: ShopSettingService
  ) {}

  public getShopCategories(): Observable<IShopCategory[]> {
    return this.afs
      .collection<IShopCategory>(Db.Context.System.Shop.Category, ref => ref.orderBy('name'))
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
  ): Promise<IShopCategory | undefined> {
    let systemShopCategories: IShopCategory[] = await lastValueFrom(this.getShopCategories());
    return systemShopCategories.find(r => r.id === selectedId);
  }

  public getSystemShopCountries(): Observable<IShopCountry[]> {
    return this.afs
      .collection<IShopCountry>(Db.Context.System.Shop.Country, ref => ref.orderBy('name'))
      .get()
      .pipe(
        map(snapshot => {
          return snapshot.docs.map(doc => {
            return doc.data();
          });
        })
      );
  }

  public async getSelectedSystemShopCountry(selectedId: string): Promise<IShopCountry | undefined> {
    let categories = await lastValueFrom(this.getSystemShopCountries());
    return categories.find(countries => countries.id === selectedId);
  }

  public async createNewShopConfiguration(shopConfig: IShopConfiguration): Promise<boolean> {
    let result: boolean = false;
    let newId = this.afs.createId();
    shopConfig.id = newId;
    let config = { ...shopConfig, ...this.timeStamp };
    try {
      await this.afs.collection(Db.Context.ShopConfiguration).doc(shopConfig.id).set(config);
      result = true;
    } catch (e) {
      console.error(e);
    }
    return result;
  }

  public async editExistingShopConfiguration(shopConfig: IShopConfiguration): Promise<boolean> {
    let result: boolean = false;
    let updatedConfig = { ...shopConfig, ...this.timeStamp };

    try {
      await this.afs
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
      await this.afs.collection(Db.Context.ShopConfiguration).doc(shopConfigId).delete();
      result = true;
    } catch (e) {
      console.error(e);
    }

    return result;
  }

  private async updateShopSetting(
    config: IShopConfiguration,
    validated: IShopSettingValiationResult
  ) {
    if (validated.isModified) {
      config.setting = validated.setting;
      let updatedConfig = { ...config, ...this.timeStamp };
      try {
        await this.afs
          .collection(Db.Context.ShopConfiguration)
          .doc(updatedConfig.id)
          .update(updatedConfig);
      } catch (e) {
        console.error(e);
      }
    }
  }

  public shopConfigurationValueChangeListener(): Observable<IShopConfiguration[]> {
    return this.afs
      .collection<IShopConfiguration>(Db.Context.ShopConfiguration, ref => ref.orderBy('name'))
      .valueChanges()
      .pipe(
        switchMap(configs =>
          from(Promise.all(configs.map(sc => this.validatedShopConfiguration(sc))))
        )
      );
  }

  public getAllShopConfigurations(): Observable<IShopConfiguration[]> {
    return this.afs
      .collection<IShopConfiguration>(Db.Context.ShopConfiguration, ref => ref.orderBy('name'))
      .get()
      .pipe(
        switchMap(configs =>
          from(
            Promise.all(
              configs.docs.map(snapshot => {
                let shopconfig = snapshot.data();
                return this.validatedShopConfiguration(shopconfig);
              })
            )
          )
        )
      );
  }

  public getSelectedShopConfiguration(
    selectedId: string
  ): Observable<IShopConfiguration | undefined> {
    return this.afs
      .doc<IShopConfiguration>(`${Db.Context.ShopConfiguration}/${selectedId}`)
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

  private async validatedShopConfiguration(sc: IShopConfiguration): Promise<IShopConfiguration> {
    let validated = this.setting.getValidatedResult(sc.setting);
    sc.setting = validated.setting;
    sc.plan.lastPaymentDate = this.firebaseService.toDate(sc.plan.lastPaymentDate);
    sc.plan.paymentDate = this.firebaseService.toDate(sc.plan.paymentDate);
    sc.activeFrom = this.firebaseService.toDate(sc.activeFrom);
    if (sc.activeTo) {
      sc.activeTo = this.firebaseService.toDate(sc.plan.lastPaymentDate);
    }

    await this.updateShopSetting(sc, validated);

    return sc;
  }
}
