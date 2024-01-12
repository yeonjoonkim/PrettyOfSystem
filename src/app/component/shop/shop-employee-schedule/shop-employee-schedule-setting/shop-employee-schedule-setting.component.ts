import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { BehaviorSubject, Observable, Subject, combineLatest, filter, of, switchMap, takeUntil } from 'rxjs';
import {
  ConsultDocumentType,
  IFormHeaderModalProp,
  ShopEmployeeScheduleChangeResult,
  ShopEmployeeScheduleSettingProp,
  ShopOperatingBreakType,
  ShopOperatingDailyType,
  TimeItemType,
} from 'src/app/interface';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { DateService } from 'src/app/service/global/date/date.service';
import { ShopConsultManagementService } from 'src/app/service/shop/shop-consult-management/shop-consult-management.service';

type ShopEmployeeScheduleBreakTimeEditType = {
  index: number;
  breakTime: ShopOperatingBreakType;
};
type EmployeeConsultValidatorType = {
  hasOverlapBreak: boolean;
  hasOutSideBooking: boolean;
  cannotDayOff: boolean;
};
type EmployeeConsultScheduledValidatorType = {
  hasOverlapBreak: boolean;
  hasOutSideBooking: boolean;
};
type ShopConsultScheduledDocumentType = {
  consult: ConsultDocumentType;
  validator: EmployeeConsultScheduledValidatorType;
};
@Component({
  selector: 'shop-employee-schedule-setting',
  templateUrl: './shop-employee-schedule-setting.component.html',
  styleUrls: ['./shop-employee-schedule-setting.component.scss'],
})
export class ShopEmployeeScheduleSettingComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _applyAllWeek = new BehaviorSubject<boolean>(false);
  private _dateQueryProp = new BehaviorSubject<string[]>([]);
  private _prop = new BehaviorSubject<ShopEmployeeScheduleSettingProp>(
    this._navParams.get('prop') as ShopEmployeeScheduleSettingProp
  );
  private _roster = new BehaviorSubject<ShopOperatingDailyType>(
    this._navParams.get('prop').roster as ShopOperatingDailyType
  );

  // Validator
  private _shiftValidator = new BehaviorSubject<boolean>(false);
  private _consultValidator = new BehaviorSubject<EmployeeConsultValidatorType>({
    hasOutSideBooking: false,
    hasOverlapBreak: false,
    cannotDayOff: false,
  });

  public form!: IFormHeaderModalProp;
  public changed: boolean = false;
  public tempBreakTime!: ShopOperatingBreakType | undefined;
  public editBreakTime!: ShopEmployeeScheduleBreakTimeEditType | undefined;

  set applyAllWeek(value: boolean) {
    this._applyAllWeek.next(value);
  }

  get applyAllWeek() {
    return this._applyAllWeek.getValue();
  }

  set dateQueryProp(value: string[]) {
    this._dateQueryProp.next(value);
  }

  get dateQueryProp() {
    return this._dateQueryProp.getValue();
  }

  set prop(value: ShopEmployeeScheduleSettingProp) {
    this._prop.next(value);
  }
  get prop() {
    return this._prop.getValue();
  }

  set roster(value: ShopOperatingDailyType) {
    this._roster.next(value);
  }

  get roster() {
    return this._roster.getValue();
  }

  get startTime() {
    return this._roster.getValue().operatingHours.openTime;
  }

  set startTime(value: TimeItemType) {
    const roster = this.roster;
    roster.operatingHours.openTime = value;
    this.roster = roster;
  }

  get endTime() {
    return this._roster.getValue().operatingHours.closeTime;
  }

  set endTime(value: TimeItemType) {
    const roster = this.roster;
    roster.operatingHours.closeTime = value;
    this.roster = roster;
  }

  get shiftValidator() {
    return this._shiftValidator.getValue();
  }

  set shiftValidator(value: boolean) {
    this._shiftValidator.next(value);
  }

  get consultValidator() {
    return this._consultValidator.getValue();
  }

  set consultValidator(value: EmployeeConsultValidatorType) {
    this._consultValidator.next(value);
  }

  public shiftValidator$: Observable<boolean> = this._shiftValidator.asObservable();
  public consultValidator$: Observable<EmployeeConsultValidatorType> = this._consultValidator.asObservable();
  private _applyAllWeek$: Observable<boolean> = this._applyAllWeek.asObservable();
  private _dateQueryProp$: Observable<string[]> = this._dateQueryProp.asObservable();
  private _roster$: Observable<ShopOperatingDailyType> = this._roster.asObservable();
  private _associatedConsult$: Observable<ConsultDocumentType[]> = this._dateQueryProp$.pipe(
    filter(prop => prop.length > 0),
    switchMap(prop => {
      if (prop) {
        return this._consultManagementSvc.getEmployeeScheduledWithinDays(this.prop.employeeId, prop);
      } else {
        return of([]);
      }
    })
  );
  private _validator: Observable<boolean> = combineLatest([this.shiftValidator$, this.consultValidator$]).pipe(
    switchMap(([shift, consult]) => {
      if (shift && !consult.hasOutSideBooking && !consult.hasOverlapBreak && !consult.cannotDayOff) {
        return of(true);
      } else {
        return of(false);
      }
    })
  );

  public consultValidators$: Observable<ShopConsultScheduledDocumentType[]> = combineLatest([
    this._roster$,
    this._associatedConsult$,
  ]).pipe(
    switchMap(([roster, consults]) => {
      if (consults.length > 0) {
        const result = consults
          .filter(c => c.scheduled !== null)
          .map(consult => {
            const breakTimes = roster.breakTimes.map(bt => {
              const time = {
                startTime: this._dateSvc.transform.getTimeByTimeItem(bt.start),
                endTime: this._dateSvc.transform.getTimeByTimeItem(bt.end),
              };
              return time;
            });
            const shiftStartTime = this._dateSvc.transform.getTimeByTimeItem(roster.operatingHours.openTime);
            const shiftEndTime = this._dateSvc.transform.getTimeByTimeItem(roster.operatingHours.closeTime);
            const is24Hours = this._dateSvc.is24HoursByTimeItem(
              roster.operatingHours.openTime,
              roster.operatingHours.closeTime
            );
            const consultStartTime =
              consult.scheduled !== null
                ? this._dateSvc.transform.getTimeByDateType(consult.scheduled.startDateTime)
                : '';
            const consultEndTime =
              consult.scheduled !== null
                ? this._dateSvc.transform.getTimeByDateType(consult.scheduled.endDateTime)
                : '';

            return {
              consult: consult,
              validator: {
                hasOutSideBooking: is24Hours
                  ? false
                  : !(consultStartTime >= shiftStartTime && consultEndTime <= shiftEndTime)
                  ? true
                  : false,
                hasOverlapBreak:
                  breakTimes.length > 0
                    ? breakTimes.some(bt => {
                        return consultStartTime < bt.endTime && consultEndTime > bt.startTime;
                      })
                    : false,
              },
            };
          });
        return of(result);
      } else {
        return of([]);
      }
    })
  );

  constructor(
    private _navParams: NavParams,
    private _modalCtrl: ModalController,
    private _empSvc: EmployeeService,
    private _dateSvc: DateService,
    private _consultManagementSvc: ShopConsultManagementService
  ) {
    this.form = this._navParams.get('form') as IFormHeaderModalProp;
  }

  ngOnInit() {
    //Setting the DateQuery
    this._applyAllWeek$.pipe(takeUntil(this._destroy$)).subscribe(applyAllWeek => {
      const dateQuery = applyAllWeek ? this.prop.daysInFourWeeks : [this.prop.date];
      this._dateQueryProp.next(dateQuery);
    });

    //Setting the form Enable Save
    this._validator.pipe(takeUntil(this._destroy$)).subscribe(validator => {
      this.form.enabledSavebutton = validator;
    });

    //Update Consult Validator
    this.consultValidators$.pipe(takeUntil(this._destroy$)).subscribe(consults => {
      const result: EmployeeConsultValidatorType = {
        hasOverlapBreak: consults.filter(consult => consult.validator.hasOverlapBreak).length > 0,
        hasOutSideBooking: consults.filter(consult => consult.validator.hasOutSideBooking).length > 0,
        cannotDayOff: !this.roster.isOpen && consults.length > 0,
      };
      this.consultValidator = result;
    });
  }

  public handleEdit() {
    this.form.readOnly = false;
  }

  public onChangeDayOff() {
    this.roster = this._empSvc.scheduler.changeWorkStatus(this.roster, this.prop.operating);
    this.handleShfitValidator();
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  public async handleSave() {
    const result: ShopEmployeeScheduleChangeResult = { roster: this.roster, applyAllWeek: this.applyAllWeek };
    await this._modalCtrl.dismiss(result);
  }

  public disableAddBreak() {
    const isOverlap = this.tempBreakTime
      ? this._empSvc.scheduler.breakTime.isOverlap(this.roster, this.tempBreakTime)
      : true;
    const isExceedTime = this.tempBreakTime
      ? this._empSvc.scheduler.breakTime.isExceedTime(this.tempBreakTime)
      : true;
    this.handleShfitValidator();
    return isOverlap || isExceedTime;
  }

  public handleShfitValidator() {
    this.roster.workHours = this._empSvc.scheduler.updateWorkHours(this.roster);
    this.shiftValidator = this._empSvc.scheduler.shiftValidator(this.roster);
    this.changed = true;
  }

  public onDeleteBreak(breakTime: ShopOperatingBreakType) {
    this.roster = this._empSvc.scheduler.deleteBreak(this.roster, breakTime);
    this.handleShfitValidator();
  }

  public onEditBreak(breakTime: ShopOperatingBreakType, index: number) {
    this.editBreakTime = { breakTime: breakTime, index: index };
  }

  public breakHours() {
    return this._empSvc.scheduler.breakTime.sum(this.roster);
  }

  public addBreak() {
    this.tempBreakTime = this._empSvc.scheduler.breakTime.getDefault(this.roster);
  }

  public async updateBreak() {
    const updated = this.tempBreakTime
      ? await this._empSvc.scheduler.updateBreak(
          this.roster,
          this.tempBreakTime,
          this.prop.date,
          this.prop.employeeId
        )
      : null;
    if (updated !== null) {
      this.roster = updated;
      this.tempBreakTime = undefined;
    }
    this.handleShfitValidator();
  }

  public async deleteBreak(breakTime: ShopOperatingBreakType) {
    this.roster = this._empSvc.scheduler.deleteBreak(this.roster, breakTime);
    this.handleShfitValidator();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
