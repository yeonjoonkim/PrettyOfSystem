import { Component, OnDestroy, OnInit, computed, inject } from '@angular/core';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';
import {
  DateStatusType,
  SchedulerEmployeeStatusType,
  SchedulerOperatingHoursType,
  ShopEmployeeBreakTimeType,
  ShopScheduleDocumentType,
} from 'src/app/interface';
import { ShopScheduleRepositoryService } from 'src/app/firebase/shop-repository/shop-schedule-repository/shop-schedule-repository.service';
import * as Constant from 'src/app/constant/constant';
import { DateService } from 'src/app/service/global/date/date.service';
import { ShopReservationEmployeeInfoService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-employee-info/shop-reservation-employee-info.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopReservationScheduleEmployeeNewBreakPopoverComponent } from './shop-reservation-schedule-employee-new-break-popover/shop-reservation-schedule-employee-new-break-popover.component';
import { Subject, take } from 'rxjs';
import { ShopScheduleDocument } from 'src/app/class/global';
import { ShopReservationScheduleEditModalComponent } from './shop-reservation-schedule-edit-modal/shop-reservation-schedule-edit-modal.component';
@Component({
  selector: 'shop-reservation-schedule-employee-popover',
  templateUrl: './shop-reservation-schedule-employee-popover.component.html',
  styleUrls: ['./shop-reservation-schedule-employee-popover.component.scss'],
})
export class ShopReservationScheduleEmployeePopoverComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _navParam = inject(NavParams);
  private _popoverCtrl = inject(PopoverController);
  private _modalCtrl = inject(ModalController);
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

  protected displayEdit = computed(() => {
    const prop = this.prop();
    return prop.isShopOpen && !prop.dateStatus.isPreviousDate;
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

  constructor() {}

  public async onClickDayOff() {
    const hasInCompletedConsults = this.inCompletedConsults().length > 0;
    const confirmation = hasInCompletedConsults
      ? await this._global.confirmAlert.confirmation(
          this.inCompletedConsults().length.toString(),
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
  public async onClickNewBreakTime(event: Event) {
    const startOfDay = this.getStartOfDay();
    const events = this.getEvents();
    const start = this.getEmployeeStartTimeItem();
    const end = this.getEmployeeEndTimeItem();
    const popover = await this._popoverCtrl.create({
      component: ShopReservationScheduleEmployeeNewBreakPopoverComponent,
      cssClass: 'add-break-time-container center-popover-container',
      event: event,
      translucent: false,
      size: 'cover',
      backdropDismiss: false,
      componentProps: {
        startOfDay: startOfDay,
        existingEvents: events,
        employeeStartTimeItem: start,
        employeeEndTimeItem: end,
      },
    });

    await popover.present();

    const result = await popover.onWillDismiss();
    if (result?.data) {
      const newBreakTime = result.data as ShopEmployeeBreakTimeType;
      await this.onAddNewBreak(newBreakTime);
    }
  }

  public async onClickEdit() {
    const prop = this.prop();
    const modal = await this._modalCtrl.create({
      component: ShopReservationScheduleEditModalComponent,
      componentProps: {
        startOfDay: prop.startOfDay,
        documentId: prop.info.id,
        shopId: prop.info.shopId,
        dateStatus: prop.dateStatus,
        shopOperatingHours: prop.operatingHours,
      },
    });

    await modal.present();

    const result = await modal.onWillDismiss();
    if (result?.data) {
      await this.updateDocument(result.data as ShopScheduleDocumentType);
    }
  }

  public async onClickNewConsult() {}

  async ngOnInit() {}

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private async onAddNewBreak(newBreakTime: ShopEmployeeBreakTimeType) {
    const info = this.prop().info;
    this._schedulerRepo
      .getDocumentById(info.shopId, info.employeeId, info.id)
      .pipe(take(1))
      .subscribe(async document => {
        await this._global.loading.show();
        if (document !== null) {
          const doc = new ShopScheduleDocument(document);
          const added = doc.addBreak(newBreakTime);
          if (added) {
            await this._schedulerRepo.updateDocument(doc.data);
          }
        }
        await this._global.loading.dismiss();
        await this._popoverCtrl.dismiss();
      });
  }

  private async updateDocument(doc: ShopScheduleDocumentType) {
    await this._global.loading.show();
    const updated = await this._schedulerRepo.updateDocument(doc);
    await this._global.loading.dismiss();

    if (updated) {
      await this._popoverCtrl.dismiss();
    }
  }

  private getEvents() {
    const info = this.prop().info;
    return this._employeeInfoSvc.getEventTimesFromDocument(info);
  }
  private getStartOfDay() {
    return this.prop().info.startOfDay;
  }
  private getEmployeeStartTimeItem() {
    const info = this.prop().info;
    return this._dateSvc.timeItem(this._dateSvc.transform.toLocalDateTime(info.startDateTime));
  }

  private getEmployeeEndTimeItem() {
    const info = this.prop().info;
    return this._dateSvc.timeItem(this._dateSvc.transform.toLocalDateTime(info.endDateTime));
  }
}
