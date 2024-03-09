import { Injectable, computed, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { getTime } from 'date-fns';
import { combineLatestWith, delay, exhaustMap, filter, map, of, switchMap } from 'rxjs';
import { ShopScheduleDocument } from 'src/app/class/global';
import { ShopScheduleRepositoryService } from 'src/app/firebase/shop-repository/shop-schedule-repository/shop-schedule-repository.service';
import { SchedulerOperatingHoursType, ShopEmployeeBreakTimeType, TimeItemType } from 'src/app/interface';
import { DateTimeValidatorService } from 'src/app/service/global/date-time-validator/date-time-validator.service';
import { DateService } from 'src/app/service/global/date/date.service';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';

const nullableSchedule = null as unknown as ShopScheduleDocument;
const nullableString = null as unknown as string;
const nullableOperatingHours = null as unknown as SchedulerOperatingHoursType;
const nullableTimeItem = null as unknown as TimeItemType;
@Injectable({
  providedIn: 'root',
})
export class ShopReservationScheduleEditorService {
  public formCtrl = inject(FormControllerService);
  private _scheduleRepo = inject(ShopScheduleRepositoryService);
  private _dateSvc = inject(DateService);
  private _dateTimeValidator = inject(DateTimeValidatorService);

  //Param
  private _shopId = signal<string>(nullableString);
  private _documentId = signal<string>(nullableString);
  private _shopOperatingHours = signal<SchedulerOperatingHoursType>(nullableOperatingHours);
  private _paramLoaded = computed(
    () => this._documentId() !== null && this._documentId() !== null && this._shopOperatingHours() !== null
  );

  //Query
  private _paramLoaded$ = toObservable(this._paramLoaded);
  private _shopId$ = toObservable(this._shopId);
  private _documentId$ = toObservable(this._documentId);
  public query = signal<ShopScheduleDocument>(nullableSchedule);
  public _query$ = this._paramLoaded$.pipe(
    combineLatestWith(this._shopId$, this._documentId$),
    filter(([load, shopId, Id]) => typeof load === 'boolean' && load && Boolean(shopId) && Boolean(Id)),
    exhaustMap(([_, shopId, Id]) => this._scheduleRepo.valueChangeDocumentListener(shopId, Id)),
    map(doc => (doc !== null ? new ShopScheduleDocument(doc) : null))
  );
  public load = computed(
    () =>
      this._paramLoaded() &&
      this.query() !== null &&
      this.startTimeItem() !== null &&
      this.endTimeItem() !== null &&
      this.shopEndDateTime() !== null &&
      this.shopStartDateTime() !== null
  );

  //Associated With Shop
  public isShopOpen = computed(() => this._shopOperatingHours()?.isOpen);
  public isShop24Hours = computed(() => this._shopOperatingHours()?.is24Hours);
  public shopStartDateTime = computed(() => this._shopOperatingHours()?.startDateTime);
  public shopEndDateTime = computed(() => this._shopOperatingHours()?.endDateTime);
  public shopStartTimeItem = computed(() => {
    const shopOperatingHours = this._shopOperatingHours();
    return shopOperatingHours !== null
      ? this._dateSvc.timeItem(new Date(shopOperatingHours.startDateTime))
      : nullableTimeItem;
  });
  public shopEndTimeItem = computed(() => {
    const shopOperatingHours = this._shopOperatingHours();
    return shopOperatingHours !== null
      ? this._dateSvc.timeItem(new Date(shopOperatingHours.endDateTime))
      : nullableTimeItem;
  });

  // Header
  public title = computed(() => {
    const doc = this.query();
    return doc !== null ? `${doc.firstName} ${doc.lastName}` : '';
  });
  public workHours = computed(() => {
    const doc = this.query();
    return doc !== null ? doc.workHours : 0;
  });
  public breakHours = computed(() => {
    const doc = this.query();
    return doc !== null ? doc.breakHours : 0;
  });

  //Params
  public isWorking = computed(() => {
    const doc = this.query();
    return doc !== null ? doc.isWorking : false;
  });
  public hasConsults = computed(() => {
    const doc = this.query();
    return doc !== null ? doc.scheduledConsults.length > 0 : false;
  });
  public startOfDay = computed(() => this.query().startOfDay);
  public startOfDayType = computed(() => this._dateSvc.getDay(this.startOfDay()));
  public startDateTime = computed(() => this.query().startDateTime);
  public endDateTime = computed(() => this.query().endDateTime);

  public startTimeItem = computed(() => {
    const startDateTime = this.startDateTime();
    return typeof startDateTime === 'string' ? this._dateSvc.timeItem(new Date(startDateTime)) : nullableTimeItem;
  });

  public endTimeItem = computed(() => {
    const endDateTime = this.endDateTime();
    return typeof endDateTime === 'string' ? this._dateSvc.timeItem(new Date(endDateTime)) : nullableTimeItem;
  });

  public breakTimes = computed(() => {
    const doc = this.query();
    return doc !== null ? doc.breakTimes : [];
  });
  public consults = computed(() => {
    const doc = this.query();
    return doc !== null ? doc.scheduledConsults : [];
  });

  public breakTimeValidatorList = computed(() => {
    const query = this.query();
    const consults = this.consults();
    const breakTimes = this.breakTimes();
    const employeeStartTime = query.startDateTime;
    const employeeEndDateTime = query.endDateTime;
    return breakTimes.map(bt => {
      return {
        data: bt,
        conflictWithStartTime: !this._dateTimeValidator.withinStartEndRange(
          bt.startDateTime,
          employeeStartTime,
          employeeEndDateTime
        ),
        conflictWithEndTime: !this._dateTimeValidator.withinStartEndRange(
          bt.endDateTime,
          employeeStartTime,
          employeeEndDateTime
        ),
        conflictedWithConsults: consults.some(c =>
          this._dateTimeValidator.isTimeOverlap(
            { start: bt.startDateTime, end: bt.endDateTime },
            { start: c.startDateTime, end: c.endDateTime }
          )
        ),
        crashReport: breakTimes
          .filter(crash => crash.startDateTime !== bt.startDateTime && crash.endDateTime !== bt.endDateTime)
          .some(crash =>
            this._dateTimeValidator.isTimeOverlap(
              { start: bt.startDateTime, end: bt.endDateTime },
              { start: crash.startDateTime, end: crash.endDateTime }
            )
          ),
      };
    });
  });
  public consultTimeValidatorList = computed(() => {
    const query = this.query();
    const consults = this.consults();
    const breakTimes = this.breakTimes();
    const employeeStartTime = query.startDateTime;
    const employeeEndDateTime = query.endDateTime;
    return consults.map(c => {
      return {
        data: c,
        conflictWithStartTime: this._dateTimeValidator.isTimeWithinRange(
          employeeStartTime,
          c.startDateTime,
          c.endDateTime
        ),
        conflictWithEndTime: this._dateTimeValidator.isTimeWithinRange(
          employeeEndDateTime,
          c.startDateTime,
          c.endDateTime
        ),
        conflictedWithBreak: breakTimes.some(bt =>
          this._dateTimeValidator.isTimeOverlap(
            { start: bt.startDateTime, end: bt.endDateTime },
            { start: c.startDateTime, end: c.endDateTime }
          )
        ),
        crashReport: breakTimes
          .filter(crash => crash.startDateTime !== c.startDateTime && crash.endDateTime !== c.endDateTime)
          .some(crash =>
            this._dateTimeValidator.isTimeOverlap(
              { start: c.startDateTime, end: c.endDateTime },
              { start: crash.startDateTime, end: crash.endDateTime }
            )
          ),
      };
    });
  });

  public conflictBetweenStartEndOperatingHours = computed(() => {
    const onChange = this.query();
    if (onChange !== null) {
      const query = this.query();
      const shopStartTime = getTime(new Date(this.shopStartDateTime()));
      const shopEndTime = getTime(new Date(this.shopEndDateTime()));
      const employeeStartTime = getTime(new Date(query.startDateTime));
      const employeeEndTime = getTime(new Date(query.endDateTime));
      const conflictStart = !(employeeStartTime >= shopStartTime && employeeStartTime < shopEndTime);
      const conflictEnd = !(employeeEndTime > employeeStartTime && employeeEndTime <= shopEndTime);
      return conflictStart || conflictEnd;
    } else {
      return false;
    }
  });
  public conflictBreakTime = computed(() => {
    const onChange = this.query();
    if (onChange !== null) {
      const breakTimeValidatorList = this.breakTimeValidatorList();
      return breakTimeValidatorList.length > 0
        ? breakTimeValidatorList.some(
            b => b.conflictWithEndTime || b.conflictWithStartTime || b.conflictedWithConsults || b.crashReport
          )
        : false;
    }
    return false;
  });
  public conflictConsult = computed(() => {
    const onChange = this.query();
    if (onChange !== null) {
      const breakTimeValidatorList = this.consultTimeValidatorList();
      return breakTimeValidatorList.length > 0
        ? breakTimeValidatorList.some(
            b => b.conflictWithEndTime || b.conflictWithStartTime || b.conflictedWithBreak || b.crashReport
          )
        : false;
    }
    return false;
  });

  public invalidWorkTimes = computed(() => {
    const onChange = this.query();
    if (onChange !== null) {
      const workHours = onChange.workHours;
      const breakHours = onChange.breakHours;
      const shop24Hours = this.isShop24Hours();
      if (shop24Hours) {
        return !(workHours > 0 && workHours > breakHours);
      } else {
        return !(workHours > 0 && workHours < 24 && workHours > breakHours);
      }
    } else {
      return true;
    }
  });

  public allowWorkStatusChange = computed(() => {
    const onChange = this.query();
    if (onChange !== null) {
      return !(onChange.scheduledConsults.length > 0 && onChange.isWorking);
    }
    return false;
  });

  public allowEdit = computed(() => {
    const onChange = this.query();
    const isWorking = this.isWorking();
    if (onChange !== null && isWorking) {
      const conflictBetweenStartEndOperatingHours = this.conflictBetweenStartEndOperatingHours();
      const conflictBreakTime = this.conflictBreakTime();
      const conflictConsult = this.conflictConsult();
      const invalidWorkTimes = this.invalidWorkTimes();
      return !conflictBetweenStartEndOperatingHours && !conflictBreakTime && !conflictConsult && !invalidWorkTimes;
    }

    if (onChange !== null && !isWorking) {
      const hasConsults = this.hasConsults();
      return !hasConsults;
    }

    return false;
  });

  constructor() {}

  public start(shopId: string, documentId: string, shopOperatingHours: SchedulerOperatingHoursType) {
    this._shopOperatingHours.set(shopOperatingHours);
    this._shopId.set(shopId);
    this._documentId.set(documentId);
  }

  public completed() {
    this._documentId.set(nullableString);
    this._shopId.set(nullableString);
    this._shopOperatingHours.set(nullableOperatingHours);
    this.query.set(nullableSchedule);
  }

  public onChangeWorking(isWorking: boolean) {
    const doc = this.query();
    const shopStartTime = this.shopStartTimeItem();
    const shopEndTime = this.shopEndTimeItem();
    doc.startDateTime = this._dateSvc.transform.formatByTimeItem(doc.startOfDay, shopStartTime);
    doc.endDateTime = this._dateSvc.transform.formatByTimeItem(doc.startOfDay, shopEndTime);
    doc.breakTimes = [];
    if (isWorking && this.allowWorkStatusChange()) {
      doc.isWorking = false;
      this.query.set(doc);
    }
    if (!isWorking) {
      doc.isWorking = true;
      this.query.set(doc);
    }
  }

  public onDeleteBreakTime(breakTime: ShopEmployeeBreakTimeType) {
    const doc = this.query();
    doc.deleteBreak(breakTime);
    this.query.set(doc);
  }

  public onChangeStartTime(time: TimeItemType) {
    const startOfDay = this.startOfDay();
    const doc = this.query();
    doc.startDateTime = this._dateSvc.transform.formatByTimeItem(startOfDay, time);
    this.query.set(doc);
  }

  public onChangeEndTime(time: TimeItemType) {
    const startOfDay = this.startOfDay();
    const doc = this.query();
    doc.endDateTime = this._dateSvc.transform.formatByTimeItem(startOfDay, time);
    this.query.set(doc);
  }
}
