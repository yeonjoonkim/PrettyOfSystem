import { Component, OnDestroy, OnInit } from '@angular/core';
import { CellClickEvent } from '@progress/kendo-angular-grid';
import { lastValueFrom } from 'rxjs';
import { IShopConfiguration } from 'src/app/interface/shop/shop.interface';
import { SystemShopService } from 'src/app/service/system/system-shop/system-shop.service';
import { DeviceWidthService } from 'src/app/service/global/device-width/device-width.service';

@Component({
  selector: 'system-shop-management',
  templateUrl: './shop-management.component.html',
  styleUrls: ['./shop-management.component.scss'],
})
export class ShopManagementComponent implements OnInit, OnDestroy {
  public configs: IShopConfiguration[] = [];
  private selectedConfig!: IShopConfiguration;
  private _isModalOpen: boolean = false;
  constructor(private systemShop: SystemShopService, public device: DeviceWidthService) {}

  async ngOnInit() {
    await this.setConfigs();
  }

  ngOnDestroy() {}

  public async onClickCreateShopConfiguration() {
    if (!this._isModalOpen) {
      this._isModalOpen = true;
      let modal = await this.systemShop.modal.presentCreateSystemShopConfiguration();
      await modal.present();
      await this.handleDissmissModal(modal);
    }
  }

  public async onClickCell(selected: CellClickEvent) {
    this.selectedConfig = selected.dataItem;
    if (!this._isModalOpen) {
      this._isModalOpen = true;
      let modal = await this.systemShop.modal.presentEditShopConfiguration(this.selectedConfig);
      await modal.present();
      await this.handleDissmissModal(modal);
    }
  }

  private async handleDissmissModal(modal: HTMLIonModalElement) {
    let result = await modal.onWillDismiss();
    this._isModalOpen = false;
    if (result?.role !== 'cancel') {
      await this.setConfigs();
    }
  }

  private async setConfigs() {
    let result = await lastValueFrom(this.systemShop.getAllShopConfigurations());
    this.configs = result.sort((a, b) => a.name.localeCompare(b.name));
  }
}
