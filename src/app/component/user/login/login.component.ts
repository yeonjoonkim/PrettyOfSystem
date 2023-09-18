import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { Subscription } from 'rxjs';
import { UserLogin } from 'src/app/class/user/user-login.class';
import { ITimer, IUserLoginOption } from 'src/app/interface';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('textbox') public textbox!: TextBoxComponent;
  public loginOption: IUserLoginOption = {
    email: false,
    phoneNumber: true,
  };
  public login: UserLogin = new UserLogin();
  public validator = {
    phone: false,
    email: false,
    password: false,
    otp: false,
  };
  public sendOTP: boolean = false;
  public enableOTPVerificationBtn: boolean = false;
  public showPassword: boolean = false;
  public timer!: ITimer;
  private _timerSubscription!: Subscription;

  constructor() {}

  ngOnInit() {}

  async ngOnDestroy() {
    this._timerSubscription?.unsubscribe();
    await this.login.timer.end();
  }

  public ngAfterViewInit(): void {}

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
    this.showPassword = !this.showPassword;
  }
  public onChangeOTP() {
    this.enableOTPVerificationBtn = this.validator.otp && !this.timer?.end;
  }

  public onChangePassword() {
    let inputEl = this.textbox?.input?.nativeElement;
    if (inputEl) {
      inputEl.type = 'password';
    }
    this.validator.password = this.login.password.length > 6;
  }

  public onChangeLoginOption() {
    this.reset();
  }

  public async onClickLoginWithEmail() {
    await this.login.emailLogin();
  }

  public async sendPhoneOTP() {
    await this.subscribeTimer();
    await this.login.sendOtpVerification();
    this.sendOTP = true;
  }

  public async resendOTP() {
    this.login.otp = '';
    await this.login.resendOtpVerification();
  }

  public async verifyPhoneOTP() {
    await this.login.verifyOTP();
  }

  public async reset() {
    await this.login.reset();
    this.sendOTP = false;
    this.validator.email = false;
    this.validator.password = false;
    this.validator.phone = false;
    this.validator.otp = false;
    this.enableOTPVerificationBtn = false;
    this.showPassword = false;
    this._timerSubscription?.unsubscribe();
  }

  private async subscribeTimer() {
    this._timerSubscription = this.login.timer.value$.subscribe(timer => {
      this.timer = timer;
      this.enableOTPVerificationBtn = this.validator.otp && !this.timer?.end;
      if (timer.end) {
        this.login.timer.end();
      }
    });
  }
}
