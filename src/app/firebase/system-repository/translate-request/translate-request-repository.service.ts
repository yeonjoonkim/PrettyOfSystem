import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { ChatGptTranslateDocumentType, ShopServiceDocumentType } from 'src/app/interface';
import * as Db from 'src/app/constant/firebase-path';
import { firstValueFrom, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslateRequestRepositoryService {
  constructor(
    private _afs: AngularFirestore,
    private _toaster: FirebaseToasterService
  ) {}

  public async request(doc: ChatGptTranslateDocumentType) {
    try {
      await this._afs
        .collection<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest)
        .doc(doc.id)
        .set(doc);
      await this._toaster.requestSuccess();
      return true;
    } catch (error) {
      await this._toaster.requestFail(error);
      console.error(error);
      return false;
    }
  }

  public shopDocumentsValueChangeListener() {
    return this._afs
      .collection<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest, ref =>
        ref.where('isSystemAdmin', '==', false).orderBy('requestDate', 'asc')
      )
      .valueChanges()
      .pipe(map(snapShots => snapShots.map(doc => doc as ChatGptTranslateDocumentType)));
  }

  public selectedShopDocumentsValueChangeListener(shopId: string) {
    return this._afs
      .collection<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest, ref =>
        ref.where('shopId', '==', shopId).where('isSystemAdmin', '==', false)
      )
      .valueChanges()
      .pipe(
        map(snapShots =>
          snapShots.map(doc => {
            const data = doc as ChatGptTranslateDocumentType;
            return data;
          })
        )
      );
  }

  public async updateDocument(doc: ChatGptTranslateDocumentType) {
    try {
      await this._afs
        .collection<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest)
        .doc(doc.id)
        .update(doc);
      await this._toaster.requestSuccess();
      return true;
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
    const collectionRef = this._afs.collection<ChatGptTranslateDocumentType>(
      Db.Context.ChatGptTranslateRequest,
      ref => ref.where('serviceId', '==', doc.id).where('format', '==', format).limit(1)
    );
    const snap = await firstValueFrom(collectionRef.get());

    if (!snap.empty) {
      return snap.docs[0].data();
    }
    return null;
  }

  private orderOptionsByMinASC(doc: ShopServiceDocumentType) {
    doc.options.sort((a, b) => a.min - b.min);
    return doc;
  }
}
