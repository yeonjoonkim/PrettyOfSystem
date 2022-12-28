import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/service/language.service';
import { ISystemPopOverActionCriteria, ISystemPopOverActionItem } from '../../interfaces/system-management-pop-over.interface';

@Injectable({
  providedIn: 'root'
})

export class SystemManagementPopOverService {
  private readonly systemModalUi = 'system.modal.';
  private readonly modal = {
    dictionary: this.systemModalUi + 'dictionary'
  };

  private readonly systemMenuSelectionUi = 'system.menuSelection.';
  private readonly menuSelection = {
    route: this.systemMenuSelectionUi + 'route'
  };
  constructor(private language: LanguageService) { }


  /**This function is to provide the action buttons on the Pop Over Component */
  public getSystemManagementDevelopmentButton(){
    let actionButton: ISystemPopOverActionItem[] = [];
    let keyPairValueAction = this.setKeyPairValueActionButton();
    actionButton.push(keyPairValueAction);
    return actionButton;
  }

  //**This function is to set the Key Pair Value Component Action */
  private setKeyPairValueActionButton(){
    let ui = this.getUiDescription(this.modal.dictionary);
    let action = this.setDefaultActionCriteria();
    action.isKeyPairValueActionSheet = true;

    let keyPairValueCriteria: ISystemPopOverActionItem = {
      description: ui.description,
      ui: ui.uiValue,
      action: action
    };

    return keyPairValueCriteria;
  }

  public getSystementMangementMenuButton(){
    let actionButton: ISystemPopOverActionItem[] = [];
    let routeManagementMenuAction = this.setRouteManagementMenuActionButton();
    actionButton.push(routeManagementMenuAction);

    return actionButton;
  }

  private setRouteManagementMenuActionButton(){
    let ui = this.getUiDescription(this.menuSelection.route);
    let action = this.setDefaultActionCriteria();
    action.menu.isRouteManagement = true;

    let routeManagementMenuCriteria: ISystemPopOverActionItem = {
      description: ui.description,
      ui: ui.uiValue,
      action: action
    };

    return routeManagementMenuCriteria;
  }

  /**This will set the default action criteria */
  private setDefaultActionCriteria(){
    let actionControlCriteria: ISystemPopOverActionCriteria = {
      isKeyPairValueActionSheet: false,
      menu: {
        isRouteManagement: false
      }
    };
    return actionControlCriteria
  }

  private getUiDescription(uiValue: string){
    let description = this.language.getTransformValue(uiValue);
    return {uiValue: uiValue, description: description};
  }


}
