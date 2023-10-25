import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'app-shop-employee-management',
  templateUrl: './shop-employee-management.page.html',
  styleUrls: ['./shop-employee-management.page.scss'],
})
export class ShopEmployeeManagementPage implements OnInit {
  constructor(private _global: GlobalService) {}

  ngOnInit() {
    this._global.loading.init();
  }
}
