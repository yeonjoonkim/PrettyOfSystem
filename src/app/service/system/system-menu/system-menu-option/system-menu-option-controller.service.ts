import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/service/global/language/language.service';

export interface ISystemMenuOptionAction {
  name: string;
  //Configuration
  isMenuManagement: boolean;
  isRoleManagement: boolean;
  //Shop
  isShopManagement: boolean;
  isShopCapacityManagement: boolean;
  //User
  isUserManagement: boolean;
  //Language
  isLanguageDictionary: boolean;
  isLanguageManagement: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SystemMenuOptionControllerService {
  private readonly _labelTitle: string = 'label.title.';
  private readonly _menuOption = {
    //Configuration
    menuManagement: this._labelTitle + 'menu',
    roleManagement: this._labelTitle + 'role',
    //Shop
    shopManagement: this._labelTitle + 'shop',
    //User
    userManagement: this._labelTitle + 'user',
    //Language
    transformDictionary: this._labelTitle + 'dictionary',
    languageManagement: this._labelTitle + 'language',
  };

  constructor(private language: LanguageService) {}

  /**Used in page/system/configuration */
  public async getSystemConfigurationButtons(): Promise<ISystemMenuOptionAction[]> {
    let menuManagement = await this.getMenuManagementOption();
    let roleManagement = await this.getRoleManagementOption();

    return [menuManagement, roleManagement];
  }

  /**Used in page/system/shop */
  public async getSystemShopButtons(): Promise<ISystemMenuOptionAction[]> {
    let shopManagement = await this.getShopManagementOption();
    let option = await this.getShopCapacity();

    return [shopManagement, option];
  }

  /**Used in page/system/user */
  public async getSystemUserButtons(): Promise<ISystemMenuOptionAction[]> {
    let userManagement = await this.getUserManagementOption();

    return [userManagement];
  }

  public async getSystemLanguageButtons(): Promise<ISystemMenuOptionAction[]> {
    let dictionary = await this.getLanguageDictionaryOption();
    let management = await this.getLanguageManagementOption();

    return [dictionary, management];
  }

  public async getSystemMenuTop(): Promise<ISystemMenuOptionAction[]> {
    let dictionary = await this.getLanguageDictionaryOption();

    return [dictionary];
  }

  private async getLanguageDictionaryOption() {
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this._menuOption.transformDictionary);
    controller.isLanguageDictionary = true;
    return controller;
  }

  private async getLanguageManagementOption() {
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this._menuOption.languageManagement);

    controller.isLanguageManagement = true;

    return controller;
  }

  private async getRoleManagementOption() {
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this._menuOption.roleManagement);
    controller.isRoleManagement = true;

    return controller;
  }

  private async getMenuManagementOption() {
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this._menuOption.menuManagement);
    controller.isMenuManagement = true;

    return controller;
  }

  private async getShopManagementOption() {
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this._menuOption.shopManagement);
    controller.isShopManagement = true;

    return controller;
  }

  private async getShopCapacity() {
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform('label.title.capacity');
    controller.isShopCapacityManagement = true;

    return controller;
  }

  private async getUserManagementOption() {
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this._menuOption.userManagement);
    controller.isUserManagement = true;

    return controller;
  }

  public setDefaultSystemMenuOptionController(): ISystemMenuOptionAction {
    return {
      name: '',
      //Configuration
      isMenuManagement: false,
      isRoleManagement: false,
      //Shop
      isShopManagement: false,
      isShopCapacityManagement: false,
      //User
      isUserManagement: false,
      //Language
      isLanguageDictionary: false,
      isLanguageManagement: false,
    };
  }
}
