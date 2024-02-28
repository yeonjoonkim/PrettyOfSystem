import { Injectable } from '@angular/core';
import { Observable, combineLatestWith, firstValueFrom, map, of, switchMap } from 'rxjs';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  RoleConfigurationType,
  ShopCapacityType,
  ShopCategoryType,
  ShopConfigurationType,
  ShopCouponDocumentType,
  ShopEmployeeManagementUserType,
  ShopExtraDocumentType,
  ShopPackageDocumentType,
  ShopSchedulerDocumentType,
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
import { SystemLanguageManagementService } from '../global/language/system-language-management/system-language-management.service';
import { SystemShopCapacityRepositoryService } from 'src/app/firebase/system-repository/system-shop-capacity/system-shop-capacity-repository.service';
import * as Constant from 'src/app/constant/constant';
import { DateService } from '../global/date/date.service';
import { ClientCredentialRepositoryService } from 'src/app/firebase/user-repository/client-credential-repository/client-credential-repository.service';
import { ShopSchedulerRepositoryService } from 'src/app/firebase/shop-repository/shop-scheduler-repository/shop-scheduler-repository.service';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  public id$!: Observable<string | null>;
  public role$!: Observable<RoleConfigurationType | null>;
  public config$!: Observable<ShopConfigurationType | null>;
  public capacity$!: Observable<ShopCapacityType | null>;
  public timezone$!: Observable<string | null>;
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
  //Price List
  public couponPriceList$!: Observable<ShopCouponDocumentType[]>;
  public packagePriceList$!: Observable<ShopPackageDocumentType[]>;
  public servicePriceList$!: Observable<ShopServiceDocumentType[]>;
  public extraPriceList$!: Observable<ShopExtraDocumentType[]>;

  //Has
  public hasInsuranceProvider$!: Observable<boolean>;
  public hasNotInsuranceProvider$!: Observable<boolean>;

  //Related
  public category$!: Observable<ShopCategoryType | null>;
  public isRelatedToMedical$!: Observable<boolean>;

  public isMassageShop$!: Observable<boolean>;
  public isSkinCare$!: Observable<boolean>;
  public isHairSalon$!: Observable<boolean>;
  public isPersonalTraining$!: Observable<boolean>;
  public isNailArt$!: Observable<boolean>;
  public isMobileShop$!: Observable<boolean>;

  //Scheduler
  public defaultScheduler$!: Observable<ShopSchedulerDocumentType | null>;

  constructor(
    public role: UserRoleService,
    private _user: UserService,
    public translated: ShopTranslatedRequestService,
    private _userRepo: UserCredentialRepositoryService,
    private _serviceRepo: ShopServiceRepositoryService,
    private _extraRepo: ShopExtraRepositoryService,
    private _packageRepo: ShopPackageRepositoryService,
    private _couponRepo: ShopCouponRepositoryService,
    private _pictureRepo: ShopPictureRepositoryService,
    private _clientRepo: ClientCredentialRepositoryService,
    private _schedulerRepo: ShopSchedulerRepositoryService,
    private _systemLanguage: SystemLanguageManagementService,
    private _capacity: SystemShopCapacityRepositoryService,
    private _date: DateService
  ) {
    this.userName$ = this._user.employeName$;
    this.config$ = this._user.currentShopConfig$;
    this.role$ = this._user.currentRole$;
    this.translatedRequests$ = this.translated.translatedRequest$;
    this.idListener();
    this.categoryListener();
    this.capacityListener();
    this.timezoneListener();
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
    this.couponPriceListListener();
    this.servicePriceListListener();
    this.packagePriceListListener();
    this.extraPriceListListener();
    this.insuranceProviderListener();
    this.isRelatedToMedical();
    this.relatedShopCategoryListener();
    this.defaultSchedulerListener();
  }

  public translatedRequestFilterByServiceIds(shopId: string, serviceIds: string[]) {
    if (serviceIds.length > 0) {
      return this.translated.serviceIdTracker(shopId, serviceIds);
    } else {
      return of([]);
    }
  }

  public idListener() {
    this.id$ = this.config$.pipe(map(config => (config !== null ? config.id : null)));
  }

  private timezoneListener() {
    this.timezone$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return of(config.timezone);
        } else {
          return of(Constant.TimeZone.AustraliaBrisbane);
        }
      })
    );
  }

  private isRelatedToMedical() {
    this.isRelatedToMedical$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName =
            name === Constant.ShopCategoryTitle.MassageTheraphy ||
            name === Constant.ShopCategoryTitle.PersonalTraining ||
            name === Constant.ShopCategoryTitle.SkinCare;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );
  }

  private categoryListener() {
    this.category$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return of(config.category);
        } else {
          return of(null);
        }
      })
    );
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
    this.extraFilter$ = this.config$.pipe(
      combineLatestWith(this.extras$),
      map(([config, extras]) => {
        if (config !== null) {
          return extras
            .map(s => {
              return {
                name: s.title + '.' + this._systemLanguage.currentLanguage,
                value: s.id,
                titleProp: s.titleProp,
              };
            })
            .map(s => {
              const translated = config.package[s.name];
              const name = translated !== undefined ? translated : s.titleProp;
              return { name: name, value: s.value };
            });
        } else {
          return extras.map(s => {
            return { name: s.titleProp, value: s.id };
          });
        }
      })
    );
  }

  private serviceFilterListener() {
    this.serviceFilter$ = this.config$.pipe(
      combineLatestWith(this.services$),
      map(([config, services]) => {
        if (config !== null) {
          const result = services
            .map(s => {
              return {
                name: s.title + '.' + this._systemLanguage.currentLanguage,
                value: s.id,
                titleProp: s.titleProp,
              };
            })
            .map(s => {
              const translated = config.package[s.name];
              const name = translated !== undefined ? translated : s.titleProp;
              return { name: name, value: s.value };
            });

          return result;
        } else {
          return services.map(s => {
            return { name: s.titleProp, value: s.id };
          });
        }
      })
    );
  }

  public getAssociatedClients() {
    return this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._clientRepo.getAssociatedClients(config.id);
        } else {
          return of([]);
        }
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

  private couponPriceListListener() {
    this.couponPriceList$ = this.config$.pipe(
      combineLatestWith(this.coupons$),
      map(([config, coupons]) => {
        if (config !== null) {
          const language = this._systemLanguage.storage.currentLanguage;
          return coupons.filter(
            coupon =>
              config.package[`${coupon.title}.${language}`] !== undefined &&
              config.package[`${coupon.description}.${language}`] !== undefined
          );
        } else {
          return [] as ShopCouponDocumentType[];
        }
      })
    );
  }

  private capacityListener() {
    this.capacity$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._capacity.capacityListener(config.capacityId);
        } else {
          return of(null);
        }
      })
    );
  }

  private insuranceProviderListener() {
    this.hasInsuranceProvider$ = this.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return of(config.setting.insurance !== null);
        } else {
          return of(false);
        }
      })
    );
    this.hasNotInsuranceProvider$ = this.hasInsuranceProvider$.pipe(map(hasInsurance => !hasInsurance));
  }

  private servicePriceListListener() {
    this.servicePriceList$ = this.config$.pipe(
      combineLatestWith(this.services$),
      map(([config, servcies]) => {
        if (config !== null) {
          const language = this._systemLanguage.storage.currentLanguage;
          return servcies.filter(
            servcie =>
              config.package[`${servcie.title}.${language}`] !== undefined &&
              config.package[`${servcie.description}.${language}`] !== undefined
          );
        } else {
          return [] as ShopServiceDocumentType[];
        }
      })
    );
  }

  private packagePriceListListener() {
    this.packagePriceList$ = this.config$.pipe(
      combineLatestWith(this.packages$),
      map(([config, packages]) => {
        if (config !== null) {
          const language = this._systemLanguage.storage.currentLanguage;
          return packages.filter(pack => config.package[`${pack.title}.${language}`] !== undefined);
        } else {
          return [] as ShopPackageDocumentType[];
        }
      })
    );
  }

  private extraPriceListListener() {
    this.extraPriceList$ = this.config$.pipe(
      combineLatestWith(this.extras$),
      map(([config, extras]) => {
        if (config !== null) {
          const language = this._systemLanguage.storage.currentLanguage;
          return extras.filter(extra => config.package[`${extra.title}.${language}`] !== undefined);
        } else {
          return [] as ShopExtraDocumentType[];
        }
      })
    );
  }

  private relatedShopCategoryListener() {
    this.isMassageShop$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName = name === Constant.ShopCategoryTitle.MassageTheraphy;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );
    this.isSkinCare$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName = name === Constant.ShopCategoryTitle.SkinCare;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );
    this.isHairSalon$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName = name === Constant.ShopCategoryTitle.Hairsalon;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );
    this.isPersonalTraining$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName = name === Constant.ShopCategoryTitle.PersonalTraining;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );
    this.isMobileShop$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName = name === Constant.ShopCategoryTitle.MobileShop;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );
    this.isNailArt$ = this.config$.pipe(
      switchMap(category => {
        if (category !== null) {
          const name = category.category.name as Constant.ShopCategoryTitleType;
          const relatedName = name === Constant.ShopCategoryTitle.NailArt;
          return of(relatedName);
        } else {
          return of(false);
        }
      })
    );
  }

  public defaultSchedulerListener() {
    this.defaultScheduler$ = this.config$.pipe(
      switchMap(config => {
        return config !== null ? this._schedulerRepo.getAsObservable(config.id) : of(null);
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

  public async id() {
    const config = await this.config();
    return config !== null ? config.id : null;
  }

  public async userName() {
    const result = await firstValueFrom(this.userName$);
    return result?.length > 0 ? result : null;
  }

  public async timezone() {
    return await firstValueFrom(this.timezone$);
  }

  public async timeStamp() {
    const timezone = await this.timezone();
    return this._date.shopTimeStamp(timezone);
  }
}
