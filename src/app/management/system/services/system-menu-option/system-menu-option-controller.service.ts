import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/language.service';
export interface ISystemMenuOptionAction{
  name: string;
  isLanguageDictionary: boolean;
};


@Injectable({
  providedIn: 'root'
})

export class SystemMenuOptionControllerService {
  private readonly systemMenu: string = 'system.menu.';
  private readonly menuOption = {
    transformDictionary: this.systemMenu + 'dictionary',
  };

  constructor(private language: LanguageService) { }

  public async getSystemMenuOption(){
    let menuOptions: ISystemMenuOptionAction[] = [];
    let dictionary = await this.getLanguageDictionaryOption();
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

  private setDefaultSystemMenuOptionController(){
    let defaultController: ISystemMenuOptionAction = {
      name: '',
      isLanguageDictionary: false
    };

    return defaultController;
  }
}
