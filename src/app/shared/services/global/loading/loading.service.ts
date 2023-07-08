import { LanguageService } from 'src/app/shared/services/global/language/language.service';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public message: string = '';


  constructor(private loadingCtrl: LoadingController) { }

  async show(msg: string){
    this.message = msg;
    let loading = await this.loadingCtrl.create({
      message: this.message,
      spinner: 'bubbles'
    });
    loading.present();
  }

  async dismiss(){
    this.loadingCtrl.dismiss();
  }

}
