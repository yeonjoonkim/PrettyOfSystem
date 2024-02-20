import { Injectable, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { ShopOperatingHoursService } from '../../shop/shop-employee-roster-management/shop-operating-hours/shop-operating-hours.service';
import { ShopDefaultSchedulerService } from './shop-default-scheduler/shop-default-scheduler.service';
import { DateService } from '../../global/date/date.service';
import { combineLatest, filter, of, switchMap, take } from 'rxjs';
import * as Constant from 'src/app/constant/constant';
import { DateType } from '../../global/date/date-transform/date-transform.service';
import { CurrentTimeSettings, DateChangeEvent, Group, SchedulerEvent } from '@progress/kendo-angular-scheduler';
import {
  ShopReservationScheduleResourceDataType,
  ShopReservationScheduleResourceType,
  ShopScheduleDocumentType,
} from 'src/app/interface';
import { ShopScheduleRepositoryService } from 'src/app/firebase/shop-repository/shop-schedule-repository/shop-schedule-repository.service';
import { toObservable } from '@angular/core/rxjs-interop';

export const SchedulerViewMode = {
  Timeline: 'Timeline',
  Day: 'Day',
} as const;

export type ShopSchedulerViewModeType = (typeof SchedulerViewMode)[keyof typeof SchedulerViewMode];

const nullableString: string = null as unknown as string;
export const resourceName: string = 'EmployeeName';
@Injectable({
  providedIn: 'root',
})
export class ShopReservationSchedulerService {
  private _defaultScheduler = inject(ShopDefaultSchedulerService);
  private _operatingHours = inject(ShopOperatingHoursService);
  private _empSchedule = inject(ShopScheduleRepositoryService);
  private _dateSvc = inject(DateService);

  // Setting
  public selectedViewMode: ShopSchedulerViewModeType = SchedulerViewMode.Day;
  public timelineMode: ShopSchedulerViewModeType = SchedulerViewMode.Timeline;
  public dayMode: ShopSchedulerViewModeType = SchedulerViewMode.Day;
  public operatingHours = this._operatingHours.data;

  //Date Picker
  public displayNextDays = computed(() => {
    const loaded = this.loaded();
    if (!loaded) {
      return 0;
    }
    const maxDate = this._defaultScheduler.maxDate();
    const startOfDay = this._dateSvc.addDay(new Date(), -1);
    const diff = this._dateSvc.differenceInDays(maxDate, startOfDay);
    return parseFloat(diff.toFixed(0));
  });

  public displayPreviousDay = computed(() => {
    const loaded = this.loaded();
    if (!loaded) {
      return 0;
    }
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

  public isDayViewMode = () => {
    return this.selectedViewMode === SchedulerViewMode.Day;
  };

  public isTimelineViewMode = () => {
    return this.selectedViewMode === SchedulerViewMode.Timeline;
  };

  public currentTimeMarker: Signal<CurrentTimeSettings> = signal({
    enabled: true,
    localTimezone: false,
    updateInterval: 60000,
  });
  public editable = signal(false);

  public loaded = computed(() => {
    const defaultScheduler = this._defaultScheduler.loaded();
    const operatingHours = this._operatingHours.loaded();
    const startOfDay = this.startOfDay();

    return defaultScheduler && operatingHours && startOfDay !== null;
  });

  public minDate = this._defaultScheduler.minDate;
  public maxDate = this._defaultScheduler.maxDate;
  public timezone = this._defaultScheduler.timezone;
  public slotDivision = signal(1);
  public slotDuration = signal(30); // Min
  public weekStart = signal(Constant.Date.DayIndex.Sun);
  public onlyWorkingEmployees = signal(false);
  public showWorkHours = signal(true);

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
    console.log(closeTime);

    return `${hours}:${minutes}`;
  };

  public is24Hours = (date: DateType) => {
    const dayType = this._dateSvc.getDay(date);
    return this._operatingHours.is24Hours(dayType);
  };

  public isWorking = (date: DateType) => {
    const dayType = this._dateSvc.getDay(date);
    return this._operatingHours.isWorking(dayType);
  };

  public selectedDate = computed(() => {
    const startOfDay = this.startOfDay();
    const timezone = this._defaultScheduler.data()?.shopTimezone;
    return this.startOfDay()
      ? this._dateSvc.transform.toLocalDateTime(startOfDay)
      : this._dateSvc.transform.toLocalDateTime(this._dateSvc.startDay(this._dateSvc.shopNow(timezone)));
  });

  //Date Param
  public startOfDay = signal(nullableString);

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
  public query$ = combineLatest(this.defaultScheduler$, this.startOfDay$).pipe(
    filter(([scheduler, startOfDay]) => scheduler !== null && startOfDay !== null),
    switchMap(([scheduler, startOfDay]) => {
      if (scheduler !== null && startOfDay !== null) {
        return this.activeDisplayInSystemEmployeesByShop(scheduler.shopId, startOfDay);
      } else {
        return of([] as ShopScheduleDocumentType[]);
      }
    })
  );

  public events: Signal<SchedulerEvent[]> = computed(() => {
    const query = this.schedules();
    console.log(query);

    const breakTimeEvents: SchedulerEvent[] = query
      .filter(q => q.breakTimes && q.breakTimes.length > 0)
      .map(q =>
        q.breakTimes.map(bt => ({
          id: q.employeeId,
          start: this._dateSvc.transform.toLocalDateTime(bt.startDateTime),
          startTimezone: q.shopTimezone,
          end: this._dateSvc.transform.toLocalDateTime(bt.endDateTime),
          endTimezone: q.shopTimezone,
          title: 'Break Time',
          description: 'BreakTime',
          dataItem: null,
          isAllDay: false,
        }))
      )
      .reduce((acc, val) => acc.concat(val), []);
    //TODO breaktimes
    return breakTimeEvents;
  });

  public resources = computed(() => {
    const query = this.schedules();
    const onlyWorkingEmployees = this.onlyWorkingEmployees();
    const resources: ShopReservationScheduleResourceType[] = [
      {
        name: resourceName,
        data: query
          .filter(q => (onlyWorkingEmployees ? q.isWorking : true))
          .map(r => {
            const resource: ShopReservationScheduleResourceDataType = {
              employeeId: r.employeeId,
              firstName: r.firstName,
              lastName: r.lastName,
              gender: r.gender,
              isWorking: r.isWorking,
              workHours: r.workHours,
            };
            return resource;
          })
          .sort((a, b) => a.firstName.localeCompare(b.firstName)),
        field: 'employeeId',
        valueField: 'id',
        textField: 'firstName',
        colorField: 'workingStatusColor',
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

  public today() {
    if (this.allowToday()) {
      const scheduler = this._defaultScheduler.data();
      this.startOfDay.set(
        scheduler !== null ? scheduler.currentDate : this._dateSvc.startDay(this._dateSvc.shopNow(null))
      );
    }
  }
}
