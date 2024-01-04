import { Injectable } from '@angular/core';
import { StepperStep } from '@progress/kendo-angular-layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalService } from 'src/app/service/global/global.service';

@Injectable({
  providedIn: 'root',
})
export class WaitingListStepService {
  private _login: BehaviorSubject<StepperStep> = new BehaviorSubject<StepperStep>({
    disabled: false,
    svgIcon: this._global.kendo.icon.lockIcon,
    text: 'label.description.stepperlogin',
    label: 'label.title.login',
  });
  private _clientInfo: BehaviorSubject<StepperStep> = new BehaviorSubject<StepperStep>({
    disabled: false,
    svgIcon: this._global.kendo.icon.userIcon,
    text: 'label.description.stepperpersonalinformation',
    label: 'label.title.personalinformation',
  });
  private _massageOption: BehaviorSubject<StepperStep> = new BehaviorSubject<StepperStep>({
    disabled: false,
    svgIcon: this._global.kendo.icon.accessibilityIcon,
    text: 'label.description.steppermassageoption',
    label: 'label.title.massageoption',
  });
  private _cart: BehaviorSubject<StepperStep> = new BehaviorSubject<StepperStep>({
    disabled: false,
    svgIcon: this._global.kendo.icon.cartIcon,
    text: 'label.description.steppercart',
    label: 'label.title.cart',
  });
  private _cartView: BehaviorSubject<StepperStep> = new BehaviorSubject<StepperStep>({
    disabled: false,
    svgIcon: this._global.kendo.icon.listUnorderedSquareIcon,
    text: 'label.description.steppercartview',
    label: 'label.title.cartview',
  });
  private _specialistAndTime: BehaviorSubject<StepperStep> = new BehaviorSubject<StepperStep>({
    disabled: false,
    svgIcon: this._global.kendo.icon.parameterDateTimeIcon,
    text: 'label.description.stepperselectspecialistandtime',
    label: 'label.title.selectspecialistandtime',
  });
  private _confirmation: BehaviorSubject<StepperStep> = new BehaviorSubject<StepperStep>({
    disabled: false,
    svgIcon: this._global.kendo.icon.checkIcon,
    text: 'label.description.stepperconfirmation',
    label: 'label.title.confirmation',
  });

  login$: Observable<StepperStep> = this._login.asObservable();
  clientInfo$: Observable<StepperStep> = this._clientInfo.asObservable();
  massageOption$: Observable<StepperStep> = this._massageOption.asObservable();
  cart$: Observable<StepperStep> = this._cart.asObservable();
  cartView$: Observable<StepperStep> = this._cartView.asObservable();
  speicalistAndTime$: Observable<StepperStep> = this._specialistAndTime.asObservable();
  confirmation$: Observable<StepperStep> = this._confirmation.asObservable();
  constructor(private _global: GlobalService) {}

  public complete() {
    this._login.complete();
    this._clientInfo.complete();
    this._massageOption.complete();
    this._cart.complete();
    this._cartView.complete();
    this._specialistAndTime.complete();
    this._confirmation.complete();
  }

  public disableView() {
    this.enableLogin();
    this.disableClientInfo();
    this.disableMassageOption();
    this.disableCart();
    this.disableCartView();
    this.disableSelectSpecialistAndTime();
    this.disableConfirmation();
  }

  public enableView(
    hasCheckout: boolean,
    hasSelectedTime: boolean,
    hasSelectedSpeicalist: boolean,
    hasOnlyCoupon: boolean
  ) {
    this.disableLogin();
    this.enableClientInfo();
    this.enableMassageOption();
    this.enableCart();
    hasCheckout ? this.enableCartView() : this.disableCartView();
    hasCheckout && !hasOnlyCoupon
      ? this.enableSelectSpecialistAndTime()
      : hasCheckout && hasOnlyCoupon
      ? this.disableSelectSpecialistAndTime()
      : this.disableSelectSpecialistAndTime();
    hasSelectedTime && hasSelectedSpeicalist ? this.enableConfirmation() : this.disableConfirmation();
  }

  private enableLogin() {
    let login = this._login.getValue();
    login.disabled = false;
    this._login.next(login);
  }

  private enableClientInfo() {
    let clientInfo = this._clientInfo.getValue();
    clientInfo.disabled = false;
    this._clientInfo.next(clientInfo);
  }

  private enableMassageOption() {
    let massageOption = this._massageOption.getValue();
    massageOption.disabled = false;
    this._massageOption.next(massageOption);
  }

  private enableCart() {
    let cart = this._cart.getValue();
    cart.disabled = false;
    this._cart.next(cart);
  }

  private enableCartView() {
    let cartView = this._cartView.getValue();
    cartView.disabled = false;
    this._cartView.next(cartView);
  }

  private enableSelectSpecialistAndTime() {
    let selectSpecialistAndTime = this._specialistAndTime.getValue();
    selectSpecialistAndTime.disabled = false;
    this._specialistAndTime.next(selectSpecialistAndTime);
  }

  private enableConfirmation() {
    let confirmation = this._confirmation.getValue();
    confirmation.disabled = false;
    this._confirmation.next(confirmation);
  }

  private disableLogin() {
    let login = this._login.getValue();
    login.disabled = true;
    this._login.next(login);
  }

  private disableClientInfo() {
    let clientInfo = this._clientInfo.getValue();
    clientInfo.disabled = true;
    this._clientInfo.next(clientInfo);
  }

  private disableMassageOption() {
    let massageOption = this._massageOption.getValue();
    massageOption.disabled = true;
    this._massageOption.next(massageOption);
  }

  private disableCart() {
    let cart = this._cart.getValue();
    cart.disabled = true;
    this._cart.next(cart);
  }

  private disableCartView() {
    let cartView = this._cartView.getValue();
    cartView.disabled = true;
    this._cartView.next(cartView);
  }

  private disableSelectSpecialistAndTime() {
    let selectSpecialistAndTime = this._specialistAndTime.getValue();
    selectSpecialistAndTime.disabled = true;
    this._specialistAndTime.next(selectSpecialistAndTime);
  }

  private disableConfirmation() {
    let confirmation = this._confirmation.getValue();
    confirmation.disabled = true;
    this._confirmation.next(confirmation);
  }
}

const disabled = { disabled: true };
const enabled = { disabled: false };
