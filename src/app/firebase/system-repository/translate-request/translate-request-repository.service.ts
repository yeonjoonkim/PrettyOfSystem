import { Injectable, inject } from '@angular/core';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { ChatGptTranslateDocumentType, ShopServiceDocumentType } from 'src/app/interface';
import { firstValueFrom, map } from 'rxjs';
import { TextTransformService } from 'src/app/service/global/text-transform/text-transform.service';
import { FirebaseApiService, createKeyMap, Query } from '../../firebase-api/firebase-api.service';
import * as Constant from 'src/app/constant/constant';
import * as Db from 'src/app/constant/firebase-path';

const chatGptParam = createKeyMap<ChatGptTranslateDocumentType>([
  'id',
  'attempt',
  'createdDate',
  'error',
  'format',
  'isSystemAdmin',
  'languages',
  'packageKey',
  'parentId',
  'prop',
  'result',
  'serviceId',
  'shopId',
  'status',
  'translateResult',
]);

@Injectable({
  providedIn: 'root',
})
export class TranslateRequestRepositoryService {
  private _api = inject(FirebaseApiService);
  constructor(
    private _toaster: FirebaseToasterService,
    private _textTransform: TextTransformService
  ) {}

  public async request(doc: ChatGptTranslateDocumentType) {
    try {
      const requested = await this._api.set<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest, doc);
      if (requested !== null) {
        await this._toaster.requestSuccess();
      }
      return requested !== null;
    } catch (error) {
      await this._toaster.requestFail(error);
      console.error(error);
      return false;
    }
  }

  public async delete(id: string) {
    try {
      return await this._api.delete<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest, id);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public shopDocumentsValueChangeListener() {
    return this._api.valueChangeDocuments<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest, ref =>
      ref.where(chatGptParam.isSystemAdmin, Query.Equal, false).orderBy(chatGptParam.createdDate, 'asc')
    );
  }

  public selectedShopDocumentsValueChangeListener(shopId: string) {
    return this._api.valueChangeDocuments<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest, ref =>
      ref.where(chatGptParam.isSystemAdmin, Query.Equal, false).where(chatGptParam.shopId, Query.Equal, shopId)
    );
  }

  public selectedShopServiceValueChangeListener(shopId: string, serviceIds: string[]) {
    return this._api.valueChangeDocuments<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest, ref =>
      ref
        .where(chatGptParam.isSystemAdmin, Query.Equal, false)
        .where(chatGptParam.shopId, Query.Equal, shopId)
        .where(chatGptParam.serviceId, Query.In, serviceIds)
    );
  }

  public async updateDocument(doc: ChatGptTranslateDocumentType) {
    try {
      const updated = await this._api.updateDocument<ChatGptTranslateDocumentType>(
        Db.Context.ChatGptTranslateRequest,
        doc
      );

      if (updated) {
        await this._toaster.requestSuccess();
      } else {
        await this._toaster.requestFail('');
      }

      return updated;
    } catch (error) {
      await this._toaster.requestFail(error);
      console.error(error);
      return false;
    }
  }

  public async getDocumentByService(
    doc: ShopServiceDocumentType,
    format: string
  ): Promise<ChatGptTranslateDocumentType | null> {
    const document = this._api.getDocument<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest, ref =>
      ref
        .where(chatGptParam.serviceId, Query.Equal, doc.id)
        .where(chatGptParam.format, Query.Equal, format)
        .limit(1)
    );
    return await firstValueFrom(document);
  }

  public getTitleDocument(shopId: string, serviceId: string, prop: string) {
    const result: ChatGptTranslateDocumentType = {
      id: this._api.newId(),
      shopId: shopId,
      serviceId: serviceId,
      packageKey: serviceId,
      format: Constant.Text.Format.Title,
      languages: [],
      result: [],
      prop: this._textTransform.preCleansingTranslateProp(prop),
      status: Constant.API.TranslateStatus.Create,
      createdDate: new Date(),
      error: [],
      attempt: 0,
      translateResult: [],
      parentId: '',
      isSystemAdmin: false,
    };

    return result;
  }

  public getDescriptionDocument(shopId: string, serviceId: string, prop: string) {
    const result: ChatGptTranslateDocumentType = {
      id: this._api.newId(),
      shopId: shopId,
      serviceId: serviceId,
      packageKey: serviceId,
      format: Constant.Text.Format.Description,
      languages: [],
      result: [],
      prop: this._textTransform.preCleansingTranslateProp(prop),
      status: Constant.API.TranslateStatus.Create,
      createdDate: new Date(),
      error: [],
      attempt: 0,
      translateResult: [],
      parentId: '',
      isSystemAdmin: false,
    };

    return result;
  }
}
