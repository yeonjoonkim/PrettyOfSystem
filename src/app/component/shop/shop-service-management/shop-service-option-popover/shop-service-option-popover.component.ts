import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ShopServiceOptionType } from 'src/app/interface';

@Component({
  selector: 'shop-service-option-popover',
  templateUrl: './shop-service-option-popover.component.html',
  styleUrls: ['./shop-service-option-popover.component.scss'],
})
export class ShopServiceOptionPopoverComponent implements OnInit {
  public options!: ShopServiceOptionType[];
  constructor(private _navParam: NavParams) {}

  ngOnInit() {
    const param = this._navParam.get('options');
    if (Boolean(param)) {
      this.options = param;
    }
  }
}
