import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ShopReservationSchedulerService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-scheduler.service';

@Component({
  selector: 'shop-reservation-scheduler',
  templateUrl: './shop-reservation-scheduler.page.html',
  styleUrls: ['./shop-reservation-scheduler.page.scss'],
})
export class ShopReservationSchedulerPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _scheduler = inject(ShopReservationSchedulerService);
  protected loaded = this._scheduler.loaded;

  constructor() {}

  ngOnInit() {
    this._scheduler.start();
    this._scheduler.query$.pipe(takeUntil(this._destroy$)).subscribe(query => {
      this._scheduler.schedules.set(query);
    });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
