import { Injectable } from '@angular/core';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import {
  IUser,
  UserSettingEmergencyContactType,
  UserSettingPrivateInsuranceType,
  UserVisitShopConsentType,
} from 'src/app/interface';
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
  public id$!: Observable<string | null>;
  public claim$!: Observable<IdTokenResult | null>;
  public preferLanguage$!: Observable<string>;
  public vistedShopConsents$!: Observable<UserVisitShopConsentType[]>;
  public vistedShopIds$!: Observable<string[]>;
  public isOver18$: Observable<boolean> = of(false);
  public isPregrant$: Observable<boolean> = of(false);
  public privateInsurance$!: Observable<UserSettingPrivateInsuranceType | null>;
  public emergencyContact$!: Observable<UserSettingEmergencyContactType | null>;
  public signature$!: Observable<string | null>;
  public parentSignature$!: Observable<string | null>;
  constructor(
    public modal: ClientModalService,
    public global: GlobalService,
    private _userRepo: UserCredentialRepositoryService,
    private _user: UserService,
    private _afAuth: AngularFireAuth
  ) {
    this.isLoggedin$ = this._afAuth.authState.pipe(map(user => !!user));
    this.isLoggedout$ = this.isLoggedin$.pipe(map(loggedIn => !loggedIn));
    this.activateUserListener();
    this.claim();
    this.id();
    this.activatePreferLanguageListener();
    this.vistedShopConsents();
    this.vistedShopIds();
    this.isOver18();
    this.isPregrant();
    this.privateInsurance();
    this.signature();
    this.emergencyContact();
    this.parentSignature();
  }

  public async createAccount(u: IUser) {
    u.firstName = this.global.textTransform.getTitleFormat(u.firstName);
    u.lastName = this.global.textTransform.getTitleFormat(u.lastName);
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

  public async update(client: IUser) {
    return await this._userRepo.updateUser(client);
  }

  private async toastExsitingAccountError() {
    const msg = await this.global.language.transform('messageerror.description.existingacc');
    await this.global.toast.presentError(msg);
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

  private isOver18() {
    this.isOver18$ = this.info$.pipe(
      switchMap(user => {
        if (user !== null) {
          const today = this.global.date.startDay(this.global.date.shopNow(null));
          const duration = this.global.date.duration(user.dob, today);
          return of(duration.years !== undefined ? duration.years >= 18 : false);
        } else {
          return of(false);
        }
      })
    );
  }

  private privateInsurance() {
    this.privateInsurance$ = this.info$.pipe(
      switchMap(user => {
        if (user !== null) {
          return of(user.setting.privateInsurance);
        } else {
          return of(null);
        }
      })
    );
  }

  private isPregrant() {
    this.isPregrant$ = this.info$.pipe(
      switchMap(user => {
        if (user !== null) {
          return of(user.setting.pregnancyDueDate !== null);
        } else {
          return of(false);
        }
      })
    );
  }

  private signature() {
    this.signature$ = this.info$.pipe(
      switchMap(user => {
        if (user !== null) {
          return of(user.signature);
        } else {
          return of(null);
        }
      })
    );
  }

  private parentSignature() {
    this.parentSignature$ = this.info$.pipe(
      switchMap(user => {
        if (user !== null) {
          return of(user.setting.parentSignature);
        } else {
          return of(null);
        }
      })
    );
  }

  private emergencyContact() {
    this.emergencyContact$ = this.info$.pipe(
      switchMap(user => {
        if (user !== null) {
          return of(user.setting.emergencyContact);
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

  private vistedShopConsents() {
    this.vistedShopConsents$ = this.info$.pipe(
      switchMap(client => {
        if (client !== null) {
          return of(client.visitedShops);
        } else {
          return of([]);
        }
      })
    );
  }

  private vistedShopIds() {
    this.vistedShopIds$ = this.info$.pipe(
      switchMap(client => {
        if (client !== null) {
          return of(client.visitedShopIds);
        } else {
          return of([]);
        }
      })
    );
  }

  private id() {
    this.id$ = this.info$.pipe(
      switchMap(client => {
        if (client !== null) {
          return of(client.id);
        } else {
          return of(null);
        }
      })
    );
  }
}
