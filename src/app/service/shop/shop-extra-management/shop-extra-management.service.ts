import { Injectable } from '@angular/core';
import { UserService } from '../../user/user.service';
import {
  ChatGptTranslateDocumentType,
  RoleConfigurationType,
  ShopCapacityType,
  ShopConfigurationType,
  ShopExtraDocumentType,
  ShopLimitedProgpressBarType,
} from 'src/app/interface';
import { Observable, combineLatestWith, map, of, switchMap } from 'rxjs';
import { ShopExtraRepositoryService } from 'src/app/firebase/shop-repository/shop-extra-repository/shop-extra-repository.service';
import { LoadingService } from '../../global/loading/loading.service';
import { ShopLanguagePackageService } from '../shop-language-package/shop-language-package.service';
import { ShopExtraModalService } from './shop-extra-modal/shop-extra-modal.service';
import { ShopService } from '../shop.service';
import { TextTransformService } from '../../global/text-transform/text-transform.service';

@Injectable({
  providedIn: 'root',
})
export class ShopExtraManagementService {
  public currentShopConfig$!: Observable<ShopConfigurationType | null>;
  public currentRole$!: Observable<RoleConfigurationType | null>;
  public extra$!: Observable<ShopExtraDocumentType[]>;
  public translatedRequest$!: Observable<ChatGptTranslateDocumentType[]>;
  public isReachToMax$!: Observable<boolean>;
  public progressBar$!: Observable<ShopLimitedProgpressBarType>;

  constructor(
    private _user: UserService,
    private _shopExtraRepo: ShopExtraRepositoryService,
    private _shop: ShopService,
    private _textTransform: TextTransformService,
    public loading: LoadingService,
    public languagePackage: ShopLanguagePackageService,
    public modal: ShopExtraModalService
  ) {
    this.currentRole$ = this._shop.role$;
    this.currentShopConfig$ = this._shop.config$;
    this.extra$ = this._shop.extras$;
    this.translateRequest();
    this.isReachToMaxListener();
    this.activeProgressBar();
  }

  private translateRequest() {
    this.translatedRequest$ = this.currentShopConfig$.pipe(
      combineLatestWith(this.extra$),
      switchMap(([config, services]: [ShopConfigurationType | null, ShopExtraDocumentType[]]) => {
        if (config !== null && services.length > 0) {
          const serviceIds: string[] = services.map(s => {
            return s.id;
          });

          return this._shop.translatedRequestFilterByServiceIds(config.id, serviceIds);
        } else {
          return of([] as ChatGptTranslateDocumentType[]);
        }
      })
    );
  }

  private isReachToMaxListener() {
    this.isReachToMax$ = this.extra$.pipe(
      combineLatestWith(this._shop.capacity$),
      map(([packages, capacity]: [ShopExtraDocumentType[], ShopCapacityType | null]) => {
        if (capacity !== null) {
          return packages.length > capacity.limitedExtra;
        } else {
          return false;
        }
      })
    );
  }

  private activeProgressBar() {
    this.progressBar$ = this.extra$.pipe(
      combineLatestWith(this._shop.capacity$),
      switchMap(([extra, capacity]: [ShopExtraDocumentType[], ShopCapacityType | null]) => {
        if (capacity !== null) {
          return of({
            current: extra.length,
            max: capacity.limitedExtra,
            title: 'label.title.maximumactiveextras',
            indeterminate: false,
          });
        } else {
          return of({
            current: 0,
            max: 0,
            title: 'label.title.maximumactiveextras',
            indeterminate: false,
          });
        }
      })
    );
  }

  public async add(extra: ShopExtraDocumentType) {
    await this.loading.start('label.title.addnewextra');
    extra.titleProp = this._textTransform.getTitleFormat(extra.titleProp);
    const newExtra = await this._shopExtraRepo.addExtra(extra);

    if (newExtra) {
      const titleTranslatedRequest = await this._shop.translated.createTitle(
        extra.shopId,
        extra.id,
        extra.titleProp
      );

      if (!titleTranslatedRequest.requested) {
        await this._shopExtraRepo.deleteExtra(extra);
        await this._shop.translated.delete(titleTranslatedRequest.doc.id);
        await this.loading.end();
        return false;
      }
      await this.loading.end();
      return true;
    }

    await this.loading.end();
    return false;
  }

  public async delete(extra: ShopExtraDocumentType) {
    const deleteExtra = await this._shopExtraRepo.deleteExtra(extra);
    return deleteExtra;
  }

  public async update(extra: ShopExtraDocumentType) {
    extra.titleProp = this._textTransform.getTitleFormat(extra.titleProp);
    const empName = await this._user.fullName();
    if (empName !== null) {
      extra.lastModifiedEmployee = empName;
      extra.lastModifiedDate = await this._shop.timeStamp();
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
