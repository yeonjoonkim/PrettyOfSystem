import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public message: string = '';

  constructor(private _loadingCtrl: LoadingController) {}

  async show() {
    let loading = await this._loadingCtrl.create({
      spinner: 'dots',
      cssClass: 'transparent-loading',
      translucent: true,
    });
    loading.present();
  }

  async dismiss() {
    this._loadingCtrl.dismiss();
  }
}
