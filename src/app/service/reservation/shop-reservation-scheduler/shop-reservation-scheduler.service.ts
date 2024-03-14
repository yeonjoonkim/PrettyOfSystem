import { Injectable, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { ShopOperatingHoursService } from '../../shop/shop-employee-roster-management/shop-operating-hours/shop-operating-hours.service';
import { ShopDefaultSchedulerService } from './shop-default-scheduler/shop-default-scheduler.service';
import { DateService } from '../../global/date/date.service';
import { combineLatestWith, filter, of, switchMap, take } from 'rxjs';
import * as Constant from 'src/app/constant/constant';
import { DateType } from '../../global/date/date-transform/date-transform.service';
import { CurrentTimeSettings, DateChangeEvent } from '@progress/kendo-angular-scheduler';
import {
  DateStatusType,
  SchedulerViewModeType,
  ShopReservationScheduleResourceDataType,
  ShopReservationScheduleResourceType,
  ShopScheduleDocumentType,
} from 'src/app/interface';
import { ShopScheduleRepositoryService } from 'src/app/firebase/shop-repository/shop-schedule-repository/shop-schedule-repository.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { getTime } from 'date-fns';
import { ShopReservationEmployeeInfoService } from './shop-reservation-employee-info/shop-reservation-employee-info.service';

export const nullableString: string = null as unknown as string;
export const resourceName: string = 'EmployeeName';
@Injectable({
  providedIn: 'root',
})
export class ShopReservationSchedulerService {
  private _defaultScheduler = inject(ShopDefaultSchedulerService);
  private _operatingHours = inject(ShopOperatingHoursService);
  private _empSchedule = inject(ShopScheduleRepositoryService);
  private _empInfoSvc = inject(ShopReservationEmployeeInfoService);
  private _dateSvc = inject(DateService);
  public loaded = computed(() => {
    const defaultScheduler = this._defaultScheduler.loaded();
    const operatingHours = this._operatingHours.loaded();
    const startOfDay = this.startOfDay();
    return defaultScheduler && operatingHours && startOfDay !== null;
  });

  //Setting
  public operatingHours = this._operatingHours.data;
  public todayOperatingHours = this._operatingHours.todayOperatingHours;
  public selectedViewMode: SchedulerViewModeType = Constant.Scheduler.View.Day;
  public employeeView = signal<Constant.SchedulerEmployeeViewModeType>(Constant.Scheduler.EmployeeView.All);
  public minDate = this._defaultScheduler.minDate;
  public maxDate = this._defaultScheduler.maxDate;
  public timezone = this._defaultScheduler.timezone;
  public slotDivision = signal(2);
  public slotDuration = signal(60); // Min
  public weekStart = signal(Constant.Date.DayIndex.Sun);
  public showWorkHours = signal(true);
  public editable = signal(false);
  public currentTimeMarker: Signal<CurrentTimeSettings> = signal({
    enabled: true,
    localTimezone: false,
    updateInterval: 60000,
  });

  //View Mode
  public isDayViewMode = () => {
    return this.selectedViewMode === Constant.Scheduler.View.Day;
  };
  public isTimelineViewMode = () => {
    return this.selectedViewMode === Constant.Scheduler.View.Timeline;
  };

  public workDayStart = () => {
    const startOfDay = this.startOfDay();
    const dayType = this._dateSvc.getDay(startOfDay);
    const openTime = this._operatingHours.openTime(dayType);
    const [hours, minutes] = openTime.split(':');
    return `${hours}:${minutes}`;
  };

  public workDayEnd = () => {
    const startOfDay = this.startOfDay();
    const dayType = this._dateSvc.getDay(startOfDay);
    const closeTime = this._operatingHours.closeTime(dayType);
    const [hours, minutes] = closeTime.split(':');
    return `${hours}:${minutes}`;
  };

  public is24Hours = (date: DateType) => {
    const dayType = this._dateSvc.getDay(date);
    return this._operatingHours.is24Hours(dayType);
  };

  public isOpen = (date: DateType) => {
    const dayType = this._dateSvc.getDay(date);
    return this._operatingHours.isWorking(dayType);
  };

  //Date Picker
  public displayNextDays = computed(() => {
    const maxDate = this._defaultScheduler.maxDate();
    const startOfDay = this._dateSvc.addDay(new Date(), -1);
    const diff = this._dateSvc.differenceInDays(maxDate, startOfDay);
    return parseFloat(diff.toFixed(0));
  });
  public displayPreviousDay = computed(() => {
    const minDate = this._defaultScheduler.minDate();
    const startOfDay = this._dateSvc.addDay(new Date(), 0);
    const diff = this._dateSvc.differenceInDays(startOfDay, minDate);
    return parseFloat(diff.toFixed(0));
  });
  public disableDates = computed(() => {
    const operatingHours = this._operatingHours.data();
    const scheduler = this._defaultScheduler.data();
    if (operatingHours !== null && scheduler !== null) {
      const disableDates: string[] = [];
      const closeDays = operatingHours.closeDay;
      const minDate = this._dateSvc.startDay(scheduler.activatedDate);
      const minWeek = this._dateSvc.getWeek(minDate);
      const maxDate = this._dateSvc.startDay(scheduler.endDate);
      const maxWeek = this._dateSvc.getWeek(maxDate);
      for (let day of closeDays) {
        const min = minWeek[day];
        const max = maxWeek[day];
        const diff = this._dateSvc.differenceInWeeks(max, min) + 1;
        for (let i = 0; i < diff; i++) {
          const param = this._dateSvc.addWeek(min, i);
          disableDates.push(param);
        }
      }
      return disableDates;
    }
    return [];
  });
  //Date Param
  public startOfDay = signal(nullableString);
  public selectedDate = computed(() => {
    const startOfDay = this.startOfDay();
    const timezone = this._defaultScheduler.data()?.shopTimezone;
    return this.startOfDay()
      ? this._dateSvc.transform.toLocalDateTime(startOfDay)
      : this._dateSvc.transform.toLocalDateTime(this._dateSvc.startDay(this._dateSvc.shopNow(timezone)));
  });
  public isToday = computed(() => {
    const today = this._defaultScheduler.startOfDay();
    const startOfDay = this.selectedDate();
    return getTime(new Date(today)) === getTime(startOfDay);
  });
  public dateStatus = computed(() => {
    const startOfDay = this.startOfDay();
    const scheduler = this._defaultScheduler.data();
    return {
      isToday: startOfDay && scheduler ? scheduler.currentDate === startOfDay : false,
      isPreviousDate:
        startOfDay && scheduler ? getTime(new Date(scheduler.currentDate)) > getTime(new Date(startOfDay)) : false,
      isFutureDate:
        startOfDay && scheduler ? getTime(new Date(scheduler.currentDate)) < getTime(new Date(startOfDay)) : false,
    } as DateStatusType;
  });
  public selectedOperatingHours = computed(() => {
    const startOfDay = this.startOfDay();
    return this._operatingHours.getOperatingHours(startOfDay);
  });

  //Date Change button
  public allowPreviousDate = computed(() => {
    const scheduler = this._defaultScheduler.data();
    const startOfDay = this.startOfDay();
    return scheduler !== null ? scheduler.activatedDate < startOfDay : false;
  });
  public allowNextDate = computed(() => {
    const scheduler = this._defaultScheduler.data();
    const startOfDay = this.startOfDay();
    return scheduler !== null ? scheduler.endDate > startOfDay : false;
  });
  public allowToday = computed(() => {
    const loaded = this.loaded();
    const scheduler = this._defaultScheduler.data();
    if (!loaded && !scheduler) {
      return false;
    }
    return scheduler !== null ? scheduler.isOpenToday : false;
  });

  //Query
  public schedules: WritableSignal<ShopScheduleDocumentType[]> = signal([]);
  public defaultScheduler$ = this._defaultScheduler.defaultScheduler$;
  public startOfDay$ = toObservable(this.startOfDay);
  public query$ = this.defaultScheduler$.pipe(
    combineLatestWith(this.startOfDay$),
    filter(([scheduler, startOfDay]) => scheduler !== null && startOfDay !== null),
    switchMap(([scheduler, startOfDay]) => {
      if (scheduler !== null && startOfDay !== null) {
        return this.activeDisplayInSystemEmployeesByShop(scheduler.shopId, startOfDay);
      } else {
        return of([] as ShopScheduleDocumentType[]);
      }
    })
  );
  protected employees = computed(() => {
    const employeeView = this.employeeView();
    const query = this.schedules();
    return employeeView === Constant.Scheduler.EmployeeView.All
      ? query
      : employeeView === Constant.Scheduler.EmployeeView.Working
        ? query.filter(q => q.isWorking)
        : query.filter(q => !q.isWorking);
  });
  public events = computed(() => {
    const startOfDay = this.startOfDay();
    const employees = this.employees();
    const operatingHours = this.getSelectedOperatingHours();
    return employees.every(emp => emp.startOfDay === startOfDay)
      ? this._empInfoSvc.getEvents(employees, operatingHours)
      : [];
  });
  public resources = computed(() => {
    const resources: ShopReservationScheduleResourceType[] = [
      {
        name: resourceName,
        data: this.employees()
          .map(emp => {
            const data: ShopReservationScheduleResourceDataType = {
              id: emp.employeeId,
              firstName: emp.firstName,
              info: emp,
            };
            return data;
          })
          .sort((a, b) => a.info.firstName.localeCompare(b.info.firstName)),
        field: 'id',
        valueField: 'id',
        textField: 'firstName',
      },
    ];
    return resources;
  });

  constructor() {}

  public start() {
    this._defaultScheduler.defaultScheduler$
      .pipe(
        take(1),
        filter(scheduler => scheduler !== null)
      )
      .subscribe(scheduler => {
        const startOfDay =
          scheduler !== null ? scheduler.currentDate : this._dateSvc.startDay(this._dateSvc.shopNow(null));
        const availableDate = this.findNexAvailableDay(startOfDay);
        this.startOfDay.set(availableDate);
      });
  }

  private findNexAvailableDay(date: string) {
    const disabledDates = this.disableDates();
    const isInDisabledDates = (date: string) => disabledDates.includes(date);
    let currentDate = date;
    while (isInDisabledDates(currentDate)) {
      currentDate = this._dateSvc.addDay(currentDate, 1);
    }
    return currentDate;
  }

  public activeDisplayInSystemEmployeesByShop(shopId: string, startOfDay: string) {
    return this._empSchedule.activeDisplayInSystemEmployeesByShop(
      shopId,
      startOfDay,
      Constant.API.QueryMethod.Valuechange,
      Constant.Query.Equal
    );
  }

  public onChangeDate(event: DateChangeEvent) {
    const startOfDay = this._dateSvc.startDay(this._dateSvc.transform.formatLocalDateTime(event.selectedDate));
    this.startOfDay.set(startOfDay);
  }

  public nextDay() {
    let day = this.startOfDay();
    if (day !== null && this.allowNextDate()) {
      let found = false;
      while (!found) {
        day = this._dateSvc.addDay(day, 1);
        const disableDates = this.disableDates();
        const isDisable = disableDates.some(disable => disable === day);

        if (!isDisable) {
          this.startOfDay.set(day);
          found = true;
        }
      }
    }
  }

  public previousDay() {
    let day = this.startOfDay();
    if (day !== null && this.allowPreviousDate()) {
      let found = false;
      while (!found) {
        day = this._dateSvc.addDay(day, -1);
        const disableDates = this.disableDates();
        const isDisable = disableDates.some(disable => disable === day);

        if (!isDisable) {
          this.startOfDay.set(day);
          found = true;
        }
      }
    }
  }
  public getSelectedOperatingHours() {
    return this.selectedOperatingHours();
  }

  public setToday() {
    if (this.allowToday()) {
      const scheduler = this._defaultScheduler.data();
      this.startOfDay.set(
        scheduler !== null ? scheduler.currentDate : this._dateSvc.startDay(this._dateSvc.shopNow(null))
      );
    }
  }
}
