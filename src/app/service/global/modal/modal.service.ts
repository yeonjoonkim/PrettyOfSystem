import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as Constant from '../../../constant/constant';
import { IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import { FormControllerService } from '../form/form-controller.service';
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public ctrl: ModalController, public formCtrl: FormControllerService) {}

  public async dismiss() {
    await this.ctrl.dismiss();
  }
}
