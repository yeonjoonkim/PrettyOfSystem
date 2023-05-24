
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

//Import Component
import { LanguageTransformDictionaryComponent } from '../../../../management/system/components/language-transform-dictionary/language-transform-dictionary/language-transform-dictionary.component';


@Injectable({
  providedIn: 'root'
})
export class SystemModalService {

  constructor(private modalCtrl: ModalController) { }

  public async presentLanguageDictionary(): Promise<void>{
    let languageDictionary = await this.modalCtrl.create({component: LanguageTransformDictionaryComponent});

    await languageDictionary.present();
  }

  public async dismissModal(): Promise<void>{
    await this.modalCtrl.dismiss();
  }
}
