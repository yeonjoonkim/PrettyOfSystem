import { Injectable, inject } from '@angular/core';
import { ShopConfigurationType, ShopServiceDocumentType } from 'src/app/interface';
import { ShopService } from 'src/app/constant/firebase-path';
import { map } from 'rxjs';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import * as Constant from 'src/app/constant/constant';
import { TextTransformService } from 'src/app/service/global/text-transform/text-transform.service';
import { DateService } from 'src/app/service/global/date/date.service';
import { SystemLanguageStorageService } from 'src/app/service/global/language/system-language-management/system-language-storage/system-language-storage.service';
import * as Document from 'functions/src/service/override/shop/document-override/index';
import { FirebaseApiService, createKeyMap, Query } from '../../firebase-api/firebase-api.service';

const param = createKeyMap<ShopServiceDocumentType>([
  'id',
  'shopId',
  'descriptionProp',
  'extraIds',
  'isInsuranceCover',
  'isOil',
  'lastModifiedDate',
  'lastModifiedEmployee',
  'options',
  'recommandForPregnant',
  'relatedService',
  'shopId',
  'specializedEmployees',
  'title',
  'titleProp',
]);

@Injectable({
  providedIn: 'root',
})
export class ShopServiceRepositoryService {
  private _api = inject(FirebaseApiService);

  constructor(
    private _toaster: FirebaseToasterService,
    private _textTransform: TextTransformService,
    private _languageStorage: SystemLanguageStorageService,
    private _date: DateService
  ) {}

  public serviceValueChangeListener(shopId: string) {
    return this._api.valueChangeDocuments<ShopServiceDocumentType>(ShopService(shopId)).pipe(
      map(services =>
        services.map(service => {
          service = Document.Service.override(service);
          return this.orderOptionsByMinASC(service);
        })
      )
    );
  }

  public async addService(doc: ShopServiceDocumentType) {
    doc.titleProp = this._textTransform.preCleansingTranslateProp(doc.titleProp);
    doc.descriptionProp = this._textTransform.preCleansingTranslateProp(doc.descriptionProp);
    doc = Document.Service.override(doc);
    try {
      const saved = await this._api.set<ShopServiceDocumentType>(ShopService(doc.shopId), doc);
      if (saved !== null) {
        await this._toaster.addSuccess();
      } else {
        await this._toaster.addFail('');
      }

      return saved !== null;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }

  public async updateService(doc: ShopServiceDocumentType) {
    doc.titleProp = this._textTransform.preCleansingTranslateProp(doc.titleProp);
    doc.descriptionProp = this._textTransform.preCleansingTranslateProp(doc.descriptionProp);
    doc = Document.Service.override(doc);
    try {
      const updated = await this._api.updateDocument<ShopServiceDocumentType>(ShopService(doc.shopId), doc);
      if (updated) {
        await this._toaster.updateSuccess();
      } else {
        await this._toaster.updateFail('');
      }

      return updated;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async deleteService(doc: ShopServiceDocumentType) {
    try {
      const deleted = await this._api.delete<ShopServiceDocumentType>(ShopService(doc.shopId), doc.id);
      if (deleted) {
        await this._toaster.deleteSuccess();
      } else {
        await this._toaster.deleteFail('');
      }

      return deleted;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public defaultServiceDocument() {
    let result: ShopServiceDocumentType = {
      id: this._api.newId(),
      shopId: '',
      titleProp: '',
      descriptionProp: '',
      isInsuranceCover: false,
      isOil: false,
      recommandForPregnant: false,
      relatedService: { name: '', value: '' },
      specializedEmployees: [],
      options: [],
      extraIds: [],
      title: '',
      description: '',
      lastModifiedDate: this._date.shopTimeStamp(null),
      lastModifiedEmployee: '',
    };

    result.title = result.id + '.' + Constant.Text.Format.Title;
    result.description = result.id + '.' + Constant.Text.Format.Description;
    return result;
  }

  private orderOptionsByMinASC(doc: ShopServiceDocumentType) {
    doc.options.sort((a, b) => a.min - b.min);
    return doc;
  }

  public getCompletedTranslateLanguage(coupons: ShopServiceDocumentType[], config: ShopConfigurationType) {
    if (!coupons) return [] as ShopServiceDocumentType[];
    const language = this._languageStorage.currentLanguage;
    return coupons.filter(coupon => this.isCouponValidForLanguage(coupon, config, language));
  }

  private isCouponValidForLanguage(
    coupon: ShopServiceDocumentType,
    config: ShopConfigurationType,
    language: string
  ) {
    return (
      config.package[`${coupon.title}.${language}`] !== undefined &&
      config.package[`${coupon.description}.${language}`] !== undefined
    );
  }
}
