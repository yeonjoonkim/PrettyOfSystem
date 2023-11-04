import { Component, ComponentRef, OnInit } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';
import { IShopSettingOptionType } from 'src/app/service/shop/shop-setting/shop-setting-option/shop-setting-option.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';
import { ShopSettingFinanceComponent } from './modal/shop-setting-finance/shop-setting-finance.component';
import { ShopSettingContactComponent } from './modal/shop-setting-contact/shop-setting-contact.component';
import { ShopSettingCalendarComponent } from './modal/shop-setting-calendar/shop-setting-calendar.component';
import { ShopSettingPictureComponent } from './modal/shop-setting-picture/shop-setting-picture.component';
import { ShopSettingOperatingHoursComponent } from './modal/shop-setting-operating-hours/shop-setting-operating-hours.component';

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
    private _modal: ModalController
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
    } else if (option.isPlan) {
      await this.openPlan();
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

  private async openPlan() {
    if (!this._isOpen) {
      this._isOpen = true;
      const modal = await this._setting.openPlan();
      if (modal !== null) {
        await modal.present();
        await this.handleModalClose(modal);
      } else {
        this._isOpen = false;
      }
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

  private async handleModalClose(modal: HTMLIonModalElement) {
    const close = await modal.onWillDismiss();
    if (close) {
      this._isOpen = false;
    }
  }
}
