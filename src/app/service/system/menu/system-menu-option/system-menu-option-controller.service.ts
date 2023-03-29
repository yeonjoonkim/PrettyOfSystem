import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/language.service';
export interface ISystemMenuOptionAction{
  name: string;
  isLanguageDictionary: boolean;
  isMenuManagement: boolean;
  isRoleManagement: boolean;
  isPlanManagement: boolean;
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
    planmanagement: this.systemMenu + 'planmanagement'
  };

  constructor(private language: LanguageService) { }

  public async getSystemMenuOption(): Promise<ISystemMenuOptionAction[]>{
    let dictionary = await this.getLanguageDictionaryOption();
    let menuManagement = await this.getMenuManagementOption();
    let roleManagement = await this.getRoleManagementOption();
    let planmanagement = await this.getPlanManagementOption();

    return [ menuManagement, roleManagement, planmanagement, dictionary ];
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
    controller.name = await this.language.transform(this.menuOption.planmanagement);
    controller.isPlanManagement = true;

    return controller;
  }

  public setDefaultSystemMenuOptionController(): ISystemMenuOptionAction {
    return {
      name: '',
      isMenuManagement: false,
      isLanguageDictionary: false,
      isRoleManagement: false,
      isPlanManagement: false
    };
  }
}
