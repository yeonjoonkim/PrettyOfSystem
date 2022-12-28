import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageService } from 'src/app/shared/services/language/service/language.service';
@Component({
  selector: 'add-new-route-category',
  templateUrl: './add-new-route-category.component.html',
  styleUrls: ['./add-new-route-category.component.scss'],
})
export class AddNewRouteCategoryComponent implements OnInit {

  constructor(public language: LanguageService, private modalCtrl: ModalController) { }

  ngOnInit() {}

  async dismiss(){
    await this.modalCtrl.dismiss();
  }

}
