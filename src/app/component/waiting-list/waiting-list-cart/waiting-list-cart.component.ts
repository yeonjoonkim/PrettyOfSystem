import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { filter, take } from 'rxjs';
import { Cart, CheckOutItem } from 'src/app/interface/booking/cart/cart.interface';
import { IShopServiceMenuOptionAction } from 'src/app/service/shop/shop-service-management/shop-service-menu-option-controller/shop-service-menu-option-controller.service';
import { WaitingListShopCartCriteriaType } from 'src/app/service/waiting-list/waiting-list-shop/waitng-list-shop.service';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';

@Component({
  selector: 'waiting-list-cart',
  templateUrl: './waiting-list-cart.component.html',
  styleUrls: ['./waiting-list-cart.component.scss'],
})
export class WaitingListCartComponent implements OnInit, OnChanges {
  public expandedServiceIndex: number | null = null;
  @Input() criteria!: WaitingListShopCartCriteriaType;
  @Input() cart!: Cart;
  public selected!: IShopServiceMenuOptionAction | undefined;

  constructor(private _waitingList: WaitingListService) {}
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const criteriaChange: SimpleChange | undefined = changes['criteria'];
    if (criteriaChange?.firstChange) {
      const current = criteriaChange.currentValue as WaitingListShopCartCriteriaType;
      this.selected = current.buttons.length > 0 ? current.buttons[0] : undefined;
    }
  }

  public buttonChange(selected: IShopServiceMenuOptionAction) {
    this.selected = selected;
  }

  public expandServiceCard(index: number | null) {
    this.expandedServiceIndex = index;
  }

  public isActive(name: string) {
    return this.selected?.name === name;
  }

  public async add(checkout: CheckOutItem, timezone: string) {
    await this._waitingList.cart.add(checkout, timezone);
  }
}
