import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat, ChangeData,  } from 'ngx-intl-tel-input';
import * as Constant from './../../../services/global/global-constant';
export interface PhoneNumber {
  countryCode: string;
  dialCode: string;
  e164Number: string;
  internationalNumber: string;
  nationalNumber: string;
  number: string;
}
@Component({
  selector: 'phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
})
export class PhoneNumberComponent implements OnInit {
  @Input()isRequired: boolean = false;
  @Input()isOptional: boolean = false;
  @Input()readOnly: boolean = true;
  @Input()defaultCountry: Constant.CountryCodeType = Constant.Default.CountryCodeType.Australia;
  public placeholder: string = '';
  public separateDialCode: boolean = false;
  public entered: boolean = false;
  public phoneNumberForm: FormGroup =new FormGroup({
    phone: new FormControl('', [Validators.required])
  });
  public searchCountryField = SearchCountryField;
  public countryISO: CountryISO = CountryISO.Australia;
  public phoneNumberFormat: PhoneNumberFormat = PhoneNumberFormat.International;
  public preferredCountries: CountryISO[] = [
    CountryISO.Australia,
    CountryISO.China,
    CountryISO.HongKong,
    CountryISO.Taiwan,
    CountryISO.Japan,
    CountryISO.SouthKorea
  ];
  public defaultPhoneNumber: PhoneNumber ={
    countryCode: '',
    dialCode: '',
    e164Number: '',
    internationalNumber: '',
    nationalNumber: '',
    number: ''
  }

  constructor() {
  }

  ngOnInit() {
    this.setPlaceholder();
    this.setDefaultCountry();
  }

  onChangeValue(e: PhoneNumber | null) {
    console.log(e)
    if (this.phoneNumberForm.valid) {
      console.log(this.phoneNumberForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

  private setPlaceholder(){ 
    this.placeholder = this.isRequired ? 'form.placeholder.required' : this.isOptional ? 'form.placeholder.optional' : '';
  }
  private setDefaultCountry(){
    this.countryISO = this.defaultCountry === Constant.Default.CountryCodeType.Australia ? CountryISO.Australia 
                  :   this.defaultCountry === Constant.Default.CountryCodeType.China ? CountryISO.China
                  :   this.defaultCountry === Constant.Default.CountryCodeType.Japan ? CountryISO.Japan
                  :   this.defaultCountry === Constant.Default.CountryCodeType.Korean ? CountryISO.SouthKorea
                  : CountryISO.Australia;
  }
}
