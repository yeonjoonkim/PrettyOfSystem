import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { SystemPlanRepositoryService } from 'src/app/firebase/system-repository/plan/system-plan-repository.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import {
  IShopCategory,
  IShopConfiguration,
  IShopCountry,
} from 'src/app/interface/shop/shop.interface';
import { PairNameValueType, PairValueIdType } from 'src/app/interface/global/global.interface';
import { GlobalService } from '../../../service/global/global.service';
import { ShopModalService } from './shop-modal/shop-modal.service';

@Injectable({
  providedIn: 'root',
})
export class SystemShopService {
  constructor(
    public modal: ShopModalService,
    private systemShopConfigRepo: SystemShopConfigurationRepositoryService,
    private systemPlanRepo: SystemPlanRepositoryService,
    private global: GlobalService
  ) {}

  public getAllShopConfigurations(): Observable<IShopConfiguration[]> {
    return this.systemShopConfigRepo.getAllShopConfigurations();
  }

  public async getSystemShopCategoryList() {
    return await lastValueFrom(this.systemShopConfigRepo.getShopCategories());
  }

  public async getSystemShopCountryList() {
    return await lastValueFrom(this.systemShopConfigRepo.getSystemShopCountries());
  }

  public async getSystemShopPlanConfigList() {
    return await lastValueFrom(this.systemPlanRepo.getSystemPlanOptions());
  }

  public async getPlanPairNameValueList(): Promise<PairNameValueType[]> {
    let systemPlanConfigList = await this.getSystemShopPlanConfigList();

    return systemPlanConfigList.map(p => {
      return { name: p.name, value: p.id };
    });
  }
}
