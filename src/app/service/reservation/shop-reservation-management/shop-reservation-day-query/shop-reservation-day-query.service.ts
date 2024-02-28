import { Injectable, inject } from '@angular/core';
import { ShopService } from '../../../shop/shop.service';
import { ShopScheduleRepositoryService } from 'src/app/firebase/shop-repository/shop-schedule-repository/shop-schedule-repository.service';
import { BehaviorSubject, combineLatestWith, filter, map, of, switchMap, take } from 'rxjs';
import * as Constant from 'src/app/constant/constant';
import { DateService } from '../../../global/date/date.service';
import { toSignal } from '@angular/core/rxjs-interop';
@Injectable({
  providedIn: 'root',
})
export class ShopReservationDayQueryService {
  private _shop = inject(ShopService);
  private _dateSvc = inject(DateService);
  private _schedules = inject(ShopScheduleRepositoryService);

  private _startOfDay = new BehaviorSubject<string | null>(null);

  get startOfDay() {
    return this._startOfDay.getValue();
  }

  set startOfDay(value: string | null) {
    this._startOfDay.next(value);
  }

  public startOfDay$ = this._startOfDay.asObservable();
  public schedules$ = this.startOfDay$.pipe(
    combineLatestWith(this._shop.config$),
    filter(([startOfDay, config]) => startOfDay !== null && config !== null),
    switchMap(([startOfDay, config]) => {
      if (startOfDay !== null && config !== null) {
        return this._schedules.activeDisplayInSystemEmployeesByShop(
          config.id,
          startOfDay,
          Constant.API.QueryMethod.Valuechange,
          Constant.Query.Equal
        );
      } else {
        return of(null);
      }
    })
  );

  public test = toSignal(this.schedules$);

  public shopStartOfDay$ = this._shop.timezone$.pipe(
    switchMap(timezone => {
      if (timezone !== null && timezone !== undefined) {
        return of(this._dateSvc.startDay(this._dateSvc.shopNow(timezone)));
      } else {
        return of(null);
      }
    })
  );

  public loaded$ = this.startOfDay$.pipe(
    combineLatestWith(this.shopStartOfDay$, this._shop.config$, this.schedules$),
    map(
      ([startOfDay, shopStartOfDay, config, schedules]) =>
        startOfDay !== null && config !== null && schedules !== null && shopStartOfDay !== null
    )
  );

  constructor() {}

  public start() {
    this.shopStartOfDay$
      .pipe(
        take(1),
        filter(timezone => timezone !== null)
      )
      .subscribe(startOfDay => {
        this._startOfDay.next(startOfDay);
      });
  }

  public previousDay() {}
}
