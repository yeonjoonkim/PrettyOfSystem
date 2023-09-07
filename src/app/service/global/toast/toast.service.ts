import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastCtrl: ToastController;
  private duration: number = 2000;
  private position: 'top' | 'bottom' | 'middle' | undefined = 'middle';

  constructor() {
    this.toastCtrl = new ToastController();
  }

  public async present(msg: string) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: this.duration,
      position: this.position,
    });

    await toast.present();
  }

  public async presentError(msg: string) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: this.duration,
      position: this.position,
      cssClass: 'error-toast',
    });

    await toast.present();
  }
}
