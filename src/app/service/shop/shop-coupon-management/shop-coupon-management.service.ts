import { Injectable } from '@angular/core';
import { Observable, combineLatestWith, filter, map, of, switchMap, withLatestFrom } from 'rxjs';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  ShopCapacityType,
  ShopConfigurationType,
  ShopCouponDocumentType,
  ShopLimitedProgpressBarType,
  ShopServiceDocumentType,
} from 'src/app/interface';
import { ShopService } from '../shop.service';
import { ShopCouponPriceCalculationService } from './shop-coupon-price-calculation/shop-coupon-price-calculation.service';
import { ShopLanguagePackageService } from '../shop-language-package/shop-language-package.service';
import { ShopCouponModalService } from './shop-coupon-modal/shop-coupon-modal.service';
import { ShopCouponRepositoryService } from 'src/app/firebase/shop-repository/shop-coupon-repository/shop-coupon-repository.service';
import { LoadingService } from '../../global/loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class ShopCouponManagementService {
  public config$!: Observable<ShopConfigurationType | null>;
  public translatedRequest$!: Observable<ChatGptTranslateDocumentType[]>;
  public services$!: Observable<ShopServiceDocumentType[]>;
  public serviceFilter$!: Observable<NameValuePairType[]>;
  public isReachToMax$!: Observable<boolean>;
  public coupons$!: Observable<ShopCouponDocumentType[]>;
  public progressBar$!: Observable<ShopLimitedProgpressBarType>;

  constructor(
    private _shop: ShopService,
    private _couponRepo: ShopCouponRepositoryService,
    public priceCalculator: ShopCouponPriceCalculationService,
    public languagePackage: ShopLanguagePackageService,
    public modal: ShopCouponModalService,
    public loading: LoadingService
  ) {
    this.config$ = this._shop.config$;
    this.services$ = this._shop.services$;
    this.serviceFilter$ = this._shop.serviceFilter$;
    this.coupons$ = this._shop.coupons$;
    this.translateRequest();
    this.progressBar();
    this.isReachToMax();
  }

  private translateRequest() {
    this.translatedRequest$ = this.config$.pipe(
      combineLatestWith(this.services$),
      switchMap(([config, services]: [ShopConfigurationType | null, ShopServiceDocumentType[]]) => {
        if (config !== null && services.length > 0) {
          const serviceIds: string[] = services.map(s => {
            return s.id;
          });
          return this._shop.translatedRequestFilterByServiceIds(config.id, serviceIds);
        } else {
          return of([] as ChatGptTranslateDocumentType[]);
        }
      })
    );
  }

  private progressBar() {
    this.progressBar$ = this.coupons$.pipe(
      combineLatestWith(this._shop.capacity$),
      switchMap(([service, capacity]: [ShopCouponDocumentType[], ShopCapacityType | null]) => {
        if (capacity !== null) {
          return of({
            current: service.length,
            max: capacity.limitedCoupon,
            title: 'label.title.maximumactivecoupons',
            indeterminate: false,
          });
        } else {
          return of({
            current: 0,
            max: 0,
            title: 'label.title.maximumactivecoupons',
            indeterminate: false,
          });
        }
      })
    );
  }

  private isReachToMax() {
    this.isReachToMax$ = this.coupons$.pipe(
      combineLatestWith(this._shop.capacity$),
      map(([coupons, capacity]: [ShopCouponDocumentType[], ShopCapacityType | null]) => {
        if (capacity !== null) {
          return coupons.length > capacity.limitedCoupon;
        } else {
          return false;
        }
      })
    );
  }

  public async isAuthorisedRole() {
    return await this._shop.role.isReceptionistAccess();
  }
  public async getShopConfig() {
    return await this._shop.config();
  }

  public async requeueTranslatedRequest(doc: ChatGptTranslateDocumentType) {
    await this._shop.requeueTranslatedRequest(doc);
  }

  public prop() {
    return this.config$.pipe(
      combineLatestWith(
        this.services$,
        this.coupons$,
        this.isReachToMax$,
        this.serviceFilter$,
        this.translatedRequest$
      ),
      filter(
        ([config, services, coupons, isReachToMax, serviceFilter, translatedRequest]) =>
          config !== null &&
          services !== null &&
          services !== undefined &&
          coupons !== null &&
          coupons !== undefined &&
          typeof isReachToMax === 'boolean' &&
          serviceFilter !== null &&
          serviceFilter !== undefined &&
          translatedRequest !== null &&
          translatedRequest !== undefined
      ),
      map(([config, services, coupons, isReachToMax, serviceFilter, translatedRequest]) => ({
        config: config,
        services: services,
        coupons: coupons,
        isReachToMax: isReachToMax,
        serviceFilter: serviceFilter,
        translatedRequest: translatedRequest,
      }))
    );
  }

  public async add(coupon: ShopCouponDocumentType) {
    await this.loading.start('label.title.addnewcoupon');
    const newCoupon = await this._couponRepo.addCoupon(coupon);

    if (newCoupon) {
      await this.loading.end();
      return true;
    }
    await this.loading.end();
    return false;
  }

  public async update(after: ShopCouponDocumentType) {
    const userName = await this._shop.userName();
    if (userName !== null) {
      after.lastModifiedDate = await this._shop.timeStamp();
      after.lastModifiedEmployee = userName;
      return await this._couponRepo.updateCoupon(after);
    } else {
      return false;
    }
  }

  public async delete(coupon: ShopCouponDocumentType) {
    const deleteCoupon = await this._couponRepo.deleteCoupon(coupon);
    return deleteCoupon;
  }

  public async getNewCoupon() {
    const config = await this._shop.config();
    const userName = await this._shop.userName();
    if (config !== null && userName !== null) {
      return this._couponRepo.defaultDocument(userName, config.id);
    } else {
      return null;
    }
  }
}
