import { Component, OnInit } from '@angular/core';
import {
  ISystemMenuOptionAction,
  SystemMenuOptionControllerService,
} from 'src/app/service/system/system-menu/system-menu-option/system-menu-option-controller.service';

@Component({
  selector: 'app-system-configuration',
  templateUrl: './system-configuration.page.html',
  styleUrls: ['./system-configuration.page.scss'],
})
export class SystemConfigurationPage implements OnInit {
  public selectedSystemMenu: ISystemMenuOptionAction =
    this.systemMenuOptionCtrl.setDefaultSystemMenuOptionController();
  public systemMenu: ISystemMenuOptionAction[] = [];

  constructor(private systemMenuOptionCtrl: SystemMenuOptionControllerService) {}

  async ngOnInit() {
    await this.setDefaultSystemMenuOption();
  }

  private async setDefaultSystemMenuOption() {
    this.systemMenu = await this.systemMenuOptionCtrl.getSystemConfigurationButtons();
  }

  /** This will process the set up the selected system menu */
  public async processSystemMenuOption(option: ISystemMenuOptionAction) {
    this.selectedSystemMenu = option;
  }
}
