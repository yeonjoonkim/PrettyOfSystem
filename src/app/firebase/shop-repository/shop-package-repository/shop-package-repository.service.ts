import { Injectable, inject } from '@angular/core';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import {
  ShopConfigurationType,
  ShopPackageDocumentType,
  ShopPackageExtraType,
  ShopPackageServiceType,
} from 'src/app/interface';
import * as Constant from '../../../constant/constant';
import { ShopPackage } from 'src/app/constant/firebase-path';
import { map } from 'rxjs';
import { TextTransformService } from 'src/app/service/global/text-transform/text-transform.service';
import { DateService } from 'src/app/service/global/date/date.service';
import { SystemLanguageStorageService } from 'src/app/service/global/language/system-language-management/system-language-storage/system-language-storage.service';
import * as Document from 'functions/src/service/override/shop/document-override/index';
import { FirebaseApiService, createKeyMap, Query } from '../../firebase-api/firebase-api.service';

const param = createKeyMap<ShopPackageDocumentType>([
  'id',
  'shopId',
  'discount',
  'discountPrice',
  'discountedAmount',
  'extras',
  'isInsuranceCover',
  'isInsuranceCover',
  'isOil',
  'lastModifiedDate',
  'lastModifiedEmployee',
  'limitedTime',
  'originalPrice',
  'recommandForPregnant',
  'services',
  'specializedEmployees',
  'title',
  'titleProp',
  'totalMin',
]);
@Injectable({
  providedIn: 'root',
})
export class ShopPackageRepositoryService {
  private _api = inject(FirebaseApiService);

  constructor(
    private _toaster: FirebaseToasterService,
    private _textTransform: TextTransformService,
    private _date: DateService,
    private _languageStorage: SystemLanguageStorageService
  ) {}

  public packageValueChangeListener(shopId: string) {
    return this._api.valueChangeDocuments<ShopPackageDocumentType>(ShopPackage(shopId)).pipe(
      map(packages =>
        packages.map(pack => {
          pack = Document.Package.override(pack);
          pack.services = this.orderServiceByMinASC(pack.services);
          pack.extras = this.orderExtraByPriceASC(pack.extras);
          return pack;
        })
      )
    );
  }

  public async addPackage(doc: ShopPackageDocumentType) {
    doc.titleProp = this._textTransform.preCleansingTranslateProp(doc.titleProp);
    doc = Document.Package.override(doc);
    try {
      const saved = await this._api.set<ShopPackageDocumentType>(ShopPackage(doc.shopId), doc);
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

  public async updatePackage(doc: ShopPackageDocumentType) {
    doc.titleProp = this._textTransform.preCleansingTranslateProp(doc.titleProp);
    doc = Document.Package.override(doc);
    try {
      const updated = await this._api.updateDocument(ShopPackage(doc.shopId), doc);

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

  public async deletePackage(doc: ShopPackageDocumentType) {
    try {
      const deleted = await this._api.delete<ShopPackageDocumentType>(ShopPackage(doc.shopId), doc.id);
      if (deleted) {
        await this._toaster.deleteSuccess();
      } else {
        await this._toaster.deleteFail('');
      }
      return deleted;
    } catch (error) {
      await this._toaster.deleteFail(error);
      console.error(error);
      return false;
    }
  }

  public defaultPackageDocument(empName: string, shopId: string) {
    let result: ShopPackageDocumentType = {
      id: this._api.newId(),
      shopId: shopId,
      title: '',
      titleProp: '',
      specializedEmployees: [],
      services: [],
      extras: [],
      originalPrice: 0,
      discountPrice: 0,
      discountedAmount: 0,
      totalMin: 0,
      isInsuranceCover: false,
      isOil: false,
      discount: {
        type: Constant.PackageDiscountType.Percent,
        value: 0,
      },
      lastModifiedDate: this._date.shopTimeStamp(null),
      lastModifiedEmployee: empName,
      recommandForPregnant: false,
      limitedTime: null,
    };

    result.title = result.id + '.' + Constant.Text.Format.Title;
    return result;
  }

  private orderServiceByMinASC(doc: ShopPackageServiceType[]) {
    doc.sort((a, b) => a.option.min - b.option.min);
    return doc;
  }

  private orderExtraByPriceASC(doc: ShopPackageExtraType[]) {
    doc.sort((a, b) => a.price - b.price);
    return doc;
  }

  public getCompletedTranslateLanguage(coupons: ShopPackageDocumentType[], config: ShopConfigurationType) {
    if (!coupons) return [] as ShopPackageDocumentType[];
    const language = this._languageStorage.currentLanguage;
    return coupons.filter(coupon => this.isCouponValidForLanguage(coupon, config, language));
  }

  private isCouponValidForLanguage(
    coupon: ShopPackageDocumentType,
    config: ShopConfigurationType,
    language: string
  ) {
    return config.package[`${coupon.title}.${language}`] !== undefined;
  }
}
