import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {
  AddressType,
  GenderType,
  NameValuePairType,
  UserSettingEmergencyContactType,
  UserSettingPrivateInsuranceType,
} from 'src/app/interface';
import { PrivateHealthInsuranceListService } from 'src/app/service/global/private-health-insurance/private-health-insurance-list/private-health-insurance-list.service';

@Component({
  selector: 'client-info-editor',
  templateUrl: './client-info-editor.component.html',
  styleUrls: ['./client-info-editor.component.scss'],
})
export class ClientInfoEditorComponent implements OnInit, OnChanges {
  @Output() firstNameChange = new EventEmitter<string>();
  @Output() lastNameChange = new EventEmitter<string>();
  @Output() genderChange = new EventEmitter<GenderType>();
  @Output() dobChange = new EventEmitter<string>();
  @Output() phoneNumberChange = new EventEmitter<string>();
  @Output() emailChange = new EventEmitter<string>();
  @Output() addressChange = new EventEmitter<AddressType | null>();
  @Output() isVIPChange = new EventEmitter<boolean>();
  @Output() preferLanguageChange = new EventEmitter<string>();
  @Output() underAgeChange = new EventEmitter<string>();
  @Output() emergencyContactChange = new EventEmitter<UserSettingEmergencyContactType | null>();
  @Output() privateInsuranceChange = new EventEmitter<UserSettingPrivateInsuranceType | null>();
  @Input() type: 'client' | 'shop' = 'shop';
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() isRelatedToMedical!: boolean;
  @Input() isUnderAge!: boolean;
  @Input() underAge!: string;
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() gender!: GenderType;
  @Input() dob!: string;
  @Input() phoneNumber!: string;
  @Input() email!: string;
  @Input() isVIP!: boolean;
  @Input() preferLanguage!: string;
  @Input() address!: AddressType | null;
  @Input() emergencyContact!: UserSettingEmergencyContactType | null;
  @Input() privateInsurance!: UserSettingPrivateInsuranceType | null;
  @Input() pregancyDueDate!: string | null;

  //Validator
  @Output() firstNameValidatorChange = new EventEmitter<boolean>();
  @Output() lastNameValidatorChange = new EventEmitter<boolean>();
  @Output() phoneNumberValidatorChange = new EventEmitter<boolean>();
  @Output() emailValidatorChange = new EventEmitter<boolean>();
  @Output() addressValidatorChange = new EventEmitter<boolean>();
  @Output() emergencyContactValidatorChange = new EventEmitter<boolean>();
  @Output() privateInsuranceValidatorChange = new EventEmitter<boolean>();

  @Input() firstNameValidator!: boolean;
  @Input() lastNameValidator!: boolean;
  @Input() phoneNumberValidator!: boolean;
  @Input() emailValidator!: boolean;
  @Input() addressValidator!: boolean;
  @Input() privateInsuranceValidator!: boolean;
  @Input() emergencyContactValidator!: boolean;

  public insuranceSelection = this._insurance.get();
  public selectedInsurance = this._insurance.defaultInsuranceCompany();
  public requiresEmergencyContact = false;
  public emergencyContactValidators = {
    firstName: false,
    lastName: false,
    phone: false,
  };
  public hidden = true;

  constructor(private _insurance: PrivateHealthInsuranceListService) {}

  ngOnInit() {
    this.startValidator();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const privateInsuranceChange = changes['privateInsurance'];
    const isUnderAgeChange = changes['isUnderAge'];

    if (privateInsuranceChange !== undefined) {
      const value = privateInsuranceChange.currentValue;
      this.selectedInsurance =
        value !== null ? { name: value.company, value: value.company } : { name: 'Medibank', value: 'Medibank' };
    }

    if (isUnderAgeChange !== undefined) {
      this.requiresEmergencyContact = this.isRelatedToMedical && isUnderAgeChange.currentValue;
      if (this.requiresEmergencyContact && this.emergencyContact === null) {
        this.onChangeEmergencyContact();
      } else {
        this.onEmergencyValidator();
      }

      if (!this.requiresEmergencyContact) {
        const hasValue =
          this.emergencyContact !== null
            ? this.emergencyContact.firstName.length > 0 &&
              this.emergencyContact.lastName.length > 0 &&
              this.emergencyContact.phoneNumber.length > 0
            : true;
        if (!hasValue) {
          this.onChangeEmergencyContact();
        }
      }
    }
  }

