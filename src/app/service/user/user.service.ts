import { Injectable } from '@angular/core';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import {
  IUser,
  MenuCategoryType,
  NameValuePairType,
  RoleAccessLevelType,
  RoleConfigurationType,
  ShopConfigurationType,
  UserClaimType,
} from 'src/app/interface';
import { Observable, combineLatest, firstValueFrom, map, of, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { combineLatestWith, delay, distinctUntilChanged, first, take } from 'rxjs/operators';
import { GlobalService } from '../global/global.service';
import { UserModalService } from './user-modal/user-modal.service';
import { SystemLanguageStorageService } from '../global/language/system-language-management/system-language-storage/system-language-storage.service';
import { IdTokenResult } from 'firebase/auth';
import { LoadingService } from '../global/loading/loading.service';
import { UserSettingService } from './user-setting/user-setting.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public isLoggedin$!: Observable<boolean>;
  public isLoggedout$!: Observable<boolean>;
  public data$!: Observable<IUser | null>;
  public menu$!: Observable<MenuCategoryType[]>;
  public associatedShopConfigurations$!: Observable<ShopConfigurationType[] | []>;
  public currentShopConfig$!: Observable<ShopConfigurationType | null>;
  public shopSelection$!: Observable<NameValuePairType[]>;
  public currentShop$!: Observable<NameValuePairType>;
  public currentRole$!: Observable<RoleConfigurationType | null>;
  public employeName$!: Observable<string>;
  public claim$!: Observable<IdTokenResult | null>;
  public preferLanguage$!: Observable<string>;
  public isOver18$!: Observable<boolean>;

  constructor(
    public modal: UserModalService,
    public setting: UserSettingService,
    public global: GlobalService,
    private _afAuth: AngularFireAuth,
    private _router: Router,
    private _systemShop: SystemShopConfigurationRepositoryService,
    private _userRepo: UserCredentialRepositoryService,
    private _menuRepo: SystemMenuRepositoryService,
    private _languageStorage: SystemLanguageStorageService,
    private _loading: LoadingService
  ) {}

  public async init() {
    const language = await this._languageStorage.getCurrentLanguage();
    let userLanguage = '';
    const data = await firstValueFrom(this.data$);
    if (data !== null) {
      const currentShop = data.associatedShops.find(s => s.shopId === data.currentShopId);
      this.navigateByRole(currentShop?.role?.accessLevel);
      userLanguage = data.setting.preferLanguage;
      if (language !== userLanguage && userLanguage.length > 0) {
        await this.global.language.onLanguageChange(userLanguage);
      }
    }
  }

  private navigateByRole(accessLevel: RoleAccessLevelType | undefined) {
    if (accessLevel?.isSystemAdmin) {
      this._router.navigateByUrl('system/user');
    } else if (accessLevel?.isAdmin || accessLevel?.isManager) {
      this._router.navigateByUrl('shop/employee-management');
    } else if (accessLevel?.isReception) {
      this._router.navigateByUrl('reservation/price-list');
    } else {
      this._router.navigateByUrl('booking');
    }
  }

  public async presentEdit() {
    combineLatest([this.data$, this.shopSelection$])
      .pipe(take(1))
      .subscribe(([user, shopSelection]) => {
        if (user && shopSelection) {
          this.modal.presentEdit(user, shopSelection).then(modal => modal.present());
        }
      });
  }

  public async fullName() {
    const result = await firstValueFrom(this.employeName$);

    return result ? result : null;
  }

  public async currentShopId() {
    const config = await firstValueFrom(this.currentShopConfig$);

    return config !== null ? config.id : null;
  }

  public async verifyUserAccount(input: string) {
    const result = await this._userRepo.verifyUserAccount(input);
    return result;
  }

  public logout() {
    this._afAuth.signOut();
    this._router.navigateByUrl('/login');
  }

  public async updateCurrentShop(shopId: string, currentLanguage: string) {
    this.data$.pipe(take(1)).subscribe(async user => {
      if (user !== null) {
        await this._loading.show();
        user.currentShopId = shopId;
        await this._userRepo.updateUser(user);
        const sleep = async (duration: number) => {
          return new Promise(resolve => setTimeout(resolve, duration));
        };
        sleep(1000);
        const auth = await firstValueFrom(this._afAuth.authState);
        await this._loading.dismiss();
        if (auth !== null) {
          const result = await auth.getIdTokenResult(true);
          const claim = result.claims as UserClaimType;
          this.navigateByRole(claim.role);
        }

        if (currentLanguage !== user.setting.preferLanguage) {
          await this.global.language.onLanguageChange(user.setting.preferLanguage);
        }
      }
    });
  }

  public async updateUser(after: IUser, before: IUser) {
    after.lastName = this.global.textTransform.getTitleFormat(after.lastName);
    after.firstName = this.global.textTransform.getTitleFormat(after.firstName);
    const beforeLoginInput = before.loginOption.email ? before.email : before.phoneNumber;
    const afterLoginInput = after.loginOption.email ? after.email : after.phoneNumber;
    const onChangeLoginOption = beforeLoginInput !== afterLoginInput;

    if (onChangeLoginOption) {
      const userLoginVerification = this._userRepo.subscribeUserAccount(afterLoginInput);
      const isExisted = await firstValueFrom(userLoginVerification);
      if (!isExisted) {
        return this._userRepo.updateUser(after);
      } else {
        await this.toastExsitingAccountError();
        return false;
      }
    } else {
      return await this._userRepo.updateUser(after);
    }
  }

  public userLanguageChangeListener() {
    return this.data$.pipe(
      combineLatestWith(this.global.storage.currentLanguageObservable()),
      switchMap(([user, systemLanguage]) => {
        if (user !== null && systemLanguage && user.setting.preferLanguage !== systemLanguage) {
          return of(user.setting.preferLanguage);
        } else {
          return of(null);
        }
      }),
      delay(1000),
      distinctUntilChanged()
    );
  }

  public activateAuthChangeListener() {
    this.isLoggedin$ = this._afAuth.authState.pipe(map(user => !!user));
    this.isLoggedout$ = this.isLoggedin$.pipe(map(loggedIn => !loggedIn));
    this.activateUserListener();
    this.activateUserMenuListener();
    this.activateAssociatedShopsListener();
    this.activateCurrentShopConfigurationListener();
    this.activateUserShopSelectionListener();
    this.activeUserCurrentShopListener();
    this.activateCurrentRoleListener();
    this.activateEmployeeNameListener();
    this.activatePreferLanguageListener();
    this.isOver18();
    this.claim();
  }

  private activateUserListener() {
    this.data$ = this._afAuth.authState.pipe(
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

  private activateEmployeeNameListener() {
    this.employeName$ = this.data$.pipe(
      map(user => {
        if (user !== null) {
          const result = user.firstName + ' ' + user.lastName;
          return result;
        } else {
          return '';
        }
      })
    );
  }

  private activatePreferLanguageListener() {
    this.preferLanguage$ = this.data$.pipe(
      map(user => {
        if (user !== null) {
          return user.setting.preferLanguage;
        } else {
          return 'en';
        }
      })
    );
  }

  private activateUserMenuListener() {
    this.menu$ = this.data$.pipe(
      switchMap(user => {
        if (user !== null) {
          const role = this.findCurrentRole(user);
          if (role !== null) {
            return this._menuRepo.subscribeAccessGrantedMenu(role.accessLevel);
          } else {
            return of([]);
          }
        } else {
          return of([]);
        }
      })
    );
  }

  private activateAssociatedShopsListener() {
    this.associatedShopConfigurations$ = this.data$.pipe(
      switchMap(user => {
        if (user !== null) {
          const shopIds: string[] = user.associatedShops
            .filter(s => s.active)
            .map(s => {
              return s.shopId;
            });
          if (shopIds.length > 0) {
            return this._systemShop.assocatedShopConfigurationValueChangeListener(shopIds);
          } else {
            return of([]);
          }
        } else {
          return of([]);
        }
      })
    );
  }

  private isOver18() {
    this.isOver18$ = this.data$.pipe(
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

  private activateCurrentShopConfigurationListener() {
    this.currentShopConfig$ = this.data$.pipe(
      combineLatestWith(this.associatedShopConfigurations$),
      map(([user, shops]: [IUser | null, ShopConfigurationType[] | []]) => {
        const currentConfig =
          user && shops.length > 0
            ? shops.find((s: ShopConfigurationType) => s.id === user.currentShopId) || null
            : null;
        return currentConfig;
      })
    );
  }

  private activateUserShopSelectionListener() {
    this.shopSelection$ = this.data$.pipe(
      combineLatestWith(this.associatedShopConfigurations$),
      map(([user, shops]: [IUser | null, ShopConfigurationType[] | []]) => {
        const currentConfig =
          user && shops.length > 0
            ? shops.map(s => {
                return { name: s.name, value: s.id };
              }) || []
            : [];
        return currentConfig;
      })
    );
  }

  private activeUserCurrentShopListener() {
    this.currentShop$ = this.data$.pipe(
      combineLatestWith(this.associatedShopConfigurations$),
      map(([user, shops]: [IUser | null, ShopConfigurationType[] | []]) => {
        const currentConfig =
          user && shops.length > 0
            ? shops
                .map(s => {
                  return { name: s.name, value: s.id };
                })
                .find(s => s.value === user.currentShopId) || { name: '', value: '' }
            : { name: '', value: '' };
        return currentConfig;
      })
    );
  }

  private activateCurrentRoleListener() {
    this.currentRole$ = this.data$.pipe(
      switchMap(user => {
        if (user !== null) {
          const currentShop = user.associatedShops.find(s => s.shopId === user.currentShopId);
          return currentShop !== undefined ? of(currentShop.role) : of(null);
        } else {
          return of(null);
        }
      })
    );
  }

  private findCurrentRole(user: IUser) {
    const currentShop = user.associatedShops.find(s => user.currentShopId === s.shopId);
    if (currentShop !== undefined) {
      return currentShop.role;
    }
    return null;
  }

  private async toastExsitingAccountError() {
    const msg = await this.global.language.transform('messageerror.description.existingacc');
    await this.global.toast.presentError(msg);
  }
}
