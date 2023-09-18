import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NameValuePairType } from 'src/app/interface/global/global.interface';
import { SystemShopService } from 'src/app/service/system/system-shop/system-shop.service';
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'shop-plan',
  templateUrl: './shop-plan.component.html',
  styleUrls: ['./shop-plan.component.scss'],
})
export class ShopPlanComponent implements OnInit {
  @Output() planIdChange = new EventEmitter<string>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() readOnly: boolean = false;
  @Input() mode: Constant.ComponentModeType = Constant.Default.ComponentMode.Form;
  @Input()
  get planId() {
    return this._selectedPlanId;
  }
  set planId(value: string) {
    this._selectedPlanId = value;
    if (!this.loading) {
      this.planIdChange.emit(this._selectedPlanId);
    }
  }
  @Input()
  get validate() {
    return this.validated;
  }
  set validate(value: boolean) {
    this.validated = value;
    this.validateChange.emit(this.validated);
  }
  public validated: boolean = false;
  public planPairNameValueList!: NameValuePairType[];
  public selectedPlanPairNameValue!: NameValuePairType;
  public loading: boolean = true;
  private _selectedPlanId: string = '';

  constructor(private _systemShopService: SystemShopService) {}

  async ngOnInit() {
    this.planPairNameValueList = await this._systemShopService.getPlanPairNameValueList();
    this.setDefaultPlanPairIdValue();
  }

  private setDefaultPlanPairIdValue() {
    let defaultPair = this.planPairNameValueList.find(p => p.value === this._selectedPlanId);
    this.validate = defaultPair !== undefined;
    if (defaultPair) {
      this.selectedPlanPairNameValue = defaultPair;
    }
    this.loading = false;
  }

  public onClickPlan() {
    this.planId = this.selectedPlanPairNameValue.value;
    this.validate = this.planId !== undefined;
  }
}
