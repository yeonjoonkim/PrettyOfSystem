import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppPrivacyPolicyComponent } from 'src/app/component/agreement/app/app-privacy-policy/app-privacy-policy.component';
import { AppTermsAndConditionsComponent } from 'src/app/component/agreement/app/app-terms-and-conditions/app-terms-and-conditions.component';

@Injectable({
  providedIn: 'root',
})
export class AgreementModalService {
  constructor(private _modal: ModalController) {}

  public async presentTermsandCondition() {
    const modal = await this._modal.create({
      component: AppTermsAndConditionsComponent,
      presentingElement: await this._modal.getTop(),
    });
    await modal.present();
  }

  public async presentPrivacyPolicy() {
    const modal = await this._modal.create({
      component: AppPrivacyPolicyComponent,
      presentingElement: await this._modal.getTop(),
    });

    await modal.present();
  }
}
