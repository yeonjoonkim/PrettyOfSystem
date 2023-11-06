import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, map, of, switchMap } from 'rxjs';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  PlanConfigurationType,
  RoleConfigurationType,
  ShopConfigurationType,
  ShopCouponDocumentType,
  ShopEmployeeManagementUserType,
  ShopExtraDocumentType,
  ShopPackageDocumentType,
  ShopServiceDocumentType,
  ShopWorkHoursType,
} from 'src/app/interface';
import { ShopTranslatedRequestService } from './shop-translated-request/shop-translated-request.service';
import { UserService } from '../user/user.service';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import { ShopServiceRepositoryService } from 'src/app/firebase/shop-repository/shop-service-repository/shop-service-repository.service';
import { ShopExtraRepositoryService } from 'src/app/firebase/shop-repository/shop-extra-repository/shop-extra-repository.service';
import { UserRoleService } from '../user/user-role/user-role.service';
import { ShopPackageRepositoryService } from 'src/app/firebase/shop-repository/shop-package-repository/shop-package-repository.service';
import { ShopCouponRepositoryService } from 'src/app/firebase/shop-repository/shop-coupon-repository/shop-coupon-repository.service';
import { ShopPictureRepositoryService } from 'src/app/firebase/shop-repository/shop-picture-repository/shop-picture-repository.service';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  public role$!: Observable<RoleConfigurationType | null>;
  public config$!: Observable<ShopConfigurationType | null>;
  public plan$!: Observable<PlanConfigurationType | null>;
  public translatedRequests$!: Observable<ChatGptTranslateDocumentType[]>;
  public services$!: Observable<ShopServiceDocumentType[]>;
  public extras$!: Observable<ShopExtraDocumentType[]>;
  public packages$!: Observable<ShopPackageDocumentType[]>;
  public userName$!: Observable<string>;
  public employees$!: Observable<ShopEmployeeManagementUserType[]>;
  public specializedEmployeeFilter$!: Observable<NameValuePairType[]>;
  public extraFilter$!: Observable<NameValuePairType[]>;
  public serviceFilter$!: Observable<NameValuePairType[]>;
  public operatingWorkHours$!: Observable<ShopWorkHoursType | null>;
  public coupons$!: Observable<ShopCouponDocumentType[]>;
  public logoImage$!: Observable<Blob | null>;
  public shopImage1$!: Observable<Blob | null>;
  public shopImage2$!: Observable<Blob | null>;
  public shopImage3$!: Observable<Blob | null>;

  constructor(
    public role: UserRoleService,
    private _user: UserService,
    public translated: ShopTranslatedRequestService,
    private _userRepo: UserCredentialRepositoryService,
    private _serviceRepo: ShopServiceRepositoryService,
    private _extraRepo: ShopExtraRepositoryService,
    private _packageRepo: ShopPackageRepositoryService,
    private _couponRepo: ShopCouponRepositoryService,
    private _pictureRepo: ShopPictureRepositoryService
  ) {
    this.userName$ = this._user.employeName$;
    this.config$ = this._user.currentShopConfig$;
    this.role$ = this._user.currentRole$;
    this.plan$ = this._user.currentShopPlan$;
    this.translatedRequests$ = this.translated.translatedRequest$;
    this.associatedUserListener();
    this.shopServiceListener();
    this.shopExtraListener();
    this.shopPackageListener();
    this.specialisedEmployeeFilterListener();
    this.extraFilterListener();
    this.serviceFilterListener();
    this.operatingHoursListener();
    this.shopCouponListener();
    this.logoImageListener();
    this.shopImage1Listener();
    this.shopImage2Listener();
    this.shopImage3Listener();
  }

  public translatedRequestFilterByServiceIds(shopId: string, serviceIds: string[]) {
    if (serviceIds.length > 0) {
      return this.translated.serviceIdTracker(shopId, serviceIds);
    } else {
      return of([]);
    }
  }

  private shopPackageListener() {
    this.packages$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._packageRepo.packageValueChangeListener(config.id);
        } else {
          return of([] as ShopPackageDocumentType[]);
        }
      })
    );
  }

  private shopCouponListener() {
    this.coupons$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._couponRepo.valueChangeListener(config.id);
        } else {
          return of([] as ShopCouponDocumentType[]);
        }
      })
    );
  }

  private shopServiceListener() {
    this.services$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._serviceRepo.serviceValueChangeListener(config.id);
        } else {
          return of([] as ShopServiceDocumentType[]);
        }
      })
    );
  }

  private shopExtraListener() {
    this.extras$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._extraRepo.extraValueChangeListener(config.id);
        } else {
          return of([] as ShopExtraDocumentType[]);
        }
      })
    );
  }

  private associatedUserListener() {
    this.employees$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null && config !== undefined) {
          return this._userRepo.subscribeAssociatedShopUsers(config.id);
        } else {
          return of([]);
        }
      })
    );
  }

  private operatingHoursListener() {
    this.operatingWorkHours$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null && config !== undefined) {
          return of(config.operatingHours);
        } else {
          return of(null);
        }
      })
    );
  }

  private specialisedEmployeeFilterListener() {
    this.specializedEmployeeFilter$ = this.employees$.pipe(
      map(emp => {
        return emp
          .filter(s => s.active && s.displayInSystem && !s.role.accessLevel.isReception)
          .map(emp => {
            return { name: emp.firstName + ' ' + emp.lastName, value: emp.userId };
          });
      })
    );
  }

  private extraFilterListener() {
    this.extraFilter$ = this.extras$.pipe(
      map(extras => {
        return extras.map(ex => {
          return { name: ex.titleProp, value: ex.id };
        });
      })
    );
  }

  private serviceFilterListener() {
    this.serviceFilter$ = this.services$.pipe(
      map(services => {
        return services.map(service => {
          return { name: service.titleProp, value: service.id };
        });
      })
    );
  }

  public logoImageListener() {
    this.logoImage$ = this.config$.pipe(
      switchMap(config => {
        if (config != null) {
          return this._pictureRepo.getFile(config.setting.picture.logo);
        } else {
          return of(null);
        }
      })
    );
  }

  private shopImage1Listener() {
    this.shopImage1$ = this.config$.pipe(
      switchMap(config => {
        if (config != null) {
          return this._pictureRepo.getFile(config.setting.picture.shopImage1);
        } else {
          return of(null);
        }
      })
    );
  }

  private shopImage2Listener() {
    this.shopImage2$ = this.config$.pipe(
      switchMap(config => {
        if (config != null) {
          return this._pictureRepo.getFile(config.setting.picture.shopImage2);
        } else {
          return of(null);
        }
      })
    );
  }

  private shopImage3Listener() {
    this.shopImage3$ = this.config$.pipe(
      switchMap(config => {
        if (config != null) {
          return this._pictureRepo.getFile(config.setting.picture.shopImage3);
        } else {
          return of(null);
        }
      })
    );
  }
  public async requeueTranslatedRequest(doc: ChatGptTranslateDocumentType) {
    return await this.translated.requeueTranslatedRequest(doc);
  }

  public async config() {
    const result = await firstValueFrom(this.config$);
    return result;
  }

  public async plan() {
    const plan = await firstValueFrom(this.plan$);
    return plan !== null ? plan : null;
  }

  public async id() {
    const config = await this.config();
    return config !== null ? config.id : null;
  }

  public async userName() {
    const result = await firstValueFrom(this.userName$);
    return result?.length > 0 ? result : null;
  }

  public async isReachToMaxPackage() {
    const plan = await this.plan();
    const packages = await firstValueFrom(this.packages$);
    if (plan !== null) {
      return plan.limitedPackage > packages.length;
    } else {
      return false;
    }
  }

  public async isPreimumPlan() {
    const plan = await this.plan();
    return plan !== null ? plan.isPremium : false;
  }
}
