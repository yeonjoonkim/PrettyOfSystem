import { Injectable } from '@angular/core';
import { StorageService } from '../global/storage/storage.service';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { Cart, CheckOutItem, CheckOutSpecialistType } from 'src/app/interface/booking/cart/cart.interface';
import { DateService } from '../global/date/date.service';
import * as Constant from 'src/app/constant/constant';
import { ToastService } from '../global/toast/toast.service';
import { LanguageTransformService } from '../language-transform/language-transform.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart: BehaviorSubject<Cart | null> = new BehaviorSubject<Cart | null>(null);
  public cart$: Observable<Cart | null> = this._cart.asObservable();

  constructor(
    private _storage: StorageService,
    private _date: DateService,
    private _toastCtrl: ToastService,
    private _languageTransform: LanguageTransformService
  ) {}

  public getValue() {
    return this._cart.getValue();
  }

  public async start(shopId: string, timezone: string, sessionMin: number) {
    const cart: Cart | undefined | null = await this._storage.getCart();
    if (cart !== undefined && cart !== null && typeof cart !== 'string') {
      const sameShopId = cart.shopId === shopId;
      const timeout = this._date.isTimeout(cart.timezone, cart.expiredDateTime);
      if (!sameShopId && timeout) {
        await this.reset(shopId, timezone, sessionMin);
      } else {
        this._cart.next(cart);
      }
    } else {
      await this.reset(shopId, timezone, sessionMin);
    }
  }

  public async destroy() {
    this._cart.complete();
    await this._storage.clearCart();
  }

  public hasRelatedService() {
    return this.cart$.pipe(
      switchMap(cart => {
        if (cart) {
          return of(cart.checkout.some(i => i.type !== Constant.CartItem.Extra));
        } else {
          return of(false);
        }
      })
    );
  }

  public isAnySepcialist() {
    return this.cart$.pipe(
      switchMap(cart => {
        if (cart !== null) {
          return of(cart.specialist.name === 'label.title.anyone');
        } else {
          return of(false);
        }
      })
    );
  }

  public hasSpecialist() {
    return this.cart$.pipe(
      switchMap(cart => {
        if (cart) {
          return of(cart.specialist.name.length > 0);
        } else {
          return of(false);
        }
      })
    );
  }

  public hasSelectTime() {
    return this.cart$.pipe(
      switchMap(cart => {
        if (cart) {
          return of(cart.selectedTime !== null);
        } else {
          return of(false);
        }
      })
    );
  }

  public relatedCartSpecialistIds() {
    return this.cart$.pipe(
      switchMap(cart => {
        if (cart) {
          const specialisedEmpId = cart.checkout
            .map(c => c.specializedEmployees)
            .reduce((acc, val) => acc.concat(val), [])
            .filter((v, i, arr) => arr.findIndex(t => t.value === v.value) === i)
            .map(emp => emp.value);
          return of(specialisedEmpId);
        } else {
          return of(null);
        }
      })
    );
  }

  public selectedSpecialist() {
    return this.cart$.pipe(
      switchMap(cart => {
        if (cart) {
          return of(cart.specialist);
        } else {
          return of(null);
        }
      })
    );
  }

  public hasOnlyCoupon() {
    return this.cart$.pipe(
      switchMap(cart => {
        if (cart) {
          const coupon = cart.checkout.filter(c => c.type === Constant.CartItem.Coupon);
          return of(cart.checkout.length === coupon.length);
        } else {
          return of(false);
        }
      })
    );
  }

  public hasInsurance() {
    return this.cart$.pipe(
      switchMap(cart => {
        if (cart) {
          const insurance = cart.checkout.filter(c => c.isInsuranceCover);
          return of(insurance.length > 0);
        } else {
          return of(false);
        }
      })
    );
  }

  public async addCheckOutItem(checkout: CheckOutItem, transformType: Constant.LanguageTransformType) {
    let cart = this._cart.getValue();
    if (cart !== null) {
      cart = await this.validateByCheckoutItem(checkout, cart);
      const item = cart.checkout.find(
        c =>
          c.itemId === checkout.itemId &&
          c.type === checkout.type &&
          checkout.price === c.price &&
          checkout.min === c.min
      );
      if (item !== undefined) {
        const index = cart.checkout.findIndex(
          c =>
            c.itemId === checkout.itemId &&
            c.type === checkout.type &&
            checkout.price === c.price &&
            checkout.min === c.min
        );
        cart.checkout[index].qty = cart.checkout[index].qty + 1;
      } else {
        cart.checkout.push(checkout);
      }
      cart = this.updateCartSum(cart);
      cart = this.resetSpecialistDateTime(cart);
      await this._storage.storeCart(cart);
      this._cart.next(cart);
      await this.present(checkout.title, checkout.min, transformType);
    }
  }

  public async updateSelectTime(shopId: string, startTime: string) {
    let cart = this._cart.getValue();
    if (cart !== null) {
      const endTime = this._date.addMin(startTime, cart.totalMin);
      cart = await this.validate(cart, shopId);
      cart.selectedTime = { start: startTime, end: endTime };
      await this._storage.storeCart(cart);
      this._cart.next(cart);
    }
  }

  public async resetSelectTime() {
    let cart = this._cart.getValue();
    if (cart !== null) {
      cart.selectedTime = null;
      await this._storage.storeCart(cart);
      this._cart.next(cart);
    }
  }

  public async updateSpecialist(shopId: string, spcialistId: string, name: string) {
    let cart = this._cart.getValue();
    if (cart !== null) {
      cart = await this.validate(cart, shopId);
      cart.specialist = { id: spcialistId, name: name };
      cart.selectedTime = null;
      await this._storage.storeCart(cart);
      this._cart.next(cart);
    }
  }

  public async deleteInsurance() {
    let cart = this._cart.getValue();
    if (cart !== null) {
      cart = this.getDefaultCart(cart.shopId, cart.timezone, cart.timeoutMin);
      await this._storage.storeCart(cart);
      this._cart.next(cart);
    }
  }

  public async deleteCheckOutItem(checkout: CheckOutItem) {
    let cart = this._cart.getValue();
    if (cart !== null) {
      cart = await this.validateByCheckoutItem(checkout, cart);
      cart.checkout = cart.checkout.filter(
        c =>
          !(
            c.itemId === checkout.itemId &&
            c.type === checkout.type &&
            checkout.price === c.price &&
            checkout.min === c.min
          )
      );
      cart.checkout = this.handleCheckoutExtra(cart.checkout);
      cart = this.updateCartSum(cart);
      cart = this.resetSpecialistDateTime(cart);
      await this._storage.storeCart(cart);
      this._cart.next(cart);
    }
  }

  private resetSpecialistDateTime(cart: Cart) {
    cart.selectedTime = null;
    cart.specialist = {
      id: '',
      name: '',
    };
    return cart;
  }

  public async incrementCheckOutItem(checkout: CheckOutItem) {
    let cart = this._cart.getValue();
    if (cart !== null) {
      cart = await this.validateByCheckoutItem(checkout, cart);
      const item = cart.checkout.find(
        c =>
          c.itemId === checkout.itemId &&
          c.type === checkout.type &&
          checkout.price === c.price &&
          checkout.min === c.min
      );
      if (item !== undefined) {
        const index = cart.checkout.findIndex(
          c =>
            c.itemId === checkout.itemId &&
            c.type === checkout.type &&
            checkout.price === c.price &&
            checkout.min === c.min
        );
        cart.checkout[index].qty = cart.checkout[index].qty + 1;
      } else {
        cart.checkout.push(checkout);
      }
      cart.checkout = this.handleCheckoutExtra(cart.checkout);
      cart = this.updateCartSum(cart);
      cart = this.resetSpecialistDateTime(cart);
      await this._storage.storeCart(cart);
      this._cart.next(cart);
    }
  }

  public async decrementCheckOutItem(checkout: CheckOutItem) {
    let cart = this._cart.getValue();
    if (cart !== null) {
      cart = await this.validateByCheckoutItem(checkout, cart);
      cart.checkout = cart.checkout.reduce<CheckOutItem[]>((acc, item) => {
        if (
          item.itemId === checkout.itemId &&
          item.type === checkout.type &&
          checkout.price === item.price &&
          checkout.min === item.min
        ) {
          item.qty -= 1;
          if (item.qty > 0) {
            acc.push(item);
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
      cart.checkout = this.handleCheckoutExtra(cart.checkout);
      cart = this.updateCartSum(cart);
      cart = this.resetSpecialistDateTime(cart);
      await this._storage.storeCart(cart);
      this._cart.next(cart);
    }
  }

  private getDefaultCart(shopId: string, timezone: string, sessionMin: number) {
    const min = sessionMin ? sessionMin : 15;
    const result: Cart = {
      shopId: shopId,
      checkout: [],
      totalPrice: 0,
      timeoutMin: min,
      totalMin: 0,
      expiredDateTime: this._date.getTimeoutByMin(timezone, min),
      specialist: {
        id: '',
        name: '',
      },
      timezone: timezone,
      selectedTime: null,
      dateTime: this._date.startDay(this._date.shopNow(timezone)),
      dayIndex: this._date.getDay(this._date.startDay(this._date.shopNow(timezone))),
    };
    return result;
  }

  private async validateByCheckoutItem(checkout: CheckOutItem, cart: Cart) {
    const sameShopId = checkout.shopId === cart.shopId;
    const timeout = this._date.isTimeout(cart.timezone, cart.expiredDateTime);
    const allowed = sameShopId && !timeout;
    if (!allowed) {
      await this.reset(checkout.shopId, cart.timezone, cart.timeoutMin);
      return this.getDefaultCart(checkout.shopId, cart.timezone, cart.timeoutMin);
    } else {
      return cart;
    }
  }

  private async reset(shopId: string, timezone: string, sessionMin: number) {
    const defaultCart = this.getDefaultCart(shopId, timezone, sessionMin);
    await this._storage.storeCart(defaultCart);
    this._cart.next(defaultCart);
  }

  private updateCartSum(cart: Cart) {
    cart.totalMin = cart.checkout.reduce((acc, item) => acc + item.min * item.qty, 0);
    cart.totalPrice = parseFloat(cart.checkout.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2));

    return cart;
  }

  private async present(title: string, min: number, type: Constant.LanguageTransformType) {
    const translatedTitle = await this._languageTransform.transform(title, type);
    const added = await this._languageTransform.transform('messagesuccess.title.add', 'System');
    const translatedMin = min > 0 ? await this._languageTransform.transform('label.title.minute', 'System') : '';
    const msg = min > 0 ? `${min}${translatedMin} ${translatedTitle} ${added}` : `${translatedTitle} ${added}`;
    await this._toastCtrl.presentBottom(msg);
  }

  private async validate(cart: Cart, shopId: string) {
    const sameShopId = shopId === cart.shopId;
    const timeout = this._date.isTimeout(cart.timezone, cart.expiredDateTime);
    const allowed = sameShopId && !timeout;
    if (!allowed) {
      await this.reset(shopId, cart.timezone, cart.timeoutMin);
      return this.getDefaultCart(shopId, cart.timezone, cart.timeoutMin);
    } else {
      return cart;
    }
  }

  public handleCheckoutExtra(checkouts: CheckOutItem[]) {
    const available = checkouts.filter(s => s.type !== Constant.CartItem.Extra);
    const coupon = checkouts.filter(c => c.type === Constant.CartItem.Coupon);
    const isOnlyCoupon = available.length === coupon.length;
    return available.length > 0 && !isOnlyCoupon
      ? checkouts
      : checkouts.filter(s => s.type !== Constant.CartItem.Extra);
  }
}
