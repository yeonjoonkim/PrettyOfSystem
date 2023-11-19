import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { ShopConfigurationType } from 'src/app/interface/shop/shop.interface';
import { ShopModalService } from './shop-modal/shop-modal.service';
import { SystemShopCapacityRepositoryService } from 'src/app/firebase/system-repository/system-shop-capacity/system-shop-capacity-repository.service';

@Injectable({
  providedIn: 'root',
})
export class SystemShopService {
  constructor(
    public modal: ShopModalService,
    private _systemShopConfigRepo: SystemShopConfigurationRepositoryService,
    private _systemShopCapacityRepo: SystemShopCapacityRepositoryService
  ) {}

  public getAllShopConfigurations(): Observable<ShopConfigurationType[]> {
    return this._systemShopConfigRepo.allShopConfigurationGetListener();
  }

  public async getSystemShopCategoryList() {
    return await lastValueFrom(this._systemShopConfigRepo.categoryListener());
  }

  public async getSystemShopCountryList() {
    return await lastValueFrom(this._systemShopConfigRepo.countryListener());
  }

  public async getSystemCapacityList() {
    return await lastValueFrom(this._systemShopCapacityRepo.capacitiesValueChangeListener());
  }
}
