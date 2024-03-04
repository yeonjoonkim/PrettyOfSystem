import { Component, OnInit, computed, inject } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import {
  DateStatusType,
  SchedulerEmployeeStatusType,
  SchedulerOperatingHoursType,
  ShopScheduleDocumentType,
} from 'src/app/interface';
import { ShopScheduleRepositoryService } from 'src/app/firebase/shop-repository/shop-schedule-repository/shop-schedule-repository.service';
import * as Constant from 'src/app/constant/constant';
import { DateService } from 'src/app/service/global/date/date.service';
import { ShopReservationEmployeeInfoService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-employee-info/shop-reservation-employee-info.service';
import { GlobalService } from 'src/app/service/global/global.service';
@Component({
  selector: 'shop-reservation-schedule-employee-popover',
  templateUrl: './shop-reservation-schedule-employee-popover.component.html',
  styleUrls: ['./shop-reservation-schedule-employee-popover.component.scss'],
})
export class ShopReservationScheduleEmployeePopoverComponent implements OnInit {
  private _navParam = inject(NavParams);
  private _popoverCtrl = inject(PopoverController);
  private _schedulerRepo = inject(ShopScheduleRepositoryService);
  private _dateSvc = inject(DateService);
  private _employeeInfoSvc = inject(ShopReservationEmployeeInfoService);
  private _global = inject(GlobalService);

  protected prop = computed(() => {
    return {
      info: this._navParam.get('info') as ShopScheduleDocumentType,
      startOfDay: this._navParam.get('startOfDay') as string,
      dateStatus: this._navParam.get('dateStatus') as DateStatusType,
      employeeStatus: this._navParam.get('employeeStatus') as SchedulerEmployeeStatusType,
      isShopOpen: this._navParam.get('isShopOpen') as boolean,
      isWorking: this._navParam.get('isWorking') as boolean,
      operatingHours: this._navParam.get('operatingHours') as SchedulerOperatingHoursType,
    };
  });

  protected displayDayOff = computed(() => {
    const prop = this.prop();
    return prop.isShopOpen && prop.isWorking && !prop.dateStatus.isPreviousDate;
  });
  protected displayWorking = computed(() => {
    const prop = this.prop();
    return prop.isShopOpen && !prop.isWorking && !prop.dateStatus.isPreviousDate;
  });

  protected displayNewBreakTime = computed(() => {
    const prop = this.prop();
    return prop.isShopOpen && prop.isWorking && !prop.dateStatus.isPreviousDate;
  });

  protected displayNewConsult = computed(() => {
    const prop = this.prop();
    return prop.isShopOpen && prop.isWorking && !prop.dateStatus.isPreviousDate;
  });

  protected displayAdjustStartEndDateTime = computed(() => {
    const prop = this.prop();
    return prop.isShopOpen && prop.isWorking && !prop.dateStatus.isPreviousDate;
  });

  private consults = computed(() => this.prop()?.info?.scheduledConsults);
  private inCompletedConsults = computed(() =>
    this.consults().filter(c =>
      Constant.Consult_InCompletedStatusTypes.includes(c.status.type as 'Pending' | 'Scheduled' | 'Start')
    )
  );
  private allocatedTimes = computed(() => {
    const info = this.prop().info;
    return this._employeeInfoSvc.getEventTimesFromDocument(info);
  });
  private employeeStartTimeItem = computed(() =>
    this._dateSvc.timeItem(this._dateSvc.transform.toLocalDateTime(this.prop().info.startDateTime))
  );
  private employeeEndTimeItem = computed(() =>
    this._dateSvc.timeItem(this._dateSvc.transform.toLocalDateTime(this.prop().info.endDateTime))
  );
  private shopStartTimeItem = computed(() =>
    this._dateSvc.transform.toLocalDateTime(this.prop().operatingHours.startDateTime)
  );
  private shopEndTimeItem = computed(() =>
    this._dateSvc.transform.toLocalDateTime(this.prop().operatingHours.endDateTime)
  );

  constructor() {}

  public async onClickDayOff() {
    const hasInCompletedConsults = this.inCompletedConsults().length > 0;
    const confirmation = hasInCompletedConsults
      ? await this._global.confirmAlert.confirmation(
          '',
          'label.description.hasincompletedConsultswouldyouliketocontinue'
        )
      : true;
    if (confirmation) {
      const info = this.prop().info;
      await this._global.loading.show();
      await this._schedulerRepo.updateWorkingStatus.request(
        info.shopId,
        info.employeeId,
        info.startOfDay,
        info.id,
        false
      );
      await this._global.loading.dismiss();
      await this._popoverCtrl.dismiss();
    }
  }
  public async onClickWorking() {
    const info = this.prop().info;
    await this._global.loading.show();
    await this._schedulerRepo.updateWorkingStatus.request(
      info.shopId,
      info.employeeId,
      info.startOfDay,
      info.id,
      true
    );
    await this._global.loading.dismiss();
    await this._popoverCtrl.dismiss();
  }
  public async onClickNewBreakTime() {}
  public async onClickNewConsult() {}
  ngOnInit() {}
}
