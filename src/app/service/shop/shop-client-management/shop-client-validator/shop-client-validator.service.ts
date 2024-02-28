import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatestWith, map, of } from 'rxjs';
import { DateService } from 'src/app/service/global/date/date.service';
import { ShopService } from '../../shop.service';

@Injectable({
  providedIn: 'root',
})
export class ShopClientValidatorService {
  //General
  private _firstName = new BehaviorSubject<boolean>(false);
  private _lastName = new BehaviorSubject<boolean>(false);
  private _phoneNumber = new BehaviorSubject<boolean>(false);
  private _email = new BehaviorSubject<boolean>(false);
  private _address = new BehaviorSubject<boolean>(false);
  private _termAndCondition = new BehaviorSubject<boolean>(false);
  private _underAge = new BehaviorSubject<boolean>(false);

  get firstName() {
    return this._firstName.getValue();
  }

  set firstName(value: boolean) {
    this._firstName.next(value);
  }

  get lastName() {
    return this._lastName.getValue();
  }

  set lastName(value: boolean) {
    this._lastName.next(value);
  }

  get phoneNumber() {
    return this._phoneNumber.getValue();
  }

  set phoneNumber(value: boolean) {
    this._phoneNumber.next(value);
  }

  get email() {
    return this._email.getValue();
  }

  set email(value: boolean) {
    this._email.next(value);
  }

  get address() {
    return this._address.getValue();
  }

  set address(value: boolean) {
    this._address.next(value);
  }

  get termAndCondition() {
    return this._termAndCondition.getValue();
  }

  set termAndCondition(value: boolean) {
    this._termAndCondition.next(value);
  }

  get underAge() {
    return this._underAge.getValue();
  }

  set isUnderAge(dob: string) {
    this._underAge.next(!this._date.isOver18(dob));
  }

  get privateInsurance() {
    return this._privateInsurance.getValue();
  }

  set privateInsurance(value: boolean) {
    this._privateInsurance.next(value);
  }

  get emergencyContact() {
    return this._emergencyContact.getValue();
  }

  set emergencyContact(value: boolean) {
    this._emergencyContact.next(value);
  }

  get signature() {
    return this._signature.getValue();
  }

  set signature(value: boolean) {
    this._signature.next(value);
  }

  //Medical Service
  private _signature = new BehaviorSubject<boolean>(false);
  private _privateInsurance = new BehaviorSubject<boolean>(false);
  private _emergencyContact = new BehaviorSubject<boolean>(false);

  private _firstName$ = this._firstName.asObservable();
  private _lastName$ = this._lastName.asObservable();
  private _phoneNumber$ = this._phoneNumber.asObservable();
  private _email$ = this._email.asObservable();
  private _address$ = this._address.asObservable();
  private _termAndCondition$ = this._termAndCondition.asObservable();
  private _signature$ = this._signature.asObservable();
  private _privateInsurance$ = this._privateInsurance.asObservable();
  private _emergencyContact$ = this._emergencyContact.asObservable();

  public validator$ = this._shop.isRelatedToMedical$.pipe(
    combineLatestWith(
      this._firstName$,
      this._lastName$,
      this._phoneNumber$,
      this._email$,
      this._address$,
      this._termAndCondition$,
      this._signature$,
      this._privateInsurance$,
      this._emergencyContact$
    ),
    map(
      ([
        isRelatedToMedical,
        firstName,
        lastName,
        phone,
        email,
        address,
        termAndCondition,
        signature,
        privateInsurance,
        emergencyContact,
      ]) => {
        const defaultValidators =
          firstName &&
          lastName &&
          phone &&
          email &&
          address &&
          termAndCondition &&
          privateInsurance &&
          emergencyContact;
        const medicalValidator = isRelatedToMedical ? signature : true;
        return defaultValidators && medicalValidator;
      }
    )
  );

  constructor(
    private _date: DateService,
    private _shop: ShopService
  ) {}
}
