import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { ShopImage1, ShopImage2, ShopImage3, ShopLogo } from 'src/app/constant/firebase-path';
import { Observable, firstValueFrom, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShopPictureRepositoryService {
  constructor(
    private _afstorage: AngularFireStorage,
    private _toaster: FirebaseToasterService,
    private _http: HttpClient
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
      const path = ShopImage3(shopId, file);
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
  public async deleteFile(url: string) {
    try {
      const fileRef = this._afstorage.refFromURL(url);

      await firstValueFrom(fileRef.delete());
      await this._toaster.deleteSuccess();
      return true;
    } catch (error) {
      console.error(error);
      await this._toaster.deleteFail(error);
      return false;
    }
  }

  getFile(url: string): Observable<Blob> {
    const ref = this._afstorage.refFromURL(url);
    return ref.getDownloadURL().pipe(
      switchMap(downloadUrl => {
        return this._http.get(downloadUrl, {
          responseType: 'blob',
        });
      })
    );
  }
}
