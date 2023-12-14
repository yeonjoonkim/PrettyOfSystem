import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import * as Constant from '../../../constant/constant';
import { ShopCoupon } from 'src/app/constant/firebase-path';
import { ShopConfigurationType, ShopCouponDocumentType } from 'src/app/interface';
import { map, of } from 'rxjs';
import { DateService } from 'src/app/service/global/date/date.service';
import { SystemLanguageStorageService } from 'src/app/service/global/language/system-language-management/system-language-storage/system-language-storage.service';
@Injectable({
  providedIn: 'root',
})
export class ShopCouponRepositoryService {
  constructor(
    private _afs: AngularFirestore,
    private _toaster: FirebaseToasterService,
    private _date: DateService,
    private _languageStorage: SystemLanguageStorageService
  ) {}

  public valueChangeListener(shopId: string) {
    return this._afs
      .collection<ShopCouponDocumentType>(ShopCoupon(shopId), ref => ref.orderBy('discountPrice', 'desc'))
      .valueChanges()
      .pipe(
        map(coupons => {
          return coupons;
        })
      );
  }

  public async addCoupon(doc: ShopCouponDocumentType) {
    try {
      this._afs.collection<ShopCouponDocumentType>(ShopCoupon(doc.shopId)).doc(doc.id).set(doc);
      await this._toaster.addSuccess();
      return true;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }

  public async updateCoupon(doc: ShopCouponDocumentType) {
    try {
      this._afs.collection<ShopCouponDocumentType>(ShopCoupon(doc.shopId)).doc(doc.id).update(doc);
      await this._toaster.updateSuccess();
      return true;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async deleteCoupon(doc: ShopCouponDocumentType) {
    try {
      this._afs.collection<ShopCouponDocumentType>(ShopCoupon(doc.shopId)).doc(doc.id).delete();
      await this._toaster.deleteSuccess();
      return true;
    } catch (error) {
      await this._toaster.deleteFail(error);
      console.error(error);
      return false;
    }
  }
  public defaultDocument(empName: string, shopId: string) {
    const result: ShopCouponDocumentType = {
      id: this._afs.createId(),
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
