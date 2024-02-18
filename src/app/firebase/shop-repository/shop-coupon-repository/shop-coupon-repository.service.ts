import { Injectable, inject } from '@angular/core';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import * as Constant from '../../../constant/constant';
import { ShopCoupon } from 'src/app/constant/firebase-path';
import { ShopConfigurationType, ShopCouponDocumentType } from 'src/app/interface';
import { map } from 'rxjs';
import { DateService } from 'src/app/service/global/date/date.service';
import { SystemLanguageStorageService } from 'src/app/service/global/language/system-language-management/system-language-storage/system-language-storage.service';
import * as Document from 'functions/src/service/override/shop/document-override/index';
import { FirebaseApiService, createKeyMap } from '../../firebase-api/firebase-api.service';

const param = createKeyMap<ShopCouponDocumentType>([
  'id',
  'description',
  'discount',
  'discountAmount',
  'discountPrice',
  'expiryMonth',
  'lastModifiedDate',
  'lastModifiedEmployee',
  'numOfCoupon',
  'lastModifiedEmployee',
  'shopId',
  'title',
  'titleProp',
  'serviceId',
  'relatedService',
  'option',
]);
@Injectable({
  providedIn: 'root',
})
export class ShopCouponRepositoryService {
  private _api = inject(FirebaseApiService);

  constructor(
    private _toaster: FirebaseToasterService,
    private _date: DateService,
    private _languageStorage: SystemLanguageStorageService
  ) {}

  public valueChangeListener(shopId: string) {
    return this._api
      .valueChangeDocuments<ShopCouponDocumentType>(ShopCoupon(shopId), ref =>
        ref.orderBy(param.discountPrice, 'desc')
      )
      .pipe(
        map(coupons => {
          return coupons.map(coupon => {
            return Document.Coupon.override(coupon);
          });
        })
      );
  }

  public async addCoupon(doc: ShopCouponDocumentType) {
    try {
      doc = Document.Coupon.override(doc);
      const saved = await this._api.set<ShopCouponDocumentType>(ShopCoupon(doc.shopId), doc);

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

  public async updateCoupon(doc: ShopCouponDocumentType) {
    try {
      doc = Document.Coupon.override(doc);

      const updated = await this._api.updateDocument<ShopCouponDocumentType>(ShopCoupon(doc.shopId), doc);
      if (updated) {
        await this._toaster.updateSuccess();
      } else {
        await this._toaster.updateFail('');
      }

      return true;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async deleteCoupon(doc: ShopCouponDocumentType) {
    try {
      const deleted = await this._api.delete<ShopCouponDocumentType>(ShopCoupon(doc.shopId), doc.id);
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
  public defaultDocument(empName: string, shopId: string) {
    const result: ShopCouponDocumentType = {
      id: this._api.newId(),
      serviceId: '',
      shopId: shopId,
      title: '',
      description: '',
      discount: {
        type: 'Percent',
        value: 0,
      },
      titleProp: '',
      discountPrice: 0,
      discountAmount: 0,
      expiryMonth: 1,
      numOfCoupon: 1,
      originalPrice: 0,
      lastModifiedDate: this._date.shopTimeStamp(null),
      lastModifiedEmployee: empName,
      option: {
        min: 0,
        price: 0,
      },
      relatedService: {
        name: '',
        value: '',
      },
    };

    result.title = result.id + '.' + Constant.Text.Format.Title;
    return result;
  }

  public getCompletedTranslateLanguage(coupons: ShopCouponDocumentType[], config: ShopConfigurationType) {
    if (!coupons) return [] as ShopCouponDocumentType[];
    const language = this._languageStorage.currentLanguage;
    return coupons.filter(coupon => this.isCouponValidForLanguage(coupon, config, language));
  }

  private isCouponValidForLanguage(
    coupon: ShopCouponDocumentType,
    config: ShopConfigurationType,
    language: string
  ) {
    return (
      config.package[`${coupon.title}.${language}`] !== undefined &&
      config.package[`${coupon.description}.${language}`] !== undefined
    );
  }
}
