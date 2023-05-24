import { Observable, firstValueFrom } from 'rxjs';
import { SystemPlanRepositoryService } from 'src/app/firebase/system-repository/plan/system-plan-repository.service';
import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';
import { IShopAddress, IShopCategory, IShopConfiguration, IShopCountry, IShopPlan, IShopWorkHours } from 'src/app/interface/system/shop/shop.interface';

export class ShopConfiguration implements IShopConfiguration{
  private readonly SystemPlanRepositoryService!: SystemPlanRepositoryService;
  public readonly planConfig: Observable<IPlanConfiguration | undefined> = this.SystemPlanRepositoryService.getSelectedPlan(this.plan.configurationId);
  constructor(
    public logoImg: string,
    public taxNumber: string,
    public name: string,
    public phoneNumber: number,
    public email: string,
    public active: boolean,
    public currentActiveUserCount: number,
    public currentActiveProductCount: number,
    public currentActiveServiceCount: number,
    public address: IShopAddress,
    public operatingHours: IShopWorkHours,
    public category: IShopCategory,
    public country: IShopCountry,
    public plan: IShopPlan
  ) {
  }

  public fullAddress(): string{
    let isAsianCountry: boolean = this.country.currency === 'JPY' || this.country.currency === 'CNY' || this.country.currency === 'KRW';

    return isAsianCountry ? this.address.state + " " + this.address.suburb + " " + this.address.line2 + " " + this.address.line1 + " " + this.address.postCode + " "
                          : this.address.line1 + " " + this.address.line2 + " " + this.address.suburb +" "+this.address.state + " " + this.address.postCode;
  }

  public callNumber():string{
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
