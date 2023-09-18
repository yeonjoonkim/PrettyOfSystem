import { IUserLogin } from 'src/app/interface';
import { CryptService } from 'src/app/service/global/crypt/crypt.service';
import { TimerService } from 'src/app/service/global/timer/timer.service';

export class UserLogin implements IUserLogin {
  private _phoneNumber: string = '';
  private _otp: string = '';
  private _emailAddress: string = '';
  private _password: string = '';
  private _errorMsg: string = '';
  private _cypo: CryptService;
  public timer: TimerService;

  constructor() {
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

  public async emailLogin() {}

  public async sendOtpVerification() {
    await this.timer.startTimerByMin(3);
  }

  public async resendOtpVerification() {
    await this.timer.restart();
  }

  public async verifyOTP() {
    await this.timer.end();
  }
}
