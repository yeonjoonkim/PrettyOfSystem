import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/interface/booking/cart/cart.interface';

@Component({
  selector: 'waiting-list-select-time-summary',
  templateUrl: './waiting-list-select-time-summary.component.html',
  styleUrls: ['./waiting-list-select-time-summary.component.scss'],
})
export class WaitingListSelectTimeSummaryComponent implements OnInit {
  @Input() cart!: Cart;
  constructor() {}

  ngOnInit() {}
}
