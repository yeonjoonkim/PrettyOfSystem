import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global/global.service';
import {
  IShopServiceMenuOptionAction,
  ShopServiceMenuOptionControllerService,
} from 'src/app/service/shop/shop-service-management/shop-service-menu-option-controller/shop-service-menu-option-controller.service';

@Component({
  selector: 'app-shop-service-management',
  templateUrl: './shop-service-management.page.html',
  styleUrls: ['./shop-service-management.page.scss'],
})
export class ShopServiceManagementPage implements OnInit {
  public selected: IShopServiceMenuOptionAction = this._menuCtrl.setDefault();
  public selection: IShopServiceMenuOptionAction[] = this._menuCtrl.buttons();
  constructor(
    private _menuCtrl: ShopServiceMenuOptionControllerService,
    private _global: GlobalService
  ) {}

  ngOnInit() {}

  public buttonChange(selected: IShopServiceMenuOptionAction) {
    this.selected = selected;
  }

  public isActive(name: string) {
    return this.selected.name === name;
  }
}
