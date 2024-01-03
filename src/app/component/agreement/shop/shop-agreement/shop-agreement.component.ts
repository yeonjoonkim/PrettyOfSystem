import { Component, Input, OnInit } from '@angular/core';
import { ShopCategoryType } from 'src/app/interface';

@Component({
  selector: 'shop-agreement',
  templateUrl: './shop-agreement.component.html',
  styleUrls: ['./shop-agreement.component.scss'],
})
export class ShopAgreementComponent implements OnInit {
  @Input() category!: ShopCategoryType;
  constructor() {}

  ngOnInit() {}
}
