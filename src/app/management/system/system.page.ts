import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/service/language.service';
import { PopoverController } from '@ionic/angular';
import { SystemManagementPopOverComponent } from './components/system-management-pop-over/system-management-pop-over.component';

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

  async presentPopover(e: Event){
    const popover = await this.popOverCtrl.create({
      component: SystemManagementPopOverComponent,
      event: e
    });

    await popover.present();
  }


}
