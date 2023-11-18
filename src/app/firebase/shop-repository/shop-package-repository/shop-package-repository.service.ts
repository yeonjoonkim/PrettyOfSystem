import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import {
  ShopPackageDocumentType,
  ShopPackageExtraType,
  ShopPackageServiceType,
  ShopWorkHoursType,
} from 'src/app/interface';
import * as Constant from '../../../constant/constant';
import { ShopPackage } from 'src/app/constant/firebase-path';
import { map } from 'rxjs';
import { TextTransformService } from 'src/app/service/global/text-transform/text-transform.service';
import { DateService } from 'src/app/service/global/date/date.service';
@Injectable({
  providedIn: 'root',
})
export class ShopPackageRepositoryService {
  constructor(
    private _afs: AngularFirestore,
    private _toaster: FirebaseToasterService,
    private _textTransform: TextTransformService,
    private _date: DateService
  ) {}

  public packageValueChangeListener(shopId: string) {
    return this._afs
      .collection<ShopPackageDocumentType>(ShopPackage(shopId))
      .valueChanges()
      .pipe(
        map(packages =>
          packages.map(pack => {
            pack.services = this.orderServiceByMinASC(pack.services);
            pack.extras = this.orderExtraByPriceASC(pack.extras);
            return pack;
          })
        )
      );
  }

  public async addPackage(doc: ShopPackageDocumentType) {
    doc.titleProp = this._textTransform.preCleansingTranslateProp(doc.titleProp);
    try {
      this._afs.collection<ShopPackageDocumentType>(ShopPackage(doc.shopId)).doc(doc.id).set(doc);
      await this._toaster.addSuccess();
      return true;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }

  public async updatePackage(doc: ShopPackageDocumentType) {
    doc.titleProp = this._textTransform.preCleansingTranslateProp(doc.titleProp);
    try {
      this._afs
        .collection<ShopPackageDocumentType>(ShopPackage(doc.shopId))
        .doc(doc.id)
        .update(doc);
      await this._toaster.updateSuccess();
      return true;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async deletePackage(doc: ShopPackageDocumentType) {
    try {
      this._afs.collection<ShopPackageDocumentType>(ShopPackage(doc.shopId)).doc(doc.id).delete();
      await this._toaster.deleteSuccess();
      return true;
    } catch (error) {
      await this._toaster.deleteFail(error);
      console.error(error);
      return false;
    }
  }

  public defaultPackageDocument(empName: string, shopId: string) {
    let result: ShopPackageDocumentType = {
      id: this._afs.createId(),
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
}
