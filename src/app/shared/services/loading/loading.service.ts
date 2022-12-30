import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingCtrl: LoadingController) { }

  async show(msg: string){
    let loading = await this.loadingCtrl.create({
      message: '',
      spinner: 'bubbles'
    });
    loading.present();
  }

  async dismiss(){
    this.loadingCtrl.dismiss();
  }

}
