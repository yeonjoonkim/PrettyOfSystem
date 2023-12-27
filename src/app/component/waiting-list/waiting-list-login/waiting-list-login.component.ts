import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { RecaptchaVerifier, getAuth } from 'firebase/auth';
import { Subject, takeUntil, timeout } from 'rxjs';
import { ClientLogin } from 'src/app/class/client/client-login.class';
import { ITimer } from 'src/app/interface';
import { ClientService } from 'src/app/service/client/client.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';

@Component({
  selector: 'waiting-list-login',
  templateUrl: './waiting-list-login.component.html',
  styleUrls: ['./waiting-list-login.component.scss'],
})
export class WaitingListLoginComponent implements OnInit {
  private _destroy$ = new Subject<void>();
  private _endTimer$ = new Subject<void>();
  private _sessionId: string | null = this._routerParam.snapshot.paramMap.get('id');

  public _recaptcha!: RecaptchaVerifier;
  public login!: ClientLogin;
  public timer!: ITimer;
  public sendingVerification: boolean = false;
  public sendOTP: boolean = false;
  public validator = {
    phone: false,
    otp: false,
  };
  constructor(
    private _waitingList: WaitingListService,
    private _routerParam: ActivatedRoute,
    private _client: ClientService,
    private _afa: AngularFireAuth,
    private _global: GlobalService,
    private _router: Router
  ) {
    this.login = new ClientLogin(this._afa, this._client);
  }

  async ngOnInit() {
    this.startRecaptchaVerifier();
    await this.login.reset();
    this.sendOTP = false;
    this.validator.phone = false;
    this.validator.otp = false;
  }

  public async verifyingAccount() {
    this.login.verifying = true;
    const verification = await this._waitingList.client.isAccountExisting(this.login.phoneNumber);
    if (!verification && this._sessionId !== null) {
      this.login.verifying = false;
      await this.createAccount();
    } else {
      await this.sendPhoneOTP();
    }
  }

  public async sendPhoneOTP() {
    try {
      this.login.verifying = true;
      await this.login.sendOtpVerification(this._recaptcha);
      this.login.verifying = false;
      this.activateTimer();
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
    if (this.login.logined) {
      await this._router.navigateByUrl(`waiting-list/${this._sessionId}/update-client-info`);
    }
  }

  private async activateTimer() {
    this.login.timer.value$.pipe(takeUntil(this._endTimer$)).subscribe(timer => {
      this.timer = timer;
      if (timer.end) {
        this.login.timer.end();
        this._endTimer$.next();
      }
    });
  }

  private startRecaptchaVerifier() {
    const auth = getAuth();
    this._recaptcha = new RecaptchaVerifier('recaptcha-container', { size: 'invisible' }, auth);
    this._recaptcha.verify();
  }

  private async createAccount() {
    const modal = await this._client.modal.createAccount(this.login.phoneNumber);
    await modal.present();
    const result = await this._client.modal.handleDismissCreateAccount(modal);

    if (result !== null) {
      this.login.phoneNumber = result !== null ? result : '';
      setTimeout(async () => {
        await this.verifyingAccount();
      }, 1000);
    }
  }

  public async changePhoneNumber() {
    const modal = await this._client.modal.ChangePhoneNumber();
    await modal.present();
  }

  public async presentPrivacyPolicy() {
    await this._global.appAgreement.presentPrivacyPolicy();
  }

  public async presentTermandCondition() {
    await this._global.appAgreement.presentTermsandCondition();
  }

  ngOnDestroy() {
    this._endTimer$.next();
    this._destroy$.next();
    this._endTimer$.complete();
    this._destroy$.complete();
  }
}
