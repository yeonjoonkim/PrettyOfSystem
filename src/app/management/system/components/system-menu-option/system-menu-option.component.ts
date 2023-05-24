import { ISystemMenuOptionAction } from '../../../../service/system/system-menu/system-menu-option/system-menu-option-controller.service';
import { Component, OnInit } from '@angular/core';
import { SystemMenuOptionControllerService } from '../../../../service/system/system-menu/system-menu-option/system-menu-option-controller.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'system-menu-option',
  templateUrl: './system-menu-option.component.html',
  styleUrls: ['./system-menu-option.component.scss'],
})
export class SystemMenuOptionComponent implements OnInit {
  public menuOptions!: ISystemMenuOptionAction[];

  constructor(private systemMenuCtrl: SystemMenuOptionControllerService, private popOverCtrl: PopoverController) {
  }

  async ngOnInit() {
    this.menuOptions = await this.systemMenuCtrl.getSystemMenuTop();
  }

  async onClickMenuOption(selectedOption: ISystemMenuOptionAction){
    await this.popOverCtrl.dismiss({option: selectedOption});
  }
}
