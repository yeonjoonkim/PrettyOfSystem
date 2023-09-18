import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { SystemPlanRepositoryService } from 'src/app/firebase/system-repository/plan/system-plan-repository.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { ShopConfigurationType } from 'src/app/interface/shop/shop.interface';
import { NameValuePairType } from 'src/app/interface/global/global.interface';
import { ShopModalService } from './shop-modal/shop-modal.service';

@Injectable({
  providedIn: 'root',
})
export class SystemShopService {
  constructor(
    public modal: ShopModalService,
    private _systemShopConfigRepo: SystemShopConfigurationRepositoryService,
    private _systemPlanRepo: SystemPlanRepositoryService
  ) {}

  public getAllShopConfigurations(): Observable<ShopConfigurationType[]> {
    return this._systemShopConfigRepo.getAllShopConfigurations();
  }

  public async getSystemShopCategoryList() {
    return await lastValueFrom(this._systemShopConfigRepo.getShopCategories());
  }

  public async getSystemShopCountryList() {
    return await lastValueFrom(this._systemShopConfigRepo.getSystemShopCountries());
  }

  public async getSystemShopPlanConfigList() {
    return await lastValueFrom(this._systemPlanRepo.getSystemPlanOptions());
  }

  public async getPlanPairNameValueList(): Promise<NameValuePairType[]> {
    let systemPlanConfigList = await this.getSystemShopPlanConfigList();

    return systemPlanConfigList.map(p => {
      return { name: p.name, value: p.id };
    });
  }
}
