import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IShopServiceMenuOptionAction } from 'src/app/service/shop/shop-service-management/shop-service-menu-option-controller/shop-service-menu-option-controller.service';

@Component({
  selector: 'price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
})
export class PriceListComponent implements OnInit {
  @Input() selectedMenu!: IShopServiceMenuOptionAction;

  constructor() {}

  ngOnInit() {}
}