  onChangeDateOfBrith(date: string) {
    this.dobChange.emit(date);
    this.underAgeChange.emit(date);
  }

  private startValidator() {
    this.addressValidator = this.address !== null ? this.addressValidator : true;
    this.privateInsuranceValidator = this.privateInsurance !== null ? this.privateInsuranceValidator : true;
    this.onChangeDateOfBrith(this.dob);
    this.addressValidatorChange.emit(this.addressValidator);

    //Emergency
    this.emergencyContactValidator = this.emergencyContact !== null ? this.emergencyContactValidator : true;
    this.requiresEmergencyContact = this.isRelatedToMedical && this.isUnderAge;
    if (this.requiresEmergencyContact && this.emergencyContact === null) {
      this.onChangeEmergencyContact();
    }
    if (!this.requiresEmergencyContact) {
      this.onEmergencyValidator();
    }
    //PrivateInsurance
    this.onChangePrivateInsuranceValue();
  }

  onChangeProvideAddress() {
    this.address = this.address === null ? { postCode: '', state: '', street: '', suburb: '' } : null;
    this.addressValidator = this.address !== null ? false : true;
    this.addressChange.emit(this.address);
    this.addressValidatorChange.emit(this.addressValidator);
  }

  public onChangePrivateInsuranceCompany(pair: NameValuePairType) {
    if (this.privateInsurance) {
      this.privateInsurance.company = pair.name;
    }
  }

  public onChangeEmergencyContact() {
    this.emergencyContact =
      this.emergencyContact === null ? { phoneNumber: '', firstName: '', lastName: '' } : null;
    this.onEmergencyValidator();
  }

  public onEmergencyValidator() {
    if (this.requiresEmergencyContact) {
      this.emergencyContactValidator =
        this.emergencyContact !== null
          ? this.emergencyContactValidators.firstName &&
            this.emergencyContactValidators.lastName &&
            this.emergencyContactValidators.phone &&
            this.emergencyContact.firstName.length > 0 &&
            this.emergencyContact.lastName.length > 0 &&
            this.emergencyContact.phoneNumber.length > 0
          : true;
      this.emergencyContactChange.emit(this.emergencyContact);
      this.emergencyContactValidatorChange.emit(this.emergencyContactValidator);
    } else {
      this.emergencyContactValidator =
        this.emergencyContact !== null
          ? this.emergencyContact.firstName.length > 0 &&
            this.emergencyContact.lastName.length > 0 &&
            this.emergencyContact.phoneNumber.length > 0
          : true;
      this.emergencyContactChange.emit(this.emergencyContact);
      this.emergencyContactValidatorChange.emit(this.emergencyContactValidator);
    }
  }

  public onChangePrivateInsurance() {
    this.privateInsurance =
      this.privateInsurance === null ? { company: 'Medibank', memberNum: '', reference: '' } : null;
    this.selectedInsurance = { name: 'Medibank', value: 'Medibank' };
    this.onChangePrivateInsuranceValue();
  }

  public onChangePrivateInsuranceValue() {
    this.privateInsuranceValidator =
      this.privateInsurance !== null
        ? this.privateInsurance.company.length > 0 && this.privateInsurance.memberNum.length > 0
        : true;
    this.privateInsuranceChange.emit(this.privateInsurance);
    this.privateInsuranceValidatorChange.emit(this.privateInsuranceValidator);
  }
}
