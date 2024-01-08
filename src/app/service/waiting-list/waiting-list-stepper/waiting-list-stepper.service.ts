import { Injectable } from '@angular/core';
import { StepperStep } from '@progress/kendo-angular-layout';
import { BehaviorSubject, Observable, combineLatest, combineLatestWith, filter, map, of, switchMap } from 'rxjs';
import { WaitingListService } from '../waiting-list.service';
import * as Constant from 'src/app/constant/constant';
import { WaitingListStepService } from './waiting-list-step/waiting-list-step.service';

export const StepperLabel = {
  Login: 'label.title.login',
  ClientInfo: 'label.title.personalinformation',
  MassageOption: 'label.title.massageoption',
  Cart: 'label.title.cart',
  CartView: 'label.title.cartview',
  SelectSpecialistAndTime: 'label.title.selectspecialistandtime',
  Confirmation: 'label.title.confirmation',
} as const;

export type StepperLabelType = (typeof StepperLabel)[keyof typeof StepperLabel];

@Injectable({
  providedIn: 'root',
})
export class WaitingListStepperService {
  private _currentTitle: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private _waitingList: WaitingListService,
    private _step: WaitingListStepService
  ) {}

  public validator() {
    return combineLatest([
      this._waitingList.client.isLoggedin$,
      this._waitingList.cart.hasRelatedService(),
      this._waitingList.cart.hasSelectDateTime(),
      this._waitingList.cart.hasSpecialist(),
      this._waitingList.cart.hasOnlyCoupon(),
    ]).pipe(
      map(([isLogin, hasCheckout, hasSelectedTime, hasSelectedSpeicalist, hasOnlyCoupon]) => {
        return {
          isLogin: isLogin,
          hasCheckout: hasCheckout,
          hasSelectedTime: hasSelectedTime,
          hasSelectedSpeicalist,
          hasOnlyCoupon: hasOnlyCoupon,
        };
      })
    );
  }

  public handleValidator(validator: {
    isLogin: boolean;
    hasCheckout: boolean;
    hasSelectedTime: boolean;
    hasSelectedSpeicalist: boolean;
    hasOnlyCoupon: boolean;
  }) {
    if (validator.isLogin) {
      this._step.enableView(
        validator.hasCheckout,
        validator.hasSelectedTime,
        validator.hasSelectedSpeicalist,
        validator.hasOnlyCoupon
      );
    } else {
      this._step.disableView();
    }
  }

  public getStepperByShopCategory() {
    return this._waitingList.shop.category().pipe(
      combineLatestWith(
        this._waitingList.cart.hasOnlyCoupon(),
        this._step.login$,
        this._step.clientInfo$,
        this._step.massageOption$,
        this._step.cart$,
        this._step.cartView$,
        this._step.speicalistAndTime$,
        this._step.confirmation$
      ),
      filter(category => category !== null),
      switchMap(
        ([
          category,
          hasOnlyCoupon,
          login,
          clientInfo,
          massageOption,
          cart,
          cartView,
          specialistAndTime,
          confirmation,
        ]) => {
          if (category !== null) {
            const list =
              category.name === Constant.ShopCategoryTitle.MassageTheraphy && !hasOnlyCoupon
                ? [login, clientInfo, massageOption, cart, cartView, specialistAndTime, confirmation]
                : category.name === Constant.ShopCategoryTitle.MassageTheraphy && hasOnlyCoupon
                ? [login, clientInfo, massageOption, cart, cartView, confirmation]
                : !hasOnlyCoupon
                ? [login, clientInfo, cart, cartView, specialistAndTime, confirmation]
                : [login, clientInfo, cart, cartView, confirmation];
            return of(list);
          } else {
            return of([login, clientInfo, cart, cartView, confirmation]);
          }
        }
      )
    );
  }

  public complete() {
    this._currentTitle.complete();
    this._step.complete();
  }
}
