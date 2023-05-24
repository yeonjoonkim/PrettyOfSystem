import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { firstValueFrom, map, Observable } from 'rxjs';
import { IShopCategory, IShopCountry } from 'src/app/interface/system/shop/shop.interface';

@Injectable({
  providedIn: 'root'
})
export class SystemShopConfigurationRepositoryService {
  private readonly timeStamp = {lastModifiedDate: new Date()};
  private readonly systemShop: string = 'system/shop/';
  private readonly shopCategory: string = this.systemShop + 'category';
  private readonly shopCountry:  string  = this.systemShop + 'country';
  constructor(private afs: AngularFirestore) { }

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
}
