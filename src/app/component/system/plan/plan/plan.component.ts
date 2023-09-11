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
  public plan: PlanConfigurationType = this.planService.getDefaultPlan();

  constructor(
    private param: NavParams,
    private planService: PlanService,
    private global: GlobalService
  ) {
    let selectedPlan: PlanConfigurationType | undefined = this.param.get('plan');
    this.editMode = this.param.get('editMode') !== undefined ? this.param.get('editMode') : false;
    this.isReadonly = this.param.get('readOnly') !== undefined ? this.param.get('readOnly') : false;
    this.plan =
      this.editMode && selectedPlan !== undefined
        ? selectedPlan
        : this.planService.getDefaultPlan();
    this.plan =
      this.isReadonly && selectedPlan !== undefined
        ? selectedPlan
        : this.planService.getDefaultPlan();
  }

  ngOnInit() {}

  public async dismiss() {
    this.planService.modal.dismissModal();
  }

  public onNameChange() {
    this.plan.name = this.global.textTransform.getTitleFormat(this.plan.name);
  }

  public onChangeWeekPrice() {
    this.plan.weeklyPrice = this.planService.getTaxAndNetPrice(this.plan.weeklyPrice.total);
  }

  public onChangeMonthPrice() {
    this.plan.monthlyPrice = this.planService.getTaxAndNetPrice(this.plan.monthlyPrice.total);
  }

  public onChangeAnnualPrice() {
    this.plan.annuallyPrice = this.planService.getTaxAndNetPrice(this.plan.annuallyPrice.total);
  }

  public onChangeLimitedService() {
    this.plan.limitedService = this.global.numberTransform.nullReplaceToZero(
      this.plan.limitedService
    );
  }

  public onChangeLimitedProduct() {
    this.plan.limitedProduct = this.global.numberTransform.nullReplaceToZero(
      this.plan.limitedProduct
    );
  }

  public onChangeLimitedPackage() {
    this.plan.limitedPackage = this.global.numberTransform.nullReplaceToZero(
      this.plan.limitedPackage
    );
  }

  public onChangeLimitedUser() {
    this.plan.limitedUser = this.global.numberTransform.nullReplaceToZero(this.plan.limitedUser);
  }

  public async onClickSavePlanButton() {
    if (this.plan.name) {
      await this.planService.processSaveNewPlan(this.plan);
    }
  }

  public async onClickEditPlanButton() {
    if (this.plan.name) {
      await this.planService.processUpdatePlan(this.plan);
    }
  }
}
