import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  combineLatestWith,
  filter,
  map,
  of,
  switchMap,
  take,
} from 'rxjs';
import {
  Cart,
  ConsultClientInfoType,
  ConsultDocumentType,
  IUser,
  ShopConfigurationType,
  UserSettingEmergencyContactType,
  UserSettingPrivateInsuranceType,
  UserVisitShopConsentType,
} from 'src/app/interface';
import { GlobalService } from '../../global/global.service';
import { WaitingListService } from '../waiting-list.service';
import * as Constant from 'src/app/constant/constant';
import { ShopConsultRepositoryService } from 'src/app/firebase/shop-repository/shop-consult-repository/shop-consult-repository.service';
@Injectable({
  providedIn: 'root',
})
export class WaitingListConsultService {
  private _consult = new BehaviorSubject<ConsultDocumentType | null>(null);
  private _consent = new BehaviorSubject<UserVisitShopConsentType | null>(null);
  private _parentConsent = new BehaviorSubject<boolean>(false);
  public consult$: Observable<ConsultDocumentType | null> = this._consult.asObservable();
  public consent$: Observable<UserVisitShopConsentType | null> = this._consent.asObservable();
  public parentConsent$: Observable<boolean> = this._parentConsent.asObservable();

  public isFirstVisit$: Observable<boolean> = this.isFirstVisit();

  constructor(
    private _waitingList: WaitingListService,
    private _global: GlobalService,
    private _consultRepo: ShopConsultRepositoryService
  ) {}

  public value() {
    return this._consult.getValue();
  }

  public async setValue(doc: ConsultDocumentType) {
    const value = this.value();
    if (value !== null) {
      doc.hasTermandConditionConsent = value.hasTermandConditionConsent;
      this._consult.next(doc);
    } else {
      this._consult.next(doc);
    }
  }

  public privateInsurance() {
    return this.consult$.pipe(
      filter(consult => consult !== null),
      switchMap(consult => {
        if (consult !== null) {
          return of(consult.client.privateInsurance);
        } else {
          return of(null);
        }
      })
    );
  }

  public hasTermandConditionConsent() {
    return this.consult$.pipe(
      switchMap(consult => {
        if (consult !== null) {
          return of(consult.hasTermandConditionConsent);
        } else {
          return of(false);
        }
      })
    );
  }

  public updatePrivateInsurance(privateInsurance: UserSettingPrivateInsuranceType) {
    const value = this.value();
    if (value !== null) {
      privateInsurance.memberNum = privateInsurance.memberNum.toUpperCase();
      privateInsurance.reference = privateInsurance.reference.toUpperCase();
      value.client.privateInsurance = privateInsurance;
      this._consult.next(value);
    }
  }

  public setConsent(consent: UserVisitShopConsentType) {
    this._consent.next(consent);
  }

  public updateSmsMarketing(agreed: boolean) {
    const value = this._consent.getValue();
    if (value !== null) {
      value.hasMarketingSMSConsent = agreed;
      this._consent.next(value);
    }
  }

  public updateEmailMarketing(agreed: boolean) {
    const value = this._consent.getValue();
    if (value !== null) {
      value.hasMarketingEmailConsent = agreed;
      this._consent.next(value);
    }
  }

  public updateParentConsent(emergancyContact: UserSettingEmergencyContactType) {
    const value = this.value();
    if (value !== null) {
      emergancyContact.lastName = this._global.textTransform.getTitleFormat(emergancyContact.lastName);
      emergancyContact.firstName = this._global.textTransform.getTitleFormat(emergancyContact.firstName);
      value.client.emergancyContact = emergancyContact;
      this._consult.next(value);
      this._parentConsent.next(true);
    }
  }

  public updateAgreement(agreed: boolean) {
    const current = this.value();
    if (current !== null) {
      current.hasTermandConditionConsent = agreed;
      this._consult.next(current);
    }
  }

  public updateSignature(signautre: string) {
    const current = this.value();
    if (current !== null) {
      current.client.signature = signautre;
      this._consult.next(current);
    }
  }

  public updateConsultInfo(
    cart: Cart,
    client: IUser,
    shopConfig: ShopConfigurationType,
    isShopInsuranceProvider: boolean,
    hasInsuranceCartCheckout: boolean,
    isOver18: boolean,
    isClientPregrant: boolean,
    isFirstVisit: boolean
  ) {
    let value = this.value();
    if (value !== null) {
      value = this.updateFromClient(value, client);
      value = this.updateFromCart(value, cart);
      value = this.updateFromShopConfig(value, shopConfig);
      value = this.updateFromValidator(
        value,
        isShopInsuranceProvider,
        hasInsuranceCartCheckout,
        isOver18,
        isClientPregrant,
        isFirstVisit
      );
      this._consult.next(value);
    }
  }

