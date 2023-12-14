import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, take, takeUntil } from 'rxjs';
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
  public criteria: Observable<WaitingListShopCartCriteriaType> = this._waitingList.shop
    .getCartCriteriaValueChangeListener()
    .pipe(takeUntil(this._destroy$));

  public selected!: IShopServiceMenuOptionAction | undefined;

  constructor(private _waitingList: WaitingListService) {}

  ngOnInit() {
    this.criteria.pipe(take(1)).subscribe(criteria => {
      this.selected = criteria.buttons.length > 0 ? criteria.buttons[0] : undefined;
    });
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
}
