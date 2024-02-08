import { Component, OnInit, computed, inject } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { ShopEmployeeRosterService } from 'src/app/service/shop/shop-employee-roster-management/shop-employee-roster/shop-employee-roster.service';
import { ShopEmployeeRosterAddBreakPopoverComponent } from '../shop-employee-roster-add-break-popover/shop-employee-roster-add-break-popover.component';
import { ShopEmployeeAddBreakService } from 'src/app/service/shop/shop-employee-roster-management/shop-employee-add-break/shop-employee-add-break.service';
import { ShopEmployeeUpdateBreakService } from 'src/app/service/shop/shop-employee-roster-management/shop-employee-update-break/shop-employee-update-break.service';
import { ShopEmployeeRosterUpdateBreakPopoverComponent } from '../shop-employee-roster-update-break-popover/shop-employee-roster-update-break-popover.component';
import { ShopOperatingBreakType } from 'src/app/interface';

@Component({
  selector: 'shop-employee-roster',
  templateUrl: './shop-employee-roster.component.html',
  styleUrls: ['./shop-employee-roster.component.scss'],
})
export class ShopEmployeeRosterComponent implements OnInit {
  private _modalCtrl = inject(ModalController);
  private _popoverCtrl = inject(PopoverController);
  private add = inject(ShopEmployeeAddBreakService);
  private update = inject(ShopEmployeeUpdateBreakService);
  private _formCtrl = inject(FormControllerService);
  public roster = inject(ShopEmployeeRosterService);

  public form = this._formCtrl.setEditFormHeaderModalProp();
  public title = computed(() => {
    return this.roster.loaded() ? `${this.roster.firstName()} ${this.roster.lastName()}` : '';
  });
  constructor() {}

  ngOnInit() {}

  public async onDismiss() {
    this._modalCtrl.dismiss();
  }

  public async onUpdate() {
    const updated = await this.roster.onUpdate();
    if (updated) {
      await this.onDismiss();
    }
  }

  public async onAddBreakTime(event: Event) {
    await this.add.start();
    const popover = await this._popoverCtrl.create({
      component: ShopEmployeeRosterAddBreakPopoverComponent,
      event: event,
      translucent: false,
      size: 'cover',
      backdropDismiss: false,
      cssClass: 'add-break-time-container',
    });

    await popover.present();
    const dismissed = await popover.onDidDismiss();
    if (dismissed) {
      this.add.completed();
    }
  }

  public async onUpdateBreakTime(event: Event, breakTime: ShopOperatingBreakType) {
    if (!this.update.loaded()) {
      this.update.start(breakTime);
      const popover = await this._popoverCtrl.create({
        component: ShopEmployeeRosterUpdateBreakPopoverComponent,
        event: event,
        translucent: false,
        size: 'cover',
        backdropDismiss: false,
        cssClass: 'add-break-time-container',
      });
      await popover.present();
      const dismissed = await popover.onDidDismiss();
      if (dismissed) {
        this.update.completed();
      }
    }
  }
}
