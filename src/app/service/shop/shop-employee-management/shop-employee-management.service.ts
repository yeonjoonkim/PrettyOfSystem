import { Injectable } from '@angular/core';
import { Observable, combineLatestWith, firstValueFrom, map, of, switchMap } from 'rxjs';
import {
  NameValuePairType,
  PlanConfigurationType,
  RoleConfigurationType,
  ShopConfigurationType,
  ShopEmployeeManagementUserType,
  ShopLimitedProgpressBarType,
} from 'src/app/interface';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import { SystemRoleRepositoryService } from 'src/app/firebase/system-repository/role/system-role-repository.service';
import { ShopEmployeeAccountService } from './shop-employee-account/shop-employee-account.service';
import { GlobalService } from '../../global/global.service';
import { ShopEmployeeAccountModalService } from './shop-employee-account-modal/shop-employee-account-modal.service';
import * as Constant from 'src/app/constant/constant';
import { SystemLanguageStorageService } from '../../global/language/system-language-management/system-language-storage/system-language-storage.service';
import { ShopService } from '../shop.service';
import { TextTransformService } from '../../global/text-transform/text-transform.service';
@Injectable({
  providedIn: 'root',
})
export class ShopEmployeeManagementService {
  public role$!: Observable<RoleConfigurationType | null>;
  public shopConfig$!: Observable<ShopConfigurationType | null>;
  public shopPlan$!: Observable<PlanConfigurationType | null>;
  public shopEmployees$!: Observable<ShopEmployeeManagementUserType[]>;
  public availableRoles$!: Observable<RoleConfigurationType[]>;
  public availableRoleFilter$!: Observable<NameValuePairType[]>;
  public addNewEmployee$!: Observable<boolean>;
  public progressBar$!: Observable<ShopLimitedProgpressBarType>;

  constructor(
    public modal: ShopEmployeeAccountModalService,
    private _userRepo: UserCredentialRepositoryService,
    private _roleRepo: SystemRoleRepositoryService,
    private _shopEmpAcc: ShopEmployeeAccountService,
    private _global: GlobalService,
    private _languageStorage: SystemLanguageStorageService,
    private _textTransform: TextTransformService,
    private _shop: ShopService
  ) {
    this.role$ = this._shop.role$;
    this.shopConfig$ = this._shop.config$;
    this.shopPlan$ = this._shop.plan$;
    this.shopEmployees$ = this._shop.employees$;
    this.activateAvailableRoles();
    this.activateRoleFilter();
    this.activateAddEmployee();
    this.activeProgressBar();
  }

  public async buildNewEmployee() {
    const shop = await firstValueFrom(this.shopConfig$);
    const roles = await firstValueFrom(this.availableRoles$);
    const employeeRole = roles.find(e => e.accessLevel.isEmployee);
    const currentLanguage = await this._languageStorage.getCurrentLanguage();

    if (shop !== null && employeeRole !== undefined) {
      const result: ShopEmployeeManagementUserType = {
        shopId: shop.id,
        userId: this._global.newId(),
        firstName: '',
        lastName: '',
        loginOption: { phoneNumber: true, email: false },
        gender: Constant.Default.Gender.Male,
        role: employeeRole,
        phoneNumber: '',
        email: '',
        encryptedPassword: '',
        active: true,
        activeFrom: await this._shop.timeStamp(),
        activeTo: null,
        displayInSystem: true,
        roster: shop.operatingHours,
        setting: { preferLanguage: typeof currentLanguage === 'string' ? currentLanguage : 'en' },
      };
      return result;
    } else {
      return null;
    }
  }

  public async timestamp() {
    return await this._shop.timeStamp();
  }

  public async createNewUser(se: ShopEmployeeManagementUserType) {
    se.firstName = this._textTransform.getTitleFormat(se.firstName);
    se.lastName = this._textTransform.getTitleFormat(se.lastName);
    const isAuthroisedUser = await this.isAuthorisedUser();
    const loginInput: string = se.loginOption.phoneNumber ? se.phoneNumber : se.email;
    if (isAuthroisedUser) {
      try {
        const userAccount = this._userRepo.subscribeUserAccount(loginInput);
        let acc = await firstValueFrom(userAccount);

        if (acc !== null) {
          const isExistedEmployee = acc.associatedShops.find(s => s.shopId === se.shopId);
          if (!isExistedEmployee) {
            const updatedAcc = this._shopEmpAcc.handleUpdateAssociatedShop(acc, se);
            return await this._userRepo.updateUser(updatedAcc);
          } else {
            await this.toastExsitingShopError();
            return false;
          }
        } else {
          const newAcc = this._shopEmpAcc.createAccount(se);
          const result = await this._userRepo.createUser(newAcc);
          return result;
        }
      } catch (error) {
        await this.toastError(error);
        console.error(error);
        return false;
      }
    } else {
      await this.toastAuthError();
      return false;
    }
  }

