import { PlanConfigurationType } from 'src/app/interface/system/plan/plan.interface';
import { lastValueFrom } from 'rxjs';
import { PlanService } from 'src/app/service/system/system-plan/plan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'system-plan-management',
  templateUrl: './plan-management.component.html',
  styleUrls: ['./plan-management.component.scss'],
})
export class PlanManagementComponent implements OnInit {
  public planOptions: PlanConfigurationType[] = [];

  constructor(private planService: PlanService) {}

  async ngOnInit() {
    await this.setPlanOptions();
  }

  private async setPlanOptions() {
    let result = await lastValueFrom(this.planService.getPlanOptions());
    this.planOptions = result.sort(r => r.monthlyPrice.total);
  }

  public async refresh() {
    await this.setPlanOptions();
  }
}
