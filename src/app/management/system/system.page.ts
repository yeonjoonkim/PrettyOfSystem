import { ISystemMenuOptionAction, SystemMenuOptionControllerService } from '../../service/system/menu/system-menu-option/system-menu-option-controller.service';
import { SystemMenuOptionComponent } from './components/system-menu-option/system-menu-option.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SystemModalService } from '../../service/system/menu/system-modal/system-modal.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.page.html',
  styleUrls: ['./system.page.scss'],
})

//TODO: Add User Role Permission to system menu option
export class SystemPage implements OnInit {
  public isSystemMenuOpen: boolean = false;
  public systemMenuIcon: string = 'chevron-down-outline';
  public selectedSystemMenu: ISystemMenuOptionAction = this.systemMenuOptionCtrl.setDefaultSystemMenuOptionController();

  constructor(private popOverCtrl: PopoverController, private systemModal: SystemModalService, private systemMenuOptionCtrl: SystemMenuOptionControllerService) {
  }

  async ngOnInit() {
    this.selectedSystemMenu.isRoleManagement = true;
  }

  /** This will open the system menu */
  public async onClickSystemMenu(event: any): Promise<void>{
    this.changeSystemMenu();
    await this.presentSystemMenuOption(event);
  }


  /** This will change the system menu icon */
  private changeSystemMenu(): void{
    this.isSystemMenuOpen = !this.isSystemMenuOpen;
    let selectedIconName: string = this.isSystemMenuOpen ? 'chevron-up-outline' : 'chevron-down-outline';
    this.systemMenuIcon = selectedIconName;
  }

  /** This will open the menu option */
  private async presentSystemMenuOption(event: any): Promise<void>{
    let systemMenu = await this.popOverCtrl.create({
      component: SystemMenuOptionComponent,
      event: event,
    });
    await systemMenu.present();
    await this.handleSystemMenuOption(systemMenu);
  }


  private async handleSystemMenuOption(systemMenu: HTMLIonPopoverElement): Promise<void>{
    let result = await systemMenu.onDidDismiss();
    let option = result?.data?.option;
    this.changeSystemMenu();
    if(option){
      this.processSystemMenuOption(option);
    }
  }

  private processSystemMenuOption(option: ISystemMenuOptionAction){
    if(option.isLanguageDictionary){
      this.systemModal.presentLanguageDictionary();
    }else{
      option.name = " / " + option.name;
      this.selectedSystemMenu = option;
    }
  }

}
