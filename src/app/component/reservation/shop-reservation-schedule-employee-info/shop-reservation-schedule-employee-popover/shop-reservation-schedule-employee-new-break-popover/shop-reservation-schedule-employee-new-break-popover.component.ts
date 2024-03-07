import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { getTime } from 'date-fns';
import { BehaviorSubject, Subject, combineLatestWith, filter, map, switchMap, takeUntil } from 'rxjs';
import { ShopEmployeeBreakTimeType, TimeItemType } from 'src/app/interface';
import {
  DateTimeValidatorService,
  StartEndType,
} from 'src/app/service/global/date-time-validator/date-time-validator.service';
import { DateService } from 'src/app/service/global/date/date.service';

const nullableTimeItem = null as unknown as TimeItemType;
@Component({
  selector: 'shop-reservation-schedule-employee-new-break-popover',
  templateUrl: './shop-reservation-schedule-employee-new-break-popover.component.html',
  styleUrls: ['./shop-reservation-schedule-employee-new-break-popover.component.scss'],
})
export class ShopReservationScheduleEmployeeNewBreakPopoverComponent implements OnInit, OnDestroy {
  private _startTimeItem = new BehaviorSubject<TimeItemType>(nullableTimeItem);
  private _endTimeItem = new BehaviorSubject<TimeItemType>(nullableTimeItem);
  private _save$ = new Subject<void>();
  private _destroy$ = new Subject<void>();
  private _popoverCtrl = inject(PopoverController);
  private _navParam = inject(NavParams);
  private _timeValidator = inject(DateTimeValidatorService);
  private _dateSvc = inject(DateService);
  private _startOfDay = this._navParam.get('startOfDay') as string;
  private _events = this._navParam.get('existingEvents') as StartEndType[];

  public employeeStartTimeItem!: TimeItemType;
  public employeeEndTimeItem!: TimeItemType;
  get startTimeItem() {
    return this._startTimeItem.getValue();
  }

  set startTimeItem(time: TimeItemType) {
    this._startTimeItem.next(time);
  }

  get endTimeItem() {
    return this._endTimeItem.getValue();
  }

  set endTimeItem(time: TimeItemType) {
    this._endTimeItem.next(time);
  }

  protected startTimeItem$ = this._startTimeItem.asObservable();
  protected endTimeItem$ = this._endTimeItem.asObservable();
  protected loaded$ = this.startTimeItem$.pipe(
    combineLatestWith(this.endTimeItem$),
    map((start, end) => start !== null && end !== null)
  );
  protected conflictedWithStartEndTime$ = this.startTimeItem$.pipe(
    combineLatestWith(this.endTimeItem$),
    filter(([start, end]) => start !== null && end !== null),
    map(([start, end]) => {
      const startDateTime = this._dateSvc.transform.formatByTimeItem(this._startOfDay, start);
      const endDateTime = this._dateSvc.transform.formatByTimeItem(this._startOfDay, end);

      return getTime(new Date(startDateTime)) > getTime(new Date(endDateTime));
    })
  );
  protected conflictWithEvents$ = this.startTimeItem$.pipe(
    combineLatestWith(this.endTimeItem$),
    filter(([start, end]) => start !== null && end !== null),
    map(([start, end]) => {
      const startDateTime = this._dateSvc.transform.formatByTimeItem(this._startOfDay, start);
      const endDateTime = this._dateSvc.transform.formatByTimeItem(this._startOfDay, end);
      const result =
        this._events.length > 0
          ? this._events.some(event => {
              return this._timeValidator.isTimeOverlap(event, { start: startDateTime, end: endDateTime });
            })
          : false;
      return result;
    })
  );

  protected conflictWithStartTime$ = this.startTimeItem$.pipe(
    filter(start => start !== null),
    map(start => {
      const startDateTime = this._dateSvc.transform.formatByTimeItem(this._startOfDay, start);
      const employeeStartDateTime = this._dateSvc.transform.formatByTimeItem(
        this._startOfDay,
        this.employeeStartTimeItem
      );
      const employeeEndDateTime = this._dateSvc.transform.formatByTimeItem(
        this._startOfDay,
        this.employeeEndTimeItem
      );

      return !(
        getTime(new Date(startDateTime)) >= getTime(new Date(employeeStartDateTime)) &&
        getTime(new Date(startDateTime)) < getTime(new Date(employeeEndDateTime))
      );
    })
  );

  protected conflictWithEndTime$ = this.endTimeItem$.pipe(
    filter(end => end !== null),
    map(end => {
      const endDateTime = this._dateSvc.transform.formatByTimeItem(this._startOfDay, end);
      const employeeStartDateTime = this._dateSvc.transform.formatByTimeItem(
        this._startOfDay,
        this.employeeStartTimeItem
      );
      const employeeEndDateTime = this._dateSvc.transform.formatByTimeItem(
        this._startOfDay,
        this.employeeEndTimeItem
      );
      return !(
        getTime(new Date(endDateTime)) > getTime(new Date(employeeStartDateTime)) &&
        getTime(new Date(endDateTime)) <= getTime(new Date(employeeEndDateTime))
      );
    })
  );

  constructor() {
    this.employeeStartTimeItem = this._navParam.get('employeeStartTimeItem') as TimeItemType;
    this.employeeEndTimeItem = this._navParam.get('employeeEndTimeItem') as TimeItemType;
    this._startTimeItem.next(this.employeeStartTimeItem);
    this._endTimeItem.next(this.employeeStartTimeItem);
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  async ngOnInit() {
    this._save$.pipe(takeUntil(this._destroy$)).subscribe(async () => {
      const newBreakTime: ShopEmployeeBreakTimeType = {
        startDateTime: this._dateSvc.transform.formatByTimeItem(this._startOfDay, this.startTimeItem),
        endDateTime: this._dateSvc.transform.formatByTimeItem(this._startOfDay, this.endTimeItem),
      };
      await this._popoverCtrl.dismiss(newBreakTime);
    });
  }

  onChangeStart(time: TimeItemType) {
    this._startTimeItem.next(time);
  }

  onChangeEnd(time: TimeItemType) {
    this._endTimeItem.next(time);
  }

  async onDismiss() {
    await this._popoverCtrl.dismiss();
  }

  public async onSave() {
    this._save$.next();
  }
}
