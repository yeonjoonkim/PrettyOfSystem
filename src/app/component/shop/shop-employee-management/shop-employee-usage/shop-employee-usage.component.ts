import { Component, Input, OnInit } from '@angular/core';
import { EmployeeManagementUsageType } from 'src/app/interface';

@Component({
  selector: 'shop-employee-usage',
  templateUrl: './shop-employee-usage.component.html',
  styleUrls: ['./shop-employee-usage.component.scss'],
})
export class ShopEmployeeUsageComponent implements OnInit {
  @Input() usage: EmployeeManagementUsageType = {
    currentActiveUsers: 0,
    currentDeactiveUsers: 0,
    maximumUsers: 0,
  };
  constructor() {}

  ngOnInit() {}
}
