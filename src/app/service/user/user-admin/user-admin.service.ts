import { Injectable } from '@angular/core';
import { UserAdminModalService } from './user-admin-modal/user-admin-modal.service';
import { UserService } from '../user.service';
import {
  CreateShopUserCriteria,
  IUser,
  NameValuePairType,
  UserManagementCriteria,
} from 'src/app/interface';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import { lastValueFrom } from 'rxjs';
import { GlobalService } from '../../global/global.service';
import { SystemShopConfigurationRepositoryService } from 'src/app/firebase/system-repository/shop/system-shop-configuration-repository.service';
import { SystemRoleRepositoryService } from 'src/app/firebase/system-repository/role/system-role-repository.service';

@Injectable({
  providedIn: 'root',
})
export class UserAdminService {
  constructor(
    public modal: UserAdminModalService,
    private _userService: UserService,
    private _global: GlobalService,
    private _userRepo: UserCredentialRepositoryService,
    private _shopRepo: SystemShopConfigurationRepositoryService,
    private _roleRepo: SystemRoleRepositoryService
  ) {}

  public async handleCreate(admin: IUser, encryptedpassword: string) {
    this._global.loading.show();
    admin.isSystemAdmin = true;
    admin.encryptedPassword = admin.loginOption.email ? encryptedpassword : '';
    admin.setting.preferLanguage =
      await this._global.language.management.storage.getCurrentLanguage();
    try {
      if (admin.loginOption.phoneNumber) {
        const existedPhoneNumber: boolean = await this.existingPhoneLoginChecker(admin.phoneNumber);
        if (!existedPhoneNumber) {
          const successMsg = await this._global.language.transform('messagesuccess.title.save');
          await this._userRepo.createUser(admin);
          await this._global.toast.present(successMsg);
          await this._global.modal.dismissRefreshAction();
        } else {
          const errorMsg = await this._global.language.transform(
            'messagefail.description.existedphoneuser'
          );
          await this._global.toast.presentError(errorMsg);
        }
      } else if (admin.loginOption.email) {
        const existedEmail: boolean = await this.existingEmailLoginChecker(admin.email);
        if (!existedEmail) {
          const successMsg = await this._global.language.transform('messagesuccess.title.save');
          await this._userRepo.createUser(admin);
          await this._global.toast.present(successMsg);
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

  public encryptPassword(password: string) {
    return this._global.crypt.encrypt(password);
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
    return await lastValueFrom(this._shopRepo.getAllShopConfigurations());
  }

  private async existingPhoneLoginChecker(phoneNumber: string) {
    const existedUser = await lastValueFrom(this._userRepo.subscribeUserByPhoneNumber(phoneNumber));
    return existedUser !== null;
  }

  private async existingEmailLoginChecker(phoneNumber: string) {
    const existedUser = await lastValueFrom(this._userRepo.subscribeUserByEmail(phoneNumber));
    return existedUser !== null;
  }
}
