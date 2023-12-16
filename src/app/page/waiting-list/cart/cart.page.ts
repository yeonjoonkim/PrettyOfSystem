import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, combineLatestWith, takeUntil, firstValueFrom } from 'rxjs';
import { IUser } from 'src/app/interface';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';
import * as Constant from 'src/app/constant/constant';
import { Cart } from 'src/app/interface/booking/cart/cart.interface';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public loaded$!: Observable<boolean>;
  public isLoading$!: Observable<boolean>;
  public client$!: Observable<IUser | null>;
  public cart$!: Observable<Cart | null>;

  constructor(
    private _waitingList: WaitingListService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.loaded$ = this._waitingList.isLoaded$;
    this.isLoading$ = this._waitingList.isLoading$;
    this.client$ = this._waitingList.client.info$;
    this.cart$ = this._waitingList.cart$;
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
      });
  }

  async onClickGoback() {
    const observable = this._waitingList.shop.category();
    const category = await firstValueFrom(observable);

    if (category !== null) {
      switch (category.name as Constant.ShopCategoryTitleType) {
        case Constant.ShopCategoryTitle.MassageTheraphy:
          await this._router.navigateByUrl(`/waiting-list/${this._sessionId}/update-massage-preference`);
          break;
        case Constant.ShopCategoryTitle.PersonalTraining || Constant.ShopCategoryTitle.SkinCare:
          await this._router.navigateByUrl(`/waiting-list/${this._sessionId}/update-medical-info`);
          break;
        default:
          await this._router.navigateByUrl(`/waiting-list/${this._sessionId}/update-client-info`);
      }
    } else {
      await this._router.navigateByUrl('booking');
    }
  }

  public qty(cart: Cart | null) {
    return cart !== null ? cart.checkout.reduce((sum, item) => sum + item.qty, 0) : 0;
  }

  async onClickNext() {
    await this._router.navigateByUrl(`/waiting-list/${this._sessionId}/cart-view`);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
