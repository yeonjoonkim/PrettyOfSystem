import { Component, OnInit, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ShopEmployeeAddBreakService } from 'src/app/service/shop/shop-employee-roster-management/shop-employee-add-break/shop-employee-add-break.service';

@Component({
  selector: 'shop-employee-roster-add-break-popover',
  templateUrl: './shop-employee-roster-add-break-popover.component.html',
  styleUrls: ['./shop-employee-roster-add-break-popover.component.scss'],
})
export class ShopEmployeeRosterAddBreakPopoverComponent implements OnInit {
  private _popoverCtrl = inject(PopoverController);
  public newBreakTime = inject(ShopEmployeeAddBreakService);
  constructor() {}

  ngOnInit() {}

  async onDismiss() {
    await this._popoverCtrl.dismiss();
  }

  async onSave() {
    const saved = this.newBreakTime.addBreakTime();
    if (saved) {
      await this.onDismiss();
    }
  }
}
