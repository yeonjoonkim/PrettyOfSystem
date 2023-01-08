
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

//Import Component
import { LanguageTransformDictionaryComponent } from '../../components/language-transform-dictionary/language-transform-dictionary/language-transform-dictionary.component';
import { LanguageManagementComponent } from './../../components/language-management/language-management/language-management.component';
@Injectable({
  providedIn: 'root'
})
export class SystemModalService {

  constructor(private modalCtrl: ModalController) { }


  public async presentLanguageDictionary(): Promise<void>{
    let languageDictionary = await this.modalCtrl.create({component: LanguageTransformDictionaryComponent});

    await languageDictionary.present();
  }


  public async presentLanguageManagement(): Promise<void>{
    let languageManagement = await this.modalCtrl.create({component: LanguageManagementComponent});

    await languageManagement.present();
  }

  public async dismissModal(): Promise<void>{
    await this.modalCtrl.dismiss();
  }
}
