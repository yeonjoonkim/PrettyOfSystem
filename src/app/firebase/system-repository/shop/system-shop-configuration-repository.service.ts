import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { firstValueFrom, map, Observable } from 'rxjs';
import { IShopCategory, IShopConfiguration, IShopCountry } from 'src/app/interface/system/shop/shop.interface';
import { LanguageService } from 'src/app/shared/services/global/language/language.service';
import { LoadingService } from 'src/app/shared/services/global/loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class SystemShopConfigurationRepositoryService {
  private readonly timeStamp = {lastModifiedDate: new Date()};
  private readonly systemShop: string = 'system/shop/';
  private readonly shop: string = 'shop/'
  private readonly shopCategory: string = this.systemShop + 'category';
  private readonly shopCountry:  string  = this.systemShop + 'country';
  private readonly shopConfiguration: string = this.shop + 'configuration';
  private readonly shopLogo: string = this.shop + 'logo';
  constructor(private afs: AngularFirestore, private language: LanguageService, private afstorage: AngularFireStorage, private loading: LoadingService) { }

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

  public async createNewShopConfiguration(shopConfig: IShopConfiguration){
    let newId = this.afs.createId();
    let hasImg: boolean = shopConfig.logoImg != null && shopConfig.logoImg != undefined;
    shopConfig.id = newId;
    shopConfig.logoImg = hasImg ? await this.createNewShopLogo(shopConfig.logoImg, newId) : '';
    let config = {...shopConfig, ... this.timeStamp};
    try{
      await this.afs.collection(this.shopConfiguration).doc(shopConfig.id).set(config);
    }
    catch(e){
      console.error(e);
    }
  }

  public async createNewShopLogo(shopLogo: any, newId: string){
    let id = this.shopLogo + '/' + newId;
    let uploadTask = await this.afstorage.upload(id, shopLogo);
    let url = await uploadTask.ref.getDownloadURL();
    return url;
  }

  public async updateNewShopLogo(shopLogo: any, selectedId: string){
    let id = this.shopLogo + '/' + selectedId;
    let uploadTask = await this.afstorage.upload(id, shopLogo);
    let url = await uploadTask.ref.getDownloadURL();
    return url;
  }
}
