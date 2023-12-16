import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, filter, of, skip, switchMap, take, takeUntil } from 'rxjs';
import { Cart, CheckOutItem } from 'src/app/interface/booking/cart/cart.interface';
import { IShopServiceMenuOptionAction } from 'src/app/service/shop/shop-service-management/shop-service-menu-option-controller/shop-service-menu-option-controller.service';
import { WaitingListShopCartCriteriaType } from 'src/app/service/waiting-list/waiting-list-shop/waitng-list-shop.service';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';

@Component({
  selector: 'waiting-list-cart',
  templateUrl: './waiting-list-cart.component.html',
  styleUrls: ['./waiting-list-cart.component.scss'],
})
export class WaitingListCartComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public expandedServiceIndex: number | null = null;
  public criteria$: Observable<WaitingListShopCartCriteriaType | null> = this._waitingList.client.id$.pipe(
    switchMap(id => {
      if (typeof id === 'string') {
        return this._waitingList.shop.getCartCriteriaValueChangeListener(id);
      } else {
        return of(null);
      }
    }),
    takeUntil(this._destroy$)
  );

  public cart$: Observable<Cart | null> = this._waitingList.cart$;

  public selected!: IShopServiceMenuOptionAction | undefined;

  constructor(private _waitingList: WaitingListService) {}

  async ngOnInit() {
    this.criteria$
      .pipe(
        filter(criteria => criteria !== null),
        take(1)
      )
      .subscribe(criteria => {
        if (criteria) {
          this.selected = criteria.buttons.length > 0 ? criteria.buttons[0] : undefined;
        }
      });
    await this._waitingList.cart.start();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
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
