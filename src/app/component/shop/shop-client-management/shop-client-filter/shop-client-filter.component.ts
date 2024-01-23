import { Component, OnInit } from '@angular/core';
import { ShopClientQueryService } from 'src/app/service/shop/shop-client-management/shop-client-query/shop-client-query.service';

@Component({
  selector: 'shop-client-filter',
  templateUrl: './shop-client-filter.component.html',
  styleUrls: ['./shop-client-filter.component.scss'],
})
export class ShopClientFilterComponent implements OnInit {
  constructor(public query: ShopClientQueryService) {}

  ngOnInit() {}

  public async applyFilter() {
    await this.query.applyFilter();
  }

  public async reset() {
    await this.query.reset();
  }
}
