import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import * as Constant from 'src/app/service/global/global-constant';
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
export class PhoneNumberComponent implements OnInit, OnChanges {
  @Output() phoneChange = new EventEmitter<string>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() isRequired: boolean = false;
  @Input() isOptional: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() defaultCountry: Constant.CountryCodeType = Constant.Default.CountryCodeType.Australia;
  @Input() mode: Constant.ComponentModeType = Constant.Default.ComponentMode.Form;
  @Input() 
  get phone(){
    return this.phoneNumberForm.value.phone;
  }
  set phone(input: PhoneNumber | string){
    let isString = typeof input === 'string';
    let isPhoeNumberType = this.isPhoneNumber(input);
    if(isString){
      let str: string = input as string;
      if(!this.entered){
        this.assignPhoneNumberForm(str);
      }
      this.valueReceived = true;
    }
    if(isPhoeNumberType){
      let phoneType = input as PhoneNumber;
      this.displayNumber = phoneType.nationalNumber;
      this.assignPhoneNumberForm(this.displayNumber);
      this.phoneChange.emit(phoneType.e164Number);
    }
  }
  @Input()
  get validate(){
    return this.validated;
  }
  set validate(input: boolean){
    this.validated = input;
    this.validateChange.emit(input);
  }

  public validated: boolean = false;
  private countryLoad: boolean = false;
  private valueReceived: boolean = false;
  private validator: RegExp = /[\s-]/;
  public placeholder: string = '';
  public separateDialCode: boolean = false;
  public entered: boolean = false;
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
  public defaultPhoneNumber: PhoneNumber = {
    countryCode: '',
    dialCode: '',
    e164Number: '',
    internationalNumber: '',
    nationalNumber: '',
    number: ''
  }
  public phoneNumberForm: FormGroup = new FormGroup({
    phone: new FormControl('', [Validators.required])
  });
  public displayNumber: string = '';

  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    let readOnlyChange = changes['readOnly'];
    if(readOnlyChange){
      this.onChangeReadOnly();
    }
  }

  ngOnInit() {
    this.setPlaceholder();
    this.setDefaultCountry();
  }

  private onChangeReadOnly(){
    this.assignPhoneNumberForm(this.phoneNumberForm.value.phone);
  }

  onChangeValue(input: PhoneNumber | null) {
    if(input !== null && this.isPhoneNumber(input) 
    && this.displayNumber !== input.nationalNumber 
    && this.displayNumber !== this.phoneNumberForm.value.phone){
      this.entered = this.valueReceived ? true : false;
      this.validate = this.validator.test(input.nationalNumber);
      this.phone = input;
    }
  }

  public onChangeCountry(){
    if(this.countryLoad){
      this.onChangeValue(this.defaultPhoneNumber);
    }else{
      this.countryLoad = true;
    }
  }

  private assignPhoneNumberForm(input: string){
    let disabled = this.readOnly;
    this.phoneNumberForm = new FormGroup({
      phone: new FormControl({value: input, disabled: this.readOnly}, [Validators.required])
    });
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

  private isPhoneNumber(obj: any): obj is PhoneNumber{
    return obj &&
    typeof obj.countryCode === 'string' &&
    typeof obj.dialCode === 'string' &&
    typeof obj.e164Number === 'string' &&
    typeof obj.internationalNumber === 'string' &&
    typeof obj.nationalNumber === 'string' &&
    typeof obj.number === 'string';
  }
}
