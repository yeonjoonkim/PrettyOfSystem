import {
  ChangeNumberUserCriteriaType,
  IUser,
  ShopEmployeeManagementUserType,
  UserAssociatedShopType,
  UserSettingType,
} from 'src/app/interface';
import { Injectable, inject } from '@angular/core';
import * as Db from 'src/app/constant/firebase-path';
import { Observable, firstValueFrom, from, map, of, switchMap, take } from 'rxjs';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { override } from 'functions/src/service/override/user/user-setting-override/user-setting-override';
import { SystemLanguageStorageService } from 'src/app/service/global/language/system-language-management/system-language-storage/system-language-storage.service';
import { TextTransformService } from 'src/app/service/global/text-transform/text-transform.service';
import * as Constant from 'src/app/constant/constant';
import { FirebaseApiService, createKeyMap, Query } from '../../firebase-api/firebase-api.service';

const userParam = createKeyMap<IUser>([
  'id',
  'firstName',
  'lastName',
  'associatedShopIds',
  'disabledAccount',
  'dob',
  'email',
  'gender',
  'isSystemAdmin',
  'phoneNumber',
  'signature',
  'visitedShopIds',
]);

@Injectable({
  providedIn: 'root',
})
export class UserCredentialRepositoryService {
  private _api = inject(FirebaseApiService);
  private readonly _timeStamp = { lastModifiedDate: new Date() };
  private readonly _emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  constructor(
    private _toaster: FirebaseToasterService,
    private _textTransform: TextTransformService,
    private _systemLanguageStorage: SystemLanguageStorageService
  ) {}

  public async verifyUserAccount(input: string) {
    const isEmailUser = this._emailRegex.test(input);
    if (isEmailUser) {
      return await this.verifyUserByEmail(input);
    } else {
      return await this.verifyUserByPhone(input);
    }
  }

  public subscribeUserAccount(loginInput: string) {
    const isEmailUser = this._emailRegex.test(loginInput);
    if (isEmailUser) {
      return this.subscribeUserByEmail(loginInput);
    } else {
      return this.subscribeUserByPhoneNumber(loginInput);
    }
  }

  public subscribeUserById(userId: string): Observable<IUser | null> {
    return this._api
      .getDocument<IUser>(Db.Context.User, ref => ref.where(userParam.id, Query.Equal, userId).limit(1))
      .pipe(
        map(user => {
          if (user !== null) {
            user.setting = this.overrideSetting(user.setting);
            return user;
          } else {
            return null;
          }
        })
      );
  }

  public subscribeUserByPhoneNumber(phoneNumber: string): Observable<IUser | null> {
    return this._api
      .getDocument<IUser>(Db.Context.User, ref =>
        ref
          .where(userParam.phoneNumber, Query.Equal, phoneNumber)
          .where('loginOption.phoneNumber', '==', true)
          .limit(1)
      )
      .pipe(
        map(user => {
          if (user !== null) {
            user.setting = this.overrideSetting(user.setting);
            return user;
          } else {
            return null;
          }
        })
      );
  }

  public findIdAndEmailByChangeNumberUserCriteria(criteria: ChangeNumberUserCriteriaType) {
    return this._api
      .getDocument<IUser>(Db.Context.User, ref =>
        ref
          .where(userParam.firstName, Query.Equal, this._textTransform.getTitleFormat(criteria.firstName))
          .where(userParam.lastName, Query.Equal, this._textTransform.getTitleFormat(criteria.lastName))
          .where(userParam.phoneNumber, Query.Equal, criteria.previousPhoneNumber)
          .where(userParam.gender, Query.Equal, criteria.gender)
          .where(userParam.email, Query.Equal, criteria.email)
          .where(userParam.dob, Query.Equal, criteria.dob)
          .where('loginOption.phoneNumber', '==', true)
          .limit(1)
      )
      .pipe(
        map(doc => {
          if (doc !== null) {
            doc.setting = this.overrideSetting(doc.setting);
            return { email: doc.email, id: doc.id };
          } else {
            return null;
          }
        })
      );
  }

  public subscribeValueChangeListener(id: string): Observable<IUser | null> {
    return this._api
      .getDocument<IUser>(Db.Context.User, ref => ref.where(userParam.id, Query.Equal, id).limit(1))
      .pipe(
        map(doc => {
          if (doc !== null) {
            doc.setting = this.overrideSetting(doc.setting);
            return doc;
          } else {
            return null;
          }
        })
      );
  }

  public subscribeUserByEmail(email: string): Observable<IUser | null> {
    return this._api
      .getDocument<IUser>(Db.Context.User, ref =>
        ref.where(userParam.email, Query.Equal, email).where('loginOption.email', Query.Equal, true).limit(1)
      )
      .pipe(
        map(doc => {
          if (doc !== null) {
            doc.setting = this.overrideSetting(doc.setting);
            return doc;
          } else {
            return null;
          }
        })
      );
  }

  public subscribeAssociatedShopUsers(shopId: string): Observable<ShopEmployeeManagementUserType[]> {
    return this._api
      .snapshotChangeDocuments<IUser>(Db.Context.User, ref =>
        ref
          .where(userParam.associatedShopIds, Query.ArrayContains, shopId)
          .where(userParam.isSystemAdmin, Query.NotEqual, true)
      )
      .pipe(
        map(users => users.map(user => this.transformIntoShopEmployeeManagementUserType(user, shopId))),
        map(users => users.filter(user => user !== null) as ShopEmployeeManagementUserType[])
      );
  }

