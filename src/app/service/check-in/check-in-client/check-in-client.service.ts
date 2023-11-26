import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IdTokenResult } from 'firebase/auth';
import { Observable, map, of, switchMap } from 'rxjs';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import { IUser } from 'src/app/interface';
import { GlobalService } from '../../global/global.service';
import { UserService } from '../../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class CheckInClientService {
  public isLoggedin$!: Observable<boolean>;
  public isLoggedout$!: Observable<boolean>;
  public info$!: Observable<IUser | null>;
  public claim$!: Observable<IdTokenResult | null>;
  public preferLanguage$!: Observable<string>;
  constructor(
    private _afAuth: AngularFireAuth,
    private _userRepo: UserCredentialRepositoryService,
    private _user: UserService,
    private _global: GlobalService
  ) {
    this.isLoggedin$ = this._afAuth.authState.pipe(map(user => !!user));
    this.isLoggedout$ = this.isLoggedin$.pipe(map(loggedIn => !loggedIn));
    this.activateUserListener();
    this.claim();
    this.activatePreferLanguageListener();
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

  public async update(before: IUser, after: IUser) {
    return await this._user.updateUser(before, after);
  }

  public async isAccountExisting(phone: string) {
    return await this._user.verifyUserAccount(phone);
  }
}