  private updateFromCart(consult: ConsultDocumentType, cart: Cart) {
    consult.checkouts = cart.checkout;
    consult.totalMin = cart.totalMin;
    consult.totalPrice = cart.totalPrice;
    consult.adjustedPrice = cart.totalPrice;
    consult.scheduled =
      cart.selectedTime !== null
        ? {
            startDateTime: cart.selectedTime.start,
            endDateTime: cart.selectedTime.end,
          }
        : null;
    consult.associatedEmployee = cart.specialist;
    return consult;
  }

  private updateFromClient(consult: ConsultDocumentType, client: IUser) {
    const newClient: ConsultClientInfoType = {
      id: client.id,
      firstName: client.firstName,
      lastName: client.lastName,
      dob: client.dob,
      phoneNumber: client.phoneNumber,
      email: client.email,
      address: client.address,
      gender: client.gender,
      isOver18: this._global.date.isOver18(client.dob),
      isPregrant: false,
      signature: client.signature !== null ? client.signature : '',
      emergancyContact: client.setting.emergencyContact,
      privateInsurance: client.setting.privateInsurance,
      medicalHistory: client.setting.medical,
      massage: client.setting.massage,
    };
    consult.client = newClient;
    consult.report.bodyPainSelectors = client.setting.massage.areas.filter(
      a => a.pain.scale.rating > Constant.Massage.PainScale.Rating.Zero
    );
    return consult;
  }

  private updateFromShopConfig(consult: ConsultDocumentType, shopConfig: ShopConfigurationType) {
    consult.shopId = shopConfig.id;
    consult.shopTimezone = shopConfig.timezone;
    return consult;
  }

  public async updateClientInfo(client: IUser) {
    return await this._waitingList.client.update(client);
  }

  public updateFromValidator(
    consult: ConsultDocumentType,
    isShopInsuranceProvider: boolean,
    hasInsuranceCartCheckout: boolean,
    isOver18: boolean,
    isClientPregrant: boolean,
    isFirstVisit: boolean
  ) {
    consult.isInsuranceClaimRequest = isShopInsuranceProvider && hasInsuranceCartCheckout;
    consult.isFirstVisit = isFirstVisit;
    consult.client.isPregrant = isClientPregrant;
    consult.client.isOver18 = isOver18;
    return consult;
  }

  public validator() {
    return this.consult$.pipe(
      combineLatestWith(this.parentConsent$),
      switchMap(([consult, parentConsent]) => {
        if (consult !== null) {
          const underAgeRequirements = !consult.client.isOver18 ? parentConsent : true;

          const insuranceRequirements = consult.isInsuranceClaimRequest
            ? consult.client.privateInsurance !== null
            : true;
          const defaultRequirements = consult.hasTermandConditionConsent && consult.client.signature.length > 0;

          return of(underAgeRequirements && insuranceRequirements && defaultRequirements);
        } else {
          return of(false);
        }
      })
    );
  }

  public updateTermandConditionConsent(consent: boolean) {
    const value = this.value();
    if (value) {
      value.hasTermandConditionConsent = consent;
      this._consult.next(value);
    }
  }

  public isFirstVisit() {
    return combineLatest([
      this._waitingList.start$,
      this._waitingList.shop.config$,
      this._waitingList.client.info$,
    ]).pipe(
      filter(([start, config, client]) => start !== null && start && config !== null && client !== null),
      switchMap(([start, config, client]) => {
        if (start && config && client) {
          return this._consultRepo.isFirstVisit(config.id, client.id);
        } else {
          return of(false);
        }
      })
    );
  }

  public isAvailableDateTime() {
    return this.consult$.pipe(
      filter(consult => consult !== null),
      switchMap(consult => {
        if (consult !== null) {
          if (consult.associatedEmployee.id.length > 0) {
            return of(true);
          } else {
            return of(true);
          }
        } else {
          return of(false);
        }
      })
    );
  }

  public prop() {
    return combineLatest([
      this._waitingList.start$,
      this._waitingList.shop.config$,
      this._waitingList.cart$,
      this._waitingList.client.info$,
      this._waitingList.shop.hasPrivateInsuranceProvider(),
      this._waitingList.cart.hasInsurance(),
      this._waitingList.client.isOver18$,
      this._waitingList.client.isPregrant$,
      this.isFirstVisit$,
      this._waitingList.cart.isAnyone(),
      this._waitingList.shop.isDepositRequired(),
      this._waitingList.consent$,
    ]).pipe(
      filter(
        ([
          start,
          shopConfig,
          cart,
          client,
          isShopInsuranceProvider,
          hasInsuranceCartCheckout,
          isClientOver18,
          isClientPregrant,
          isFirstVisit,
          isAnyone,
          isDepositRequired,
          consent,
        ]) => {
          return (
            start !== null &&
            start &&
            shopConfig !== null &&
            cart !== null &&
            client !== null &&
            consent !== null &&
            typeof isShopInsuranceProvider === 'boolean' &&
            typeof hasInsuranceCartCheckout === 'boolean' &&
            typeof isClientOver18 === 'boolean' &&
            typeof isClientPregrant === 'boolean' &&
            typeof isFirstVisit === 'boolean' &&
            typeof isDepositRequired === 'boolean' &&
            typeof isAnyone === 'boolean'
          );
        }
      ),
      switchMap(
        ([
          start,
          shopConfig,
          cart,
          client,
          isShopInsuranceProvider,
          hasInsuranceCartCheckout,
          isClientOver18,
          isClientPregrant,
          isFirstVisit,
          isAnyone,
          isDepositRequired,
          consent,
        ]) => {
          if (start && shopConfig && cart && client) {
            return of({
              consent: consent,
              shopConfig: shopConfig,
              cart: cart,
              client: client,
              isShopInsuranceProvider: isShopInsuranceProvider,
              hasInsuranceCartCheckout: hasInsuranceCartCheckout,
              isClientOver18: isClientOver18,
              isClientPregrant: isClientPregrant,
              isFirstVisit: isFirstVisit,
              isDepositRequired: isDepositRequired,
              isAnyone: isAnyone,
            });
          } else {
            return of(null);
          }
        }
      )
    );
  }

