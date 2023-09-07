import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public message: string = '';

  constructor(private loadingCtrl: LoadingController) {}

  async show() {
    let loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      cssClass: 'transparent-loading',
    });
    loading.present();
  }

  async dismiss() {
    this.loadingCtrl.dismiss();
  }
}
