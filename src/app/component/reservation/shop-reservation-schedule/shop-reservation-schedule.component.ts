import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  DoCheck,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  computed,
  inject,
} from '@angular/core';
import { BehaviorSubject, Subject, combineLatestWith, filter, interval, takeUntil } from 'rxjs';
import { ShopReservationSchedulerService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-scheduler.service';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';
import { DateService } from 'src/app/service/global/date/date.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { SchedulerViewModeType } from 'src/app/interface';
@Component({
  selector: 'shop-reservation-schedule',
  templateUrl: './shop-reservation-schedule.component.html',
  styleUrls: ['./shop-reservation-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopReservationScheduleComponent implements OnInit, DoCheck, OnDestroy {
  @Input() destroy$!: Subject<void>;
  public kendo = inject(KendoUiService);
  public scheduler = inject(ShopReservationSchedulerService);
  private _el = inject(ElementRef);
  private _dateSvc = inject(DateService);
  private _interval$ = interval(1000);
  private _currentDateTime = new BehaviorSubject<string | null>(null);
  private _currentDateTime$ = this._currentDateTime.asObservable();
  private _loaded$ = toObservable(this.scheduler.loaded);

  public currentDateTime = toSignal(this._currentDateTime$, { initialValue: null });
  public loaded = computed(() => {
    const currentDateTime = this.currentDateTime();
    const loaded = this.scheduler.loaded();
    return currentDateTime !== null && loaded;
  });

  private get dayScheduler(): HTMLElement | null {
    return this._el.nativeElement.querySelector('.k-scheduler-content.k-user-select-none');
  }
  private get dayYScrollScheduler(): HTMLElement | null {
    return this._el.nativeElement.querySelector(
      '.horizontal-scheduler.k-widget.k-scheduler.k-floatwrap.k-pos-relative'
    );
  }

  private get timelineScheduler(): HTMLElement | null {
    return this._el.nativeElement.querySelector('.k-scheduler-content');
  }

  private get currentTimeIndicator(): HTMLElement | null {
    return this._el.nativeElement.querySelector('.k-current-time');
  }

  constructor() {}
  ngOnDestroy() {}

  ngDoCheck() {
    this.adjustHorizontalMode();
  }

  async ngOnInit() {
    this._interval$
      .pipe(
        combineLatestWith(this._loaded$),
        takeUntil(this.destroy$),
        filter(([_, loaded]) => typeof loaded === 'boolean' && loaded)
      )
      .subscribe(async () => {
        const currentTime = this._dateSvc.transform.formatLocalDateTime(
          this._dateSvc.shopNow(this.scheduler.timezone())
        );
        this._currentDateTime.next(currentTime);
      });
  }

  public onChangeView(mode: SchedulerViewModeType) {
    this.scheduler.selectedViewMode = mode;
    this.adjustHorizontalMode();
  }

  //Day
  public onDayModeLeft() {
    const scrollableScheduler = this.dayScheduler;
    if (scrollableScheduler) {
      scrollableScheduler.scrollBy({ left: -130, behavior: 'smooth' });
    }
  }
  public onDayModeRight() {
    const scrollableScheduler = this.dayScheduler;
    if (scrollableScheduler) {
      scrollableScheduler.scrollBy({ left: 130, behavior: 'smooth' });
    }
  }
  public allowDayModeLeft(): boolean {
    const scrollableScheduler = this.dayScheduler;
    return scrollableScheduler !== null && scrollableScheduler.scrollLeft > 0;
  }
  public allowDayModeRight(): boolean {
    const scrollableScheduler = this.dayScheduler;
    return (
      scrollableScheduler !== null &&
      scrollableScheduler.scrollLeft + scrollableScheduler.clientWidth < scrollableScheduler.scrollWidth
    );
  }

  //Timeline
  public onTimelineModeLeft() {
    const scrollableScheduler = this.timelineScheduler;
    if (scrollableScheduler) {
      scrollableScheduler.scrollBy({ left: -100, behavior: 'smooth' });
    }
  }
  public onTimelineModeRight() {
    const scrollableScheduler = this.timelineScheduler;
    if (scrollableScheduler) {
      scrollableScheduler.scrollBy({ left: 100, behavior: 'smooth' });
    }
  }
  public allowTimelineModeLeft(): boolean {
    const scrollableScheduler = this.timelineScheduler;
    return scrollableScheduler !== null && scrollableScheduler.scrollLeft > 0;
  }
  public allowTimelineModeRight(): boolean {
    const scrollableScheduler = this.timelineScheduler;
    return (
      scrollableScheduler !== null &&
      scrollableScheduler.scrollLeft + scrollableScheduler.clientWidth < scrollableScheduler.scrollWidth
    );
  }

  public scrollToCurrentTime() {
    if (this.scheduler.isDayViewMode()) {
      this.scrollDayModeCurrentTime();
    } else {
      this.scrollTimelineModeCurrentTime();
    }
  }

  private scrollTimelineModeCurrentTime() {
    const indicator = this.currentTimeIndicator;
    const scrollableScheduler = this.timelineScheduler;
    if (indicator && scrollableScheduler) {
      const scrollDifference = indicator.offsetLeft - scrollableScheduler.scrollLeft;
      scrollableScheduler.scrollBy({ left: scrollDifference, behavior: 'smooth' });
    }
  }

  private scrollDayModeCurrentTime() {
    const indicator = this.currentTimeIndicator;
    const scrollableScheduler = this.dayYScrollScheduler;
    if (indicator && scrollableScheduler) {
      const scrollDifference = indicator.offsetTop - scrollableScheduler.scrollTop;
      scrollableScheduler.scrollBy({ top: scrollDifference, behavior: 'smooth' });
    }
  }

  private adjustHorizontalMode() {
    const horizontal = this._el.nativeElement.querySelector('.horizontal-container');
    if (horizontal) {
      const header = this._el.nativeElement.querySelector('.k-scheduler-pane .k-scheduler-header.k-state-default');
      if (header) {
        const schedulerPane = this._el.nativeElement.querySelector('.k-scheduler-pane');
        let classList: DOMTokenList = schedulerPane.classList;
        if (!classList.contains('header-top')) {
          schedulerPane.classList.add('header-top');
          schedulerPane.style.height = '70px';
        }
      }
    }
  }
}
