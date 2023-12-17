import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart, CheckOutItem } from 'src/app/interface/booking/cart/cart.interface';
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'cart-check-out-list',
  templateUrl: './cart-check-out-list.component.html',
  styleUrls: ['./cart-check-out-list.component.scss'],
})
export class CartCheckOutListComponent implements OnInit {
  @Output() increment = new EventEmitter<CheckOutItem>();
  @Output() decrement = new EventEmitter<CheckOutItem>();
  @Output() delete = new EventEmitter<CheckOutItem>();

  @Input() cart!: Cart | null;
  @Input() transformType!: Constant.LanguageTransformType;
  constructor() {}

  ngOnInit() {}

  public onIncrement(checkout: CheckOutItem) {
    this.increment.emit(checkout);
  }

  public onDecrement(checkout: CheckOutItem) {
    this.decrement.emit(checkout);
  }

  public onDelete(checkout: CheckOutItem) {
    this.delete.emit(checkout);
  }

  public hasRelatedService(checkouts: CheckOutItem[]) {
    return checkouts.some(s => s.type !== Constant.CartItem.Extra);
  }
}
