import { Injectable } from '@angular/core';
import { ShopService } from '../shop.service';
import {
  IShopSetting,
  ShopCapacityType,
  ShopConfigurationType,
  ShopUpdateContactProp,
  ShopWorkHoursType,
} from 'src/app/interface';
import { Observable, of, switchMap } from 'rxjs';
import { ShopSettingOptionService } from './shop-setting-option/shop-setting-option.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { LoadingService } from '../../global/loading/loading.service';
import { ShopPictureRepositoryService } from 'src/app/firebase/shop-repository/shop-picture-repository/shop-picture-repository.service';
import * as Constant from 'src/app/constant/constant';
import { TextTransformService } from '../../global/text-transform/text-transform.service';
@Injectable({
  providedIn: 'root',
})
export class ShopSettingService {
  public config$!: Observable<ShopConfigurationType | null>;
  public setting$!: Observable<IShopSetting | null>;
  public timezone$!: Observable<string | null>;
  public logoImage$!: Observable<Blob | null>;
  public shopImage1$!: Observable<Blob | null>;
  public shopImage2$!: Observable<Blob | null>;
  public shopImage3$!: Observable<Blob | null>;
  public capacity$!: Observable<ShopCapacityType | null>;
  public otuId$!: Observable<string | null>;

  constructor(
    private _shop: ShopService,
    public option: ShopSettingOptionService,
    private shopConfigRepo: SystemShopConfigurationRepositoryService,
    private _loading: LoadingService,
    private _pictureRepo: ShopPictureRepositoryService,
    private _textTransform: TextTransformService
  ) {
    this.config$ = this._shop.config$;
    this.capacity$ = this._shop.capacity$;
    this.logoImage$ = this._shop.logoImage$;
    this.shopImage1$ = this._shop.shopImage1$;
    this.shopImage2$ = this._shop.shopImage2$;
    this.shopImage3$ = this._shop.shopImage3$;
    this.setting();
    this.timezone();
    this.otuId();
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

  private otuId() {
    this.otuId$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return of(config.oneTimeCheckInUrlId);
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

  public async updateCheckIn(expiredMin: number, id: string) {
    let config = await this._shop.config();
    if (config !== null) {
      config.oneTimeCheckInUrlId = id;
      config.setting.qrCode.oneTimeCheckInUrlExpiryMin = expiredMin;
      await this._loading.show();
      const update = await this.shopConfigRepo.updateShopConfiguration(config);
      await this._loading.dismiss();
      return update;
    } else {
      return false;
    }
  }

  public async updateOperatingHours(operatingHours: ShopWorkHoursType) {
    let config = await this._shop.config();
    if (config !== null) {
      config.operatingHours = operatingHours;
      await this._loading.show();
      const update = await this.shopConfigRepo.updateShopConfiguration(config);
      await this._loading.dismiss();
      return update;
    } else {
      return false;
    }
  }

  public async updateContact(prop: ShopUpdateContactProp) {
    let config = await this._shop.config();
    if (config !== null) {
      config.name = this._textTransform.getTitleFormat(prop.name);
      config.taxNumber = prop.taxNumber;
      config.phoneNumber = prop.phone;
      config.email = prop.email;
      config.address = prop.address;
      await this._loading.show();
      const update = await this.shopConfigRepo.updateShopConfiguration(config);
      await this._loading.dismiss();
      return update;
    } else {
      return false;
    }
  }

  public async uploadPicture(
    logoFile: File | undefined,
    image1: File | undefined,
    image2: File | undefined,
    image3: File | undefined
  ) {
    let config = await this._shop.config();
    if (config !== null) {
      await this._loading.start('label.title.confirmingimages');

      await this._loading.changeMessage('label.title.logo');
      const logo = await this.handleUploadLogoImage(logoFile, config.id, config.setting.picture.logo);
      await this._loading.changeMessage('label.title.picture');
      const i1 = await this.handleUploadImage1(image1, config.id, config.setting.picture.shopImage1);
      const i2 = await this.handleUploadImage2(image2, config.id, config.setting.picture.shopImage2);
      const i3 = await this.handleUploadImage3(image3, config.id, config.setting.picture.shopImage3);

      config.setting.picture.logo = logo !== null ? logo : config.setting.picture.logo;
      config.setting.picture.shopImage1 = i1 !== null ? i1 : config.setting.picture.shopImage1;
      config.setting.picture.shopImage2 = i2 !== null ? i2 : config.setting.picture.shopImage2;
      config.setting.picture.shopImage3 = i3 !== null ? i3 : config.setting.picture.shopImage3;

      const updated = await this.shopConfigRepo.updateShopConfiguration(config);
      await this._loading.end();
      return updated;
    } else {
      return false;
    }
  }

  private async handleUploadLogoImage(logoFile: File | undefined, shopId: string, current: string) {
    const isPlaceholder = current === Constant.ShopSetting.Picture.Placeholder;
    if (logoFile !== undefined) {
      if (!isPlaceholder) {
        await this._loading.changeMessage('label.title.deletingpreviousimage');
        const deleted = await this._pictureRepo.deleteFile(current);
        if (!deleted) {
          return current;
        }
      }
      await this._loading.changeMessage('label.title.savingimage');
      return await this._pictureRepo.uploadLogo(shopId, logoFile);
    } else {
      return current;
    }
  }

  private async handleUploadImage1(image: File | undefined, shopId: string, current: string) {
    const isPlaceholder = current === Constant.ShopSetting.Picture.Placeholder;
    if (image !== undefined) {
      if (!isPlaceholder) {
        await this._loading.changeMessage('label.title.deletingpreviousimage');
        const deleted = await this._pictureRepo.deleteFile(current);
        if (!deleted) {
          return current;
        }
      }
      await this._loading.changeMessage('label.title.savingimage');
      return await this._pictureRepo.uploadShopImage1(shopId, image);
    } else {
      return current;
    }
  }

  private async handleUploadImage2(logoFile: File | undefined, shopId: string, current: string) {
    const isPlaceholder = current === Constant.ShopSetting.Picture.Placeholder;
    if (logoFile !== undefined) {
      if (!isPlaceholder) {
        await this._loading.changeMessage('label.title.deletingpreviousimage');
        const deleted = await this._pictureRepo.deleteFile(current);
        if (!deleted) {
          return current;
        }
      }

      await this._loading.changeMessage('label.title.savingimage');
      return await this._pictureRepo.uploadShopImage2(shopId, logoFile);
    } else {
      return current;
    }
  }

  private async handleUploadImage3(image: File | undefined, shopId: string, current: string) {
    const isPlaceholder = current === Constant.ShopSetting.Picture.Placeholder;
    if (image !== undefined) {
      if (!isPlaceholder) {
        await this._loading.changeMessage('label.title.deletingpreviousimage');
        const deleted = await this._pictureRepo.deleteFile(current);
        if (!deleted) {
          return current;
        }
      }
      await this._loading.changeMessage('label.title.savingimage');
      return await this._pictureRepo.uploadShopImage3(shopId, image);
    } else {
      return current;
    }
  }
}
