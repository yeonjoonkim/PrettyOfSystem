import { Component, OnInit, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ShopEmployeeUpdateBreakService } from 'src/app/service/shop/shop-employee-roster-management/shop-employee-update-break/shop-employee-update-break.service';

@Component({
  selector: 'shop-employee-roster-update-break-popover',
  templateUrl: './shop-employee-roster-update-break-popover.component.html',
  styleUrls: ['./shop-employee-roster-update-break-popover.component.scss'],
})
export class ShopEmployeeRosterUpdateBreakPopoverComponent implements OnInit {
  private _popoverCtrl = inject(PopoverController);
  public updateBreakTime = inject(ShopEmployeeUpdateBreakService);
  constructor() {}

  ngOnInit() {}

  async onDismiss() {
    await this._popoverCtrl.dismiss();
  }

  async onUpdate() {
    const saved = this.updateBreakTime.updateBreakTime();
    if (saved) {
      await this.onDismiss();
    }
  }
}
