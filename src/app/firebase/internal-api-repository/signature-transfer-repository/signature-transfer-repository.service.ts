import { Injectable, inject } from '@angular/core';
import { ShopCategoryIndicatorType, SignatureTransferDocumentType } from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Db from 'src/app/constant/firebase-path';
import * as Constant from 'src/app/constant/constant';
import { FirebaseApiService, createKeyMap } from '../../firebase-api/firebase-api.service';

@Injectable({
  providedIn: 'root',
})
export class SignatureTransferRepositoryService {
  private _api = inject(FirebaseApiService);
  private _param = createKeyMap<SignatureTransferDocumentType>([
    'id',
    'signature',
    'shopCategory',
    'status',
    'expiredOfficeDateTime',
  ]);
  constructor(private _global: GlobalService) {}

  public get(requestId: string) {
    return this._api.getDocument<SignatureTransferDocumentType>(Db.Context.SigantureTransfer, ref =>
      ref.where(this._param.id, Constant.Query.Equal, requestId).limit(1)
    );
  }

  public valueChangeListener(requestId: string) {
    return this._api.valueChangeDocument<SignatureTransferDocumentType>(Db.Context.SigantureTransfer, ref =>
      ref.where('id', '==', requestId).limit(1)
    );
  }

  public async createDocument(indicator: ShopCategoryIndicatorType) {
    try {
      const newDoc = this.newTransferDocument(indicator);
      const createdId = await this._api.set<SignatureTransferDocumentType>(Db.Context.SigantureTransfer, newDoc);
      return newDoc;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async sendSignature(docId: string, signature: string) {
    try {
      const status = Constant.SignatureTransferStatus.Sending;
      return await this._api.updateField<SignatureTransferDocumentType>(Db.Context.SigantureTransfer, docId, {
        signature,
        status,
      });
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public async delete(docId: string) {
    try {
      return await this._api.delete<SignatureTransferDocumentType>(Db.Context.SigantureTransfer, docId);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public async connected(docId: string) {
    const status = Constant.SignatureTransferStatus.Connected;
    return this._api.updateField<SignatureTransferDocumentType>(Db.Context.SigantureTransfer, docId, { status });
  }

  public async endConnection(docId: string) {
    return await this._api.delete<SignatureTransferDocumentType>(Db.Context.SigantureTransfer, docId);
  }

  private newTransferDocument(indicator: ShopCategoryIndicatorType) {
    const officeDateTime = this._global.date.shopNow(Constant.TimeZone.AustraliaBrisbane);
    const expiredDateTime = this._global.date.addMin(officeDateTime, 5);

    const doc: SignatureTransferDocumentType = {
      id: this._global.newId(),
      expiredOfficeDateTime: expiredDateTime,
      shopCategory: indicator,
      signature: null,
      status: Constant.SignatureTransferStatus.StandBy,
    };
    return doc;
  }
}
