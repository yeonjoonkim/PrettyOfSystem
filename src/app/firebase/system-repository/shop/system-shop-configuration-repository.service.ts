import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { firstValueFrom, map, Observable } from 'rxjs';
import { IShopCategory, IShopConfiguration, IShopCountry } from 'src/app/interface/system/shop/shop.interface';
import { LanguageService } from 'src/app/shared/services/global/language/language.service';
import { FirebaseService } from 'src/app/shared/services/firebase/firebase.service';
import { ShopSettingService } from 'src/app/service/system/system-shop/shop-setting/shop-setting.service';
import { IPairValueId, IShopSettingValiationResult } from 'src/app/interface/system/system.interface';
import * as Db from './../../../shared/services/global/constant/firebase-path'; 
import { IUserAssociatedShop } from 'src/app/interface/user/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SystemShopConfigurationRepositoryService {
  private readonly timeStamp = {lastModifiedDate: new Date()};
  
  constructor(private afs: AngularFirestore, private language: LanguageService, private afstorage: AngularFireStorage, private firebaseService: FirebaseService, private setting: ShopSettingService) { }

  public getSystemShopCategories(): Observable<IShopCategory[]> {
    return this.afs.collection<IShopCategory>(Db.Context.System.Shop.Category, ref => ref.orderBy('name'))
      .valueChanges()
      .pipe(
        map(shopCategories => shopCategories.map(sc => {
          return sc;
        }))
      );
  }

  public async getSelectedSystemShopCategory(selectedId: string): Promise<IShopCategory | undefined>{
    let categories = await firstValueFrom(this.getSystemShopCategories());
    return categories.find(categories => categories.id === selectedId);
  }

  public getSystemShopCountries(): Observable<IShopCountry[]> {
    return this.afs.collection<IShopCountry>(Db.Context.System.Shop.Country, ref => ref.orderBy('name'))
      .valueChanges()
      .pipe(
        map(shopCountries => shopCountries.map(sc => {
          return sc;
        }))
      );
  }

  public async getSelectedSystemShopCountry(selectedId: string): Promise<IShopCountry | undefined>{
    let categories = await firstValueFrom(this.getSystemShopCountries());
    return categories.find(countries => countries.id === selectedId);
  }

  public async createNewShopConfiguration(shopConfig: IShopConfiguration): Promise<boolean>{
    let result: boolean = false;
    let newId = this.afs.createId();
    shopConfig.id = newId;
    let config = {...shopConfig, ... this.timeStamp};
    try{
      await this.afs.collection(Db.Context.ShopConfiguration).doc(shopConfig.id).set(config);
      result = true;
    }
    catch(e){
      console.error(e);
    }
    return result;
  }

  public async editExistingShopConfiguration(shopConfig: IShopConfiguration): Promise<boolean>{
    let result: boolean = false;
    let updatedConfig = { ...shopConfig, ...this.timeStamp };

    try{
      await this.afs.collection(Db.Context.ShopConfiguration).doc(updatedConfig.id).update(updatedConfig);
      result = true;
    }
    catch(e){
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

  private async updateShopSetting(config: IShopConfiguration, validated: IShopSettingValiationResult){
    if(validated.isModified){
      config.setting = validated.setting;
      let updatedConfig = { ...config, ...this.timeStamp };
      try{
        this.afs.collection(Db.Context.ShopConfiguration).doc(updatedConfig.id).update(updatedConfig);
      }
      catch(e){
        console.error(e);
      }
    }
  }

  public subscribeAllShopConfiguration() {
    return this.afs
      .collection<IShopConfiguration>(Db.Context.ShopConfiguration, ref => ref.orderBy('name'))
      .valueChanges()
      .pipe(
        map(configs => {
          return configs.map(sc => {
            let validated = this.setting.getValidatedResult(sc.setting);
            sc.setting = validated.setting;
            sc.plan.lastPaymentDate = this.firebaseService.toDate(sc.plan.lastPaymentDate);
            sc.plan.paymentDate = this.firebaseService.toDate(sc.plan.paymentDate);
            sc.activeFrom = this.firebaseService.toDate(sc.activeFrom);
            if (sc.activeTo) {
              sc.activeTo = this.firebaseService.toDate(sc.plan.lastPaymentDate);
            }
            this.updateShopSetting(sc, validated);
            return sc;
          });
        })
      );
  }

}
