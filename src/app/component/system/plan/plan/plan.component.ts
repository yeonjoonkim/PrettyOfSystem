import { PlanService } from 'src/app/service/system/system-plan/plan.service';
import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PlanConfigurationType } from 'src/app/interface/system/plan/plan.interface';
import { GlobalService } from 'src/app/service/global/global.service';
@Component({
  selector: 'plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  public editMode: boolean = false;
  public isReadonly: boolean = false;
  public plan: PlanConfigurationType = this._planService.getDefaultPlan();

  constructor(
    private _navParam: NavParams,
    private _planService: PlanService,
    private _global: GlobalService
  ) {
    let selectedPlan: PlanConfigurationType | undefined = this._navParam.get('plan');
    this.editMode =
      this._navParam.get('editMode') !== undefined ? this._navParam.get('editMode') : false;
    this.isReadonly =
      this._navParam.get('readOnly') !== undefined ? this._navParam.get('readOnly') : false;
    this.plan =
      this.editMode && selectedPlan !== undefined
        ? selectedPlan
        : this._planService.getDefaultPlan();
    this.plan =
      this.isReadonly && selectedPlan !== undefined
        ? selectedPlan
        : this._planService.getDefaultPlan();
  }

  ngOnInit() {}

  public async dismiss() {
    await this._planService.modal.dismissModal();
  }

  public onNameChange() {
    this.plan.name = this._global.textTransform.getTitleFormat(this.plan.name);
  }

  public onChangeWeekPrice() {
    this.plan.weeklyPrice = this._planService.getTaxAndNetPrice(this.plan.weeklyPrice.total);
  }

  public onChangeMonthPrice() {
    this.plan.monthlyPrice = this._planService.getTaxAndNetPrice(this.plan.monthlyPrice.total);
  }

  public onChangeAnnualPrice() {
    this.plan.annuallyPrice = this._planService.getTaxAndNetPrice(this.plan.annuallyPrice.total);
  }

  public onChangeLimitedService() {
    this.plan.limitedService = this._global.numberTransform.nullReplaceToZero(
      this.plan.limitedService
    );
  }

  public onChangeLimitedCoupon() {
    this.plan.limitedCoupon = this._global.numberTransform.nullReplaceToZero(
      this.plan.limitedCoupon
    );
  }

  public onChangeLimitedExtra() {
    this.plan.limitedExtra = this._global.numberTransform.nullReplaceToZero(this.plan.limitedExtra);
  }

  public onChangeLimitedProduct() {
    this.plan.limitedProduct = this._global.numberTransform.nullReplaceToZero(
      this.plan.limitedProduct
    );
  }

  public onChangeLimitedPackage() {
    this.plan.limitedPackage = this._global.numberTransform.nullReplaceToZero(
      this.plan.limitedPackage
    );
  }

  public onChangeLimitedUser() {
    this.plan.limitedUser = this._global.numberTransform.nullReplaceToZero(this.plan.limitedUser);
  }

  public async onClickSavePlanButton() {
    if (this.plan.name) {
      await this._planService.processSaveNewPlan(this.plan);
    }
  }

  public async onClickEditPlanButton() {
    if (this.plan.name) {
      await this._planService.processUpdatePlan(this.plan);
    }
  }
}
