import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  combineLatestWith,
  distinctUntilChanged,
  filter,
  first,
  map,
  of,
  switchMap,
} from 'rxjs';
import { WaitingListSessionType } from 'src/app/interface';
import { LanguageService } from '../global/language/language.service';
import { Router } from '@angular/router';
import { ToastService } from '../global/toast/toast.service';
import { ClientService } from '../client/client.service';
import { WaitingListUrlService } from '../internal-api/waiting-list-url/waiting-list-url.service';
import { WaitngListShopService } from './waiting-list-shop/waitng-list-shop.service';
import { WaitingListCartService } from './waiting-list-cart/waiting-list-cart.service';
import { Cart } from 'src/app/interface/booking/cart/cart.interface';
import * as Constant from 'src/app/constant/constant';

@Injectable({
  providedIn: 'root',
})
export class WaitingListService {
  //Start Session;
  private _waitingListSession = new BehaviorSubject<WaitingListSessionType | null>(null);
  private _startSessionShopId = new BehaviorSubject<string | null>(null);
  public waitingListSession$ = this._waitingListSession.asObservable();
  public startSessionShopId$ = this._startSessionShopId.asObservable();

  public start$!: Observable<boolean | null>;
  public isLoading$!: Observable<boolean>;
  public isLoaded$!: Observable<boolean>;
  public cart$!: Observable<Cart | null>;

  constructor(
    public shop: WaitngListShopService,
    public client: ClientService,
    public cart: WaitingListCartService,
    private _url: WaitingListUrlService,
    private _router: Router,
    private _toaster: ToastService,
    private _language: LanguageService
  ) {
    this.shop.config$ = this.shop.shopConfigurationValueListener(this.startSessionShopId$);
    this.startWaitingList();
    this.loadingWaitingList();
    this.loadWaitingList();
    this.cart$ = this.cart.cart$;
  }

  public completeSession() {
    this._waitingListSession.complete();
  }

  public async validateSession(sessionId: string | null) {
    if (sessionId === null) {
      await this.invalidSessionId();
    } else {
      const result = await this._url.getSession(sessionId);
      if (result !== null) {
        this._waitingListSession.next(result);
        this._startSessionShopId.next(result.shopId);
      } else {
        await this.invalidSessionId();
      }
    }
  }

  private async invalidSessionId() {
    const errorMsg = await this._language.transform('messagefail.title.accessdenied');
    await this._toaster.presentError(errorMsg);
    await this.cart.complete();
    this._router.navigateByUrl('booking');
  }

  private startWaitingList() {
    this.start$ = combineLatest([this.startSessionShopId$, this.client.isLoggedin$]).pipe(
      switchMap(([startId, isLogin]) => {
        if (startId === null) {
          return of(null);
        } else if (startId !== null && !isLogin) {
          return of(false);
        } else if (startId !== null && isLogin) {
          return of(true);
        } else {
          return of(null);
        }
      })
    );
  }

  private specialists() {
    return this.start$.pipe(
      combineLatestWith(this.cart.relatedSpecialistIds(), this.shop.config$),
      filter(([start, specialistIds, config]) => start === true && specialistIds !== null && config !== null),
      switchMap(([start, specialistIds, shopConfig]) => {
        if (start && specialistIds && shopConfig) {
          return this.shop
            .activeSpecialist(shopConfig.id)
            .pipe(
              map(specialists =>
                specialistIds.length === 0
                  ? specialists
                  : specialists.filter(specialist => specialistIds.includes(specialist.userId))
              )
            );
        } else {
          return of(null);
        }
      }),
      first(),
      distinctUntilChanged()
    );
  }

  public selectSpecialist() {
    return this.specialists().pipe(
      switchMap(specialists => {
        if (specialists && specialists.length > 0) {
          let selection = specialists.map(s => {
            return { name: `${s.firstName} ${s.lastName}`, value: `${s.userId}`, gender: s.gender };
          });

          if (specialists.length > 2) {
            selection.unshift({
              name: 'label.title.anyspecialist',
              value: 'anyspecialist',
              gender: Constant.Default.Gender.Other,
            });
          }

          const hasMaleSpecialist = specialists.some(s => s.gender === Constant.Default.Gender.Male);
          const hasFemaleSpecialist = specialists.some(s => s.gender === Constant.Default.Gender.Female);

          if (specialists.length > 1 && hasMaleSpecialist) {
            selection.splice(1, 0, {
              name: 'label.title.malespecialist',
              value: 'malespecialist',
              gender: Constant.Default.Gender.Male,
            });
          }

          if (specialists.length > 2 && hasFemaleSpecialist) {
            const insertPosition = hasMaleSpecialist ? 2 : 1;
            selection.splice(insertPosition, 0, {
              name: 'label.title.femalespecialist',
              value: 'femalespecialist',
              gender: Constant.Default.Gender.Female,
            });
          }

          return of(selection);
        } else {
          return of(null);
        }
      })
    );
  }

  private loadingWaitingList() {
    this.isLoading$ = this.start$.pipe(
      switchMap(start => {
        if (start === null) {
          return of(true);
        } else {
          return of(false);
        }
      })
    );
  }

  private loadWaitingList() {
    this.isLoaded$ = this.isLoading$.pipe(
      switchMap(loading => {
        if (!loading) {
          return of(true);
        } else {
          return of(false);
        }
      })
    );
  }
}
