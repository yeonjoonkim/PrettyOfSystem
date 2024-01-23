import { Component, Input, OnInit } from '@angular/core';
import { ShopCategoryType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'shop-agreement',
  templateUrl: './shop-agreement.component.html',
  styleUrls: ['./shop-agreement.component.scss'],
})
export class ShopAgreementComponent implements OnInit {
  @Input() category!: ShopCategoryType;
  @Input() isHairSalon!: boolean;
  @Input() isMassageTheraphy!: boolean;
  @Input() isPersonalTrainning!: boolean;
  @Input() isSkinCare!: boolean;
  @Input() isMobileShop!: boolean;
  @Input() isNailArt!: boolean;

  constructor() {}

  ngOnInit() {}

  public massageShopAgreement() {
    return this.category !== undefined
      ? Constant.ShopCategoryTitle.MassageTheraphy || this.isMassageTheraphy
      : this.isMassageTheraphy;
  }
}
