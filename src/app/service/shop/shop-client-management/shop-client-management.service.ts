import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, of, switchMap } from 'rxjs';
import { RoleConfigurationType, ShopClientManagementUserType, ShopConfigurationType } from 'src/app/interface';
import { ShopService } from '../shop.service';
import { UserService } from '../../user/user.service';
import * as Constant from 'src/app/constant/constant';
import { GlobalService } from '../../global/global.service';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import { ShopClientAccountService } from './shop-client-account/shop-client-account.service';
import { ShopClientQueryService } from './shop-client-query/shop-client-query.service';
@Injectable({
  providedIn: 'root',
})
export class ShopClientManagementService {
  public role$: Observable<RoleConfigurationType | null> = this._user.currentRole$;
  public timezone$: Observable<Constant.TimeZoneType | null> = this._shop.timezone$;
  public shopConfig$: Observable<ShopConfigurationType | null> = this._shop.config$;
  public shopId$: Observable<string | null> = this._shop.id$;

  public isMedicalRelatedShop$: Observable<boolean> = this._shop.isRelatedToMedical$;
  public isMassageShop$: Observable<boolean> = this._shop.isMassageShop$;
  public isSkinCare$: Observable<boolean> = this._shop.isSkinCare$;
  public isHairSalon$: Observable<boolean> = this._shop.isHairSalon$;
  public isPersonalTraining$: Observable<boolean> = this._shop.isPersonalTraining$;
  public isNailArt$: Observable<boolean> = this._shop.isNailArt$;
  public isMobileShop$: Observable<boolean> = this._shop.isMobileShop$;
  public isAuthorised$: Observable<boolean> = this.role$.pipe(
    switchMap(role => {
      if (role !== null) {
        return of(role.rate >= Constant.Default.RoleAccessRateType.Reception);
      } else {
        return of(false);
      }
    })
  );
  constructor(
    public query: ShopClientQueryService,
    private _shop: ShopService,
    private _user: UserService,
    private _global: GlobalService,
    private _userRepo: UserCredentialRepositoryService,
    private _shopClientAcc: ShopClientAccountService
  ) {}

  public async create(c: ShopClientManagementUserType) {
    c.firstName = this._global.textTransform.getTitleFormat(c.firstName);
    c.lastName = this._global.textTransform.getTitleFormat(c.lastName);
    const loginInput: string = c.loginOption.phoneNumber ? c.phoneNumber : c.email;

    try {
      const userAccount = this._userRepo.subscribeUserAccount(loginInput);
      let acc = await firstValueFrom(userAccount);
      //Client has account
      if (acc !== null) {
        const updatedAcc = this._shopClientAcc.handleUpdateClient(acc, c);
        return await this._userRepo.updateUser(updatedAcc);
      }
      //Client has no Account
      else {
        const newAcc = this._shopClientAcc.createAccount(c);
        return await this._userRepo.createUser(newAcc);
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public async delete(c: ShopClientManagementUserType) {
    const isAuthroisedUser = await firstValueFrom(this.isAuthorised$);
    const loginInput: string = c.loginOption.phoneNumber ? c.phoneNumber : c.email;
    if (isAuthroisedUser) {
      try {
        const clientAcc = this._userRepo.subscribeUserAccount(loginInput);
        const acc = await firstValueFrom(clientAcc);
        if (acc !== null) {
          const deletedAcc = this._shopClientAcc.handleDeleteVisitedShop(acc, c.shopId);
          return this._userRepo.updateUser(deletedAcc);
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

  public async update(c: ShopClientManagementUserType) {
    c.firstName = this._global.textTransform.getTitleFormat(c.firstName);
    c.lastName = this._global.textTransform.getTitleFormat(c.lastName);
    const isAuthroisedUser = await firstValueFrom(this.isAuthorised$);
    const loginInput: string = c.loginOption.phoneNumber ? c.phoneNumber : c.email;
    //Auth
    if (isAuthroisedUser) {
      try {
        const userAccount = this._userRepo.subscribeUserById(c.id);
        let acc = await firstValueFrom(userAccount);
        if (acc !== null) {
          const isLoginOptionChange = this._shopClientAcc.isLoginOptionChange(acc, c);

          if (isLoginOptionChange) {
            const newAccVerification = this._userRepo.subscribeUserAccount(loginInput);
            const isExistingAccount = await firstValueFrom(newAccVerification);

            if (!isExistingAccount) {
              const updatedAcc = this._shopClientAcc.handleUpdateClient(acc, c);
              return await this._userRepo.updateUser(updatedAcc);
            } else {
              await this.toastExsitingAccountError();
              return false;
            }
          } else {
            const updatedAcc = this._shopClientAcc.handleUpdateClient(acc, c);
            return await this._userRepo.updateUser(updatedAcc);
          }
        } else {
          return false;
        }
      } catch (error) {
        console.error(error);
        await this.toastError(error);
        return false;
      }
    } //UnAuth
    else {
      await this.toastAuthError();
      return false;
    }
  }

  private async toastAuthError() {
    const msg = await this._global.language.transform('messageerror.description.unauthorised');
    await this._global.toast.presentError(msg);
  }

  private async toastExsitingAccountError() {
    const msg = await this._global.language.transform('messageerror.description.existingacc');
    await this._global.toast.presentError(msg);
  }
  private async toastError(error: unknown) {
    const errorString = JSON.stringify(error);
    await this._global.toast.presentError(errorString);
  }
}
