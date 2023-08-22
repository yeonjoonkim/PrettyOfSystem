import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';
import { Observable } from 'rxjs';
import { PlanService } from '../../../../service/system/system-plan/plan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'system-plan-management',
  templateUrl: './plan-management.component.html',
  styleUrls: ['./plan-management.component.scss'],
})
export class PlanManagementComponent implements OnInit {
  public readonly planOptions: Observable<IPlanConfiguration[]> =
    this.planService.valueChangeListener();

  constructor(private planService: PlanService) {}

  ngOnInit() {}
}
