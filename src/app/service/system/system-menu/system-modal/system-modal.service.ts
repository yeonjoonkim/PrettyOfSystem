import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class SystemModalService {
  constructor(private _modalCtrl: ModalController) {}

  public async dismissModal(): Promise<void> {
    await this._modalCtrl.dismiss();
  }
}
