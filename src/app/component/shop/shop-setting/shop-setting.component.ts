import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { Subject, firstValueFrom, takeUntil } from 'rxjs';
import { ShopSettingInsuranceProviderComponent } from './modal/shop-setting-insurance-provider/shop-setting-insurance-provider.component';
import { ShopConfigurationType } from 'src/app/interface';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'shop-setting',
  templateUrl: './shop-setting.component.html',
  styleUrls: ['./shop-setting.component.scss'],
})
export class ShopSettingComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public options!: IShopSettingOptionType[];
  public loaded: boolean = false;
  private _isOpen: boolean = false;
  private _config!: ShopConfigurationType;
  constructor(
    private _setting: ShopSettingService,
    private _modal: ModalController,
    private _capacityModal: SystemShopCapacityModalService
  ) {
    this.options = this._setting.option.get();
  }

  ngOnInit() {
    this._setting.config$.pipe(takeUntil(this._destroy$)).subscribe(config => {
      this.loaded = config !== null;
      if (config !== null) {
        this._config = config;
      }
    });
  }

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
    } else if (option.isInsuranceProvider) {
      await this.openInsuranceProvider();
    }
  }

  private async openCalendar() {
    if (!this._isOpen) {
      this._isOpen = true;
      const modal = await this._modal.create({
        presentingElement: await this._modal.getTop(),
        component: ShopSettingCalendarComponent,
        componentProps: {
          config: cloneDeep(this._config),
        },
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
        componentProps: {
          config: cloneDeep(this._config),
        },
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
        componentProps: {
          config: cloneDeep(this._config),
        },
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
        componentProps: {
          config: cloneDeep(this._config),
        },
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
        componentProps: {
          config: cloneDeep(this._config),
        },
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
    if (!this._isOpen) {
      this._isOpen = true;
      const modal = await this._modal.create({
        presentingElement: await this._modal.getTop(),
        component: ShopSettingWaitingListComponent,
        componentProps: {
          config: cloneDeep(this._config),
        },
      });
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  private async openInsuranceProvider() {
    if (!this._isOpen) {
      this._isOpen = true;
      const modal = await this._modal.create({
        presentingElement: await this._modal.getTop(),
        component: ShopSettingInsuranceProviderComponent,
        componentProps: {
          config: cloneDeep(this._config),
        },
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

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
