import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopExtraDocumentType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'extra-price-list-card',
  templateUrl: './extra-price-list-card.component.html',
  styleUrls: ['./extra-price-list-card.component.scss'],
})
export class ExtraPriceListCardComponent implements OnInit {
  @Output() add = new EventEmitter<ShopExtraDocumentType>();

  @Input() type: Constant.LanguageTransformType = Constant.Default.LanguageTransformType.User;
  @Input() enabledAdd: boolean = true;
  @Input() extra!: ShopExtraDocumentType;
  @Input() isCartList: boolean = false;

  constructor() {}

  ngOnInit() {}

  public onClickAdd() {
    this.add.emit(this.extra);
  }
}
