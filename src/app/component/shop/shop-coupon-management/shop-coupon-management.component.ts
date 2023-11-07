import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  ShopCouponDocumentType,
  ShopCouponModalProp,
  ShopLimitedProgpressBarType,
  ShopServiceDocumentType,
} from 'src/app/interface';
import { ShopCouponManagementService } from 'src/app/service/shop/shop-coupon-management/shop-coupon-management.service';

@Component({
  selector: 'shop-coupon-management',
  templateUrl: './shop-coupon-management.component.html',
  styleUrls: ['./shop-coupon-management.component.scss'],
})
export class ShopCouponManagementComponent implements OnInit, OnDestroy {
  private _onDestroy$: Subject<void> = new Subject<void>();
  private _service!: ShopServiceDocumentType[];
  private _serviceFilter!: NameValuePairType[];
  public coupons!: ShopCouponDocumentType[];
  public translatedRequest!: ChatGptTranslateDocumentType[];
  public progressBar$: Observable<ShopLimitedProgpressBarType> =
    this._couponService.progressBar$.pipe(takeUntil(this._onDestroy$));
  public isReachToMax: boolean = true;
  public isModalOpen: boolean = false;
  public isAuthorisedRole: boolean = false;

  constructor(private _couponService: ShopCouponManagementService) {}

  async ngOnInit() {
    this.isAuthorisedRole = await this._couponService.isAuthorisedRole();
    this._couponService.services$.pipe(takeUntil(this._onDestroy$)).subscribe(s => {
      this._service = s;
    });
    this._couponService.serviceFilter$.pipe(takeUntil(this._onDestroy$)).subscribe(sf => {
      this._serviceFilter = sf;
    });
    this._couponService.isReachToMax$.pipe(takeUntil(this._onDestroy$)).subscribe(i => {
      this.isReachToMax = i;
    });
    this._couponService.coupons$.pipe(takeUntil(this._onDestroy$)).subscribe(c => {
      this.coupons = c;
    });
    this._couponService.translatedRequest$.pipe(takeUntil(this._onDestroy$)).subscribe(request => {
      this.translatedRequest = request;
    });
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  public async handleCreate() {
    const create = this.isAuthorisedRole && !this.isModalOpen && !this.isReachToMax;
    const newCoupon = await this._couponService.getNewCoupon();
    if (create && newCoupon !== null) {
      this.isModalOpen = true;
      const prop: ShopCouponModalProp = {
        services: this._service,
        serviceFilters: this._serviceFilter,
        coupon: newCoupon,
      };
      const modal = await this._couponService.modal.presentNewCoupon(prop);
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  public async handleEdit(doc: ShopCouponDocumentType) {
    const update = this.isAuthorisedRole && !this.isModalOpen;
    if (update) {
      this.isModalOpen = true;
      const prop: ShopCouponModalProp = {
        serviceFilters: this._serviceFilter,
        services: this._service,
        coupon: doc,
      };
      const modal = await this._couponService.modal.presentEditCoupon(prop);
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  private async handleModalClose(modal: HTMLIonModalElement) {
    const close = await modal.onWillDismiss();
    if (close) {
      this.isModalOpen = false;
    }
  }

  public loading() {
    return this.coupons === undefined && this.translatedRequest === undefined;
  }
}
