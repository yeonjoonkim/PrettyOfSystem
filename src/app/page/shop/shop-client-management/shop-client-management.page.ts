import { Component, OnInit } from '@angular/core';
import { ShopClientManagementService } from 'src/app/service/shop/shop-client-management/shop-client-management.service';

@Component({
  selector: 'app-shop-client-management',
  templateUrl: './shop-client-management.page.html',
  styleUrls: ['./shop-client-management.page.scss'],
})
export class ShopClientManagementPage implements OnInit {
  public isAuthorised$ = this._shopClient.isAuthorised$;

  constructor(private _shopClient: ShopClientManagementService) {}

  ngOnInit() {}
}
