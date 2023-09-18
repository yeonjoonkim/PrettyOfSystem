import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { DatePeriodType } from 'src/app/interface/global/global.interface';
import { ShopConfigurationService } from 'src/app/service/system/system-shop/shop-configuration/shop-configuration.service';

@Component({
  selector: 'shop-plan-price',
  templateUrl: './shop-plan-price.component.html',
  styleUrls: ['./shop-plan-price.component.scss'],
})
export class ShopPlanPriceComponent implements OnInit, OnChanges {
  @Input() planId: string = '';
  @Input() period!: DatePeriodType;

  public planPrice: string = '';
  private _formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  constructor(private _shopConfig: ShopConfigurationService) {}

  ngOnInit() {}

  async ngOnChanges() {
    await this.onChangeParams();
  }

  private async onChangeParams() {
    let price: number = await this._shopConfig.getSelectedTotalPrice(this.planId, this.period);
    this.planPrice = this._formatter.format(price);
  }
}
