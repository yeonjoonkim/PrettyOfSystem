import { Component, DestroyRef, OnInit, computed, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';
import { ShopReservationSchedulerService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-scheduler.service';

@Component({
  selector: 'shop-reservation-scheduler',
  templateUrl: './shop-reservation-scheduler.page.html',
  styleUrls: ['./shop-reservation-scheduler.page.scss'],
})
export class ShopReservationSchedulerPage implements OnInit {
  public kendo = inject(KendoUiService);
  private _scheduler = inject(ShopReservationSchedulerService);
  private _destroyRef = inject(DestroyRef);
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

  constructor() {}

  ngOnInit() {
    this._scheduler.start();
    this._scheduler.query$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(query => {
      this._scheduler.schedules.set(query);
    });
  }
}
