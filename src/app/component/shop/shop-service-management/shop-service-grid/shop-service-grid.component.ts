import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  RoleConfigurationType,
  ShopServiceDocumentType,
  ShopServiceModalDocumentProp,
  ShopLanguagePackageModalProp,
  ShopExtraDocumentType,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopEmployeeManagementService } from 'src/app/service/shop/shop-employee-management/shop-employee-management.service';
import * as Constant from 'src/app/constant/constant';
import { ShopServiceManagementService } from 'src/app/service/shop/shop-service-management/shop-service-management.service';
import { PopoverController } from '@ionic/angular';
import { ShopServiceOptionPopoverComponent } from '../shop-service-option-popover/shop-service-option-popover.component';
import { Observable } from 'rxjs';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';

@Component({
  selector: 'shop-service-grid',
  templateUrl: './shop-service-grid.component.html',
  styleUrls: ['./shop-service-grid.component.scss'],
})
export class ShopServiceGridComponent implements OnInit {
  public kendo = inject(KendoUiService);
  @Output() onEditPackage = new EventEmitter<ShopLanguagePackageModalProp>();
  @Output() onEdit = new EventEmitter<ShopServiceModalDocumentProp>();
  @Output() onCreate = new EventEmitter<boolean>();

  @Input() services!: ShopServiceDocumentType[];
  @Input() extras!: ShopExtraDocumentType[];
  @Input() translatedRequests!: ChatGptTranslateDocumentType[];
  @Input() role: RoleConfigurationType | null = null;
  @Input() specialists: NameValuePairType[] = [];
  @Input() isReachToMax: boolean = true;
  @Input() extraFilter: NameValuePairType[] = [];

  public isRelatedToMedical$!: Observable<boolean>;
  public isMassageShop$!: Observable<boolean>;

  constructor(
    private _shopEmp: ShopEmployeeManagementService,
    private _global: GlobalService,
    private _shopService: ShopServiceManagementService,
    private _popover: PopoverController
  ) {
    this.isRelatedToMedical$ = this._shopService.isRelatedToMedical$;
    this.isMassageShop$ = this._shopService.isMassageShop$;
  }

  ngOnInit() {}

  public isAuthorisedRole() {
    if (this.role !== null && this.role !== undefined) {
      return this._shopEmp.isReceptionAccessLevel(this.role);
    } else {
      return false;
    }
  }

  public async onClickOption(doc: ShopServiceDocumentType, event: any) {
    const popover = await this._popover.create({
      component: ShopServiceOptionPopoverComponent,
      translucent: true,
      event: event,
      componentProps: {
        options: cloneDeep(doc.options),
      },
    });
    await popover.present();
  }

  public async handleRefresh(service: ShopServiceDocumentType, requests: ChatGptTranslateDocumentType[]) {
    const docs = requests
      .filter(s => s.serviceId === service.id)
      .map(async doc => {
        await this._shopService.requeueTranslatedRequest(doc);
      });
    Promise.all(docs);
  }

  public async handleRequeue(
    doc: ChatGptTranslateDocumentType,
    service: ShopServiceDocumentType,
    option: 'title' | 'description'
  ) {
    const isFailed = doc.status === Constant.API.TranslateStatus.Failed;
    const isSuccess = doc.status === Constant.API.TranslateStatus.Success;
    const isInProgress = doc.status === Constant.API.TranslateStatus.InProgress;
    const createdDate = this._global.date.transform.toLocalDateTime(doc.createdDate);
    const isCompleted = doc.status === Constant.API.TranslateStatus.Completed;
    const FiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const isCreatedDateThreeMinsAgo = createdDate < FiveMinutesAgo;

    if (isFailed || ((isInProgress || isSuccess) && isCreatedDateThreeMinsAgo)) {
      await this._shopService.requeueTranslatedRequest(doc);
    }
    if (isCompleted) {
      const isTitle = option === 'title';
      await this.handlePackageProp(service, isTitle);
    }
  }

  public isCompletedRequest(serviceId: string) {
    const titleRequest = this.translatedRequests?.find(
      s => s.serviceId === serviceId && s.format === Constant.Text.Format.Title
    );
    return titleRequest !== undefined ? titleRequest.status === Constant.API.TranslateStatus.Completed : false;
  }

  public isFailed(doc: ChatGptTranslateDocumentType) {
    const FiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const isInProgress = doc.status === Constant.API.TranslateStatus.InProgress;
    const createdDate = this._global.date.transform.toLocalDateTime(doc.createdDate);
    const isCreatedDateThreeMinsAgo = createdDate < FiveMinutesAgo;
    return isInProgress && isCreatedDateThreeMinsAgo;
  }

  public allowRefresh(service: ShopServiceDocumentType, requests: ChatGptTranslateDocumentType[]) {
    return requests
      .filter(s => s.serviceId === service.id)
      .map(doc => doc.status)
      .every(status => status === 'Success' || status === 'Completed' || status === 'Failed');
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
      const copiedExtra = cloneDeep(this.extras);
      const copiedExtraFilter = cloneDeep(this.extraFilter);
      const prop: ShopServiceModalDocumentProp = {
        service: copiedService,
        titleStatus: copiedTitleStatus,
        descriptionStatus: copiedDescriptionStatus,
        extra: copiedExtra,
        specializedEmployees: [],
        relatedServiceTypes: [],
        extraFilter: copiedExtraFilter,
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
      const relatedKeys = this._shopService.languagePackage.getRelatedNamePairValueList(c.package, k);
      const languages = await this._shopService.languagePackage.getLanguages(relatedKeys);
      const translatedProp = isTitle ? s.titleProp : s.descriptionProp;
      const prop: ShopLanguagePackageModalProp = {
        languages: languages,
        relatedKeys: relatedKeys,
        isTitle: isTitle,
        title: t,
        prop: this._global.textTransform.preCleansingTranslateProp(translatedProp),
      };
      this.onEditPackage.emit(prop);
    }
  }
}
