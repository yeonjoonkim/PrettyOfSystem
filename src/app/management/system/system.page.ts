import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageTransformDictionaryComponent } from './components/language-transform-dictionary/language-transform-dictionary/language-transform-dictionary.component';
@Component({
  selector: 'app-system',
  templateUrl: './system.page.html',
  styleUrls: ['./system.page.scss'],
})

export class SystemPage implements OnInit {

  constructor(private popOverCtrl: PopoverController, private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  /**This will open the language dictionary as a modal */
  async openLanguageDictionary(){
    let dictionary = await this.modalCtrl.create({
      component: LanguageTransformDictionaryComponent
    })
    await dictionary.present();
  }
}
