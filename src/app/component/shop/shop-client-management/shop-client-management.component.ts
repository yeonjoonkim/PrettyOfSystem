import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ShopClientManagementService } from 'src/app/service/shop/shop-client-management/shop-client-management.service';

@Component({
  selector: 'shop-client-management',
  templateUrl: './shop-client-management.component.html',
  styleUrls: ['./shop-client-management.component.scss'],
})
export class ShopClientManagementComponent implements OnInit {
  @Output() onRequestNewClientPhoneNumber = new EventEmitter<string>();
  constructor(private _shopClient: ShopClientManagementService) {}

  ngOnInit() {}
}
