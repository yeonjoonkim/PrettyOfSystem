import { Injectable } from '@angular/core';
import { IUser, ShopClientManagementUserType, UserVisitShopConsentType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class ShopClientAccountService {
  constructor() {}

  public isLoginOptionChange(acc: IUser, c: ShopClientManagementUserType) {
    if (acc.loginOption.email) {
      return acc.email !== c.email;
    } else {
      return acc.phoneNumber !== c.phoneNumber;
    }
  }

  public updateClientInfo(acc: IUser, c: ShopClientManagementUserType) {
    acc.firstName = c.firstName;
    acc.lastName = c.lastName;
    acc.phoneNumber = c.phoneNumber;
    acc.email = c.email;
    acc.gender = c.gender;
    acc.loginOption = c.loginOption;
    acc.signature = c.signature;
    acc.dob = c.dob;
    acc.setting = c.setting;

    return acc;
  }

  public handleDeleteVisitedShop(acc: IUser, shopId: string) {
    acc.visitedShops = acc.visitedShops.filter(s => s.shopId !== shopId);
    acc.visitedShopIds = acc.visitedShopIds.filter(s => s !== shopId);
    return acc;
  }

  public isExisitedShop(acc: IUser, c: ShopClientManagementUserType) {
    return acc.visitedShops !== undefined && acc.visitedShopIds !== undefined
      ? acc.visitedShops.some(s => s.shopId === c.shopId) && acc.visitedShopIds.some(s => s === c.shopId)
      : false;
  }

  public handleUpdateClient(acc: IUser, c: ShopClientManagementUserType) {
    acc = this.updateClientInfo(acc, c);
    acc = this.updateVisitedShop(acc, c.consent);
    return acc;
  }

  private updateVisitedShop(acc: IUser, consent: UserVisitShopConsentType) {
    const visitedShop =
      acc.visitedShops !== undefined ? acc.visitedShops.find(s => s.shopId === consent.shopId) : undefined;
    const shopId =
      acc.visitedShopIds !== undefined ? acc.visitedShopIds.find(s => s === consent.shopId) : undefined;

    //Update
    if (visitedShop !== undefined && shopId !== undefined) {
      const index = acc.visitedShops.findIndex(s => s.shopId === consent.shopId);
      acc.visitedShops[index] = consent;
    }
    //Add
    else {
      acc.visitedShops.push(consent);
      acc.visitedShopIds.push(consent.shopId);
    }
    return acc;
  }

  public createAccount(client: ShopClientManagementUserType) {
    const acc: IUser = {
      id: client.id,
      firstName: client.firstName,
      lastName: client.lastName,
      gender: client.gender,
      isSystemAdmin: false,
      associatedShops: [],
      associatedShopIds: [],
      currentShopId: '',
      setting: client.setting,
      loginOption: client.loginOption,
      phoneNumber: client.phoneNumber,
      email: client.email,
      encryptedPassword: '',
      disabledAccount: false,
      visitedShopIds: [client.shopId],
      visitedShops: [client.consent],
      address: client.address,
      dob: client.dob,
      signature: client.signature,
    };
    return acc;
  }
}
