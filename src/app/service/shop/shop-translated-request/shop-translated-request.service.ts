import { Injectable } from '@angular/core';
import { TranslateRequestRepositoryService } from 'src/app/firebase/system-repository/translate-request/translate-request-repository.service';
import { UserService } from '../../user/user.service';
import { Observable, firstValueFrom, of, switchMap } from 'rxjs';
import {
  ChatGptTranslateDocumentType,
  ChatGptTranslateResult,
  NameValuePairType,
} from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { ShopLanguagePackageService } from '../shop-language-package/shop-language-package.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
@Injectable({
  providedIn: 'root',
})
export class ShopTranslatedRequestService {
  public translatedRequest$: Observable<ChatGptTranslateDocumentType[]> =
    this._user.currentShopConfig$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._translateRepo.selectedShopDocumentsValueChangeListener(config.id);
        } else {
          return of([] as ChatGptTranslateDocumentType[]);
        }
      })
    );
  constructor(
    private _user: UserService,
    private _translateRepo: TranslateRequestRepositoryService,
    private _languagePackage: ShopLanguagePackageService,
    private _shopRepo: SystemShopConfigurationRepositoryService
  ) {}

  public serviceIdTracker(shopId: string, serviceIds: string[]) {
    return this._translateRepo.selectedShopServiceValueChangeListener(shopId, serviceIds);
  }

  public async createTitle(shopId: string, serviceId: string, prop: string) {
    const title = this._translateRepo.getTitleDocument(shopId, serviceId, prop);
    const request = await this._translateRepo.request(title);
    return {
      doc: title,
      requested: request,
    };
  }

  public async createDescription(shopId: string, serviceId: string, prop: string) {
    const title = this._translateRepo.getDescriptionDocument(shopId, serviceId, prop);
    const request = await this._translateRepo.request(title);

    return {
      doc: title,
      requested: request,
    };
  }

  public async delete(id: string) {
    return await this._translateRepo.delete(id);
  }

  public async requeueTranslatedRequest(doc: ChatGptTranslateDocumentType) {
    doc.attempt = 0;
    doc.createdDate = new Date();
    doc.result = [];
    doc.error = [];
    doc.status = Constant.API.TranslateStatus.Pending;
    return await this._translateRepo.updateDocument(doc);
  }

  public async updatePackage(relatedKeys: NameValuePairType[]) {
    let config = await firstValueFrom(this._user.currentShopConfig$);
    if (config !== null) {
      config.package = this._languagePackage.updatePackage(config.package, relatedKeys);
      try {
        return await this._shopRepo.updateShopConfiguration(config);
      } catch (error) {
        console.error(error);
        return false;
      }
    } else {
      return false;
    }
  }
}
