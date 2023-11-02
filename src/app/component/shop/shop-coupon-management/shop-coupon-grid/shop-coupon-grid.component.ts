import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopCouponDocumentType, ShopLanguagePackageModalProp } from 'src/app/interface';
import { DeviceWidthService } from 'src/app/service/global/device-width/device-width.service';

@Component({
  selector: 'shop-coupon-grid',
  templateUrl: './shop-coupon-grid.component.html',
  styleUrls: ['./shop-coupon-grid.component.scss'],
})
export class ShopCouponGridComponent implements OnInit {
  @Output() onEditLanguagePackage = new EventEmitter<ShopLanguagePackageModalProp>();
  @Output() onEdit = new EventEmitter<ShopCouponDocumentType>();
  @Output() onCreate = new EventEmitter<boolean>();

  @Input() coupons: ShopCouponDocumentType[] = [];
  @Input() isReachToMax: boolean = true;
  @Input() isModalOpen: boolean = false;
  @Input() isAuthorisedRole: boolean = false;
  constructor(public device: DeviceWidthService) {}

  ngOnInit() {}

  public onClickCreate() {
    this.onCreate.emit(true);
  }

  public async onClickEdit(prop: ShopCouponDocumentType) {
    if (!this.isModalOpen) {
      this.onEdit.emit(prop);
    }
  }
}
