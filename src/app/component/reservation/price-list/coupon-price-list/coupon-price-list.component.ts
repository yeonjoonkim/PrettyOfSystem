import { Component, OnInit } from '@angular/core';
import { Subject, Observable, takeUntil, map } from 'rxjs';
import { ShopCouponDocumentType } from 'src/app/interface';
import { PriceListService } from 'src/app/service/reservation/price-list/price-list.service';

@Component({
  selector: 'coupon-price-list',
  templateUrl: './coupon-price-list.component.html',
  styleUrls: ['./coupon-price-list.component.scss'],
})
export class CouponPriceListComponent implements OnInit {
  private _destroy$ = new Subject<void>();
  public coupons$!: Observable<ShopCouponDocumentType[]>;
  constructor(private _priceList: PriceListService) {}

  ngOnInit() {
    this.coupons$ = this._priceList.coupons$.pipe(
      takeUntil(this._destroy$),
      map(coupons => {
        return coupons;
      })
    );
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
