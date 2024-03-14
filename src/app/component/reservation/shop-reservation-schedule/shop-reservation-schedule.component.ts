import {
  ChangeDetectionStrategy,
  Component,
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
import { SchedulerEmployeeStatusType, SchedulerViewModeType, ShopScheduleDocumentType } from 'src/app/interface';
import { EventClickEvent, EventStyleArgs } from '@progress/kendo-angular-scheduler';
import * as Constant from 'src/app/constant/constant';
import { ReservationSchedulerEventType } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-employee-info/shop-reservation-employee-info.service';
import { PopoverController } from '@ionic/angular';
import { ShopReservationScheduleEditorService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-schedule-editor/shop-reservation-schedule-editor.service';
import { ShopReservationScheduleEditBreakTimeEditorService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-schedule-editor/shop-reservation-schedule-edit-break-time-editor/shop-reservation-schedule-edit-break-time-editor.service';
import { StartEndType } from 'src/app/service/global/date-time-validator/date-time-validator.service';
import { ShopReservationScheduleEventEditBreakPopoverComponent } from './event/shop-reservation-schedule-event-edit-break-popover/shop-reservation-schedule-event-edit-break-popover.component';
@Component({
  selector: 'shop-reservation-schedule',
  templateUrl: './shop-reservation-schedule.component.html',
  styleUrls: ['./shop-reservation-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopReservationScheduleComponent implements OnInit, DoCheck, OnDestroy {
  private _popoverCtrl = inject(PopoverController);

  @Input() destroy$!: Subject<void>;
  public kendo = inject(KendoUiService);
  public scheduler = inject(ShopReservationSchedulerService);
  private _el = inject(ElementRef);
  private _dateSvc = inject(DateService);
  private _scheduleEditorSvc = inject(ShopReservationScheduleEditorService);
  private _editBreakEditorSvc = inject(ShopReservationScheduleEditBreakTimeEditorService);
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

  public getEventClass = (args: EventStyleArgs) => {
    const description = args.event.dataItem.description as SchedulerEmployeeStatusType;
    switch (description) {
      case Constant.Scheduler.WorkingStatus.InBreak:
        return 'in-break';
      case Constant.Scheduler.WorkingStatus.OutOfOffice:
        return 'out-of-office';
      case Constant.Scheduler.WorkingStatus.Consulting:
        return 'in-consult';
      default:
        return '';
    }
  };

  public inConsult = (description: SchedulerEmployeeStatusType) => {
    return description === Constant.Scheduler.WorkingStatus.Consulting;
  };

  public inOutOfOffice = (description: SchedulerEmployeeStatusType) => {
    return description === Constant.Scheduler.WorkingStatus.OutOfOffice;
  };

  public inBreakTime = (description: SchedulerEmployeeStatusType) => {
    return description === Constant.Scheduler.WorkingStatus.InBreak;
  };

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
      // Calculate the new scroll position
      const newScrollPosition = scrollableScheduler.scrollLeft - 100;

      // Scroll to 0 if the new scroll position is negative, otherwise scroll by -100
      if (newScrollPosition < 0) {
        scrollableScheduler.scrollTo({ left: 0 });
      } else {
        scrollableScheduler.scrollBy({ left: -100 });
      }
    }
  }
  public onDayModeRight() {
    const scrollableScheduler = this.dayScheduler;
    if (scrollableScheduler) {
      // Calculate the new scroll position
      const newScrollPosition = scrollableScheduler.scrollLeft + 100;
      const maxScrollPosition = scrollableScheduler.scrollWidth - scrollableScheduler.clientWidth;

      // Scroll to the maximum scroll position if the new scroll position is beyond it, otherwise scroll by +100
      if (newScrollPosition > maxScrollPosition) {
        scrollableScheduler.scrollTo({ left: maxScrollPosition, behavior: 'smooth' });
      } else {
        scrollableScheduler.scrollBy({ left: 100, behavior: 'smooth' });
      }
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
      // Calculate the new scroll position
      const newScrollPosition = scrollableScheduler.scrollLeft - 100;

      // Scroll to 0 if the new scroll position is negative, otherwise scroll by -100
      if (newScrollPosition < 0) {
        scrollableScheduler.scrollTo({ left: 0 });
      } else {
        scrollableScheduler.scrollBy({ left: -100 });
      }
    }
  }

  public onTimelineModeRight() {
    const scrollableScheduler = this.timelineScheduler;
    if (scrollableScheduler) {
      // Calculate the new scroll position
      const newScrollPosition = scrollableScheduler.scrollLeft + 100;
      const maxScrollPosition = scrollableScheduler.scrollWidth - scrollableScheduler.clientWidth;

      // Scroll to the maximum scroll position if the new scroll position is beyond it, otherwise scroll by +100
      if (newScrollPosition > maxScrollPosition) {
        scrollableScheduler.scrollTo({ left: maxScrollPosition, behavior: 'smooth' });
      } else {
        scrollableScheduler.scrollBy({ left: 100, behavior: 'smooth' });
      }
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

  public async onClickEvent(target: EventClickEvent) {
    const dateStatus = this.scheduler.dateStatus();
    const event = target.event.dataItem as ReservationSchedulerEventType;
    const description = target.event.description as Constant.SchedulerEmployeeStatusType;

    if (!dateStatus.isPreviousDate) {
      const document = event.data.employee;
      const selectedTime = event.data.selectedTime;
      const clickEvent = target.originalEvent as Event;
      console.log(event);
      if (event.description === Constant.Scheduler.WorkingStatus.InBreak) {
        await this.onEditBreakTime(document, selectedTime);
      }
    }
  }

  private async onEditBreakTime(document: ShopScheduleDocumentType, selectedTime: StartEndType) {
    this._scheduleEditorSvc.start(document.shopId, document.id, this.scheduler.selectedOperatingHours());
    this._editBreakEditorSvc.start({ startDateTime: selectedTime.start, endDateTime: selectedTime.end });
    const popover = await this._popoverCtrl.create({
      component: ShopReservationScheduleEventEditBreakPopoverComponent,
      cssClass: 'add-break-time-container center-popover-container',
      event: event,
      translucent: false,
      size: 'cover',
      backdropDismiss: false,
    });
    await popover.present();

    const finalised = await popover.onWillDismiss();
    if (finalised) {
      this._editBreakEditorSvc.complete();
      this._scheduleEditorSvc.completed();
    }
  }

  private scrollTimelineModeCurrentTime() {
    const indicator = this.currentTimeIndicator;
    const scrollableScheduler = this.timelineScheduler;
    if (indicator && scrollableScheduler) {
      const scrollDifference = indicator.offsetLeft - scrollableScheduler.scrollLeft;
      scrollableScheduler.scrollBy({ left: scrollDifference });
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
