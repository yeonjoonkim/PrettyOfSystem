import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopCouponDocumentType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { CheckOutItem } from 'src/app/interface/booking/cart/cart.interface';
@Component({
  selector: 'coupon-price-list-card',
  templateUrl: './coupon-price-list-card.component.html',
  styleUrls: ['./coupon-price-list-card.component.scss'],
})
export class CouponPriceListCardComponent implements OnInit {
  @Output() add = new EventEmitter<CheckOutItem>();

  @Input() type: Constant.LanguageTransformType = Constant.Default.LanguageTransformType.User;
  @Input() enabledAdd: boolean = true;
  @Input() coupon!: ShopCouponDocumentType;
  @Input() isCartList: boolean = false;

  constructor() {}

  ngOnInit() {}

  public onClickAdd() {
    const checkout: CheckOutItem = {
      shopId: this.coupon.shopId,
      type: Constant.CartItem.Coupon,
      itemId: this.coupon.id,
      title: this.coupon.title,
      isInsuranceCover: false,
      specializedEmployees: [],
      limitedTime: null,
      price: this.coupon.discountPrice,
      qty: 1,
      min: 0,
      couponCriteria: {
        min: this.coupon.option.min,
        price: this.coupon.option.price,
        numberOfCoupon: this.coupon.numOfCoupon,
        expiredMonth: this.coupon.expiryMonth,
      },
    };
    this.add.emit(checkout);
  }
}
