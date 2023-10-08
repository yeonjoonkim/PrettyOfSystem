import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  PlanConfigurationType,
  RoleConfigurationType,
  ShopConfigurationType,
  ShopServiceDocumentType,
  ShopServiceModalDocumentProp,
  ShopServiceModalPackageProp,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopServiceManagementService } from 'src/app/service/shop/shop-service-management/shop-service-management.service';
import * as Constant from 'src/app/constant/constant';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'shop-service-management',
  templateUrl: './shop-service-management.component.html',
  styleUrls: ['./shop-service-management.component.scss'],
})
export class ShopServiceManagementComponent implements OnInit, OnDestroy {
  private _employeeNameSubscription!: Subscription;
  private _currentRoleSubscription!: Subscription;
  private _currentConfigSubscription!: Subscription;
  private _shopPlanSubscription!: Subscription;
  private _shopServicesSubscription!: Subscription;
  private _shopEmpSubscription!: Subscription;
  private _translatedRequestSubscription!: Subscription;

  private _isModalOpen: boolean = false;
  private _config!: ShopConfigurationType | null;
  private _plan!: PlanConfigurationType | null;
  private _specializedEmployees!: NameValuePairType[];
  private _relatedServiceTypes!: NameValuePairType[];

  public role!: RoleConfigurationType | null;
  public employeeName!: string;
  public translatedRequests!: ChatGptTranslateDocumentType[];
  public services!: ShopServiceDocumentType[];

  constructor(
    private _shopService: ShopServiceManagementService,
    private _global: GlobalService
  ) {}

  ngOnInit() {
    this.activateEmployeeNameListener();
    this.activateRoleListener();
    this.activateShopConfigListener();
    this.activateShopPlanListener();
    this.activateShopServiceListener();
    this.activateShopEmployeeListener();
    this.activateShopTranslatedRequest();
  }

  ngOnDestroy() {
    this._currentConfigSubscription?.unsubscribe();
    this._currentRoleSubscription?.unsubscribe();
    this._shopPlanSubscription?.unsubscribe();
    this._shopServicesSubscription?.unsubscribe();
    this._shopEmpSubscription?.unsubscribe();
    this._employeeNameSubscription?.unsubscribe();
    this._translatedRequestSubscription?.unsubscribe();
  }

  public async handleCreate() {
    const isReachedToMax = this.isReachedToMax();
    if (!isReachedToMax) {
      if (
        this._config !== null &&
        !this._isModalOpen &&
        this._config !== undefined &&
        this._relatedServiceTypes &&
        this._specializedEmployees
      ) {
        this._isModalOpen = true;
        const prop: ShopServiceModalDocumentProp = {
          service: await this._shopService.getNewService(this._config.id, this.employeeName),
          specializedEmployees: this._specializedEmployees,
          relatedServiceTypes: this._relatedServiceTypes,
          titleStatus: Constant.API.TranslateStatus.Create,
          descriptionStatus: Constant.API.TranslateStatus.Create,
        };
        const modal = await this._shopService.modal.presentNewService(prop);
        await modal.present();
        await this.handleModalClose(modal);
      }
    } else {
      await this.presentReachedToMaxError();
    }
  }

  public async handleEditPackage(prop: ShopServiceModalPackageProp) {
    if (this._config !== null && !this._isModalOpen) {
      this._isModalOpen = true;
      const copied = cloneDeep(prop);
      const modal = await this._shopService.modal.presentEditPackage(copied);
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  public async handleEdit(prop: ShopServiceModalDocumentProp) {
    prop.relatedServiceTypes = this._relatedServiceTypes;
    prop.specializedEmployees = this._specializedEmployees;
    if (
      this._config !== null &&
      !this._isModalOpen &&
      this._config !== undefined &&
      this._relatedServiceTypes &&
      this._specializedEmployees
    ) {
      this._isModalOpen = true;
      prop.service.lastModifiedEmployee = this.employeeName;
      const modal = await this._shopService.modal.presentEditService(prop);
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  private async handleModalClose(modal: HTMLIonModalElement) {
    const close = await modal.onWillDismiss();
    if (close) {
      this._isModalOpen = false;
    }
  }

  private isReachedToMax() {
    if (this._plan?.limitedService) {
      return this.services?.length >= this._plan?.limitedService;
    } else {
      return false;
    }
  }

  private async presentReachedToMaxError() {
    const msg = await this._global.language.transform('messageerror.description.outoflimitservice');
    await this._global.toast.presentError(msg);
  }

  private activateEmployeeNameListener() {
    this._employeeNameSubscription = this._shopService.employeName$.subscribe(name => {
      this.employeeName = name;
    });
  }

  private activateRoleListener() {
    this._currentRoleSubscription = this._shopService.currentRole$.subscribe(role => {
      this.role = role;
    });
  }

  private activateShopConfigListener() {
    this._currentConfigSubscription = this._shopService.currentShopConfig$.subscribe(config => {
      this._config = config;
      if (config !== null) {
        this._relatedServiceTypes = this._shopService.relateShopService.getShopRelatedServiceTypes(
          config.category
        );
      }
    });
  }

  private activateShopPlanListener() {
    this._shopPlanSubscription = this._shopService.shopPlan$.subscribe(plan => {
      this._plan = plan;
    });
  }

  private activateShopServiceListener() {
    this._shopServicesSubscription = this._shopService.service$.subscribe(services => {
      this.services = services;
    });
  }

  private activateShopTranslatedRequest() {
    this._translatedRequestSubscription = this._shopService.translatedRequest$.subscribe(
      requests => {
        this.translatedRequests = requests;
      }
    );
  }

  private activateShopEmployeeListener() {
    this._shopEmpSubscription = this._shopService.shopEmp$.subscribe(employees => {
      this._specializedEmployees = employees
        .filter(s => s.active && s.displayInSystem && !s.role.accessLevel.isReception)
        .map(emp => {
          return { name: emp.firstName + ' ' + emp.lastName, value: emp.userId };
        });
    });
  }
}
