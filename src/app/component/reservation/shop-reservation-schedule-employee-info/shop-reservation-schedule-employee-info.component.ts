import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ShopScheduleDocumentType } from 'src/app/interface';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';
import {
  ShopReservationEmployeeInfoService,
  isWorking,
} from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-employee-info/shop-reservation-employee-info.service';
import { ShopReservationSchedulerService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-scheduler.service';
import * as Constant from 'src/app/constant/constant';

const nullableEmployee: ShopScheduleDocumentType = null as unknown as ShopScheduleDocumentType;
@Component({
  selector: 'shop-reservation-schedule-employee-info',
  templateUrl: './shop-reservation-schedule-employee-info.component.html',
  styleUrls: ['./shop-reservation-schedule-employee-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopReservationScheduleEmployeeInfoComponent implements OnInit, OnChanges {
  private _kendo = inject(KendoUiService);
  private _scheduler = inject(ShopReservationSchedulerService);
  private _empInfoSvc = inject(ShopReservationEmployeeInfoService);

  @Input() employeeInfo!: ShopScheduleDocumentType;
  @Input() currentDateTime!: string | null;

  //Setting
  protected timeStamp = signal<string | null>(null);
  protected info = signal<ShopScheduleDocumentType>(nullableEmployee);
  protected loaded = computed(() => this.info() !== null);
  protected isWorking = computed(() => (this.loaded() ? this.info().isWorking : false));
  protected status = computed(() => {
    const loaded = this.loaded();
    const dateStatus = this._scheduler.dateStatus();
    const todayOperatingHours = this._scheduler.todayOperatingHours();
    const timeStamp = this.timeStamp();
    const info = this.info();

    return loaded && timeStamp
      ? this._empInfoSvc.getStatus(dateStatus, info, todayOperatingHours, timeStamp)
      : Constant.Scheduler.WorkingStatus.DayOff;
  });
  protected statusTitle = computed(() => {
    const status = this.status();
    const dateStatus = this._scheduler.dateStatus();
    if (dateStatus.isPreviousDate) {
      return isWorking(status) ? 'label.title.working' : 'label.title.dayoff';
    }
    if (dateStatus.isFutureDate) {
      return `label.title.${status.toLowerCase()}`;
    }
    return `label.title.${status !== Constant.Scheduler.WorkingStatus.Working ? status.toLowerCase() : 'available'}`;
  });
  protected statusIcon = computed(() => {
    const status = this.status();
    switch (status) {
      case Constant.Scheduler.WorkingStatus.DayOff:
        return this._kendo.icon.xCircleIcon;
      case Constant.Scheduler.WorkingStatus.Available:
        return this._kendo.icon.checkCircleIcon;
      case Constant.Scheduler.WorkingStatus.Working:
        return this._kendo.icon.checkOutlineIcon;
      case Constant.Scheduler.WorkingStatus.InBreak:
        return this._kendo.icon.minusCircleIcon;
      case Constant.Scheduler.WorkingStatus.Consulting:
        return this._kendo.icon.kpiStatusOpenIcon;
      case Constant.Scheduler.WorkingStatus.OutOfOffice:
        return this._kendo.icon.halfClock;
    }
  });
  protected statusColor = computed(() => {
    const status = this.status();
    switch (status) {
      case Constant.Scheduler.WorkingStatus.DayOff:
        return 'error';
      case Constant.Scheduler.WorkingStatus.Available:
        return 'success';
      case Constant.Scheduler.WorkingStatus.Working:
        return 'success';
      case Constant.Scheduler.WorkingStatus.InBreak:
        return 'warning';
      case Constant.Scheduler.WorkingStatus.Consulting:
        return 'primary';
      case Constant.Scheduler.WorkingStatus.OutOfOffice:
        return 'error';
    }
  });

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    const infoChange: SimpleChange | undefined = changes['employeeInfo'];
    const currentDateChange: SimpleChange | undefined = changes['currentDateTime'];

    if (infoChange) {
      this.info.set(infoChange.currentValue as ShopScheduleDocumentType);
    }

    if (currentDateChange) {
      let currentDateTime = currentDateChange.currentValue;
      this.timeStamp.set(currentDateTime);
    }
  }
  ngOnInit() {}
}
