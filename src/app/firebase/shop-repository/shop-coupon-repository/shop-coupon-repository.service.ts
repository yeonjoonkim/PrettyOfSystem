import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import * as Constant from '../../../constant/constant';
import { ShopCoupon } from 'src/app/constant/firebase-path';
import { ShopCouponDocumentType } from 'src/app/interface';
import { map } from 'rxjs';
import { TextTransformService } from 'src/app/service/global/text-transform/text-transform.service';
@Injectable({
  providedIn: 'root',
})
export class ShopCouponRepositoryService {
  constructor(
    private _afs: AngularFirestore,
    private _toaster: FirebaseToasterService,
    private _textTransform: TextTransformService
  ) {}

  public valueChangeListener(shopId: string) {
    return this._afs
      .collection<ShopCouponDocumentType>(ShopCoupon(shopId), ref =>
        ref.orderBy('discountPrice', 'desc')
      )
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
      lastModifiedDate: new Date(),
      lastModifiedEmployee: empName,
      option: {
        min: 0,
        price: 0,
      },
    };

    result.title = result.id + '.' + Constant.Text.Format.Title;
    return result;
  }
}
