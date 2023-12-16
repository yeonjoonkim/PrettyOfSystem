import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopExtraDocumentType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { CheckOutItem } from 'src/app/interface/booking/cart/cart.interface';
@Component({
  selector: 'extra-price-list-card',
  templateUrl: './extra-price-list-card.component.html',
  styleUrls: ['./extra-price-list-card.component.scss'],
})
export class ExtraPriceListCardComponent implements OnInit {
  @Output() add = new EventEmitter<CheckOutItem>();

  @Input() type: Constant.LanguageTransformType = Constant.Default.LanguageTransformType.User;
  @Input() enabledAdd: boolean = true;
  @Input() extra!: ShopExtraDocumentType;
  @Input() isCartList: boolean = false;

  constructor() {}

  ngOnInit() {}

  public onClickAdd() {
    const checkout: CheckOutItem = {
      shopId: this.extra.shopId,
      type: Constant.CartItem.Extra,
      itemId: this.extra.id,
      title: this.extra.title,
      isInsuranceCover: false,
      specializedEmployees: [],
      limitedTime: null,
      price: this.extra.price,
      qty: 1,
      min: 0,
      couponCriteria: null,
    };
    this.add.emit(checkout);
  }
}
