import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import { FormControllerService } from 'src/app/shared/services/global/form/form-controller.service';
import { LanguageComponent } from 'src/app/component/system/language/language-management/language/language.component';
import { ILanguageSelection } from 'src/app/interface/system/language/language.interface';
import { cloneDeep } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class LanguageModalService {

  constructor(private modal: ModalController, private formCtrl: FormControllerService) {}

  public async create(){
    let form: IFormHeaderModalProp = this.formCtrl.setCreateFormHeaderModalProp();
    form.headerTitle = 'form.header.createlanguage';
    let modal = await this.modal.create({
      component: LanguageComponent,
      presentingElement: await this.modal.getTop(),
      componentProps: {form: form}
    })
    return modal;
  }

  public async edit(language: ILanguageSelection){
    let form: IFormHeaderModalProp = this.formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = language.name;
    let modal = await this.modal.create(
      {
        component: LanguageComponent,
        presentingElement: await this.modal.getTop(),
        componentProps: {
          form: cloneDeep(form),
          language: cloneDeep(language)
      }
      });

      return modal;
  }

  public async read(language: ILanguageSelection){
    let form: IFormHeaderModalProp = this.formCtrl.setReadFormHeaderModalProp();
    form.headerTitle = language.name;
    let modal = await this.modal.create(
      {
        component: LanguageComponent,
        presentingElement: await this.modal.getTop(),
        componentProps: {
          form: cloneDeep(form),
          language: cloneDeep(language)
      }
      });

    return modal;
  }
}
