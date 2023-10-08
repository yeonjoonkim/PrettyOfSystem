import { Injectable } from '@angular/core';
import { UserService } from '../../user/user.service';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  PlanConfigurationType,
  RoleConfigurationType,
  ShopConfigurationType,
  ShopEmployeeManagementUserType,
  ShopServiceDocumentType,
} from 'src/app/interface';
import { Observable, firstValueFrom, map, of, switchMap } from 'rxjs';
import { ShopEmployeeManagementService } from '../shop-employee-management/shop-employee-management.service';
import { ShopServiceRepositoryService } from 'src/app/firebase/shop-service-repository/shop-service-repository.service';
import { TextTransformService } from '../../global/text-transform/text-transform.service';
import { TranslateRequestRepositoryService } from 'src/app/firebase/system-repository/translate-request/translate-request-repository.service';
import { ShopRelatedServiceService } from './shop-related-service/shop-related-service.service';
import { ShopServiceModalService } from './shop-service-modal/shop-service-modal.service';
import * as Constant from 'src/app/constant/constant';
import { ShopLanguagePackageService } from './shop-language-package/shop-language-package.service';
@Injectable({
  providedIn: 'root',
})
export class ShopServiceManagementService {
  public currentShopConfig$!: Observable<ShopConfigurationType | null>;
  public shopEmp$!: Observable<ShopEmployeeManagementUserType[]>;
  public currentRole$!: Observable<RoleConfigurationType | null>;
  public service$!: Observable<ShopServiceDocumentType[]>;
  public shopPlan$!: Observable<PlanConfigurationType | null>;
  public employeName$!: Observable<string>;
  public translatedRequest$!: Observable<ChatGptTranslateDocumentType[]>;
  constructor(
    private _user: UserService,
    private _shopEmp: ShopEmployeeManagementService,
    private _shopServiceRepo: ShopServiceRepositoryService,
    private _translate: TranslateRequestRepositoryService,
    public relateShopService: ShopRelatedServiceService,
    public modal: ShopServiceModalService,
    public textTransform: TextTransformService,
    public languagePackage: ShopLanguagePackageService
  ) {
    this.currentShopConfig$ = this._user.currentShopConfig$;
    this.shopEmp$ = this._shopEmp.shopEmployees$;
    this.currentRole$ = this._user.currentRole$;
    this.shopPlan$ = this._shopEmp.shopPlan$;
    this.activateMassageShopServiceListener();
    this.activateEmployeeNameListener();
    this.activateTranslatedRequest();
  }

  private activateEmployeeNameListener() {
    this.employeName$ = this._user.data$.pipe(
      map(user => {
        if (user !== null) {
          const result = user.firstName + ' ' + user.lastName;
          return result;
        } else {
          return '';
        }
      })
    );
  }

  private activateMassageShopServiceListener() {
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

  private activateTranslatedRequest() {
    this.translatedRequest$ = this.currentShopConfig$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._translate.selectedShopDocumentsValueChangeListener(config.id);
        } else {
          return of([] as ChatGptTranslateDocumentType[]);
        }
      })
    );
  }

  public async updatePackage(relatedKeys: NameValuePairType[]) {
    let config = await this.getShopConfig();
    if (config !== null) {
      config.package = this.languagePackage.updatePackage(config.package, relatedKeys);
      try {
        return await this._shopServiceRepo.shop.updateShopConfiguration(config);
      } catch (error) {
        console.error(error);
        return false;
      }
    } else {
      return false;
    }
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
    const updatedService = await this._shopServiceRepo.updateService(after);
    return updatedService;
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
    doc.attempt = 0;
    doc.createdDate = new Date();
    doc.result = [];
    doc.error = [];
    doc.status = Constant.API.TranslateStatus.Pending;
    return await this._translate.updateDocument(doc);
  }
}
