import { Injectable } from '@angular/core';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  PlanConfigurationType,
  RoleConfigurationType,
  ShopConfigurationType,
  ShopEmployeeManagementUserType,
  ShopExtraDocumentType,
  ShopLimitedProgpressBarType,
  ShopServiceDocumentType,
} from 'src/app/interface';
import { Observable, combineLatestWith, map, of, switchMap } from 'rxjs';
import { ShopServiceRepositoryService } from 'src/app/firebase/shop-repository/shop-service-repository/shop-service-repository.service';
import { TextTransformService } from '../../global/text-transform/text-transform.service';
import { ShopRelatedServiceService } from './shop-related-service/shop-related-service.service';
import { ShopServiceModalService } from './shop-service-modal/shop-service-modal.service';
import { ShopLanguagePackageService } from '../shop-language-package/shop-language-package.service';
import { LoadingService } from '../../global/loading/loading.service';
import { ShopServiceMenuOptionControllerService } from './shop-service-menu-option-controller/shop-service-menu-option-controller.service';
import { ShopService } from '../shop.service';

@Injectable({
  providedIn: 'root',
})
export class ShopServiceManagementService {
  public currentShopConfig$!: Observable<ShopConfigurationType | null>;
  public shopEmp$!: Observable<ShopEmployeeManagementUserType[]>;
  public currentRole$!: Observable<RoleConfigurationType | null>;
  public service$!: Observable<ShopServiceDocumentType[]>;
  public extra$!: Observable<ShopExtraDocumentType[]>;
  public shopPlan$!: Observable<PlanConfigurationType | null>;
  public employeName$!: Observable<string>;
  public specialisedEmployees$!: Observable<NameValuePairType[]>;
  public translatedRequest$!: Observable<ChatGptTranslateDocumentType[]>;
  public isReachToMax$!: Observable<boolean>;
  public progressBar$!: Observable<ShopLimitedProgpressBarType>;
  public extraFilter$!: Observable<NameValuePairType[]>;

  constructor(
    public relateShopService: ShopRelatedServiceService,
    public modal: ShopServiceModalService,
    public languagePackage: ShopLanguagePackageService,
    public loading: LoadingService,
    public menu: ShopServiceMenuOptionControllerService,
    private _shopServiceRepo: ShopServiceRepositoryService,
    private _shop: ShopService,
    private _textTransform: TextTransformService
  ) {
    this.currentShopConfig$ = this._shop.config$;
    this.shopEmp$ = this._shop.employees$;
    this.currentRole$ = this._shop.role$;
    this.shopPlan$ = this._shop.plan$;
    this.employeName$ = this._shop.userName$;
    this.extra$ = this._shop.extras$;
    this.service$ = this._shop.services$;
    this.specialisedEmployees$ = this._shop.specializedEmployeeFilter$;
    this.extraFilter$ = this._shop.extraFilter$;
    this.isReachToMaxListener();
    this.activeProgressBar();
    this.translateRequest();
  }

  private isReachToMaxListener() {
    this.isReachToMax$ = this.service$.pipe(
      combineLatestWith(this.shopPlan$),
      map(([packages, plan]: [ShopServiceDocumentType[], PlanConfigurationType | null]) => {
        if (plan !== null) {
          const isMaxReached = packages.length > plan.limitedService;
          return isMaxReached;
        } else {
          return false;
        }
      })
    );
  }

  private translateRequest() {
    this.translatedRequest$ = this.currentShopConfig$.pipe(
      combineLatestWith(this.service$),
      switchMap(([config, services]: [ShopConfigurationType | null, ShopServiceDocumentType[]]) => {
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

  private activeProgressBar() {
    this.progressBar$ = this.service$.pipe(
      combineLatestWith(this.shopPlan$),
      switchMap(([service, plan]: [ShopServiceDocumentType[], PlanConfigurationType | null]) => {
        if (plan !== null) {
          return of({
            current: service.length,
            max: plan.limitedService,
            title: 'label.title.maximumactiveservices',
            indeterminate: false,
          });
        } else {
          return of({
            current: 0,
            max: 0,
            title: 'label.title.maximumactiveservices',
            indeterminate: false,
          });
        }
      })
    );
  }

  public async add(service: ShopServiceDocumentType) {
    await this.loading.start('label.title.addnewservice');
    service.titleProp = this._textTransform.getTitleFormat(service.titleProp);
    const newService = await this._shopServiceRepo.addService(service);
    const sleep = async (duration: number) => {
      return new Promise(resolve => setTimeout(resolve, duration));
    };
    if (newService) {
      const titleTranslated = await this._shop.translated.createTitle(
        service.shopId,
        service.id,
        service.titleProp
      );
      sleep(1000);
      const descTranslated = await this._shop.translated.createDescription(
        service.shopId,
        service.id,
        service.descriptionProp
      );

      if (!titleTranslated.requested || !descTranslated.requested) {
        await this.delete(service);
        await this._shop.translated.delete(titleTranslated.doc.id);
        await this._shop.translated.delete(descTranslated.doc.id);
        await this.loading.end();
        return false;
      }

      await this.loading.end();
      return true;
    }

    await this.loading.end();
    return false;
  }

  public async delete(service: ShopServiceDocumentType) {
    const deleteService = await this._shopServiceRepo.deleteService(service);
    return deleteService;
  }

  public async update(after: ShopServiceDocumentType) {
    after.titleProp = this._textTransform.getTitleFormat(after.titleProp);
    const empName = await this._shop.userName();
    if (empName !== null) {
      after.lastModifiedEmployee = empName;
      after.lastModifiedDate = await this._shop.timeStamp();
      return await this._shopServiceRepo.updateService(after);
    } else {
      return false;
    }
  }

  public async getNewService(shopId: string, empName: string): Promise<ShopServiceDocumentType> {
    let service = this._shopServiceRepo.defaultServiceDocument();
    service.shopId = shopId;
    service.lastModifiedEmployee = empName;
    return service;
  }

  public async getShopConfig() {
    return this._shop.config();
  }

  public async requeueTranslatedRequest(doc: ChatGptTranslateDocumentType) {
    return await this._shop.requeueTranslatedRequest(doc);
  }
}
