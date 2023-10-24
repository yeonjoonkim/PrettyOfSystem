import { Injectable } from '@angular/core';
import { UserService } from '../../user/user.service';
import {
  ChatGptTranslateDocumentType,
  PlanConfigurationType,
  RoleConfigurationType,
  ShopConfigurationType,
  ShopExtraDocumentType,
} from 'src/app/interface';
import { Observable } from 'rxjs';
import { ShopExtraRepositoryService } from 'src/app/firebase/shop-repository/shop-extra-repository/shop-extra-repository.service';
import { LoadingService } from '../../global/loading/loading.service';
import { ShopLanguagePackageService } from '../shop-language-package/shop-language-package.service';
import { ShopExtraModalService } from './shop-extra-modal/shop-extra-modal.service';
import { ShopService } from '../shop.service';

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
    private _shopExtraRepo: ShopExtraRepositoryService,
    private _shop: ShopService,
    public loading: LoadingService,
    public languagePackage: ShopLanguagePackageService,
    public modal: ShopExtraModalService
  ) {
    this.currentRole$ = this._shop.role$;
    this.currentShopConfig$ = this._shop.config$;
    this.currentShopPlan$ = this._shop.plan$;
    this.extra$ = this._shop.extras$;
    this.translatedRequest$ = this._shop.translatedRequests$;
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
    return await this._shop.config();
  }

  public async requeueTranslatedRequest(doc: ChatGptTranslateDocumentType) {
    return await this._shop.requeueTranslatedRequest(doc);
  }
}
