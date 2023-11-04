import { Injectable } from '@angular/core';
import { ShopService } from '../shop.service';
import { IShopSetting, ShopConfigurationType } from 'src/app/interface';
import { Observable, of, switchMap } from 'rxjs';
import { ShopSettingOptionService } from './shop-setting-option/shop-setting-option.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { PlanModalService } from '../../system/system-plan/plan-modal/plan-modal.service';

@Injectable({
  providedIn: 'root',
})
export class ShopSettingService {
  public config$!: Observable<ShopConfigurationType | null>;
  public setting$!: Observable<IShopSetting | null>;
  public timezone$!: Observable<string | null>;
  constructor(
    private _shop: ShopService,
    public option: ShopSettingOptionService,
    private shopConfigRepo: SystemShopConfigurationRepositoryService,
    private _planModal: PlanModalService
  ) {
    this.config$ = this._shop.config$;
    this.setting();
    this.timezone();
  }

  private setting() {
    this.setting$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return of(config.setting);
        } else {
          return of(null);
        }
      })
    );
  }

  private timezone() {
    this.timezone$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return of(config.timezone);
        } else {
          return of(null);
        }
      })
    );
  }

  public async update(setting: IShopSetting) {
    let config = await this._shop.config();
    if (config !== null) {
      config.setting = setting;
      const update = await this.shopConfigRepo.updateShopConfiguration(config);
      return update;
    } else {
      return false;
    }
  }

  public async openPlan() {
    const plan = await this._shop.plan();
    if (plan !== null) {
      return await this._planModal.presentViewPlan(plan);
    } else {
      return null;
    }
  }

  public async updateConfig(config: ShopConfigurationType) {
    const update = await this.shopConfigRepo.updateShopConfiguration(config);
    return update;
  }
}
