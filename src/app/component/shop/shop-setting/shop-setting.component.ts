import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IShopSettingOptionType } from 'src/app/service/shop/shop-setting/shop-setting-option/shop-setting-option.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';
import { ShopSettingFinanceComponent } from './modal/shop-setting-finance/shop-setting-finance.component';
import { ShopSettingContactComponent } from './modal/shop-setting-contact/shop-setting-contact.component';
import { ShopSettingCalendarComponent } from './modal/shop-setting-calendar/shop-setting-calendar.component';
import { ShopSettingPictureComponent } from './modal/shop-setting-picture/shop-setting-picture.component';
import { ShopSettingOperatingHoursComponent } from './modal/shop-setting-operating-hours/shop-setting-operating-hours.component';
import { ShopSettingWaitingListComponent } from './modal/shop-setting-waiting-list/shop-setting-waiting-list.component';
import { SystemShopCapacityModalService } from 'src/app/service/system/system-shop-capacity/system-shop-capacity-modal/system-shop-capacity-modal.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'shop-setting',
  templateUrl: './shop-setting.component.html',
  styleUrls: ['./shop-setting.component.scss'],
})
export class ShopSettingComponent implements OnInit {
  public options!: IShopSettingOptionType[];
  private _isOpen: boolean = false;

  constructor(
    private _setting: ShopSettingService,
    private _modal: ModalController,
    private _capacityModal: SystemShopCapacityModalService
  ) {
    this.options = this._setting.option.get();
  }

  ngOnInit() {}

  public async handleClickOption(option: IShopSettingOptionType) {
    if (option.isCalendar) {
      await this.openCalendar();
    } else if (option.isContact) {
      await this.openContact();
    } else if (option.isFinance) {
      await this.openFinance();
    } else if (option.isPicture) {
      await this.openPicture();
    } else if (option.isOperatingHours) {
      await this.openOperatingHours();
    } else if (option.isCapacity) {
      await this.openCapacity();
    } else if (option.isWaitingList) {
      await this.openWaitingList();
    }
  }

  private async openCalendar() {
    if (!this._isOpen) {
      this._isOpen = true;
      const modal = await this._modal.create({
        presentingElement: await this._modal.getTop(),
        component: ShopSettingCalendarComponent,
      });
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  private async openContact() {
    if (!this._isOpen) {
      this._isOpen = true;
      const modal = await this._modal.create({
        presentingElement: await this._modal.getTop(),
        component: ShopSettingContactComponent,
      });
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  private async openFinance() {
    if (!this._isOpen) {
      this._isOpen = true;
      const modal = await this._modal.create({
        presentingElement: await this._modal.getTop(),
        component: ShopSettingFinanceComponent,
      });
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  private async openPicture() {
    if (!this._isOpen) {
      this._isOpen = true;
      const modal = await this._modal.create({
        presentingElement: await this._modal.getTop(),
        component: ShopSettingPictureComponent,
      });
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  private async openOperatingHours() {
    if (!this._isOpen) {
      this._isOpen = true;
      const modal = await this._modal.create({
        presentingElement: await this._modal.getTop(),
        component: ShopSettingOperatingHoursComponent,
      });
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  private async openCapacity() {
    const cap = await firstValueFrom(this._setting.capacity$);
    if (cap !== null && !this._isOpen) {
      this._isOpen = true;
      const modal = await this._capacityModal.presentReadCapacity(cap);
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  private async openWaitingList() {
    const cap = await firstValueFrom(this._setting.capacity$);
    if (cap !== null && !this._isOpen) {
      this._isOpen = true;
      const modal = await this._modal.create({
        presentingElement: await this._modal.getTop(),
        component: ShopSettingWaitingListComponent,
      });
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  private async handleModalClose(modal: HTMLIonModalElement) {
    const close = await modal.onWillDismiss();
    if (close) {
      this._isOpen = false;
    }
  }
}
