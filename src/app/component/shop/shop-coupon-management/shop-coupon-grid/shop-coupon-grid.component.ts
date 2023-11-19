import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ChatGptTranslateDocumentType,
  ShopCouponDocumentType,
  ShopLanguagePackageModalProp,
} from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
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
  @Input() translatedRequest: ChatGptTranslateDocumentType[] = [];
  @Input() isReachToMax: boolean = true;
  @Input() isModalOpen: boolean = false;
  @Input() isAuthorisedRole: boolean = false;
  constructor() {}

  ngOnInit() {}

  public isCompletedRequest(serviceId: string) {
    const titleRequest = this.translatedRequest?.find(
      s => s.serviceId === serviceId && s.format === Constant.Text.Format.Title
    );
    return titleRequest !== undefined ? titleRequest.status === Constant.API.TranslateStatus.Completed : false;
  }
  public onClickCreate() {
    this.onCreate.emit(true);
  }

  public async onClickEdit(prop: ShopCouponDocumentType) {
    if (!this.isModalOpen) {
      this.onEdit.emit(prop);
    }
  }
}
