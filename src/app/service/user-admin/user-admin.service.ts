import { Injectable } from '@angular/core';
import { UserAdminModalService } from './user-admin-modal/user-admin-modal.service';
import {
  CreateShopUserCriteria,
  IUser,
  NameValuePairType,
  UserManagementCriteria,
  UserSettingType,
} from 'src/app/interface';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { GlobalService } from '../global/global.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { SystemRoleRepositoryService } from 'src/app/firebase/system-repository/role/system-role-repository.service';
import { UserAdminPopoverService } from './user-admin-popover/user-admin-popover.service';
import * as Constant from 'src/app/constant/constant';
import { FirebaseService } from '../firebase/firebase.service';
@Injectable({
  providedIn: 'root',
})
export class UserAdminService {
  constructor(
    public modal: UserAdminModalService,

    public popover: UserAdminPopoverService,
    private _global: GlobalService,
    private _userRepo: UserCredentialRepositoryService,
    private _shopRepo: SystemShopConfigurationRepositoryService,
    private _roleRepo: SystemRoleRepositoryService,
    private _firebaseService: FirebaseService
  ) {}

  public async updateUser(after: IUser, before: IUser) {
    const isLoginOptionChanged = this.isLoginOptionChanged(before, after);
    if (isLoginOptionChanged) {
      const loginMethod = after.loginOption.phoneNumber ? after.phoneNumber : after.email;
      const userLoginVerification = this._userRepo.subscribeUserAccount(loginMethod);
      const isExisted = await firstValueFrom(userLoginVerification);

      if (!isExisted) {
        return await this._userRepo.updateUser(after);
      } else {
        await this.toastExsitingAccountError();
        return false;
      }
    } else {
      return await this._userRepo.updateUser(after);
    }
  }

  public getNewId() {
    return this._firebaseService.newId();
  }

  public defaultUser(): IUser {
    return {
      id: '',
      firstName: '',
      lastName: '',
      gender: Constant.Default.Gender.Male,
      isSystemAdmin: false,
      associatedShops: [],
      associatedShopIds: [],
      currentShopId: '',
      phoneNumber: '',
      email: '',
      encryptedPassword: '',
      loginOption: {
        email: false,
        phoneNumber: true,
      },
      setting: this.setDefaultUserSetting(),
      disabledAccount: false,
    };
  }

  public setDefaultUserSetting(): UserSettingType {
    return {
      preferLanguage: '',
    };
  }

  private isLoginOptionChanged(before: IUser, after: IUser) {
    if (after.loginOption.email) {
      return before.email !== after.email;
    } else {
      return before.phoneNumber !== after.phoneNumber;
    }
  }

  public async deleteUser(user: IUser) {
    this._global.loading.show();
    const result = await this._userRepo.deleteUser(user);
    await this._global.loading.dismiss();
    return result;
  }

  public async handleCreate(user: IUser, isSystemAdmin: boolean) {
    this._global.loading.show();
    user.isSystemAdmin = isSystemAdmin;
    user.encryptedPassword = user.loginOption.email ? user.encryptedPassword : '';
    try {
      if (user.loginOption.phoneNumber) {
        const existedPhoneNumber: boolean = await this.existingPhoneLoginChecker(user.phoneNumber);
        if (!existedPhoneNumber) {
          await this._userRepo.createUser(user);
          await this._global.modal.dismissRefreshAction();
        } else {
          const errorMsg = await this._global.language.transform(
            'messagefail.description.existedphoneuser'
          );
          await this._global.toast.presentError(errorMsg);
        }
      } else if (user.loginOption.email) {
        const existedEmail: boolean = await this.existingEmailLoginChecker(user.email);
        if (!existedEmail) {
          await this._userRepo.createUser(user);
          await this.modal.dismiss();
        } else {
          const errorMsg = await this._global.language.transform(
            'messagefail.description.useremailexisted'
          );
          await this._global.toast.presentError(errorMsg);
        }
      }
      await this._global.loading.dismiss();
    } catch (error) {
      console.error(error);
      await this._global.loading.dismiss();
      throw error;
    }
  }

  public async deleteAssociatedShop(user: IUser, shopId: string, shopName: string) {
    const exist = user.associatedShops.find(s => s.shopId === shopId);
    if (exist !== undefined) {
      const confirm = await this._global.confirmAlert.getDeleteConfirmationWithName(shopName);
      if (confirm) {
        user.associatedShops = user.associatedShops.filter(s => s.shopId !== shopId);
        user.associatedShopIds = user.associatedShopIds.filter(s => s !== shopId);
        user.currentShopId =
          user.currentShopId === shopId && user.associatedShops.length > 0
            ? user.associatedShops[0].shopId
            : user.currentShopId !== shopId
            ? user.currentShopId
            : '';
      }
    }

    return user;
  }

  public async getUserManagementCriteria(): Promise<UserManagementCriteria> {
    const shops = await this.getAllShops();
    const users = await this.getAllUsers();
    const roles = await this.getAllRoles();

    const createShopUserCriteria = shops.map(shop => {
      const criteria: CreateShopUserCriteria = {
        id: shop.id,
        name: shop.name,
        operatingHours: shop.operatingHours,
      };
      return criteria;
    });
    const shopFilter = shops.map(shop => {
      const namePairValue: NameValuePairType = { name: shop.name, value: shop.id };
      return namePairValue;
    });
    const roleFilter = roles.map(role => {
      const namePairValue: NameValuePairType = { name: role.name, value: role.id };
      return namePairValue;
    });
    return {
      createShopUserCriteria: createShopUserCriteria,
      shopFilter: shopFilter,
      userGridData: users,
      role: roles,
      roleFilter: roleFilter,
    };
  }

  private async getAllRoles() {
    return await lastValueFrom(this._roleRepo.getRoleConfigurations());
  }

  private async getAllUsers() {
    return await lastValueFrom(this._userRepo.subscribeAllUser());
  }

  private async getAllShops() {
    return await lastValueFrom(this._shopRepo.allShopConfigurationGetListener());
  }

  private async existingPhoneLoginChecker(phoneNumber: string) {
    const existedUser = await lastValueFrom(this._userRepo.subscribeUserByPhoneNumber(phoneNumber));
    return existedUser !== null;
  }

  private async existingEmailLoginChecker(phoneNumber: string) {
    const existedUser = await lastValueFrom(this._userRepo.subscribeUserByEmail(phoneNumber));
    return existedUser !== null;
  }

  private async toastExsitingAccountError() {
    const msg = await this._global.language.transform('messageerror.description.existingacc');
    await this._global.toast.presentError(msg);
  }
}
