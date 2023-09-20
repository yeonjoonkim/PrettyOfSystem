import { Injectable } from '@angular/core';
import { ShopConfigurationService } from '../system/system-shop/shop-configuration/shop-configuration.service';
import { GlobalService } from '../global/global.service';
import { UserCredentialRepositoryService } from 'src/app/firebase/user-repository/user-credential-repository/user-credential-repository.service';
import { IUser, IUserLogin } from 'src/app/interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private _global: GlobalService,
    private _systemShop: ShopConfigurationService,
    private _userRepo: UserCredentialRepositoryService
  ) {}

  public async verifyUserAccount(input: string) {
    return await this._userRepo.verifyUserAccount(input);
  }
}
