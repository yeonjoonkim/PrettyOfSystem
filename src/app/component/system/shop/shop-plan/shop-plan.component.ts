import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PairNameValueType, PairValueIdType } from 'src/app/interface/global/global.interface';
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
    return this.selectedPlanId;
  }
  set planId(value: string) {
    this.selectedPlanId = value;
    if (!this.loading) {
      this.planIdChange.emit(this.selectedPlanId);
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
  private selectedPlanId: string = '';
  public validated: boolean = false;
  public planPairNameValueList!: PairNameValueType[];
  public selectedPlanPairNameValue!: PairNameValueType;
  public loading: boolean = true;

  constructor(private systemShopService: SystemShopService) {}

  async ngOnInit() {
    this.planPairNameValueList = await this.systemShopService.getPlanPairNameValueList();
    this.setDefaultPlanPairIdValue();
  }

  private setDefaultPlanPairIdValue() {
    let defaultPair = this.planPairNameValueList.find(p => p.value === this.selectedPlanId);
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
