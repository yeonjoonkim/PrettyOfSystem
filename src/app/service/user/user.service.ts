import { Injectable } from '@angular/core';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import {
  IUser,
  MenuCategoryType,
  NameValuePairType,
  RoleConfigurationType,
  ShopConfigurationType,
} from 'src/app/interface';
import { Observable, from, lastValueFrom, map, mergeMap, of, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { combineLatestWith, take } from 'rxjs/operators';
import { GlobalService } from '../global/global.service';

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

  constructor(
    private _afAuth: AngularFireAuth,
    private _router: Router,
    private _systemShop: SystemShopConfigurationRepositoryService,
    private _userRepo: UserCredentialRepositoryService,
    private _menuRepo: SystemMenuRepositoryService,
    private _global: GlobalService
  ) {}

  public async testingRouter() {
    this._router.navigateByUrl('/system/user');
  }

  public async verifyUserAccount(input: string) {
    return await this._userRepo.verifyUserAccount(input);
  }

  public logout() {
    this._afAuth.signOut();
    this._router.navigateByUrl('/login');
  }

  public async updateCurrentShop(shopId: string) {
    this.data$.pipe(take(1)).subscribe(async user => {
      if (user !== null) {
        user.currentShopId = shopId;
        await this._global.loading.show();
        await this._userRepo.updateUser(user);
        await this._global.loading.dismiss();
      }
    });
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
            return this._menuRepo.getAccessGrantedMenu(role.accessLevel);
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
          // If currentShop is found, need to wrap the role inside an Observable using 'of'
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
}
