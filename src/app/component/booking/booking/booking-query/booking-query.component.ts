import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { PostCodeItemType, ShopConfigurationType } from 'src/app/interface';
import { BookingService } from 'src/app/service/booking/booking.service';
@Component({
  selector: 'booking-query',
  templateUrl: './booking-query.component.html',
  styleUrls: ['./booking-query.component.scss'],
})
export class BookingQueryComponent implements OnInit, OnChanges, OnDestroy {
  private _destroy$ = new Subject<void>();
  @Input() addressParam!: PostCodeItemType;
  @Input() shopCategoryParam!: string;

  public loading: boolean = false;
  public shops: ShopConfigurationType[] = [];
  constructor(private _booking: BookingService) {}

  ngOnInit() {}

  async ngOnChanges(changes: SimpleChanges) {
    const addressParamChange: SimpleChange | undefined = changes['addressParam'];
    const shopCategoryParam: SimpleChange | undefined = changes['shopCategoryParam'];
    const isQueryAction =
      (addressParamChange !== undefined ? this.isAddressQueryAction(addressParamChange) : false) ||
      (shopCategoryParam !== undefined ? this.isShopCategoryQueryAction(shopCategoryParam) : false);

    if (isQueryAction) {
      this.initQuery();
    }
  }

  private initQuery() {
    this.loading = true;
    this.shops = [];
    this._booking
      .get(this.addressParam)
      .pipe(take(1), takeUntil(this._destroy$))
      .subscribe(result => {
        this.shops = result;
        console.log(this.shops);
      });
    this.loading = false;
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private isShopCategoryQueryAction(categoryChange: SimpleChange) {
    if (!categoryChange.isFirstChange) {
      const after: string | undefined = categoryChange?.currentValue;
      const before: string | undefined = categoryChange?.previousValue;
      const isCategoryChanged = before !== after;
      const hasSuburbValue = this.addressParam?.suburb?.length > 0;
      const hasPostCodeValue = this.addressParam?.postCode?.length > 0;

      return isCategoryChanged && hasPostCodeValue && hasSuburbValue;
    } else {
      return false;
    }
  }

  private isAddressQueryAction(addressChange: SimpleChange) {
    const after: PostCodeItemType | undefined = addressChange.currentValue;
    const before: PostCodeItemType | undefined = addressChange.previousValue;
    if (!addressChange.firstChange) {
      const isSuburbChanged = before?.suburb !== after?.suburb;
      const isPostCodeChanged = before?.postCode !== after?.postCode;
      const hasShopCategoryValue = this.shopCategoryParam !== undefined && this.shopCategoryParam.length > 0;
      return (isSuburbChanged || isPostCodeChanged) && hasShopCategoryValue;
    } else {
      return false;
    }
  }
}
