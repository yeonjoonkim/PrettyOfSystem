import { Injectable } from '@angular/core';
import { Observable, combineLatest, combineLatestWith, map, of, switchMap } from 'rxjs';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  ShopCalendarType,
  ShopCapacityType,
  ShopConfigurationType,
  ShopExtraDocumentType,
  ShopLimitedProgpressBarType,
  ShopPackageDocumentType,
  ShopPackageFilterDocumentProp,
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
import { LoadingService } from '../../global/loading/loading.service';
import { TextTransformService } from '../../global/text-transform/text-transform.service';
import { ShopServiceManagementService } from '../shop-service-management/shop-service-management.service';
import { ShopExtraManagementService } from '../shop-extra-management/shop-extra-management.service';

@Injectable({
  providedIn: 'root',
})
export class ShopPackageManagementService {
  public config$!: Observable<ShopConfigurationType | null>;
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
  public serviceTranslatedRequest$!: Observable<ChatGptTranslateDocumentType[]>;
  public extraServiceRequest$!: Observable<ChatGptTranslateDocumentType[]>;
  public hasInsuranceProvider$!: Observable<boolean>;
  public hasNotInsuranceProvider$!: Observable<boolean>;
  public isRelatedToMedical$!: Observable<boolean>;

  constructor(
    private _shop: ShopService,
    private _packageRepo: ShopPackageRepositoryService,
    private _textTransform: TextTransformService,
    private _shopService: ShopServiceManagementService,
    private _shopExtra: ShopExtraManagementService,
    public modal: ShopPackageModalService,
    public languagePackage: ShopLanguagePackageService,
    public priceCalculator: ShopPackagePriceCalculationService,
    public limitedTime: ShopPackageLimitedTimeService,
    public popover: ShopPackagePopoverService,
    public loading: LoadingService
  ) {
    this.config$ = this._shop.config$;
    this.services$ = this._shop.services$;
    this.extras$ = this._shop.extras$;
    this.specialisedEmployees$ = this._shop.specializedEmployeeFilter$;
    this.packages$ = this._shop.packages$;
    this.extraFilter$ = this._shop.extraFilter$;
    this.serviceFilter$ = this._shop.serviceFilter$;
    this.operatingWorkHour$ = this._shop.operatingWorkHours$;
    this.serviceTranslatedRequest$ = this._shopService.translatedRequest$;
    this.extraServiceRequest$ = this._shopExtra.translatedRequest$;
    this.hasInsuranceProvider$ = this._shop.hasInsuranceProvider$;
    this.hasNotInsuranceProvider$ = this._shop.hasNotInsuranceProvider$;
    this.isRelatedToMedical$ = this._shop.isRelatedToMedical$;
    this.translateRequest();
    this.filterPropListener();
    this.isReachToMaxListener();
    this.activeProgressBar();
  }

  private translateRequest() {
    this.translatedRequest$ = this.config$.pipe(
      combineLatestWith(this.packages$),
      switchMap(([config, services]: [ShopConfigurationType | null, ShopPackageDocumentType[]]) => {
        if (config !== null && services.length > 0) {
          const serviceIds: string[] = services.map(s => {
            return s.id;
          });
          return this._shop.translatedRequestFilterByServiceIds(config.id, serviceIds);
        } else {
          return of([] as ChatGptTranslateDocumentType[]);
        }
      })
    );
  }

  private filterPropListener() {
    this.filterProp$ = combineLatest([this.serviceFilter$, this.extraFilter$, this.specialisedEmployees$]).pipe(
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

  private activeProgressBar() {
    this.progressBar$ = this.packages$.pipe(
      combineLatestWith(this._shop.capacity$),
      switchMap(([service, capacity]: [ShopPackageDocumentType[], ShopCapacityType | null]) => {
        if (capacity !== null) {
          return of({
            current: service.length,
            max: capacity.limitedPackage,
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

  private isReachToMaxListener() {
    this.isReachToMax$ = this.packages$.pipe(
      combineLatestWith(this._shop.capacity$),
      map(([packages, capacity]: [ShopPackageDocumentType[], ShopCapacityType | null]) => {
        if (capacity !== null) {
          return packages.length > capacity.limitedPackage;
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
    pack.titleProp = this._textTransform.preCleansingTranslateProp(pack.titleProp);
    pack.titleProp = this._textTransform.getTitleFormat(pack.titleProp);
    await this.loading.start('label.title.addnewpacakge');
    const newPackage = await this._packageRepo.addPackage(pack);

    if (newPackage) {
      const titleTranslatedRequest = await this._shop.translated.createTitle(pack.shopId, pack.id, pack.titleProp);

      if (!titleTranslatedRequest.requested) {
        await this.delete(pack);
        await this._shop.translated.delete(titleTranslatedRequest.doc.id);
        await this.loading.end();
        return false;
      }

      await this.loading.end();
      return true;
    }

    await this.loading.end();
    return false;
  }

  public async delete(pack: ShopPackageDocumentType) {
    const deletePackage = await this._packageRepo.deletePackage(pack);
    return deletePackage;
  }

  public async update(after: ShopPackageDocumentType) {
    after.titleProp = this._textTransform.preCleansingTranslateProp(after.titleProp);
    after.titleProp = this._textTransform.getTitleFormat(after.titleProp);
    const userName = await this._shop.userName();
    if (userName !== null) {
      after.lastModifiedDate = await this._shop.timeStamp();
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
      return this._packageRepo.defaultPackageDocument(userName, config.id);
    } else {
      return null;
    }
  }

  public async requeueTranslatedRequest(doc: ChatGptTranslateDocumentType) {
    return await this._shop.requeueTranslatedRequest(doc);
  }
}
