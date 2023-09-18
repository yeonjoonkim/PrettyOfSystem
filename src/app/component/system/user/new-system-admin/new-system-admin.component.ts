import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { IFormHeaderModalProp, IUser } from 'src/app/interface';
import * as Constant from '../../../../constant/constant';
import { UserService } from 'src/app/service/user/user.service';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { UserAdminService } from 'src/app/service/user/user-admin/user-admin.service';

@Component({
  selector: 'new-system-admin',
  templateUrl: './new-system-admin.component.html',
  styleUrls: ['./new-system-admin.component.scss'],
})
export class NewSystemAdminComponent implements OnInit {
  @ViewChild('passwordOne') public passwordOne!: TextBoxComponent;
  @ViewChild('passwordTwo') public passwordTwo!: TextBoxComponent;

  public form!: IFormHeaderModalProp;
  public user: IUser = this._userService.defaultUser();
  public validator = {
    phone: false,
    email: false,
    password: false,
    firstName: false,
    lastName: false,
  };
  public passwordConfirmation = {
    one: '',
    two: '',
  };
  public passwordValidation = {
    one: false,
    two: false,
  };
  public visible = {
    passwordOne: false,
    passwordTwo: false,
  };

  private _paramUser!: IUser;
  constructor(
    private _navParams: NavParams,
    private _userService: UserService,
    private _systemAdmin: UserAdminService
  ) {}

  async ngOnInit() {
    await this.loadingFromCtrl();
  }

  private async loadingFromCtrl() {
    const form: IFormHeaderModalProp = this._navParams.get(Constant.Default.ComponentMode.Form);
    this._paramUser = this._navParams.get('config');
    this.form = form
      ? form
      : {
          readOnly: true,
          headerTitle: '',
          action: Constant.Default.FormAction.Read,
          enabledSavebutton: false,
        };
    this.user = this._paramUser ? this._paramUser : this._userService.defaultUser();
  }

  public onChangeLoginOption() {
    this.validator.password = false;
    this.user.encryptedPassword = '';
    this.passwordConfirmation.one = '';
    this.passwordConfirmation.two = '';
    this.passwordValidation.one = false;
    this.passwordValidation.two = false;
    this.visible.passwordOne = false;
    this.visible.passwordTwo = false;

    this.handleFormEnableSaveBtn();
  }

  public onChangePasswordOne() {
    let inputEl = this.passwordOne?.input?.nativeElement;
    if (inputEl) {
      inputEl.type = 'password';
      this.visible.passwordOne = false;
    }
    this.validatePassword();
  }

  public togglePasswordOne() {
    const inputEl = this.passwordOne.input.nativeElement;
    inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
    this.visible.passwordOne = !this.visible.passwordOne;
  }

  public onChangePasswordTwo() {
    let inputEl = this.passwordTwo?.input?.nativeElement;
    if (inputEl) {
      inputEl.type = 'password';
      this.visible.passwordTwo = false;
    }
    this.validatePassword();
  }

  public togglePasswordTwo() {
    const inputEl = this.passwordTwo.input.nativeElement;
    inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
    this.visible.passwordTwo = !this.visible.passwordTwo;
  }

  private validatePassword() {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isSamePassword = this.passwordConfirmation.one === this.passwordConfirmation.two;
    this.passwordValidation.one = passwordPattern.test(this.passwordConfirmation.one);
    this.passwordValidation.two = passwordPattern.test(this.passwordConfirmation.two);
    this.validator.password =
      isSamePassword && this.passwordValidation.one && this.passwordValidation.two;
    this.handleFormEnableSaveBtn();
  }

  public handleFormEnableSaveBtn() {
    const fullNameValiator = this.validator.firstName && this.validator.lastName;
    let enabled = this.validator.email && fullNameValiator && this.validator.phone;
    if (this.user.loginOption.email) {
      enabled = enabled && this.validator.password;
    }
    this.form.enabledSavebutton = enabled;
  }

  public async dismiss() {
    await this._systemAdmin.modal.dismiss();
  }

  public async onClickCreate() {
    const encrypted = this._systemAdmin.encryptPassword(this.passwordConfirmation.one);
    await this._systemAdmin.handleCreate(this.user, encrypted);
  }
}
