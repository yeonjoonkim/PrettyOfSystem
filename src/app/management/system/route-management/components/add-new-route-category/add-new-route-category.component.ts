import { LanguageTranslateService } from './../../../../../shared/services/language-translate/language-translate.service';
import { IMenu } from './../../../../../shared/interfaces/menu/menu.interface.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageService } from 'src/app/shared/services/language/service/language.service';
import { KeyPairValueDictionaryComponent } from '../../../components/key-pair-value-dictionary/key-pair-value-dictionary.component';

@Component({
  selector: 'add-new-route-category',
  templateUrl: './add-new-route-category.component.html',
  styleUrls: ['./add-new-route-category.component.scss'],
})

export class AddNewRouteCategoryComponent implements OnInit {
  public newCategory: IMenu = {
    title: 'I am writing you to express my concern regarding my current job description and title. Currently, I am working at the Star Phone Stafford branch by myself. ',
    icon: '',
    content: []
  };

  constructor(public language: LanguageService, private modalCtrl: ModalController, private languageTranslate: LanguageTranslateService) { }

  ngOnInit() {}

  async dismiss(){
    await this.modalCtrl.dismiss();
  }

  async presentUiDictionary(){
    let dictionaryModal = await this.modalCtrl.create({component: KeyPairValueDictionaryComponent});
    await dictionaryModal.present();
  }

  async save(){
    this.languageTranslate.getTranslatedSentenceAllLanguages(this.newCategory.title)
  }

}
