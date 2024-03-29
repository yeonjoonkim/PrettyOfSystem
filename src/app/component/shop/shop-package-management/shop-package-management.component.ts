import { Component, OnDestroy, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { Observable, Subject, pairwise, takeUntil } from 'rxjs';
import {
  ChatGptTranslateDocumentType,
  ShopExtraDocumentType,
  ShopLanguagePackageModalProp,
  ShopLimitedProgpressBarType,
  ShopPackageDocumentType,
  ShopPackageFilterDocumentProp,
  ShopPackageModalDocumentProp,
  ShopServiceDocumentType,
  ShopWorkHoursType,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';

import { ShopPackageManagementService } from 'src/app/service/shop/shop-package-management/shop-package-management.service';

@Component({
  selector: 'shop-package-management',
  templateUrl: './shop-package-management.component.html',
  styleUrls: ['./shop-package-management.component.scss'],
})
export class ShopPackageManagementComponent implements OnInit, OnDestroy {
  public packages!: ShopPackageDocumentType[];
  public translatedRequests!: ChatGptTranslateDocumentType[];
  public serviceTranslatedRequest!: ChatGptTranslateDocumentType[];
  public extraTranslatedRequest!: ChatGptTranslateDocumentType[];
  public isModalOpen: boolean = false;
  public isReachToMax: boolean = true;

  private _onDestroy$: Subject<void> = new Subject<void>();
  private _filterProp!: ShopPackageFilterDocumentProp;
  private _extras!: ShopExtraDocumentType[];
  private _services!: ShopServiceDocumentType[];
  private _operatingWorkHour: ShopWorkHoursType | null = null;

  public progressBar$: Observable<ShopLimitedProgpressBarType> = this._shopPackage.progressBar$.pipe(
    takeUntil(this._onDestroy$)
  );

  constructor(
    private _shopPackage: ShopPackageManagementService,
    private _global: GlobalService
  ) {}

  ngOnInit() {
    this.translatedRequest();
    this._shopPackage
      .prop()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(prop => {
        this.packages = prop.packages;
        this.translatedRequests = prop.request;
        this.serviceTranslatedRequest = prop.serviceRequest;
        this.extraTranslatedRequest = prop.extraRequest;
        this.isReachToMax = prop.isReachToMax;
        this._filterProp = prop.filterProp;
        this._extras = prop.extras;
        this._services = prop.services;
        this._operatingWorkHour = prop.operatingHours;
      });
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  private translatedRequest() {
    this._shopPackage.translatedRequest$
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

  public async handleEdit(doc: ShopPackageDocumentType) {
    const prop = this.setModalProp(doc);
    if (!this.isModalOpen && prop !== null) {
      this.isModalOpen = true;
      const copied = cloneDeep(prop);
      const modal = await this._shopPackage.modal.presentEditPackage(copied);
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  public async handleEditLanguagePackage(prop: ShopLanguagePackageModalProp) {
    if (!this.isModalOpen) {
      this.isModalOpen = true;
      const copied = cloneDeep(prop);
      const modal = await this._shopPackage.modal.presentEditLanguagePackage(copied);
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  public async handleCreate() {
    if (this._operatingWorkHour !== null) {
      if (!this.isReachToMax) {
        const newPackage = await this._shopPackage.getNewPackage();
        const prop = this.setModalProp(newPackage);
        if (prop !== null && !this.isModalOpen) {
          this.isModalOpen = true;
          const modal = await this._shopPackage.modal.presentNewPackage(prop);
          await modal.present();
          await this.handleModalClose(modal);
        }
      } else {
        await this.presentReachedToMaxError();
      }
    }
  }

  private async handleModalClose(modal: HTMLIonModalElement) {
    const close = await modal.onWillDismiss();
    if (close) {
      this.isModalOpen = false;
    }
  }

  private async presentReachedToMaxError() {
    const msg = await this._global.language.transform('messageerror.description.outoflimitservice');
    await this._global.toast.presentError(msg);
  }

  private setModalProp(doc: ShopPackageDocumentType | null) {
    if (
      this._operatingWorkHour !== null &&
      this._filterProp &&
      doc !== null &&
      this.extraTranslatedRequest != null &&
      this.serviceTranslatedRequest != null
    ) {
      const prop: ShopPackageModalDocumentProp = {
        package: doc,
        filter: this._filterProp,
        services: this._services,
        extras: this._extras,
        operatingHours: this._operatingWorkHour,
        translateRequests: [...this.extraTranslatedRequest, ...this.serviceTranslatedRequest],
      };
      return prop;
    }

    return null;
  }

  public loading() {
    return this.packages === undefined && this.translatedRequests === undefined;
  }
}
