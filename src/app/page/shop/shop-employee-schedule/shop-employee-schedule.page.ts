import { Component, OnInit } from '@angular/core';
import { ShopEmployeeRosterManagementService } from 'src/app/service/shop/shop-employee-roster-management/shop-employee-roster-management.service';

@Component({
  selector: 'app-shop-employee-schedule',
  templateUrl: './shop-employee-schedule.page.html',
  styleUrls: ['./shop-employee-schedule.page.scss'],
})
export class ShopEmployeeSchedulePage implements OnInit {
  public loaded = this._management.loaded;
  public scheduledEmployees = this._management.scheduledEmployees;

  constructor(private _management: ShopEmployeeRosterManagementService) {}

  ngOnInit() {}
}
