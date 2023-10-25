import { Injectable } from '@angular/core';
import {
  Observable,
  combineLatest,
  combineLatestWith,
  firstValueFrom,
  map,
  of,
  switchMap,
} from 'rxjs';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  PlanConfigurationType,
  RoleConfigurationType,
  ShopConfigurationType,
  ShopExtraDocumentType,
  ShopLimitedProgpressBarType,
  ShopPackageDocumentType,
  ShopPackageFilterDocumentProp,
  ShopPackageModalDocumentProp,
  ShopServiceDocumentType,
  ShopWorkHoursType,
} from 'src/app/interface';
import { ShopService } from '../shop.service';
import { ShopPackageRepositoryService } from 'src/app/firebase/shop-repository/shop-package-repository/shop-package-repository.service';
import { ShopPackageModalService } from './shop-package-modal/shop-package-modal.service';
import { ShopLanguagePackageService } from '../shop-language-package/shop-language-package.service';
import { ShopPackagePriceCalculationService } from './shop-package-price-calculation/shop-package-price-calculation.service';
import { ShopPackagePopoverService } from './shop-package-popover/shop-package-popover.service';
import { ShopPackageLimitedTimeService } from './shop-package-limited-time/shop-package-limited-time.service';

@Injectable({
  providedIn: 'root',
})
export class ShopPackageManagementService {
  public config$!: Observable<ShopConfigurationType | null>;
  public plan$!: Observable<PlanConfigurationType | null>;
  public translatedRequest$!: Observable<ChatGptTranslateDocumentType[]>;
  public services$!: Observable<ShopServiceDocumentType[]>;
  public extras$!: Observable<ShopExtraDocumentType[]>;
  public packages$!: Observable<ShopPackageDocumentType[]>;
  public specialisedEmployees$!: Observable<NameValuePairType[]>;
  public extraFilter$!: Observable<NameValuePairType[]>;
  public serviceFilter$!: Observable<NameValuePairType[]>;
  public operatingWorkHour$!: Observable<ShopWorkHoursType | null>;
  public isReachToMax$!: Observable<boolean>;
  public filterProp$!: Observable<ShopPackageFilterDocumentProp>;
  public progressBar$!: Observable<ShopLimitedProgpressBarType>;
  constructor(
    private _shop: ShopService,
    private _packageRepo: ShopPackageRepositoryService,
    public modal: ShopPackageModalService,
    public languagePackage: ShopLanguagePackageService,
    public priceCalculator: ShopPackagePriceCalculationService,
    public limitedTime: ShopPackageLimitedTimeService,
    public popover: ShopPackagePopoverService
  ) {
    this.config$ = this._shop.config$;
    this.plan$ = this._shop.plan$;
    this.translatedRequest$ = this._shop.translatedRequests$;
    this.services$ = this._shop.services$;
    this.extras$ = this._shop.extras$;
    this.specialisedEmployees$ = this._shop.specializedEmployeeFilter$;
    this.packages$ = this._shop.packages$;
    this.extraFilter$ = this._shop.extraFilter$;
    this.serviceFilter$ = this._shop.serviceFilter$;
    this.operatingWorkHour$ = this._shop.operatingWorkHours$;
    this.isReachToMaxListener();
    this.filterPropListener();
    this.activeProgressBar();
  }

  public async getDefaultModalProp(pack: ShopPackageDocumentType | null) {
    const filterProp = await firstValueFrom(this.filterProp$);
    const extras = await firstValueFrom(this.extras$);
    const services = await firstValueFrom(this.services$);
    const operatingHours = await firstValueFrom(this.operatingWorkHour$);

    if (filterProp !== undefined && operatingHours !== null && pack !== null) {
      const prop: ShopPackageModalDocumentProp = {
        package: pack,
        filter: filterProp,
        services: services,
        extras: extras,
        operatingHours: operatingHours,
      };
      return prop;
    } else {
      return null;
    }
  }

  private activeProgressBar() {
    this.progressBar$ = this.packages$.pipe(
      combineLatestWith(this.plan$),
      switchMap(([service, plan]: [ShopPackageDocumentType[], PlanConfigurationType | null]) => {
        if (plan !== null) {
          return of({
            current: service.length,
            max: plan.limitedPackage,
            title: 'label.title.maximumactivepackages',
            indeterminate: false,
          });
        } else {
          return of({
            current: 0,
            max: 0,
            title: 'label.title.maximumactivepackages',
            indeterminate: false,
          });
        }
      })
    );
  }

  private filterPropListener() {
    this.filterProp$ = combineLatest([
      this.serviceFilter$,
      this.extraFilter$,
      this.specialisedEmployees$,
    ]).pipe(
      map(([servicesFilter, extrasFilter, specialisedEmployees]) => {
        const shopPackageFilterDoc: ShopPackageFilterDocumentProp = {
          services: servicesFilter,
          extras: extrasFilter,
          specializedEmployees: specialisedEmployees,
        };
        return shopPackageFilterDoc;
      })
    );
  }

  private isReachToMaxListener() {
    this.isReachToMax$ = this.packages$.pipe(
      combineLatestWith(this.plan$),
      map(([packages, plan]: [ShopPackageDocumentType[], PlanConfigurationType | null]) => {
        if (plan !== null) {
          const isMaxReached = packages.length > plan.limitedPackage;
          return isMaxReached;
        } else {
          return false;
        }
      })
    );
  }

  public async isAuthorisedRole() {
    return await this._shop.role.isReceptionistAccess();
  }

  public async getShopConfig() {
    return await this._shop.config();
  }

  public async add(pack: ShopPackageDocumentType) {
    const newPackage = await this._packageRepo.addPackage(pack);
    return newPackage;
  }

  public async delete(pack: ShopPackageDocumentType) {
    const deletePackage = await this._packageRepo.deletePackage(pack);
    return deletePackage;
  }

  public async update(after: ShopPackageDocumentType) {
    const userName = await this._shop.userName();
    if (userName !== null) {
      after.lastModifiedDate = new Date();
      after.lastModifiedEmployee = userName;
      return await this._packageRepo.updatePackage(after);
    } else {
      return false;
    }
  }

  public async getNewPackage() {
    const config = await this._shop.config();
    const userName = await this._shop.userName();
    if (config !== null && userName !== null) {
      return this._packageRepo.defaultPackageDocument(config.operatingHours, userName, config.id);
    } else {
      return null;
    }
  }

  public async requeueTranslatedRequest(doc: ChatGptTranslateDocumentType) {
    return await this._shop.requeueTranslatedRequest(doc);
  }
}
