import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { ShopImage1, ShopImage2, ShopLogo } from 'src/app/constant/firebase-path';

@Injectable({
  providedIn: 'root',
})
export class ShopPictureRepositoryService {
  constructor(
    private _afstorage: AngularFireStorage,
    private _toaster: FirebaseToasterService
  ) {}

  public async uploadLogo(shopId: string, file: File) {
    try {
      const path = ShopLogo(shopId, file);
      const uploadTask = await this._afstorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
      await this._toaster.updateSuccess();
      return url;
    } catch (error) {
      console.error(error);
      await this._toaster.uploadFail(error);
      return null;
    }
  }

  public async uploadShopImage1(shopId: string, file: File) {
    try {
      const path = ShopImage1(shopId, file);
      const uploadTask = await this._afstorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
      await this._toaster.updateSuccess();
      return url;
    } catch (error) {
      console.error(error);
      await this._toaster.uploadFail(error);
      return null;
    }
  }

  public async uploadShopImage2(shopId: string, file: File) {
    try {
      const path = ShopImage2(shopId, file);
      const uploadTask = await this._afstorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
      await this._toaster.updateSuccess();
      return url;
    } catch (error) {
      console.error(error);
      await this._toaster.uploadFail(error);
      return null;
    }
  }

  public async uploadShopImage3(shopId: string, file: File) {
    try {
      const path = ShopImage2(shopId, file);
      const uploadTask = await this._afstorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
      await this._toaster.updateSuccess();
      return url;
    } catch (error) {
      console.error(error);
      await this._toaster.uploadFail(error);
      return null;
    }
  }
}
