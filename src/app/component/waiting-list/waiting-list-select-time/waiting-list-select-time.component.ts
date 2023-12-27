import { Component, Input, OnInit } from '@angular/core';
import { ShopEmployeeTimeSheetAvailableType } from 'src/app/interface';
import { Cart } from 'src/app/interface/booking/cart/cart.interface';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';

@Component({
  selector: 'waiting-list-select-time',
  templateUrl: './waiting-list-select-time.component.html',
  styleUrls: ['./waiting-list-select-time.component.scss'],
})
export class WaitingListSelectTimeComponent implements OnInit {
  @Input() cart!: Cart;
  @Input() available!: ShopEmployeeTimeSheetAvailableType;

  constructor(private _waitingList: WaitingListService) {}

  ngOnInit() {}

  public async updateSelectTime(shopId: string, dateTime: string) {
    await this._waitingList.cart.updateTime(shopId, dateTime);
  }
}
