import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IFormHeaderModalProp } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { LanguageService } from 'src/app/service/global/language/language.service';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './app-terms-and-conditions.component.html',
  styleUrls: ['./app-terms-and-conditions.component.scss'],
})
export class AppTermsAndConditionsComponent implements OnInit {
  @Input() isRequiredHeader = true;
  public form: IFormHeaderModalProp = this._form.setReadFormHeaderModalProp();
  constructor(
    private _form: FormControllerService,
    private _modalCtrl: ModalController,
    private _language: LanguageService
  ) {}

  async ngOnInit() {
    this.form.headerTitle = await this._language.transform('label.title.termsandconditions');
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }
}
