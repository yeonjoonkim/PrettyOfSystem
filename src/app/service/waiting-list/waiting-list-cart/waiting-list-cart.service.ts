import { Injectable } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { Observable, filter, firstValueFrom, take } from 'rxjs';
import { Cart, CheckOutItem } from 'src/app/interface/booking/cart/cart.interface';
import { ShopPackageTimeService } from '../../reservation/shop-package-time/shop-package-time.service';
import { GlobalService } from '../../global/global.service';
import { WaitngListShopService } from '../waiting-list-shop/waitng-list-shop.service';
import * as Constant from 'src/app/constant/constant';
@Injectable({
  providedIn: 'root',
})
export class WaitingListCartService {
  public cart$!: Observable<Cart | null>;
  constructor(
    private _cart: CartService,
    private _packageTime: ShopPackageTimeService,
    private _shop: WaitngListShopService,
    private _global: GlobalService
  ) {
    this.cart$ = this._cart.cart$;
  }

  public getValue() {
    return this._cart.getValue();
  }

  public async start() {
    this._shop.config$
      .pipe(
        take(1),
        filter(config => config !== null)
      )
      .subscribe(async config => {
        if (config) {
          await this._cart.start(config.id, config.timezone, config.setting.qrCode.waitingListSessionExiryMin);
        }
      });
  }

  public hasRelatedService() {
    return this._cart.hasRelatedService();
  }

  public relatedSpecialistIds() {
    return this._cart.relatedCartSpecialistIds();
  }

  public async complete() {
    await this._cart.destroy();
  }

  public async add(checkout: CheckOutItem, timezone: string) {
    const isAvailableNow = this._packageTime.isAvailableNow(timezone, checkout.limitedTime);
    if (isAvailableNow) {
      await this._cart.addCheckOutItem(checkout, Constant.Default.LanguageTransformType.WaitingList);
    } else {
      const msg = await this._global.language.transform(
        'label.description.wearetrulysorrybuttheoptionyouveselectedisnotavailabletoday'
      );
      await this._global.toast.presentErrorButtom(msg);
    }
  }

  public async decrement(checkout: CheckOutItem) {
    await this._cart.decrementCheckOutItem(checkout);
  }

  public async increment(checkout: CheckOutItem) {
    await this._cart.incrementCheckOutItem(checkout);
  }

  public async delete(checkout: CheckOutItem) {
    await this._cart.deleteCheckOutItem(checkout);
  }
}
