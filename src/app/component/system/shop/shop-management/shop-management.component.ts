import { Component, OnInit } from '@angular/core';
import { CellClickEvent } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { IShopConfiguration } from 'src/app/interface/system/shop/shop.interface';
import { SystemShopService } from 'src/app/service/system/system-shop/system-shop.service';
import { DeviceWidthService } from 'src/app/shared/services/global/device-width/device-width.service';
import { GlobalService } from 'src/app/shared/services/global/global.service';


@Component({
  selector: 'system-shop-management',
  templateUrl: './shop-management.component.html',
  styleUrls: ['./shop-management.component.scss'],
})
export class ShopManagementComponent implements OnInit {
  public readonly configs: Observable<IShopConfiguration[]> = this.systemShop.subscribeAllShopConfiguration();
  constructor(private systemShop:  SystemShopService, public device: DeviceWidthService) {
  }

  ngOnInit() {
  }

  public async onClickCreateShopConfiguration(){
    await this.systemShop.modal.presentCreateSystemShopConfiguration();
  }
  public async onClickCell(selected: CellClickEvent){
    let config: IShopConfiguration = selected.dataItem;
    this.systemShop.modal.presentEditShopConfiguration(config);
  }
}
