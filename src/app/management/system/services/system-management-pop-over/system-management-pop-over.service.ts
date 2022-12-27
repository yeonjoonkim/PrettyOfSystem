import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/service/language.service';
import { ISystemPopOverActionCriteria, ISystemPopOverActionItem } from '../../interfaces/system-management-pop-over.interface';

@Injectable({
  providedIn: 'root'
})

export class SystemManagementPopOverService {

  constructor(private language: LanguageService) { }


  /**This function is to provide the action buttons on the Pop Over Component */
  public getSystemManagementDevelopmentButton(){
    let actionButton: ISystemPopOverActionItem[] = [];
    let keyPairValueAction = this.setKeyPairValuePopOverButton();

    actionButton.push(keyPairValueAction);
    return actionButton;
  }


  //**This function is to set the Key Pair Value Component Action */
  private setKeyPairValuePopOverButton(){
    let description = this.language.getTransformValue('systemModal.dictionary');
    let action = this.setDefaultActionCriteria();
    action.isKeyPairValueActionSheet = true;

    let keyPairValueCriteria: ISystemPopOverActionItem = {
      description: description,
      action: action
    };
    return keyPairValueCriteria;
  }


  /**This will set the default action criteria */
  private setDefaultActionCriteria(){
    let actionControlCriteria: ISystemPopOverActionCriteria = {
      isKeyPairValueActionSheet: false
    };
    return actionControlCriteria
  }


}
