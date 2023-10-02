import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IFormHeaderModalProp } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { LanguageService } from 'src/app/service/global/language/language.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './app-privacy-policy.component.html',
  styleUrls: ['./app-privacy-policy.component.scss'],
})
export class AppPrivacyPolicyComponent implements OnInit {
  public form: IFormHeaderModalProp = this._form.setReadFormHeaderModalProp();

  constructor(
    private _form: FormControllerService,
    private _modalCtrl: ModalController,
    private _language: LanguageService
  ) {}

  async ngOnInit() {
    this.form.headerTitle = await this._language.transform('label.title.privacypolicy');
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }
}
