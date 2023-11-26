import { Injectable } from '@angular/core';
import { CheckInClientService } from './check-in-client/check-in-client.service';
import { OneTimeCheckinUrlService } from '../internal-api/one-time-checkin-url/one-time-checkin-url.service';
import { BehaviorSubject, Observable, combineLatest, map, of, switchMap } from 'rxjs';
import { ShopOneTimeCheckInUrl } from 'src/app/interface';
import { Router } from '@angular/router';
import { ToastService } from '../global/toast/toast.service';
import { CheckInShopService } from './check-in-shop/check-in-shop.service';
import { LanguageService } from '../global/language/language.service';

@Injectable({
  providedIn: 'root',
})
export class CheckInService {
  //Start Session;
  private _checkInSession = new BehaviorSubject<ShopOneTimeCheckInUrl | null>(null);
  private _startSessionShopId = new BehaviorSubject<string | null>(null);
  public checkInSession$ = this._checkInSession.asObservable();
  public startSessionShopId$ = this._startSessionShopId.asObservable();

  public startCheckIn$!: Observable<boolean | null>;
  public isLoading$!: Observable<boolean>;
  public isLoaded$!: Observable<boolean>;

  constructor(
    public client: CheckInClientService,
    public shop: CheckInShopService,
    private _otu: OneTimeCheckinUrlService,
    private _router: Router,
    private _toaster: ToastService,
    private _language: LanguageService
  ) {
    this.shop.config$ = this.shop.shopConfigurationValueListener(this.startSessionShopId$);
    this.startCheckIn();
    this.loadingCheckIn();
    this.loadCheckIn();
  }

  public completeSession() {
    this._checkInSession.complete();
  }

  public async validateCheckInSession(sessionId: string | null) {
    if (sessionId === null) {
      await this.invalidSessionId();
    } else {
      const result = await this._otu.getSession(sessionId);
      if (result !== null) {
        this._checkInSession.next(result);
        this._startSessionShopId.next(result.shopId);
      } else {
        await this.invalidSessionId();
      }
    }
  }

  private async invalidSessionId() {
    const errorMsg = await this._language.transform('messagefail.title.accessdenied');
    await this._toaster.presentError(errorMsg);
    this._router.navigateByUrl('booking');
  }

  private startCheckIn() {
    this.startCheckIn$ = combineLatest([this.startSessionShopId$, this.client.isLoggedin$]).pipe(
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

  private loadingCheckIn() {
    this.isLoading$ = this.startCheckIn$.pipe(
      switchMap(checkIn => {
        if (checkIn === null) {
          return of(true);
        } else {
          return of(false);
        }
      })
    );
  }

  private loadCheckIn() {
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
