import { ISystemMenuAction, ISystemPopOverCriteria } from '../../interfaces/system-management-pop-over.interface';
import { Component, OnInit } from '@angular/core';
import { ISystemPopOverActionCriteria, ISystemPopOverActionItem } from '../../interfaces/system-management-pop-over.interface';
import { SystemManagementPopOverService } from '../../services/system-management-pop-over/system-management-pop-over.service';
import { SystemManagementModalService } from '../../services/system-management-modal/system-management-modal.service';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-system-management-pop-over',
  templateUrl: './system-management-pop-over.component.html',
  styleUrls: ['./system-management-pop-over.component.css']
})
export class SystemManagementPopOverComponent implements OnInit {
  public systemPopOverActionButtons: ISystemPopOverActionItem[] = [];
  public criteria: ISystemPopOverCriteria = {
    isDevelopment: false,
  };

  constructor(public navParams: NavParams, private sysManagementPopOverService: SystemManagementPopOverService,
    private sysManagementModalService: SystemManagementModalService, private popOverCtrl: PopoverController) {
      this.criteria = this.navParams.get('criteria');
  }

  ngOnInit() {
    if(this.criteria.isDevelopment){
      this.systemPopOverActionButtons = this.sysManagementPopOverService.getSystemManagementDevelopmentButton();
    }else{
      this.systemPopOverActionButtons = this.sysManagementPopOverService.getSystementMangementMenuButton();
    }
  }

  /**This on click event trigger the open Action Modal based on action criteria */
  async onClickDevelopmentActionButton(criteria: ISystemPopOverActionCriteria){
    await this.popOverCtrl.dismiss();
    await this.sysManagementModalService.openActionModal(criteria);
  }

  /**This on click event trigger the send the action to the system.page */
  async onClickMenuActionButton(action: ISystemMenuAction){
    await this.popOverCtrl.dismiss(action);
  }

}
