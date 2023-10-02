import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControllerService } from '../../global/form/form-controller.service';
import { IFormHeaderModalProp, IUser, NameValuePairType } from 'src/app/interface';
import { cloneDeep } from 'lodash-es';
import { UserEditComponent } from 'src/app/component/user/user-edit/user-edit.component';

@Injectable({
  providedIn: 'root',
})
export class UserModalService {
  constructor(
    private _modal: ModalController,
    private _formCtrl: FormControllerService
  ) {}

  public async presentEdit(user: IUser, shopSelection: NameValuePairType[]) {
    let form: IFormHeaderModalProp = this._formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = user.firstName + ' ' + user.lastName;
    const modal = await this._modal.create({
      component: UserEditComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: cloneDeep(form),
        user: cloneDeep(user),
        shopSelection: cloneDeep(shopSelection),
      },
    });

    return modal;
  }

  public async dismiss() {
    await this._modal.dismiss();
  }
}
