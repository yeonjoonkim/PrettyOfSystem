import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Subject,
  Observable,
  combineLatestWith,
  takeUntil,
  firstValueFrom,
  filter,
  of,
  switchMap,
  take,
} from 'rxjs';
import { WaitingListConsultService } from 'src/app/service/waiting-list/waiting-list-consult/waiting-list-consult.service';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public loaded$!: Observable<boolean>;
  public isLoading$!: Observable<boolean>;

  //Validator
  public hasOnlyCoupon$: Observable<boolean> = of(false);

  private _consultValue$ = this._waitingList.start$.pipe(
    takeUntil(this._destroy$),
    combineLatestWith(this.hasOnlyCoupon$, this._waitingList.waitingListSession$),
    filter(
      ([start, hasOnlyCoupon, session]) =>
        typeof start === 'boolean' &&
        start &&
        typeof hasOnlyCoupon === 'boolean' &&
        !hasOnlyCoupon &&
        session !== null
    ),
    switchMap(([start, hasOnlyCoupon, session]) => {
      if (start && !hasOnlyCoupon && session) {
        return this._consult.getConsult(session.id);
      } else {
        return of(null);
      }
    })
  );

  constructor(
    private _waitingList: WaitingListService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _consult: WaitingListConsultService
  ) {
    this.loaded$ = this._waitingList.isLoaded$;
    this.isLoading$ = this._waitingList.isLoading$;
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
    this._consultValue$
      .pipe(
        takeUntil(this._destroy$),
        filter(consult => consult !== null)
      )
      .subscribe(value => {
        if (value !== null) {
          this._consult.setValue(value);
        }
      });
    this._waitingList.consent$
      .pipe(
        filter(consent => consent !== null),
        take(1)
      )
      .subscribe(consent => {
        if (consent) {
          this._consult.setConsent(consent);
        }
      });
  }

  async onClickGoback() {
    const hasOnlyCoupon = await firstValueFrom(this.hasOnlyCoupon$);
    if (!hasOnlyCoupon) {
      await this._router.navigateByUrl(`/waiting-list/${this._sessionId}/select-specialist-time`);
    } else {
      await this._router.navigateByUrl(`/waiting-list/${this._sessionId}/cart-view`);
    }
  }

  async onClickSumbit() {
    const hasOnlyCoupon = await firstValueFrom(this.hasOnlyCoupon$);
    if (!hasOnlyCoupon) {
      await this._router.navigateByUrl(`/waiting-list/${this._sessionId}/select-specialist-time`);
    } else {
      this._router.navigateByUrl(`/waiting-list/${this._sessionId}/confirmation`);
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
