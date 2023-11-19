import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { CryptService } from 'src/app/service/global/crypt/crypt.service';

@Component({
  selector: 'password-confirmation',
  templateUrl: './password-confirmation.component.html',
  styleUrls: ['./password-confirmation.component.scss'],
})
export class PasswordConfirmationComponent implements OnInit {
  @ViewChild('newPassword')
  public new!: TextBoxComponent;
  @ViewChild('confirmationPassword')
  public confirmation!: TextBoxComponent;
  @Output() passwordChange = new EventEmitter<string>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input()
  get validate(): boolean {
    return this._validator;
  }
  set validate(validated: boolean) {
    this._validator = validated;
  }
  public password = {
    new: '',
    confirmation: '',
  };
  public entered = {
    new: false,
    confirmation: false,
  };
  public visible = {
    new: false,
    confirmation: false,
  };
  public validator = {
    new: false,
    confirmation: false,
    same: false,
  };
  private _passwordPattern: RegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  private _validator: boolean = false;
  constructor(private _cryp: CryptService) {}

  ngOnInit() {}

  public onChangeNewPassword() {
    const newPasswordElement = this.new.input.nativeElement;
    if (newPasswordElement) {
      newPasswordElement.type = 'password';
      this.visible.new = false;
    }
    this.processValidate();
    this.handleOutput();
  }

  public onChangeConfirmationPassword() {
    const confirmPasswordElement = this.confirmation.input.nativeElement;
    if (confirmPasswordElement) {
      confirmPasswordElement.type = 'password';
      this.visible.confirmation = false;
    }
    this.processValidate();
    this.handleOutput();
  }

  public toggleVisibleNewPassword() {
    const newPasswordElement = this.new.input.nativeElement;
    if (newPasswordElement) {
      newPasswordElement.type = newPasswordElement.type === 'password' ? 'text' : 'password';
      this.visible.new = !this.visible.new;
    }
  }

  public toggleVisibleConfirmationPassword() {
    const confirmPasswordElement = this.confirmation.input.nativeElement;
    if (confirmPasswordElement) {
      confirmPasswordElement.type = confirmPasswordElement.type === 'password' ? 'text' : 'password';
      this.visible.confirmation = !this.visible.confirmation;
    }
  }
  private processValidate() {
    this.entered.new = this.password.new.length > 7;
    this.entered.confirmation = this.password.confirmation.length > 7;
    this.validator.new = this._passwordPattern.test(this.password.new);
    this.validator.confirmation = this._passwordPattern.test(this.password.confirmation);
    this.validator.same =
      this.password.new === this.password.confirmation && this.validator.new && this.validator.confirmation;
  }

  private handleOutput() {
    this.validate = this.validator.new && this.validator.confirmation && this.validator.same;
    if (this._validator) {
      const encrypted = this._cryp.encrypt(this.password.confirmation);
      this.passwordChange.emit(encrypted);
    }
    this.validateChange.emit(this._validator);
  }
}
