import { Injectable } from '@angular/core';
import { IUser, ShopEmployeeManagementUserType, UserAssociatedShopType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class ShopEmployeeAccountService {
  constructor() {}

  public isLoginOptionChange(acc: IUser, se: ShopEmployeeManagementUserType) {
    if (acc.loginOption.email) {
      return acc.email !== se.email;
    } else {
      return acc.phoneNumber !== se.phoneNumber;
    }
  }

  public updateEmployeeInfo(acc: IUser, se: ShopEmployeeManagementUserType) {
    acc.firstName = se.firstName;
    acc.lastName = se.lastName;
    acc.phoneNumber = se.phoneNumber;
    acc.email = se.email;
    acc.encryptedPassword = se.encryptedPassword;
    acc.gender = se.gender;
    acc.loginOption = se.loginOption;

    return acc;
  }

  public handleDeleteAssociatedShop(acc: IUser, shopId: string) {
    const as = acc.associatedShops.filter(s => s.active);
    acc.associatedShops = acc.associatedShops.filter(s => s.shopId !== shopId);
    acc.associatedShopIds = acc.associatedShopIds.filter(s => s !== shopId);
    acc.currentShopId = acc.currentShopId === shopId && as.length > 0 ? as[0].shopId : '';
    acc.disabledAccount = acc.associatedShops.filter(s => s.active).length === 0;

    return acc;
  }

  public handleUpdateAssociatedShop(acc: IUser, se: ShopEmployeeManagementUserType) {
    acc = this.updateAssociatedShop(acc, se);
    acc = this.updateAssociatedShopIds(acc, se.shopId);
    acc.disabledAccount = this.isDeactiveAccount(acc);
    acc.currentShopId = acc.currentShopId.length > 0 ? acc.currentShopId : se.shopId;

    return acc;
  }

  private updateAssociatedShop(acc: IUser, se: ShopEmployeeManagementUserType) {
    const associatedShop = acc.associatedShops.find(s => s.shopId === se.shopId);
    const shopId = acc.associatedShopIds.find(s => s === se.shopId);
    const newAssociatedShop = this.transformIntoAssociatedShopUser(acc, se);

    //Update
    if (associatedShop !== undefined && shopId !== undefined) {
      const associatedShopIndex = acc.associatedShops.findIndex(s => s.shopId === se.shopId);
      acc.associatedShops[associatedShopIndex] = newAssociatedShop;
    }
    //Add
    else {
      acc.associatedShops.push(newAssociatedShop);
    }

    return acc;
  }

  private updateAssociatedShopIds(acc: IUser, shopId: string) {
    const isExisted = acc.associatedShopIds.includes(shopId);

    // Update
    if (isExisted) {
      return acc;
    }
    // Add
    else {
      acc.associatedShopIds.push(shopId);
      return acc;
    }
  }

  private isDeactiveAccount(acc: IUser) {
    return acc.associatedShops.filter(s => s.active).length === 0;
  }

  private transformIntoAssociatedShopUser(user: IUser, se: ShopEmployeeManagementUserType) {
    const result: UserAssociatedShopType = {
      shopId: se.shopId,
      userId: user.id,
      role: se.role,
      activeFrom: se.activeFrom,
      activeTo: se.activeTo,
      active: se.active,
      displayInSystem: se.displayInSystem,
      roster: se.roster,
    };
    return result;
  }

  public createAccount(se: ShopEmployeeManagementUserType) {
    const acc: IUser = {
      id: se.userId,
      firstName: se.firstName,
      lastName: se.lastName,
      gender: se.gender,
      isSystemAdmin: false,
      associatedShops: [],
      associatedShopIds: [se.shopId],
      currentShopId: se.shopId,
      setting: se.setting,
      loginOption: se.loginOption,
      phoneNumber: se.phoneNumber,
      email: se.email,
      encryptedPassword: se.encryptedPassword,
      disabledAccount: false,
    };
    const associatedShop = this.transformIntoAssociatedShopUser(acc, se);
    acc.associatedShops = [associatedShop];

    return acc;
  }
}
