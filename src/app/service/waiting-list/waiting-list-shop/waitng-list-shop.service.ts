import { Injectable } from '@angular/core';
import { Observable, switchMap, of } from 'rxjs';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { ShopConfigurationType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class WaitngListShopService {
  public config$!: Observable<ShopConfigurationType | null>;

  constructor(private _shopRepo: SystemShopConfigurationRepositoryService) {}

  public shopConfigurationValueListener(shopId$: Observable<string | null>) {
    return shopId$.pipe(
      switchMap(shopId => {
        if (shopId !== null) {
          return this._shopRepo.shopConfigurationValueChangeListener(shopId);
        } else {
          return of(null);
        }
      })
    );
  }

  public name() {
    return this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return of(config.name);
        } else {
          return of(null);
        }
      })
    );
  }

  public logo() {
    return this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return of(config.setting.picture.logo);
        } else {
          return of(null);
        }
      })
    );
  }
}
