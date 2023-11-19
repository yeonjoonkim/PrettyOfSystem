import { Injectable } from '@angular/core';
import { ShopService } from '../../shop/shop.service';
import {
  ShopCouponDocumentType,
  ShopExtraDocumentType,
  ShopPackageDocumentType,
  ShopServiceDocumentType,
} from 'src/app/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PriceListService {
  public coupons$!: Observable<ShopCouponDocumentType[]>;
  public packages$!: Observable<ShopPackageDocumentType[]>;
  public services$!: Observable<ShopServiceDocumentType[]>;
  public extras$!: Observable<ShopExtraDocumentType[]>;
  public timezone$!: Observable<string | null>;
  constructor(private _shop: ShopService) {
    this.coupons$ = this._shop.couponPriceList$;
    this.packages$ = this._shop.packagePriceList$;
    this.services$ = this._shop.servicePriceList$;
    this.extras$ = this._shop.extraPriceList$;
    this.timezone$ = this._shop.timezone$;
  }
}
