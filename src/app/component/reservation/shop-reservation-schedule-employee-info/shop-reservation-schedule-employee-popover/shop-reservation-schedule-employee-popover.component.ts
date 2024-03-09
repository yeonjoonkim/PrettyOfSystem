import { Component, OnInit, computed, inject } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import {
  DateStatusType,
  SchedulerEmployeeStatusType,
  SchedulerOperatingHoursType,
  ShopScheduleDocumentType,
} from 'src/app/interface';
import { Subject } from 'rxjs';
import { ShopReservationScheduleEditorComponent } from './shop-reservation-schedule-editor/shop-reservation-schedule-editor.component';

@Component({
  selector: 'shop-reservation-schedule-employee-popover',
  templateUrl: './shop-reservation-schedule-employee-popover.component.html',
  styleUrls: ['./shop-reservation-schedule-employee-popover.component.scss'],
})
export class ShopReservationScheduleEmployeePopoverComponent implements OnInit {
  private _destroy$ = new Subject<void>();
  private _navParam = inject(NavParams);
  private _modalCtrl = inject(ModalController);

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
  }

  public async onClickNewConsult() {}

  ngOnInit() {}
}
