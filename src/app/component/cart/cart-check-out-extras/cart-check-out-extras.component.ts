import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopExtraDocumentType } from 'src/app/interface';
import { Cart, CheckOutItem } from 'src/app/interface/booking/cart/cart.interface';
import * as Constant from 'src/app/constant/constant';

@Component({
  selector: 'cart-check-out-extras',
  templateUrl: './cart-check-out-extras.component.html',
  styleUrls: ['./cart-check-out-extras.component.scss'],
})
export class CartCheckOutExtrasComponent implements OnInit {
  @Output() increment = new EventEmitter<CheckOutItem>();
  @Input() cart!: Cart | null;
  @Input() extras!: ShopExtraDocumentType[] | null;
  @Input() type: Constant.LanguageTransformType = Constant.Default.LanguageTransformType.User;
  constructor() {}

  ngOnInit() {}

  onIncrement(checkout: CheckOutItem) {
    this.increment.emit(checkout);
  }
}
