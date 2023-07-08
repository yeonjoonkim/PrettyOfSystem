import { Injectable } from '@angular/core';
import {StatusValidationService} from './status-validation/status-validation.service';
import { IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import * as Constant from './../../global/global-constant';

@Injectable({
  providedIn: 'root'
})
export class FormControllerService {

  constructor(public statusValiation: StatusValidationService) { }


  public setDefaultFormHeaderModalProp(): IFormHeaderModalProp{
    return {
      readOnly: false,
      action: Constant.Default.FormAction.Create,
      enabledSavebutton: false,
      headerTitle: ''
    };
  }
}
