import { PlanService } from './../../../../../service/system/plan/plan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plan-management',
  templateUrl: './plan-management.component.html',
  styleUrls: ['./plan-management.component.scss'],
})
export class PlanManagementComponent implements OnInit {

  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.onClickAddPlan();
  }

  public async onClickAddPlan(){
    await this.planService.modal.presentAddPlan();
  }

}
