import { Injectable } from '@angular/core';
import { ShopService } from '../shop.service';
import { IShopSetting, ShopConfigurationType } from 'src/app/interface';
import { Observable, of, switchMap } from 'rxjs';
import { ShopSettingOptionService } from './shop-setting-option/shop-setting-option.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { PlanModalService } from '../../system/system-plan/plan-modal/plan-modal.service';
import { LoadingService } from '../../global/loading/loading.service';
import { ShopPictureRepositoryService } from 'src/app/firebase/shop-repository/shop-picture-repository/shop-picture-repository.service';

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
    private _planModal: PlanModalService,
    private _loading: LoadingService,
    private _pictureRepo: ShopPictureRepositoryService
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
      await this._loading.show();
      const update = await this.shopConfigRepo.updateShopConfiguration(config);
      await this._loading.dismiss();
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
    await this._loading.show();
    const update = await this.shopConfigRepo.updateShopConfiguration(config);
    await this._loading.dismiss();
    return update;
  }

  public async uploadPicture(
    logoFile: File | undefined,
    image1: File | undefined,
    image2: File | undefined,
    image3: File | undefined
  ) {
    const config = await this._shop.config();
    if (config !== null) {
      await this._loading.start('label.title.confirmingimages');
      const logoUrl =
        logoFile !== undefined
          ? await this._pictureRepo.uploadLogo(config.id, logoFile)
          : config.setting.picture.logo;
      const image1Url =
        image1 !== undefined
          ? await this._pictureRepo.uploadShopImage1(config.id, image1)
          : config.setting.picture.shopImage1;

      const image2Url =
        image2 !== undefined
          ? await this._pictureRepo.uploadShopImage2(config.id, image2)
          : config.setting.picture.shopImage2;
      const image3Url =
        image3 !== undefined
          ? await this._pictureRepo.uploadShopImage3(config.id, image3)
          : config.setting.picture.shopImage3;

      config.setting.picture.logo = logoUrl !== null ? logoUrl : config.setting.picture.logo;
      config.setting.picture.shopImage1 =
        image1Url !== null ? image1Url : config.setting.picture.shopImage1;
      config.setting.picture.shopImage2 =
        image2Url !== null ? image2Url : config.setting.picture.shopImage2;
      config.setting.picture.shopImage3 =
        image3Url !== null ? image3Url : config.setting.picture.shopImage3;

      const updated = await this.shopConfigRepo.updateShopConfiguration(config);
      await this._loading.end();
      return updated;
    } else {
      return false;
    }
  }
}
