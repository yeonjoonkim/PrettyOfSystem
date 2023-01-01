import { LanguageService } from 'src/app/shared/services/language/language.service';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingCtrl: LoadingController) { }

  async show(msg: string){
    let loading = await this.loadingCtrl.create({
      message: msg,
      spinner: 'bubbles'
    });
    loading.present();
  }

  async dismiss(){
    this.loadingCtrl.dismiss();
  }

}
