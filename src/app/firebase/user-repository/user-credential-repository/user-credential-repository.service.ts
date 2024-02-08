import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  ChangeNumberUserCriteriaType,
  IUser,
  ShopEmployeeManagementUserType,
  UserAssociatedShopType,
  UserSettingType,
} from 'src/app/interface';
import * as Db from 'src/app/constant/firebase-path';
import { Observable, catchError, firstValueFrom, from, map, of, switchMap, take } from 'rxjs';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { override } from 'functions/src/service/override/user/user-setting-override/user-setting-override';
import { SystemLanguageStorageService } from 'src/app/service/global/language/system-language-management/system-language-storage/system-language-storage.service';
import { TextTransformService } from 'src/app/service/global/text-transform/text-transform.service';
import * as Constant from 'src/app/constant/constant';
@Injectable({
  providedIn: 'root',
})
export class UserCredentialRepositoryService {
  private readonly _timeStamp = { lastModifiedDate: new Date() };
  private readonly _emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  constructor(
    private _afs: AngularFirestore,
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
    const userCollectionRef = this._afs.collection<IUser>(Db.Context.User, ref =>
      ref.where('id', '==', userId).limit(1)
    );

    return userCollectionRef.get().pipe(
      map(userQuerySnapshot => {
        if (userQuerySnapshot.docs.length > 0) {
          const user = userQuerySnapshot.docs[0].data();
          user.setting = this.overrideSetting(user.setting);
          return user;
        } else {
          return null;
        }
      })
    );
  }

  public subscribeUserByPhoneNumber(phoneNumber: string): Observable<IUser | null> {
    const userCollectionRef = this._afs.collection<IUser>(Db.Context.User, ref =>
      ref.where('phoneNumber', '==', phoneNumber).where('loginOption.phoneNumber', '==', true).limit(1)
    );

    return userCollectionRef.get().pipe(
      map(userQuerySnapshot => {
        if (userQuerySnapshot.docs.length > 0) {
          const user = userQuerySnapshot.docs[0].data();
          user.setting = this.overrideSetting(user.setting);
          return user;
        } else {
          return null;
        }
      })
    );
  }

  public findIdAndEmailByChangeNumberUserCriteria(criteria: ChangeNumberUserCriteriaType) {
    const formattedFirstName = this._textTransform.getTitleFormat(criteria.firstName);
    const formattedLastName = this._textTransform.getTitleFormat(criteria.lastName);
    const userCollectionRef = this._afs.collection<IUser>(Db.Context.User, ref =>
      ref
        .where('firstName', '==', formattedFirstName)
        .where('lastName', '==', formattedLastName)
        .where('phoneNumber', '==', criteria.previousPhoneNumber)
        .where('gender', '==', criteria.gender)
        .where('email', '==', criteria.email)
        .where('dob', '==', criteria.dob)
        .where('loginOption.phoneNumber', '==', true)
        .limit(1)
    );

    return userCollectionRef.get().pipe(
      map(userQuerySnapshot => {
        if (userQuerySnapshot.docs.length > 0) {
          const user = userQuerySnapshot.docs[0].data();
          user.setting = this.overrideSetting(user.setting);
          return { email: user.email, id: user.id };
        } else {
          return null;
        }
      })
    );
  }

  public subscribeValueChangeListener(id: string): Observable<IUser | null> {
    const userDocRef = this._afs.doc<IUser>(`${Db.Context.User}/${id}`);

    return userDocRef.valueChanges().pipe(
      switchMap(userData => {
        if (userData) {
          userData.setting = this.overrideSetting(userData.setting);
          return of(userData);
        } else {
          return of(null);
        }
      })
    );
  }

  public subscribeUserByEmail(email: string): Observable<IUser | null> {
    const userCollectionRef = this._afs.collection<IUser>(Db.Context.User, ref =>
      ref.where('email', '==', email).where('loginOption.email', '==', true).limit(1)
    );

    return userCollectionRef.get().pipe(
      map(userQuerySnapshot => {
        if (userQuerySnapshot.docs.length > 0) {
          const user = userQuerySnapshot.docs[0].data();
          user.setting = this.overrideSetting(user.setting);
          return user;
        } else {
          return null;
        }
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  public subscribeAssociatedShopUsers(shopId: string): Observable<ShopEmployeeManagementUserType[]> {
    return this._afs
      .collection<IUser>(Db.Context.User, ref =>
        ref.where('associatedShopIds', 'array-contains', shopId).where('isSystemAdmin', '!=', true)
      )
      .snapshotChanges()
      .pipe(
        map(users =>
          users.map(user => this.transformIntoShopEmployeeManagementUserType(user.payload.doc.data(), shopId))
        ),
        map(users => users.filter(user => user !== null) as ShopEmployeeManagementUserType[])
      );
  }

  public activeShopSpecialist(shopId: string) {
    return this._afs
      .collection<IUser>(Db.Context.User, ref =>
        ref.where('associatedShopIds', 'array-contains', shopId).where('isSystemAdmin', '!=', true)
      )
      .valueChanges()
      .pipe(
        map(users => users.map(user => this.transformIntoShopEmployeeManagementUserType(user, shopId))),
        map(users => users.filter(user => user !== null) as ShopEmployeeManagementUserType[]),
        map(users => users.filter(user => user.active)),
        map(users => users.filter(user => user.displayInSystem))
      );
  }

  public subscribeAllUser() {
    return this._afs
      .collection<IUser>(Db.Context.User, ref => ref.orderBy('isSystemAdmin'))
      .get()
      .pipe(
        switchMap(userSnapshots =>
          from(
            Promise.all(
              userSnapshots.docs.map(snapshot => {
                let user = snapshot.data();
                user.setting = this.overrideSetting(user.setting);
                return user;
              })
            )
          )
        )
      );
  }

  public async createUser(user: IUser): Promise<boolean> {
    let command = { ...user, ...this._timeStamp };
    try {
      await this._afs.collection(Db.Context.User).doc(user.id).set(command);
      await this._toaster.addSuccess();
      return true;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }
  public async updateUser(user: IUser) {
    const updateCriteria = { ...user, ...this._timeStamp };
    try {
      await this._afs.collection(Db.Context.User).doc(user.id).update(updateCriteria);
      await this._toaster.updateSuccess();
      return true;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async updateUserWithoutSuccessNotification(user: IUser) {
    const updateCriteria = { ...user, ...this._timeStamp };
    try {
      await this._afs.collection(Db.Context.User).doc(user.id).update(updateCriteria);
      return true;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async deleteUser(user: IUser) {
    try {
      await this._afs.collection(Db.Context.User).doc(user.id).delete();
      await this._toaster.deleteSuccess();
      return true;
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
      id: this._afs.createId(),
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
