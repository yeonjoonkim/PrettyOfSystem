import { SystemPlanRepositoryService } from 'src/app/firebase/system-repository/plan/system-plan-repository.service';
import { PlanModalService } from './plan-modal/plan-modal.service';
import { PlanConfigurationType } from '../../../interface/system/plan/plan.interface';
import { Injectable } from '@angular/core';
import { PlanPriceType } from 'src/app/interface/system/plan/plan.interface';
import { GlobalService } from 'src/app/service/global/global.service';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private readonly _rateHolder: number = 1;
  private readonly _taxRate: number = 0.1;
  private readonly _netRate: number = this._rateHolder - this._taxRate;
  constructor(
    public modal: PlanModalService,
    private _planRepo: SystemPlanRepositoryService,
    private _global: GlobalService
  ) {}

  public getPlanOptions() {
    return this._planRepo.getSystemPlanOptions();
  }

  public valueChangeListener() {
    return this._planRepo.valueChangeListener();
  }

  public getDefaultPlan(): PlanConfigurationType {
    return {
      id: '',
      name: '',
      weeklyPrice: { tax: 0, net: 0, total: 0 },
      monthlyPrice: { tax: 0, net: 0, total: 0 },
      annuallyPrice: { tax: 0, net: 0, total: 0 },
      isPremium: false,
      isTestPlan: false,
      limitedService: 0,
      limitedProduct: 0,
      limitedPackage: 0,
      limitedUser: 0,
    };
  }

  public getTaxAndNetPrice(price: number): PlanPriceType {
    price = this._global.numberTransform.roundToDecimalPlaces(price, 2);
    return {
      tax: price ? this._global.numberTransform.roundToDecimalPlaces(price * this._taxRate, 2) : 0,
      net: price ? this._global.numberTransform.roundToDecimalPlaces(price * this._netRate, 2) : 0,
      total: price,
    };
  }

  public async processSaveNewPlan(planConfig: PlanConfigurationType) {
    let isSaved = await this._planRepo.addSystemPlanOption(planConfig);

    if (isSaved) {
      await this.modal.dissmissModalWithRefresh();
      await this.presentSaveMsg();
    } else {
      await this.presentSaveError();
    }
  }

  public async processUpdatePlan(planConfig: PlanConfigurationType) {
    let isUpdated = await this._planRepo.updateSystemPlanOption(planConfig);

    if (isUpdated) {
      await this.presentUpdateMsg();
      await this.modal.dissmissModalWithRefresh();
    } else {
      await this.presentUpdateError();
    }
  }

  public async processDeletePlan(selectedPlanId: string, selectedPlanName: string) {
    let deleteConfirmation = await this._global.confirmAlert.getDeleteConfirmationWithName(
      selectedPlanName
    );
    if (deleteConfirmation) {
      (await this._planRepo.deleteSystemPlanOption(selectedPlanId))
        ? await this.presentDeleteMsg()
        : await this.presentDeleteError();
    }
  }

  private async presentSaveMsg() {
    let msg = await this._global.language.transform('messagesuccess.title.save');
    await this._global.toast.present(msg);
  }

  private async presentSaveError() {
    let msg = await this._global.language.transform('messageerror.title.unsaved');
    await this._global.toast.present(msg);
  }

  private async presentDeleteMsg() {
    let msg = await this._global.language.transform('messagesuccess.title.delete');
    await this._global.toast.present(msg);
  }

  private async presentDeleteError() {
    let msg = await this._global.language.transform('messageerror.title.delete');
    await this._global.toast.present(msg);
  }

  private async presentUpdateError() {
    let msg = await this._global.language.transform('messageerror.title.updated');
    await this._global.toast.present(msg);
  }

  private async presentUpdateMsg() {
    let msg = await this._global.language.transform('messagesuccess.title.update');
    await this._global.toast.present(msg);
  }
}
