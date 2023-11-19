import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class InputTextBoxComponent implements OnInit {
  @ViewChild('textBox')
  public textBox!: TextBoxComponent;
  public validatedValue!: string;
  public hasValue!: boolean;
  public valueLengthCount: number = 0;
  public entered: boolean = false;
  public isOverMin: boolean = false;
  public isOverMax: boolean = false;

  @Output() valueChange = new EventEmitter<string>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() title!: string;
  @Input() errMsg!: string;
  @Input() isTitleFormat: boolean = false;
  @Input() isUpperFormat: boolean = false;
  @Input() isLowCaseFormat: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() showCounter: boolean = false;
  @Input() tooltip: string = '';
  @Input() max: number = 1000;
  @Input() min: number = 0;
  @Input() isRequired: boolean = false;
  @Input() mode: Constant.ComponentModeType = Constant.Default.ComponentMode.Form;
  @Input() placeholder: string = '';
  @Input() type: 'number' | 'text' = 'text';
  @Input() isRequireLabel: boolean = true;
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
    this.value = this.validatedValue === undefined || this.validatedValue === null ? '' : this.value;
    this.validate = this.validateInput();
    this.valueLengthCount = this.value.length;
    await this.setDefaultPlaceHolder();

    const element = this.textBox.input.nativeElement;
    if (element) {
      element.type = this.type;
    }
  }

  public onChangeValue() {
    this.hasValue = this.validateInput();
    if (this.isLowCaseFormat || this.isTitleFormat || this.isUpperFormat) {
      this.validatedValue = this.transformTextValue();
    }
    this.value = this.validatedValue;
    this.valueLengthCount = this.value.length;
    this.counter = `${this.valueLengthCount}/${this.max}`;
    this.isOverMax = this.valueLengthCount < this.max;
    this.isOverMin = this.valueLengthCount < this.min;
    this.validate = this.hasValue;
    this.entered = true;
  }

  private validateInput() {
    return this.validatedValue.length >= this.min;
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
