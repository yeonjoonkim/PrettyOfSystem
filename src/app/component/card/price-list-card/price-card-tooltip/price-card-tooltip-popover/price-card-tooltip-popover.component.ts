import { Component, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'price-card-tooltip-popover',
  templateUrl: './price-card-tooltip-popover.component.html',
  styleUrls: ['./price-card-tooltip-popover.component.scss'],
})
export class PriceCardTooltipPopoverComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() type!: 'System' | 'User' | 'Client';

  constructor(private _navParam: NavParams) {}

  ngOnInit() {
    const titleParam = this._navParam.get('title');
    const descriptionParam = this._navParam.get('description');
    const typeParam = this._navParam.get('type');

    if (typeParam !== undefined) {
      this.type = typeParam;
      this.title = titleParam !== undefined ? titleParam : undefined;
      this.description = descriptionParam !== undefined ? descriptionParam : undefined;
    }
  }
}
