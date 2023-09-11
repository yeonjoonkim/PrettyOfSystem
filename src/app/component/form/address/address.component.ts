import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AddressType, PostCodeFilterOptionType } from 'src/app/interface/global/global.interface';
import * as Constant from 'src/app/constant/constant';
import { PostcodeService } from './service/postcode-service.service';
import { GlobalService } from 'src/app/service/global/global.service';

export interface AddressTypeAutoCompleteFilterOption {
  suburb: string[];
  state: string[];
}

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit, OnChanges {
  @Output() addressChange = new EventEmitter<AddressType>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() readOnly: boolean = false;
  @Input() mode: Constant.ComponentModeType = Constant.Default.ComponentMode.Form;
  @Input() defaultState: string = Constant.State.AustraliaType.QLD;
  @Input() defaultSuburb: string = 'SUNNYBANK';
  @Input() isRequired: boolean = true;
  @Input() excludeStreet: boolean = false;
  @Input()
  get address() {
    return this.inputAddress;
  }
  set address(value: AddressType) {
    this.inputAddress = value;
    this.addressChange.emit(value);
  }
  @Input()
  get validate() {
    return this.inputValidator;
  }
  set validate(value: boolean) {
    this.inputValidator = value;
    this.validateChange.emit(this.inputValidator);
  }
  public inputValidator: boolean = false;
  public inputAddress!: AddressType;
  public filterOption: PostCodeFilterOptionType = {
    stateList: [],
    postCodeList: [],
  };
  public autoCompleteFilter: AddressTypeAutoCompleteFilterOption = {
    suburb: [],
    state: [],
  };
  private readonly onChangeOption = {
    defaultState: 'defaultState',
    defaultSuburb: 'defaultSuburb',
  };
  public placeHolder: string = '';
  public entered = {
    street: false,
    suburb: false,
    state: false,
  };

  constructor(private postcode: PostcodeService, private global: GlobalService) {}

  async ngOnInit() {
    await this.setDefaultPlaceHolder();
    this.setDefault();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleOnChangeDefaultState(changes);
  }

  private handleOnChangeDefaultState(changes: SimpleChanges) {
    let currentValue = changes[this.onChangeOption.defaultState]?.currentValue;
    let previousValue = changes[this.onChangeOption.defaultState]?.previousValue;
    let valueChanged =
      currentValue !== undefined && previousValue != undefined && previousValue != currentValue;
    if (valueChanged) {
      this.resetAddress();
    }
  }

  private resetAddress() {
    this.autoCompleteFilter.state = [];
    this.autoCompleteFilter.suburb = [];
    this.address = { street: '', state: '', suburb: '', postCode: '' };
    this.setDefault();
  }

  private setDefault() {
    let isValidated: boolean = this.setAddressValidator();
    this.address.state = isValidated ? this.address.state : this.defaultState;
    this.address.suburb = isValidated ? this.address.suburb : this.defaultSuburb;
    this.filterOption = this.postcode.setPostCodeFilterOption(this.address.state);
    this.onChangeSuburb();
  }

  private setAddressValidator(): boolean {
    return (
      (!this.excludeStreet ? this.inputAddress.street.length > 0 : true) &&
      this.inputAddress.suburb.length > 0 &&
      this.inputAddress.state.length > 0 &&
      this.inputAddress.postCode.length > 0
    );
  }

  public onChangeSuburbInput(suburb: string) {
    suburb = suburb.toUpperCase();
    this.autoCompleteFilter.suburb = this.filterOption.postCodeList
      .map(option => option.suburb)
      .filter((sub, index, array) => array.indexOf(sub) === index && sub.indexOf(suburb) !== -1);
  }

  public onChangeStateInput(state: string) {
    state = state.toUpperCase();
    this.autoCompleteFilter.state = this.filterOption.stateList.filter(
      st => st.indexOf(state) !== -1
    );
  }

  public onChangeStreet() {
    this.entered.street = true;
    this.address.street = this.address.street.toUpperCase();
    this.validate = this.setAddressValidator();
    this.addressChange.emit(this.inputAddress);
  }

  public onChangeState() {
    let isEmpty: boolean = this.address.state.length === 0;
    this.entered.state = true;
    this.address = {
      street: '',
      state: this.address.state,
      suburb: '',
      postCode: '',
    };
    this.autoCompleteFilter.state = [];
    this.autoCompleteFilter.suburb = [];
    this.filterOption = !isEmpty
      ? this.postcode.setPostCodeFilterOption(this.address.state)
      : this.postcode.setPostCodeFilterOption(this.defaultState);
    this.validate = this.setAddressValidator();
    this.addressChange.emit(this.inputAddress);
  }

  public onChangeSuburb() {
    this.entered.suburb = true;
    let selectedPostCode = this.filterOption.postCodeList.find(
      option => option.suburb === this.address.suburb
    )?.postCode;
    this.address.postCode = selectedPostCode ? selectedPostCode : '';
    this.validate = this.setAddressValidator();
    this.addressChange.emit(this.inputAddress);
  }

  private async setDefaultPlaceHolder() {
    this.placeHolder = this.isRequired
      ? await this.global.language.transform('placeholder.title.required')
      : this.placeHolder;
  }
}
