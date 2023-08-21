import { Component, Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { SystemPlanRepositoryService } from 'src/app/firebase/system-repository/plan/system-plan-repository.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';
import { IShopCategory, IShopConfiguration, IShopCountry } from 'src/app/interface/system/shop/shop.interface';
import { IPairValueId } from 'src/app/interface/system/system.interface';
import { GlobalService } from 'src/app/shared/services/global/global.service';
import { ShopModalService } from './shop-modal/shop-modal.service';
import { IUserAssociatedShop } from 'src/app/interface/user/user.interface';
import { SystemUserService } from '../system-user/system-user.service';

@Injectable({
  providedIn: 'root'
})
export class SystemShopService {
  private readonly systemShopCategoryList!: Observable<IShopCategory[]>;
  private readonly systemShopCountryList!: Observable<IShopCountry[]>;
  private readonly systemShopPlanConfigList!: Observable<IPlanConfiguration[]>;
  constructor(
    public modal: ShopModalService,
    private systemShopConfigRepo: SystemShopConfigurationRepositoryService,
    private systemPlanRepo: SystemPlanRepositoryService,
    private global: GlobalService) {
    this.systemShopCategoryList = this.systemShopConfigRepo.getShopCategories();
    this.systemShopCountryList = this.systemShopConfigRepo.getSystemShopCountries();
    this.systemShopPlanConfigList = this.systemPlanRepo.getSystemPlanOptions();
  }

  public shopConfigurationValueChangeListener(): Observable<IShopConfiguration[]>{
    return this.systemShopConfigRepo.shopConfigurationValueChangeListener();
  }

  public async getSystemShopCategoryList(){
    return await lastValueFrom(this.systemShopCategoryList);
  }

  public async getSystemShopCountryList(){
    return await lastValueFrom(this.systemShopCountryList);
  }

  public async getSystemShopPlanConfigList(){
    return await lastValueFrom(this.systemShopPlanConfigList);
  }

  public async getCategoryPairValueIdList(): Promise<IPairValueId[]> {
    let categoryList: IShopCategory[] = [];
    let systemCategoryList = await this.getSystemShopCategoryList();

    for (let category of systemCategoryList) {
      category.name = await this.global.language.transform(category.name);
      categoryList.push(category);
    }

    return categoryList.map(c => {
      return {id: c.id, value: c.name}
    });
  }

  public async getPlanPairValueIdList(): Promise<IPairValueId[]> {
    let systemPlanConfigList = await this.getSystemShopPlanConfigList();

    return  systemPlanConfigList.map(
      p => { return {value: p.name, id: p.id }}
      );
  }
  
  public async getCountryPairValueIdList(){
    let countryList: IShopCountry[] = [];
    let systemCountryList = await this.getSystemShopCountryList();
    for (let country of systemCountryList) {
      country.name = await this.global.language.transform(country.name);
      countryList.push(country);
    }

    return countryList.map(c => {
      return {id: c.id, value: c.name}
    });
  }
}