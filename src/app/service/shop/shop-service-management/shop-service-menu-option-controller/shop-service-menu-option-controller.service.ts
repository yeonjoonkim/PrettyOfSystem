import { Injectable } from '@angular/core';

export interface IShopServiceMenuOptionAction {
  name: string;
  img: string;
  isServiceManagement: boolean;
  isExtraManagement: boolean;
  isPackageManagement: boolean;
  isCouponManagement: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ShopServiceMenuOptionControllerService {
  private readonly _labelTitle: string = 'label.title.';
  private readonly _menuOption = {
    serviceManagement: 'service',
    extraManagement: 'extra',
    packageManagement: 'package',
    couponManagement: 'coupon',
  };
  constructor() {}

  public buttons(): IShopServiceMenuOptionAction[] {
    const service = this.getService();
    const extra = this.getExtra();
    const pack = this.getPackage();
    const coupon = this.getCoupon();
    return [coupon, pack, service, extra];
  }

  public getService(): IShopServiceMenuOptionAction {
    return {
      name: this._labelTitle + this._menuOption.serviceManagement,
      img: 'assets/shop-service/service.svg',
      isServiceManagement: true,
      isExtraManagement: false,
      isPackageManagement: false,
      isCouponManagement: false,
    };
  }

  public getPackage(): IShopServiceMenuOptionAction {
    return {
      name: this._labelTitle + this._menuOption.packageManagement,
      img: 'assets/shop-service/package.svg',
      isServiceManagement: false,
      isExtraManagement: false,
      isPackageManagement: true,
      isCouponManagement: false,
    };
  }

  public setDefault(): IShopServiceMenuOptionAction {
    return {
      name: 'label.title.product',
      img: '',
      isServiceManagement: false,
      isExtraManagement: false,
      isPackageManagement: false,
      isCouponManagement: false,
    };
  }

  private getExtra(): IShopServiceMenuOptionAction {
    return {
      name: this._labelTitle + this._menuOption.extraManagement,
      img: 'assets/shop-service/extra.svg',
      isServiceManagement: false,
      isExtraManagement: true,
      isPackageManagement: false,
      isCouponManagement: false,
    };
  }

  private getCoupon(): IShopServiceMenuOptionAction {
    return {
      name: this._labelTitle + this._menuOption.couponManagement,
      img: 'assets/shop-service/coupon.svg',
      isServiceManagement: false,
      isExtraManagement: false,
      isPackageManagement: false,
      isCouponManagement: true,
    };
  }
}
