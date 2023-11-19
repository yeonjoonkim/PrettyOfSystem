import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopPackageDocumentType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { ShopPackageTimeService } from 'src/app/service/reservation/shop-package-time/shop-package-time.service';

@Component({
  selector: 'package-price-list-card',
  templateUrl: './package-price-list-card.component.html',
  styleUrls: ['./package-price-list-card.component.scss'],
})
export class PackagePriceListCardComponent implements OnInit {
  @Output() add = new EventEmitter<ShopPackageDocumentType>();
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
    this.add.emit(this.pack);
  }
}
