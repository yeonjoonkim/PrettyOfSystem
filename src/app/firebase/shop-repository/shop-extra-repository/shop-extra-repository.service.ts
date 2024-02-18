import { Injectable, inject } from '@angular/core';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { ShopConfigurationType, ShopExtraDocumentType } from 'src/app/interface';
import { ShopExtra } from 'src/app/constant/firebase-path';
import { map } from 'rxjs';
import * as Constant from 'src/app/constant/constant';
import { TextTransformService } from 'src/app/service/global/text-transform/text-transform.service';
import { DateService } from 'src/app/service/global/date/date.service';
import { SystemLanguageStorageService } from 'src/app/service/global/language/system-language-management/system-language-storage/system-language-storage.service';
import * as Document from 'functions/src/service/override/shop/document-override/index';
import { FirebaseApiService } from '../../firebase-api/firebase-api.service';

@Injectable({
  providedIn: 'root',
})
export class ShopExtraRepositoryService {
  private _api = inject(FirebaseApiService);

  constructor(
    private _toaster: FirebaseToasterService,
    private _textTransform: TextTransformService,
    private _languageStorage: SystemLanguageStorageService,
    private _date: DateService
  ) {}

  public extraValueChangeListener(shopId: string) {
    return this._api
      .valueChangeDocuments<ShopExtraDocumentType>(ShopExtra(shopId))
      .pipe(map(extras => extras.map(extra => Document.Extra.override(extra))));
  }

  public async addExtra(doc: ShopExtraDocumentType) {
    doc.titleProp = this._textTransform.preCleansingTranslateProp(doc.titleProp);
    try {
      const saved = await this._api.set<ShopExtraDocumentType>(ShopExtra(doc.shopId), doc);
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

  public async updateExtra(doc: ShopExtraDocumentType) {
    doc.titleProp = this._textTransform.preCleansingTranslateProp(doc.titleProp);
    doc = Document.Extra.override(doc);
    try {
      const updated = await this._api.updateDocument<ShopExtraDocumentType>(ShopExtra(doc.shopId), doc);
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

  public async deleteExtra(doc: ShopExtraDocumentType) {
    try {
      const deleted = await this._api.delete<ShopExtraDocumentType>(ShopExtra(doc.shopId), doc.id);

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

  public defaultExtraDocument() {
    let result: ShopExtraDocumentType = {
      id: this._api.newId(),
      shopId: '',
      titleProp: '',
      title: '',
      price: 0,
      lastModifiedDate: this._date.shopTimeStamp(null),
      lastModifiedEmployee: '',
    };

    result.title = result.id + '.' + Constant.Text.Format.Title;
    return result;
  }

  public getCompletedTranslateLanguage(coupons: ShopExtraDocumentType[], config: ShopConfigurationType) {
    if (!coupons) return [] as ShopExtraDocumentType[];
    const language = this._languageStorage.currentLanguage;
    return coupons.filter(coupon => this.isCouponValidForLanguage(coupon, config, language));
  }

  private isCouponValidForLanguage(
    coupon: ShopExtraDocumentType,
    config: ShopConfigurationType,
    language: string
  ) {
    return config.package[`${coupon.title}.${language}`] !== undefined;
  }
}
