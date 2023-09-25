import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RecaptchaVerifier, User } from 'firebase/auth';
import { IUserLogin, NameValuePairType } from 'src/app/interface';
import { CryptService } from 'src/app/service/global/crypt/crypt.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { TimerService } from 'src/app/service/global/timer/timer.service';
import { UserService } from 'src/app/service/user/user.service';
export class UserLogin implements IUserLogin {
  private _phoneNumber: string = '';
  private _otp: string = '';
  private _emailAddress: string = '';
  private _password: string = '';
  private _errorMsg: string = '';
  private _cypo: CryptService;
  public confirmationResult: any;
  public timer: TimerService;
  public remainingOtpAttempt: number = 4;
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
    private _userService: UserService,
    private _global: GlobalService
  ) {
    this._cypo = new CryptService();
    this.timer = new TimerService();
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(ph: string) {
    this._phoneNumber = ph;
  }

  get emailAddress(): string {
    return this._emailAddress;
  }

  set emailAddress(email: string) {
    this._emailAddress = email;
  }

  get password(): string {
    let decrypted: string = this._password.length > 0 ? this._cypo.decrypt(this._password) : '';
    return decrypted;
  }

  set password(password: string) {
    let encryptedPassword: string = password.length > 0 ? this._cypo.encrypt(password) : '';
    this._password = encryptedPassword;
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

  public async reset() {
    this.emailAddress = '';
    this.password = '';
    this.phoneNumber = '';
    this.otp = '';
    this.errorMsg = '';
    await this.timer.end();
  }

  public async emailLogin() {
    const verification = await this._userService.verifyUserAccount(this.emailAddress);
    if (verification) {
      try {
        this.errorMsg = '';
        this._global.loading.show();
        const userCredential = await this._afa.signInWithEmailAndPassword(
          this._emailAddress,
          this.password
        );
        this._global.loading.dismiss();
        if (userCredential) {
          await this.processLogin(userCredential);
        }
      } catch (err) {
        const error = JSON.stringify(err);
        this.handleError(error);
      }
    } else {
      this.handleNotExistUserError();
    }
  }

  public async sendOtpVerification(recaptcha: RecaptchaVerifier) {
    const verification = await this._userService.verifyUserAccount(this._phoneNumber);
    if (verification) {
      try {
        this._global.loading.show();
        this.errorMsg = '';
        this.confirmationResult = await this._afa.signInWithPhoneNumber(
          this._phoneNumber,
          recaptcha
        );
        this.timer.startTimerByMin(0.5);
        this._global.loading.dismiss();
      } catch (err) {
        const error: string = JSON.stringify(err);
        this.handleError(error);
        throw err;
      }
    } else {
      this.handleNotExistUserError();
    }
  }

  public async resendOtpVerification(recaptcha: RecaptchaVerifier) {
    await this.timer.restart();
    await this._global.loading.show();
    const confirm = await this._afa.signInWithPhoneNumber(this._phoneNumber, recaptcha);
    await this._global.loading.dismiss();
    this.confirmationResult = confirm;
  }

  public async verifyOTP() {
    try {
      await this._global.loading.show();
      const userCredential = await this.confirmationResult.confirm(this.otp);
      await this._global.loading.dismiss();
      if (userCredential) {
        await this.processLogin(userCredential);
      }
    } catch (err) {
      const error: string = JSON.stringify(err);
      this.handleError(error);
    }
  }

  private async processLogin(credential: any) {
    const user = credential?.user;
    if (user !== undefined) {
      await this._userService.init();
      await this.timer.end();
      await this.reset();
    }
  }

  private handleNotExistUserError() {
    const error = this._errorCodes.find(err => err.value === 'usernotexisted');
    if (error !== undefined) {
      this.errorMsg = error.name;
    }
  }

  private async handleError(errorMsg: string) {
    const errorCode = this._errorCodes.find(e => errorMsg.includes(e.value));
    const error = errorCode !== undefined ? errorCode.name : errorMsg;
    if (error.includes('expire')) {
      this.timer.end();
    }
    this.errorMsg = error;
  }
}
