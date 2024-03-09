import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { ShopReservationScheduleEditBreakTimeEditorService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-schedule-editor/shop-reservation-schedule-edit-break-time-editor/shop-reservation-schedule-edit-break-time-editor.service';

@Component({
  selector: 'shop-reservation-schedule-edit-break-popover',
  templateUrl: './shop-reservation-schedule-edit-break-popover.component.html',
  styleUrls: ['./shop-reservation-schedule-edit-break-popover.component.scss'],
})
export class ShopReservationScheduleEditBreakPopoverComponent implements OnInit, OnDestroy {
  private _popover = inject(PopoverController);
  private _formCtrl = inject(FormControllerService);

  public form = this._formCtrl.setReadFormHeaderModalProp();
  public editBreakTimeEditor = inject(ShopReservationScheduleEditBreakTimeEditorService);

  constructor() {
    this.form.headerTitle = 'label.title.updatebreaktime';
  }

  ngOnInit() {}

  public async onDismiss() {
    await this._popover.dismiss();
  }

  public async onUpdateBreakTime() {
    const updated = this.editBreakTimeEditor.update();
    if (updated) {
      await this.onDismiss();
    }
  }

  ionViewWillLeave() {
    this.editBreakTimeEditor.complete();
  }

  ngOnDestroy() {
    this.editBreakTimeEditor.complete();
  }
}
