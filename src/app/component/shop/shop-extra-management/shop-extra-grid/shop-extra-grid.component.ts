import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ChatGptTranslateDocumentType,
  ShopCountryType,
  ShopExtraDocumentType,
  ShopLanguagePackageModalProp,
} from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopExtraManagementService } from 'src/app/service/shop/shop-extra-management/shop-extra-management.service';

@Component({
  selector: 'shop-extra-grid',
  templateUrl: './shop-extra-grid.component.html',
  styleUrls: ['./shop-extra-grid.component.scss'],
})
export class ShopExtraGridComponent implements OnInit {
  @Output() onEditPackage = new EventEmitter<ShopLanguagePackageModalProp>();
  @Output() onEdit = new EventEmitter<ShopExtraDocumentType>();
  @Output() onCreate = new EventEmitter<boolean>();

  @Input() extras: ShopExtraDocumentType[] = [];
  @Input() translatedRequests: ChatGptTranslateDocumentType[] = [];
  @Input() country!: ShopCountryType;

  constructor(
    private _global: GlobalService,
    private _extraService: ShopExtraManagementService
  ) {}

  ngOnInit() {}

  public async handleRequeue(
    doc: ChatGptTranslateDocumentType,
    extra: ShopExtraDocumentType,
    option: 'title' | 'description'
  ) {
    const isFailed = doc.status === Constant.API.TranslateStatus.Failed;
    const isSuccess = doc.status === Constant.API.TranslateStatus.Success;
    const isInProgress = doc.status === Constant.API.TranslateStatus.InProgress;
    const createdDate = this._global.date.transform.toDate(doc.createdDate);
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
      const relatedKeys = this._extraService.languagePackage.getRelatedNamePairValueList(
        c.package,
        s.title
      );
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
