import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/service/language.service';
import { PopoverController } from '@ionic/angular';
import { SystemManagementPopOverComponent } from './components/pop-over/system-management-pop-over/system-management-pop-over.component';
import { ISystemPopOverCriteria } from './interfaces/system-management-pop-over.interface';

@Component({
  selector: 'app-system',
  templateUrl: './system.page.html',
  styleUrls: ['./system.page.scss'],
})
export class SystemPage implements OnInit {

  constructor(public language: LanguageService, private popOverCtrl: PopoverController) {
  }

  ngOnInit() {
  }

  /**This will appear the popover menu on the development icon to selection the component */
  async presentDevelopmentPopOver(e: Event){
    let criteria: ISystemPopOverCriteria = {
      isDevelopment: true
    };

    let popOver = await this.popOverCtrl.create({
      component: SystemManagementPopOverComponent,
      event: e,
      backdropDismiss: true,
      translucent: true,
      componentProps: {criteria: criteria}
    });

    await popOver.present();
  }
}
