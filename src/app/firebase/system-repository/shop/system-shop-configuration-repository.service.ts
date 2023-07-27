import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { firstValueFrom, map, Observable } from 'rxjs';
import { IShopCategory, IShopConfiguration, IShopCountry } from 'src/app/interface/system/shop/shop.interface';
import { DateService } from 'src/app/shared/services/global/date/date.service';
import { LanguageService } from 'src/app/shared/services/global/language/language.service';
import { LoadingService } from 'src/app/shared/services/global/loading/loading.service';
import * as Constant from 'src/app/shared/services/global/global-constant';

@Injectable({
  providedIn: 'root'
})
export class SystemShopConfigurationRepositoryService {
  private readonly timeStamp = {lastModifiedDate: new Date()};
  private readonly systemShop: string = 'system/shop/';
  private readonly shopCategory: string = this.systemShop + 'category';
  private readonly shopCountry:  string  = this.systemShop + 'country';
  private readonly shopConfiguration: string = 'shopConfiguration/';
  constructor(private afs: AngularFirestore, private language: LanguageService, private afstorage: AngularFireStorage, private loading: LoadingService, private date: DateService) { }

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

  public getAllShopConfiguration(){
    return this.afs.collection<IShopConfiguration>(this.shopConfiguration, ref => ref.orderBy('name'))
    .valueChanges()
    .pipe(
      map(configs => configs.map(sc => {
        return sc;
      }))
    );
  }

}
