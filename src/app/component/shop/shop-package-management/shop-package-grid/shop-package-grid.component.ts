import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  ShopLanguagePackageModalProp,
  ShopPackageDocumentType,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Constant from 'src/app/constant/constant';
import { ShopPackageManagementService } from 'src/app/service/shop/shop-package-management/shop-package-management.service';
import { cloneDeep } from 'lodash-es';
import { Observable } from 'rxjs';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';

@Component({
  selector: 'shop-package-grid',
  templateUrl: './shop-package-grid.component.html',
  styleUrls: ['./shop-package-grid.component.scss'],
})
export class ShopPackageGridComponent implements OnInit {
  public kendo = inject(KendoUiService);
  @Output() onEditLanguagePackage = new EventEmitter<ShopLanguagePackageModalProp>();
  @Output() onEdit = new EventEmitter<ShopPackageDocumentType>();
  @Output() onCreate = new EventEmitter<boolean>();

  @Input() packages: ShopPackageDocumentType[] = [];
  @Input() translatedRequests: ChatGptTranslateDocumentType[] = [];
  @Input() specialists: NameValuePairType[] = [];
  @Input() isModalOpen: boolean = false;
  @Input() isReachMax: boolean = true;

  public isAuthorisedRole: boolean = false;
  public isRelatedToMedical$!: Observable<boolean>;
  constructor(
    private _global: GlobalService,
    private _shopPackage: ShopPackageManagementService
  ) {
    this.isRelatedToMedical$ = this._shopPackage.isRelatedToMedical$;
  }

  async ngOnInit() {
    this.isAuthorisedRole = await this._shopPackage.isAuthorisedRole();
  }

  public onClickCreate() {
    if (!this.isModalOpen) {
      this.onCreate.emit(true);
    }
  }

  public isCompletedRequest(serviceId: string) {
    const titleRequest = this.translatedRequests?.find(
      s => s.serviceId === serviceId && s.format === Constant.Text.Format.Title
    );
    return titleRequest !== undefined ? titleRequest.status === Constant.API.TranslateStatus.Completed : false;
  }

  public async onClickEdit(prop: ShopPackageDocumentType) {
    const titleRequest = this.translatedRequests.find(
      r => r.serviceId === prop.id && Constant.Text.Format.Title === r.format
    );
    const unableToViewStatuses: Constant.APITranslationStatus[] = [
      Constant.API.TranslateStatus.Create,
      Constant.API.TranslateStatus.Pending,
    ];

    if (titleRequest !== undefined && !this.isModalOpen) {
      const copiedPackage = cloneDeep(prop);
      const copiedTitleStatus = cloneDeep(titleRequest.status);
      if (!unableToViewStatuses.includes(copiedTitleStatus) && prop !== null) {
        this.onEdit.emit(copiedPackage);
      }
    }
  }

  public isLimitedDate(pack: ShopPackageDocumentType) {
    return pack.limitedTime !== null;
  }

  public async handleRequeue(doc: ChatGptTranslateDocumentType, pack: ShopPackageDocumentType) {
    const isFailed = doc.status === Constant.API.TranslateStatus.Failed;
    const isSuccess = doc.status === Constant.API.TranslateStatus.Success;
    const isInProgress = doc.status === Constant.API.TranslateStatus.InProgress;
    const createdDate = this._global.date.transform.toLocalDateTime(doc.createdDate);
    const isCompleted = doc.status === Constant.API.TranslateStatus.Completed;
    const FiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const isCreatedDateThreeMinsAgo = createdDate < FiveMinutesAgo;

    if (isFailed || ((isInProgress || isSuccess) && isCreatedDateThreeMinsAgo)) {
      await this._shopPackage.requeueTranslatedRequest(doc);
    }
    if (isCompleted) {
      await this.handlePackageProp(pack);
    }
  }

  public allowRefresh(pack: ShopPackageDocumentType, requests: ChatGptTranslateDocumentType[]) {
    return requests
      .filter(s => s.serviceId === pack.id)
      .map(doc => doc.status)
      .every(status => status === 'Success' || status === 'Completed' || status === 'Failed');
  }

  public async handleRefresh(pack: ShopPackageDocumentType, requests: ChatGptTranslateDocumentType[]) {
    const docs = requests
      .filter(s => s.serviceId === pack.id)
      .map(async doc => {
        await this._shopPackage.requeueTranslatedRequest(doc);
      });
    Promise.all(docs);
  }

  private async handlePackageProp(s: ShopPackageDocumentType) {
    const c = await this._shopPackage.getShopConfig();
    if (c != null && !this.isModalOpen) {
      const relatedKeys = this._shopPackage.languagePackage.getRelatedNamePairValueList(c.package, s.title);
      const languages = await this._shopPackage.languagePackage.getLanguages(relatedKeys);
      const prop: ShopLanguagePackageModalProp = {
        languages: languages,
        relatedKeys: relatedKeys,
        isTitle: true,
        title: s.titleProp,
        prop: this._global.textTransform.preCleansingTranslateProp(s.titleProp),
      };
      this.onEditLanguagePackage.emit(prop);
    }
  }
}