  public activeShopSpecialist(shopId: string) {
    return this._api
      .valueChangeDocuments<IUser>(Db.Context.User, ref =>
        ref
          .where(userParam.associatedShopIds, Query.ArrayContains, shopId)
          .where(userParam.isSystemAdmin, Query.NotEqual, true)
      )
      .pipe(
        map(users => users.map(user => this.transformIntoShopEmployeeManagementUserType(user, shopId))),
        map(users => users.filter(user => user !== null) as ShopEmployeeManagementUserType[]),
        map(users => users.filter(user => user.active)),
        map(users => users.filter(user => user.displayInSystem))
      );
  }

  public subscribeAllUser() {
    return this._api
      .getDocuments<IUser>(Db.Context.User, ref => ref.orderBy(userParam.isSystemAdmin))
      .pipe(
        switchMap(docs =>
          from(
            Promise.all(
              docs.map(doc => {
                doc.setting = this.overrideSetting(doc.setting);
                return doc;
              })
            )
          )
        )
      );
  }

  public async createUser(user: IUser): Promise<boolean> {
    let command = { ...user, ...this._timeStamp };
    try {
      const saved = await this._api.set<IUser>(Db.Context.User, command);
      if (saved) {
        await this._toaster.addSuccess();
      }
      return saved !== null;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }

  public async updateUser(user: IUser) {
    const updateCriteria = { ...user, ...this._timeStamp };
    try {
      const updated = await this._api.updateDocument<IUser>(Db.Context.User, updateCriteria);

      if (updated) {
        await this._toaster.updateSuccess();
      }

      return updated;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async updateUserWithoutSuccessNotification(user: IUser) {
    const updateCriteria = { ...user, ...this._timeStamp };
    try {
      return await this._api.updateDocument<IUser>(Db.Context.User, updateCriteria);
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async deleteUser(user: IUser) {
    try {
      const deleted = await this._api.delete<IUser>(Db.Context.User, user.id);

      if (deleted) {
        await this._toaster.deleteSuccess();
      }

      return deleted;
    } catch (error) {
      await this._toaster.deleteFail(error);
      console.error(error);
      return false;
    }
  }

  private async verifyUserByEmail(email: string) {
    try {
      const result = this.subscribeUserByEmail(email).pipe(take(1));
      const user = await firstValueFrom(result);
      return user !== null;
    } catch (error) {
      console.error('Error verifying user by email:', error);
      return false;
    }
  }

  private async verifyUserByPhone(phone: string): Promise<boolean> {
    try {
      const result = this.subscribeUserByPhoneNumber(phone).pipe(take(1));
      const user = await firstValueFrom(result);
      return user !== null;
    } catch (error) {
      console.error('Error verifying user by phone:', error);
      return false;
    }
  }

  private transformIntoShopEmployeeManagementUserType(
    u: IUser,
    sId: string
  ): ShopEmployeeManagementUserType | null {
    const as = u.associatedShops.find(s => s.shopId === sId) as UserAssociatedShopType;
    if (as !== undefined) {
      const result: ShopEmployeeManagementUserType = {
        userId: u.id,
        shopId: as.shopId,
        firstName: u.firstName,
        lastName: u.lastName,
        loginOption: u.loginOption,
        gender: u.gender,
        role: as.role,
        phoneNumber: u.phoneNumber,
        email: u.email,
        dob: u.dob,
        encryptedPassword: u.encryptedPassword,
        activeFrom: as.activeFrom,
        activeTo: as.activeTo,
        active: as.active,
        displayInSystem: as.displayInSystem,
        defaultRoster: as.defaultRoster,
        setting: this.overrideSetting(u.setting),
      };

      return result;
    }

    return null;
  }

  public async buildNewUser() {
    const newUser: IUser = {
      id: this._api.newId(),
      firstName: '',
      lastName: '',
      gender: 'Male',
      isSystemAdmin: false,
      associatedShops: [],
      associatedShopIds: [],
      currentShopId: '',
      setting: {
        pregnancyDueDate: null,
        preferLanguage: await this._systemLanguageStorage.getCurrentLanguage(),
        privateInsurance: null,
        medical: {
          symptomsAndDiseases: [],
          otherStatus: null,
          hasPaceMaker: false,
        },
        massage: {
          pressure: {
            rating: Constant.Massage.Pressure.Raiting.One,
            description: Constant.Massage.Pressure.Description.ExtremeSoft,
          },
          difficultChangePosition: {
            type: Constant.Massage.DifficultChangePosition.Type.NoProblem,
            description: Constant.Massage.DifficultChangePosition.Description.NoProblem,
          },
          areas: [],
          preferGender: Constant.Default.Gender.All,
        },
        emergencyContact: null,
      },
      loginOption: { phoneNumber: true, email: false },
      phoneNumber: '',
      email: '',
      encryptedPassword: '',
      disabledAccount: false,
      visitedShopIds: [],
      visitedShops: [],
      address: null,
      dob: `1990-01-01T00:00:00`,
      signature: null,
    };
    newUser.setting = this.overrideSetting(newUser.setting);
    return newUser;
  }

  private overrideSetting(setting: UserSettingType) {
    return override(setting);
  }
}
