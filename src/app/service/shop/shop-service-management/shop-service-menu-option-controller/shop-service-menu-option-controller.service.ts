import { Injectable } from '@angular/core';

export interface IShopServiceMenuOptionAction {
  name: string;
  img: string;
  isServiceManagement: boolean;
  isExtraManagement: boolean;
  isPackageManagement: boolean;
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
  };
  constructor() {}

  public buttons(): IShopServiceMenuOptionAction[] {
    const service = this.getService();
    const extra = this.getExtra();
    const pack = this.getPackage();
    return [pack, service, extra];
  }

  public getService(): IShopServiceMenuOptionAction {
    return {
      name: this._labelTitle + this._menuOption.serviceManagement,
      img: 'assets/shop-service/service.svg',
      isServiceManagement: true,
      isExtraManagement: false,
      isPackageManagement: false,
    };
  }

  public getPackage(): IShopServiceMenuOptionAction {
    return {
      name: this._labelTitle + this._menuOption.packageManagement,
      img: 'assets/shop-service/package.svg',
      isServiceManagement: false,
      isExtraManagement: false,
      isPackageManagement: true,
    };
  }

  private getExtra(): IShopServiceMenuOptionAction {
    return {
      name: this._labelTitle + this._menuOption.extraManagement,
      img: 'assets/shop-service/extra.svg',
      isServiceManagement: false,
      isExtraManagement: true,
      isPackageManagement: false,
    };
  }
}
