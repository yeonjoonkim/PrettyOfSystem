import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, pairwise, takeUntil } from 'rxjs';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  RoleConfigurationType,
  ShopConfigurationType,
  ShopServiceDocumentType,
  ShopServiceModalDocumentProp,
  ShopLanguagePackageModalProp,
  ShopExtraDocumentType,
  ShopLimitedProgpressBarType,
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
  public _config!: ShopConfigurationType | null;
  private _relatedServiceTypes!: NameValuePairType[];

  public role!: RoleConfigurationType | null;
  public employeeName!: string;
  public extras!: ShopExtraDocumentType[];
  public extraFilter!: NameValuePairType[];
  public specializedEmployees!: NameValuePairType[];
  public translatedRequests!: ChatGptTranslateDocumentType[];
  public services!: ShopServiceDocumentType[];
  public isReachToMax: boolean = true;
  public progressBar$: Observable<ShopLimitedProgpressBarType> = this._shopService.progressBar$.pipe(
    takeUntil(this._onDestroy$)
  );

  constructor(
    private _shopService: ShopServiceManagementService,
    private _global: GlobalService
  ) {}

  async ngOnInit() {
    this._shopService
      .prop()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(prop => {
        if (prop.config !== null) {
          this._relatedServiceTypes = this._shopService.relateShopService.getShopRelatedServiceTypes(
            prop.config.category
          );
        }
        this.isReachToMax = prop.isReachToMax;
        this.employeeName = prop.empName;
        this.role = prop.currentRole;
        this._config = prop.config;
        this.extraFilter = prop.extraFilter;
        this.extras = prop.extra;
        this.services = prop.services;
        this.translatedRequests = prop.request;
        this.specializedEmployees = prop.specialists;
      });
    this.activateShopTranslatedRequest();
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  public async handleCreate() {
    if (!this.isReachToMax) {
      if (
        this._config !== null &&
        !this._isModalOpen &&
        this._config !== undefined &&
        this._relatedServiceTypes &&
        this.specializedEmployees
      ) {
        this._isModalOpen = true;
        await this._global.loading.show();
        const prop: ShopServiceModalDocumentProp = {
          service: await this._shopService.getNewService(this._config.id, this.employeeName),
          specializedEmployees: this.specializedEmployees,
          relatedServiceTypes: this._relatedServiceTypes,
          extra: this.extras,
          extraFilter: this.extraFilter,
          titleStatus: Constant.API.TranslateStatus.Create,
          descriptionStatus: Constant.API.TranslateStatus.Create,
        };

        await this._global.loading.dismiss();
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
  private activateShopTranslatedRequest() {
    this._shopService.translatedRequest$
      .pipe(pairwise(), takeUntil(this._onDestroy$))
      .subscribe(([before, after]) => {
        const updatedStatusArray = after.reduce((acc: ChatGptTranslateDocumentType[], afterItem) => {
          const beforeItem = before.find(b => b.id === afterItem.id);
          if (beforeItem && beforeItem.status !== afterItem.status) {
            acc.push(afterItem);
          }
          return acc;
        }, []);

        if (updatedStatusArray.length > 0) {
          console.log('Updated Status:', updatedStatusArray);
        }
      });
  }

  private async presentReachedToMaxError() {
    const msg = await this._global.language.transform('messageerror.description.outoflimitservice');
    await this._global.toast.presentError(msg);
  }

  public loading() {
    return this.services === undefined && this.translatedRequests === undefined;
  }
}
