import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class TextBoxComponent implements OnInit {
  public validatedValue!: string;
  public hasValue!: boolean;
  public valueLengthCount: number = 0;
  public entered: boolean = false;
  @Output() valueChange = new EventEmitter<string>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() title!: string;
  @Input() errMsg!: string;
  @Input() isTitleFormat: boolean = false;
  @Input() isUpperFormat: boolean = false;
  @Input() isLowCaseFormat: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() showCounter: boolean = false;
  @Input() max: number = 1000;
  @Input() min: number = 0;
  @Input() isRequired: boolean = false;
  @Input() mode: Constant.ComponentModeType = Constant.Default.ComponentMode.Form;
  @Input() placeholder: string = '';
  @Input()
  get value() {
    return this.validatedValue;
  }
  set value(value: string) {
    this.validatedValue = value;
    this.valueChange.emit(this.validatedValue);
  }
  @Input()
  get validate() {
    return this.hasValue;
  }
  set validate(value: boolean) {
    this.hasValue = value;
    this.validateChange.emit(this.hasValue);
  }
  public counter: string = `${this.valueLengthCount}/${this.max}`;

  constructor(private _global: GlobalService) {}

  async ngOnInit() {
    this.value =
      this.validatedValue === undefined || this.validatedValue === null ? '' : this.value;
    this.validate = this.validateInput();
    this.valueLengthCount = this.value.length;
    await this.setDefaultPlaceHolder();
  }

  public onChangeValue() {
    this.hasValue = this.validateInput();
    this.validatedValue = this.transformTextValue();
    this.value = this.validatedValue;
    this.valueLengthCount = this.value.length;
    this.counter = `${this.valueLengthCount}/${this.max}`;
    this.validate = this.hasValue;
    this.entered = true;
  }

  private validateInput() {
    return this.validatedValue.length > this.min;
  }

  private transformTextValue() {
    return this.isLowCaseFormat
      ? this.validatedValue.toLocaleLowerCase()
      : this.isUpperFormat
      ? this.validatedValue.toLocaleUpperCase()
      : this.isTitleFormat
      ? this._global.textTransform.getTitleFormat(this.validatedValue)
      : this.validatedValue;
  }

  private async setDefaultPlaceHolder() {
    this.placeholder = this.isRequired
      ? await this._global.language.transform('placeholder.title.required')
      : this.placeholder;
  }
}
