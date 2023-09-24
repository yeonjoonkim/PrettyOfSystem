import { Component, OnInit } from '@angular/core';
import {
  ISystemMenuOptionAction,
  SystemMenuOptionControllerService,
} from 'src/app/service/system/system-menu/system-menu-option/system-menu-option-controller.service';

@Component({
  selector: 'app-system-language',
  templateUrl: './system-language.page.html',
  styleUrls: ['./system-language.page.scss'],
})
export class SystemLanguagePage implements OnInit {
  public selectedSystemMenu: ISystemMenuOptionAction =
    this._systemMenuOptionCtrl.setDefaultSystemMenuOptionController();
  public systemMenu: ISystemMenuOptionAction[] = [];

  constructor(private _systemMenuOptionCtrl: SystemMenuOptionControllerService) {}

  async ngOnInit() {
    await this.setDefaultSystemMenuOption();
  }

  private async setDefaultSystemMenuOption() {
    this.systemMenu = await this._systemMenuOptionCtrl.getSystemLanguageButtons();
  }

  /** This will process the set up the selected system menu */
  public async processSystemMenuOption(option: ISystemMenuOptionAction) {
    this.selectedSystemMenu = option;
  }
}
