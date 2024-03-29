import { Injectable, inject } from '@angular/core';
import {
  IUser,
  ShopClientManagementUserType,
  ShopConfigurationType,
  UserSettingType,
  UserVisitShopConsentType,
} from 'src/app/interface';
import { Observable, from, map } from 'rxjs';
import { override } from 'functions/src/service/override/user/user-setting-override/user-setting-override';
import * as Db from 'src/app/constant/firebase-path';
import { DateService } from 'src/app/service/global/date/date.service';
import * as Constant from 'src/app/constant/constant';
import { FirebaseApiService, createKeyMap, Query } from '../../firebase-api/firebase-api.service';
const allGender = [Constant.Default.Gender.Female, Constant.Default.Gender.Male, Constant.Default.Gender.Other];
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
export class ClientCredentialRepositoryService {
  private _api = inject(FirebaseApiService);

  constructor(private _date: DateService) {}

  public getAssociatedClients(shopId: string): Observable<ShopClientManagementUserType[]> {
    return this._api
      .getDocuments<IUser>(Db.Context.User, ref =>
        ref.where(userParam.visitedShopIds, Query.ArrayContains, shopId).orderBy(userParam.firstName, 'asc')
      )
      .pipe(
        map(filteredUsers =>
          filteredUsers.map(user => this.transformIntoShopClientManagementUserType(user, shopId))
        ),
        map(transformedUsers => transformedUsers.filter(user => user !== null)),
        map(nonNullUsers => nonNullUsers as ShopClientManagementUserType[])
      );
  }

  public getClientsByQuery(
    shopId: string,
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    phoneNumber: string
  ): Observable<ShopClientManagementUserType[]> {
    return this._api
      .getDocuments<IUser>(Db.Context.User, ref =>
        ref.where(userParam.visitedShopIds, Query.ArrayContains, shopId).orderBy(userParam.firstName, 'asc')
      )
      .pipe(
        map(users =>
          users.filter(user => {
            const firstNameValid =
              !firstName ||
              firstName.trim().length === 0 ||
              this.queryString(user.firstName).includes(this.queryString(firstName));
            const lastNameValid =
              !lastName ||
              lastName.trim().length === 0 ||
              this.queryString(user.lastName).includes(this.queryString(lastName));
            const genderValid =
              !gender || gender.length === 0 || user.gender === gender || Constant.Default.Gender.All === gender;
            const emailValid =
              !email || email.length === 0 || this.queryString(user.email).includes(this.queryString(email));
            const phoneNumberValid =
              !phoneNumber ||
              phoneNumber.length === 0 ||
              this.queryString(user.phoneNumber).includes(this.queryString(phoneNumber));
            return firstNameValid && lastNameValid && genderValid && emailValid && phoneNumberValid;
          })
        ),
        map(filteredUsers =>
          filteredUsers.map(user => this.transformIntoShopClientManagementUserType(user, shopId))
        ),
        map(transformedUsers => transformedUsers.filter(user => user !== null)),
        map(nonNullUsers => nonNullUsers as ShopClientManagementUserType[])
      );
  }

  private queryString(str: string) {
    return str.toLowerCase().replace(/\s+/g, '');
  }

  public transformIntoShopClientManagementUserType(u: IUser, sId: string) {
    const consent = u.visitedShops.find(s => s.shopId === sId) as UserVisitShopConsentType | undefined;
    if (consent !== undefined) {
      const result: ShopClientManagementUserType = {
        id: u.id,
        shopId: consent.shopId,
        firstName: u.firstName,
        lastName: u.lastName,
        loginOption: u.loginOption,
        gender: u.gender,
        dob: u.dob,
        phoneNumber: u.phoneNumber,
        address: u.address,
        email: u.email,
        setting: this.overrideSetting(u.setting),
        consent: consent,
        signature: u.signature,
      };
      return result;
    }
    return null;
  }

  public newShopClientManagementUserType(u: IUser, shop: ShopConfigurationType) {
    const consent = u.visitedShops !== undefined ? u.visitedShops.find(s => s.shopId === shop.id) : undefined;
    if (consent !== undefined) {
      return this.transformIntoShopClientManagementUserType(u, shop.id);
    } else {
      const result: ShopClientManagementUserType = {
        id: u.id,
        shopId: shop.id,
        firstName: u.firstName,
        lastName: u.lastName,
        loginOption: u.loginOption,
        gender: u.gender,
        dob: u.dob,
        phoneNumber: u.phoneNumber,
        address: u.address !== undefined ? u.address : null,
        email: u.email,
        setting: this.overrideSetting(u.setting),
        consent: this.newConsent(shop),
        signature: u.signature,
      };
      return result;
    }
  }

  public newConsent(shopConfig: ShopConfigurationType) {
    const result: UserVisitShopConsentType = {
      shopId: shopConfig.id,
      shopName: shopConfig.name,
      isVIP: false,
      hasMarketingEmailConsent: true,
      hasMarketingSMSConsent: true,
      hasTermandConditionConsent: false,
      hasReuseForm: true,
      agreedDate: this._date.transform.formatLocalDateTime(this._date.shopNow(shopConfig.timezone)),
    };
    return result;
  }

  private overrideSetting(setting: UserSettingType) {
    return override(setting);
  }
}
