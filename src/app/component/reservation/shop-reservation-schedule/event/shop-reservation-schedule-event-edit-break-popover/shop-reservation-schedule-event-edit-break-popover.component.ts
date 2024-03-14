import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { ShopReservationScheduleEditBreakTimeEditorService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-schedule-editor/shop-reservation-schedule-edit-break-time-editor/shop-reservation-schedule-edit-break-time-editor.service';
import { ShopReservationScheduleEditorService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-schedule-editor/shop-reservation-schedule-editor.service';

@Component({
  selector: 'shop-reservation-schedule-event-edit-break-popover',
  templateUrl: './shop-reservation-schedule-event-edit-break-popover.component.html',
  styleUrls: ['./shop-reservation-schedule-event-edit-event-break-popover.component.scss'],
})
export class ShopReservationScheduleEventEditBreakPopoverComponent implements OnInit, OnDestroy {
  private _popover = inject(PopoverController);
  private _formCtrl = inject(FormControllerService);
  private _editor = inject(ShopReservationScheduleEditorService);
  private _destroy$ = new Subject<void>();

  public form = this._formCtrl.setEditFormHeaderModalProp();
  public editBreakTimeEditor = inject(ShopReservationScheduleEditBreakTimeEditorService);

  constructor() {
    this.form.headerTitle = 'label.title.updatebreaktime';
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this._editor.completedRequest$.pipe(takeUntil(this._destroy$)).subscribe(async () => {
      await this.onDismiss();
    });
    this._editor._query$.pipe(takeUntil(this._destroy$)).subscribe(doc => {
      if (doc !== null) {
        this._editor.query.set(doc);
      }
    });
  }

  public async onDismiss() {
    await this._popover.dismiss();
  }

  public async onDelete() {
    const deleted = this.editBreakTimeEditor.delete();
    if (deleted) {
      await this._editor.updateRequest();
    }
  }

  public async onUpdateBreakTime() {
    const updated = this.editBreakTimeEditor.update();
    if (updated) {
      await this._editor.updateRequest();
    }
  }

  ionViewWillLeave() {
    this._destroy$.next();
    this._destroy$.complete();
    this.editBreakTimeEditor.complete();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this.editBreakTimeEditor.complete();
  }
}
