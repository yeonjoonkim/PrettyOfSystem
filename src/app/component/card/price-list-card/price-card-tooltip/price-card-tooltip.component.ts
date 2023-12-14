import { Component, Input, OnInit } from '@angular/core';
import { PriceCardTooltipPopoverComponent } from './price-card-tooltip-popover/price-card-tooltip-popover.component';
import { PopoverController } from '@ionic/angular';
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'price-card-tooltip',
  templateUrl: './price-card-tooltip.component.html',
  styleUrls: ['./price-card-tooltip.component.scss'],
})
export class PriceCardTooltipComponent implements OnInit {
  @Input() enabledToolTip: boolean = false;
  @Input() description!: string;
  @Input() title!: string;
  @Input() type!: Constant.LanguageTransformType;

  public isOpen: boolean = false;

  constructor(private _popoverCtrl: PopoverController) {}

  ngOnInit() {}

  async presentTooltip(event: any) {
    const popover = await this._popoverCtrl.create({
      component: PriceCardTooltipPopoverComponent,
      event: event,
      translucent: true,
      size: 'auto',
      componentProps: {
        title: this.title,
        description: this.description,
        type: this.type,
      },
    });
    await popover.present();
  }
}
