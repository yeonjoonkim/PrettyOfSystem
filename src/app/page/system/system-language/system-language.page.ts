import { Component, OnInit } from '@angular/core';
import { ISystemMenuOptionAction, SystemMenuOptionControllerService } from 'src/app/service/system/system-menu/system-menu-option/system-menu-option-controller.service';

@Component({
  selector: 'app-system-language',
  templateUrl: './system-language.page.html',
  styleUrls: ['./system-language.page.scss'],
})
export class SystemLanguagePage implements OnInit {
  public selectedSystemMenu: ISystemMenuOptionAction = this.systemMenuOptionCtrl.setDefaultSystemMenuOptionController();
  public systemMenu: ISystemMenuOptionAction[] = [];

  constructor(private systemMenuOptionCtrl: SystemMenuOptionControllerService) {
  }

  async ngOnInit() {
    await this.setDefaultSystemMenuOption();
  }

  private async setDefaultSystemMenuOption(){
    this.systemMenu = await this.systemMenuOptionCtrl.getSystemLanguageButtons();
    let dictionary = this.systemMenu.find(r => r.isLanguageDictionary);
    this.selectedSystemMenu = dictionary !== undefined ? dictionary : this.systemMenuOptionCtrl.setDefaultSystemMenuOptionController();
  }

  /** This will process the set up the selected system menu */
  public async processSystemMenuOption(option: ISystemMenuOptionAction){
      this.selectedSystemMenu = option;
  }
}
