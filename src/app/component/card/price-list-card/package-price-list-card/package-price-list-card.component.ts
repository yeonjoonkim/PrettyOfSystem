import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopPackageDocumentType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { ShopPackageTimeService } from 'src/app/service/reservation/shop-package-time/shop-package-time.service';
import { CheckOutItem } from 'src/app/interface/booking/cart/cart.interface';

@Component({
  selector: 'package-price-list-card',
  templateUrl: './package-price-list-card.component.html',
  styleUrls: ['./package-price-list-card.component.scss'],
})
export class PackagePriceListCardComponent implements OnInit {
  @Output() add = new EventEmitter<CheckOutItem>();
  @Input() type: Constant.LanguageTransformType = Constant.Default.LanguageTransformType.User;
  @Input() enabledAdd: boolean = true;
  @Input() pack!: ShopPackageDocumentType;
  @Input() timezone!: Constant.TimeZoneType;
  @Input() isCartList: boolean = false;

  public date = new Date();

  constructor(private _time: ShopPackageTimeService) {}

  ngOnInit() {}

  public isAvailableNow() {
    return this._time.isAvailableNow(this.timezone, this.pack.limitedTime);
  }

  public onClickAdd() {
    const checkout: CheckOutItem = {
      shopId: this.pack.shopId,
      type: Constant.CartItem.Package,
      itemId: this.pack.id,
      title: this.pack.title,
      isInsuranceCover: this.pack.isInsuranceCover,
      specializedEmployees: this.pack.specializedEmployees,
      limitedTime: this.pack.limitedTime,
      price: this.pack.discountPrice,
      qty: 1,
      min: this.pack.totalMin,
      couponCriteria: null,
    };
    this.add.emit(checkout);
  }
}
