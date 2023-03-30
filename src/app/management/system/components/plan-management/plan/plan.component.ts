import { TextTransformService } from './../../../../../shared/services/text-transform/text-transform.service';
import { PlanService } from './../../../../../service/system/plan/plan.service';
import { NavParams } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';

@Component({
  selector: 'plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  public editMode: boolean = false;
  public isReadonly: boolean = false;
  public plan : IPlanConfiguration = this.planService.getDefaultPlan();

  constructor(private param: NavParams, private planService: PlanService, private textTransform: TextTransformService){
    let selectedPlan: IPlanConfiguration | undefined = this.param.get('plan');
    this.editMode = this.param.get('editMode') !== undefined ? this.param.get('editMode') : false;
    this.isReadonly = this.param.get('readonly') !== undefined ? this.param.get('readonly') : false;
    this.plan = (this.editMode && selectedPlan !== undefined) ? selectedPlan : this.planService.getDefaultPlan();
    this.plan = (this.isReadonly && selectedPlan !== undefined) ? selectedPlan : this.planService.getDefaultPlan();
  }

  ngOnInit() {}

  public async dismiss(){
    this.planService.modal.dismissModal();
  }

  public onNameChange(){
    this.plan.name = this.textTransform.getTitleFormat(this.plan.name);
  }

  public onChangeWeekPrice(){
    this.plan.weeklyPrice = this.planService.getTaxAndNetPrice(this.plan.weeklyPrice.total);
  }

  public onChangeMonthPrice(){
    this.plan.monthlyPrice = this.planService.getTaxAndNetPrice(this.plan.monthlyPrice.total);
  }

  public onChangeAnnualPrice(){
    this.plan.annuallyPrice = this.planService.getTaxAndNetPrice(this.plan.annuallyPrice.total);
  }

  public onChangeLimitedService(){
    this.plan.limitedService = this.planService.numberValidatation.nullReplaceToZero(this.plan.limitedService);
  }

  public onChangeLimitedProduct(){
    this.plan.limitedProduct = this.planService.numberValidatation.nullReplaceToZero(this.plan.limitedProduct);
  }

  public onChangeLimitedPackage(){
    this.plan.limitedPackage = this.planService.numberValidatation.nullReplaceToZero(this.plan.limitedPackage);
  }

  public onChangeLimitedUser(){
    this.plan.limitedUser = this.planService.numberValidatation.nullReplaceToZero(this.plan.limitedUser);
  }

}
