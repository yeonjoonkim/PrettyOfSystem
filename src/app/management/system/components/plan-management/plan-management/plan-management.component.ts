import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';
import { Observable } from 'rxjs';
import { PlanService } from './../../../../../service/system/plan/plan.service';
import { Component, OnInit } from '@angular/core';
import { CellClickEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'plan-management',
  templateUrl: './plan-management.component.html',
  styleUrls: ['./plan-management.component.scss'],
})
export class PlanManagementComponent implements OnInit {
  public readonly planOptions: Observable<IPlanConfiguration[]> = this.planService.subscribeAllPlanOptions();


  constructor(private planService: PlanService) {
  }

  ngOnInit() {
  }

  public async onClickAddPlan(){
    await this.planService.modal.presentAddPlan();
  }

  public async onClickCell(event: CellClickEvent){
    await this.planService.modal.presentEditPlan(event.dataItem);
  }

}
