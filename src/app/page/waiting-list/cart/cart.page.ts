import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, combineLatestWith, takeUntil, firstValueFrom, of, switchMap, filter } from 'rxjs';
import { IUser, ShopCategoryType } from 'src/app/interface';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';
import * as Constant from 'src/app/constant/constant';
import { Cart } from 'src/app/interface/booking/cart/cart.interface';
import { WaitingListShopCartCriteriaType } from 'src/app/service/waiting-list/waiting-list-shop/waitng-list-shop.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public loaded$!: Observable<boolean>;
  public isLoading$!: Observable<boolean>;
  public client$!: Observable<IUser | null>;
  public cart$: Observable<Cart | null> = this._waitingList.cart$;
  public category$: Observable<ShopCategoryType | null> = this._waitingList.shop.category();
  public criteria$: Observable<WaitingListShopCartCriteriaType | null> = this._waitingList.start$.pipe(
    combineLatestWith(this._waitingList.client.info$),
    filter(([start, info]) => start !== null && start && info !== null),
    switchMap(([_, info]) => {
      if (_ && info) {
        return this._waitingList.shop.getCartCriteriaValueChangeListener(info.setting.pregnancyDueDate !== null);
      } else {
        return of(null);
      }
    })
  );

  constructor(
    private _waitingList: WaitingListService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.loaded$ = this._waitingList.isLoaded$;
    this.isLoading$ = this._waitingList.isLoading$;
    this.client$ = this._waitingList.client.info$;
  }

  ngOnInit() {}

  async onClickGoback(category: ShopCategoryType) {
    if (category !== null) {
      switch (category.name as Constant.ShopCategoryTitleType) {
        case Constant.ShopCategoryTitle.MassageTheraphy:
          await this._router.navigateByUrl(`/waiting-list/${this.sessionId}/update-massage-preference`);
          break;
        default:
          await this._router.navigateByUrl(`/waiting-list/${this.sessionId}/update-client-info`);
      }
    } else {
      await this._router.navigateByUrl('booking');
    }
  }

  public qty(cart: Cart | null) {
    return cart !== null ? cart.checkout.reduce((sum, item) => sum + item.qty, 0) : 0;
  }

  async onClickNext() {
    await this._router.navigateByUrl(`/waiting-list/${this.sessionId}/cart-view`);
  }

  async ionViewWillEnter() {
    this._waitingList.start$
      .pipe(combineLatestWith(this._waitingList.client.isLoggedin$), takeUntil(this._destroy$))
      .subscribe(async ([start, login]) => {
        const hasSessionId: boolean = typeof this.sessionId === 'string';
        const navigateToWaitingList = !start && !login && hasSessionId;
        const validateSession = !start && login && hasSessionId;
        if (!hasSessionId) {
          this._router.navigateByUrl(`booking`);
        }
        if (navigateToWaitingList) {
          this._router.navigateByUrl(`waiting-list/${this.sessionId}`);
        }
        if (validateSession) {
          await this._waitingList.validateSession(this.sessionId);
        }
        await this._waitingList.cart.start();
      });
  }

  ionViewWillLeave() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
