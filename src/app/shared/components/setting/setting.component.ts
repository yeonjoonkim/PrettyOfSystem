import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language/service/language.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {

  constructor(public language: LanguageService, private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
