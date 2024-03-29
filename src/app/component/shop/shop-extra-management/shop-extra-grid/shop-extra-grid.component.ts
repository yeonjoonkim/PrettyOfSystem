import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import {
  ChatGptTranslateDocumentType,
  ShopCountryType,
  ShopExtraDocumentType,
  ShopLanguagePackageModalProp,
} from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopExtraManagementService } from 'src/app/service/shop/shop-extra-management/shop-extra-management.service';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';

@Component({
  selector: 'shop-extra-grid',
  templateUrl: './shop-extra-grid.component.html',
  styleUrls: ['./shop-extra-grid.component.scss'],
})
export class ShopExtraGridComponent implements OnInit {
  public kendo = inject(KendoUiService);

  @Output() onEditPackage = new EventEmitter<ShopLanguagePackageModalProp>();
  @Output() onEdit = new EventEmitter<ShopExtraDocumentType>();
  @Output() onCreate = new EventEmitter<boolean>();

  @Input() extras: ShopExtraDocumentType[] = [];
  @Input() translatedRequests!: ChatGptTranslateDocumentType[];
  @Input() country!: ShopCountryType;
  @Input() isReachToMax: boolean = true;

  constructor(
    private _global: GlobalService,
    private _extraService: ShopExtraManagementService
  ) {}

  ngOnInit() {}

  public async handleRequeue(doc: ChatGptTranslateDocumentType, extra: ShopExtraDocumentType) {
    const isFailed = doc.status === Constant.API.TranslateStatus.Failed;
    const isSuccess = doc.status === Constant.API.TranslateStatus.Success;
    const isInProgress = doc.status === Constant.API.TranslateStatus.InProgress;
    const createdDate = this._global.date.transform.toLocalDateTime(doc.createdDate);
    const isCompleted = doc.status === Constant.API.TranslateStatus.Completed;
    const FiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const isCreatedDateThreeMinsAgo = createdDate < FiveMinutesAgo;

    if (isFailed || ((isInProgress || isSuccess) && isCreatedDateThreeMinsAgo)) {
      await this._extraService.requeueTranslatedRequest(doc);
    }
    if (isCompleted) {
      await this.handlePackageProp(extra);
    }
  }

  public allowRefresh(extra: ShopExtraDocumentType, requests: ChatGptTranslateDocumentType[]) {
    return requests
      .filter(s => s.serviceId === extra.id)
      .map(doc => doc.status)
      .every(status => status === 'Success' || status === 'Completed' || status === 'Failed');
  }

  public async handleRefresh(service: ShopExtraDocumentType, requests: ChatGptTranslateDocumentType[]) {
    const docs = requests
      .filter(s => s.serviceId === service.id)
      .map(async doc => {
        await this._extraService.requeueTranslatedRequest(doc);
      });
    Promise.all(docs);
  }

  public isCompletedRequest(serviceId: string) {
    const titleRequest = this.translatedRequests?.find(
      s => s.serviceId === serviceId && s.format === Constant.Text.Format.Title
    );

    return titleRequest !== undefined ? titleRequest.status === Constant.API.TranslateStatus.Completed : false;
  }

  public onClickCreate() {
    this.onCreate.emit(true);
  }

  public onClickEdit(extra: ShopExtraDocumentType) {
    const titleRequest = this.translatedRequests.find(
      r => r.serviceId === extra.id && Constant.Text.Format.Title === r.format
    );
    const unableToViewStatuses: Constant.APITranslationStatus[] = [
      Constant.API.TranslateStatus.Create,
      Constant.API.TranslateStatus.Pending,
    ];
    if (titleRequest !== undefined && !unableToViewStatuses.includes(titleRequest.status)) {
      this.onEdit.emit(extra);
    }
  }

  private async handlePackageProp(s: ShopExtraDocumentType) {
    const c = await this._extraService.getShopConfig();
    if (c != null) {
      const relatedKeys = this._extraService.languagePackage.getRelatedNamePairValueList(c.package, s.title);
      const languages = await this._extraService.languagePackage.getLanguages(relatedKeys);
      const translatedProp = s.titleProp;
      const prop: ShopLanguagePackageModalProp = {
        languages: languages,
        relatedKeys: relatedKeys,
        isTitle: true,
        title: translatedProp,
        prop: this._global.textTransform.preCleansingTranslateProp(translatedProp),
      };
      this.onEditPackage.emit(prop);
    }
  }
}
