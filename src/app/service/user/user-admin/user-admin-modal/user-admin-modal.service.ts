import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { cloneDeep } from 'lodash';
import { IFormHeaderModalProp, IUser, UserManagementCriteria } from 'src/app/interface';
import { NewSystemAdminComponent } from 'src/app/component/system/user/new-system-admin/new-system-admin.component';
import { EditUserComponent } from 'src/app/component/system/user/edit-user/edit-user.component';

@Injectable({
  providedIn: 'root',
})
export class UserAdminModalService {
  constructor(private _modal: ModalController, private _formCtrl: FormControllerService) {}

  public async presentCreateNewSystemAdmin() {
    let form: IFormHeaderModalProp = this._formCtrl.setCreateFormHeaderModalProp();
    form.headerTitle = 'label.title.newsystemadmin';
    let modal = await this._modal.create({
      component: NewSystemAdminComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: { form: form },
    });

    return modal;
  }

  public async presentEditUser(user: IUser, criteria: UserManagementCriteria) {
    const copiedCriteria = cloneDeep(criteria);
    copiedCriteria.userGridData = [];
    let form: IFormHeaderModalProp = this._formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = user.firstName + ' ' + user.lastName;
    let modal = await this._modal.create({
      component: EditUserComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: cloneDeep(form),
        config: cloneDeep(user),
        criteria: copiedCriteria,
      },
    });
    return modal;
  }

  public async dismiss() {
    await this._modal.dismiss();
  }
}
