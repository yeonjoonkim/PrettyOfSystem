import { Component, DestroyRef, OnDestroy, OnInit, computed, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';
import {
  ShopReservationSchedulerService,
  nullableString,
} from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-scheduler.service';

@Component({
  selector: 'shop-reservation-scheduler',
  templateUrl: './shop-reservation-scheduler.page.html',
  styleUrls: ['./shop-reservation-scheduler.page.scss'],
})
export class ShopReservationSchedulerPage implements OnInit, OnDestroy {
  public kendo = inject(KendoUiService);
  private _scheduler = inject(ShopReservationSchedulerService);
  protected loaded = this._scheduler.loaded;
  protected schedulerStatus = computed(() => {
    const status = this._scheduler.dateStatus();
    return status.isFutureDate
      ? 'label.title.future'
      : status.isPreviousDate
        ? 'label.title.previous'
        : 'label.title.today';
  });
  protected pendingSchedules = 0;
  protected destroy$ = new Subject<void>();

  constructor() {}

  ngOnInit() {}

  ionViewWillEnter() {
    this._scheduler.start();
    this._scheduler.query$.pipe(takeUntil(this.destroy$)).subscribe(query => {
      this._scheduler.schedules.set(query);
    });
  }

  ionViewWillLeave() {
    this.destroy$.next();
    this.destroy$.complete();
    this._scheduler.startOfDay.set(nullableString);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this._scheduler.startOfDay.set(nullableString);
  }
}
