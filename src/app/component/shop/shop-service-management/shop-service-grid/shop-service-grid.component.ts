import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import {
  ChatGptTranslateDocumentType,
  RoleConfigurationType,
  ShopServiceDocumentType,
  ShopServiceModalDocumentProp,
  ShopServiceModalPackageProp,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopEmployeeManagementService } from 'src/app/service/shop/shop-employee-management/shop-employee-management.service';
import * as Constant from 'src/app/constant/constant';
import { ShopServiceManagementService } from 'src/app/service/shop/shop-service-management/shop-service-management.service';
@Component({
  selector: 'shop-service-grid',
  templateUrl: './shop-service-grid.component.html',
  styleUrls: ['./shop-service-grid.component.scss'],
})
export class ShopServiceGridComponent implements OnInit {
  @Output() onEditPackage = new EventEmitter<ShopServiceModalPackageProp>();
  @Output() onEdit = new EventEmitter<ShopServiceModalDocumentProp>();
  @Output() onCreate = new EventEmitter<boolean>();

  @Input() services: ShopServiceDocumentType[] = [];
  @Input() translatedRequests: ChatGptTranslateDocumentType[] = [];
  @Input() role: RoleConfigurationType | null = null;

  constructor(
    private _shopEmp: ShopEmployeeManagementService,
    private _global: GlobalService,
    private _shopService: ShopServiceManagementService
  ) {}

  ngOnInit() {}

  public isAuthorisedRole() {
    if (this.role !== null && this.role !== undefined) {
      return this._shopEmp.isReceptionAccessLevel(this.role);
    } else {
      return false;
    }
  }

  public async handleRequeue(
    doc: ChatGptTranslateDocumentType,
    service: ShopServiceDocumentType,
    option: 'title' | 'description'
  ) {
    const isFailed = doc.status === Constant.API.TranslateStatus.Failed;
    const isInProgress = doc.status === Constant.API.TranslateStatus.Success;
    const createdDate = this._global.date.transform.toDate(doc.createdDate);
    const isCompleted = doc.status === Constant.API.TranslateStatus.Completed;
    const threeMinutesAgo = new Date(Date.now() - 3 * 60 * 1000);
    const isCreatedDateThreeMinsAgo = createdDate < threeMinutesAgo;

    if (isFailed || (isInProgress && isCreatedDateThreeMinsAgo)) {
      await this._shopService.requeueTranslatedRequest(doc);
    }
    if (isCompleted) {
      const isTitle = option === 'title';
      await this.handlePackageProp(service, isTitle);
    }
  }

  public onClickCreate() {
    this.onCreate.emit(true);
  }

  public async onClickEdit(service: ShopServiceDocumentType) {
    const titleRequest = this.translatedRequests.find(
      r => r.serviceId === service.id && Constant.Text.Format.Title === r.format
    );
    const descriptionRequest = this.translatedRequests.find(
      r => r.serviceId === service.id && Constant.Text.Format.Description === r.format
    );
    const unableToViewStatuses: Constant.APITranslationStatus[] = [
      Constant.API.TranslateStatus.Create,
      Constant.API.TranslateStatus.Pending,
    ];

    if (titleRequest !== undefined && descriptionRequest !== undefined) {
      const copiedService = cloneDeep(service);
      const copiedTitleStatus = cloneDeep(titleRequest.status);
      const copiedDescriptionStatus = cloneDeep(descriptionRequest.status);
      const prop: ShopServiceModalDocumentProp = {
        service: copiedService,
        titleStatus: copiedTitleStatus,
        descriptionStatus: copiedDescriptionStatus,
        specializedEmployees: [],
        relatedServiceTypes: [],
      };
      if (
        !unableToViewStatuses.includes(copiedTitleStatus) &&
        !unableToViewStatuses.includes(copiedDescriptionStatus)
      ) {
        this.onEdit.emit(prop);
      }
    }
  }

  private async handlePackageProp(s: ShopServiceDocumentType, isTitle: boolean) {
    const c = await this._shopService.getShopConfig();
    const k = isTitle ? s.title : s.description;
    const t = isTitle ? s.titleProp : s.descriptionProp;
    if (c != null) {
      const relatedKeys = this._shopService.languagePackage.getRelatedNamePairValueList(
        c.package,
        k
      );
      const languages = await this._shopService.languagePackage.getLanguages(relatedKeys);
      const translatedProp = isTitle ? s.titleProp : s.descriptionProp;
      const prop: ShopServiceModalPackageProp = {
        languages: languages,
        relatedKeys: relatedKeys,
        isTitle: isTitle,
        title: t,
        prop: translatedProp,
      };
      this.onEditPackage.emit(prop);
    }
  }
}
