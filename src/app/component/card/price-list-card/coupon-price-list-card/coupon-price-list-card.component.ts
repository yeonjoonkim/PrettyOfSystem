import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopCouponDocumentType } from 'src/app/interface';

import * as Constant from 'src/app/constant/constant';

@Component({
  selector: 'coupon-price-list-card',
  templateUrl: './coupon-price-list-card.component.html',
  styleUrls: ['./coupon-price-list-card.component.scss'],
})
export class CouponPriceListCardComponent implements OnInit {
  @Output() add = new EventEmitter<ShopCouponDocumentType>();

  @Input() type: Constant.LanguageTransformType = Constant.Default.LanguageTransformType.User;
  @Input() enabledAdd: boolean = true;
  @Input() coupon!: ShopCouponDocumentType;
  @Input() isCartList: boolean = false;

  constructor() {}

  ngOnInit() {}

  public onClickAdd() {
    this.add.emit(this.coupon);
  }
}
