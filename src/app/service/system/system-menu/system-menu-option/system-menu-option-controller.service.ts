import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/service/global/language/language.service';

export interface ISystemMenuOptionAction {
  name: string;
  //Configuration
  isMenuManagement: boolean;
  isRoleManagement: boolean;
  isPlanManagement: boolean;
  //Shop
  isShopManagement: boolean;
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
  private readonly labelTitle: string = 'label.title.';
  private readonly menuOption = {
    //Configuration
    menuManagement: this.labelTitle + 'menu',
    roleManagement: this.labelTitle + 'role',
    planManagement: this.labelTitle + 'subscription',
    //Shop
    shopManagement: this.labelTitle + 'shop',
    //User
    userManagement: this.labelTitle + 'user',
    //Language
    transformDictionary: this.labelTitle + 'dictionary',
    languageManagement: this.labelTitle + 'language',
  };

  constructor(private language: LanguageService) {}

  /**Used in page/system/configuration */
  public async getSystemConfigurationButtons(): Promise<ISystemMenuOptionAction[]> {
    let menuManagement = await this.getMenuManagementOption();
    let roleManagement = await this.getRoleManagementOption();
    let planManagement = await this.getPlanManagementOption();

    return [menuManagement, roleManagement, planManagement];
  }

  /**Used in page/system/shop */
  public async getSystemShopButtons(): Promise<ISystemMenuOptionAction[]> {
    let shopManagement = await this.getShopManagementOption();

    return [shopManagement];
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
    controller.name = await this.language.transform(this.menuOption.transformDictionary);
    controller.isLanguageDictionary = true;
    return controller;
  }

  private async getLanguageManagementOption() {
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this.menuOption.languageManagement);

    controller.isLanguageManagement = true;

    return controller;
  }

  private async getRoleManagementOption() {
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this.menuOption.roleManagement);
    controller.isRoleManagement = true;

    return controller;
  }

  private async getMenuManagementOption() {
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this.menuOption.menuManagement);
    controller.isMenuManagement = true;

    return controller;
  }

  private async getPlanManagementOption() {
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this.menuOption.planManagement);
    controller.isPlanManagement = true;

    return controller;
  }

  private async getShopManagementOption() {
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this.menuOption.shopManagement);
    controller.isShopManagement = true;

    return controller;
  }

  private async getUserManagementOption() {
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this.menuOption.userManagement);
    controller.isUserManagement = true;

    return controller;
  }

  public setDefaultSystemMenuOptionController(): ISystemMenuOptionAction {
    return {
      name: '',
      //Configuration
      isMenuManagement: false,
      isRoleManagement: false,
      isPlanManagement: false,
      //Shop
      isShopManagement: false,
      //User
      isUserManagement: false,
      //Language
      isLanguageDictionary: false,
      isLanguageManagement: false,
    };
  }
}
