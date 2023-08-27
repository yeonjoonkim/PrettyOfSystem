import { Injectable } from '@angular/core';
import { StatusValidationService } from './status-validation/status-validation.service';
import { IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import * as Constant from '../../../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class FormControllerService {
  constructor(public statusValiation: StatusValidationService) {}

  public setCreateFormHeaderModalProp(): IFormHeaderModalProp {
    return {
      readOnly: false,
      action: Constant.Default.FormAction.Create,
      enabledSavebutton: false,
      headerTitle: '',
    };
  }

  public setReadFormHeaderModalProp(): IFormHeaderModalProp {
    return {
      readOnly: true,
      action: Constant.Default.FormAction.Read,
      enabledSavebutton: false,
      headerTitle: '',
    };
  }

  public setEditFormHeaderModalProp(): IFormHeaderModalProp {
    return {
      readOnly: true,
      action: Constant.Default.FormAction.Edit,
      enabledSavebutton: false,
      headerTitle: '',
    };
  }
}
