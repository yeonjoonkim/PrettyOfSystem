import { Observable, firstValueFrom } from 'rxjs';
import { SystemPlanRepositoryService } from 'src/app/firebase/system-repository/plan/system-plan-repository.service';
import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';
import { IShopCategory, IShopConfiguration, IShopCountry, IShopPlan, IShopWorkHours } from 'src/app/interface/system/shop/shop.interface';
import { IAddress } from 'src/app/interface/global/global.interface';
import * as Constant from './../../global/global-constant';
import { IShopSetting } from 'src/app/interface/system/shop/shop-setting.interface';
export class ShopConfiguration implements IShopConfiguration{
  private readonly SystemPlanRepositoryService!: SystemPlanRepositoryService;
  public readonly planConfig: Observable<IPlanConfiguration | undefined> = this.SystemPlanRepositoryService.getSelectedPlan(this.plan.configurationId);
  constructor(
    public id: string,
    public logoImg: any,
    public taxNumber: string,
    public name: string,
    public phoneNumber: string,
    public email: string,
    public active: boolean,
    public currentActiveUserCount: number,
    public currentActiveProductCount: number,
    public currentActiveServiceCount: number,
    public address: IAddress,
    public operatingHours: IShopWorkHours,
    public category: IShopCategory,
    public country: IShopCountry,
    public plan: IShopPlan,
    public setting: IShopSetting
  ) {
  }

  public fullAddress(): string{
    let isAsianCountry: boolean = this.country.currency === Constant.Default.CurrencyType.CNY
                                || this.country.currency === Constant.Default.CurrencyType.JPY
                                || this.country.currency === Constant.Default.CurrencyType.KRW;

    return isAsianCountry ? this.address.state + " " + this.address.suburb + " " + this.address.street +  " " + this.address.postCode + " "
                          : this.address.street + " " + this.address.suburb +" "+this.address.state + " " + this.address.postCode;
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

  private getIShopSetting(): IShopSetting{
    let setting: IShopSetting = {
      reservationScheduler: { isEnabled: false, intervalMin: 0}
    }
    return setting;
  }

  private async setDefaultShopSetting(){
    let setting: IShopSetting = this.getIShopSetting();
    //General
    //setting.general.taxRate = setting?.general?.taxRate ?? Constant.Setting.ShopSetting.General.TaxRate;
        //Reversion Scheduler
    setting.reservationScheduler.isEnabled = Constant.Setting.ShopSetting.ReservationScheduler.IsEnabled;
    setting.reservationScheduler.intervalMin = Constant.Setting.ShopSetting.ReservationScheduler.intervalMin;
    return setting;
  }
}
