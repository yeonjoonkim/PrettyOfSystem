import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PairValueIdType } from 'src/app/interface/global/global.interface';
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
  public planPairIdValueList!: PairValueIdType[];
  public selectedPlanPairIdValue!: PairValueIdType;
  public loading: boolean = true;

  constructor(private systemShopService: SystemShopService) {}

  async ngOnInit() {
    this.planPairIdValueList = await this.systemShopService.getPlanPairValueIdList();
    this.setDefaultPlanPairIdValue();
  }

  private setDefaultPlanPairIdValue() {
    let defaultPair = this.planPairIdValueList.find(p => p.id === this.selectedPlanId);
    this.validate = defaultPair !== undefined;
    if (defaultPair) {
      this.selectedPlanPairIdValue = defaultPair;
    }
    this.loading = false;
  }

  public onClickPlanPairIdValue() {
    this.planId = this.selectedPlanPairIdValue.id;
    this.validate = this.planId !== undefined;
  }
}
