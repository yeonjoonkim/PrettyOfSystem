import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { SchedulerOperatingHoursType, ShopEmployeeBreakTimeType } from 'src/app/interface';
import { ShopReservationScheduleEditorService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-schedule-editor/shop-reservation-schedule-editor.service';
import { ShopReservationScheduleAddBreakPopoverComponent } from './shop-reservation-schedule-add-break-popover/shop-reservation-schedule-add-break-popover.component';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';
import { ShopReservationScheduleEditBreakTimeEditorService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-schedule-editor/shop-reservation-schedule-edit-break-time-editor/shop-reservation-schedule-edit-break-time-editor.service';
import { ShopReservationScheduleEditBreakPopoverComponent } from './shop-reservation-schedule-edit-break-popover/shop-reservation-schedule-edit-break-popover.component';
import { ShopReservationScheduleAddBreakTimeEditorService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-schedule-editor/shop-reservation-schedule-add-break-time-editor/shop-reservation-schedule-add-break-time-editor.service';
@Component({
  selector: 'app-shop-reservation-schedule-editor',
  templateUrl: './shop-reservation-schedule-editor.component.html',
  styleUrls: ['./shop-reservation-schedule-editor.component.scss'],
})
export class ShopReservationScheduleEditorComponent implements OnInit, OnDestroy {
  private _navParam = inject(NavParams);
  private _modalCtrl = inject(ModalController);
  private _popoverCtrl = inject(PopoverController);

  private _shopId = this._navParam.get('shopId') as string;
  private _documentId = this._navParam.get('documentId') as string;
  private _shopOperatingHours = this._navParam.get('shopOperatingHours') as SchedulerOperatingHoursType;
  private _destroy$ = new Subject<void>();

  public kendo = inject(KendoUiService);
  public editor = inject(ShopReservationScheduleEditorService);
  private _newBreakTimeEditor = inject(ShopReservationScheduleAddBreakTimeEditorService);
  private _editBreakTimeEditor = inject(ShopReservationScheduleEditBreakTimeEditorService);
  protected form = this.editor.formCtrl.setEditFormHeaderModalProp();

  constructor() {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.editor.start(this._shopId, this._documentId, this._shopOperatingHours);
    this.editor.completedRequest$.pipe(takeUntil(this._destroy$)).subscribe(async () => {
      await this.onClickDismiss();
    });
    this.editor._query$.pipe(takeUntil(this._destroy$)).subscribe(doc => {
      if (doc !== null) {
        this.editor.query.set(doc);
      }
    });
  }

  public async request() {
    await this.editor.updateRequest();
  }

  public async onClickDismiss() {
    await this._modalCtrl.dismiss();
  }

  public async onClickNewBreakTime(event: Event) {
    this._newBreakTimeEditor.start();
    const popover = await this._popoverCtrl.create({
      component: ShopReservationScheduleAddBreakPopoverComponent,
      cssClass: 'add-break-time-container center-popover-container',
      event: event,
      translucent: false,
      size: 'cover',
      backdropDismiss: false,
    });
    await popover.present();
  }

  public async onClickUpdateBreakTime(prop: ShopEmployeeBreakTimeType, event: Event) {
    this._editBreakTimeEditor.start(prop);
    const popover = await this._popoverCtrl.create({
      component: ShopReservationScheduleEditBreakPopoverComponent,
      cssClass: 'add-break-time-container center-popover-container',
      event: event,
      translucent: false,
      size: 'cover',
      backdropDismiss: false,
    });
    await popover.present();
  }

  ionViewWillLeave() {
    this._destroy$.next();
    this._destroy$.complete();
    this.editor.completed();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this.editor.completed();
  }
}