  public newConsult() {
    return combineLatest([
      this._waitingList.start$,
      this._waitingList.shop.config$,
      this._waitingList.cart$,
      this._waitingList.client.info$,
      this._waitingList.shop.hasPrivateInsuranceProvider(),
      this._waitingList.cart.hasInsurance(),
      this._waitingList.client.isOver18$,
      this._waitingList.client.isPregrant$,
      this.isFirstVisit$,
      this._waitingList.shop.isDepositRequired(),
    ]).pipe(
      filter(
        ([
          start,
          shopConfig,
          cart,
          client,
          isShopInsuranceProvider,
          hasInsuranceCartCheckout,
          isClientOver18,
          isClientPregrant,
          isFirstVisit,
          isDepositRequired,
        ]) => {
          return (
            start !== null &&
            start &&
            shopConfig !== null &&
            cart !== null &&
            client !== null &&
            typeof isShopInsuranceProvider === 'boolean' &&
            typeof hasInsuranceCartCheckout === 'boolean' &&
            typeof isClientOver18 === 'boolean' &&
            typeof isClientPregrant === 'boolean' &&
            typeof isFirstVisit === 'boolean' &&
            typeof isDepositRequired === 'boolean'
          );
        }
      ),
      take(1),
      switchMap(
        ([
          start,
          shopConfig,
          cart,
          client,
          isShopInsuranceProvider,
          hasInsuranceCartCheckout,
          isClientOver18,
          isClientPregrant,
          isFirstVisit,
          isDepositRequired,
        ]) => {
          if (start && shopConfig && cart && client) {
            const newConsult: ConsultDocumentType = {
              id: this._global.newId(),
              origin: {
                type: Constant.Consult.OriginType.WaitingList,
                description: Constant.Consult.OriginDescription.WaitingList,
              },
              createdDateTime: this._global.date.transform.formatLocalDateTime(
                this._global.date.shopNow(shopConfig.timezone)
              ),
              shopId: shopConfig.id,
              shopTimezone: shopConfig.timezone,
              status: {
                type: Constant.Consult.StatusType.Pending,
                description: Constant.Consult.StatusDescription.Pending,
              },
              paymentStatus: {
                type: Constant.Consult.PaymentType.Unpaid,
                description: Constant.Consult.PaymentDescription.Unpaid,
              },
              scheduled:
                cart.selectedTime !== null
                  ? {
                      startDateTime: cart.selectedTime.start,
                      endDateTime: cart.selectedTime.end,
                    }
                  : null,
              checkouts: cart.checkout,
              totalMin: cart.totalMin,
              totalPrice: cart.totalPrice,
              adjustedPrice: cart.totalPrice,
              associatedEmployee: cart.specialist,
              remainingBalance: cart.totalPrice,
              recieptId: null,
              transactionIds: [],
              smsRequestIds: [],
              isFirstVisit: isFirstVisit,
              isInsuranceClaimRequest: hasInsuranceCartCheckout && isShopInsuranceProvider,
              hasTermandConditionConsent: false,
              client: {
                id: client.id,
                firstName: client.firstName,
                lastName: client.lastName,
                dob: client.dob,
                phoneNumber: client.phoneNumber,
                email: client.email,
                address: client.address,
                gender: client.gender,
                isOver18: isClientOver18,
                isPregrant: isClientPregrant,
                signature: client.signature !== null ? client.signature : '',
                emergancyContact: client.setting.emergencyContact,
                privateInsurance: client.setting.privateInsurance,
                medicalHistory: client.setting.medical,
                massage: client.setting.massage,
              },
              report: {
                medicalHistoryStatement: '',
                treatmentStatement: '',
                bodyPainSelectors: client.setting.massage.areas.filter(
                  s => s.pain.scale.rating > Constant.Massage.PainScale.Rating.Zero
                ),
              },
              isRequiredDeposit: isDepositRequired,
            };
            return of(newConsult);
          } else {
            return of(null);
          }
        }
      )
    );
  }
}