  public async deleteUser(se: ShopEmployeeManagementUserType) {
    const isAuthroisedUser = await this.isAuthorisedUser();
    const loginInput: string = se.loginOption.phoneNumber ? se.phoneNumber : se.email;

    if (isAuthroisedUser) {
      try {
        const userAccount = this._userRepo.subscribeUserAccount(loginInput);
        let acc = await firstValueFrom(userAccount);

        if (acc !== null) {
          const deletedShopAcc = this._shopEmpAcc.handleDeleteAssociatedShop(acc, se.shopId);
          const result = await this._userRepo.updateUser(deletedShopAcc);
          return result;
        } else {
          return false;
        }
      } catch (error) {
        await this.toastError(error);
        return false;
      }
    } else {
      await this.toastAuthError();
      return false;
    }
  }

  public async updateUser(se: ShopEmployeeManagementUserType) {
    se.firstName = this._textTransform.getTitleFormat(se.firstName);
    se.lastName = this._textTransform.getTitleFormat(se.lastName);
    const isAuthroisedUser = await this.isAuthorisedUser();
    const loginInput: string = se.loginOption.phoneNumber ? se.phoneNumber : se.email;
    //Auth
    if (isAuthroisedUser) {
      try {
        const userAccount = this._userRepo.subscribeUserById(se.userId);
        let acc = await firstValueFrom(userAccount);
        if (acc !== null) {
          const isLoginOptionChanged = this._shopEmpAcc.isLoginOptionChange(acc, se);

          if (isLoginOptionChanged) {
            const newAccVerification = this._userRepo.subscribeUserAccount(loginInput);
            const isExistingAccount = await firstValueFrom(newAccVerification);

            if (!isExistingAccount) {
              const updatedAssociatedAcc = this._shopEmpAcc.handleUpdateAssociatedShop(acc, se);
              const updated = this._shopEmpAcc.updateEmployeeInfo(updatedAssociatedAcc, se);
              const result = await this._userRepo.updateUser(updated);
              return result;
            } else {
              await this.toastExsitingAccountError();
              return false;
            }
          } else {
            const updatedAssociatedAcc = this._shopEmpAcc.handleUpdateAssociatedShop(acc, se);
            const updated = this._shopEmpAcc.updateEmployeeInfo(updatedAssociatedAcc, se);
            return await this._userRepo.updateUser(updated);
          }
        } else {
          return false;
        }
      } catch (error) {
        console.error(error);
        await this.toastError(error);
        return false;
      }
    }
    //UnAuth
    else {
      await this.toastAuthError();
      return false;
    }
  }

  private activateAddEmployee() {
    this.addNewEmployee$ = this.shopEmployees$.pipe(
      combineLatestWith(this.shopPlan$),
      map(([emp, plan]: [ShopEmployeeManagementUserType[], PlanConfigurationType | null]) => {
        const activeEmps = emp.filter(e => e.active);
        const result = plan?.limitedUser ? plan.limitedUser > activeEmps.length : false;

        return result;
      })
    );
  }

  private activeProgressBar() {
    this.progressBar$ = this.shopEmployees$.pipe(
      combineLatestWith(this.shopPlan$),
      switchMap(([emp, plan]: [ShopEmployeeManagementUserType[], PlanConfigurationType | null]) => {
        if (plan !== null) {
          return of({
            current: emp.filter(e => e.active).length,
            max: plan.limitedUser,
            title: 'label.title.maximumactiveemployees',
            indeterminate: false,
          });
        } else {
          return of({
            current: 0,
            max: 0,
            title: 'label.title.maximumactiveemployees',
            indeterminate: false,
          });
        }
      })
    );
  }

  private activateAvailableRoles() {
    this.availableRoles$ = this.role$.pipe(
      switchMap(role => {
        if (role !== null) {
          return this._roleRepo.subscribeAvailableRoles(role);
        } else {
          return of([]);
        }
      })
    );
  }

  private activateRoleFilter() {
    this.availableRoleFilter$ = this.availableRoles$.pipe(
      map(roles => roles.map(role => ({ name: role.name, value: role.id })))
    );
  }

  private async isAuthorisedUser() {
    return await this._shop.role.isManagerAccess();
  }

  public isManagerAccessLevel(r: RoleConfigurationType) {
    return r.accessLevel.isSystemAdmin || r.accessLevel.isAdmin || r.accessLevel.isManager;
  }

  public isReceptionAccessLevel(r: RoleConfigurationType) {
    return (
      r.accessLevel.isSystemAdmin ||
      r.accessLevel.isAdmin ||
      r.accessLevel.isManager ||
      r.accessLevel.isReception
    );
  }

  public async isHigerRole(r: RoleConfigurationType) {
    const requestRole = await firstValueFrom(this.role$);
    if (requestRole !== null) {
      return r.rate > requestRole.rate;
    } else {
      return true;
    }
  }

  private async toastAuthError() {
    const msg = await this._global.language.transform('messageerror.description.unauthorised');
    await this._global.toast.presentError(msg);
  }

  private async toastExsitingShopError() {
    const msg = await this._global.language.transform('messageerror.description.existingaccshop');
    await this._global.toast.presentError(msg);
  }

  private async toastExsitingAccountError() {
    const msg = await this._global.language.transform('messageerror.description.existingacc');
    await this._global.toast.presentError(msg);
  }

  public async toastReachedToMaximumError() {
    const msg = await this._global.language.transform(
      'messageerror.description.maximumactiveemployees'
    );
    await this._global.toast.presentError(msg);
  }

  private async toastError(error: unknown) {
    const errorString = JSON.stringify(error);
    await this._global.toast.presentError(errorString);
  }
}
