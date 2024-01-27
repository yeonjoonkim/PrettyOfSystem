import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ShopCategoryIndicatorType, SignatureTransferDocumentType } from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Db from 'src/app/constant/firebase-path';
import * as Constant from 'src/app/constant/constant';

import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignatureTransferRepositoryService {
  constructor(
    private _afs: AngularFirestore,
    private _global: GlobalService
  ) {}

  public get(requestId: string) {
    const requestRef = this._afs.collection<SignatureTransferDocumentType>(Db.Context.SigantureTransfer, ref =>
      ref.where('id', '==', requestId).limit(1)
    );
    return requestRef.get().pipe(
      map(snapshot => {
        if (snapshot.docs.length > 0) {
          return snapshot.docs[0].data();
        } else {
          return null;
        }
      })
    );
  }

  public valueChangeListener(requestId: string) {
    const requestRef = this._afs.collection<SignatureTransferDocumentType>(Db.Context.SigantureTransfer, ref =>
      ref.where('id', '==', requestId).limit(1)
    );
    return requestRef.valueChanges().pipe(
      map(snapshot => {
        if (snapshot.length > 0) {
          return snapshot[0];
        } else {
          return null;
        }
      })
    );
  }

  public async createDocument(indicator: ShopCategoryIndicatorType) {
    try {
      const newDoc = this.newTransferDocument(indicator);
      await this._afs
        .collection<SignatureTransferDocumentType>(Db.Context.SigantureTransfer)
        .doc(newDoc.id)
        .set(newDoc);
      return newDoc;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async sendSignature(docId: string, signature: string) {
    try {
      const updateCmd = { signature: signature, status: Constant.SignatureTransferStatus.Sending };
      await this._afs
        .collection<SignatureTransferDocumentType>(Db.Context.SigantureTransfer)
        .doc(docId)
        .update(updateCmd);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public async delete(docId: string) {
    try {
      await this._afs.collection<SignatureTransferDocumentType>(Db.Context.SigantureTransfer).doc(docId).delete();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public async connected(docId: string) {
    const updateCmd = { status: Constant.SignatureTransferStatus.Connected };
    await this._afs
      .collection<SignatureTransferDocumentType>(Db.Context.SigantureTransfer)
      .doc(docId)
      .update(updateCmd);
  }

  public async endConnection(docId: string) {
    this._afs
      .collection<SignatureTransferDocumentType>(Db.Context.SigantureTransfer)
      .doc(docId)
      .get()
      .pipe(take(1))
      .subscribe(async doc => {
        if (doc.exists) {
          await this.delete(docId);
        }
      });
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
