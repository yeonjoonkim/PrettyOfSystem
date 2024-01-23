import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import {
  AddressType,
  UserSettingEmergencyContactType,
  UserSettingMassageType,
  UserSettingMedicalHistroyType,
  UserSettingPrivateInsuranceType,
} from 'src/app/interface';

@Component({
  selector: 'shop-client-editor',
  templateUrl: './shop-client-editor.component.html',
  styleUrls: ['./shop-client-editor.component.scss'],
})
export class ShopClientEditorComponent implements OnInit {
  //Action
  @Output() onClickAction = new EventEmitter<void>();
  @Output() onClickDelete = new EventEmitter<void>();

  //Mode
  @Input() type: 'client' | 'shop' = 'shop';
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() validator!: boolean;
  @Input() forceMobile: boolean = false;

  //Input
  @Output() firstNameChange = new EventEmitter<string>();
  @Output() lastNameChange = new EventEmitter<string>();
  @Output() genderChange = new EventEmitter<Constant.GenderType>();
  @Output() dobChange = new EventEmitter<string>();
  @Output() phoneNumberChange = new EventEmitter<string>();
  @Output() emailChange = new EventEmitter<string>();
  @Output() addressChange = new EventEmitter<AddressType | null>();
  @Output() signatureChange = new EventEmitter<string | null>();
  @Output() isVIPChange = new EventEmitter<boolean>();
  @Output() hasMarketingEmailConsentChange = new EventEmitter<boolean>();
  @Output() hasMarketingSMSConsentChange = new EventEmitter<boolean>();
  @Output() hasTermandConditionConsentChange = new EventEmitter<boolean>();
  @Output() preferLanguageChange = new EventEmitter<string>();
  @Output() pregancyDueDateChange = new EventEmitter<string | null>();
  @Output() privateInsuranceChange = new EventEmitter<UserSettingPrivateInsuranceType | null>();
  @Output() massageChange = new EventEmitter<UserSettingMassageType>();
  @Output() medicalChange = new EventEmitter<UserSettingMedicalHistroyType>();
  @Output() emergencyContactChange = new EventEmitter<UserSettingEmergencyContactType | null>();
  @Output() underAgeChange = new EventEmitter<string>();

  @Input() isRelatedToMedical!: boolean;
  @Input() isMassageShop!: boolean;
  @Input() isSkinCare!: boolean;
  @Input() isHairSalon!: boolean;
  @Input() isPersonalTraining!: boolean;
  @Input() isNailArt!: boolean;
  @Input() isMobileShop!: boolean;

  @Input() isUnderAge!: boolean;
  @Input() underAge!: string;
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() gender!: Constant.GenderType;
  @Input() dob!: string;
  @Input() phoneNumber!: string;
  @Input() email!: string;
  @Input() address!: AddressType | null;
  @Input() signature!: string | null;
  @Input() isVIP!: boolean;
  @Input() hasMarketingEmailConsent!: boolean;
  @Input() hasMarketingSMSConsent!: boolean;
  @Input() hasTermandConditionConsent!: boolean;
  @Input() preferLanguage!: string;
  @Input() pregancyDueDate!: string | null;
  @Input() privateInsurance!: UserSettingPrivateInsuranceType | null;
  @Input() massage!: UserSettingMassageType;
  @Input() medical!: UserSettingMedicalHistroyType;
  @Input() emergencyContact!: UserSettingEmergencyContactType | null;
  @Input() timezone!: Constant.TimeZoneType;

  //Validator

  @Output() firstNameValidatorChange = new EventEmitter<boolean>();
  @Output() lastNameValidatorChange = new EventEmitter<boolean>();
  @Output() phoneNumberValidatorChange = new EventEmitter<boolean>();
  @Output() emailValidatorChange = new EventEmitter<boolean>();
  @Output() addressValidatorChange = new EventEmitter<boolean>();
  @Output() privateInsuranceValidatorChange = new EventEmitter<boolean>();
  @Output() emergencyContactValidatorChange = new EventEmitter<boolean>();
  @Output() termAndConditionValidatorChange = new EventEmitter<boolean>();
  @Output() signatureValidatorChange = new EventEmitter<boolean>();

  @Input() firstNameValidator!: boolean;
  @Input() lastNameValidator!: boolean;
  @Input() phoneNumberValidator!: boolean;
  @Input() emailValidator!: boolean;
  @Input() addressValidator!: boolean;
  @Input() privateInsuranceValidator!: boolean;
  @Input() emergencyContactValidator!: boolean;
  @Input() termAndConditionValidator!: boolean;
  @Input() signatureValidator!: boolean;

  public isExpandedAgreement!: boolean;
  constructor() {}

  ngOnInit() {}

  public onUnderAgeChange(event: string) {
    this.underAgeChange.emit(event);
  }

  public onChangeSignautre(event: string | null) {
    const validator = this.isRelatedToMedical ? event !== null && event.length > 0 : true;
    this.signatureChange.emit(event);
    this.signatureValidatorChange.emit(validator);
  }
}
