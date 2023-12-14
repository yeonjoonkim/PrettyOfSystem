import { Injectable } from '@angular/core';
import { Observable, switchMap, of, map, firstValueFrom, combineLatest } from 'rxjs';
import { ShopCouponRepositoryService } from 'src/app/firebase/shop-repository/shop-coupon-repository/shop-coupon-repository.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import {
  ShopConfigurationType,
  ShopCouponDocumentType,
  ShopExtraDocumentType,
  ShopPackageDocumentType,
  ShopServiceDocumentType,
} from 'src/app/interface';
import { SystemLanguageStorageService } from '../../global/language/system-language-management/system-language-storage/system-language-storage.service';
import { ShopServiceRepositoryService } from 'src/app/firebase/shop-repository/shop-service-repository/shop-service-repository.service';
import { ShopExtraRepositoryService } from 'src/app/firebase/shop-repository/shop-extra-repository/shop-extra-repository.service';
import { ShopPackageRepositoryService } from 'src/app/firebase/shop-repository/shop-package-repository/shop-package-repository.service';
import {
  IShopServiceMenuOptionAction,
  ShopServiceMenuOptionControllerService,
} from '../../shop/shop-service-management/shop-service-menu-option-controller/shop-service-menu-option-controller.service';

import * as Constant from 'src/app/constant/constant';

export type WaitingListShopCartCriteriaType = {
  buttons: IShopServiceMenuOptionAction[];
  coupons: ShopCouponDocumentType[];
  packages: ShopPackageDocumentType[];
  services: ShopServiceDocumentType[];
  extras: ShopExtraDocumentType[];
  timezone: Constant.TimeZoneType;
};

@Injectable({
  providedIn: 'root',
})
export class WaitngListShopService {
  public config$: Observable<ShopConfigurationType | null> = of(null);

  constructor(
    private _shopRepo: SystemShopConfigurationRepositoryService,
    private _couponRepo: ShopCouponRepositoryService,
    private _serviceRepo: ShopServiceRepositoryService,
    private _extraRepo: ShopExtraRepositoryService,
    private _packageRepo: ShopPackageRepositoryService,
    private _languageStorage: SystemLanguageStorageService,
    private _button: ShopServiceMenuOptionControllerService
  ) {}

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

  public category() {
    return this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return of(config.category);
        } else {
          return of(null);
        }
      })
    );
  }

  public async transform(value: string) {
    const pack = await firstValueFrom(this.package());
    const preferLanguage = await this._languageStorage.getCurrentLanguage();
    const path = value + '.' + preferLanguage;
    const result = pack != null ? pack[path] : '';
    return result;
  }

  private package() {
    return this.config$.pipe(
      switchMap(config => {
        if (config) {
          return of(config.package);
        } else {
          return of(null);
        }
      })
    );
  }

  private coupons() {
    return this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._couponRepo
            .valueChangeListener(config.id)
            .pipe(map(allCoupons => this._couponRepo.getCompletedTranslateLanguage(allCoupons, config)));
        } else {
          return of([] as ShopCouponDocumentType[]);
        }
      })
    );
  }

  private services() {
    return this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._serviceRepo
            .serviceValueChangeListener(config.id)
            .pipe(map(allServices => this._serviceRepo.getCompletedTranslateLanguage(allServices, config)));
        } else {
          return of([] as ShopServiceDocumentType[]);
        }
      })
    );
  }

  private extras() {
    return this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._extraRepo
            .extraValueChangeListener(config.id)
            .pipe(map(allExtras => this._extraRepo.getCompletedTranslateLanguage(allExtras, config)));
        } else {
          return of([] as ShopExtraDocumentType[]);
        }
      })
    );
  }

  private packages() {
    return this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._packageRepo
            .packageValueChangeListener(config.id)
            .pipe(map(allPackages => this._packageRepo.getCompletedTranslateLanguage(allPackages, config)));
        } else {
          return of([] as ShopPackageDocumentType[]);
        }
      })
    );
  }

  public getCartCriteriaValueChangeListener() {
    return combineLatest([this.coupons(), this.services(), this.extras(), this.packages(), this.config$]).pipe(
      map(([coupons, services, extras, packages, config]) => {
        const result: WaitingListShopCartCriteriaType = {
          buttons: this._button.get(coupons, packages, services, extras),
          coupons: coupons,
          packages: packages,
          services: services,
          extras: extras,
          timezone: config ? config.timezone : 'Australia/Brisbane',
        };
        return result;
      })
    );
  }
}
