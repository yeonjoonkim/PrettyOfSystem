import { Injectable } from '@angular/core';
import { UserService } from '../../user/user.service';
import {
  ChatGptTranslateDocumentType,
  NameValuePairType,
  PlanConfigurationType,
  RoleConfigurationType,
  ShopConfigurationType,
  ShopExtraDocumentType,
} from 'src/app/interface';
import { Observable, firstValueFrom, of, switchMap } from 'rxjs';
import { ShopTranslatedRequestService } from '../shop-translated-request/shop-translated-request.service';
import { ShopExtraRepositoryService } from 'src/app/firebase/shop-repository/shop-extra-repository/shop-extra-repository.service';
import { LoadingService } from '../../global/loading/loading.service';
import { ShopLanguagePackageService } from '../shop-language-package/shop-language-package.service';
import { ShopExtraModalService } from './shop-extra-modal/shop-extra-modal.service';

@Injectable({
  providedIn: 'root',
})
export class ShopExtraManagementService {
  public currentShopConfig$!: Observable<ShopConfigurationType | null>;
  public currentShopPlan$!: Observable<PlanConfigurationType | null>;
  public currentRole$!: Observable<RoleConfigurationType | null>;
  public extra$!: Observable<ShopExtraDocumentType[]>;
  public translatedRequest$!: Observable<ChatGptTranslateDocumentType[]>;

  constructor(
    private _user: UserService,
    private _translated: ShopTranslatedRequestService,
    private _shopExtraRepo: ShopExtraRepositoryService,
    public loading: LoadingService,
    public languagePackage: ShopLanguagePackageService,
    public modal: ShopExtraModalService
  ) {
    this.currentShopConfig$ = this._user.currentShopConfig$;
    this.currentShopPlan$ = this._user.currentShopPlan$;
    this.currentRole$ = this.currentRole$;
    this.translatedRequest$ = this._translated.translatedRequest$;
    this.activateShopExtraListener();
  }

  private activateShopExtraListener() {
    this.extra$ = this.currentShopConfig$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._shopExtraRepo.extraValueChangeListener(config.id);
        } else {
          return of([] as ShopExtraDocumentType[]);
        }
      })
    );
  }

  public async add(extra: ShopExtraDocumentType) {
    const newExtra = await this._shopExtraRepo.addExtra(extra);
    return newExtra;
  }

  public async delete(extra: ShopExtraDocumentType) {
    const deleteExtra = await this._shopExtraRepo.deleteExtra(extra);
    return deleteExtra;
  }

  public async update(extra: ShopExtraDocumentType) {
    const empName = await this._user.fullName();
    if (empName !== null) {
      extra.lastModifiedEmployee = empName;
      extra.lastModifiedDate = new Date();
      return await this._shopExtraRepo.updateExtra(extra);
    } else {
      return false;
    }
  }

  public async getNewExtra() {
    const empName = await this._user.fullName();
    const shopId = await this._user.currentShopId();
    if (empName !== null && shopId !== null) {
      const extra = this._shopExtraRepo.defaultExtraDocument();
      extra.shopId = shopId;
      extra.lastModifiedEmployee = empName;

      return extra;
    }
    return null;
  }

  public async getShopConfig() {
    const result = await firstValueFrom(this.currentShopConfig$);
    return result;
  }

  public async requeueTranslatedRequest(doc: ChatGptTranslateDocumentType) {
    return await this._translated.requeueTranslatedRequest(doc);
  }
}
