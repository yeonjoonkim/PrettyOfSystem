import { Injectable } from '@angular/core';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import { IUser } from 'src/app/interface';
import { UserService } from '../user/user.service';
import { Observable, firstValueFrom, map, of, switchMap } from 'rxjs';
import { GlobalService } from '../global/global.service';
import { ClientModalService } from './client-modal/client-modal.service';
import { IdTokenResult } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  public isLoggedin$!: Observable<boolean>;
  public isLoggedout$!: Observable<boolean>;
  public info$!: Observable<IUser | null>;
  public claim$!: Observable<IdTokenResult | null>;
  public preferLanguage$!: Observable<string>;

  constructor(
    public modal: ClientModalService,
    private _userRepo: UserCredentialRepositoryService,
    private _user: UserService,
    private _global: GlobalService,
    private _afAuth: AngularFireAuth
  ) {
    this.isLoggedin$ = this._afAuth.authState.pipe(map(user => !!user));
    this.isLoggedout$ = this.isLoggedin$.pipe(map(loggedIn => !loggedIn));
    this.activateUserListener();
    this.claim();
    this.activatePreferLanguageListener();
  }

  public async processLogin() {
    const currentLanguage = await this._global.language.management.storage.getCurrentLanguage();
    const data = await firstValueFrom(this._user.data$);
    if (data !== null) {
      if (data.setting.preferLanguage !== currentLanguage) {
        await this._global.language.onLanguageChange(data.setting.preferLanguage);
      }
    }
  }

  public async createAccount(u: IUser) {
    u.firstName = this._global.textTransform.getTitleFormat(u.firstName);
    u.lastName = this._global.textTransform.getTitleFormat(u.lastName);
    const loginInput: string = u.loginOption.phoneNumber ? u.phoneNumber : u.email;
    const userAccount = this._userRepo.subscribeUserAccount(loginInput);
    let acc = await firstValueFrom(userAccount);
    if (acc !== null) {
      await this.toastExsitingAccountError();
      return false;
    } else {
      u.isSystemAdmin = false;
      return await this._userRepo.createUser(u);
    }
  }

  public async isAccountExisting(phone: string) {
    return await this._user.verifyUserAccount(phone);
  }

  public async build() {
    return await this._userRepo.buildNewUser();
  }

  private async toastExsitingAccountError() {
    const msg = await this._global.language.transform('messageerror.description.existingacc');
    await this._global.toast.presentError(msg);
  }

  private activateUserListener() {
    this.info$ = this._afAuth.authState.pipe(
      switchMap(user => {
        if (user !== null) {
          return this._userRepo.subscribeValueChangeListener(user.uid);
        } else {
          return of(null);
        }
      })
    );
  }

  private claim() {
    this.claim$ = this._afAuth.idTokenResult.pipe(
      map(result => {
        return result;
      })
    );
  }

  private activatePreferLanguageListener() {
    this.preferLanguage$ = this.info$.pipe(
      map(user => {
        if (user !== null) {
          return user.setting.preferLanguage;
        } else {
          return 'en';
        }
      })
    );
  }
}