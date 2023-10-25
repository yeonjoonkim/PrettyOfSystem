import { Injectable } from '@angular/core';
import { UserService } from '../../user/user.service';
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

  constructor(
    public relateShopService: ShopRelatedServiceService,
    public modal: ShopServiceModalService,
    public textTransform: TextTransformService,
    public languagePackage: ShopLanguagePackageService,
    public loading: LoadingService,
    public menu: ShopServiceMenuOptionControllerService,
    private _shopServiceRepo: ShopServiceRepositoryService,
    private _shop: ShopService
  ) {
    this.currentShopConfig$ = this._shop.config$;
    this.shopEmp$ = this._shop.employees$;
    this.currentRole$ = this._shop.role$;
    this.shopPlan$ = this._shop.plan$;
    this.employeName$ = this._shop.userName$;
    this.translatedRequest$ = this._shop.translatedRequests$;
    this.extra$ = this._shop.extras$;
    this.service$ = this._shop.services$;
    this.specialisedEmployees$ = this._shop.specializedEmployeeFilter$;
    this.isReachToMaxListener();
    this.activeProgressBar();
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
    const newService = await this._shopServiceRepo.addService(service);
    return newService;
  }

  public async delete(service: ShopServiceDocumentType) {
    const deleteService = await this._shopServiceRepo.deleteService(service);
    return deleteService;
  }

  public async update(after: ShopServiceDocumentType) {
    const empName = await this._shop.userName();
    if (empName !== null) {
      after.lastModifiedEmployee = empName;
      after.lastModifiedDate = new Date();
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
