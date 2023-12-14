import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RecaptchaVerifier, User } from 'firebase/auth';
import { NameValuePairType } from 'src/app/interface';
import { ClientService } from 'src/app/service/client/client.service';
import { CryptService } from 'src/app/service/global/crypt/crypt.service';
import { TimerService } from 'src/app/service/global/timer/timer.service';

export class ClientLogin {
  private _phoneNumber: string = '';
  private _otp: string = '';
  private _errorMsg: string = '';
  private _verifying: boolean = false;
  private _logined: boolean = false;
  public timer: TimerService;
  public confirmationResult: any;

  private _cypo: CryptService;
  private _errorCodes: NameValuePairType[] = [
    { value: 'auth/invalid-verification-code', name: 'messageerror.description.invalidotp' },
    { value: 'auth/code-expired', name: 'messageerror.description.otpexpired' },
    { value: 'auth/wrong-password', name: 'messageerror.description.wrongemailorpwd' },
    { value: 'auth/user-not-found', name: 'messageerror.description.wrongemailorpwd' },
    { value: 'auth/too-many-requests', name: 'messageerror.description.toomanyrequests' },
    { value: 'usernotexisted', name: 'messageerror.description.usernotexisted' },
    { value: 'auth/capcha-check-failed', name: 'messageerror.description.notsupportignito' },
    { value: 'auth/user-disabled', name: 'messageerror.description.disabledaccount' },
  ];

  constructor(
    private _afa: AngularFireAuth,
    private _client: ClientService
  ) {
    this.timer = new TimerService();
    this._cypo = new CryptService();
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(ph: string) {
    this._phoneNumber = ph;
  }

  get otp(): string {
    let decrypted: string = this._otp.length > 0 ? this._cypo.decrypt(this._otp) : '';
    return decrypted;
  }

  set otp(otp: string) {
    let encrypted: string = otp.length > 0 ? this._cypo.encrypt(otp) : '';
    this._otp = encrypted;
  }

  get errorMsg(): string {
    return this._errorMsg;
  }

  set errorMsg(errorMsg: string) {
    this._errorMsg = errorMsg;
  }

  get verifying(): boolean {
    return this._verifying;
  }

  set verifying(value: boolean) {
    this._verifying = value;
  }

  get logined(): boolean {
    return this._logined;
  }

  set logined(l: boolean) {
    this._logined = l;
  }

  public async sendOtpVerification(recaptcha: RecaptchaVerifier) {
    try {
      this.errorMsg = '';
      this.confirmationResult = await this._afa.signInWithPhoneNumber(this._phoneNumber, recaptcha);
      this.timer.startTimerByMin(1);
    } catch (err) {
      const error: string = JSON.stringify(err);

      if (error.includes('auth/captcha-check-failed')) {
        this.errorMsg = '';
      } else {
        this.handleError(error);
      }

      throw err;
    }
  }

  public async verifyOTP() {
    try {
      this.verifying = true;
      const userCredential = await this.confirmationResult.confirm(this.otp);
      if (userCredential) {
        this.verifying = false;
        await this.processLogin(userCredential);
        this.logined = true;
      }
    } catch (err) {
      this.verifying = false;
      const error: string = JSON.stringify(err);
      this.logined = false;
      this.handleError(error);
    }
  }

  public async resendOtpVerification(recaptcha: RecaptchaVerifier) {
    await this.timer.restart();
    const confirm = await this._afa.signInWithPhoneNumber(this._phoneNumber, recaptcha);
    this.confirmationResult = confirm;
  }

  private async processLogin(credential: any) {
    const client = credential?.user;
    if (client !== undefined) {
      await this.timer.end();
      await this.reset();
    }
  }

  public test() {
    this.timer.startTimerByMin(1);
  }

  public async reset() {
    this.logined = false;
    this.verifying = false;
    this.phoneNumber = '';
    this.otp = '';
    this.errorMsg = '';
    await this.timer.end();
  }

  public async handleError(errorMsg: string) {
    const errorCode = this._errorCodes.find(e => errorMsg.includes(e.value));
    const error = errorCode !== undefined ? errorCode.name : errorMsg;
    if (error.includes('expire')) {
      this.timer.end();
    }
    this.errorMsg = error;
    const msg = await this._client.global.language.transform(this.errorMsg);
    await this._client.global.toast.presentError(msg);
  }
}
