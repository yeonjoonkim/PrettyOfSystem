import { DeleteConfirmationAlert } from './../../../shared/services/delete-confirmation-alert/delete-confirmation-alert.service';
import { ToastService } from './../../../shared/services/toast/toast.service';
import { LanguageService } from 'src/app/shared/services/language/language.service';
import { SystemPlanRepositoryService } from './../../../firebase/system-repository/plan/system-plan-repository.service';
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
  constructor(
    public modal: PlanModalService,
    public numberValidatation: NumberValidationService,
    private planRepo: SystemPlanRepositoryService,
    private toast: ToastService,
    private language: LanguageService,
    private deleteConfirmation: DeleteConfirmationAlert) { }

  public subscribeAllPlanOptions(){
    return this.planRepo.getSystemPlanOptions();
  }

  public getDefaultPlan(): IPlanConfiguration{
    return { id: '', name: '',
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

  public getTaxAndNetPrice(price: number): IPlanPrice{
    price = this.numberValidatation.roundToDecimalPlaces(price, 2);
    return {
      tax: price ? this.numberValidatation.roundToDecimalPlaces(price * this.taxRate, 2) : 0,
      net: price ? this.numberValidatation.roundToDecimalPlaces(price * this.netRate, 2) : 0,
      total: price
    }
  }

  public async processSaveNewPlan(planConfig: IPlanConfiguration){
    let isSaved = await this.planRepo.addSystemPlanOption(planConfig);

    if(isSaved){
      await this.presentSaveMsg();
      await this.modal.dismissModal();
    }else{
      await this.presentSaveError();
    }
  }

  public async processUpdatePlan(planConfig: IPlanConfiguration){
    let isUpdated = await this.planRepo.updateSystemPlanOption(planConfig);

    if(isUpdated){
      await this.presentUpdateMsg();
      await this.modal.dismissModal();
    }else{
      await this.presentUpdateError();
    }
  }

  public async processDeletePlan(selectedPlanId: string, selectedPlanName: string){
    let deleteConfirmation = await this.deleteConfirmation.getdeleteConfirmation(selectedPlanName);
    if(deleteConfirmation){
      await this.planRepo.deleteSystemPlanOption(selectedPlanId) ? await this.presentDeleteMsg(): await this.presentDeleteError();
    }
  }

  private async presentSaveMsg(){
    let msg = await this.language.transform('message.success.save');
    await this.toast.present(msg);
  }

  private async presentSaveError(){
    let msg = await this.language.transform('message.error.unsaved');
    await this.toast.present(msg);
  }

  private async presentDeleteMsg(){
    let msg = await this.language.transform('message.success.delete');
    await this.toast.present(msg);
  }

  private async presentDeleteError(){
    let msg = await this.language.transform('message.error.delete');
    await this.toast.present(msg);
  }

  private async presentUpdateError(){
    let msg = await this.language.transform('message.error.updated');
    await this.toast.present(msg);
  }

  private async presentUpdateMsg(){
    let msg = await this.language.transform('message.success.update');
    await this.toast.present(msg);
  }
}
