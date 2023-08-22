import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class SystemModalService {
  constructor(private modalCtrl: ModalController) {}

  public async dismissModal(): Promise<void> {
    await this.modalCtrl.dismiss();
  }
}
