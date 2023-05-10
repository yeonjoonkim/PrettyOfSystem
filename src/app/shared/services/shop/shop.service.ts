import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { SystemPlanRepositoryService } from 'src/app/firebase/system-repository/plan/system-plan-repository.service';
import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';
import { IShopCategory, IShopConfiguration, IShopCountry, IShopPlan } from 'src/app/interface/system/shop/shop.interface';

export class ShopConfiguration implements IShopConfiguration{
  private readonly planConfig: Observable<IPlanConfiguration | undefined> = this.systemPlanRepo.getSelectedPlan(this.plan.configurationId);
  constructor(
    public name: string,
    public phoneNumber: number,
    public emailAddress: string,
    public address1: string,
    public address2: string,
    public suburb: string,
    public state: string,
    public postCode: number,
    public active: boolean,
    public currentActiveUserCount: number,
    public currentActiveProductCount: number,
    public currentActiveServiceCount: number,
    public category: IShopCategory,
    public country: IShopCountry,
    public plan: IShopPlan,
    private systemPlanRepo: SystemPlanRepositoryService
  ) {
  }


  public fullAddress(): string{
    let isAsianCountry: boolean = this.country.currency === 'JPY' || this.country.currency === 'CNY' || this.country.currency === 'KRW';

    return isAsianCountry ? this.state + " " + this.suburb + " " + this.address2 + " " + this.address1 + " " + this.postCode + " "
                          : this.address1 + " " + this.address2 + " " + this.suburb +" "+this.state + " " + this.postCode;
  }

  public call():string{
    return this.country.prefixedPhoneCode + this.phoneNumber.toString();
  }

  public async isPremiumPlan(): Promise<boolean>{
    let planConfig: IPlanConfiguration | undefined = await this.getCurrentPlanConfig();
    return planConfig?.isPremium ? true : false;
  }

  public async isMaximumUser(): Promise<boolean>{
    let planConfig: IPlanConfiguration | undefined = await this.getCurrentPlanConfig();
    return planConfig?.limitedUser ? planConfig?.limitedUser <= this.currentActiveUserCount : true;
  }

  public async isMaximumProduct(): Promise<boolean>{
    let planConfig: IPlanConfiguration | undefined = await this.getCurrentPlanConfig();
    return planConfig?.limitedProduct ? planConfig?.limitedProduct <= this.currentActiveProductCount : true;
  }

  public async isMaximumService(): Promise<boolean>{
    let planConfig: IPlanConfiguration | undefined = await this.getCurrentPlanConfig();
    return planConfig?.limitedService ? planConfig?.limitedService <= this.currentActiveServiceCount : true;
  }

  private async getCurrentPlanConfig(): Promise<IPlanConfiguration | undefined>{
    return await firstValueFrom(this.planConfig);
  }
}
