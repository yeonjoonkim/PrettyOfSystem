import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of, switchMap } from 'rxjs';
import { WaitingListSessionType } from 'src/app/interface';
import { LanguageService } from '../global/language/language.service';
import { Router } from '@angular/router';
import { ToastService } from '../global/toast/toast.service';
import { ClientService } from '../client/client.service';
import { WaitingListUrlService } from '../internal-api/waiting-list-url/waiting-list-url.service';
import { WaitngListShopService } from './waiting-list-shop/waitng-list-shop.service';

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

  constructor(
    public shop: WaitngListShopService,
    public client: ClientService,
    private _url: WaitingListUrlService,
    private _router: Router,
    private _toaster: ToastService,
    private _language: LanguageService
  ) {
    this.shop.config$ = this.shop.shopConfigurationValueListener(this.startSessionShopId$);
    this.startWaitingList();
    this.loadingWaitingList();
    this.loadWaitingList();
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
