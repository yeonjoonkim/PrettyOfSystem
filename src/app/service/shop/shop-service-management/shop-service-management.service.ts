import { Injectable } from '@angular/core';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  RoleConfigurationType,
  ShopCapacityType,
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
    this.employeName$ = this._shop.userName$;
    this.extra$ = this._shop.extras$;
    this.service$ = this._shop.services$;
    this.specialisedEmployees$ = this._shop.specializedEmployeeFilter$;
    this.extraFilter$ = this._shop.extraFilter$;
    this.translateRequest();
    this.isReachToMaxListener();
    this.activeProgressBar();
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

  private isReachToMaxListener() {
    this.isReachToMax$ = this.service$.pipe(
      combineLatestWith(this._shop.capacity$),
      map(([packages, capacity]: [ShopServiceDocumentType[], ShopCapacityType | null]) => {
        if (capacity !== null) {
          const isMaxReached = packages.length > capacity.limitedService;
          return isMaxReached;
        } else {
          return false;
        }
      })
    );
  }

  private activeProgressBar() {
    this.progressBar$ = this.service$.pipe(
      combineLatestWith(this._shop.capacity$),
      switchMap(([service, capacity]: [ShopServiceDocumentType[], ShopCapacityType | null]) => {
        if (capacity !== null) {
          return of({
            current: service.length,
            max: capacity.limitedService,
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
    const sleep = async (duration: number) => {
      return new Promise(resolve => setTimeout(resolve, duration));
    };

    await this.loading.start('label.title.deleting');
    const deleteService = await this._shopServiceRepo.deleteService(service);
    await sleep(1000);
    await this.loading.end();
    return deleteService;
  }

  public async update(after: ShopServiceDocumentType) {
    after.titleProp = this._textTransform.getTitleFormat(after.titleProp);
    const empName = await this._shop.userName();
    await this.loading.start('label.title.updating');
    const sleep = async (duration: number) => {
      return new Promise(resolve => setTimeout(resolve, duration));
    };
    if (empName !== null) {
      after.lastModifiedEmployee = empName;
      after.lastModifiedDate = await this._shop.timeStamp();
      const result = await this._shopServiceRepo.updateService(after);
      await sleep(1000);
      await this.loading.end();
      return result;
    } else {
      await this.loading.end();
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
