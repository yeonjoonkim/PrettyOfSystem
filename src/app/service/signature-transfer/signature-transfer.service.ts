import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, switchMap } from 'rxjs';
import { SignatureTransferRepositoryService } from 'src/app/firebase/internal-api-repository/signature-transfer-repository/signature-transfer-repository.service';
import {
  ShopCategoryIndicatorType,
  SignatureTransferDocumentType,
  SignatureTransferStatusType,
} from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class SignatureTransferService {
  private _sessionId = new BehaviorSubject<string | null>(null);

  public sessionId$ = this._sessionId.asObservable();
  public session$: Observable<SignatureTransferDocumentType | null> = this.sessionId$.pipe(
    switchMap(id => {
      if (id !== null) {
        return this._transfer.valueChangeListener(id);
      } else {
        return of(null);
      }
    })
  );
  public status$: Observable<SignatureTransferStatusType | null> = this.session$.pipe(
    map(session => (session !== null ? session.status : null))
  );
  public siganture$: Observable<string | null> = this.session$.pipe(
    map(session => (session !== null ? session.signature : null))
  );
  constructor(private _transfer: SignatureTransferRepositoryService) {}

  public async create(indicator: ShopCategoryIndicatorType) {
    const created = await this._transfer.createDocument(indicator);
    if (created !== null) {
      this._sessionId.next(created.id);
    }
  }

  public async delete() {
    const sessionId = this._sessionId.getValue();
    if (sessionId) {
      await this._transfer.delete(sessionId);
    }
  }

  public async sync(id: string) {
    this._sessionId.next(id);
  }

  public async sendSignature(id: string, signature: string) {
    return await this._transfer.sendSignature(id, signature);
  }

  public async connected() {
    const id = this._sessionId.getValue();
    if (id) {
      await this._transfer.connected(id);
    }
  }

  public async endConnection() {
    const id = this._sessionId.getValue();
    if (id) {
      await this._transfer.endConnection(id);
    }
  }
}
