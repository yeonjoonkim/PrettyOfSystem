import { Component, OnInit, computed, inject } from '@angular/core';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';
import {
  DateStatusType,
  SchedulerEmployeeStatusType,
  SchedulerOperatingHoursType,
  ShopScheduleDocumentType,
} from 'src/app/interface';
import { Subject } from 'rxjs';
import { ShopReservationScheduleEditorComponent } from './shop-reservation-schedule-editor/shop-reservation-schedule-editor.component';
import { ShopReservationScheduleEditorService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-schedule-editor/shop-reservation-schedule-editor.service';
import { ShopReservationScheduleEmployeeNewBreakPopoverComponent } from './shop-reservation-schedule-employee-new-break-popover/shop-reservation-schedule-employee-new-break-popover.component';
import { ShopReservationScheduleAddBreakTimeEditorService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-schedule-editor/shop-reservation-schedule-add-break-time-editor/shop-reservation-schedule-add-break-time-editor.service';

@Component({
  selector: 'shop-reservation-schedule-employee-popover',
  templateUrl: './shop-reservation-schedule-employee-popover.component.html',
  styleUrls: ['./shop-reservation-schedule-employee-popover.component.scss'],
})
export class ShopReservationScheduleEmployeePopoverComponent implements OnInit {
  private _destroy$ = new Subject<void>();
  private _navParam = inject(NavParams);
  private _modalCtrl = inject(ModalController);
  private _popoverCtrl = inject(PopoverController);
  private _scheduleEditorSvc = inject(ShopReservationScheduleEditorService);
  private _newBreakEditorSvc = inject(ShopReservationScheduleAddBreakTimeEditorService);

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

  protected displayNewBreakTime = computed(() => {
    const prop = this.prop();
    return prop.isShopOpen && !prop.dateStatus.isPreviousDate;
  });

  protected displayNewConsult = computed(() => {
    const prop = this.prop();
    return prop.isShopOpen && prop.isWorking && !prop.dateStatus.isPreviousDate;
  });

  constructor() {}

  public async onClickEdit() {
    const prop = this.prop();
    const modal = await this._modalCtrl.create({
      component: ShopReservationScheduleEditorComponent,
      componentProps: {
        documentId: prop.info.id,
        shopId: prop.info.shopId,
        shopOperatingHours: prop.operatingHours,
      },
    });

    await modal.present();

    const result = await modal.onWillDismiss();
    if (result) {
      await this._popoverCtrl.dismiss();
    }
  }

  public async onClickNewBreakTime() {
    const prop = this.prop();
    this._scheduleEditorSvc.start(prop.info.shopId, prop.info.id, prop.operatingHours);
    const popover = await this._popoverCtrl.create({
      component: ShopReservationScheduleEmployeeNewBreakPopoverComponent,
      cssClass: 'add-break-time-container center-popover-container',
      event: event,
      translucent: false,
      size: 'cover',
      backdropDismiss: false,
    });
    await popover.present();

    const finalised = await popover.onWillDismiss();
    if (finalised) {
      this._scheduleEditorSvc.completed();
      this._newBreakEditorSvc.complete();
    }
  }

  public async onClickNewConsult() {}

  ngOnInit() {}
}
