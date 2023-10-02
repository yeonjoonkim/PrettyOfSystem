import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _toastCtrl: ToastController;
  private _duration: number = 2000;
  private _position: 'top' | 'bottom' | 'middle' | undefined = 'middle';

  constructor() {
    this._toastCtrl = new ToastController();
  }

  public async present(msg: string) {
    let toast = await this._toastCtrl.create({
      message: msg,
      duration: this._duration,
      position: this._position,
      cssClass: 'success-toast',
    });

    await toast.present();
  }

  public async presentError(msg: string) {
    let toast = await this._toastCtrl.create({
      message: msg,
      duration: this._duration,
      position: this._position,
      cssClass: 'error-toast',
    });

    await toast.present();
  }
}
