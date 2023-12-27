import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { Subscription } from 'rxjs';
import { UserLogin } from 'src/app/class/user/user-login.class';
import { ITimer, IUserLoginOption } from 'src/app/interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';
import { UserService } from 'src/app/service/user/user.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { ClientModalService } from 'src/app/service/client/client-modal/client-modal.service';

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
  public login!: UserLogin;
  public validator = {
    phone: false,
    email: false,
    password: false,
    otp: false,
  };
  public sendingVerification: boolean = false;
  public sendOTP: boolean = false;
  public enableOTPVerificationBtn: boolean = false;
  public showPassword: boolean = false;
  public timer!: ITimer;
  private _timerSubscription!: Subscription;
  public _recaptcha!: RecaptchaVerifier;
  constructor(
    private _afa: AngularFireAuth,
    private _userService: UserService,
    private _global: GlobalService,
    private _clientModal: ClientModalService
  ) {
    this.login = new UserLogin(this._afa, this._userService);
  }

  ngOnInit() {
    this.reset();
    this.startRecaptchaVerifier();
  }

  public async presentTermandCondition() {
    await this._global.appAgreement.presentTermsandCondition();
  }

  public async presentPrivacyPolicy() {
    await this._global.appAgreement.presentPrivacyPolicy();
  }

  async ngOnDestroy() {
    this._timerSubscription?.unsubscribe();
    await this.login.timer.end();
    await this.login.reset();
  }

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
    try {
      this.login.verifying = true;
      await this.login.sendOtpVerification(this._recaptcha);
      this.login.verifying = false;
      await this.subscribeTimer();
      this.sendOTP = this.login.errorMsg ? false : true;
    } catch (error) {
      console.error(error);
      this.login.verifying = false;
      this.sendOTP = false;
    }
  }

  public async resendOTP() {
    this._global.loading.show();
    this.login.otp = '';
    this.login.errorMsg = '';
    await this.login.resendOtpVerification(this._recaptcha);
    this._global.loading.dismiss();
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

  public async createAccount() {
    const modal = await this._clientModal.createAccount(this.login.phoneNumber);
    await modal.present();
    const result = await this._clientModal.handleDismissCreateAccount(modal);
    if (result !== null) {
      this.loginOption = { phoneNumber: true, email: false };
      await this._global.loading.init();
      this.reset();
      this.login.phoneNumber = result;
      await this.sendPhoneOTP();
    }
  }

  public async changePhoneNumber() {
    const modal = await this._clientModal.ChangePhoneNumber();
    await modal.present();
  }

  private startRecaptchaVerifier() {
    const auth = getAuth();
    this._recaptcha = new RecaptchaVerifier('recaptcha-container', { size: 'invisible' }, auth);
    this._recaptcha.verify();
  }
}
