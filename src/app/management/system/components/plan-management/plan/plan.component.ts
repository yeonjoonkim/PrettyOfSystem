import { PlanService } from './../../../../../service/system/plan/plan.service';
import { NavParams } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';

@Component({
  selector: 'plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  public editMode: boolean = false;
  public plan : IPlanConfiguration = this.planService.getDefaultPlan();

  constructor(private param: NavParams, private planService: PlanService){
    let selectedPlan: IPlanConfiguration | undefined = this.param.get('plan');
    this.editMode = this.param.get('editMode') !== undefined ? this.param.get('editMode') : false;
    this.plan = (this.editMode && selectedPlan !== undefined) ? selectedPlan : this.planService.getDefaultPlan();
  }

  ngOnInit() {}

  public async dismiss(){
    this.planService.modal.dismissModal();
  }

}
