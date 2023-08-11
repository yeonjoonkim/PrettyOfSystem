import { Component, OnDestroy, OnInit } from '@angular/core';
import { CellClickEvent } from '@progress/kendo-angular-grid';
import { Observable, Subscription } from 'rxjs';
import { IShopConfiguration } from 'src/app/interface/system/shop/shop.interface';
import { SystemShopService } from 'src/app/service/system/system-shop/system-shop.service';
import { DeviceWidthService } from 'src/app/shared/services/global/device-width/device-width.service';
import { GlobalService } from 'src/app/shared/services/global/global.service';


@Component({
  selector: 'system-shop-management',
  templateUrl: './shop-management.component.html',
  styleUrls: ['./shop-management.component.scss'],
})
export class ShopManagementComponent implements OnInit, OnDestroy {
  public configs: Observable<IShopConfiguration[]> = this.systemShop.shopConfigurationList;
  private selectedConfig!: IShopConfiguration;
  constructor(private systemShop:  SystemShopService, public device: DeviceWidthService) {
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  public async onClickCreateShopConfiguration(){
    await this.systemShop.modal.presentCreateSystemShopConfiguration();
  }

  public async onClickCell(selected: CellClickEvent){
    this.selectedConfig = selected.dataItem;
    let modal = await this.systemShop.modal.presentEditShopConfiguration(this.selectedConfig);
    await modal.present();
  }

}
