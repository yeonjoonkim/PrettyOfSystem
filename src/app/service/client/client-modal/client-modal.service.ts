import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClientCreateAccountComponent } from 'src/app/component/client/client-create-account/client-create-account.component';

@Injectable({
  providedIn: 'root',
})
export class ClientModalService {
  constructor(private _modal: ModalController) {}

  public async createAccount() {
    const modal = await this._modal.create({
      component: ClientCreateAccountComponent,
      presentingElement: await this._modal.getTop(),
    });
    return modal;
  }

  public async handleDismissCreateAccount(modal: HTMLIonModalElement) {
    const dismiss = await modal.onDidDismiss();
    if (dismiss?.data) {
      return dismiss.data as string;
    } else {
      return null;
    }
  }
}
