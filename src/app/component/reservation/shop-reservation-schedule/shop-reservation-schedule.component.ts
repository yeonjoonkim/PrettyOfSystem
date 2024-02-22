import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { Subject, filter, map, shareReplay, takeUntil } from 'rxjs';
import {
  ShopReservationSchedulerService,
  SchedulerViewMode,
  ShopSchedulerViewModeType,
} from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-scheduler.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';
@Component({
  selector: 'shop-reservation-schedule',
  templateUrl: './shop-reservation-schedule.component.html',
  styleUrls: ['./shop-reservation-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopReservationScheduleComponent implements OnInit, AfterViewInit, OnDestroy {
  public kendo = inject(KendoUiService);

  private _el = inject(ElementRef);
  private _destroy$ = new Subject<void>();
  public scheduler = inject(ShopReservationSchedulerService);

  constructor() {}

  async ngAfterViewInit() {
    await this.onChangeView(this.scheduler.selectedViewMode);
  }

  async ngOnInit() {
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public async onChangeView(mode: ShopSchedulerViewModeType) {
    this.scheduler.selectedViewMode = mode;
    await delay(3);
    const horizontal = this._el.nativeElement.querySelector('.horizontal-container');
    if (horizontal) {
      const header = this._el.nativeElement.querySelector('.k-scheduler-pane .k-scheduler-header.k-state-default');

      if (header) {
        const headerWrap = this._el.nativeElement.querySelector('.k-scheduler-header-wrap');
        const schedulerPane = this._el.nativeElement.querySelector('.k-scheduler-pane');
        schedulerPane.style.height = '37px';
        headerWrap.style.height = '37px';
        schedulerPane.classList.add('header-top');
      }
    }
  }
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
