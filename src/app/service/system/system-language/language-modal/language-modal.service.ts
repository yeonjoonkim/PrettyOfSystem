import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { LanguageComponent } from 'src/app/component/system/language/language-management/language/language.component';
import { LanguageSelectionType } from 'src/app/interface/system/language/language.interface';
import { cloneDeep } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class LanguageModalService {
  constructor(
    private _modal: ModalController,
    private _formCtrl: FormControllerService
  ) {}

  public async create() {
    let form: IFormHeaderModalProp = this._formCtrl.setCreateFormHeaderModalProp();
    form.headerTitle = 'label.title.createlanguage';
    let modal = await this._modal.create({
      component: LanguageComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: { form: form },
    });
    return modal;
  }

  public async edit(language: LanguageSelectionType) {
    let form: IFormHeaderModalProp = this._formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = language.name;
    let modal = await this._modal.create({
      component: LanguageComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: cloneDeep(form),
        language: cloneDeep(language),
      },
    });

    return modal;
  }

  public async read(language: LanguageSelectionType) {
    let form: IFormHeaderModalProp = this._formCtrl.setReadFormHeaderModalProp();
    form.headerTitle = language.name;
    let modal = await this._modal.create({
      component: LanguageComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        form: cloneDeep(form),
        language: cloneDeep(language),
      },
    });

    return modal;
  }
}
