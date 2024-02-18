import { Injectable, inject } from '@angular/core';
import { ChangeNumberUserCriteriaType, ChangePhoneNumberRequestDocumentType } from 'src/app/interface';
import * as Db from 'src/app/constant/firebase-path';
import { UserCredentialRepositoryService } from '../../user-repository/user-credential-repository/user-credential-repository.service';
import { firstValueFrom, map } from 'rxjs';
import { GlobalService } from 'src/app/service/global/global.service';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { UserAdminService } from 'src/app/service/user-admin/user-admin.service';
import { FirebaseApiService, createKeyMap, Query } from '../../firebase-api/firebase-api.service';

const param = createKeyMap<ChangePhoneNumberRequestDocumentType>([
  'id',
  'attempt',
  'emailAddress',
  'expiredDate',
  'newPhoneNumber',
  'status',
  'url',
  'userId',
]);
@Injectable({
  providedIn: 'root',
})
export class ChangePhoneNumberRequestRepositoryService {
  private _api = inject(FirebaseApiService);
  private readonly _email: RegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  constructor(
    private _userRepo: UserCredentialRepositoryService,
    private _global: GlobalService,
    private _toast: FirebaseToasterService,
    private _admin: UserAdminService
  ) {}

  private async getUserEmailByCriteria(criteria: ChangeNumberUserCriteriaType) {
    const subscription = this._userRepo.findIdAndEmailByChangeNumberUserCriteria(criteria);
    const verification = await firstValueFrom(subscription);
    return verification;
  }

  public async create(criteria: ChangeNumberUserCriteriaType) {
    const verification = await this.getUserEmailByCriteria(criteria);
    const emailVerification =
      verification && typeof verification.email === 'string' ? this._email.test(verification.email) : false;
    if (emailVerification && verification) {
      const doc = this.buildNewRequest(criteria, verification);
      return await this.request(doc);
    } else {
      return false;
    }
  }

  public async sumbitRequest(criteria: ChangeNumberUserCriteriaType) {
    const verification = await this.getUserEmailByCriteria(criteria);
    const emailVerification =
      verification && typeof verification.email === 'string' ? this._email.test(verification.email) : false;
    if (emailVerification && verification) {
      const doc = this.buildNewRequest(criteria, verification);
      return await this.request(doc);
    } else {
      return false;
    }
  }

  public async sumbit(newPhoneNumber: string, requestId: string) {
    const isExistingAccount = await this._userRepo.verifyUserAccount(newPhoneNumber);
    if (!isExistingAccount) {
      try {
        const submitted = await this._api.updateField<ChangePhoneNumberRequestDocumentType>(
          Db.Context.ChangePhoneNumberRequest,
          requestId,
          { status: 'Submit', newPhoneNumber: newPhoneNumber }
        );

        if (submitted) {
          await this._toast.requestSuccess();
        }

        return submitted;
      } catch (error) {
        console.error(error);
        await this._toast.requestFail(error);
        return false;
      }
    } else {
      await this._admin.toastExsitingAccountError();
      return false;
    }
  }

  public get(requestId: string) {
    return this._api.getDocument<ChangePhoneNumberRequestDocumentType>(Db.Context.ChangePhoneNumberRequest, ref =>
      ref.where(param.id, Query.Equal, requestId).limit(1)
    );
  }

  public async request(doc: ChangePhoneNumberRequestDocumentType) {
    try {
      const requested = await this._api.set<ChangePhoneNumberRequestDocumentType>(
        Db.Context.ChangePhoneNumberRequest,
        doc
      );
      await this._toast.requestSuccess();
      return requested;
    } catch (error) {
      console.error(error);
      await this._toast.requestFail(error);
      return false;
    }
  }

  private buildNewRequest(
    criteria: ChangeNumberUserCriteriaType,
    user: {
      email: string;
      id: string;
    }
  ) {
    const shopNow = this._global.date.shopTimeStamp('Australia/Brisbane');
    const expiredDate = this._global.date.addMin(shopNow, 90);
    const id = this._global.newId();
    const newRequest: ChangePhoneNumberRequestDocumentType = {
      id: id,
      userId: user.id,
      expiredDate: expiredDate,
      newPhoneNumber: '',
      emailAddress: user.email,
      status: 'Create',
      url: `${this._global.currentDomain()}/change-phone-number/${id}`,
      attempt: 0,
    };
    return newRequest;
  }
}
