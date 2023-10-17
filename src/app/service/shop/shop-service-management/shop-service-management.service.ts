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
  ShopServiceDocumentType,
} from 'src/app/interface';
import { Observable, firstValueFrom, map, of, switchMap } from 'rxjs';
import { ShopEmployeeManagementService } from '../shop-employee-management/shop-employee-management.service';
import { ShopServiceRepositoryService } from 'src/app/firebase/shop-repository/shop-service-repository/shop-service-repository.service';
import { TextTransformService } from '../../global/text-transform/text-transform.service';
import { ShopRelatedServiceService } from './shop-related-service/shop-related-service.service';
import { ShopServiceModalService } from './shop-service-modal/shop-service-modal.service';
import { ShopLanguagePackageService } from '../shop-language-package/shop-language-package.service';
import { LoadingService } from '../../global/loading/loading.service';
import { ShopServiceMenuOptionControllerService } from './shop-service-menu-option-controller/shop-service-menu-option-controller.service';
import { ShopTranslatedRequestService } from '../shop-translated-request/shop-translated-request.service';
import { ShopExtraManagementService } from '../shop-extra-management/shop-extra-management.service';
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
  public translatedRequest$!: Observable<ChatGptTranslateDocumentType[]>;
  constructor(
    private _user: UserService,
    private _shopEmp: ShopEmployeeManagementService,
    public relateShopService: ShopRelatedServiceService,
    public modal: ShopServiceModalService,
    public textTransform: TextTransformService,
    public languagePackage: ShopLanguagePackageService,
    public loading: LoadingService,
    public menu: ShopServiceMenuOptionControllerService,
    private _shopServiceRepo: ShopServiceRepositoryService,
    private _translated: ShopTranslatedRequestService,
    private _shopExtra: ShopExtraManagementService
  ) {
    this.currentShopConfig$ = this._user.currentShopConfig$;
    this.shopEmp$ = this._shopEmp.shopEmployees$;
    this.currentRole$ = this._user.currentRole$;
    this.shopPlan$ = this._user.currentShopPlan$;
    this.employeName$ = this._user.employeName$;
    this.translatedRequest$ = this._translated.translatedRequest$;
    this.extra$ = this._shopExtra.extra$;
    this.activateShopServiceListener();
  }

  private activateShopServiceListener() {
    this.service$ = this.currentShopConfig$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._shopServiceRepo.serviceValueChangeListener(config.id);
        } else {
          return of([] as ShopServiceDocumentType[]);
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
    const empName = await this._user.fullName();
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
    const result = await firstValueFrom(this.currentShopConfig$);
    return result;
  }

  public async requeueTranslatedRequest(doc: ChatGptTranslateDocumentType) {
    return await this._translated.requeueTranslatedRequest(doc);
  }
}
