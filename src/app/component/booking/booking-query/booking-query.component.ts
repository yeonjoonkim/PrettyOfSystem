import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { BookingQueryCriteria } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'booking-query',
  templateUrl: './booking-query.component.html',
  styleUrls: ['./booking-query.component.scss'],
})
export class BookingQueryComponent implements OnInit, OnChanges {
  @Input() query: BookingQueryCriteria = {
    address: {
      postCode: '',
      suburb: '',
    },
    shopCategoryName: Constant.BookingSearchIconType.MassageTheraphy,
  };
  public loading: boolean = false;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    const queryChange = changes['query'];
    this.handleQuery(queryChange);
    console.log(changes);
  }

  private async handleQuery(queryChange: SimpleChange) {
    const beforeQuery: BookingQueryCriteria | undefined = queryChange.previousValue;
    const afterQuery: BookingQueryCriteria | undefined = queryChange.currentValue;
    if (beforeQuery !== undefined && afterQuery !== undefined) {
      const isChanged = this.isQueryChanged(beforeQuery, afterQuery);
      const isQuery =
        afterQuery.address.suburb.length > 0 &&
        afterQuery.address.postCode.length > 0 &&
        afterQuery.shopCategoryName.length > 0;
      if (isChanged && isQuery) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      }
    }
  }

  private isQueryChanged(before: BookingQueryCriteria, after: BookingQueryCriteria) {
    const isPostCodeChanged = before.address.postCode !== after.address.postCode;
    const isSurburbChanged = before.address.suburb !== after.address.suburb;
    const isCategoryChanged = before.shopCategoryName !== after.shopCategoryName;
    return isCategoryChanged || isSurburbChanged || isPostCodeChanged;
  }
}
