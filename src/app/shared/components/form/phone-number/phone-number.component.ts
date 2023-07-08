import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {
  IDropDownMenuSelection,
  IPhoneNumberSelectionController,
  PhoneNumberService,
} from './phone-number.service';
import * as Constant from '../../../services/global/global-constant';
import { GlobalService } from 'src/app/shared/services/global/global.service';

@Component({
  selector: 'phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
})
export class PhoneNumberComponent implements OnInit {
  private validated!: boolean;
  public selectedPhoneNumber: string = '';
  public options!: IPhoneNumberSelectionController;
  public dropDownSelection: IDropDownMenuSelection[] = [];
  public dropDownSelected!: IDropDownMenuSelection;
  public placeHolder: string = '';
  public entered: boolean = false;
  @Output() phoneNumberChange = new EventEmitter<string>();
  @Output() changeCountryCode = new EventEmitter<
    Constant.CurrencyType | undefined
  >();
  @Output() changePhoneCode = new EventEmitter<
    Constant.PhoneCodeType | undefined
  >();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() mode: Constant.ComponentModeType =
    Constant.Default.ComponentMode.Form;
  @Input() readOnly: boolean = false;
  @Input() isRequired: boolean = false;
  @Input() phoneCode!: Constant.PhoneCodeType;
  @Input()
  get phoneNumber(): string {
    return this.selectedPhoneNumber;
  }
  set phoneNumber(value: string) {
    let code = value.substring(0, 3);
    let codeExisted =
      this.phoneValidation.dropDownMenuSelections.filter(
        (c) => c.phoneCode === code
      ).length === 1;
    this.selectedPhoneNumber = codeExisted ? value.substring(3) : value;
  }
  @Input()
  get validate(): boolean {
    return this.validated;
  }
  set validate(value: boolean) {
    this.validated = value;
    this.validateChange.emit(this.validated);
  }

  constructor(
    private phoneValidation: PhoneNumberService,
    private global: GlobalService
  ) {}

  async ngOnInit() {
    this.options = this.phoneValidation.getDefaultOption(this.phoneCode);
    this.dropDownSelection = this.phoneValidation.dropDownMenuSelections;
    this.dropDownSelected = this.phoneValidation.getDefaultDropDownSelect(
      this.options
    );
    this.validate = await this.validateNumber();
    await this.setDefaultPlaceHolder();
  }

  public onChangeDropDownSelection() {
    this.phoneCode = this.dropDownSelected.phoneCode;
    this.options = this.phoneValidation.getDefaultOption(this.phoneCode);
    this.selectedPhoneNumber = this.phoneValidation.startZeroReplacement(
      '',
      this.options.mask
    );
    this.phoneNumberChange.emit(this.phoneCode + this.phoneNumber);
    this.validate = false;
  }

  public async onChangePhoneNumber(event: string) {
    this.selectedPhoneNumber = this.phoneValidation.startZeroReplacement(
      event,
      this.options.mask
    );
    this.validate = await this.validateNumber();
    this.phoneNumber = this.selectedPhoneNumber;
    this.entered = true;
    this.phoneNumberChange.emit(this.phoneCode + this.phoneNumber);
  }

  private async validateNumber() {
    let maskLength = this.options.mask
      .replace(this.options.phoneCode, '')
      .replace(/[\s-]/g, '').length;
    let selectedLength = this.selectedPhoneNumber.replace(/[\s-]/g, '').length;
    let pattern = this.phoneValidation.validateMaskPattern(
      this.selectedPhoneNumber,
      this.options
    );
    return selectedLength === maskLength && pattern;
  }

  private async setDefaultPlaceHolder() {
    this.placeHolder = this.isRequired
      ? await this.global.language.transform('form.placeholder.required')
      : this.placeHolder;
  }
}
