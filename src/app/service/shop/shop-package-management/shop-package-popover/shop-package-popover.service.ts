import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ShopPackageExtraPopoverComponent } from 'src/app/component/shop/shop-package-management/shop-package-extra-popover/shop-package-extra-popover.component';
import { ShopPackageServicePopoverComponent } from 'src/app/component/shop/shop-package-management/shop-package-service-popover/shop-package-service-popover.component';
import {
  ShopExtraDocumentType,
  ShopPackageExtraType,
  ShopPackageServiceType,
  ShopServiceDocumentType,
} from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class ShopPackagePopoverService {
  constructor(private _popoverCtrl: PopoverController) {}

  public async getServicePopover(
    event: any,
    packageServices: ShopPackageServiceType[],
    services: ShopServiceDocumentType[]
  ) {
    return await this._popoverCtrl.create({
      component: ShopPackageServicePopoverComponent,
      event: event,
      translucent: true,
      backdropDismiss: true,
      size: 'auto',
      componentProps: {
        packageServices: packageServices,
        services: services,
      },
    });
  }

  public async getExtraPopover(
    event: any,
    packageExtras: ShopPackageExtraType[],
    extras: ShopExtraDocumentType[]
  ) {
    return await this._popoverCtrl.create({
      component: ShopPackageExtraPopoverComponent,
      event: event,
      translucent: true,
      backdropDismiss: true,
      size: 'auto',
      componentProps: {
        packageExtras: packageExtras,
        extras: extras,
      },
    });
  }
}
