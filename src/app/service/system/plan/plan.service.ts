import { PlanModalService } from './plan-modal/plan-modal.service';
import { IPlanConfiguration } from './../../../interface/system/plan/plan.interface';
import { Injectable } from '@angular/core';
import { IPlanPrice } from 'src/app/interface/system/plan/plan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(public modal: PlanModalService) { }

  public getDefaultPlan(): IPlanConfiguration{
    return { id: '', name: '',
      weeklyPrice: { tax: 0, net: 0, total: 0 },
      monthlyPrice: { tax: 0, net: 0, total: 0 },
      annuallyPrice: { tax: 0, net: 0, total: 0 },
      isPremium: false,
      limitedService: 0,
      limitedProduct: 0,
      limitedUser: 0,
    };
  }
}
