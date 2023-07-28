import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { firstValueFrom, map, Observable } from 'rxjs';
import { IShopCategory, IShopConfiguration, IShopCountry } from 'src/app/interface/system/shop/shop.interface';
import { LanguageService } from 'src/app/shared/services/global/language/language.service';
import { FirebaseService } from 'src/app/shared/services/firebase/firebase.service';
import { ShopSettingService } from 'src/app/service/system/system-shop/shop-setting/shop-setting.service';
import { IPairValueId, IShopSettingValiationResult } from 'src/app/interface/system/system.interface';

@Injectable({
  providedIn: 'root'
})
export class SystemShopConfigurationRepositoryService {
  private readonly timeStamp = {lastModifiedDate: new Date()};
  private readonly systemShop: string = 'system/shop/';
  private readonly shopCategory: string = this.systemShop + 'category';
  private readonly shopCountry:  string  = this.systemShop + 'country';
  private readonly shopConfiguration: string = 'shopConfiguration/';
  constructor(private afs: AngularFirestore, private language: LanguageService, private afstorage: AngularFireStorage, private firebaseService: FirebaseService, private setting: ShopSettingService) { }

  public getSystemShopCategories(): Observable<IShopCategory[]> {
    return this.afs.collection<IShopCategory>(this.shopCategory, ref => ref.orderBy('name'))
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
    return this.afs.collection<IShopCountry>(this.shopCountry, ref => ref.orderBy('name'))
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
      await this.afs.collection(this.shopConfiguration).doc(shopConfig.id).set(config);
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
      await this.afs.collection(this.shopConfiguration).doc(updatedConfig.id).update(updatedConfig);
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
      await this.afs.collection(this.shopConfiguration).doc(shopConfigId).delete();
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
        this.afs.collection(this.shopConfiguration).doc(updatedConfig.id).update(updatedConfig);
      }
      catch(e){
        console.error(e);
      }
    }
  }

  public subscribeAllConfigPairIdValue(){
    return this.afs
      .collection<IShopConfiguration>(this.shopConfiguration, ref => ref.orderBy('name'))
      .valueChanges()
      .pipe(
        map(configs => {
          return configs.map(sc => {
            let idKeyPairValue: IPairValueId = {
              id: sc.id,
              value: sc.name
            }
            return idKeyPairValue;
          });
        })
      );
  }

  public subscribeAllShopConfiguration() {
    return this.afs
      .collection<IShopConfiguration>(this.shopConfiguration, ref => ref.orderBy('name'))
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
