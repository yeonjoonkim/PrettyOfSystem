import { Injectable } from '@angular/core';
import { ShopConfiguration } from './shop-configuration/shop-configuration.service';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { IShopConfiguration } from 'src/app/interface/system/shop/shop.interface';


@Injectable({
  providedIn: 'root'
})
export class Shop {
  private selectedShopConfigSubject: BehaviorSubject<IShopConfiguration | undefined> = new BehaviorSubject<IShopConfiguration | undefined>(undefined);
  public selectedShopConfig: Observable<IShopConfiguration | undefined> = this.selectedShopConfigSubject.asObservable();

  // This will hold the current configuration
  private config!: ShopConfiguration;

  constructor() {
  }

  public async setSelectedShopConfig(config: IShopConfiguration) {
    this.config = new ShopConfiguration(
      config.logoImg,
      config.taxNumber,
      config.name,
      config.phoneNumber,
      config.email,
      config.active,
      config.currentActiveUserCount,
      config.currentActiveProductCount,
      config.currentActiveServiceCount,
      config.address,
      config.operatingHours,
      config.category,
      config.country,
      config.plan
    );
    this.selectedShopConfigSubject.next(config);
  }

  public async getCurrentShopConfig(): Promise<ShopConfiguration> {
    return this.config;
  }

}
