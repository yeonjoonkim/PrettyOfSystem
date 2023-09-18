import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';
@Component({
  selector: 'e-mail',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  private readonly _emailValidatorRules: RegExp =
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  public validEmail: string = '';
  public validated!: boolean;
  @Output() emailChange = new EventEmitter<string>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() readOnly: boolean = false;
  @Input() mode: Constant.ComponentModeType = Constant.Default.ComponentMode.Form;
  @Input() isRequired: boolean = false;
  @Input()
  get email() {
    return this.validEmail;
  }
  set email(value: string) {
    this.validEmail = value;
    this.emailChange.emit(this.validEmail);
  }
  @Input()
  get validate() {
    return this.validated;
  }
  set validate(value: boolean) {
    this.validated = this._emailValidatorRules.test(this.validEmail);
    this.validateChange.emit(this.validated);
  }
  public placeHolder: string = '';
  public requiredPlaceHolder: string = '';
  public entered: boolean = false;

  constructor(private _global: GlobalService) {}

  async ngOnInit() {
    this.validated = this._emailValidatorRules.test(this.validEmail);
    await this.setPlaceHolder();
  }

  async onChangeEmail() {
    this.validated = this._emailValidatorRules.test(this.validEmail);
    this.validate = this.validated;
    this.email = this.validEmail;
    this.entered = true;
  }

  private async setPlaceHolder() {
    this.placeHolder = this.isRequired
      ? await this._global.language.transform('placeholder.title.required')
      : this.placeHolder;
  }
}
