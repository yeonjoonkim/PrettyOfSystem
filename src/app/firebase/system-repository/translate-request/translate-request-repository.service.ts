import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { ChatGptTranslateDocumentType, ShopServiceDocumentType } from 'src/app/interface';
import * as Db from 'src/app/constant/firebase-path';
import { firstValueFrom, map } from 'rxjs';
import * as Constant from 'src/app/constant/constant';
import { TextTransformService } from 'src/app/service/global/text-transform/text-transform.service';
@Injectable({
  providedIn: 'root',
})
export class TranslateRequestRepositoryService {
  constructor(
    private _afs: AngularFirestore,
    private _toaster: FirebaseToasterService,
    private _textTransform: TextTransformService
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

  public async delete(id: string) {
    try {
      await this._afs
        .collection<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest)
        .doc(id)
        .delete();
      return true;
    } catch (error) {
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

  public selectedShopServiceValueChangeListener(shopId: string, serviceIds: string[]) {
    return this._afs
      .collection<ChatGptTranslateDocumentType>(Db.Context.ChatGptTranslateRequest, ref =>
        ref.where('shopId', '==', shopId).where('isSystemAdmin', '==', false).where('serviceId', 'in', serviceIds)
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

  public getTitleDocument(shopId: string, serviceId: string, prop: string) {
    const result: ChatGptTranslateDocumentType = {
      id: this._afs.createId(),
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
      id: this._afs.createId(),
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
