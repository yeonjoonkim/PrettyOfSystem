import { Component, OnDestroy, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { Observable, Subject, of, pairwise, takeUntil } from 'rxjs';
import {
  ChatGptTranslateDocumentType,
  ShopConfigurationType,
  ShopCountryType,
  ShopExtraDocumentType,
  ShopLanguagePackageModalProp,
  ShopLimitedProgpressBarType,
} from 'src/app/interface';
import { ShopExtraManagementService } from 'src/app/service/shop/shop-extra-management/shop-extra-management.service';

@Component({
  selector: 'shop-extra-management',
  templateUrl: './shop-extra-management.component.html',
  styleUrls: ['./shop-extra-management.component.scss'],
})
export class ShopExtraManagementComponent implements OnInit, OnDestroy {
  private _onDestroy$: Subject<void> = new Subject<void>();
  public extra!: ShopExtraDocumentType[];
  public translatedRequest!: ChatGptTranslateDocumentType[];
  public country!: ShopCountryType;
  public isReachToMax: boolean = true;
  public progressBar$: Observable<ShopLimitedProgpressBarType> = this._extraService.progressBar$.pipe(
    takeUntil(this._onDestroy$)
  );

  private _currentShopConfig!: ShopConfigurationType | null;
  private _isModalOpen: boolean = false;

  constructor(private _extraService: ShopExtraManagementService) {}

  ngOnInit() {
    this.activateShopConfig();
    this.activateShopExtra();
    this.activateTranslatedRequest();
    this.activateIsReachToMax();
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  private activateShopConfig() {
    this._extraService.currentShopConfig$.pipe(takeUntil(this._onDestroy$)).subscribe(config => {
      if (config !== null) {
        this._currentShopConfig = config;
        this.country = config.country;
      }
    });
  }

  private activateIsReachToMax() {
    this._extraService.isReachToMax$.pipe(takeUntil(this._onDestroy$)).subscribe(isReachToMax => {
      this.isReachToMax = isReachToMax;
    });
  }

  private activateShopExtra() {
    this._extraService.extra$.pipe(takeUntil(this._onDestroy$)).subscribe(extra => {
      this.extra = extra;
    });
  }

  private activateTranslatedRequest() {
    this._extraService.translatedRequest$.pipe(takeUntil(this._onDestroy$)).subscribe(request => {
      this.translatedRequest = request;
    });
    this._extraService.translatedRequest$
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

  public async handleCreate() {
    const newDoc = await this._extraService.getNewExtra();
    if (this._currentShopConfig !== null && !this._isModalOpen && newDoc !== null && !this.isReachToMax) {
      this._isModalOpen = true;
      const modal = await this._extraService.modal.presentNewExtra(newDoc);
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  public async handleEdit(prop: ShopExtraDocumentType) {
    if (this._currentShopConfig !== null && !this._isModalOpen) {
      this._isModalOpen = true;
      const modal = await this._extraService.modal.presentEditExtra(prop);
      await modal.present();
      await this.handleModalClose(modal);
    }
  }

  public async handleEditPackage(prop: ShopLanguagePackageModalProp) {
    if (this._currentShopConfig !== null && !this._isModalOpen) {
      this._isModalOpen = true;
      const copied = cloneDeep(prop);
      const modal = await this._extraService.modal.presentEditPackage(copied);
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

  public loading() {
    return this.extra === undefined && this.translatedRequest === undefined;
  }
}
