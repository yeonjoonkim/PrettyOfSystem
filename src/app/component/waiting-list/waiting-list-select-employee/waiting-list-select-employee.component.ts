import { Component, Input, OnInit } from '@angular/core';
import { ShopEmployeeTimeSheet } from 'src/app/interface';
import { CheckOutSpecialistType } from 'src/app/interface/booking/cart/cart.interface';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';

@Component({
  selector: 'waiting-list-select-employee',
  templateUrl: './waiting-list-select-employee.component.html',
  styleUrls: ['./waiting-list-select-employee.component.scss'],
})
export class WaitingListSelectEmployeeComponent implements OnInit {
  @Input() specialists!: ShopEmployeeTimeSheet[];
  @Input() selectedSpecialist!: CheckOutSpecialistType;

  constructor(private _waitingList: WaitingListService) {}

  ngOnInit() {}

  async updateSpecialistCart(specialist: ShopEmployeeTimeSheet) {
    await this._waitingList.cart.updateSpecialist(specialist.shopId, specialist.employeeId, specialist.fullName);
  }
}
