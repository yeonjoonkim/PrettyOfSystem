import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SettingComponent } from '../shared/components/setting/setting.component';
import { LanguageService } from '../shared/services/language/service/language.service';
import { IonicUiService } from '../shared/services/ui-ionic/service/ui-ionic.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, OnDestroy{

  constructor(public language: LanguageService, public ionic: IonicUiService,
    private modalCtrl: ModalController) {
  }

  ngOnInit(){
  }

  ngOnDestroy(){
  }

  async onClickSetting(){
    const settingModal = await this.modalCtrl.create({
      component: SettingComponent,
    });
    settingModal.present();
  }

}
