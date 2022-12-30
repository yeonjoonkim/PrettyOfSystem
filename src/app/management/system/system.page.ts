import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/service/language.service';
import { PopoverController } from '@ionic/angular';
import { SystemManagementPopOverComponent } from './components/system-management-pop-over/system-management-pop-over.component';
import { ISystemPopOverActionItem, ISystemPopOverCriteria, ISystemMenuAction } from './interfaces/system-management-pop-over.interface';

@Component({
  selector: 'app-system',
  templateUrl: './system.page.html',
  styleUrls: ['./system.page.scss'],
})
export class SystemPage implements OnInit {
  public isDevelopment: boolean = false;
  public menuSelection: ISystemMenuAction = {
    isRouteManagement: false
  };

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

  async presentSysManagementMenuPopOver(e: Event){
    let criteria: ISystemPopOverCriteria = {
      isDevelopment: false
    };

    let menuPopOver = await this.popOverCtrl.create({
      component: SystemManagementPopOverComponent,
      event: e,
      backdropDismiss: true,
      translucent: true,
      componentProps: {criteria: criteria}
    });

    await menuPopOver.present();

    let event: ISystemMenuAction = await (await menuPopOver.onWillDismiss())?.data;
    this.menuSelection = event;
  }
}
