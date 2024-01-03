import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, combineLatestWith, filter, firstValueFrom, takeUntil } from 'rxjs';
import { ShopExtraDocumentType } from 'src/app/interface';
import { Cart, CheckOutItem } from 'src/app/interface/booking/cart/cart.interface';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';
@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.page.html',
  styleUrls: ['./cart-view.page.scss'],
})
export class CartViewPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public loaded$!: Observable<boolean>;
  public isLoading$!: Observable<boolean>;
  public cart$!: Observable<Cart | null>;
  public extras$!: Observable<ShopExtraDocumentType[]>;
  public hasRelatedService$!: Observable<boolean>;
  public hasOnlyCoupon$!: Observable<boolean>;

  constructor(
    private _waitingList: WaitingListService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.loaded$ = this._waitingList.isLoaded$;
    this.isLoading$ = this._waitingList.isLoading$;
    this.cart$ = this._waitingList.cart$;
    this.extras$ = this._waitingList.shop.getExtra();
    this.hasRelatedService$ = this._waitingList.cart.hasRelatedService();
    this.hasOnlyCoupon$ = this._waitingList.cart.hasOnlyCoupon();
  }

  async ngOnInit() {
    this._waitingList.start$
      .pipe(combineLatestWith(this._waitingList.client.isLoggedin$), takeUntil(this._destroy$))
      .subscribe(async ([start, login]) => {
        const hasSessionId: boolean = typeof this._sessionId === 'string';
        const navigateToWaitingList = !start && !login && hasSessionId;
        const validateSession = !start && login && hasSessionId;
        if (!hasSessionId) {
          this._router.navigateByUrl(`booking`);
        }
        if (navigateToWaitingList) {
          this._router.navigateByUrl(`waiting-list/${this._sessionId}`);
        }
        if (validateSession) {
          await this._waitingList.validateSession(this._sessionId);
        }
        await this._waitingList.cart.start();
      });
  }

  async onClickGoback() {
    await this._router.navigateByUrl(`/waiting-list/${this._sessionId}/cart`);
  }

  public qty(cart: Cart | null) {
    return cart !== null ? cart.checkout.reduce((sum, item) => sum + item.qty, 0) : 0;
  }

  async onClickNext() {
    const hasOnlyCoupon = await firstValueFrom(this.hasOnlyCoupon$);
    if (!hasOnlyCoupon) {
      await this._router.navigateByUrl(`/waiting-list/${this._sessionId}/select-specialist-time`);
    } else {
      this._router.navigateByUrl(`/waiting-list/${this._sessionId}/confirmation`);
    }
  }

  public async incrementCheckout(checkout: CheckOutItem) {
    await this._waitingList.cart.increment(checkout);
  }

  public async decrementCheckout(checkout: CheckOutItem) {
    await this._waitingList.cart.decrement(checkout);
  }

  public async deleteCheckout(checkout: CheckOutItem) {
    await this._waitingList.cart.delete(checkout);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
