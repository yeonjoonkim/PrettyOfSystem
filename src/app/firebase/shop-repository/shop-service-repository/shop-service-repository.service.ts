import { Injectable } from '@angular/core';
import { ShopConfigurationType, ShopServiceDocumentType } from 'src/app/interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ShopService } from 'src/app/constant/firebase-path';
import { map } from 'rxjs';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import * as Constant from 'src/app/constant/constant';
import { TextTransformService } from 'src/app/service/global/text-transform/text-transform.service';
import { DateService } from 'src/app/service/global/date/date.service';
import { SystemLanguageStorageService } from 'src/app/service/global/language/system-language-management/system-language-storage/system-language-storage.service';
@Injectable({
  providedIn: 'root',
})
export class ShopServiceRepositoryService {
  constructor(
    private _afs: AngularFirestore,
    private _toaster: FirebaseToasterService,
    private _textTransform: TextTransformService,
    private _languageStorage: SystemLanguageStorageService,
    private _date: DateService
  ) {}

  public serviceValueChangeListener(shopId: string) {
    return this._afs
      .collection<ShopServiceDocumentType>(ShopService(shopId))
      .valueChanges()
      .pipe(
        map(services =>
          services.map(service => {
            return this.orderOptionsByMinASC(service);
          })
        )
      );
  }

  public async addService(doc: ShopServiceDocumentType) {
    doc.titleProp = this._textTransform.preCleansingTranslateProp(doc.titleProp);
    doc.descriptionProp = this._textTransform.preCleansingTranslateProp(doc.descriptionProp);
    try {
      this._afs.collection<ShopServiceDocumentType>(ShopService(doc.shopId)).doc(doc.id).set(doc);
      await this._toaster.addSuccess();
      return true;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }

  public async updateService(doc: ShopServiceDocumentType) {
    doc.titleProp = this._textTransform.preCleansingTranslateProp(doc.titleProp);
    doc.descriptionProp = this._textTransform.preCleansingTranslateProp(doc.descriptionProp);
    try {
      this._afs.collection<ShopServiceDocumentType>(ShopService(doc.shopId)).doc(doc.id).update(doc);
      await this._toaster.updateSuccess();
      return true;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async deleteService(doc: ShopServiceDocumentType) {
    try {
      this._afs.collection<ShopServiceDocumentType>(ShopService(doc.shopId)).doc(doc.id).delete();
      await this._toaster.deleteSuccess();
      return true;
    } catch (error) {
      await this._toaster.deleteFail(error);
      console.error(error);
      return false;
    }
  }

  public defaultServiceDocument() {
    let result: ShopServiceDocumentType = {
      id: this._afs.createId(),
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
