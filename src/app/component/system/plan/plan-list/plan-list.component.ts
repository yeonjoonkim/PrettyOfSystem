import { PlanService } from '../../../../service/system/system-plan/plan.service';
import { GlobalService } from 'src/app/shared/services/global/global.service';
import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss'],
})
export class PlanListComponent implements OnInit {
  @Input() planOptions: Observable<IPlanConfiguration[]> | undefined;
  constructor(public global: GlobalService, private planService: PlanService) {
  }

  ngOnInit() {}

  public async onClickAddPlan(){
    await this.planService.modal.presentAddPlan();
  }

  public async onClickEdit(config: IPlanConfiguration){
    await this.planService.modal.presentEditPlan(config);
  }

  public async onClickDelete(id: string, name: string){
    await this.planService.processDeletePlan(id, name);
  }


}