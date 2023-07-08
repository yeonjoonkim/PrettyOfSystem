import { Component, OnInit } from '@angular/core';
import { SystemShopService } from 'src/app/service/system/system-shop/system-shop.service';
import { GlobalService } from 'src/app/shared/services/global/global.service';


@Component({
  selector: 'system-shop-management',
  templateUrl: './shop-management.component.html',
  styleUrls: ['./shop-management.component.scss'],
})
export class ShopManagementComponent implements OnInit {

  constructor(private systemShop:  SystemShopService) {
  }

  ngOnInit() {

  }

  public async  onClickCreateShopConfiguration(){
    await this.systemShop.modal.presentCreateSystemShopConfiguration();
  }
}
