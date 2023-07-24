import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { IDatePeriod } from 'src/app/interface/global/global.interface';
import { IPlanPrice } from 'src/app/interface/system/plan/plan.interface';
import { ShopConfigurationService } from 'src/app/service/system/system-shop/shop-configuration/shop-configuration.service';

@Component({
  selector: 'shop-plan-price',
  templateUrl: './shop-plan-price.component.html',
  styleUrls: ['./shop-plan-price.component.scss'],
})
export class ShopPlanPriceComponent implements OnInit, OnChanges {
  private formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  @Input() planId: string = '';
  @Input() period!: IDatePeriod;
  private option = {
    planId: 'planId',
    period: 'period'
  };
  public planPrice: string = '';

  constructor(private shopConfig: ShopConfigurationService) { }

  ngOnInit() {}

  async ngOnChanges() {
    await this.onChangeParams();
  }


  private async onChangeParams(){
    let price: number = await this.shopConfig.getSelectedTotalPrice(this.planId, this.period);
    this.planPrice = this.formatter.format(price);
  }
}
