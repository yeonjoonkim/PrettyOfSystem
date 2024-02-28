import { Injectable, Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ShopSchedulerDocumentType } from 'src/app/interface';
import { DateService } from 'src/app/service/global/date/date.service';
import { ShopService } from 'src/app/service/shop/shop.service';
import * as Constant from 'src/app/constant/constant';
@Injectable({
  providedIn: 'root',
})
export class ShopDefaultSchedulerService {
  private _shop = inject(ShopService);
  private _dateSvc = inject(DateService);
  public defaultScheduler$ = this._shop.defaultScheduler$;

  //Sginal
  public data: Signal<ShopSchedulerDocumentType | null> = toSignal(
    this.defaultScheduler$
  ) as Signal<ShopSchedulerDocumentType | null>;
  public loaded = computed(() => {
    return this.data() !== null;
  });

  public maxDate = computed(() => {
    const scheduler = this.data();
    return scheduler !== null ? this._dateSvc.transform.toLocalDateTime(scheduler.endDate) : new Date();
  });
  public minDate = computed(() => {
    const scheduler = this.data();
    return scheduler !== null ? this._dateSvc.transform.toLocalDateTime(scheduler.activatedDate) : new Date();
  });

  public startOfDay = computed(() => {
    const scheduler = this.data();
    return scheduler !== null ? scheduler.currentDate : this._dateSvc.startDay(this._dateSvc.shopNow(null));
  });

  public timezone = computed(() => {
    const scheduler = this.data();
    return scheduler !== null ? scheduler.shopTimezone : Constant.TimeZone.AustraliaBrisbane;
  });

  constructor() {}
}