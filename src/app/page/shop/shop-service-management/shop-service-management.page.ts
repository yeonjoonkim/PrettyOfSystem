import { Component, OnInit, inject } from '@angular/core';
import { KendoUiIconService } from 'src/app/service/global/kendo-ui/icon/kendo-ui-icon.service';
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
  public kendo = inject(KendoUiIconService);
  public selected: IShopServiceMenuOptionAction = this._menuCtrl.setDefault();
  public selection: IShopServiceMenuOptionAction[] = this._menuCtrl.buttons();

  constructor(private _menuCtrl: ShopServiceMenuOptionControllerService) {}

  ngOnInit() {}

  public buttonChange(selected: IShopServiceMenuOptionAction) {
    this.selected = selected;
  }

  public isActive(name: string) {
    return this.selected.name === name;
  }
}
