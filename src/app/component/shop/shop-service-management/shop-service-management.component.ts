import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  PlanConfigurationType,
  RoleConfigurationType,
  ShopConfigurationType,
  ShopServiceDocumentType,
  ShopServiceModalDocumentProp,
  ShopLanguagePackageModalProp,
  ShopExtraDocumentType,
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
  private _onDestroy$: Subject<void> = new Subject<void>();

  private _isModalOpen: boolean = false;
  private _config!: ShopConfigurationType | null;
  private _plan!: PlanConfigurationType | null;
  private _relatedServiceTypes!: NameValuePairType[];

  public role!: RoleConfigurationType | null;
  public employeeName!: string;
  public extras!: ShopExtraDocumentType[];
  public specializedEmployees!: NameValuePairType[];
  public translatedRequests!: ChatGptTranslateDocumentType[];
  public services!: ShopServiceDocumentType[];

  constructor(
    private _shopService: ShopServiceManagementService,
    private _global: GlobalService
  ) {}

  async ngOnInit() {
    this.activateEmployeeNameListener();
    this.activateRoleListener();
    this.activateShopConfigListener();
    this.activateShopPlanListener();
    this.activateShopServiceListener();
    this.activateShopEmployeeListener();
    this.activateShopTranslatedRequest();
    this.activateShopExtraListener();
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  public async handleCreate() {
    const isReachedToMax = this.isReachedToMax();
    if (!isReachedToMax) {
      if (
        this._config !== null &&
        !this._isModalOpen &&
        this._config !== undefined &&
        this._relatedServiceTypes &&
        this.specializedEmployees
      ) {
        this._isModalOpen = true;
        const prop: ShopServiceModalDocumentProp = {
          service: await this._shopService.getNewService(this._config.id, this.employeeName),
          specializedEmployees: this.specializedEmployees,
          relatedServiceTypes: this._relatedServiceTypes,
          extra: this.extras,
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

  public async handleEditPackage(prop: ShopLanguagePackageModalProp) {
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
    prop.specializedEmployees = this.specializedEmployees;
    if (
      this._config !== null &&
      !this._isModalOpen &&
      this._config !== undefined &&
      this._relatedServiceTypes &&
      this.specializedEmployees
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

  private activateShopExtraListener() {
    this._shopService.extra$.pipe(takeUntil(this._onDestroy$)).subscribe(extras => {
      this.extras = extras;
    });
  }

  private activateEmployeeNameListener() {
    this._shopService.employeName$.pipe(takeUntil(this._onDestroy$)).subscribe(name => {
      this.employeeName = name;
    });
  }

  private activateRoleListener() {
    this._shopService.currentRole$.pipe(takeUntil(this._onDestroy$)).subscribe(role => {
      this.role = role;
    });
  }

  private activateShopConfigListener() {
    this._shopService.currentShopConfig$.pipe(takeUntil(this._onDestroy$)).subscribe(config => {
      this._config = config;
      if (config !== null) {
        this._relatedServiceTypes = this._shopService.relateShopService.getShopRelatedServiceTypes(
          config.category
        );
      }
    });
  }

  private activateShopPlanListener() {
    this._shopService.shopPlan$.pipe(takeUntil(this._onDestroy$)).subscribe(plan => {
      this._plan = plan;
    });
  }

  private activateShopServiceListener() {
    this._shopService.service$.pipe(takeUntil(this._onDestroy$)).subscribe(services => {
      this.services = services;
    });
  }

  private activateShopTranslatedRequest() {
    this._shopService.translatedRequest$.pipe(takeUntil(this._onDestroy$)).subscribe(requests => {
      this.translatedRequests = requests;
    });
  }

  private activateShopEmployeeListener() {
    this._shopService.specialisedEmployees$
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(employees => {
        this.specializedEmployees = employees;
      });
  }

  private async presentReachedToMaxError() {
    const msg = await this._global.language.transform('messageerror.description.outoflimitservice');
    await this._global.toast.presentError(msg);
  }

  private isReachedToMax() {
    if (this._plan?.limitedService) {
      return this.services?.length >= this._plan?.limitedService;
    } else {
      return false;
    }
  }
}
