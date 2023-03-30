import { PlanModalService } from './plan-modal/plan-modal.service';
import { IPlanConfiguration } from './../../../interface/system/plan/plan.interface';
import { Injectable } from '@angular/core';
import { IPlanPrice } from 'src/app/interface/system/plan/plan.interface';
import { NumberValidationService } from 'src/app/shared/services/number-validation/number-validation.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private readonly rateHolder: number = 1;
  private readonly taxRate: number = 0.1;
  private readonly netRate: number = this.rateHolder - this.taxRate;
  constructor(public modal: PlanModalService, public numberValidatation: NumberValidationService) { }

  public getDefaultPlan(): IPlanConfiguration{
    return { id: '', name: '',
      weeklyPrice: { tax: 0, net: 0, total: 0 },
      monthlyPrice: { tax: 0, net: 0, total: 0 },
      annuallyPrice: { tax: 0, net: 0, total: 0 },
      isPremium: false,
      limitedService: 0,
      limitedProduct: 0,
      limitedPackage: 0,
      limitedUser: 0,
    };
  }

  public getTaxAndNetPrice(price: number): IPlanPrice{
    price = this.numberValidatation.roundToDecimalPlaces(price, 2);
    return {
      tax: price ? this.numberValidatation.roundToDecimalPlaces(price * this.taxRate, 2) : 0,
      net: price ? this.numberValidatation.roundToDecimalPlaces(price * this.netRate, 2) : 0,
      total: price
    }
  }
}
