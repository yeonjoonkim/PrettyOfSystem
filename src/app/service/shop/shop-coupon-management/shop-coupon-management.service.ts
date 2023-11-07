import { Injectable } from '@angular/core';
import { Observable, combineLatestWith, map, of, switchMap } from 'rxjs';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  PlanConfigurationType,
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
  public plan$!: Observable<PlanConfigurationType | null>;
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
    this.plan$ = this._shop.plan$;
    this.services$ = this._shop.services$;
    this.serviceFilter$ = this._shop.serviceFilter$;
    this.coupons$ = this._shop.coupons$;
    this.translateRequest();
    this.progressBar();
    this.isReachToMax();
  }

  private progressBar() {
    this.progressBar$ = this.coupons$.pipe(
      combineLatestWith(this.plan$),
      switchMap(([service, plan]: [ShopCouponDocumentType[], PlanConfigurationType | null]) => {
        if (plan !== null) {
          return of({
            current: service.length,
            max: plan.limitedCoupon,
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

  private isReachToMax() {
    this.isReachToMax$ = this.coupons$.pipe(
      combineLatestWith(this.plan$),
      map(([coupons, plan]: [ShopCouponDocumentType[], PlanConfigurationType | null]) => {
        if (plan !== null) {
          return coupons.length > plan.limitedCoupon;
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
      after.lastModifiedDate = new Date();
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
