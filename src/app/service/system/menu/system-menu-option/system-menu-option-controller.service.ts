import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/language.service';
export interface ISystemMenuOptionAction{
  name: string;
  isLanguageDictionary: boolean;
  isMenuManagement: boolean;
};


@Injectable({
  providedIn: 'root'
})

export class SystemMenuOptionControllerService {
  private readonly systemMenu: string = 'system.menu.';
  private readonly menuOption = {
    transformDictionary: this.systemMenu + 'dictionary',
    menuManagement: this.systemMenu + 'menuManagement' 
  };

  constructor(private language: LanguageService) { }

  public async getSystemMenuOption(){
    let menuOptions: ISystemMenuOptionAction[] = [];
    let dictionary = await this.getLanguageDictionaryOption();
    let menuManagement = await this.getMenuManagementOption();

    menuOptions.push(menuManagement);
    menuOptions.push(dictionary);
    return menuOptions;
  }


  private async getLanguageDictionaryOption(){
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    let optionName: string = this.menuOption.transformDictionary;
    let currentLanguageOptionName: string = await this.language.transform(optionName);
    controller.isLanguageDictionary = true;
    controller.name = currentLanguageOptionName;

    return controller;
  }


  private async getMenuManagementOption(){
    let controller: ISystemMenuOptionAction = this.setDefaultSystemMenuOptionController();
    let optionName: string = this.menuOption.menuManagement;
    let currentLanguageOptionName: string = await this.language.transform(optionName);
    controller.isMenuManagement = true;
    controller.name = currentLanguageOptionName;

    return controller;
  }

  private setDefaultSystemMenuOptionController(){
    let defaultController: ISystemMenuOptionAction = {
      name: '',
      isMenuManagement: false,
      isLanguageDictionary: false
    };

    return defaultController;
  }
}
