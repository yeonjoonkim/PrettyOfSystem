import { TextTransformService } from './../../../../../shared/services/text-transform/text-transform.service';
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
    title: '',
    icon: '',
    description: '',
    content: []
  };
  constructor(public language: LanguageService, private modalCtrl: ModalController, private textTransform: TextTransformService) { }

  ngOnInit() {}

  preview(){
    console.log(this.newCategory)
  }

  async dismiss(){
    await this.modalCtrl.dismiss();
  }

  async presentUiDictionary(){
    let dictionaryModal = await this.modalCtrl.create({component: KeyPairValueDictionaryComponent});
    await dictionaryModal.present();
  }

  save(){
    let item = this.textTransform.getSentenceFormat(this.newCategory.title);
    console.log(item)
  }

}
