import { Injectable } from '@angular/core';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import {
  IUser,
  MenuCategoryType,
  NameValuePairType,
  PlanConfigurationType,
  RoleAccessLevelType,
  RoleConfigurationType,
  ShopConfigurationType,
} from 'src/app/interface';
import { Observable, combineLatest, firstValueFrom, map, of, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { combineLatestWith, first, take } from 'rxjs/operators';
import { GlobalService } from '../global/global.service';
import { UserModalService } from './user-modal/user-modal.service';
import { SystemPlanRepositoryService } from 'src/app/firebase/system-repository/plan/system-plan-repository.service';
import { SystemLanguageStorageService } from '../global/language/system-language-management/system-language-storage/system-language-storage.service';

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
  public currentShopPlan$!: Observable<PlanConfigurationType | null>;

  constructor(
    public modal: UserModalService,
    private _afAuth: AngularFireAuth,
    private _router: Router,
    private _systemShop: SystemShopConfigurationRepositoryService,
    private _userRepo: UserCredentialRepositoryService,
    private _menuRepo: SystemMenuRepositoryService,
    private _planRepo: SystemPlanRepositoryService,
    private _global: GlobalService,
    private _languageStorage: SystemLanguageStorageService
  ) {}

  public async init() {
    this._global.loading.show();
    const language = await this._languageStorage.getCurrentLanguage();
    let userLanguage = '';
    const subscription = this.data$.pipe(take(1)).subscribe(async data => {
      if (data !== null) {
        const currentShop = data.associatedShops.find(s => s.shopId === data.currentShopId);
        this.navigateByRole(currentShop?.role?.accessLevel);
        userLanguage = data.setting.preferLanguage;
        subscription.unsubscribe();
      }
    });

    if (language !== userLanguage && userLanguage.length > 0) {
      await this._global.language.onLanguageChange(userLanguage);
    }
    await this._global.loading.dismiss();
  }

  private navigateByRole(accessLevel: RoleAccessLevelType | undefined) {
    if (accessLevel?.isSystemAdmin) {
      this._router.navigateByUrl('system/user');
    } else if (accessLevel?.isAdmin || accessLevel?.isManager) {
      this._router.navigateByUrl('shop/employee-management');
    } else {
      this._router.navigateByUrl('booking');
    }
  }

  public async presentEdit() {
    combineLatest([this.data$, this.shopSelection$])
      .pipe(
        first() // take the first emission and complete
      )
      .subscribe(([user, shopSelection]) => {
        if (user) {
          this.modal.presentEdit(user, shopSelection).then(modal => modal.present());
        }
      });
  }

  public async verifyUserAccount(input: string) {
    await this._global.loading.show();
    const result = await this._userRepo.verifyUserAccount(input);
    await this._global.loading.dismiss();
    return result;
  }

  public logout() {
    this._afAuth.signOut();
    this._router.navigateByUrl('/login');
  }

  public async updateCurrentShop(shopId: string, currentLanguage: string) {
    this.data$.pipe(take(1)).subscribe(async user => {
      if (user !== null) {
        user.currentShopId = shopId;
        await this._global.loading.show();
        await this._userRepo.updateUser(user);

        if (currentLanguage !== user.setting.preferLanguage) {
          await this._global.language.onLanguageChange(user.setting.preferLanguage);
        }

        await this._global.loading.dismiss();
      }
    });
  }

  public async updateUser(after: IUser, before: IUser) {
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

  public activateAuthChangeListener() {
    this.isLoggedin$ = this._afAuth.authState.pipe(map(user => !!user));
    this.isLoggedout$ = this.isLoggedin$.pipe(map(loggedIn => !loggedIn));
    this.activateUserListener();
    this.activateUserMenuListener();
    this.activateAssociatedShopsListener();
    this.activateCurrentShopConfigurationListener();
    this.activateCurrentShopPlanListener();
    this.activateUserShopSelectionListener();
    this.activeUserCurrentShopListener();
    this.activateCurrentRoleListener();
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
          return this._systemShop.assocatedShopConfigurationValueChangeListener(shopIds);
        } else {
          return of([]);
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
  private activateCurrentShopPlanListener() {
    this.currentShopPlan$ = this.currentShopConfig$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._planRepo.getSelectedPlan(config.plan.configurationId);
        } else {
          return of(null);
        }
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

  //
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
    const msg = await this._global.language.transform('messageerror.description.existingacc');
    await this._global.toast.presentError(msg);
  }
}
