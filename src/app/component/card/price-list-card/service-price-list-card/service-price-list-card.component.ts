import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import { ShopServiceDocumentType, ShopServiceOptionType } from 'src/app/interface';
import { CheckOutItem } from 'src/app/interface/booking/cart/cart.interface';

@Component({
  selector: 'service-price-list-card',
  templateUrl: './service-price-list-card.component.html',
  styleUrls: ['./service-price-list-card.component.scss'],
})
export class ServicePriceListCardComponent implements OnInit, OnChanges {
  @Output() expandCard = new EventEmitter<number | null>();
  @Output() add = new EventEmitter<CheckOutItem>();
  @Input() type: Constant.LanguageTransformType = Constant.Default.LanguageTransformType.User;
  @Input() enabledAdd: boolean = true;
  @Input() index!: number;
  @Input() service!: ShopServiceDocumentType;
  @Input() expandIndex!: number | null;
  @Input() isCartList: boolean = false;

  public isExpanded: boolean = false;

  constructor() {}

  async ngOnChanges(change: SimpleChanges) {
    const indexChange = change['expandIndex'];
    await this.onExpandIndexChange(indexChange);
  }

  ngOnInit() {}

  public onClickAdd(option: ShopServiceOptionType) {
    const checkout: CheckOutItem = {
      shopId: this.service.shopId,
      type: Constant.CartItem.Service,
      itemId: this.service.id,
      title: this.service.title,
      isInsuranceCover: this.service.isInsuranceCover,
      specializedEmployees: this.service.specializedEmployees,
      limitedTime: null,
      price: option.price,
      qty: 1,
      min: option.min,
      couponCriteria: null,
    };
    this.add.emit(checkout);
  }

  public onClickExpand() {
    const expandCardIndex = this.index === this.expandIndex ? null : this.index;
    this.expandCard.emit(expandCardIndex);
  }

  private async onExpandIndexChange(change: SimpleChange | undefined) {
    if (change && !change?.firstChange) {
      this.isExpanded =
        change.currentValue === null || change.currentValue !== this.index ? false : !this.isExpanded;
    }
  }
}
