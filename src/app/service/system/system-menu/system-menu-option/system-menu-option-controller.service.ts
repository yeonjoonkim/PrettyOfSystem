import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/global/language/language.service';
export interface ISystemMenuOptionAction{
  name: string;
  isLanguageDictionary: boolean;
  isMenuManagement: boolean;
  isRoleManagement: boolean;
  isPlanManagement: boolean;
  isShopManagement: boolean;
};


@Injectable({
  providedIn: 'root'
})

export class SystemMenuOptionControllerService {
  private readonly systemMenu: string = 'system.menu.';
  private readonly menuOption = {
    transformDictionary: this.systemMenu + 'dictionary',
    menuManagement: this.systemMenu + 'menumanagement',
    roleManagement: this.systemMenu + 'rolemanagement',
    planManagement: this.systemMenu + 'subscriptionmanagement',
    shopmanagement: this.systemMenu + 'shopmanagement'
  };

  constructor(private language: LanguageService) { }

  public async getSystemMenuTop(): Promise<ISystemMenuOptionAction[]>{
    let dictionary = await this.getLanguageDictionaryOption();

    return [ dictionary ];
  }

  public async getSystemManagementButton(): Promise<ISystemMenuOptionAction[]>{
    let menuManagement = await this.getMenuManagementOption();
    let roleManagement = await this.getRoleManagementOption();
    let planManagement = await this.getPlanManagementOption();
    let shopManagement = await this.getShopManagementOption();

    return [ menuManagement, roleManagement, planManagement, shopManagement ];
  }


  private async getLanguageDictionaryOption(){
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this.menuOption.transformDictionary);
    controller.isLanguageDictionary = true;

    return controller;
  }

  private async getRoleManagementOption(){
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this.menuOption.roleManagement);
    controller.isRoleManagement = true;

    return controller;
  }

  private async getMenuManagementOption(){
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this.menuOption.menuManagement);
    controller.isMenuManagement = true;

    return controller;
  }

  private async getPlanManagementOption(){
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this.menuOption.planManagement);
    controller.isPlanManagement = true;

    return controller;
  }

  private async getShopManagementOption(){
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    controller.name = await this.language.transform(this.menuOption.shopmanagement);
    controller.isShopManagement = true;

    return controller;
  }

  public setDefaultSystemMenuOptionController(): ISystemMenuOptionAction {
    return {
      name: '',
      isMenuManagement: false,
      isLanguageDictionary: false,
      isRoleManagement: false,
      isPlanManagement: false,
      isShopManagement: false
    };
  }
}
