import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { ShopReservationScheduleAddBreakTimeEditorService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-schedule-editor/shop-reservation-schedule-add-break-time-editor/shop-reservation-schedule-add-break-time-editor.service';

@Component({
  selector: 'shop-reservation-schedule-add-break-popover',
  templateUrl: './shop-reservation-schedule-add-break-popover.component.html',
  styleUrls: ['./shop-reservation-schedule-add-break-popover.component.scss'],
})
export class ShopReservationScheduleAddBreakPopoverComponent implements OnInit, OnDestroy {
  private _popover = inject(PopoverController);
  private _formCtrl = inject(FormControllerService);

  public form = this._formCtrl.setReadFormHeaderModalProp();
  public newBreakTimeEditor = inject(ShopReservationScheduleAddBreakTimeEditorService);

  constructor() {
    this.form.headerTitle = 'label.title.addbreaktime';
  }

  ngOnInit() {}

  public async onDismiss() {
    await this._popover.dismiss();
  }

  public async onAddBreakTime() {
    const added = this.newBreakTimeEditor.add();
    if (added) {
      await this.onDismiss();
    }
  }

  ionViewWillLeave() {
    this.newBreakTimeEditor.complete();
  }

  ngOnDestroy() {
    this.newBreakTimeEditor.complete();
  }
}
