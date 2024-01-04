import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Subject,
  Observable,
  combineLatestWith,
  takeUntil,
  filter,
  combineLatestAll,
  combineLatest,
  switchMap,
  of,
} from 'rxjs';
import { ShopEmployeeTimeSheet } from 'src/app/interface';
import { CheckOutSpecialistType } from 'src/app/interface/booking/cart/cart.interface';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';

@Component({
  selector: 'app-select-specialist-time',
  templateUrl: './select-specialist-time.page.html',
  styleUrls: ['./select-specialist-time.page.scss'],
})
export class SelectSpecialistTimePage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public loaded$: Observable<boolean> = this._waitingList.isLoaded$;
  public isLoading$: Observable<boolean> = this._waitingList.isLoading$;

  public specialists$: Observable<ShopEmployeeTimeSheet[] | null> = this._waitingList.todaySpecialists();
  public selectedSpecialist$: Observable<CheckOutSpecialistType | null> =
    this._waitingList.cart.selectedSpecialist();
  public cart$ = this._waitingList.cart$;
  public availableTime$ = this._waitingList.selectTodaySpecialistTime();
  public enableNext$ = combineLatest([
    this._waitingList.cart.hasSpecialist(),
    this._waitingList.cart.hasSelectDateTime(),
  ]).pipe(
    switchMap(([hasSpecialist, hasTime]) => {
      if (hasSpecialist && hasTime) {
        return of(true);
      } else {
        return of(false);
      }
    })
  );

  constructor(
    private _waitingList: WaitingListService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  async ngOnInit() {
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

  async onClickGoback() {
    await this._router.navigateByUrl(`/waiting-list/${this.sessionId}/cart-view`);
  }

  async onClickNext() {
    await this._router.navigateByUrl(`/waiting-list/${this.sessionId}/confirmation`);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
