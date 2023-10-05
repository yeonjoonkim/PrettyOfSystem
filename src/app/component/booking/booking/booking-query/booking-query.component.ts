import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { PostCodeItemType } from 'src/app/interface';
@Component({
  selector: 'booking-query',
  templateUrl: './booking-query.component.html',
  styleUrls: ['./booking-query.component.scss'],
})
export class BookingQueryComponent implements OnInit, OnChanges {
  @Input() addressParam!: PostCodeItemType;
  @Input() shopCategoryParam!: string;

  public loading: boolean = false;
  constructor() {}

  ngOnInit() {}

  async ngOnChanges(changes: SimpleChanges) {
    const addressParamChange: SimpleChange | undefined = changes['addressParam'];
    const shopCategoryParam: SimpleChange | undefined = changes['shopCategoryParam'];
    const isQueryAction =
      (addressParamChange !== undefined ? this.isAddressQueryAction(addressParamChange) : false) ||
      (shopCategoryParam !== undefined ? this.isShopCategoryQueryAction(shopCategoryParam) : false);

    if (isQueryAction) {
      await this.initQuery();
    }
  }

  private async initQuery() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
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
      const hasShopCategoryValue =
        this.shopCategoryParam !== undefined && this.shopCategoryParam.length > 0;
      return (isSuburbChanged || isPostCodeChanged) && hasShopCategoryValue;
    } else {
      return false;
    }
  }
}
